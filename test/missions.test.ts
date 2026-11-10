import { describe, expect, it } from 'vitest'
import { MISSIONS, missionById, missionsOf } from '../src/content/missions'
import {
  generateProduct as generateAlphameticProduct,
  generateSum as generateAlphameticSum,
  valueOf,
} from '../src/missions/kinds/alphametic'
import {
  generateAim, generateIsosceles, generateStraight, generateTriangle,
} from '../src/missions/kinds/angles'
import {
  generateBothSides as generateBalanceBoth, generateSimple as generateBalance, solve as solveBalance,
} from '../src/missions/kinds/balance'
import { circleCross, lineCross } from '../src/missions/boards/construct'
import { generate as generateArea, shoelace } from '../src/missions/kinds/area'
import { generate as generateNet, surface } from '../src/missions/kinds/net'
import {
  generateSide as generateMissingSide, generateSquares,
} from '../src/missions/kinds/pythagoras'
import {
  generateFrequency, generateSpin, generateWheel,
} from '../src/missions/kinds/chance'
import { generate as generateChase } from '../src/missions/kinds/chase'
import {
  generateEquilateral, generateMidpoint, generatePerpendicular, satisfied,
} from '../src/missions/kinds/construct'
import { generate as generateJumps } from '../src/missions/kinds/jumps'
import { generate as generateQuest, totalOf as questTotal } from '../src/missions/kinds/quest'
import { generate as generateShift, write as writeLinear } from '../src/missions/kinds/shift'
import { generate as generateLikeTerms } from '../src/missions/kinds/likeTerms'
import { apply as applyRule, generate as generateMachine } from '../src/missions/kinds/machine'
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

describe('angles', () => {
  it('aims at a readable angle', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { solution } = generateAim(seed)
      expect(solution % 5).toBe(0)
      expect(solution).toBeGreaterThanOrEqual(15)
      expect(solution).toBeLessThanOrEqual(165)
    }
  })

  it('completes a straight angle', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateStraight(seed)
      expect(config.given[0]! + solution).toBe(180)
      expect(solution).toBeGreaterThan(0)
    }
  })

  it('completes a triangle', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateTriangle(seed)
      expect(config.given[0]! + config.given[1]! + solution).toBe(180)
      expect(solution).toBeGreaterThanOrEqual(25)
    }
  })

  it('splits an isosceles triangle', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateIsosceles(seed)
      expect(config.given[0]! + 2 * solution).toBe(180)
      expect(Number.isInteger(solution)).toBe(true)
      expect(solution).toBeGreaterThan(0)
    }
  })

  it('accepts the angle and nothing else', () => {
    for (const make of [generateAim, generateStraight, generateTriangle, generateIsosceles]) {
      const logic = make(4)
      expect(logic.check(logic.solution)).toBe(true)
      expect(logic.check(logic.solution + 1)).toBe(false)
      expect(logic.check(logic.solution - 5)).toBe(false)
    }
  })
})

describe('the number machine', () => {
  it('offers the right rule among four', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateMachine(seed)
      expect(config.options.length).toBe(4)
      expect(config.options[solution]).toEqual(config.rule)
      const written = config.options.map((o) => `${o.a}|${o.b}`)
      expect(new Set(written).size).toBe(4)
    }
  })

  it('reads the rule as a number does', () => {
    for (let seed = 1; seed <= 100; seed++) {
      const { config } = generateMachine(seed)
      expect(applyRule(config.rule, 3)).toBe(config.rule.a * 3 + config.rule.b)
    }
  })

  it('accepts the right choice and nothing else', () => {
    const logic = generateMachine(8)
    expect(logic.check(logic.solution)).toBe(true)
    expect(logic.check((logic.solution + 1) % 4)).toBe(false)
  })
})

