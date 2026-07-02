import { defineMiddleware } from 'astro/middleware'
import { verifyToken } from '../server/auth'

const PUBLIC_ROUTES = ['/', '/login', '/auth/register', '/api/auth/login', '/api/auth/logout']
const PUBLIC_PREFIXES = ['/jugadores', '/player/', '/combates', '/combate/', '/torneos', '/la-porra', '/api/players', '/api/matches', '/api/stats']

const ROLE_ROUTES: Record<string, string[]> = {
  admin: ['/admin', '/api/tournaments', '/api/teams', '/api/matches', '/api/invitations', '/api/players', '/api/team-requests', '/api/notifications', '/api/referees', '/api/referee', '/api/stats'],
  tecnico: ['/tecnico', '/api/teams', '/api/tournaments', '/api/invitations', '/api/team-requests', '/api/notifications', '/api/lineups', '/api/stats'],
  referee: ['/referee', '/api/referee', '/api/matches'],
  jugador: ['/jugador', '/api/players', '/api/teams', '/api/team-requests', '/api/notifications'],
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url)
  const path = url.pathname

  // Static assets and API auth endpoints pass through
  if (path.startsWith('/_astro') || path.startsWith('/api/auth')) {
    return next()
  }

  // Try to authenticate if a token exists (for public routes too)
  const token = context.cookies.get('keku_token')?.value
  if (token) {
    const payload = await verifyToken(token)
    if (payload) {
      context.locals.user = {
        id: payload.sub,
        email: payload.email,
        role: payload.role,
        name: payload.name,
      }
    }
  }

  // Public routes — pass through with or without auth
  if (PUBLIC_ROUTES.includes(path) || PUBLIC_PREFIXES.some(prefix => path.startsWith(prefix))) {
    return next()
  }

  // Protected routes — require auth
  if (!context.locals.user) {
    if (path.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'No autorizado' }), {
        status: 401, headers: { 'Content-Type': 'application/json' },
      })
    }
    return context.redirect('/login')
  }

  // Role-based access
  const allowedPrefixes = ROLE_ROUTES[context.locals.user.role]
  if (!allowedPrefixes || !allowedPrefixes.some(prefix => path.startsWith(prefix))) {
    if (path.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Prohibido' }), {
        status: 403, headers: { 'Content-Type': 'application/json' },
      })
    }
    return context.redirect('/login')
  }

  return next()
})
