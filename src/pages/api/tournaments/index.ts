import type { APIRoute } from 'astro'
import { getAllTournaments, getTournamentsOpenForRegistration, getTournamentById } from '../../../../server/db'

export const GET: APIRoute = async ({ url, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const action = url.searchParams.get('action') || 'open'
  const id = url.searchParams.get('id')

  if (action === 'all') {
    const tournaments = await getAllTournaments()
    return new Response(JSON.stringify({ success: true, tournaments }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'byId' && id) {
    const tournament = await getTournamentById(id)
    if (!tournament) {
      return new Response(JSON.stringify({ error: 'Torneo no encontrado' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    }
    return new Response(JSON.stringify({ success: true, tournament }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  const tournaments = await getTournamentsOpenForRegistration()
  return new Response(JSON.stringify({ success: true, tournaments }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
