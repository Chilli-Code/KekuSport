import { createClient } from '@libsql/client'
import path from 'node:path'

const DB_URL = process.env.TURSO_DB_URL || `file:${process.env.DB_PATH || path.join(process.cwd(), 'data', 'keku.db')}`
const AUTH_TOKEN = process.env.TURSO_AUTH_TOKEN

let _client: ReturnType<typeof createClient> | null = null

export async function getDb() {
  if (!_client) {
    _client = createClient({ url: DB_URL, authToken: AUTH_TOKEN })
    await initTables()
    await migrateTables()
  }
  return _client
}

async function migrateTables() {
  const db = _client!
  try { await db.execute("ALTER TABLE teams ADD COLUMN color TEXT DEFAULT '#00ff88'") } catch {}
  try { await db.execute("ALTER TABLE teams ADD COLUMN category TEXT DEFAULT ''") } catch {}
  try { await db.execute("ALTER TABLE tournaments ADD COLUMN num_groups INTEGER DEFAULT NULL") } catch {}
  try { await db.execute("ALTER TABLE tournaments ADD COLUMN two_legged INTEGER DEFAULT 0") } catch {}
  try { await db.execute("ALTER TABLE tournaments ADD COLUMN playoffs_two_legged INTEGER DEFAULT 0") } catch {}
  try { await db.execute("ALTER TABLE tournaments ADD COLUMN advancers_per_group INTEGER DEFAULT NULL") } catch {}
  try { await db.execute("ALTER TABLE tournaments ADD COLUMN single_final_match INTEGER DEFAULT 1") } catch {}
  try { await db.execute("ALTER TABLE tournaments ADD COLUMN field_players INTEGER DEFAULT 5") } catch {}
  try { await db.execute("ALTER TABLE team_requests ADD COLUMN type TEXT DEFAULT 'request'") } catch {}
  try { await db.execute("ALTER TABLE matches ADD COLUMN round_label TEXT DEFAULT NULL") } catch {}
  try { await db.execute("ALTER TABLE matches ADD COLUMN elapsed_seconds INTEGER DEFAULT 0") } catch {}
  try { await db.execute("ALTER TABLE matches ADD COLUMN completed_at TEXT DEFAULT NULL") } catch {}
  try { await db.execute("ALTER TABLE match_lineups ADD COLUMN kit_color TEXT DEFAULT '#EF4444'") } catch {}
  try { await db.execute("ALTER TABLE match_lineups ADD COLUMN kit INTEGER DEFAULT 0") } catch {}
  try { await db.execute("ALTER TABLE match_events ADD COLUMN team_request_id TEXT DEFAULT ''") } catch {}
  try { await db.execute("ALTER TABLE match_events ADD COLUMN details_json TEXT DEFAULT ''") } catch {}
  await ensurePlayersTable(db)

  const colResult = await db.execute("PRAGMA table_info('teams')")
  const colInfo = colResult.rows as unknown as { name: string; notnull: number }[]
  const tIdCol = colInfo.find(c => c.name === 'tournament_id')
  if (tIdCol && tIdCol.notnull === 1) {
    await db.execute("CREATE TABLE teams_migrated (id TEXT PRIMARY KEY, tournament_id TEXT, name TEXT NOT NULL, logo TEXT, color TEXT DEFAULT '#00ff88', category TEXT DEFAULT '', created_by TEXT, created_at TEXT DEFAULT (datetime('now')), FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE)")
    await db.execute("INSERT INTO teams_migrated (id, tournament_id, name, logo, color, category, created_by, created_at) SELECT id, tournament_id, name, logo, IFNULL(color, '#00ff88'), IFNULL(category, ''), created_by, created_at FROM teams")
    await db.execute('DROP TABLE teams')
    await db.execute('ALTER TABLE teams_migrated RENAME TO teams')
  }
}

async function ensurePlayersTable(db?: Awaited<ReturnType<typeof getDb>>) {
  if (!db) db = await getDb()
  try { await db.execute("ALTER TABLE players ADD COLUMN direct_team_id TEXT DEFAULT NULL") } catch {}
  const colResult = await db.execute("PRAGMA table_info('players')")
  const colInfo = colResult.rows as unknown as { name: string; notnull: number }[]
  const userIdCol = colInfo.find(c => c.name === 'user_id')
  if (userIdCol && userIdCol.notnull === 1) {
    await db.execute("CREATE TABLE players_migrated (id TEXT PRIMARY KEY, user_id TEXT UNIQUE, name TEXT NOT NULL, real_name TEXT, age INTEGER, country TEXT DEFAULT 'co', city TEXT, neighborhood TEXT, preferred_foot TEXT, position TEXT NOT NULL, number INTEGER, bio TEXT, image_big TEXT, image_card TEXT, direct_team_id TEXT, created_at TEXT DEFAULT (datetime('now')), FOREIGN KEY (user_id) REFERENCES users(id))")
    await db.execute("INSERT INTO players_migrated (id, user_id, name, real_name, age, country, city, neighborhood, preferred_foot, position, number, bio, image_big, image_card, direct_team_id, created_at) SELECT id, user_id, name, real_name, age, country, city, neighborhood, preferred_foot, position, number, bio, image_big, image_card, direct_team_id, created_at FROM players")
    await db.execute('DROP TABLE players')
    await db.execute('ALTER TABLE players_migrated RENAME TO players')
  }
}

