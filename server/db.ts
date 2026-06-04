import Database from 'better-sqlite3'
import path from 'node:path'

const DB_PATH = process.env.DB_PATH || path.join(process.cwd(), 'data', 'keku.db')

let _db: Database.Database | null = null

export function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH)
    _db.pragma('journal_mode = WAL')
    _db.pragma('foreign_keys = ON')
    initTables()
    migrateTables()
  }
  return _db
}

function migrateTables() {
  // Add new columns to existing tables
  try { _db!.exec(`ALTER TABLE teams ADD COLUMN color TEXT DEFAULT '#00ff88'`) } catch {}
  try { _db!.exec(`ALTER TABLE teams ADD COLUMN category TEXT DEFAULT ''`) } catch {}

  // Fix: make tournament_id nullable — only if still NOT NULL
  const colInfo = _db!.prepare("PRAGMA table_info('teams')").all() as { name: string; notnull: number }[]
  const tIdCol = colInfo.find(c => c.name === 'tournament_id')
  if (tIdCol && tIdCol.notnull === 1) {
    _db!.exec(`
      CREATE TABLE teams_migrated (
        id TEXT PRIMARY KEY,
        tournament_id TEXT,
        name TEXT NOT NULL,
        logo TEXT,
        color TEXT DEFAULT '#00ff88',
        category TEXT DEFAULT '',
        created_by TEXT,
        created_at TEXT DEFAULT (datetime('now')),
        FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
      );
      INSERT INTO teams_migrated (id, tournament_id, name, logo, color, category, created_by, created_at)
        SELECT id, tournament_id, name, logo, IFNULL(color, '#00ff88'), IFNULL(category, ''), created_by, created_at FROM teams;
      DROP TABLE teams;
      ALTER TABLE teams_migrated RENAME TO teams;
    `)
  }
}