describe('like terms', () => {
  it('always has tiles of both kinds', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateLikeTerms(seed)
      expect(config.tiles.some((t) => t.x !== 0)).toBe(true)
      expect(config.tiles.some((t) => t.x === 0)).toBe(true)
      expect(config.tiles.length).toBeGreaterThanOrEqual(4)
    }
  })

  it('accepts only a full and correct sorting', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const logic = generateLikeTerms(seed)
      expect(logic.check(logic.solution)).toBe(true)
      const partial = { ...logic.solution }
      delete partial[logic.config.tiles[0]!.id]
      expect(logic.check(partial)).toBe(false)
      const wrong = { ...logic.solution }
      wrong[logic.config.tiles[0]!.id] = logic.solution[logic.config.tiles[0]!.id] === 'x' ? 'n' : 'x'
      expect(logic.check(wrong)).toBe(false)
    }
  })
})

describe('the balance', () => {
  it('always balances at a whole number of boxes', () => {
    for (let seed = 1; seed <= 200; seed++) {
      for (const make of [generateBalance, generateBalanceBoth]) {
        const { config, solution } = make(seed)
        expect(Number.isInteger(solution)).toBe(true)
        expect(solution).toBeGreaterThanOrEqual(2)
        expect(config.leftX * solution + config.leftN).toBe(config.rightX * solution + config.rightN)
        expect(solveBalance(config)).toBe(solution)
      }
    }
  })

  it('keeps boxes on one side only in the first mission', () => {
    for (let seed = 1; seed <= 100; seed++) {
      expect(generateBalance(seed).config.rightX).toBe(0)
      expect(generateBalanceBoth(seed).config.rightX).toBeGreaterThanOrEqual(1)
    }
  })

  it('accepts the value and nothing else', () => {
    const logic = generateBalance(6)
    expect(logic.check(logic.solution)).toBe(true)
    expect(logic.check(logic.solution + 1)).toBe(false)
  })
})

describe('the quest', () => {
  it('gives away the first token in the first row', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateQuest(seed)
      const first = config.rows[0]!
      expect(first.b).toBe(0)
      expect(first.a).toBeGreaterThanOrEqual(2)
      expect(first.total).toBe(first.a * config.valueA)
    }
  })

  it('asks a row that both tokens appear in', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateQuest(seed)
      const asked = config.rows[2]!
      expect(asked.total).toBeNull()
      expect(asked.a).toBeGreaterThanOrEqual(1)
      expect(asked.b).toBeGreaterThanOrEqual(1)
      expect(solution).toBe(asked.a * config.valueA + asked.b * config.valueB)
    }
  })

  it('keeps the rows true to the values', () => {
    for (let seed = 1; seed <= 100; seed++) {
      const { config } = generateQuest(seed)
      for (const row of config.rows.slice(0, 2)) {
        expect(row.total).toBe(questTotal(row, config.valueA, config.valueB))
      }
    }
  })
})

describe('the chase', () => {
  it('always meets at a whole step', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateChase(seed)
      expect(config.speed1).toBeGreaterThan(config.speed2)
      expect(config.start1 + config.speed1 * solution).toBe(config.start2 + config.speed2 * solution)
      expect(Number.isInteger(solution)).toBe(true)
      expect(solution).toBeGreaterThanOrEqual(2)
    }
  })

  it('keeps the whole chase on the line', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateChase(seed)
      expect(config.start2).toBeLessThanOrEqual(config.to)
      expect(config.start1 + config.speed1 * solution).toBeLessThanOrEqual(config.to)
    }
  })
})

describe('the shifted graph', () => {
  it('offers the moved line among four', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateShift(seed)
      expect(config.options.length).toBe(4)
      expect(config.options[solution]).toEqual(config.moved)
      const written = config.options.map((o) => writeLinear(o))
      expect(new Set(written).size).toBe(4)
    }
  })

  it('always moves the line somehow', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateShift(seed)
      const same = config.moved.slope === config.base.slope && config.moved.offset === config.base.offset
      expect(same).toBe(false)
    }
  })

  it('accepts the right choice and nothing else', () => {
    const logic = generateShift(13)
    expect(logic.check(logic.solution)).toBe(true)
    expect(logic.check((logic.solution + 2) % 4)).toBe(false)
  })
})