async function initTables() {
  const db = _client!
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT NOT NULL CHECK(role IN ('admin','tecnico','referee','jugador')),
      created_at TEXT DEFAULT (datetime('now'))
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS tournaments (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      logo TEXT,
      venue TEXT NOT NULL,
      city TEXT,
      start_date TEXT NOT NULL,
      end_date TEXT,
      format TEXT NOT NULL,
      num_teams INTEGER NOT NULL,
      players_per_team INTEGER NOT NULL,
      field_players INTEGER DEFAULT 5,
      match_duration INTEGER,
      points_per_win INTEGER DEFAULT 3,
      rules TEXT DEFAULT '[]',
      open_registration INTEGER DEFAULT 1,
      reg_deadline TEXT,
      registration_fee REAL,
      min_age INTEGER,
      max_age INTEGER,
      requirements TEXT,
      prizes TEXT DEFAULT '{}',
      awards TEXT DEFAULT '[]',
      notes TEXT,
      status TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','active','completed')),
      created_by TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (created_by) REFERENCES users(id)
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY,
      tournament_id TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      min_age INTEGER,
      max_age INTEGER,
      gender TEXT CHECK(gender IN ('male','female','mixed')),
      max_teams INTEGER,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS teams (
      id TEXT PRIMARY KEY,
      tournament_id TEXT,
      name TEXT NOT NULL,
      logo TEXT,
      color TEXT DEFAULT '#00ff88',
      category TEXT DEFAULT '',
      created_by TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS tournament_invitations (
      id TEXT PRIMARY KEY,
      tournament_id TEXT NOT NULL,
      team_id TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','accepted','rejected')),
      created_by TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
      FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
      FOREIGN KEY (created_by) REFERENCES users(id)
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS matches (
      id TEXT PRIMARY KEY,
      tournament_id TEXT NOT NULL,
      round INTEGER NOT NULL DEFAULT 1,
      home_team_id TEXT,
      away_team_id TEXT,
      home_score INTEGER,
      away_score INTEGER,
      scheduled_date TEXT,
      venue TEXT,
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','scheduled','live','finished','cancelled')),
      elapsed_seconds INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
      FOREIGN KEY (home_team_id) REFERENCES teams(id),
      FOREIGN KEY (away_team_id) REFERENCES teams(id)
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS players (
      id TEXT PRIMARY KEY,
      user_id TEXT UNIQUE,
      name TEXT NOT NULL,
      real_name TEXT,
      age INTEGER,
      country TEXT DEFAULT 'co',
      city TEXT,
      neighborhood TEXT,
      preferred_foot TEXT,
      position TEXT NOT NULL,
      number INTEGER,
      bio TEXT,
      image_big TEXT,
      image_card TEXT,
      direct_team_id TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS player_socials (
      id TEXT PRIMARY KEY,
      player_id TEXT NOT NULL,
      platform TEXT NOT NULL,
      url TEXT,
      followers TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS team_requests (
      id TEXT PRIMARY KEY,
      player_id TEXT NOT NULL,
      team_id TEXT NOT NULL,
      message TEXT,
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','accepted','rejected')),
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE,
      FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS match_referees (
      id TEXT PRIMARY KEY,
      match_id TEXT NOT NULL,
      referee_id TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','accepted','rejected')),
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE,
      FOREIGN KEY (referee_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS match_lineups (
      id TEXT PRIMARY KEY,
      match_id TEXT NOT NULL,
      team_id TEXT NOT NULL,
      formation TEXT NOT NULL DEFAULT '4-3-3',
      lineup TEXT NOT NULL DEFAULT '{}',
      subs TEXT NOT NULL DEFAULT '[]',
      kit INTEGER NOT NULL DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE,
      FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS match_events (
      id TEXT PRIMARY KEY,
      match_id TEXT NOT NULL,
      type TEXT NOT NULL,
      team TEXT NOT NULL,
      player TEXT,
      player2 TEXT,
      minute INTEGER,
      detail TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE
    )
  `)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS notifications (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      type TEXT NOT NULL,
      title TEXT,
      message TEXT,
      related_id TEXT,
      read INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `)
}

export type UserRole = 'admin' | 'tecnico' | 'referee' | 'jugador'

export interface User {
  id: string
  email: string
  password: string
  name: string
  role: UserRole
  created_at: string
}

export async function findUserByEmail(email: string): Promise<User | undefined> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM users WHERE email = ?', args: [email] })
  return result.rows[0] as unknown as User | undefined
}

export async function findUserById(id: string): Promise<User | undefined> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [id] })
  return result.rows[0] as unknown as User | undefined
}

export async function createUser(id: string, email: string, password: string, name: string, role: UserRole): Promise<void> {
  const db = await getDb()
  await db.execute({
    sql: 'INSERT INTO users (id, email, password, name, role) VALUES (?, ?, ?, ?, ?)',
    args: [id, email, password, name, role],
  })
}

export interface Tournament {
  id: string
  name: string
  description: string | null
  logo: string | null
  venue: string
  city: string | null
  start_date: string
  end_date: string | null
  format: string
  num_teams: number
  players_per_team: number
  field_players: number
  match_duration: number | null
  points_per_win: number
  rules: string
  open_registration: number
  reg_deadline: string | null
  registration_fee: number | null
  min_age: number | null
  max_age: number | null
  requirements: string | null
  prizes: string
  awards: string
  notes: string | null
  num_groups: number | null
  advancers_per_group: number | null
  two_legged: number
  playoffs_two_legged: number
  single_final_match: number
  status: string
  created_by: string
  created_at: string
}

export interface Category {
  id: string
  tournament_id: string
  name: string
  description: string | null
  min_age: number | null
  max_age: number | null
  gender: string | null
  max_teams: number | null
  created_at: string
}

export async function createTournament(tournament: Omit<Tournament, 'created_at'>): Promise<void> {
  const db = await getDb()
  await db.execute(
    `INSERT INTO tournaments (
      id, name, description, logo, venue, city, start_date, end_date,
      format, num_teams, players_per_team, field_players, match_duration, points_per_win,
      rules, open_registration, reg_deadline, registration_fee,
      min_age, max_age, requirements, prizes, awards, notes,
      num_groups, advancers_per_group, two_legged, playoffs_two_legged, single_final_match,
      status, created_by
    ) VALUES (
      @id, @name, @description, @logo, @venue, @city, @start_date, @end_date,
      @format, @num_teams, @players_per_team, @field_players, @match_duration, @points_per_win,
      @rules, @open_registration, @reg_deadline, @registration_fee,
      @min_age, @max_age, @requirements, @prizes, @awards, @notes,
      @num_groups, @advancers_per_group, @two_legged, @playoffs_two_legged, @single_final_match,
      @status, @created_by
    )`,
    tournament as any,
  )
}

export async function deleteTournament(id: string): Promise<void> {
  const db = await getDb()
  // CASCADE will delete related matches, teams, categories, etc.
  await db.execute('DELETE FROM tournaments WHERE id = ?', [id])
}

export async function createCategory(category: Omit<Category, 'created_at'>): Promise<void> {
  const db = await getDb()
  await db.execute(
    'INSERT INTO categories (id, tournament_id, name, description, min_age, max_age, gender, max_teams) VALUES (@id, @tournament_id, @name, @description, @min_age, @max_age, @gender, @max_teams)',
    category as any,
  )
}

export async function getTournamentsByUser(userId: string): Promise<Tournament[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM tournaments WHERE created_by = ? ORDER BY created_at DESC', args: [userId] })
  return result.rows as unknown as Tournament[]
}

export async function getTournamentById(id: string): Promise<Tournament | undefined> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM tournaments WHERE id = ?', args: [id] })
  return result.rows[0] as unknown as Tournament | undefined
}

export async function getCategoriesByTournament(tournamentId: string): Promise<Category[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM categories WHERE tournament_id = ? ORDER BY name', args: [tournamentId] })
  return result.rows as unknown as Category[]
}

export interface Team {
  id: string
  tournament_id: string | null
  name: string
  logo: string | null
  color: string | null
  category: string | null
  created_by: string | null
  created_at: string
}

export async function createTeam(team: Omit<Team, 'created_at'>): Promise<void> {
  const db = await getDb()
  await db.execute(
    'INSERT INTO teams (id, tournament_id, name, logo, color, category, created_by) VALUES (@id, @tournament_id, @name, @logo, @color, @category, @created_by)',
    team as any,
  )
}

export async function getTeamsByTournament(tournamentId: string): Promise<Team[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM teams WHERE tournament_id = ? ORDER BY name', args: [tournamentId] })
  return result.rows as unknown as Team[]
}

export async function getTeamsByUser(userId: string): Promise<(Team & { tournament_name: string | null })[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT t.*, tr.name as tournament_name
          FROM teams t
          LEFT JOIN tournaments tr ON tr.id = t.tournament_id
          WHERE t.created_by = ?
          ORDER BY t.created_at DESC`,
    args: [userId],
  })
  return result.rows as unknown as (Team & { tournament_name: string | null })[]
}

export async function getTournamentsOpenForRegistration(): Promise<Tournament[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: "SELECT * FROM tournaments WHERE open_registration = 1 AND status = 'active' ORDER BY created_at DESC",
  })
  return result.rows as unknown as Tournament[]
}

export async function getTournamentsWithTeamCount(): Promise<(Tournament & { team_count: number })[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT t.*,
          (SELECT COUNT(*) FROM teams WHERE tournament_id = t.id) as team_count
          FROM tournaments t
          WHERE t.open_registration = 1 AND t.status = 'active'
          ORDER BY t.created_at DESC`,
  })
  return result.rows as unknown as (Tournament & { team_count: number })[]
}

export async function getTeamById(id: string): Promise<Team | undefined> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM teams WHERE id = ?', args: [id] })
  return result.rows[0] as unknown as Team | undefined
}

export async function searchTeams(query: string): Promise<Team[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM teams WHERE name LIKE ? ORDER BY name LIMIT 10', args: [`%${query}%`] })
  return result.rows as unknown as Team[]
}

export async function deleteTeam(id: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'DELETE FROM teams WHERE id = ?', args: [id] })
}

