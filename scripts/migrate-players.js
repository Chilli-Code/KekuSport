const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'server', 'db.ts');
let c = fs.readFileSync(filePath, 'utf8');

const old = `  try { await db.execute("ALTER TABLE match_events ADD COLUMN details_json TEXT DEFAULT ''") } catch {}

  const colResult = await db.execute("PRAGMA table_info('teams')")`;

const insert = `  try { await db.execute("ALTER TABLE match_events ADD COLUMN details_json TEXT DEFAULT ''") } catch {}
  try { await db.execute("ALTER TABLE players ADD COLUMN direct_team_id TEXT DEFAULT NULL") } catch {}

  const playersColResult = await db.execute("PRAGMA table_info('players')")
  const playersColInfo = playersColResult.rows as unknown as { name: string; notnull: number }[]
  const userIdCol = playersColInfo.find(c => c.name === 'user_id')
  if (userIdCol && userIdCol.notnull === 1) {
    await db.execute('CREATE TABLE players_migrated (id TEXT PRIMARY KEY, user_id TEXT UNIQUE, name TEXT NOT NULL, real_name TEXT, age INTEGER, country TEXT DEFAULT ' + "'co'" + ', city TEXT, neighborhood TEXT, preferred_foot TEXT, position TEXT NOT NULL, number INTEGER, bio TEXT, image_big TEXT, image_card TEXT, direct_team_id TEXT, created_at TEXT DEFAULT (datetime(' + "'now'" + ')), FOREIGN KEY (user_id) REFERENCES users(id))')
    await db.execute("INSERT INTO players_migrated (id, user_id, name, real_name, age, country, city, neighborhood, preferred_foot, position, number, bio, image_big, image_card, direct_team_id, created_at) SELECT id, user_id, name, real_name, age, country, city, neighborhood, preferred_foot, position, number, bio, image_big, image_card, direct_team_id, created_at FROM players")
    await db.execute('DROP TABLE players')
    await db.execute('ALTER TABLE players_migrated RENAME TO players')
  }

  const colResult = await db.execute("PRAGMA table_info('teams')")`;

if (!c.includes(old)) {
  console.error('EXACT MATCH FAILED');
  const i = c.indexOf('details_json');
  console.error('Around details_json:', JSON.stringify(c.substring(i, i + 140)));
  process.exit(1);
}

c = c.replace(old, insert);
fs.writeFileSync(filePath, c, 'utf8');
console.log('OK - migration added');
