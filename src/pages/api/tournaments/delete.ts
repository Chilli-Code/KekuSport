import type { APIRoute } from 'astro'
import { deleteTournament, getTournamentById } from '../../../../server/db'

export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user
  if (!user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    })
  }

  let body: { tournamentId?: string }
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'JSON inválido' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    })
  }

  const { tournamentId } = body
  if (!tournamentId) {
    return new Response(JSON.stringify({ error: 'ID del torneo es requerido' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    })
  }

  const tournament = await getTournamentById(tournamentId)
  if (!tournament) {
    return new Response(JSON.stringify({ error: 'Torneo no encontrado' }), {
      status: 404, headers: { 'Content-Type': 'application/json' },
    })
  }

  if (tournament.created_by !== user.id && user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'No tienes permiso para eliminar este torneo' }), {
      status: 403, headers: { 'Content-Type': 'application/json' },
    })
  }

  await deleteTournament(tournamentId)

  return new Response(JSON.stringify({
    success: true,
    message: 'Torneo eliminado exitosamente',
  }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