export async function deleteAllTeams(tournamentId: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'DELETE FROM teams WHERE tournament_id = ?', args: [tournamentId] })
}

export async function removeTeamFromTournament(teamId: string, tournamentId: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'UPDATE teams SET tournament_id = NULL WHERE id = ? AND tournament_id = ?', args: [teamId, tournamentId] })
  await db.execute({ sql: 'DELETE FROM tournament_invitations WHERE team_id = ? AND tournament_id = ?', args: [teamId, tournamentId] })
  await db.execute({ sql: 'DELETE FROM matches WHERE tournament_id = ? AND (home_team_id = ? OR away_team_id = ?)', args: [tournamentId, teamId, teamId] })
}

export interface TournamentInvitation {
  id: string
  tournament_id: string
  team_id: string
  status: 'pending' | 'accepted' | 'rejected'
  created_by: string
  created_at: string
}

export async function getPendingInvitation(tournamentId: string, teamId: string): Promise<TournamentInvitation | undefined> {
  const db = await getDb()
  const result = await db.execute({
    sql: "SELECT * FROM tournament_invitations WHERE tournament_id = ? AND team_id = ? AND status = ?",
    args: [tournamentId, teamId, 'pending'],
  })
  return result.rows[0] as unknown as TournamentInvitation | undefined
}

export async function createInvitation(inv: Omit<TournamentInvitation, 'created_at'>): Promise<void> {
  const db = await getDb()
  await db.execute(
    'INSERT INTO tournament_invitations (id, tournament_id, team_id, status, created_by) VALUES (@id, @tournament_id, @team_id, @status, @created_by)',
    inv as any,
  )
}

export async function getInvitationsByTournament(tournamentId: string): Promise<(TournamentInvitation & { team_name: string; team_color: string })[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT i.*, t.name as team_name, t.color as team_color
          FROM tournament_invitations i
          JOIN teams t ON t.id = i.team_id
          WHERE i.tournament_id = ?
          ORDER BY i.created_at DESC`,
    args: [tournamentId],
  })
  return result.rows as unknown as (TournamentInvitation & { team_name: string; team_color: string })[]
}

export async function getInvitationsByUser(userId: string): Promise<(TournamentInvitation & { team_name: string; team_color: string; tournament_name: string })[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT i.*, t.name as team_name, t.color as team_color, tr.name as tournament_name
          FROM tournament_invitations i
          JOIN teams t ON t.id = i.team_id
          JOIN tournaments tr ON tr.id = i.tournament_id
          WHERE t.created_by = ?
          ORDER BY i.created_at DESC`,
    args: [userId],
  })
  return result.rows as unknown as (TournamentInvitation & { team_name: string; team_color: string; tournament_name: string })[]
}