describe('the quest asks something new', () => {
  it('never repeats a row that is already answered', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateQuest(seed)
      const [first, second, asked] = config.rows
      expect(`${asked!.a}:${asked!.b}`).not.toBe(`${first!.a}:${first!.b}`)
      expect(`${asked!.a}:${asked!.b}`).not.toBe(`${second!.a}:${second!.b}`)
    }
  })
})

describe('the geometry of the construction board', () => {
  it('finds where two lines cross', () => {
    const p = lineCross({ a: { x: 0, y: 0 }, b: { x: 10, y: 10 } }, { a: { x: 0, y: 10 }, b: { x: 10, y: 0 } })
    expect(p?.x).toBeCloseTo(5)
    expect(p?.y).toBeCloseTo(5)
    expect(lineCross({ a: { x: 0, y: 0 }, b: { x: 10, y: 0 } }, { a: { x: 0, y: 5 }, b: { x: 10, y: 5 } })).toBeNull()
  })

  it('finds where two circles cross', () => {
    const points = circleCross({ c: { x: 0, y: 0 }, r: 5 }, { c: { x: 6, y: 0 }, r: 5 })
    expect(points.length).toBe(2)
    for (const p of points) {
      expect(Math.hypot(p.x, p.y)).toBeCloseTo(5)
      expect(Math.hypot(p.x - 6, p.y)).toBeCloseTo(5)
    }
    expect(circleCross({ c: { x: 0, y: 0 }, r: 1 }, { c: { x: 10, y: 0 }, r: 1 }).length).toBe(0)
  })
})

describe('the constructions', () => {
  it('accepts the middle of the segment, and only it', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const { config } = generateMidpoint(seed)
      const mid = { x: (config.a.x + config.b.x) / 2, y: (config.a.y + config.b.y) / 2 }
      expect(satisfied(config, { points: [mid], lines: [] })).toBe(true)
      expect(satisfied(config, { points: [config.a, config.b], lines: [] })).toBe(false)
      expect(satisfied(config, { points: [{ x: mid.x + 40, y: mid.y }], lines: [] })).toBe(false)
    }
  })

  it('accepts a perpendicular through the middle, and not a slanted line', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const { config } = generatePerpendicular(seed)
      const mid = { x: (config.a.x + config.b.x) / 2, y: (config.a.y + config.b.y) / 2 }
      const upright = { a: { x: mid.x, y: mid.y - 100 }, b: { x: mid.x, y: mid.y + 100 } }
      expect(satisfied(config, { points: [], lines: [upright] })).toBe(true)
      const slanted = { a: { x: mid.x - 50, y: mid.y - 100 }, b: { x: mid.x + 50, y: mid.y + 100 } }
      expect(satisfied(config, { points: [], lines: [slanted] })).toBe(false)
      const away = { a: { x: mid.x + 120, y: mid.y - 100 }, b: { x: mid.x + 120, y: mid.y + 100 } }
      expect(satisfied(config, { points: [], lines: [away] })).toBe(false)
    }
  })

  it('accepts the apex of an equilateral triangle', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const { config } = generateEquilateral(seed)
      const side = Math.hypot(config.b.x - config.a.x, config.b.y - config.a.y)
      const apex = circleCross({ c: config.a, r: side }, { c: config.b, r: side })[0]!
      expect(satisfied(config, { points: [apex], lines: [] })).toBe(true)
      expect(satisfied(config, { points: [{ x: config.a.x, y: config.a.y - side }], lines: [] })).toBe(false)
    }
  })
})

