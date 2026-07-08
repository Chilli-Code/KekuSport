import type { APIRoute } from 'astro'
import { getTournamentStandings } from '../../../../server/db'

export const GET: APIRoute = async ({ params }) => {
  const { tournament } = params
  if (!tournament) {
    return new Response(JSON.stringify({ error: 'Se requiere tournamentId' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const standings = await getTournamentStandings(tournament)
  return new Response(JSON.stringify({ success: true, standings }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