export async function getInvitationById(id: string): Promise<TournamentInvitation | undefined> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM tournament_invitations WHERE id = ?', args: [id] })
  return result.rows[0] as unknown as TournamentInvitation | undefined
}

export async function updateInvitationStatus(id: string, status: 'accepted' | 'rejected'): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'UPDATE tournament_invitations SET status = ? WHERE id = ?', args: [status, id] })
}

export async function acceptInvitation(id: string): Promise<void> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM tournament_invitations WHERE id = ?', args: [id] })
  const inv = result.rows[0] as unknown as TournamentInvitation | undefined
  if (!inv) return
  await db.execute({ sql: "UPDATE tournament_invitations SET status = ? WHERE id = ?", args: ['accepted', id] })
  await db.execute({ sql: 'UPDATE teams SET tournament_id = ? WHERE id = ?', args: [inv.tournament_id, inv.team_id] })
}

export interface DBPlayer {
  id: string
  user_id: string | null
  name: string
  real_name: string | null
  age: number | null
  country: string | null
  city: string | null
  neighborhood: string | null
  preferred_foot: string | null
  position: string
  number: number | null
  bio: string | null
  image_big: string | null
  image_card: string | null
  direct_team_id: string | null
  created_at: string
}

export interface PlayerSocial {
  id: string
  player_id: string
  platform: string
  url: string | null
  followers: string | null
}

export async function getPlayerByUser(userId: string): Promise<DBPlayer | undefined> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM players WHERE user_id = ?', args: [userId] })
  return result.rows[0] as unknown as DBPlayer | undefined
}

export async function getPlayerById(id: string): Promise<DBPlayer | undefined> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM players WHERE id = ?', args: [id] })
  return result.rows[0] as unknown as DBPlayer | undefined
}

export async function getPlayerSocials(playerId: string): Promise<PlayerSocial[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM player_socials WHERE player_id = ?', args: [playerId] })
  return result.rows as unknown as PlayerSocial[]
}

export async function upsertPlayer(player: {
  id: string
  user_id: string | null
  name: string
  real_name: string | null
  age: number | null
  country: string | null
  city: string | null
  neighborhood: string | null
  preferred_foot: string | null
  position: string
  number: number | null
  bio: string | null
  image_big: string | null
  image_card: string | null
  direct_team_id?: string | null
}): Promise<void> {
  const db = await getDb()
  if (player.user_id) {
    await db.execute(
      `INSERT INTO players (id, user_id, name, real_name, age, country, city, neighborhood, preferred_foot, position, number, bio, image_big, image_card, direct_team_id)
       VALUES (@id, @user_id, @name, @real_name, @age, @country, @city, @neighborhood, @preferred_foot, @position, @number, @bio, @image_big, @image_card, @direct_team_id)
       ON CONFLICT(user_id) DO UPDATE SET
         name=@name, real_name=@real_name, age=@age, country=@country, city=@city,
         neighborhood=@neighborhood, preferred_foot=@preferred_foot, position=@position,
         number=@number, bio=@bio, image_big=@image_big, image_card=@image_card, direct_team_id=@direct_team_id`,
      player as any,
    )
  } else {
    await db.execute(
      `INSERT INTO players (id, user_id, name, real_name, age, country, city, neighborhood, preferred_foot, position, number, bio, image_big, image_card, direct_team_id)
       VALUES (@id, @user_id, @name, @real_name, @age, @country, @city, @neighborhood, @preferred_foot, @position, @number, @bio, @image_big, @image_card, @direct_team_id)`,
      player as any,
    )
  }
}

export async function savePlayerSocials(playerId: string, socials: { platform: string; url: string | null; followers: string | null }[]): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'DELETE FROM player_socials WHERE player_id = ?', args: [playerId] })
  for (const s of socials) {
    await db.execute({
      sql: 'INSERT INTO player_socials (id, player_id, platform, url, followers) VALUES (?, ?, ?, ?, ?)',
      args: [crypto.randomUUID(), playerId, s.platform, s.url, s.followers],
    })
  }
}

export interface Match {
  id: string
  tournament_id: string
  round: number
  home_team_id: string | null
  away_team_id: string | null
  home_score: number | null
  away_score: number | null
  scheduled_date: string | null
  venue: string | null
  status: string
  round_label: string | null
  elapsed_seconds?: number
  completed_at?: string | null
  created_at: string
}

export async function createMatch(m: Omit<Match, 'created_at'>): Promise<void> {
  const db = await getDb()
  await db.execute(
    `INSERT INTO matches (id, tournament_id, round, home_team_id, away_team_id, home_score, away_score, scheduled_date, venue, status, round_label)
     VALUES (@id, @tournament_id, @round, @home_team_id, @away_team_id, @home_score, @away_score, @scheduled_date, @venue, @status, @round_label)`,
    m as any,
  )
}

export async function getMatchesByTournament(tournamentId: string): Promise<Match[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM matches WHERE tournament_id = ? ORDER BY round, created_at', args: [tournamentId] })
  return result.rows as unknown as Match[]
}

export async function getAllTournaments(): Promise<Tournament[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM tournaments ORDER BY created_at DESC' })
  return result.rows as unknown as Tournament[]
}

export async function getActiveTournamentsWithMatches(): Promise<(Tournament & { matches: MatchWithTeams[] })[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: "SELECT * FROM tournaments ORDER BY start_date DESC",
  })
  const tournaments = result.rows as unknown as Tournament[]
  const out: (Tournament & { matches: MatchWithTeams[] })[] = []
  for (const t of tournaments) {
    const matches = await getMatchesByTournamentWithTeams(t.id)
    out.push({ ...t, matches })
  }
  return out
}

export interface MatchWithTournament extends Match {
  tournament_name: string
}

