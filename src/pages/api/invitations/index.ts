import type { APIRoute } from 'astro'
import { createInvitation, getInvitationsByTournament, getInvitationsByUser, acceptInvitation, updateInvitationStatus, getPendingInvitation } from '../../../../server/db'

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { action, ...data } = body

  if (action === 'create') {
    const existing = getPendingInvitation(data.tournamentId, data.teamId)
    if (existing) {
      return new Response(JSON.stringify({ success: false, error: 'Ya existe una invitación pendiente para este equipo' }), { status: 409, headers: { 'Content-Type': 'application/json' } })
    }
    const id = crypto.randomUUID()
    createInvitation({
      id,
      tournament_id: data.tournamentId,
      team_id: data.teamId,
      status: 'pending',
      created_by: locals.user.id,
    })
    return new Response(JSON.stringify({ success: true, id }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'listByTournament') {
    const invitations = getInvitationsByTournament(data.tournamentId)
    return new Response(JSON.stringify({ success: true, invitations }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'listByUser') {
    const invitations = getInvitationsByUser(locals.user.id)
    return new Response(JSON.stringify({ success: true, invitations }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'accept') {
    acceptInvitation(data.id)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'reject') {
    updateInvitationStatus(data.id, 'rejected')
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
