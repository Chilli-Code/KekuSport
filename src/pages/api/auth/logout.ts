import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ cookies }) => {
  cookies.delete('keku_token', { path: '/' })
  return new Response(null, { status: 204 })
}