export async function getAllMatchesWithTournament(): Promise<MatchWithTournament[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT m.*, t.name as tournament_name
          FROM matches m
          JOIN tournaments t ON t.id = m.tournament_id
          ORDER BY m.scheduled_date, m.round`,
  })
  return result.rows as unknown as MatchWithTournament[]
}

export async function deleteAllMatches(tournamentId: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'DELETE FROM matches WHERE tournament_id = ?', args: [tournamentId] })
}

export async function getMatchByIdWithTeams(id: string): Promise<MatchWithTeams | undefined> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT m.*,
          ht.name as home_team_name, ht.logo as home_team_logo, ht.color as home_team_color,
          at.name as away_team_name, at.logo as away_team_logo, at.color as away_team_color
          FROM matches m
          LEFT JOIN teams ht ON ht.id = m.home_team_id
          LEFT JOIN teams at ON at.id = m.away_team_id
          WHERE m.id = ?`,
    args: [id],
  })
  return result.rows[0] as unknown as MatchWithTeams | undefined
}

export async function getMatchById(id: string): Promise<Match | undefined> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM matches WHERE id = ?', args: [id] })
  return result.rows[0] as unknown as Match | undefined
}

export async function updateMatch(id: string, data: Partial<Match>): Promise<void> {
  const db = await getDb()
  if (data.status === 'finished' || data.status === 'completed') {
    data.completed_at = new Date().toISOString()
  }
  const keys = Object.keys(data).filter(k => k !== 'id')
  if (keys.length === 0) return
  const setClause = keys.map(k => `${k} = ?`).join(', ')
  const values = keys.map(k => (data as any)[k])
  await db.execute({ sql: `UPDATE matches SET ${setClause} WHERE id = ?`, args: [...values, id] })
}

export async function isMatchEditable(id: string): Promise<boolean> {
  const match = await getMatchById(id)
  if (!match) return false
  if (match.status !== 'finished' && match.status !== 'completed') return true
  if (!match.completed_at) return true
  const completedAt = new Date(match.completed_at).getTime()
  const twoHoursLater = completedAt + 2 * 60 * 60 * 1000
  return Date.now() < twoHoursLater
}

export async function deleteMatch(id: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'DELETE FROM matches WHERE id = ?', args: [id] })
}

export interface MatchEvent {
  id: string
  match_id: string
  type: string
  team: string
  player: string
  player2: string
  minute: number
  detail: string
  team_request_id: string
  details_json: string
  created_at: string
}

export async function getMatchEvents(matchId: string): Promise<MatchEvent[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: 'SELECT * FROM match_events WHERE match_id = ? ORDER BY minute ASC',
    args: [matchId],
  })
  return result.rows as unknown as MatchEvent[]
}

export async function createMatchEvent(data: { match_id: string; type: string; team: string; player: string; player2?: string; minute: number; detail?: string; team_request_id?: string; details_json?: string }): Promise<string> {
  const db = await getDb()
  const id = crypto.randomUUID()
  await db.execute({
    sql: 'INSERT INTO match_events (id, match_id, type, team, player, player2, minute, detail, team_request_id, details_json) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    args: [id, data.match_id, data.type, data.team, data.player, data.player2 || '', data.minute, data.detail || '', data.team_request_id || '', data.details_json || ''],
  })
  return id
}

export async function deleteMatchEvent(id: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'DELETE FROM match_events WHERE id = ?', args: [id] })
}

export async function deleteAllMatchEvents(matchId: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'DELETE FROM match_events WHERE match_id = ?', args: [matchId] })
}

export interface MatchLineup {
  id: string
  match_id: string
  team_id: string
  formation: string
  lineup: string
  subs: string
  kit: number
  created_at: string
  updated_at: string
}

export async function saveMatchLineup(matchId: string, teamId: string, formation: string, lineup: string, subs: string, kit: number = 0): Promise<void> {
  const db = await getDb()
  const existing = await db.execute({
    sql: 'SELECT id FROM match_lineups WHERE match_id = ? AND team_id = ?',
    args: [matchId, teamId],
  })
  if (existing.rows.length > 0) {
    await db.execute({
      sql: "UPDATE match_lineups SET formation = ?, lineup = ?, subs = ?, kit = ?, updated_at = datetime('now') WHERE match_id = ? AND team_id = ?",
      args: [formation, lineup, subs, kit, matchId, teamId],
    })
  } else {
    await db.execute({
      sql: 'INSERT INTO match_lineups (id, match_id, team_id, formation, lineup, subs, kit) VALUES (?, ?, ?, ?, ?, ?, ?)',
      args: [crypto.randomUUID(), matchId, teamId, formation, lineup, subs, kit],
    })
  }
}

export async function getMatchLineup(matchId: string, teamId: string): Promise<MatchLineup | undefined> {
  const db = await getDb()
  const result = await db.execute({
    sql: 'SELECT * FROM match_lineups WHERE match_id = ? AND team_id = ?',
    args: [matchId, teamId],
  })
  return result.rows[0] as unknown as MatchLineup | undefined
}

export interface TeamRequest {
  id: string
  player_id: string
  team_id: string
  message: string | null
  status: 'pending' | 'accepted' | 'rejected'
  type: 'request' | 'invite'
  created_at: string
}

export interface TeamRequestWithDetails extends TeamRequest {
  player_name: string
  player_position: string
  player_age: number | null
  player_image: string | null
  player_image_card: string | null
  team_name: string
  team_color: string | null
}

export async function createTeamRequest(req: Omit<TeamRequest, 'created_at'>): Promise<void> {
  const db = await getDb()
  await db.execute(
    'INSERT INTO team_requests (id, player_id, team_id, message, status, type) VALUES (@id, @player_id, @team_id, @message, @status, @type)',
    req as any,
  )
}

export async function getTeamRequestsByPlayer(playerId: string): Promise<TeamRequest[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM team_requests WHERE player_id = ? ORDER BY created_at DESC', args: [playerId] })
  return result.rows as unknown as TeamRequest[]
}

