import type { APIRoute } from 'astro'
import { findUserByEmail, createUser } from '../../../../server/db'
import { hashPassword, signToken } from '../../../../server/auth'

export const POST: APIRoute = async ({ request, cookies }) => {
  const body = await request.json()
  const { email, password, name, role } = body

  if (!email || !password || !name) {
    return new Response(JSON.stringify({ error: 'Email, contraseña y nombre requeridos' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    })
  }

  const validRoles = ['admin', 'tecnico', 'referee', 'jugador']
  const userRole = validRoles.includes(role) ? role : 'jugador'

  const existing = findUserByEmail(email)
  if (existing) {
    return new Response(JSON.stringify({ error: 'El email ya está registrado' }), {
      status: 409, headers: { 'Content-Type': 'application/json' },
    })
  }

  const id = crypto.randomUUID()
  const hashed = await hashPassword(password)
  createUser(id, email, hashed, name, userRole)

  const token = await signToken({ sub: id, email, role: userRole, name })

  cookies.set('keku_token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  const redirectMap: Record<string, string> = {
    admin: '/admin/dashboard/crear-torneo',
    tecnico: '/tecnico',
    referee: '/referee',
    jugador: '/jugador',
  }

  return new Response(JSON.stringify({
    success: true,
    user: { id, name, email, role: userRole },
    redirect: redirectMap[userRole] || '/',
  }), { status: 201, headers: { 'Content-Type': 'application/json' } })
}
