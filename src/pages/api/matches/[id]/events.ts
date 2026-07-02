import type { APIRoute } from 'astro'
import { getMatchEvents, createMatchEvent, deleteMatchEvent, deleteAllMatchEvents, getMatchById, isMatchEditable } from '../../../../../server/db'

export const GET: APIRoute = async ({ params }) => {
  const { id } = params
  if (!id) {
    return new Response(JSON.stringify({ error: 'Se requiere match ID' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const events = await getMatchEvents(id)
  const match = await getMatchById(id)
  const elapsedSeconds = match?.elapsed_seconds ?? 0
  return new Response(JSON.stringify({ success: true, events, elapsedSeconds }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}

export const POST: APIRoute = async ({ params, request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const { id } = params
  if (!id) {
    return new Response(JSON.stringify({ error: 'Se requiere match ID' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const editable = await isMatchEditable(id)
  if (!editable) {
    return new Response(JSON.stringify({ error: 'El plazo de 2 horas para modificar el partido ha expirado' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { action, eventId, ...eventData } = body

  if (action === 'delete' && eventId) {
    await deleteMatchEvent(eventId)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'clear') {
    await deleteAllMatchEvents(id)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  const eventIdCreated = await createMatchEvent({
    match_id: id,
    type: eventData.type,
    team: eventData.team,
    player: eventData.player || '',
    player2: eventData.player2 || '',
    minute: Number(eventData.minute) || 0,
    detail: eventData.detail || '',
    team_request_id: eventData.team_request_id || '',
  })

  return new Response(JSON.stringify({ success: true, id: eventIdCreated }), { status: 201, headers: { 'Content-Type': 'application/json' } })
}
