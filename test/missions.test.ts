import { describe, expect, it } from 'vitest'
import { MISSIONS, missionById, missionsOf } from '../src/content/missions'
import { generate as generateJumps } from '../src/missions/kinds/jumps'
import { generate as generateTreasure } from '../src/missions/kinds/treasureLine'
import { generate as generateVoyage } from '../src/missions/kinds/voyage'
import { MAX_STARS, payout, score } from '../src/missions/scoring'

describe('scoring', () => {
  it('pays five stars for a clean solve', () => {
    expect(score(0, 0)).toBe(MAX_STARS)
  })

  it('takes a star for each hint and each wrong answer', () => {
    expect(score(1, 0)).toBe(4)
    expect(score(0, 2)).toBe(3)
    expect(score(2, 1)).toBe(2)
  })

  it('never falls below one star', () => {
    expect(score(9, 9)).toBe(1)
  })

  it('pays only the improvement over the best so far', () => {
    expect(payout(0, 5)).toBe(5)
    expect(payout(3, 5)).toBe(2)
    expect(payout(5, 5)).toBe(0)
    expect(payout(5, 2)).toBe(0)
  })
})

describe('the mission list', () => {
  it('has unique ids', () => {
    const ids = MISSIONS.map((m) => m.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('only requires missions that exist and come before it', () => {
    MISSIONS.forEach((mission, index) => {
      for (const id of mission.requires) {
        const required = missionById(id)
        expect(required, `${mission.id} requires ${id}`).toBeDefined()
        expect(MISSIONS.findIndex((m) => m.id === id)).toBeLessThan(index)
      }
    })
  })

  it('places every mission on a continent that has it', () => {
    for (const mission of MISSIONS) {
      expect(missionsOf(mission.continent)).toContain(mission)
    }
  })

  it('opens at least one mission of the first continent with nothing solved', () => {
    const asia = missionsOf('asia')
    expect(asia.some((m) => m.requires.length === 0)).toBe(true)
  })
})

describe('treasure on the line', () => {
  it('always puts the target on an unlabelled tick inside the line', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateTreasure(seed)
      expect(solution).toBeGreaterThan(config.from)
      expect(solution).toBeLessThan(config.to)
      const steps = (solution - config.from) / config.tickStep
      expect(Number.isInteger(steps)).toBe(true)
      expect(steps % config.labelEvery).not.toBe(0)
    }
  })

  it('accepts the target and nothing else', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const logic = generateTreasure(seed)
      expect(logic.check(logic.solution)).toBe(true)
      expect(logic.check(logic.solution + logic.config.tickStep)).toBe(false)
      expect(logic.check(logic.solution - logic.config.tickStep)).toBe(false)
    }
  })

  it('carries a full hint ladder and an explanation', () => {
    const logic = generateTreasure(7)
    expect(logic.hints.length).toBeGreaterThanOrEqual(4)
    expect(logic.hints.every((h) => h.text.length > 0)).toBe(true)
    expect(logic.explain.length).toBeGreaterThan(0)
  })

  it('is reproducible from its seed', () => {
    expect(generateTreasure(42).config).toEqual(generateTreasure(42).config)
    const variants = new Set(Array.from({ length: 40 }, (_, i) => JSON.stringify(generateTreasure(i + 1).config)))
    expect(variants.size).toBeGreaterThan(5)
  })
})

describe('jumps', () => {
  it('always offers a route that lands on the target', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateJumps(seed)
      const end = config.route.reduce((a, b) => a + b, config.start)
      expect(end).toBe(config.target)
      expect(solution).toBe(config.target)
      expect(config.route.length).toBeGreaterThanOrEqual(3)
      expect(config.route.every((k) => config.keys.includes(k))).toBe(true)
    }
  })

  it('keeps the whole route inside the line', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateJumps(seed)
      let position = config.start
      expect(position).toBeGreaterThanOrEqual(config.from)
      expect(position).toBeLessThanOrEqual(config.to)
      for (const key of config.route) {
        position += key
        expect(position).toBeGreaterThanOrEqual(config.from)
        expect(position).toBeLessThanOrEqual(config.to)
      }
    }
  })

  it('accepts the target and nothing else', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const logic = generateJumps(seed)
      expect(logic.check(logic.solution)).toBe(true)
      expect(logic.check(logic.solution + 1)).toBe(false)
    }
  })

  it('moves at all', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateJumps(seed)
      expect(config.target).not.toBe(config.start)
    }
  })
})

describe('the voyage', () => {
  it('ends where the moves take it', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateVoyage(seed)
      expect(solution).toBe(config.start + config.moves.reduce((a, b) => a + b, 0))
    }
  })

  it('never leaves the line and never stands still', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateVoyage(seed)
      let position = config.start
      for (const move of config.moves) {
        position += move
        expect(position).toBeGreaterThanOrEqual(config.from)
        expect(position).toBeLessThanOrEqual(config.to)
      }
      expect(solution).not.toBe(config.start)
      expect(config.moves.length).toBeGreaterThanOrEqual(3)
    }
  })

  it('lands on a tick of the line', () => {
    for (let seed = 1; seed <= 100; seed++) {
      const { config, solution } = generateVoyage(seed)
      expect((solution - config.from) % config.tickStep).toBe(0)
    }
  })

  it('accepts the end and nothing else', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const logic = generateVoyage(seed)
      expect(logic.check(logic.solution)).toBe(true)
      expect(logic.check(logic.solution + logic.config.tickStep)).toBe(false)
    }
  })
})