describe('area on the lattice', () => {
  it('draws a square whose area is the sum of two squares', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateArea(seed)
      expect(solution).toBe(config.p * config.p + config.q * config.q)
      expect(shoelace(config.shape)).toBeCloseTo(solution)
      expect(config.shape.length).toBe(4)
      for (const point of config.shape) {
        expect(Math.abs(point.x)).toBeLessThanOrEqual(config.range)
        expect(Math.abs(point.y)).toBeLessThanOrEqual(config.range)
      }
    }
  })

  it('is tilted, not straight', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateArea(seed)
      expect(config.p).toBeGreaterThanOrEqual(1)
      expect(config.q).toBeGreaterThanOrEqual(1)
    }
  })
})

describe('Pythagoras', () => {
  it('always uses a right triangle with whole sides', () => {
    for (let seed = 1; seed <= 200; seed++) {
      for (const make of [generateSquares, generateMissingSide]) {
        const { config } = make(seed)
        expect(config.a * config.a + config.b * config.b).toBe(config.c * config.c)
      }
    }
  })

  it('asks for the square on the hypotenuse, or for a missing side', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const squares = generateSquares(seed)
      expect(squares.solution).toBe(squares.config.c * squares.config.c)
      const side = generateMissingSide(seed)
      const { a, b, c, missing } = side.config
      expect(side.solution).toBe(missing === 'a' ? a : missing === 'b' ? b : c)
    }
  })

  it('accepts the number and nothing else', () => {
    const logic = generateSquares(3)
    expect(logic.check(logic.solution)).toBe(true)
    expect(logic.check(logic.solution + 1)).toBe(false)
  })
})

describe('the net of a box', () => {
  it('asks for the whole surface', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateNet(seed)
      expect(solution).toBe(2 * (config.a * config.b + config.a * config.c + config.b * config.c))
      expect(surface(config)).toBe(solution)
    }
  })

  it('keeps the box small enough to draw', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config } = generateNet(seed)
      for (const side of [config.a, config.b, config.c]) {
        expect(side).toBeGreaterThanOrEqual(2)
        expect(side).toBeLessThanOrEqual(6)
      }
    }
  })
})

describe('chance', () => {
  it('counts the spins it has prepared', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateSpin(seed)
      expect(solution).toBe(config.results.filter((r) => r === config.watched).length)
      expect(config.results.length).toBeGreaterThanOrEqual(10)
      expect(config.results.every((r) => r >= 0 && r < config.sectors.length)).toBe(true)
    }
  })

  it('turns a tally into a whole percentage', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateFrequency(seed)
      expect(config.counts.reduce((a, b) => a + b, 0)).toBe(config.total)
      expect(config.counts.every((c) => c > 0)).toBe(true)
      expect(solution).toBe(Math.round((config.counts[config.watched]! / config.total) * 100))
    }
  })

  it('asks for a share that divides the wheel exactly', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const { config, solution } = generateWheel(seed)
      const [numerator, denominator] = config.label.split('/').map(Number)
      expect((config.sectors * numerator!) / denominator!).toBe(solution)
      expect(solution).toBeLessThan(config.sectors)
    }
  })

  it('accepts the number and nothing else', () => {
    for (const make of [generateSpin, generateFrequency, generateWheel]) {
      const logic = make(5)
      expect(logic.check(logic.solution)).toBe(true)
      expect(logic.check(logic.solution + 1)).toBe(false)
    }
  })
})

describe('the campaign as a whole', () => {
  it('has a mission for every continent', () => {
    const continents = new Set(MISSIONS.map((m) => m.continent))
    expect(continents.size).toBe(7)
  })

  it('can be walked from the first mission to the last', () => {
    const solved = new Set<string>()
    let progress = true
    while (progress) {
      progress = false
      for (const mission of MISSIONS) {
        if (solved.has(mission.id)) continue
        if (mission.requires.every((id) => solved.has(id))) {
          solved.add(mission.id)
          progress = true
        }
      }
    }
    expect(solved.size).toBe(MISSIONS.length)
  })

  it('names every mission once', () => {
    const titles = MISSIONS.map((m) => m.title)
    expect(new Set(titles).size).toBe(titles.length)
  })
})
