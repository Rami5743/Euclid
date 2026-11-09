/**
 * Headless balance tool.
 *
 * Runs many battles without rendering anything and reports how often the
 * player wins, for a range of fortress difficulties and star budgets. The
 * numbers in src/content/world.ts and src/content/upgrades.ts are chosen from
 * this table.
 *
 * Usage: npm run balance            (the table used for tuning)
 *        npm run balance -- check   (verify the shipped numbers)
 */
import { BASE_STATS, UPGRADABLE, type HeroClass, type Stat } from '../src/content/heroes'
import { costOfNextLevel, FIRST_BATTLE_GRANT } from '../src/content/upgrades'
import { CONTINENTS } from '../src/content/world'
import { enemySpecs, statsWithUpgrades } from '../src/battle/setup'
import { simulate, type UnitSpec } from '../src/battle/sim'

const ORDER: HeroClass[] = ['warrior', 'archer', 'mage']

/**
 * How a player would plausibly spend stars: the parameters that carry a fight,
 * in a fixed priority, cheapest level first.
 */
const CORE: Array<[HeroClass, Stat]> = [
  ['warrior', 'attack'],
  ['warrior', 'hp'],
  ['archer', 'attack'],
  ['mage', 'healing'],
  ['warrior', 'defense'],
  ['archer', 'hp'],
  ['mage', 'hp'],
  ['archer', 'defense'],
]

/** Only worth buying once the core parameters are maxed out. */
const EXTRA: Array<[HeroClass, Stat]> = [
  ['mage', 'attack'],
  ['mage', 'defense'],
  ['archer', 'range'],
  ['warrior', 'speed'],
  ['archer', 'speed'],
  ['mage', 'range'],
  ['mage', 'speed'],
]

export type Levels = Record<HeroClass, Partial<Record<Stat, number>>>

export function spendStars(budget: number): Levels {
  const levels: Levels = { warrior: {}, archer: {}, mage: {} }
  let left = budget
  // The parameters that decide a fight are raised together, level by level.
  // The rest is only bought once those are maxed out.
  for (const phase of [CORE, EXTRA]) {
    let progress = true
    while (progress) {
      progress = false
      for (const [cls, stat] of phase) {
        if (!UPGRADABLE[cls].includes(stat)) continue
        const current = levels[cls][stat] ?? 0
        const cost = costOfNextLevel(current)
        if (cost === null || cost > left) continue
        levels[cls][stat] = current + 1
        left -= cost
        progress = true
      }
    }
  }
  return levels
}

function playerArmy(levels: Levels): UnitSpec[] {
  return ORDER.map((cls) => ({
    cls,
    name: cls,
    gender: 'f' as const,
    stats: statsWithUpgrades(cls, levels[cls]),
  }))
}

/**
 * 'active' stands for a player who moves and heals, played here by the
 * simulation's own AI. 'passive' is the opposite extreme: the heroes hold
 * their ground, strike whatever comes into reach and never heal, which is
 * exactly what happens on screen when no orders are given. A real player sits
 * between the two, so the pair brackets the real win rate.
 */
export type Style = 'active' | 'passive'

export function winRate(difficulty: number, budget: number, runs = 200, style: Style = 'active'): number {
  const player = playerArmy(spendStars(budget))
  const enemy = enemySpecs(difficulty)
  let wins = 0
  for (let seed = 1; seed <= runs; seed++) {
    const config = style === 'passive'
      ? { player, enemy, seed, manual: 'player' as const }
      : { player, enemy, seed }
    if (simulate(config).winner === 'player') wins++
  }
  return wins / runs
}

function pct(x: number): string {
  return `${(x * 100).toFixed(0)}%`.padStart(4)
}

function table(): void {
  const budgets = (process.env.BUDGETS ?? '0,8,16,24,32,48,64,96,128,180').split(',').map(Number)
  console.log(`base stats: warrior ${BASE_STATS.warrior.hp}hp, archer ${BASE_STATS.archer.hp}hp, mage ${BASE_STATS.mage.hp}hp`)
  console.log(`stars  ${budgets.map((b) => String(b).padStart(4)).join(' ')}`)
  const from = Number(process.env.FROM ?? 0.8)
  const to = Number(process.env.TO ?? 1.6)
  for (let d = from; d <= to + 0.001; d += 0.05) {
    const row = budgets.map((b) => pct(winRate(Number(d.toFixed(2)), b, 120)))
    console.log(`d=${d.toFixed(2)} ${row.join(' ')}`)
  }
}

interface Check {
  label: string
  rate: number
  min: number
  max: number
}

const RUNS = 300

/** The three rules the first continent has to obey, from the game design. */
function openingChecks(): Check[] {
  const asia = CONTINENTS[0]!.fortresses.filter((f) => !f.home)
  const [first, second, third] = [asia[0]!, asia[1]!, asia[2]!]
  return [
    { label: 'first fortress, no upgrades, must be an easy win',
      rate: winRate(first.difficulty, 0, RUNS), min: 0.85, max: 1 },
    { label: 'second fortress, no upgrades, must be out of reach',
      rate: winRate(second.difficulty, 0, RUNS), min: 0, max: 0.1 },
    { label: 'second fortress, after the first grant, winnable but barely',
      rate: winRate(second.difficulty, FIRST_BATTLE_GRANT, RUNS), min: 0.12, max: 0.6 },
    { label: 'third fortress, after the first grant, still out of reach',
      rate: winRate(third.difficulty, FIRST_BATTLE_GRANT, RUNS), min: 0, max: 0.05 },
    { label: 'first fortress is won even without a single order',
      rate: winRate(first.difficulty, 0, RUNS, 'passive'), min: 0.8, max: 1 },
  ]
}

/** Every fortress must be a real challenge at its own star figure. */
function ladderChecks(): Check[] {
  const out: Check[] = []
  for (const continent of CONTINENTS) {
    for (const f of continent.fortresses) {
      if (f.home || f.starsNeeded === 0) continue
      out.push({
        label: `${continent.name} · ${f.name} at ${f.starsNeeded} stars`,
        rate: winRate(f.difficulty, f.starsNeeded, RUNS),
        min: 0.12,
        max: 0.9,
      })
      out.push({
        label: `${continent.name} · ${f.name} at four times the stars`,
        rate: winRate(f.difficulty, f.starsNeeded * 4, RUNS),
        min: 0.6,
        max: 1,
      })
    }
  }
  return out
}

/** The campaign has to ask for more as it goes on. */
function ladderIsIncreasing(): boolean {
  const all = CONTINENTS.flatMap((c) => c.fortresses.filter((f) => !f.home))
  for (let i = 1; i < all.length; i++) {
    if (all[i]!.starsNeeded <= all[i - 1]!.starsNeeded) return false
    if (all[i]!.difficulty < all[i - 1]!.difficulty) return false
  }
  return true
}

function check(): void {
  let failed = 0
  const increasing = ladderIsIncreasing()
  if (!increasing) failed++
  console.log(`${increasing ? 'ok  ' : 'FAIL'} the ladder of fortresses grows monotonically`)
  for (const c of [...openingChecks(), ...ladderChecks()]) {
    const ok = c.rate >= c.min && c.rate <= c.max
    if (!ok) failed++
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${c.label}: win=${pct(c.rate)} (want ${pct(c.min)}..${pct(c.max)})`)
  }
  console.log(failed ? `\n${failed} balance target(s) missed` : '\nall balance targets met')
  if (failed) process.exitCode = 1
}

if (process.argv.includes('check')) check()
else table()
