import { describe, expect, it } from 'vitest'
import { createBattle, healthShare, issueOrder, simulate, step, type UnitSpec } from '../src/battle/sim'
import { baseDamage, DAMAGE_SPREAD, TICK, UNIT_RADIUS, type BattleState } from '../src/battle/types'
import { BASE_STATS } from '../src/content/heroes'
import { enemySpecs, playerSpecs, statsWithUpgrades } from '../src/battle/setup'
import type { Profile } from '../src/state/profile'

function spec(cls: 'warrior' | 'archer' | 'mage', scale = 1): UnitSpec {
  const base = BASE_STATS[cls]
  return {
    cls,
    name: cls,
    gender: 'f',
    stats: { ...base, hp: base.hp * scale, attack: base.attack * scale, defense: base.defense * scale },
  }
}

const trio = (scale = 1): UnitSpec[] => [spec('warrior', scale), spec('archer', scale), spec('mage', scale)]

function fingerprint(s: BattleState): string {
  return s.units
    .map((u) => `${u.id}:${u.x.toFixed(6)},${u.y.toFixed(6)},${u.hp.toFixed(6)},${u.alive}`)
    .join('|') + `#${s.time.toFixed(4)}#${s.winner}`
}

function run(state: BattleState, seconds: number): void {
  for (let i = 0; i < Math.round(seconds / TICK); i++) step(state, TICK)
}

describe('damage formula', () => {
  it('mitigates by defense without ever reaching zero', () => {
    expect(baseDamage(25, 0)).toBeCloseTo(25)
    expect(baseDamage(25, 50)).toBeCloseTo(12.5)
    expect(baseDamage(25, 20)).toBeCloseTo(17.857, 3)
    expect(baseDamage(25, 10_000)).toBeGreaterThan(0)
  })

  it('is monotone in both arguments', () => {
    expect(baseDamage(30, 20)).toBeGreaterThan(baseDamage(25, 20))
    expect(baseDamage(25, 30)).toBeLessThan(baseDamage(25, 20))
  })
})

describe('determinism', () => {
  it('two runs of the same seed are identical', () => {
    const a = createBattle({ player: trio(), enemy: trio(), seed: 12345 })
    const b = createBattle({ player: trio(), enemy: trio(), seed: 12345 })
    run(a, 20)
    run(b, 20)
    expect(fingerprint(a)).toBe(fingerprint(b))
  })

  it('different seeds diverge', () => {
    const a = createBattle({ player: trio(), enemy: trio(), seed: 1 })
    const b = createBattle({ player: trio(), enemy: trio(), seed: 2 })
    run(a, 20)
    run(b, 20)
    expect(fingerprint(a)).not.toBe(fingerprint(b))
  })
})

describe('battle outcome', () => {
  it('always terminates with a winner', () => {
    for (let seed = 0; seed < 25; seed++) {
      const result = simulate({ player: trio(), enemy: trio(), seed })
      expect(result.winner === 'player' || result.winner === 'enemy').toBe(true)
      expect(result.timedOut).toBe(false)
    }
  })

  it('an even match is close to a coin flip', () => {
    let wins = 0
    for (let seed = 0; seed < 60; seed++) {
      if (simulate({ player: trio(), enemy: trio(), seed }).winner === 'player') wins++
    }
    expect(wins).toBeGreaterThan(12)
    expect(wins).toBeLessThan(48)
  })

  it('a much stronger side always wins', () => {
    for (let seed = 0; seed < 15; seed++) {
      expect(simulate({ player: trio(1.8), enemy: trio(), seed }).winner).toBe('player')
      expect(simulate({ player: trio(), enemy: trio(1.8), seed }).winner).toBe('enemy')
    }
  })
})

