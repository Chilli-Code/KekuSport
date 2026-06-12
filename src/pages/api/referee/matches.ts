import type { APIRoute } from 'astro'
import { getMatchesByReferee, updateMatchRefereeStatus, assignRefereeToMatch, createNotification, getMatchReferees } from '../../../../server/db'

export const GET: APIRoute = async ({ locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const matches = await getMatchesByReferee(locals.user.id)
  return new Response(JSON.stringify({ success: true, matches }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { action } = body

  if (action === 'accept') {
    const { matchRefereeId } = body
    if (!matchRefereeId) {
      return new Response(JSON.stringify({ error: 'matchRefereeId requerido' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    await updateMatchRefereeStatus(matchRefereeId, 'accepted')
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'reject') {
    const { matchRefereeId } = body
    if (!matchRefereeId) {
      return new Response(JSON.stringify({ error: 'matchRefereeId requerido' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    await updateMatchRefereeStatus(matchRefereeId, 'rejected')
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'assign') {
    if (!locals.user || locals.user.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Solo administradores' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }
    const { matchId, refereeId } = body
    if (!matchId || !refereeId) {
      return new Response(JSON.stringify({ error: 'matchId y refereeId requeridos' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const existing = await getMatchReferees(matchId)
    if (existing.some(r => r.referee_id === refereeId)) {
      return new Response(JSON.stringify({ error: 'El árbitro ya está asignado a este partido' }), { status: 409, headers: { 'Content-Type': 'application/json' } })
    }

    const id = await assignRefereeToMatch(matchId, refereeId)

    await createNotification({
      id: crypto.randomUUID(),
      user_id: refereeId,
      type: 'match_assignment',
      title: 'Nuevo partido asignado',
      message: 'Te han asignado un nuevo partido. Revisa tu panel para aceptarlo o rechazarlo.',
      related_id: matchId,
      read: 0,
    })

    return new Response(JSON.stringify({ success: true, id }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
