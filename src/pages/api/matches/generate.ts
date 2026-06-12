import type { APIRoute } from 'astro'
import { getTournamentById, getTeamsByTournament, deleteAllMatches, createMatch } from '../../../../server/db'

type Match = { round: number; home: string; away: string; label?: string }

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateRoundRobin(teamIds: string[], doubleRound: boolean, roundOffset = 0, groupLabel?: string): Match[] {
  const teams = [...teamIds]
  if (teams.length % 2 !== 0) teams.push('')

  const matches: Match[] = []
  const n = teams.length
  const totalRounds = doubleRound ? (n - 1) * 2 : n - 1

  for (let r = 0; r < totalRounds; r++) {
    const isSecondHalf = r >= n - 1
    const actualRound = isSecondHalf ? r - (n - 1) : r

    for (let i = 0; i < n / 2; i++) {
      const home = teams[i]
      const away = teams[n - 1 - i]
      if (home && away) {
        const legLabel = doubleRound ? (isSecondHalf ? 'Vuelta' : 'Ida') : null
        const jornadaNum = isSecondHalf ? r - (n - 1) + 1 : r + 1
        const label = groupLabel
          ? legLabel
            ? `${groupLabel} - ${legLabel} Jornada ${jornadaNum}`
            : `${groupLabel} - Jornada ${jornadaNum}`
          : undefined
        if (isSecondHalf || (!doubleRound && actualRound % 2 === 1)) {
          matches.push({ round: roundOffset + r + 1, home: away, away: home, label })
        } else {
          matches.push({ round: roundOffset + r + 1, home, away, label })
        }
      }
    }

    const last = teams.pop()!
    teams.splice(1, 0, last)
  }

  return matches
}

function generateBracket(teamIds: string[], playoffsTwoLegged: boolean, singleFinal: boolean, roundOffset = 0): Match[] {
  const matches: Match[] = []
  const shuffled = shuffle(teamIds)
  const size = Math.max(2, Math.pow(2, Math.floor(Math.log2(shuffled.length))))
  const participants = shuffled.slice(0, size)
  let round = 1

  const roundNames: Record<number, string> = {}
  if (size >= 8) roundNames[1] = 'Cuartos de final'
  if (size >= 4) roundNames[size >= 8 ? 2 : 1] = 'Semifinal'
  roundNames[size >= 4 ? (size >= 8 ? 3 : 2) : 1] = 'Final'

  for (let i = 0; i < participants.length; i += 2) {
    const label = roundNames[1]
    if (participants[i + 1]) {
      matches.push({ round: roundOffset + round, home: participants[i], away: participants[i + 1], label })
    } else {
      matches.push({ round: roundOffset + round, home: participants[i], away: '', label })
    }
  }

  let remaining = matches.length

  while (remaining > 1) {
    round++
    const nextCount = Math.ceil(remaining / 2)
    const label = roundNames[round] || undefined
    const isFinal = remaining === 2
    const twoLeg = playoffsTwoLegged && !(isFinal && singleFinal)

    for (let i = 0; i < nextCount; i++) {
      if (twoLeg) {
        matches.push({ round: roundOffset + round, home: '', away: '', label: `${label} - Ida` })
        matches.push({ round: roundOffset + round, home: '', away: '', label: `${label} - Vuelta` })
      } else {
        matches.push({ round: roundOffset + round, home: '', away: '', label })
      }
    }
    remaining = nextCount
  }

  return matches
}

function generateGroups(
  teamIds: string[],
  numGroups: number,
  twoLegged: boolean,
): Match[] {
  const shuffled = shuffle(teamIds)
  const groups: string[][] = Array.from({ length: numGroups }, () => [])
  const groupLabels = 'ABCDEFGHIJ'

  for (let i = 0; i < shuffled.length; i++) {
    groups[i % numGroups].push(shuffled[i])
  }

  const matches: Match[] = []
  let roundOffset = 0

  for (let g = 0; g < groups.length; g++) {
    const groupTeams = groups[g]
    if (groupTeams.length < 2) continue
    const groupLabel = `Grupo ${groupLabels[g] || (g + 1)}`
    const groupMatches = generateRoundRobin(groupTeams, twoLegged, roundOffset, groupLabel)
    matches.push(...groupMatches)
    roundOffset += twoLegged ? (groupTeams.length - 1) * 2 : groupTeams.length - 1
  }

  return matches
}

export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user
  if (!user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { tournamentId } = body

  if (!tournamentId) {
    return new Response(JSON.stringify({ error: 'tournamentId requerido' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const tournament = await getTournamentById(tournamentId)
  if (!tournament) {
    return new Response(JSON.stringify({ error: 'Torneo no encontrado' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
  }

  const teams = await getTeamsByTournament(tournamentId)
  if (teams.length < 2) {
    return new Response(JSON.stringify({ error: 'Se necesitan al menos 2 equipos en el torneo para generar el sorteo. Invitá equipos primero.' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  // Delete existing matches so we can regenerate
  await deleteAllMatches(tournamentId)
  const teamIds = teams.map(t => t.id)

  const twoLegged = tournament.two_legged === 1
  const numGroups = tournament.num_groups || 2

  let fixture: Match[] = []

  switch (tournament.format) {
    case 'liga':
      fixture = generateRoundRobin(teamIds, twoLegged)
      break
    case 'copa':
      fixture = generateBracket(teamIds, tournament.playoffs_two_legged === 1, tournament.single_final_match === 1)
      break
    case 'grupos':
      fixture = generateGroups(teamIds, numGroups, twoLegged)
      break
    default:
      fixture = generateRoundRobin(teamIds, twoLegged)
  }

  const created: Array<{ id: string; round: number; home: string; away: string }> = []

  for (const m of fixture) {
    const id = crypto.randomUUID()
    await createMatch({
      id,
      tournament_id: tournamentId,
      round: m.round,
      home_team_id: m.home || null,
      away_team_id: m.away || null,
      home_score: null,
      away_score: null,
      scheduled_date: null,
      venue: tournament.venue,
      status: 'scheduled',
      round_label: m.label || null,
    })
    created.push({ id, round: m.round, home: m.home, away: m.away })
  }

  return new Response(JSON.stringify({ success: true, matches: created, message: `${created.length} partidos generados` }), { status: 201, headers: { 'Content-Type': 'application/json' } })
}
