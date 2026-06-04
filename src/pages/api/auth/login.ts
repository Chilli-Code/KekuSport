import type { APIRoute } from 'astro'
import { findUserByEmail } from '../../../../server/db'
import { verifyPassword, signToken } from '../../../../server/auth'

export const POST: APIRoute = async ({ request, cookies }) => {
  const body = await request.json()
  const { email, password } = body

  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Email y contraseña requeridos' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    })
  }

  const user = findUserByEmail(email)
  if (!user) {
    return new Response(JSON.stringify({ error: 'Credenciales inválidas' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    })
  }

  const valid = await verifyPassword(password, user.password)
  if (!valid) {
    return new Response(JSON.stringify({ error: 'Credenciales inválidas' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    })
  }

  const token = await signToken({
    sub: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  })

  cookies.set('keku_token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return new Response(JSON.stringify({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    redirect: getRedirectForRole(user.role),
  }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}

function getRedirectForRole(role: string): string {
  const routes: Record<string, string> = {
    admin: '/admin/dashboard/crear-torneo',
    tecnico: '/tecnico',
    referee: '/referee',
    jugador: '/jugador',
  }
  return routes[role] || '/'
}
