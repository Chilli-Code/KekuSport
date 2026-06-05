import { createUser, findUserByEmail } from '../../server/db'
import { hashPassword } from '../../server/auth'

async function seed() {
  const users = [
    { id: 'admin-001', email: 'admin@keku.com',   password: 'admin123',   name: 'Admin',       role: 'admin' as const },
    { id: 'tec-001',   email: 'tecnico@keku.com', password: 'tecnico123', name: 'Técnico 1',    role: 'tecnico' as const },
    { id: 'ref-001',   email: 'referee@keku.com', password: 'referee123', name: 'Árbitro 1',    role: 'referee' as const },
    { id: 'jug-001',   email: 'jugador@keku.com', password: 'jugador123', name: 'Jugador 1',    role: 'jugador' as const },
  ]

  for (const u of users) {
    const existing = await findUserByEmail(u.email)
    if (existing) {
      console.log(`- Usuario ya existe: ${u.email} (${u.role})`)
      continue
    }
    const hashed = await hashPassword(u.password)
    await createUser(u.id, u.email, hashed, u.name, u.role)
    console.log(`✓ Usuario creado: ${u.email} (${u.role})`)
  }

  console.log('\nSeed completado.')
}

seed().catch(console.error)
