import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete('keku_token', { path: '/' })
  return redirect('/', 302)
}
