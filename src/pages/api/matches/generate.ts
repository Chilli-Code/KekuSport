import type { APIRoute } from 'astro'
import { getTournamentById, getTeamsByTournament, deleteAllMatches, createMatch, getMatchesByTournament, createTeam, deleteAllTeams } from '../../../../server/db'

function generateRoundRobin(teamIds: string[], doubleRound: boolean): Array<{ round: number; home: string; away: string }> {
  const teams = [...teamIds]
  if (teams.length % 2 !== 0) teams.push('') // bye

  const rounds: Array<{ round: number; home: string; away: string }> = []
  const n = teams.length
  const totalRounds = doubleRound ? (n - 1) * 2 : n - 1

  for (let r = 0; r < totalRounds; r++) {
    const isSecondHalf = r >= n - 1
    const actualRound = isSecondHalf ? r - (n - 1) : r

    for (let i = 0; i < n / 2; i++) {
      const home = teams[i]
      const away = teams[n - 1 - i]
      if (home && away) {
        if (isSecondHalf || (!doubleRound && actualRound % 2 === 1)) {
          rounds.push({ round: r + 1, home: away, away: home })
        } else {
          rounds.push({ round: r + 1, home, away })
        }
      }
    }

    // Rotate teams (keep first fixed)
    const last = teams.pop()!
    teams.splice(1, 0, last)
  }

  return rounds
}

function generateBracket(teamIds: string[]): Array<{ round: number; home: string; away: string }> {
  const matches: Array<{ round: number; home: string; away: string }> = []
  const shuffled = [...teamIds].sort(() => Math.random() - 0.5)
  const size = Math.max(2, Math.pow(2, Math.floor(Math.log2(shuffled.length))))

  const participants = shuffled.slice(0, size)
  let round = 1

  for (let i = 0; i < participants.length; i += 2) {
    if (participants[i + 1]) {
      matches.push({ round, home: participants[i], away: participants[i + 1] })
    } else {
      matches.push({ round, home: participants[i], away: '' })
    }
  }

  let remaining = matches.length
  while (remaining > 1) {
    round++
    const nextCount = Math.ceil(remaining / 2)
    for (let i = 0; i < nextCount; i++) {
      matches.push({ round, home: '', away: '' })
    }
    remaining = nextCount
  }

  return matches
}

export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user
  if (!user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { tournamentId, mode, startDate, daysBetween, matchTime, doubleRound } = body

  if (!tournamentId) {
    return new Response(JSON.stringify({ error: 'tournamentId requerido' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const tournament = getTournamentById(tournamentId)
  if (!tournament) {
    return new Response(JSON.stringify({ error: 'Torneo no encontrado' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
  }

  let teams = getTeamsByTournament(tournamentId)

  // If no teams exist, create placeholder teams
  if (teams.length === 0) {
    for (let i = 1; i <= tournament.num_teams; i++) {
      createTeam({ id: crypto.randomUUID(), tournament_id: tournamentId, name: `Equipo ${i}`, logo: null, color: null, category: '', created_by: user.id })
    }
    teams = getTeamsByTournament(tournamentId)
  }

  // Delete existing matches
  deleteAllMatches(tournamentId)

  const teamIds = teams.map(t => t.id)
  let fixture: Array<{ round: number; home: string; away: string }> = []

  if (mode === 'manual' || !mode) {
    // manual mode: one match at a time will be added via separate API
    return new Response(JSON.stringify({ success: true, matches: [], message: 'Usa modo manual para añadir partidos uno por uno' }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  switch (tournament.format) {
    case 'liga':
      fixture = generateRoundRobin(teamIds, doubleRound)
      break
    case 'copa':
      fixture = generateBracket(teamIds)
      break
    case 'grupos':
      fixture = generateRoundRobin(teamIds, doubleRound)
      break
    default:
      fixture = generateRoundRobin(teamIds, doubleRound)
  }

  const baseDate = startDate ? new Date(startDate + 'T00:00') : new Date()
  const daysGap = Number(daysBetween) || 7
  const timeStr = matchTime || '20:00'

  const created: Array<{ id: string; round: number; home: string; away: string }> = []

  for (const m of fixture) {
    const matchDate = new Date(baseDate)
    matchDate.setDate(matchDate.getDate() + (m.round - 1) * daysGap)
    const dateStr = matchDate.toISOString().split('T')[0]
    const scheduledDate = `${dateStr}T${timeStr}:00`

    const id = crypto.randomUUID()
    createMatch({
      id,
      tournament_id: tournamentId,
      round: m.round,
      home_team_id: m.home || null,
      away_team_id: m.away || null,
      home_score: null,
      away_score: null,
      scheduled_date: scheduledDate,
      venue: tournament.venue,
      status: 'scheduled',
    })
    created.push({ id, round: m.round, home: m.home, away: m.away })
  }

  return new Response(JSON.stringify({ success: true, matches: created, message: `${created.length} partidos generados` }), { status: 201, headers: { 'Content-Type': 'application/json' } })
}
