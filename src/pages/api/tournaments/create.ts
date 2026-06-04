import type { APIRoute } from 'astro'
import { createTournament, createCategory } from '../../../../server/db'

export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user
  if (!user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'JSON inválido' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    })
  }

  const { name, venue, startDate, format, numTeams, playersPerTeam, categories } = body

  const errors: string[] = []
  if (!name || typeof name !== 'string') errors.push('Nombre del torneo es requerido')
  if (!venue || typeof venue !== 'string') errors.push('Sede es requerida')
  if (!startDate || typeof startDate !== 'string') errors.push('Fecha de inicio es requerida')
  if (!format || typeof format !== 'string') errors.push('Formato es requerido')
  if (!numTeams || typeof numTeams !== 'number') errors.push('Número de equipos es requerido')
  if (!playersPerTeam || typeof playersPerTeam !== 'number') errors.push('Jugadores por equipo es requerido')

  if (errors.length > 0) {
    return new Response(JSON.stringify({ error: errors.join('. ') }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    })
  }

  const tournamentId = crypto.randomUUID()

  createTournament({
    id: tournamentId,
    name: name as string,
    description: (body.description as string) || null,
    logo: null,
    venue: venue as string,
    city: (body.city as string) || null,
    start_date: startDate as string,
    end_date: (body.endDate as string) || null,
    format: format as string,
    num_teams: numTeams as number,
    players_per_team: playersPerTeam as number,
    match_duration: (body.matchDuration as number) || null,
    points_per_win: (body.pointsPerWin as number) || 3,
    rules: JSON.stringify(body.rules || []),
    open_registration: body.openRegistration ? 1 : 0,
    reg_deadline: (body.regDeadline as string) || null,
    registration_fee: (body.registrationFee as number) ?? null,
    min_age: (body.minAge as number) ?? null,
    max_age: (body.maxAge as number) ?? null,
    requirements: (body.requirements as string) || null,
    prizes: JSON.stringify({
      prize1: body.prize1,
      prize2: body.prize2,
      prize3: body.prize3,
      prize1desc: body.prize1desc,
      prize2desc: body.prize2desc,
      prize3desc: body.prize3desc,
    }),
    awards: JSON.stringify(body.awards || []),
    notes: (body.notes as string) || null,
    status: 'active',
    created_by: user.id,
  })

  if (Array.isArray(categories)) {
    for (const cat of categories) {
      createCategory({
        id: crypto.randomUUID(),
        tournament_id: tournamentId,
        name: cat.name,
        description: cat.description || null,
        min_age: cat.minAge ?? null,
        max_age: cat.maxAge ?? null,
        gender: cat.gender || null,
        max_teams: cat.maxTeams ?? null,
      })
    }
  }

  return new Response(JSON.stringify({
    success: true,
    tournamentId,
    message: 'Torneo creado exitosamente',
  }), { status: 201, headers: { 'Content-Type': 'application/json' } })
}
