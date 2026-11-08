import type { HeroClass } from '../content/heroes'
import { autoIntent, type Intent } from './ai'
import { between, makeRng } from './rng'
import { distance, livingUnits, nearest, unitById } from './sim-utils'
import {
  DAMAGE_SPREAD, TICK, UNIT_RADIUS, baseDamage,
  type BattleState, type Order, type Projectile, type Side, type Unit, type UnitStats,
} from './types'

export interface UnitSpec {
  cls: HeroClass
  name: string
  gender: 'f' | 'm'
  stats: UnitStats
}

export interface BattleConfig {
  player: UnitSpec[]
  enemy: UnitSpec[]
  seed: number
  arenaWidth?: number
  arenaHeight?: number
}

const PROJECTILE_SPEED: Record<string, number> = { arrow: 14, bolt: 10, heal: 12 }
/** A mage heals an ally that lost at least this share of its hit points. */
const HEAL_THRESHOLD = 0.85
const ARRIVE = 0.15

/** Formation offsets from the base line of each side: melee in front. */
function formation(specs: UnitSpec[], side: Side, arenaWidth: number, arenaHeight: number): Array<{ x: number; y: number }> {
  const dir = side === 'player' ? 1 : -1
  const base = side === 'player' ? 3.0 : arenaWidth - 3.0
  const mid = arenaHeight / 2
  const spread = [0, -1.6, 1.6]
  return specs.map((s, i) => ({
    x: base + (s.stats.range <= 1.5 ? 2.0 * dir : 0),
    y: mid + (spread[i] ?? 0),
  }))
}

export function createBattle(config: BattleConfig): BattleState {
  const arena = { width: config.arenaWidth ?? 24, height: config.arenaHeight ?? 14 }
  const rng = makeRng(config.seed)
  const state: BattleState = {
    time: 0,
    arena,
    units: [],
    projectiles: [],
    rng,
    winner: null,
    nextId: 1,
  }

  const place = (specs: UnitSpec[], side: Side): void => {
    const spots = formation(specs, side, arena.width, arena.height)
    specs.forEach((spec, i) => {
      const spot = spots[i]!
      state.units.push({
        id: `${side}-${spec.cls}-${i}`,
        side,
        cls: spec.cls,
        name: spec.name,
        gender: spec.gender,
        x: spot.x + between(rng, -0.6, 0.6),
        y: spot.y + between(rng, -0.6, 0.6),
        hp: spec.stats.hp,
        maxHp: spec.stats.hp,
        stats: spec.stats,
        order: { kind: 'auto' },
        targetId: null,
        // A random first swing keeps the two sides from firing in lockstep.
        cooldown: between(rng, 0, 1 / spec.stats.attackRate),
        healCooldown: between(rng, 0, spec.stats.healRate ?? 3),
        facing: side === 'player' ? 1 : -1,
        lastHitAt: -99,
        alive: true,
      })
    })
  }

  place(config.player, 'player')
  place(config.enemy, 'enemy')
  return state
}

export function issueOrder(state: BattleState, unitId: string, order: Order): void {
  const unit = unitById(state, unitId)
  if (unit?.alive) unit.order = order
}

export function step(state: BattleState, dt: number = TICK): void {
  if (state.winner) return
  state.time += dt

  stepProjectiles(state, dt)

  for (const unit of state.units) {
    if (!unit.alive) continue
    unit.cooldown = Math.max(0, unit.cooldown - dt)
    unit.healCooldown = Math.max(0, unit.healCooldown - dt)
    castHeal(state, unit)
    act(state, unit, dt)
  }

  separate(state)
  clampToArena(state)
  resolveWinner(state)
}

function stepProjectiles(state: BattleState, dt: number): void {
  const kept: Projectile[] = []
  for (const p of state.projectiles) {
    const target = unitById(state, p.targetId)
    if (!target || !target.alive) continue
    const dx = target.x - p.x
    const dy = target.y - p.y
    const d = Math.hypot(dx, dy)
    const travel = p.speed * dt
    if (d <= travel) {
      if (p.kind === 'heal') target.hp = Math.min(target.maxHp, target.hp + p.amount)
      else damage(state, target, p.amount)
      continue
    }
    p.x += (dx / d) * travel
    p.y += (dy / d) * travel
    kept.push(p)
  }
  state.projectiles = kept
}

function castHeal(state: BattleState, unit: Unit): void {
  const healing = unit.stats.healing
  if (!healing || unit.healCooldown > 0) return
  const allies = livingUnits(state, unit.side).filter(
    (a) => a.id !== unit.id && a.hp < a.maxHp * HEAL_THRESHOLD && distance(unit, a) <= unit.stats.range,
  )
  let worst: Unit | null = null
  for (const a of allies) {
    if (!worst || a.hp / a.maxHp < worst.hp / worst.maxHp) worst = a
  }
  if (!worst) return
  state.projectiles.push({
    id: `p${state.nextId++}`,
    kind: 'heal',
    side: unit.side,
    x: unit.x,
    y: unit.y,
    targetId: worst.id,
    amount: healing,
    speed: PROJECTILE_SPEED.heal!,
  })
  unit.healCooldown = unit.stats.healRate ?? 3
}

