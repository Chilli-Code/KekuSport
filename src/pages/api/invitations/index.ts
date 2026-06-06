import type { APIRoute } from 'astro'
import { createInvitation, getInvitationsByTournament, getInvitationsByUser, acceptInvitation, updateInvitationStatus, getPendingInvitation, getTournamentById, getTeamById, getInvitationById, createNotification } from '../../../../server/db'

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { action, ...data } = body

  if (action === 'create') {
    const existing = await getPendingInvitation(data.tournamentId, data.teamId)
    if (existing) {
      return new Response(JSON.stringify({ success: false, error: 'Ya existe una invitación pendiente para este equipo' }), { status: 409, headers: { 'Content-Type': 'application/json' } })
    }
    const id = crypto.randomUUID()
    await createInvitation({
      id,
      tournament_id: data.tournamentId,
      team_id: data.teamId,
      status: 'pending',
      created_by: locals.user.id,
    })

    const [tournament, team] = await Promise.all([
      getTournamentById(data.tournamentId),
      getTeamById(data.teamId),
    ])

    if (tournament) {
      await createNotification({
        id: crypto.randomUUID(),
        user_id: tournament.created_by,
        type: 'tournament_request',
        title: 'Nueva solicitud de inscripción',
        message: `El equipo ${team?.name || 'desconocido'} quiere inscribirse en ${tournament.name}`,
        related_id: id,
        read: 0,
      })
    }

    return new Response(JSON.stringify({ success: true, id }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'listByTournament') {
    const invitations = await getInvitationsByTournament(data.tournamentId)
    return new Response(JSON.stringify({ success: true, invitations }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'listByUser') {
    const invitations = await getInvitationsByUser(locals.user.id)
    return new Response(JSON.stringify({ success: true, invitations }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'accept') {
    const inv = await getInvitationById(data.id)
    await acceptInvitation(data.id)

    if (inv) {
      const [team, tournament] = await Promise.all([
        getTeamById(inv.team_id),
        getTournamentById(inv.tournament_id),
      ])
      if (team?.created_by) {
        await createNotification({
          id: crypto.randomUUID(),
          user_id: team.created_by,
          type: 'tournament_accepted',
          title: 'Inscripción aceptada',
          message: `Tu equipo ha sido aceptado en el torneo ${tournament?.name || 'desconocido'}`,
          related_id: data.id,
          read: 0,
        })
      }
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'reject') {
    await updateInvitationStatus(data.id, 'rejected')
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
