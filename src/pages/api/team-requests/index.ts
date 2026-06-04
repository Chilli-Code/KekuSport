import type { APIRoute } from 'astro'
import { createTeamRequest, getTeamRequestsByPlayer, getTeamRequestsByOwner, getTeamRequestById, updateTeamRequestStatus, getPlayerByUser, createNotification, getDb, getTeamSquadByTeamId, getTeamPendingInvitesByOwner } from '../../../../server/db'

export const GET: APIRoute = async ({ locals, url }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const teamId = url.searchParams.get('teamId')
  const scope = url.searchParams.get('scope')

  if (locals.user.role === 'tecnico') {
    if (teamId && scope === 'squad') {
      const squad = getTeamSquadByTeamId(teamId)
      return new Response(JSON.stringify({ success: true, squad }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }
    if (scope === 'pending') {
      const pending = getTeamPendingInvitesByOwner(locals.user.id)
      return new Response(JSON.stringify({ success: true, requests: pending }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }
    const requests = getTeamRequestsByOwner(locals.user.id)
    return new Response(JSON.stringify({ success: true, requests }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (locals.user.role === 'jugador') {
    const player = getPlayerByUser(locals.user.id)
    if (!player) return new Response(JSON.stringify({ success: true, requests: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    const requests = getTeamRequestsByPlayer(player.id)
    return new Response(JSON.stringify({ success: true, requests }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Prohibido' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
}

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { action, ...data } = body

  if (action === 'send') {
    if (locals.user.role !== 'jugador') {
      return new Response(JSON.stringify({ error: 'Solo los jugadores pueden enviar solicitudes' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    const player = getPlayerByUser(locals.user.id)
    if (!player) {
      return new Response(JSON.stringify({ error: 'Primero crea tu perfil de jugador' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    // A player can only be in one team
    const acceptedRequest = getDb().prepare(
      "SELECT * FROM team_requests WHERE player_id = ? AND status = 'accepted'"
    ).get(player.id)
    if (acceptedRequest) {
      return new Response(JSON.stringify({ error: 'Ya perteneces a un equipo. No puedes solicitar unirte a otro.' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const teamId = data.teamId
    if (!teamId) {
      return new Response(JSON.stringify({ error: 'Equipo requerido' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const db = getDb()
    const team = db.prepare('SELECT * FROM teams WHERE id = ?').get(teamId) as { id: string; name: string; created_by: string } | undefined
    if (!team) {
      return new Response(JSON.stringify({ error: 'Equipo no encontrado' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const existing = db.prepare(
      'SELECT * FROM team_requests WHERE player_id = ? AND team_id = ? AND status = ?'
    ).get(player.id, teamId, 'pending') as { id: string } | undefined
    if (existing) {
      return new Response(JSON.stringify({ error: 'Ya tienes una solicitud pendiente para este equipo' }), { status: 409, headers: { 'Content-Type': 'application/json' } })
    }

    const id = crypto.randomUUID()
    createTeamRequest({
      id,
      player_id: player.id,
      team_id: teamId,
      message: data.message || null,
      status: 'pending',
    })

    createNotification({
      id: crypto.randomUUID(),
      user_id: team.created_by,
      type: 'team_request',
      title: 'Nueva solicitud de jugador',
      message: `${player.name} quiere unirse a tu equipo ${team.name}`,
      related_id: id,
      read: 0,
    })

    return new Response(JSON.stringify({ success: true, id }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'respond') {
    if (locals.user.role !== 'tecnico') {
      return new Response(JSON.stringify({ error: 'Solo los técnicos pueden responder solicitudes' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    const requestId = data.id
    const status = data.status
    if (!requestId || !['accepted', 'rejected'].includes(status)) {
      return new Response(JSON.stringify({ error: 'Datos inválidos' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const req = getTeamRequestById(requestId)
    if (!req) {
      return new Response(JSON.stringify({ error: 'Solicitud no encontrada' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const db = getDb()
    const team = db.prepare('SELECT * FROM teams WHERE id = ?').get(req.team_id) as { created_by: string } | undefined
    if (!team || team.created_by !== locals.user.id) {
      return new Response(JSON.stringify({ error: 'No tienes permisos para responder esta solicitud' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    updateTeamRequestStatus(requestId, status)

    const player = db.prepare('SELECT * FROM players WHERE id = ?').get(req.player_id) as { name: string; user_id: string } | undefined
    const teamInfo = db.prepare('SELECT name FROM teams WHERE id = ?').get(req.team_id) as { name: string } | undefined

    if (player) {
      const statusMsg = status === 'accepted' ? 'aceptada' : 'rechazada'
      createNotification({
        id: crypto.randomUUID(),
        user_id: player.user_id,
        type: 'team_request_response',
        title: `Solicitud ${statusMsg}`,
        message: `Tu solicitud para unirte a ${teamInfo?.name || 'el equipo'} ha sido ${statusMsg}`,
        related_id: requestId,
        read: 0,
      })
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'invite') {
    if (locals.user.role !== 'tecnico') {
      return new Response(JSON.stringify({ error: 'Solo los técnicos pueden invitar jugadores' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    const playerId = data.playerId
    const teamId = data.teamId
    if (!playerId || !teamId) {
      return new Response(JSON.stringify({ error: 'Jugador y equipo requeridos' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const db = getDb()
    const team = db.prepare('SELECT * FROM teams WHERE id = ? AND created_by = ?').get(teamId, locals.user.id) as { id: string; name: string } | undefined
    if (!team) {
      return new Response(JSON.stringify({ error: 'Equipo no encontrado o no te pertenece' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const existing = db.prepare(
      "SELECT * FROM team_requests WHERE player_id = ? AND team_id = ? AND status = 'accepted'"
    ).get(playerId, teamId) as { id: string } | undefined
    if (existing) {
      return new Response(JSON.stringify({ error: 'Este jugador ya está en tu equipo' }), { status: 409, headers: { 'Content-Type': 'application/json' } })
    }

    const player = db.prepare('SELECT * FROM players WHERE id = ?').get(playerId) as { name: string; user_id: string } | undefined
    if (!player) {
      return new Response(JSON.stringify({ error: 'Jugador no encontrado' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const existingPending = db.prepare(
      "SELECT * FROM team_requests WHERE player_id = ? AND team_id = ? AND status = 'pending'"
    ).get(playerId, teamId) as { id: string } | undefined

    if (existingPending) {
      updateTeamRequestStatus(existingPending.id, 'accepted')
      createNotification({
        id: crypto.randomUUID(),
        user_id: player.user_id,
        type: 'team_invite',
        title: 'Invitación aceptada',
        message: `Has sido agregado al equipo ${team.name}`,
        related_id: existingPending.id,
        read: 0,
      })
      return new Response(JSON.stringify({ success: true, id: existingPending.id }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    const id = crypto.randomUUID()
    createTeamRequest({
      id,
      player_id: playerId,
      team_id: teamId,
      message: null,
      status: 'accepted',
    })

    createNotification({
      id: crypto.randomUUID(),
      user_id: player.user_id,
      type: 'team_invite',
      title: 'Invitación al equipo',
      message: `Has sido agregado al equipo ${team.name}`,
      related_id: id,
      read: 0,
    })

    return new Response(JSON.stringify({ success: true, id }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
