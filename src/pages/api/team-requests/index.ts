import type { APIRoute } from 'astro'
import { createTeamRequest, deleteTeamRequest, getTeamRequestsByPlayer, getTeamRequestsByPlayerWithTeam, getTeamRequestsByOwner, getTeamRequestById, updateTeamRequestStatus, getPlayerByUser, createNotification, getDb, getTeamSquadByTeamId, getTeamPendingInvitesByOwner, addPlayerToTeam } from '../../../../server/db'

export const GET: APIRoute = async ({ locals, url }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const teamId = url.searchParams.get('teamId')
  const scope = url.searchParams.get('scope')

  if (locals.user.role === 'tecnico') {
    if (teamId && scope === 'squad') {
      const squad = await getTeamSquadByTeamId(teamId)
      return new Response(JSON.stringify({ success: true, squad }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }
    if (scope === 'pending') {
      const pending = await getTeamPendingInvitesByOwner(locals.user.id)
      return new Response(JSON.stringify({ success: true, requests: pending }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }
    const requests = await getTeamRequestsByOwner(locals.user.id)
    return new Response(JSON.stringify({ success: true, requests }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (locals.user.role === 'jugador') {
    try {
      const player = await getPlayerByUser(locals.user.id)
      if (!player) return new Response(JSON.stringify({ success: true, requests: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } })
      const requests = await getTeamRequestsByPlayerWithTeam(player.id)
      return new Response(JSON.stringify({ success: true, requests }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    } catch (e: any) {
      return new Response(JSON.stringify({ success: false, error: e?.message || 'Error interno' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
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

    const player = await getPlayerByUser(locals.user.id)
    if (!player) {
      return new Response(JSON.stringify({ error: 'Primero crea tu perfil de jugador' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const db = await getDb()
    const acceptedRequest = (await db.execute(
      "SELECT * FROM team_requests WHERE player_id = ? AND status = 'accepted'",
      [player.id]
    )).rows[0]
    if (acceptedRequest) {
      return new Response(JSON.stringify({ error: 'Ya perteneces a un equipo. No puedes solicitar unirte a otro.' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const teamId = data.teamId
    if (!teamId) {
      return new Response(JSON.stringify({ error: 'Equipo requerido' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const team = (await db.execute('SELECT * FROM teams WHERE id = ?', [teamId])).rows[0] as unknown as { id: string; name: string; created_by: string } | undefined
    if (!team) {
      return new Response(JSON.stringify({ error: 'Equipo no encontrado' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const existing = (await db.execute(
      'SELECT * FROM team_requests WHERE player_id = ? AND team_id = ? AND status = ?',
      [player.id, teamId, 'pending']
    )).rows[0] as unknown as { id: string } | undefined
    if (existing) {
      return new Response(JSON.stringify({ error: 'Ya tienes una solicitud pendiente para este equipo' }), { status: 409, headers: { 'Content-Type': 'application/json' } })
    }

    const id = crypto.randomUUID()
    await createTeamRequest({
      id,
      player_id: player.id,
      team_id: teamId,
      message: data.message || null,
      status: 'pending',
      type: 'request',
    })

    await createNotification({
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

    const req = await getTeamRequestById(requestId)
    if (!req) {
      return new Response(JSON.stringify({ error: 'Solicitud no encontrada' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const db = await getDb()
    const team = (await db.execute('SELECT * FROM teams WHERE id = ?', [req.team_id])).rows[0] as unknown as { created_by: string } | undefined
    if (!team || team.created_by !== locals.user.id) {
      return new Response(JSON.stringify({ error: 'No tienes permisos para responder esta solicitud' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    await updateTeamRequestStatus(requestId, status)

    const player = (await db.execute('SELECT * FROM players WHERE id = ?', [req.player_id])).rows[0] as unknown as { name: string; user_id: string } | undefined
    const teamInfo = (await db.execute('SELECT name FROM teams WHERE id = ?', [req.team_id])).rows[0] as unknown as { name: string } | undefined

    if (player) {
      const statusMsg = status === 'accepted' ? 'aceptada' : 'rechazada'
      await createNotification({
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

  if (action === 'add-player') {
    if (locals.user.role !== 'tecnico') {
      return new Response(JSON.stringify({ error: 'Solo los técnicos pueden agregar jugadores' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    const teamId = data.teamId
    const name = (data.name || '').trim()
    const position = (data.position || '').trim()
    if (!teamId || !name || !position) {
      return new Response(JSON.stringify({ error: 'Nombre, posición y equipo son requeridos' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const db = await getDb()
    const team = (await db.execute('SELECT * FROM teams WHERE id = ? AND created_by = ?', [teamId, locals.user.id])).rows[0] as unknown as { id: string; name: string } | undefined
    if (!team) {
      return new Response(JSON.stringify({ error: 'Equipo no encontrado o no te pertenece' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const result = await addPlayerToTeam({
      id: data.id || crypto.randomUUID(),
      name,
      number: data.number ? Number(data.number) : null,
      position,
      image_big: data.imageBig || null,
      image_card: data.imageCard || null,
      teamId,
    })

    return new Response(JSON.stringify({ success: true, playerId: result.playerId, requestId: result.requestId }), { status: 201, headers: { 'Content-Type': 'application/json' } })
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

    const db = await getDb()
    const team = (await db.execute('SELECT * FROM teams WHERE id = ? AND created_by = ?', [teamId, locals.user.id])).rows[0] as unknown as { id: string; name: string } | undefined
    if (!team) {
      return new Response(JSON.stringify({ error: 'Equipo no encontrado o no te pertenece' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const existingAccepted = (await db.execute(
      "SELECT * FROM team_requests WHERE player_id = ? AND team_id = ? AND status = 'accepted'",
      [playerId, teamId]
    )).rows[0] as unknown as { id: string } | undefined
    if (existingAccepted) {
      return new Response(JSON.stringify({ error: 'Este jugador ya está en tu equipo' }), { status: 409, headers: { 'Content-Type': 'application/json' } })
    }

    const player = (await db.execute('SELECT * FROM players WHERE id = ?', [playerId])).rows[0] as unknown as { name: string; user_id: string } | undefined
    if (!player) {
      return new Response(JSON.stringify({ error: 'Jugador no encontrado' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const existingPending = (await db.execute(
      "SELECT * FROM team_requests WHERE player_id = ? AND team_id = ? AND status = 'pending'",
      [playerId, teamId]
    )).rows[0] as unknown as { id: string } | undefined
    if (existingPending) {
      return new Response(JSON.stringify({ error: 'Ya tienes una invitación pendiente para este jugador' }), { status: 409, headers: { 'Content-Type': 'application/json' } })
    }

    const id = crypto.randomUUID()
    await createTeamRequest({
      id,
      player_id: playerId,
      team_id: teamId,
      message: null,
      status: 'pending',
      type: 'invite',
    })

    await createNotification({
      id: crypto.randomUUID(),
      user_id: player.user_id,
      type: 'team_invite',
      title: 'Invitación al equipo',
      message: `${team.name} te ha invitado a unirte a su equipo`,
      related_id: id,
      read: 0,
    })

    return new Response(JSON.stringify({ success: true, id }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'player-respond') {
    if (locals.user.role !== 'jugador') {
      return new Response(JSON.stringify({ error: 'Solo los jugadores pueden responder' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    const db = await getDb()
    const requestId = data.id
    const status = data.status
    if (!requestId || !['accepted', 'rejected'].includes(status)) {
      return new Response(JSON.stringify({ error: 'Datos inválidos' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const req = await getTeamRequestById(requestId)
    if (!req) {
      return new Response(JSON.stringify({ error: 'Invitación no encontrada' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const player = await getPlayerByUser(locals.user.id)
    if (!player || req.player_id !== player.id) {
      return new Response(JSON.stringify({ error: 'Esta invitación no es para ti' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    if (status === 'accepted') {
      const alreadyAccepted = (await db.execute(
        "SELECT * FROM team_requests WHERE player_id = ? AND status = 'accepted'",
        [player.id]
      )).rows[0]
      if (alreadyAccepted) {
        return new Response(JSON.stringify({ error: 'Ya perteneces a un equipo. Sal de él primero.' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
      }
    }

    await updateTeamRequestStatus(requestId, status)

    const teamInfo = (await db.execute('SELECT name, created_by FROM teams WHERE id = ?', [req.team_id])).rows[0] as unknown as { name: string; created_by: string } | undefined
    if (teamInfo) {
      const statusMsg = status === 'accepted' ? 'aceptado' : 'rechazado'
      await createNotification({
        id: crypto.randomUUID(),
        user_id: teamInfo.created_by,
        type: 'team_invite_response',
        title: `Invitación ${statusMsg}`,
        message: `El jugador ha ${statusMsg} la invitación a ${teamInfo.name}`,
        related_id: requestId,
        read: 0,
      })
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'leave') {
    if (locals.user.role !== 'jugador') {
      return new Response(JSON.stringify({ error: 'Solo los jugadores pueden salir de un equipo' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    const db = await getDb()
    const player = await getPlayerByUser(locals.user.id)
    if (!player) {
      return new Response(JSON.stringify({ error: 'Perfil de jugador no encontrado' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const accepted = (await db.execute(
      "SELECT r.*, t.tournament_id FROM team_requests r JOIN teams t ON t.id = r.team_id WHERE r.player_id = ? AND r.status = 'accepted' LIMIT 1",
      [player.id]
    )).rows[0] as unknown as { id: string; tournament_id: string | null } | undefined
    if (!accepted) {
      return new Response(JSON.stringify({ error: 'No perteneces a ningún equipo' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    if (accepted.tournament_id) {
      return new Response(JSON.stringify({ error: 'No puedes salir del equipo mientras esté inscrito en un torneo' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    await updateTeamRequestStatus(accepted.id, 'rejected')
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'kick') {
    if (locals.user.role !== 'tecnico') {
      return new Response(JSON.stringify({ error: 'Solo los técnicos pueden eliminar jugadores' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    const requestId = data.id
    if (!requestId) {
      return new Response(JSON.stringify({ error: 'ID de solicitud requerido' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const db = await getDb()
    const req = await getTeamRequestById(requestId)
    if (!req) {
      return new Response(JSON.stringify({ error: 'Solicitud no encontrada' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }

    const team = (await db.execute('SELECT * FROM teams WHERE id = ?', [req.team_id])).rows[0] as unknown as { created_by: string; name: string; tournament_id: string | null } | undefined
    if (!team || team.created_by !== locals.user.id) {
      return new Response(JSON.stringify({ error: 'No tienes permisos para eliminar jugadores de este equipo' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }

    if (team.tournament_id) {
      return new Response(JSON.stringify({ error: 'No puedes eliminar jugadores mientras el equipo esté en un torneo' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const player = (await db.execute('SELECT * FROM players WHERE id = ?', [req.player_id])).rows[0] as unknown as { name: string; user_id: string } | undefined

    await updateTeamRequestStatus(requestId, 'rejected')

    if (player) {
      await createNotification({
        id: crypto.randomUUID(),
        user_id: player.user_id,
        type: 'team_kick',
        title: 'Has sido eliminado del equipo',
        message: `El técnico te ha eliminado de ${team.name}`,
        related_id: requestId,
        read: 0,
      })
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
