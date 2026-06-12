import type { APIRoute } from 'astro'
import { getActiveTournamentsWithMatches } from '../../../../server/db'

export const GET: APIRoute = async () => {
  try {
    const tournaments = await getActiveTournamentsWithMatches()
    return new Response(JSON.stringify({ success: true, tournaments }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error al cargar combates' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
