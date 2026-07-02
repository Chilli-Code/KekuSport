import type { APIRoute } from 'astro'
import { saveMatchLineup, getMatchLineup, getTeamSquadWithStats, isMatchEditable } from '../../../../server/db'

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { action, matchId, teamId } = body

  if (action === 'save') {
    if (!matchId || !teamId) {
      return new Response(JSON.stringify({ error: 'Faltan matchId o teamId' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    const editable = await isMatchEditable(matchId)
    if (!editable) {
      return new Response(JSON.stringify({ error: 'El plazo de 2 horas para modificar el partido ha expirado' }), { status: 403, headers: { 'Content-Type': 'application/json' } })
    }
    await saveMatchLineup(matchId, teamId, body.formation || '4-3-3', JSON.stringify(body.lineup || {}), JSON.stringify(body.subs || []), body.kit ?? 0)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'load') {
    if (!matchId || !teamId) {
      return new Response(JSON.stringify({ error: 'Faltan matchId o teamId' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    const data = await getMatchLineup(matchId, teamId)
    return new Response(JSON.stringify({
      success: true,
      lineup: data ? {
        formation: data.formation,
        lineup: JSON.parse(data.lineup),
        subs: JSON.parse(data.subs),
        kit: data.kit ?? 0,
      } : null,
    }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'squad-stats') {
    const { tournamentId, currentRound } = body
    if (!teamId || !tournamentId) {
      return new Response(JSON.stringify({ error: 'Faltan teamId o tournamentId' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    const squad = await getTeamSquadWithStats(tournamentId, teamId, currentRound || 1)
    return new Response(JSON.stringify({ success: true, squad }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