export async function getTeamRequestsByPlayerWithTeam(playerId: string): Promise<(TeamRequest & { team_name: string; team_color: string | null })[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT r.*, t.name as team_name, t.color as team_color
          FROM team_requests r
          JOIN teams t ON t.id = r.team_id
          WHERE r.player_id = ?
          ORDER BY r.created_at DESC`,
    args: [playerId],
  })
  return result.rows as unknown as (TeamRequest & { team_name: string; team_color: string | null })[]
}

export async function getTeamRequestsByOwner(userId: string): Promise<TeamRequestWithDetails[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT r.*, p.name as player_name, p.position as player_position, p.age as player_age, p.image_big as player_image, p.image_card as player_image_card,
                 t.name as team_name, t.color as team_color
          FROM team_requests r
          JOIN teams t ON t.id = r.team_id
          JOIN players p ON p.id = r.player_id
          WHERE t.created_by = ?
          ORDER BY r.created_at DESC`,
    args: [userId],
  })
  return result.rows as unknown as TeamRequestWithDetails[]
}

export async function getTeamRequestById(id: string): Promise<TeamRequest | undefined> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM team_requests WHERE id = ?', args: [id] })
  return result.rows[0] as unknown as TeamRequest | undefined
}

export async function updateTeamRequestStatus(id: string, status: 'accepted' | 'rejected'): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'UPDATE team_requests SET status = ? WHERE id = ?', args: [status, id] })
}

export async function getPlayerAcceptedTeam(playerId: string): Promise<(TeamRequest & { team_name: string; team_color: string | null; team_tournament_id: string | null }) | undefined> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT r.*, t.name as team_name, t.color as team_color, t.tournament_id as team_tournament_id
          FROM team_requests r
          JOIN teams t ON t.id = r.team_id
          WHERE r.player_id = ? AND r.status = 'accepted'
          LIMIT 1`,
    args: [playerId],
  })
  return result.rows[0] as unknown as (TeamRequest & { team_name: string; team_color: string | null; team_tournament_id: string | null }) | undefined
}

export async function updateTeam(id: string, data: { name?: string; logo?: string | null; color?: string }): Promise<void> {
  const db = await getDb()
  const sets: string[] = []
  const args: any[] = []
  if (data.name !== undefined) { sets.push('name = ?'); args.push(data.name) }
  if (data.logo !== undefined) { sets.push('logo = ?'); args.push(data.logo) }
  if (data.color !== undefined) { sets.push('color = ?'); args.push(data.color) }
  if (sets.length === 0) return
  args.push(id)
  await db.execute({ sql: `UPDATE teams SET ${sets.join(', ')} WHERE id = ?`, args })
}

export async function deleteTeamRequest(id: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'DELETE FROM team_requests WHERE id = ?', args: [id] })
}

export interface Notification {
  id: string
  user_id: string
  type: string
  title: string | null
  message: string | null
  related_id: string | null
  read: number
  created_at: string
}

export interface MatchReferee {
  id: string
  match_id: string
  referee_id: string
  status: 'pending' | 'accepted' | 'rejected'
  created_at: string
}

export async function assignRefereeToMatch(matchId: string, refereeId: string): Promise<string> {
  const db = await getDb()
  const id = crypto.randomUUID()
  await db.execute({
    sql: "INSERT INTO match_referees (id, match_id, referee_id, status) VALUES (?, ?, ?, 'pending')",
    args: [id, matchId, refereeId],
  })
  return id
}

export async function getMatchReferees(matchId: string): Promise<MatchReferee[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM match_referees WHERE match_id = ? ORDER BY created_at', args: [matchId] })
  return result.rows as unknown as MatchReferee[]
}

export async function updateMatchRefereeStatus(id: string, status: 'accepted' | 'rejected'): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'UPDATE match_referees SET status = ? WHERE id = ?', args: [status, id] })
}

export interface MatchWithRefereeData {
  id: string
  tournament_id: string
  tournament_name: string
  round: number
  round_label: string | null
  home_team_id: string | null
  away_team_id: string | null
  home_team_name: string | null
  home_team_color: string | null
  away_team_name: string | null
  away_team_color: string | null
  scheduled_date: string | null
  venue: string | null
  status: string
  referee_id: string | null
  referee_status: string | null
  match_referee_id: string | null
}

export async function getMatchesByReferee(refereeId: string): Promise<MatchWithRefereeData[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT m.*, t.name as tournament_name,
          ht.name as home_team_name, ht.color as home_team_color,
          at.name as away_team_name, at.color as away_team_color,
          mr.id as match_referee_id, mr.status as referee_status
          FROM matches m
          JOIN tournaments t ON t.id = m.tournament_id
          LEFT JOIN teams ht ON ht.id = m.home_team_id
          LEFT JOIN teams at ON at.id = m.away_team_id
          LEFT JOIN match_referees mr ON mr.match_id = m.id AND mr.referee_id = ?
          WHERE mr.referee_id = ?
          ORDER BY m.scheduled_date`,
    args: [refereeId, refereeId],
  })
  return result.rows as unknown as MatchWithRefereeData[]
}

export async function searchReferees(query: string): Promise<{ id: string; name: string; email: string }[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: "SELECT id, name, email FROM users WHERE role = 'referee' AND (name LIKE ? OR email LIKE ?) ORDER BY name LIMIT 10",
    args: [`%${query}%`, `%${query}%`],
  })
  return result.rows as unknown as { id: string; name: string; email: string }[]
}

export async function createNotification(n: Omit<Notification, 'created_at'>): Promise<void> {
  const db = await getDb()
  await db.execute(
    'INSERT INTO notifications (id, user_id, type, title, message, related_id, read) VALUES (@id, @user_id, @type, @title, @message, @related_id, @read)',
    n as any,
  )
}

export async function getNotificationsByUser(userId: string): Promise<Notification[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 50', args: [userId] })
  return result.rows as unknown as Notification[]
}

export async function markNotificationRead(id: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'UPDATE notifications SET read = 1 WHERE id = ?', args: [id] })
}

