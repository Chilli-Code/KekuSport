import type { APIRoute } from 'astro'
import { searchReferees } from '../../../../server/db'

export const GET: APIRoute = async ({ request, locals }) => {
  if (!locals.user || locals.user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const url = new URL(request.url)
  const q = url.searchParams.get('q') || ''

  if (q.length < 2) {
    return new Response(JSON.stringify({ success: true, referees: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  const referees = await searchReferees(q)
  return new Response(JSON.stringify({ success: true, referees }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