describe('simulation rules', () => {
  it('keeps units from overlapping', () => {
    const state = createBattle({ player: trio(), enemy: trio(), seed: 7 })
    for (let i = 0; i < 600 && !state.winner; i++) {
      step(state, TICK)
      const alive = state.units.filter((u) => u.alive)
      for (let a = 0; a < alive.length; a++) {
        for (let b = a + 1; b < alive.length; b++) {
          const d = Math.hypot(alive[a]!.x - alive[b]!.x, alive[a]!.y - alive[b]!.y)
          expect(d).toBeGreaterThan(UNIT_RADIUS * 2 - 1e-6)
        }
      }
    }
  })

  it('keeps every unit inside the arena', () => {
    const state = createBattle({ player: trio(), enemy: trio(), seed: 9 })
    run(state, 30)
    for (const u of state.units) {
      expect(u.x).toBeGreaterThanOrEqual(UNIT_RADIUS - 1e-9)
      expect(u.x).toBeLessThanOrEqual(state.arena.width - UNIT_RADIUS + 1e-9)
      expect(u.y).toBeGreaterThanOrEqual(UNIT_RADIUS - 1e-9)
      expect(u.y).toBeLessThanOrEqual(state.arena.height - UNIT_RADIUS + 1e-9)
    }
  })

  it('an archer shoots from beyond melee reach', () => {
    const state = createBattle({ player: [spec('archer')], enemy: [spec('warrior')], seed: 3 })
    let sawProjectile = false
    let minDistance = Infinity
    for (let i = 0; i < 300 && !state.winner; i++) {
      step(state, TICK)
      if (state.projectiles.length > 0) sawProjectile = true
      const archer = state.units[0]!
      const warrior = state.units[1]!
      if (archer.alive && warrior.alive) {
        minDistance = Math.min(minDistance, Math.hypot(archer.x - warrior.x, archer.y - warrior.y))
      }
    }
    expect(sawProjectile).toBe(true)
    expect(minDistance).toBeGreaterThan(1.0)
  })

  it('a mage heals a wounded ally', () => {
    const state = createBattle({ player: [spec('mage'), spec('warrior')], enemy: [spec('archer', 3)], seed: 5 })
    const warrior = state.units[1]!
    warrior.hp = warrior.maxHp * 0.4
    const before = warrior.hp
    let healed = false
    for (let i = 0; i < 300 && !healed && warrior.alive; i++) {
      step(state, TICK)
      if (warrior.hp > before) healed = true
    }
    expect(healed).toBe(true)
  })

  it('damage stays within the declared spread', () => {
    const state = createBattle({ player: [spec('warrior')], enemy: [spec('warrior')], seed: 11 })
    const target = state.units[1]!
    const before = target.hp
    while (target.hp === before) step(state, TICK)
    const dealt = before - target.hp
    const expected = baseDamage(BASE_STATS.warrior.attack, BASE_STATS.warrior.defense)
    expect(dealt).toBeGreaterThanOrEqual(expected * (1 - DAMAGE_SPREAD) - 1e-9)
    expect(dealt).toBeLessThanOrEqual(expected * (1 + DAMAGE_SPREAD) + 1e-9)
  })

  it('a move order is obeyed and then released', () => {
    const state = createBattle({ player: trio(), enemy: trio(), seed: 4 })
    const unit = state.units[0]!
    issueOrder(state, unit.id, { kind: 'move', x: 1.0, y: 1.0 })
    let distanceAtRelease = -1
    for (let i = 0; i < 400; i++) {
      const d = Math.hypot(unit.x - 1.0, unit.y - 1.0)
      step(state, TICK)
      if (unit.order.kind !== 'move') { distanceAtRelease = d; break }
    }
    // The order is released on arrival, and only then does the unit act on its own.
    expect(distanceAtRelease).toBeGreaterThanOrEqual(0)
    expect(distanceAtRelease).toBeLessThan(0.3)
    expect(unit.order.kind).toBe('auto')
  })

  it('reports the remaining health share', () => {
    const state = createBattle({ player: trio(), enemy: trio(), seed: 6 })
    expect(healthShare(state, 'player')).toBeCloseTo(1)
    run(state, 10)
    expect(healthShare(state, 'player')).toBeLessThan(1)
  })
})

describe('army construction', () => {
  const profile = (): Profile => ({
    version: 1,
    heroes: {
      warrior: { cls: 'warrior', gender: 'f', name: 'א', levels: { attack: 2 } },
      archer: { cls: 'archer', gender: 'm', name: 'ב', levels: {} },
      mage: { cls: 'mage', gender: 'f', name: 'ג', levels: {} },
    },
    stars: 0,
    conquered: [],
    flags: { sawUpgrades: true, setupDone: true },
  })

  it('applies upgrade levels to the player', () => {
    const stats = statsWithUpgrades('warrior', { attack: 2 })
    expect(stats.attack).toBeCloseTo(BASE_STATS.warrior.attack * 1.16)
    expect(stats.hp).toBeCloseTo(BASE_STATS.warrior.hp)
  })

  it('scales only hit points, attack and defense of the enemy', () => {
    const [warrior] = enemySpecs(2)
    expect(warrior!.stats.hp).toBeCloseTo(BASE_STATS.warrior.hp * 2)
    expect(warrior!.stats.attack).toBeCloseTo(BASE_STATS.warrior.attack * 2)
    expect(warrior!.stats.defense).toBeCloseTo(BASE_STATS.warrior.defense * 2)
    expect(warrior!.stats.speed).toBeCloseTo(BASE_STATS.warrior.speed)
    expect(warrior!.stats.range).toBeCloseTo(BASE_STATS.warrior.range)
  })

  it('builds three heroes in a fixed order', () => {
    const specs = playerSpecs(profile())
    expect(specs.map((s) => s.cls)).toEqual(['warrior', 'archer', 'mage'])
    expect(specs[0]!.name).toBe('א')
  })
})
