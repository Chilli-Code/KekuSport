import type { APIRoute } from 'astro'
import { findUserByEmail } from '../../../../server/db'

export const GET: APIRoute = async ({ url }) => {
  const email = url.searchParams.get('email')?.trim().toLowerCase()

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email requerido' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    })
  }

  const existing = await findUserByEmail(email)
  return new Response(JSON.stringify({ available: !existing }), {
    status: 200, headers: { 'Content-Type': 'application/json' },
  })
}