export async function markAllNotificationsRead(userId: string): Promise<void> {
  const db = await getDb()
  await db.execute({ sql: 'UPDATE notifications SET read = 1 WHERE user_id = ? AND read = 0', args: [userId] })
}

export async function getUnreadNotificationCount(userId: string): Promise<number> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT COUNT(*) as count FROM notifications WHERE user_id = ? AND read = 0', args: [userId] })
  const row = result.rows[0] as unknown as { count: number } | undefined
  return row?.count ?? 0
}

export async function searchPlayers(query: string): Promise<DBPlayer[]> {
  const db = await getDb()
  const result = await db.execute({ sql: 'SELECT * FROM players WHERE name LIKE ? ORDER BY name LIMIT 10', args: [`%${query}%`] })
  return result.rows as unknown as DBPlayer[]
}

export async function addPlayerToTeam(params: {
  id: string
  name: string
  number: number | null
  position: string
  image_big: string | null
  image_card: string | null
  teamId: string
}): Promise<{ playerId: string; requestId: string }> {
  const db = await getDb()
  await ensurePlayersTable(db)
  const playerId = params.id || crypto.randomUUID()
  await db.execute({
    sql: `INSERT INTO players (id, user_id, name, position, number, image_big, image_card, direct_team_id)
          VALUES (?, NULL, ?, ?, ?, ?, ?, ?)`,
    args: [playerId, params.name, params.position, params.number, params.image_big, params.image_card, params.teamId],
  })
  const requestId = crypto.randomUUID()
  await db.execute({
    sql: `INSERT INTO team_requests (id, player_id, team_id, status, type)
          VALUES (?, ?, ?, 'accepted', 'direct')`,
    args: [requestId, playerId, params.teamId],
  })
  return { playerId, requestId }
}

export async function getTeamSquadByOwner(userId: string): Promise<(TeamRequestWithDetails & { user_id: string | null })[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT r.*, p.name as player_name, p.position as player_position, p.age as player_age, p.image_big as player_image, p.image_card as player_image_card,
                 p.user_id, t.name as team_name, t.color as team_color
          FROM team_requests r
          JOIN teams t ON t.id = r.team_id
          JOIN players p ON p.id = r.player_id
          WHERE t.created_by = ? AND r.status = 'accepted'
          ORDER BY r.created_at DESC`,
    args: [userId],
  })
  return result.rows as unknown as (TeamRequestWithDetails & { user_id: string | null })[]
}

export async function getTeamPendingInvitesByOwner(userId: string): Promise<(TeamRequestWithDetails & { user_id: string | null })[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT r.*, p.name as player_name, p.position as player_position, p.age as player_age, p.image_big as player_image, p.image_card as player_image_card,
                 p.user_id, t.name as team_name, t.color as team_color
          FROM team_requests r
          JOIN teams t ON t.id = r.team_id
          JOIN players p ON p.id = r.player_id
          WHERE t.created_by = ? AND r.status = 'pending' AND r.type = 'request'
          ORDER BY r.created_at DESC`,
    args: [userId],
  })
  return result.rows as unknown as (TeamRequestWithDetails & { user_id: string | null })[]
}

// ─── PLAYER STATS / DISCIPLINE ───

export interface PlayerTournamentStat {
  team_request_id: string
  player_id: string
  player_name: string
  player_image_card: string | null
  team_name: string
  team_id: string
  goals: number
  assists: number
  yellows: number
  reds: number
  matches_played: number
}

export async function getPlayerTournamentStats(tournamentId: string): Promise<PlayerTournamentStat[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `
      SELECT
        me.team_request_id,
        r.player_id,
        p.name as player_name,
        p.image_card as player_image_card,
        t.name as team_name,
        t.id as team_id,
        SUM(CASE WHEN me.type = 'goal' THEN 1 ELSE 0 END) as goals,
        SUM(CASE WHEN me.type = 'assist' THEN 1 ELSE 0 END) as assists,
        SUM(CASE WHEN me.type = 'yellow' THEN 1 ELSE 0 END) as yellows,
        SUM(CASE WHEN me.type = 'red' THEN 1 ELSE 0 END) as reds,
        COUNT(DISTINCT me.match_id) as matches_played
      FROM match_events me
      JOIN matches m ON m.id = me.match_id
      JOIN team_requests r ON r.id = me.team_request_id
      JOIN players p ON p.id = r.player_id
      JOIN teams t ON t.id = r.team_id
      WHERE m.tournament_id = ? AND me.team_request_id != ''
      GROUP BY me.team_request_id
      ORDER BY goals DESC
    `,
    args: [tournamentId],
  })
  return result.rows as unknown as PlayerTournamentStat[]
}

export interface PlayerDisciplineInfo {
  match_id: string
  match_round: number
  match_round_label: string | null
  yellows: number
  reds: number
}

export async function getPlayerDisciplineByMatch(tournamentId: string, teamRequestId: string): Promise<PlayerDisciplineInfo[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `
      SELECT
        me.match_id,
        m.round as match_round,
        m.round_label as match_round_label,
        SUM(CASE WHEN me.type = 'yellow' THEN 1 ELSE 0 END) as yellows,
        SUM(CASE WHEN me.type = 'red' THEN 1 ELSE 0 END) as reds
      FROM match_events me
      JOIN matches m ON m.id = me.match_id
      WHERE me.team_request_id = ? AND m.tournament_id = ? AND m.status IN ('finished', 'live')
      GROUP BY me.match_id
      ORDER BY m.round ASC
    `,
    args: [teamRequestId, tournamentId],
  })
  return result.rows as unknown as PlayerDisciplineInfo[]
}

export async function isPlayerSuspended(tournamentId: string, teamRequestId: string, currentMatchRound: number): Promise<boolean> {
  const discipline = await getPlayerDisciplineByMatch(tournamentId, teamRequestId)
  const priorMatches = discipline.filter(d => d.match_round < currentMatchRound)
  const hadRed = priorMatches.some(d => d.reds > 0)
  if (hadRed) return true
  const matchesWithYellow = priorMatches.filter(d => d.yellows > 0).length
  if (matchesWithYellow >= 2) return true
  return false
}

