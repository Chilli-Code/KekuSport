import type { APIRoute } from 'astro'
import { getTournamentById, getTeamsByTournament, deleteAllMatches, createMatch } from '../../../../server/db'
import { generateRoundRobin } from './generate'

export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user
  if (!user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { tournamentId, groups } = body

  if (!tournamentId || !groups) {
    return new Response(JSON.stringify({ error: 'tournamentId y groups requeridos' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const tournament = await getTournamentById(tournamentId)
  if (!tournament) {
    return new Response(JSON.stringify({ error: 'Torneo no encontrado' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
  }

  const teams = await getTeamsByTournament(tournamentId)
  const teamIdSet = new Set(teams.map(t => t.id))
  const allTeamIds = new Set<string>()

  for (const [groupName, groupTeamIds] of Object.entries(groups as Record<string, string[]>)) {
    if (!Array.isArray(groupTeamIds)) {
      return new Response(JSON.stringify({ error: `${groupName} debe ser un array` }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    for (const tid of groupTeamIds) {
      if (!teamIdSet.has(tid)) {
        return new Response(JSON.stringify({ error: `El equipo ${tid} no pertenece al torneo` }), { status: 400, headers: { 'Content-Type': 'application/json' } })
      }
      if (allTeamIds.has(tid)) {
        return new Response(JSON.stringify({ error: `El equipo ${tid} aparece en múltiples grupos` }), { status: 400, headers: { 'Content-Type': 'application/json' } })
      }
      allTeamIds.add(tid)
    }
  }

  const twoLegged = tournament.two_legged === 1

  await deleteAllMatches(tournamentId)

  const fixture: Array<{ round: number; home: string; away: string; label?: string }> = []
  let roundOffset = 0

  const groupLabels = 'ABCDEFGHIJ'
  const sortedEntries = Object.entries(groups as Record<string, string[]>).sort(([a], [b]) => {
    const ma = a.match(/^Grupo\s([A-J])$/i)
    const mb = b.match(/^Grupo\s([A-J])$/i)
    if (ma && mb) return groupLabels.indexOf(ma[1].toUpperCase()) - groupLabels.indexOf(mb[1].toUpperCase())
    return a.localeCompare(b)
  })

  for (const [groupName, groupTeamIds] of sortedEntries) {
    if (groupTeamIds.length < 2) continue
    const groupMatches = generateRoundRobin(groupTeamIds, twoLegged, roundOffset, groupName)
    fixture.push(...groupMatches)
    roundOffset += twoLegged ? (groupTeamIds.length - 1) * 2 : groupTeamIds.length - 1
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
