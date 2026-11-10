import { makeRng } from '../../battle/rng'
import { grid, type Point } from '../boards/grid'
import { num } from '../text'
import type { Board, MissionLogic, MissionModule } from '../types'

export interface MirrorConfig {
  range: number
  /** the shape, as offsets from its anchor */
  shape: Point[]
  anchor: Point
  axis: 'x' | 'y'
}

/** Where the anchor lands when the shape is reflected. */
export function reflected(anchor: Point, axis: 'x' | 'y'): Point {
  return axis === 'y' ? { x: -anchor.x, y: anchor.y } : { x: anchor.x, y: -anchor.y }
}

const SHAPES: Point[][] = [
  [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 0, y: 2 }],
  [{ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 1, y: 2 }],
  [{ x: 0, y: 0 }, { x: 2, y: 1 }, { x: 1, y: 3 }, { x: -1, y: 2 }],
]

export function generate(seed: number): MissionLogic<MirrorConfig, Point> {
  const rng = makeRng(seed)
  const range = 6
  const shape = SHAPES[Math.floor(rng() * SHAPES.length)]!
  const axis: 'x' | 'y' = rng() < 0.5 ? 'y' : 'x'
  // Kept well clear of the axis, so the reflection is a real move.
  const anchor = axis === 'y'
    ? { x: 2 + Math.floor(rng() * 2), y: -2 + Math.floor(rng() * 4) }
    : { x: -2 + Math.floor(rng() * 4), y: 2 + Math.floor(rng() * 2) }
  const target = reflected(anchor, axis)

  const line = axis === 'y' ? 'האנכי' : 'האופקי'
  return {
    config: { range, shape, anchor, axis },
    solution: target,
    check: (answer) => answer.x === target.x && answer.y === target.y,
    hints: [
      { text: `הציר ${line} הוא המראה` },
      { text: 'המרחק של הפינה מהמראה' },
      { text: 'אותו מרחק בצד השני' },
      { text: 'כך נראה השיקוף' },
    ],
    explain: [
      axis === 'y'
        ? `בשיקוף סביב הציר האנכי כל ${num('x')} מחליף סימן ו־${num('y')} נשאר.`
        : `בשיקוף סביב הציר האופקי כל ${num('y')} מחליף סימן ו־${num('x')} נשאר.`,
      `${num(`(${anchor.x}, ${anchor.y})`)} הולך ל־${num(`(${target.x}, ${target.y})`)}.`,
    ],
  }
}

function mount(logic: MissionLogic<MirrorConfig, Point>, onChange: () => void): Board<Point> {
  const { range, shape, anchor, axis } = logic.config
  const target = logic.solution
  const board = grid({ range })
  board.mirrorAxis(axis)
  // The shape as it stands, and the mirrored copy the player has to place.
  board.shape(shape.map((p) => ({ x: p.x + anchor.x, y: p.y + anchor.y })))
  const flipped = shape.map((p) => (axis === 'y' ? { x: -p.x, y: p.y } : { x: p.x, y: -p.y }))

  let answer: Point | null = null
  const start = axis === 'y' ? { x: -range + 1, y: -range + 2 } : { x: -range + 2, y: -range + 1 }
  const ghost = board.dragShape(flipped, start, (p) => { answer = p; onChange() })

  return {
    el: board.el,
    answer: () => answer,
    hint(level) {
      if (level === 1) board.guide(0, axis === 'y' ? 'x' : 'y')
      if (level === 2) {
        const foot = axis === 'y' ? { x: 0, y: anchor.y } : { x: anchor.x, y: 0 }
        board.span(anchor, foot, num(Math.abs(axis === 'y' ? anchor.x : anchor.y)))
      }
      if (level === 3) board.dot(target, 'lit')
      if (level >= 4) ghost.set(target)
    },
    demonstrate() {
      board.dot(target, 'lit')
      ghost.set(target)
    },
    place: (p) => ghost.set(p),
    destroy: () => board.destroy(),
  }
}

export const mirror: MissionModule<MirrorConfig, Point> = { kind: 'mirror', generate, mount }
