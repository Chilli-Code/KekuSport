import type { APIRoute } from 'astro'
import { createMatch, updateMatch, deleteMatch, getMatchById, getMatchesByTournamentWithTeams, isMatchEditable, recalculateTournamentStandings } from '../../../../server/db'

export const GET: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const url = new URL(request.url)
  const tournamentId = url.searchParams.get('tournamentId')

  if (!tournamentId) {
    return new Response(JSON.stringify({ error: 'Se requiere tournamentId' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const matches = await getMatchesByTournamentWithTeams(tournamentId)
  return new Response(JSON.stringify({ success: true, matches }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { action, ...data } = body

  if (action === 'create') {
    const id = crypto.randomUUID()
    await createMatch({
      id,
      tournament_id: data.tournamentId,
      round: Number(data.round) || 1,
      home_team_id: data.homeTeamId || null,
      away_team_id: data.awayTeamId || null,
      home_score: null,
      away_score: null,
      scheduled_date: data.scheduledDate || null,
      venue: data.venue || null,
      status: 'scheduled',
      round_label: data.roundLabel || null,
    })
    return new Response(JSON.stringify({ success: true, id }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'update') {
    if (data.id) {
      const editable = await isMatchEditable(data.id)
      if (!editable) {
        return new Response(JSON.stringify({ error: 'El plazo de 2 horas para modificar el partido ha expirado' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
      }
    }
    const dbData: Record<string, unknown> = { id: data.id }
    const map: Record<string, string> = { homeTeamId: 'home_team_id', awayTeamId: 'away_team_id', scheduledDate: 'scheduled_date', homeScore: 'home_score', awayScore: 'away_score', elapsedSeconds: 'elapsed_seconds' }
    for (const [key, val] of Object.entries(data)) {
      if (key === 'action' || key === 'id') continue
      dbData[map[key] || key] = val
    }
    await updateMatch(data.id, dbData)
    const match = await getMatchById(data.id)
    if (match) {
      await recalculateTournamentStandings(match.tournament_id)
    }
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'delete') {
    if (data.id) {
      const editable = await isMatchEditable(data.id)
      if (!editable) {
        return new Response(JSON.stringify({ error: 'El plazo de 2 horas para modificar el partido ha expirado' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
      }
    }
    await deleteMatch(data.id)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
