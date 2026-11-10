import { describe, expect, it } from 'vitest'
import { MISSIONS, missionById, missionsOf } from '../src/content/missions'
import {
  generateProduct as generateAlphameticProduct,
  generateSum as generateAlphameticSum,
  valueOf,
} from '../src/missions/kinds/alphametic'
import { generate as generateJumps } from '../src/missions/kinds/jumps'
import { generate as generateMirror, reflected } from '../src/missions/kinds/mirror'
import { generate as generatePowers } from '../src/missions/kinds/powers'
import { factorPairs, generate as generateProduct, generateSquare } from '../src/missions/kinds/product'
import { generate as generateQuadrant } from '../src/missions/kinds/quadrant'
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

describe('the treasure in the quadrant', () => {
  it('never puts the treasure on an axis', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateQuadrant(seed)
      expect(solution.x).not.toBe(0)
      expect(solution.y).not.toBe(0)
      expect(Math.abs(solution.x)).toBeLessThanOrEqual(config.range)
      expect(Math.abs(solution.y)).toBeLessThanOrEqual(config.range)
    }
  })

  it('uses every quadrant across the seeds', () => {
    const seen = new Set<string>()
    for (let seed = 1; seed <= 200; seed++) {
      const { solution } = generateQuadrant(seed)
      seen.add(`${Math.sign(solution.x)}${Math.sign(solution.y)}`)
    }
    expect(seen.size).toBe(4)
  })

  it('accepts the point and nothing else', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const logic = generateQuadrant(seed)
      expect(logic.check(logic.solution)).toBe(true)
      expect(logic.check({ x: logic.solution.x, y: logic.solution.y + 1 })).toBe(false)
      expect(logic.check({ x: -logic.solution.x, y: logic.solution.y })).toBe(false)
    }
  })
})

describe('the mirror', () => {
  it('reflects a point across the right axis', () => {
    expect(reflected({ x: 3, y: 2 }, 'y')).toEqual({ x: -3, y: 2 })
    expect(reflected({ x: 3, y: 2 }, 'x')).toEqual({ x: 3, y: -2 })
  })

  it('keeps the shape clear of the mirror and inside the grid', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateMirror(seed)
      const distance = config.axis === 'y' ? Math.abs(config.anchor.x) : Math.abs(config.anchor.y)
      expect(distance).toBeGreaterThanOrEqual(2)
      for (const p of config.shape) {
        const sx = p.x + config.anchor.x
        const sy = p.y + config.anchor.y
        expect(Math.abs(sx)).toBeLessThanOrEqual(config.range)
        expect(Math.abs(sy)).toBeLessThanOrEqual(config.range)
      }
      expect(solution).toEqual(reflected(config.anchor, config.axis))
    }
  })

  it('accepts the reflected place and nothing else', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const logic = generateMirror(seed)
      expect(logic.check(logic.solution)).toBe(true)
      expect(logic.check(logic.config.anchor)).toBe(false)
      expect(logic.check({ x: logic.solution.x + 1, y: logic.solution.y })).toBe(false)
    }
  })
})

describe('the product rectangle', () => {
  it('always asks for a number with more than one rectangle', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateProduct(seed)
      const pairs = factorPairs(config.target, config.cols, config.rows)
      expect(pairs.length).toBeGreaterThanOrEqual(2)
      expect(pairs.filter((p) => p.w > 1 && p.h > 1).length).toBeGreaterThanOrEqual(2)
    }
  })

  it('offers a rectangle that fits the board', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateProduct(seed)
      expect(solution.w).toBeLessThanOrEqual(config.cols)
      expect(solution.h).toBeLessThanOrEqual(config.rows)
      expect(solution.w * solution.h).toBe(config.target)
    }
  })

  it('accepts any rectangle of the right area', () => {
    const logic = generateProduct(3)
    for (const pair of factorPairs(logic.config.target, logic.config.cols, logic.config.rows)) {
      expect(logic.check(pair)).toBe(true)
    }
    expect(logic.check({ w: 1, h: 1 })).toBe(false)
  })
})

describe('the perfect square', () => {
  it('always asks for a square number', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateSquare(seed)
      expect(solution.w).toBe(solution.h)
      expect(solution.w * solution.h).toBe(config.target)
      expect(Number.isInteger(Math.sqrt(config.target))).toBe(true)
      expect(solution.w).toBeLessThanOrEqual(config.cols)
    }
  })

  it('accepts only the square of the right side', () => {
    const logic = generateSquare(5)
    expect(logic.check(logic.solution)).toBe(true)
    expect(logic.check({ w: logic.solution.w + 1, h: logic.solution.h })).toBe(false)
  })
})

describe('the ladder of powers', () => {
  it('always asks for a power of its base', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generatePowers(seed)
      expect(config.base ** config.exponent).toBe(config.target)
      expect(solution).toBe(config.target)
      expect(config.exponent).toBeGreaterThanOrEqual(2)
      expect(config.keys).toContain(config.base)
    }
  })

  it('keeps the target within reach', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generatePowers(seed)
      expect(config.target).toBeLessThanOrEqual(400)
    }
  })

  it('accepts the target and nothing else', () => {
    const logic = generatePowers(11)
    expect(logic.check(logic.solution)).toBe(true)
    expect(logic.check(logic.solution * logic.config.base)).toBe(false)
  })
})

describe('arithmetic in letters', () => {
  it('writes a sum that its own digits solve', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const logic = generateAlphameticSum(seed)
      expect(logic.check(logic.solution)).toBe(true)
      expect(logic.config.values.a + logic.config.values.b).toBe(logic.config.values.result)
    }
  })

  it('writes a product that its own digits solve', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const logic = generateAlphameticProduct(seed)
      expect(logic.check(logic.solution)).toBe(true)
      expect(logic.config.values.a * logic.config.values.b).toBe(logic.config.values.result)
    }
  })

  it('gives every digit its own letter, and back', () => {
    for (let seed = 1; seed <= 100; seed++) {
      const { config, solution } = generateAlphameticSum(seed)
      const digits = config.letters.map((l) => solution[l])
      expect(new Set(digits).size).toBe(digits.length)
      expect(valueOf(config.rows[0]!, solution)).toBe(config.values.a)
      expect(valueOf(config.rows[1]!, solution)).toBe(config.values.b)
      expect(valueOf(config.rows[2]!, solution)).toBe(config.values.result)
    }
  })

  it('refuses a blank letter, a clash and a leading zero', () => {
    const logic = generateAlphameticSum(9)
    const { config, solution } = logic
    const missing = { ...solution }
    delete missing[config.letters[0]!]
    expect(logic.check(missing)).toBe(false)

    const clash = { ...solution }
    clash[config.letters[0]!] = solution[config.letters[1]!]!
    expect(logic.check(clash)).toBe(false)

    const zeroed = { ...solution, [config.leading[0]!]: 0 }
    expect(logic.check(zeroed)).toBe(false)
  })

  it('keeps the puzzle small enough to read', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateAlphameticSum(seed)
      expect(config.letters.length).toBeLessThanOrEqual(6)
      expect(config.letters.length).toBeGreaterThanOrEqual(3)
      expect(config.rows.every((row) => row.length <= 3)).toBe(true)
    }
  })
})
