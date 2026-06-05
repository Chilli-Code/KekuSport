import type { APIRoute } from 'astro'
import { getPlayerByUser, getPlayerById, getPlayerSocials, upsertPlayer, savePlayerSocials, searchPlayers } from '../../../../server/db'

export const GET: APIRoute = async ({ url, locals }) => {
  const id = url.searchParams.get('id')
  const userId = url.searchParams.get('userId')

  if (id) {
    const player = await getPlayerById(id)
    if (!player) return new Response(JSON.stringify({ error: 'Jugador no encontrado' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    const socials = await getPlayerSocials(id)
    return new Response(JSON.stringify({ success: true, player, socials }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const targetUserId = userId || locals.user.id
  const player = await getPlayerByUser(targetUserId)
  const socials = player ? await getPlayerSocials(player.id) : []
  return new Response(JSON.stringify({ success: true, player, socials }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const body = await request.json()
  const { action, ...data } = body

  if (action === 'search') {
    const q = (data.q || '').trim()
    if (!q) return new Response(JSON.stringify({ success: true, players: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    const players = await searchPlayers(q)
    return new Response(JSON.stringify({ success: true, players }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (action === 'save') {
    const id = data.id || crypto.randomUUID()
    await upsertPlayer({
      id,
      user_id: locals.user.id,
      name: data.name || '',
      real_name: data.realName || null,
      age: data.age ? Number(data.age) : null,
      country: data.country || 'co',
      city: data.city || null,
      neighborhood: data.neighborhood || null,
      preferred_foot: data.preferredFoot || null,
      position: data.position || '',
      number: data.number ? Number(data.number) : null,
      bio: data.bio || null,
      image_big: data.imageBig || null,
      image_card: data.imageCard || null,
    })

    if (Array.isArray(data.socials)) {
      await savePlayerSocials(id, data.socials)
    }

    return new Response(JSON.stringify({ success: true, id }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'Acción no válida' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
}
