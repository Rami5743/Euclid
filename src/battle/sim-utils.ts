import type { BattleState, Side, Unit } from './types'

export interface Point { x: number; y: number }

export function distance(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

export function livingUnits(state: BattleState, side: Side): Unit[] {
  return state.units.filter((u) => u.alive && u.side === side)
}

export function livingEnemies(state: BattleState, side: Side): Unit[] {
  return state.units.filter((u) => u.alive && u.side !== side)
}

export function unitById(state: BattleState, id: string | null): Unit | undefined {
  return id === null ? undefined : state.units.find((u) => u.id === id)
}

/** Nearest unit of a list; ties are broken by id so the result is stable. */
export function nearest(from: Point, candidates: Unit[]): Unit | null {
  let best: Unit | null = null
  let bestD = Infinity
  for (const c of candidates) {
    const d = distance(from, c)
    if (d < bestD - 1e-9 || (Math.abs(d - bestD) <= 1e-9 && best && c.id < best.id)) {
      best = c
      bestD = d
    }
  }
  return best
}
