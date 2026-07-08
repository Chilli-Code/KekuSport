import type { APIRoute } from 'astro'
import { recalculateTournamentStandings, getDb } from '../../../../server/db'

export const GET: APIRoute = async ({ locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const db = await getDb()

  const matchesResult = await db.execute({
    sql: `SELECT id, tournament_id FROM matches WHERE status IN ('finished', 'completed') AND (home_score IS NULL OR away_score IS NULL)`,
  })
  const matches = matchesResult.rows as unknown as { id: string; tournament_id: string }[]

  const tournamentIds = new Set(matches.map(m => m.tournament_id))

  for (const match of matches) {
    const evResult = await db.execute({
      sql: `SELECT type, team FROM match_events WHERE match_id = ? AND type = 'goal'`,
      args: [match.id],
    })
    const goals = evResult.rows as unknown as { type: string; team: string }[]
    const hs = goals.filter(g => g.team === 'A').length
    const as = goals.filter(g => g.team === 'B').length
    await db.execute({
      sql: `UPDATE matches SET home_score = ?, away_score = ? WHERE id = ?`,
      args: [hs, as, match.id],
    })
  }

  for (const tid of tournamentIds) {
    await recalculateTournamentStandings(tid)
  }

  return new Response(JSON.stringify({ success: true, matchesFixed: matches.length, tournaments: tournamentIds.size }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
