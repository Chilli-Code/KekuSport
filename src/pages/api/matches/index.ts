import type { APIRoute } from 'astro'
import { createMatch, updateMatch, deleteMatch } from '../../../../server/db'

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
    })
    return new Response(JSON.stringify({ success: true, id }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'update') {
    await updateMatch(data.id, data)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'delete') {
    await deleteMatch(data.id)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