function initTables() {
  _db!.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT NOT NULL CHECK(role IN ('admin','tecnico','referee','jugador')),
      created_at TEXT DEFAULT (datetime('now'))
    );

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
    );

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
    );

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
    );

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
    );

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
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
      FOREIGN KEY (home_team_id) REFERENCES teams(id),
      FOREIGN KEY (away_team_id) REFERENCES teams(id)
    );

    CREATE TABLE IF NOT EXISTS players (
      id TEXT PRIMARY KEY,
      user_id TEXT UNIQUE NOT NULL,
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
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS player_socials (
      id TEXT PRIMARY KEY,
      player_id TEXT NOT NULL,
      platform TEXT NOT NULL,
      url TEXT,
      followers TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS team_requests (
      id TEXT PRIMARY KEY,
      player_id TEXT NOT NULL,
      team_id TEXT NOT NULL,
      message TEXT,
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','accepted','rejected')),
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE,
      FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
    );

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
    );
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

export function findUserByEmail(email: string): User | undefined {
  return getDb().prepare('SELECT * FROM users WHERE email = ?').get(email) as User | undefined
}

export function findUserById(id: string): User | undefined {
  return getDb().prepare('SELECT * FROM users WHERE id = ?').get(id) as User | undefined
}

export function createUser(id: string, email: string, password: string, name: string, role: UserRole): void {
  getDb().prepare(`
    INSERT INTO users (id, email, password, name, role)
    VALUES (?, ?, ?, ?, ?)
  `).run(id, email, password, name, role)
}

// ── Tournament types ──

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

// ── Tournament CRUD ──

export function createTournament(tournament: Omit<Tournament, 'created_at'>): void {
  getDb().prepare(`
    INSERT INTO tournaments (
      id, name, description, logo, venue, city, start_date, end_date,
      format, num_teams, players_per_team, match_duration, points_per_win,
      rules, open_registration, reg_deadline, registration_fee,
      min_age, max_age, requirements, prizes, awards, notes,
      status, created_by
    ) VALUES (
      @id, @name, @description, @logo, @venue, @city, @start_date, @end_date,
      @format, @num_teams, @players_per_team, @match_duration, @points_per_win,
      @rules, @open_registration, @reg_deadline, @registration_fee,
      @min_age, @max_age, @requirements, @prizes, @awards, @notes,
      @status, @created_by
    )
  `).run(tournament)
}

export function createCategory(category: Omit<Category, 'created_at'>): void {
  getDb().prepare(`
    INSERT INTO categories (id, tournament_id, name, description, min_age, max_age, gender, max_teams)
    VALUES (@id, @tournament_id, @name, @description, @min_age, @max_age, @gender, @max_teams)
  `).run(category)
}

export function getTournamentsByUser(userId: string): Tournament[] {
  return getDb().prepare('SELECT * FROM tournaments WHERE created_by = ? ORDER BY created_at DESC').all(userId) as Tournament[]
}

export function getTournamentById(id: string): Tournament | undefined {
  return getDb().prepare('SELECT * FROM tournaments WHERE id = ?').get(id) as Tournament | undefined
}

export function getCategoriesByTournament(tournamentId: string): Category[] {
  return getDb().prepare('SELECT * FROM categories WHERE tournament_id = ? ORDER BY name').all(tournamentId) as Category[]
}

// ── Team types ──

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

export function createTeam(team: Omit<Team, 'created_at'>): void {
  getDb().prepare(`
    INSERT INTO teams (id, tournament_id, name, logo, color, category, created_by)
    VALUES (@id, @tournament_id, @name, @logo, @color, @category, @created_by)
  `).run(team)
}

export function getTeamsByTournament(tournamentId: string): Team[] {
  return getDb().prepare('SELECT * FROM teams WHERE tournament_id = ? ORDER BY name').all(tournamentId) as Team[]
}

export function getTeamsByUser(userId: string): (Team & { tournament_name: string | null })[] {
  return getDb().prepare(`
    SELECT t.*, tr.name as tournament_name
    FROM teams t
    LEFT JOIN tournaments tr ON tr.id = t.tournament_id
    WHERE t.created_by = ?
    ORDER BY t.created_at DESC
  `).all(userId) as (Team & { tournament_name: string | null })[]
}

export function getTournamentsOpenForRegistration(): Tournament[] {
  return getDb().prepare(`
    SELECT * FROM tournaments
    WHERE open_registration = 1 AND status = 'active'
    ORDER BY created_at DESC
  `).all() as Tournament[]
}

export function searchTeams(query: string): Team[] {
  return getDb().prepare(
    'SELECT * FROM teams WHERE name LIKE ? ORDER BY name LIMIT 10'
  ).all(`%${query}%`) as Team[]
}

export function deleteTeam(id: string): void {
  getDb().prepare('DELETE FROM teams WHERE id = ?').run(id)
}

export function deleteAllTeams(tournamentId: string): void {
  getDb().prepare('DELETE FROM teams WHERE tournament_id = ?').run(tournamentId)
}

export function removeTeamFromTournament(teamId: string, tournamentId: string): void {
  getDb().prepare('UPDATE teams SET tournament_id = NULL WHERE id = ? AND tournament_id = ?').run(teamId, tournamentId)
  getDb().prepare('DELETE FROM tournament_invitations WHERE team_id = ? AND tournament_id = ?').run(teamId, tournamentId)
  getDb().prepare('DELETE FROM matches WHERE tournament_id = ? AND (home_team_id = ? OR away_team_id = ?)').run(tournamentId, teamId, teamId)
}

// ── Invitation types ──

export interface TournamentInvitation {
  id: string
  tournament_id: string
  team_id: string
  status: 'pending' | 'accepted' | 'rejected'
  created_by: string
  created_at: string
}

export function getPendingInvitation(tournamentId: string, teamId: string): TournamentInvitation | undefined {
  return getDb().prepare(
    'SELECT * FROM tournament_invitations WHERE tournament_id = ? AND team_id = ? AND status = ?'
  ).get(tournamentId, teamId, 'pending') as TournamentInvitation | undefined
}

export function createInvitation(inv: Omit<TournamentInvitation, 'created_at'>): void {
  getDb().prepare(`
    INSERT INTO tournament_invitations (id, tournament_id, team_id, status, created_by)
    VALUES (@id, @tournament_id, @team_id, @status, @created_by)
  `).run(inv)
}

export function getInvitationsByTournament(tournamentId: string): (TournamentInvitation & { team_name: string; team_color: string })[] {
  return getDb().prepare(`
    SELECT i.*, t.name as team_name, t.color as team_color
    FROM tournament_invitations i
    JOIN teams t ON t.id = i.team_id
    WHERE i.tournament_id = ?
    ORDER BY i.created_at DESC
  `).all(tournamentId) as (TournamentInvitation & { team_name: string; team_color: string })[]
}

export function getInvitationsByUser(userId: string): (TournamentInvitation & { team_name: string; team_color: string; tournament_name: string })[] {
  return getDb().prepare(`
    SELECT i.*, t.name as team_name, t.color as team_color, tr.name as tournament_name
    FROM tournament_invitations i
    JOIN teams t ON t.id = i.team_id
    JOIN tournaments tr ON tr.id = i.tournament_id
    WHERE t.created_by = ?
    ORDER BY i.created_at DESC
  `).all(userId) as (TournamentInvitation & { team_name: string; team_color: string; tournament_name: string })[]
}

export function updateInvitationStatus(id: string, status: 'accepted' | 'rejected'): void {
  getDb().prepare('UPDATE tournament_invitations SET status = ? WHERE id = ?').run(status, id)
}

export function acceptInvitation(id: string): void {
  const inv = getDb().prepare('SELECT * FROM tournament_invitations WHERE id = ?').get(id) as TournamentInvitation | undefined
  if (!inv) return
  getDb().prepare('UPDATE tournament_invitations SET status = ? WHERE id = ?').run('accepted', id)
  getDb().prepare('UPDATE teams SET tournament_id = ? WHERE id = ?').run(inv.tournament_id, inv.team_id)
}

// ── Player types ──

export interface DBPlayer {
  id: string
  user_id: string
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
  created_at: string
}

export interface PlayerSocial {
  id: string
  player_id: string
  platform: string
  url: string | null
  followers: string | null
}

export function getPlayerByUser(userId: string): DBPlayer | undefined {
  return getDb().prepare('SELECT * FROM players WHERE user_id = ?').get(userId) as DBPlayer | undefined
}

export function getPlayerById(id: string): DBPlayer | undefined {
  return getDb().prepare('SELECT * FROM players WHERE id = ?').get(id) as DBPlayer | undefined
}

export function getPlayerSocials(playerId: string): PlayerSocial[] {
  return getDb().prepare('SELECT * FROM player_socials WHERE player_id = ?').all(playerId) as PlayerSocial[]
}

export function upsertPlayer(player: {
  id: string
  user_id: string
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
}): void {
  getDb().prepare(`
    INSERT INTO players (id, user_id, name, real_name, age, country, city, neighborhood, preferred_foot, position, number, bio, image_big, image_card)
    VALUES (@id, @user_id, @name, @real_name, @age, @country, @city, @neighborhood, @preferred_foot, @position, @number, @bio, @image_big, @image_card)
    ON CONFLICT(user_id) DO UPDATE SET
      name=@name, real_name=@real_name, age=@age, country=@country, city=@city,
      neighborhood=@neighborhood, preferred_foot=@preferred_foot, position=@position,
      number=@number, bio=@bio, image_big=@image_big, image_card=@image_card
  `).run(player)
}

export function savePlayerSocials(playerId: string, socials: { platform: string; url: string | null; followers: string | null }[]): void {
  getDb().prepare('DELETE FROM player_socials WHERE player_id = ?').run(playerId)
  const insert = getDb().prepare('INSERT INTO player_socials (id, player_id, platform, url, followers) VALUES (?, ?, ?, ?, ?)')
  for (const s of socials) {
    insert.run(crypto.randomUUID(), playerId, s.platform, s.url, s.followers)
  }
}

// ── Match types ──

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
  created_at: string
}

