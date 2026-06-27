import type { APIRoute } from 'astro'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
})

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const formData = await request.formData()
  const file = formData.get('file') as File | null

  if (!file) {
    return new Response(JSON.stringify({ error: 'No se envió ninguna imagen' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  if (file.size > 500 * 1024) {
    return new Response(JSON.stringify({ error: 'La imagen supera los 500KB' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  try {
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const result = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'la-velada/team-logos' },
        (error, result) => {
          if (error) reject(error)
          else resolve(result as { secure_url: string; public_id: string })
        },
      )
      stream.end(buffer)
    })

    const optimizedUrl = result.secure_url.replace('/upload/', '/upload/f_auto,q_auto/')

    return new Response(JSON.stringify({ success: true, url: optimizedUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al subir la imagen a Cloudinary' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
