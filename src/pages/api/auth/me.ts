import type { APIRoute } from 'astro'
import { verifyToken } from '../../../../server/auth'
import { findUserById } from '../../../../server/db'

export const GET: APIRoute = async ({ cookies }) => {
  const token = cookies.get('keku_token')?.value
  if (!token) {
    return new Response(JSON.stringify({ user: null }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    })
  }

  const payload = await verifyToken(token)
  if (!payload) {
    return new Response(JSON.stringify({ user: null }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    })
  }

  const user = await findUserById(payload.sub)
  if (!user) {
    return new Response(JSON.stringify({ user: null }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
