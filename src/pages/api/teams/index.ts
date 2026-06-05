import type { APIRoute } from 'astro'
import { createTeam, deleteTeam, getTeamsByTournament, getTeamsByUser, searchTeams, removeTeamFromTournament } from '../../../../server/db'

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { action, ...data } = body

  if (action === 'create') {
    const id = crypto.randomUUID()
    await createTeam({
      id,
      tournament_id: data.tournamentId || null,
      name: data.name,
      logo: data.logo || null,
      color: data.color || '#00ff88',
      category: data.category || '',
      created_by: locals.user.id,
    })
    return new Response(JSON.stringify({ success: true, id }), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'delete') {
    await deleteTeam(data.id)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'removeFromTournament') {
    await removeTeamFromTournament(data.id, data.tournamentId)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'list') {
    const teams = await getTeamsByTournament(data.tournamentId)
    return new Response(JSON.stringify({ success: true, teams }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'listByUser') {
    const teams = await getTeamsByUser(locals.user.id)
    return new Response(JSON.stringify({ success: true, teams }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'search') {
    const q = (data.q || '').trim()
    if (!q) return new Response(JSON.stringify({ success: true, teams: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    const teams = await searchTeams(q)
    return new Response(JSON.stringify({ success: true, teams }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
