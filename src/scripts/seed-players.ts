import { addPlayerToTeam } from '../../server/db'

const TEAM_ID = 'blaze'

const players = [
  { id: 'blaze-p1',  name: 'Carlos García',     shirt_name: 'GARCÍA',  position: 'Delantero', number: 9,  age: 25, real_name: 'Carlos Andrés García' },
  { id: 'blaze-p2',  name: 'Luis Martínez',     shirt_name: 'MARTÍNEZ', position: 'Medio',     number: 8,  age: 27, real_name: 'Luis Eduardo Martínez' },
  { id: 'blaze-p3',  name: 'Jorge Rodríguez',   shirt_name: 'RODRÍGUEZ',position: 'Defensa',   number: 4,  age: 29, real_name: 'Jorge Alberto Rodríguez' },
  { id: 'blaze-p4',  name: 'Ana Torres',        shirt_name: 'TORRES',   position: 'Portero',   number: 1,  age: 24, real_name: 'Ana Sofía Torres' },
  { id: 'blaze-p5',  name: 'Miguel Ángel López',shirt_name: 'LÓPEZ',    position: 'Delantero', number: 11, age: 22, real_name: 'Miguel Ángel López' },
  { id: 'blaze-p6',  name: 'Diego Ramírez',     shirt_name: 'RAMÍREZ',  position: 'Medio',     number: 10, age: 26, real_name: 'Diego Fernando Ramírez' },
  { id: 'blaze-p7',  name: 'Felipe Castillo',   shirt_name: 'CASTILLO', position: 'Defensa',   number: 2,  age: 30, real_name: 'Felipe Andrés Castillo' },
  { id: 'blaze-p8',  name: 'Santiago Gómez',    shirt_name: 'GÓMEZ',    position: 'Medio',     number: 6,  age: 23, real_name: 'Santiago José Gómez' },
]

async function seedPlayers() {
  console.log(`Seeding players for team: ${TEAM_ID}`)
  for (const p of players) {
    try {
      const result = await addPlayerToTeam({
        id: p.id,
        name: p.name,
        number: p.number,
        position: p.position,
        shirt_name: p.shirt_name,
        real_name: p.real_name || null,
        age: p.age || null,
        city: null,
        neighborhood: null,
        preferred_foot: null,
        bio: null,
        image_big: null,
        image_card: null,
        teamId: TEAM_ID,
      })
      console.log(`✓ ${p.name} (${p.shirt_name}) — #${p.number} — ${p.position}`)
    } catch (e: any) {
      console.error(`✗ ${p.name}: ${e?.message || e}`)
    }
  }
  console.log('\nDone.')
}

seedPlayers().catch(console.error)
