import type { APIRoute } from 'astro'
import { getPlayerTournamentStats } from '../../../../server/db'

export const GET: APIRoute = async ({ params }) => {
  const { tournament } = params
  if (!tournament) {
    return new Response(JSON.stringify({ error: 'Se requiere tournament ID' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  try {
    const stats = await getPlayerTournamentStats(tournament)
    return new Response(JSON.stringify({ success: true, stats }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch (e) {
    console.error('Error fetching player stats:', e)
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener estadísticas' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