function act(state: BattleState, unit: Unit, dt: number): void {
  const intent = resolveIntent(state, unit)
  if (intent.kind === 'idle') {
    unit.targetId = null
    return
  }
  if (intent.kind === 'move') {
    unit.targetId = null
    moveTowards(unit, intent.x, intent.y, dt)
    return
  }

  const target = unitById(state, intent.targetId)
  if (!target || !target.alive) {
    unit.targetId = null
    return
  }
  unit.targetId = target.id
  const d = distance(unit, target)
  if (d > unit.stats.range) {
    moveTowards(unit, target.x, target.y, dt)
    return
  }
  unit.facing = target.x >= unit.x ? 1 : -1
  if (unit.cooldown <= 0) strike(state, unit, target)
}

function resolveIntent(state: BattleState, unit: Unit): Intent {
  const order = unit.order
  if (order.kind === 'move') {
    if (distance(unit, order) <= ARRIVE) {
      unit.order = { kind: 'auto' }
    } else {
      return { kind: 'move', x: order.x, y: order.y }
    }
  }
  if (unit.order.kind === 'attack') {
    const target = unitById(state, unit.order.targetId)
    if (target?.alive) return { kind: 'attack', targetId: target.id }
    unit.order = { kind: 'auto' }
  }
  if (unit.order.kind === 'hold') {
    const inRange = state.units.filter(
      (u) => u.alive && u.side !== unit.side && distance(unit, u) <= unit.stats.range,
    )
    const target = nearest(unit, inRange)
    return target ? { kind: 'attack', targetId: target.id } : { kind: 'idle' }
  }
  return autoIntent(state, unit)
}

function moveTowards(unit: Unit, x: number, y: number, dt: number): void {
  const dx = x - unit.x
  const dy = y - unit.y
  const d = Math.hypot(dx, dy)
  if (d < 1e-6) return
  const travel = Math.min(d, unit.stats.speed * dt)
  unit.x += (dx / d) * travel
  unit.y += (dy / d) * travel
  if (Math.abs(dx) > 1e-6) unit.facing = dx > 0 ? 1 : -1
}

function strike(state: BattleState, unit: Unit, target: Unit): void {
  const amount = baseDamage(unit.stats.attack, target.stats.defense) *
    (1 + between(state.rng, -DAMAGE_SPREAD, DAMAGE_SPREAD))
  unit.cooldown = 1 / unit.stats.attackRate
  if (unit.stats.range <= 1.5) {
    damage(state, target, amount)
    return
  }
  state.projectiles.push({
    id: `p${state.nextId++}`,
    kind: unit.cls === 'mage' ? 'bolt' : 'arrow',
    side: unit.side,
    x: unit.x,
    y: unit.y,
    targetId: target.id,
    amount,
    speed: PROJECTILE_SPEED[unit.cls === 'mage' ? 'bolt' : 'arrow']!,
  })
}

function damage(state: BattleState, target: Unit, amount: number): void {
  target.hp -= amount
  target.lastHitAt = state.time
  if (target.hp <= 0) {
    target.hp = 0
    target.alive = false
    target.targetId = null
  }
}

function separate(state: BattleState): void {
  const alive = state.units.filter((u) => u.alive)
  const min = UNIT_RADIUS * 2
  for (let i = 0; i < alive.length; i++) {
    for (let j = i + 1; j < alive.length; j++) {
      const a = alive[i]!
      const b = alive[j]!
      const dx = b.x - a.x
      const dy = b.y - a.y
      const d = Math.hypot(dx, dy)
      if (d >= min) continue
      const push = (min - d) / 2
      const nx = d < 1e-6 ? 1 : dx / d
      const ny = d < 1e-6 ? 0 : dy / d
      a.x -= nx * push
      a.y -= ny * push
      b.x += nx * push
      b.y += ny * push
    }
  }
}

function clampToArena(state: BattleState): void {
  const m = UNIT_RADIUS
  for (const u of state.units) {
    u.x = Math.min(state.arena.width - m, Math.max(m, u.x))
    u.y = Math.min(state.arena.height - m, Math.max(m, u.y))
  }
}

function resolveWinner(state: BattleState): void {
  const player = livingUnits(state, 'player').length
  const enemy = livingUnits(state, 'enemy').length
  if (player === 0) state.winner = 'enemy'
  else if (enemy === 0) state.winner = 'player'
}

export interface BattleResult {
  winner: Side
  seconds: number
  timedOut: boolean
  survivors: number
  /** share of the player's total hit points still standing */
  playerHealth: number
}

/** Runs a battle to its end without rendering anything. */
export function simulate(config: BattleConfig, maxSeconds = 180): BattleResult {
  const state = createBattle(config)
  const limit = Math.round(maxSeconds / TICK)
  for (let i = 0; i < limit && !state.winner; i++) step(state, TICK)

  const timedOut = state.winner === null
  if (timedOut) state.winner = healthShare(state, 'player') >= healthShare(state, 'enemy') ? 'player' : 'enemy'

  return {
    winner: state.winner!,
    seconds: state.time,
    timedOut,
    survivors: livingUnits(state, state.winner!).length,
    playerHealth: healthShare(state, 'player'),
  }
}

export function healthShare(state: BattleState, side: Side): number {
  const units = state.units.filter((u) => u.side === side)
  const max = units.reduce((s, u) => s + u.maxHp, 0)
  const now = units.reduce((s, u) => s + u.hp, 0)
  return max === 0 ? 0 : now / max
}