export function createMatch(m: Omit<Match, 'created_at'>): void {
  getDb().prepare(`
    INSERT INTO matches (id, tournament_id, round, home_team_id, away_team_id, home_score, away_score, scheduled_date, venue, status)
    VALUES (@id, @tournament_id, @round, @home_team_id, @away_team_id, @home_score, @away_score, @scheduled_date, @venue, @status)
  `).run(m)
}

export function getMatchesByTournament(tournamentId: string): Match[] {
  return getDb().prepare('SELECT * FROM matches WHERE tournament_id = ? ORDER BY round, created_at').all(tournamentId) as Match[]
}

export function getAllTournaments(): Tournament[] {
  return getDb().prepare('SELECT * FROM tournaments ORDER BY created_at DESC').all() as Tournament[]
}

export interface MatchWithTournament extends Match {
  tournament_name: string
}

export function getAllMatchesWithTournament(): MatchWithTournament[] {
  return getDb().prepare(`
    SELECT m.*, t.name as tournament_name
    FROM matches m
    JOIN tournaments t ON t.id = m.tournament_id
    ORDER BY m.scheduled_date, m.round
  `).all() as MatchWithTournament[]
}

export function deleteAllMatches(tournamentId: string): void {
  getDb().prepare('DELETE FROM matches WHERE tournament_id = ?').run(tournamentId)
}