export interface PlayerSquadStats extends TeamRequestWithDetails {
  user_id: string | null
  goals: number
  assists: number
  yellows: number
  reds: number
  suspended: boolean
}

export async function getTeamSquadWithStats(tournamentId: string, teamId: string, currentMatchRound: number): Promise<PlayerSquadStats[]> {
  const squad = await getTeamSquadByTeamId(teamId)
  const db = await getDb()
  const statsResult = await db.execute({
    sql: `
      SELECT
        me.team_request_id,
        SUM(CASE WHEN me.type = 'goal' THEN 1 ELSE 0 END) as goals,
        SUM(CASE WHEN me.type = 'assist' THEN 1 ELSE 0 END) as assists,
        SUM(CASE WHEN me.type = 'yellow' THEN 1 ELSE 0 END) as yellows,
        SUM(CASE WHEN me.type = 'red' THEN 1 ELSE 0 END) as reds
      FROM match_events me
      JOIN matches m ON m.id = me.match_id
      WHERE m.tournament_id = ? AND me.team_request_id != ''
      GROUP BY me.team_request_id
    `,
    args: [tournamentId],
  })
  const statsMap: Record<string, { goals: number; assists: number; yellows: number; reds: number }> = {}
  for (const row of statsResult.rows as unknown as { team_request_id: string; goals: number; assists: number; yellows: number; reds: number }[]) {
    statsMap[row.team_request_id] = row
  }
  const result: PlayerSquadStats[] = []
  for (const s of squad) {
    const st = statsMap[s.id] || { goals: 0, assists: 0, yellows: 0, reds: 0 }
    const suspended = await isPlayerSuspended(tournamentId, s.id, currentMatchRound)
    result.push({
      ...s,
      goals: st.goals,
      assists: st.assists,
      yellows: st.yellows,
      reds: st.reds,
      suspended,
    })
  }
  return result
}

export interface PlayerAggStats {
  goals: number
  assists: number
  yellows: number
  reds: number
  matches_played: number
  tournament_name: string | null
  tournament_id: string | null
  team_name: string | null
}

export async function getPlayerAggStats(playerId: string): Promise<PlayerAggStats> {
  const db = await getDb()
  // Find the player's current active team
  const teamReq = await db.execute({
    sql: `SELECT r.id as team_request_id, t.id as team_id, t.name as team_name, t.tournament_id
          FROM team_requests r
          JOIN teams t ON t.id = r.team_id
          WHERE r.player_id = ? AND r.status = 'accepted'
          LIMIT 1`,
    args: [playerId],
  })
  const tr = teamReq.rows[0] as unknown as { team_request_id: string; team_id: string; team_name: string; tournament_id: string } | undefined
  if (!tr || !tr.tournament_id) {
    return { goals: 0, assists: 0, yellows: 0, reds: 0, matches_played: 0, tournament_name: null, tournament_id: null, team_name: tr?.team_name || null }
  }

  const tourRes = await db.execute({ sql: 'SELECT name FROM tournaments WHERE id = ?', args: [tr.tournament_id] })
  const tourName = (tourRes.rows[0] as unknown as { name: string } | undefined)?.name || null

  const statsRes = await db.execute({
    sql: `
      SELECT
        SUM(CASE WHEN me.type = 'goal' THEN 1 ELSE 0 END) as goals,
        SUM(CASE WHEN me.type = 'assist' THEN 1 ELSE 0 END) as assists,
        SUM(CASE WHEN me.type = 'yellow' THEN 1 ELSE 0 END) as yellows,
        SUM(CASE WHEN me.type = 'red' THEN 1 ELSE 0 END) as reds,
        COUNT(DISTINCT me.match_id) as matches_played
      FROM match_events me
      JOIN matches m ON m.id = me.match_id
      WHERE me.team_request_id = ? AND m.tournament_id = ?
    `,
    args: [tr.team_request_id, tr.tournament_id],
  })
  const row = statsRes.rows[0] as unknown as { goals: number; assists: number; yellows: number; reds: number; matches_played: number } | undefined
  return {
    goals: row?.goals || 0,
    assists: row?.assists || 0,
    yellows: row?.yellows || 0,
    reds: row?.reds || 0,
    matches_played: row?.matches_played || 0,
    tournament_name: tourName,
    tournament_id: tr.tournament_id,
    team_name: tr.team_name,
  }
}


export interface MatchWithTeams extends Match {
  home_team_name: string | null
  home_team_logo: string | null
  home_team_color: string | null
  away_team_name: string | null
  away_team_logo: string | null
  away_team_color: string | null
}

export async function getMatchesByTournamentWithTeams(tournamentId: string): Promise<MatchWithTeams[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT m.*,
          ht.name as home_team_name, ht.logo as home_team_logo, ht.color as home_team_color,
          at.name as away_team_name, at.logo as away_team_logo, at.color as away_team_color
          FROM matches m
          LEFT JOIN teams ht ON ht.id = m.home_team_id
          LEFT JOIN teams at ON at.id = m.away_team_id
          WHERE m.tournament_id = ?
          ORDER BY m.scheduled_date, m.round, m.created_at`,
    args: [tournamentId],
  })
  return result.rows as unknown as MatchWithTeams[]
}

export async function getTeamSquadByTeamId(teamId: string): Promise<(TeamRequestWithDetails & { user_id: string | null })[]> {
  const db = await getDb()
  const result = await db.execute({
    sql: `SELECT r.*, p.name as player_name, p.position as player_position, p.age as player_age, p.image_big as player_image, p.image_card as player_image_card,
                 p.user_id, t.name as team_name, t.color as team_color
          FROM team_requests r
          JOIN teams t ON t.id = r.team_id
          JOIN players p ON p.id = r.player_id
          WHERE r.team_id = ? AND r.status = 'accepted'
          ORDER BY r.created_at DESC`,
    args: [teamId],
  })
  return result.rows as unknown as (TeamRequestWithDetails & { user_id: string | null })[]
}