export function updateMatch(id: string, data: Partial<Match>): void {
  const fields = Object.keys(data).filter(k => k !== 'id').map(k => `${k} = @${k}`).join(', ')
  if (!fields) return
  getDb().prepare(`UPDATE matches SET ${fields} WHERE id = @id`).run({ ...data, id })
}

export function deleteMatch(id: string): void {
  getDb().prepare('DELETE FROM matches WHERE id = ?').run(id)
}

// ── Team Request types ──

export interface TeamRequest {
  id: string
  player_id: string
  team_id: string
  message: string | null
  status: 'pending' | 'accepted' | 'rejected'
  created_at: string
}

export interface TeamRequestWithDetails extends TeamRequest {
  player_name: string
  player_position: string
  player_age: number | null
  player_image: string | null
  team_name: string
  team_color: string | null
}

export function createTeamRequest(req: Omit<TeamRequest, 'created_at'>): void {
  getDb().prepare(`
    INSERT INTO team_requests (id, player_id, team_id, message, status)
    VALUES (@id, @player_id, @team_id, @message, @status)
  `).run(req)
}

export function getTeamRequestsByPlayer(playerId: string): TeamRequest[] {
  return getDb().prepare(
    'SELECT * FROM team_requests WHERE player_id = ? ORDER BY created_at DESC'
  ).all(playerId) as TeamRequest[]
}

export function getTeamRequestsByOwner(userId: string): TeamRequestWithDetails[] {
  return getDb().prepare(`
    SELECT r.*, p.name as player_name, p.position as player_position, p.age as player_age, p.image_big as player_image,
           t.name as team_name, t.color as team_color
    FROM team_requests r
    JOIN teams t ON t.id = r.team_id
    JOIN players p ON p.id = r.player_id
    WHERE t.created_by = ?
    ORDER BY r.created_at DESC
  `).all(userId) as TeamRequestWithDetails[]
}

export function getTeamRequestById(id: string): TeamRequest | undefined {
  return getDb().prepare('SELECT * FROM team_requests WHERE id = ?').get(id) as TeamRequest | undefined
}

export function updateTeamRequestStatus(id: string, status: 'accepted' | 'rejected'): void {
  getDb().prepare('UPDATE team_requests SET status = ? WHERE id = ?').run(status, id)
}

export function getPlayerAcceptedTeam(playerId: string): (TeamRequest & { team_name: string; team_color: string | null }) | undefined {
  return getDb().prepare(`
    SELECT r.*, t.name as team_name, t.color as team_color
    FROM team_requests r
    JOIN teams t ON t.id = r.team_id
    WHERE r.player_id = ? AND r.status = 'accepted'
    LIMIT 1
  `).get(playerId) as (TeamRequest & { team_name: string; team_color: string | null }) | undefined
}

// ── Notification types ──

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

export function createNotification(n: Omit<Notification, 'created_at'>): void {
  getDb().prepare(`
    INSERT INTO notifications (id, user_id, type, title, message, related_id, read)
    VALUES (@id, @user_id, @type, @title, @message, @related_id, @read)
  `).run(n)
}

export function getNotificationsByUser(userId: string): Notification[] {
  return getDb().prepare(
    'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 50'
  ).all(userId) as Notification[]
}

export function markNotificationRead(id: string): void {
  getDb().prepare('UPDATE notifications SET read = 1 WHERE id = ?').run(id)
}

export function markAllNotificationsRead(userId: string): void {
  getDb().prepare('UPDATE notifications SET read = 1 WHERE user_id = ? AND read = 0').run(userId)
}

export function getUnreadNotificationCount(userId: string): number {
  const row = getDb().prepare(
    'SELECT COUNT(*) as count FROM notifications WHERE user_id = ? AND read = 0'
  ).get(userId) as { count: number } | undefined
  return row?.count ?? 0
}

export function searchPlayers(query: string): DBPlayer[] {
  return getDb().prepare(
    'SELECT * FROM players WHERE name LIKE ? ORDER BY name LIMIT 10'
  ).all(`%${query}%`) as DBPlayer[]
}

export function getTeamSquadByOwner(userId: string): (TeamRequestWithDetails & { user_id: string })[] {
  return getDb().prepare(`
    SELECT r.*, p.name as player_name, p.position as player_position, p.age as player_age, p.image_big as player_image,
           p.user_id, t.name as team_name, t.color as team_color
    FROM team_requests r
    JOIN teams t ON t.id = r.team_id
    JOIN players p ON p.id = r.player_id
    WHERE t.created_by = ? AND r.status = 'accepted'
    ORDER BY r.created_at DESC
  `).all(userId) as (TeamRequestWithDetails & { user_id: string })[]
}

export function getTeamPendingInvitesByOwner(userId: string): (TeamRequestWithDetails & { user_id: string })[] {
  return getDb().prepare(`
    SELECT r.*, p.name as player_name, p.position as player_position, p.age as player_age, p.image_big as player_image,
           p.user_id, t.name as team_name, t.color as team_color
    FROM team_requests r
    JOIN teams t ON t.id = r.team_id
    JOIN players p ON p.id = r.player_id
    WHERE t.created_by = ? AND r.status = 'pending'
    ORDER BY r.created_at DESC
  `).all(userId) as (TeamRequestWithDetails & { user_id: string })[]
}

export function getTeamSquadByTeamId(teamId: string): (TeamRequestWithDetails & { user_id: string })[] {
  return getDb().prepare(`
    SELECT r.*, p.name as player_name, p.position as player_position, p.age as player_age, p.image_big as player_image,
           p.user_id, t.name as team_name, t.color as team_color
    FROM team_requests r
    JOIN teams t ON t.id = r.team_id
    JOIN players p ON p.id = r.player_id
    WHERE r.team_id = ? AND r.status = 'accepted'
    ORDER BY r.created_at DESC
  `).all(teamId) as (TeamRequestWithDetails & { user_id: string })[]
}
