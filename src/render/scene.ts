import type { BattleState, Projectile, Unit } from '../battle/types'
import arenaArt from './maps/arena.svg?raw'
import warriorF from './sprites/warrior-f.svg?raw'
import warriorM from './sprites/warrior-m.svg?raw'
import archerF from './sprites/archer-f.svg?raw'
import archerM from './sprites/archer-m.svg?raw'
import mageF from './sprites/mage-f.svg?raw'
import mageM from './sprites/mage-m.svg?raw'

/** Pixels of the scene coordinate system per arena tile. */
export const SCALE = 100
const SPRITE_SCALE = 2.6
const SVG_NS = 'http://www.w3.org/2000/svg'

const SPRITES: Record<string, string> = {
  'warrior-f': warriorF, 'warrior-m': warriorM,
  'archer-f': archerF, 'archer-m': archerM,
  'mage-f': mageF, 'mage-m': mageM,
}

export interface ScenePick {
  /** arena coordinates of the pointer */
  x: number
  y: number
  /** the unit under the pointer, if any */
  unit: Unit | null
}

export interface Scene {
  el: SVGSVGElement
  update: (state: BattleState, selected: ReadonlySet<string>) => void
  destroy: () => void
}

function sizeNested(host: Element, width: number, height: number): void {
  const inner = host.firstElementChild
  if (!(inner instanceof SVGSVGElement)) return
  inner.setAttribute('x', '0')
  inner.setAttribute('y', '0')
  inner.setAttribute('width', String(width))
  inner.setAttribute('height', String(height))
  inner.setAttribute('overflow', 'visible')
}

function svg<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string> = {}): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  return node
}

export function createScene(state: BattleState, onPick: (pick: ScenePick) => void): Scene {
  const root = svg('svg', {
    class: 'arena',
    viewBox: `0 0 ${state.arena.width * SCALE} ${state.arena.height * SCALE}`,
    preserveAspectRatio: 'xMidYMid meet',
  })

  const art = svg('g', { class: 'arena-art' })
  art.innerHTML = arenaArt
  sizeNested(art, state.arena.width * SCALE, state.arena.height * SCALE)
  const groundLayer = svg('g', { class: 'layer-ground' })
  const unitLayer = svg('g', { class: 'layer-units' })
  const shotLayer = svg('g', { class: 'layer-shots' })
  root.append(art, groundLayer, unitLayer, shotLayer)

  const views = new Map<string, UnitView>()
  for (const unit of state.units) {
    const view = createUnitView(unit)
    views.set(unit.id, view)
    groundLayer.append(view.ring)
    unitLayer.append(view.group)
  }

  const pick = (event: PointerEvent): void => {
    event.preventDefault()
    const ctm = root.getScreenCTM()
    if (!ctm) return
    const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse())
    const x = p.x / SCALE
    const y = p.y / SCALE
    let hit: Unit | null = null
    let bestD = 0.9
    for (const u of state.units) {
      if (!u.alive) continue
      const d = Math.hypot(u.x - x, u.y - y)
      if (d < bestD) { bestD = d; hit = u }
    }
    onPick({ x, y, unit: hit })
  }
  root.addEventListener('pointerdown', pick)

  return {
    el: root,
    update(current, selected) {
      for (const unit of current.units) {
        views.get(unit.id)?.update(unit, current.time, selected.has(unit.id))
      }
      renderShots(shotLayer, current.projectiles)
    },
    destroy() {
      root.removeEventListener('pointerdown', pick)
      root.remove()
    },
  }
}

interface UnitView {
  group: SVGGElement
  ring: SVGEllipseElement
  update: (unit: Unit, time: number, selected: boolean) => void
}

function createUnitView(unit: Unit): UnitView {
  const ring = svg('ellipse', {
    class: `ring ${unit.side}`,
    rx: '42', ry: '18', cx: '0', cy: '0',
  })
  ring.style.display = 'none'

  const group = svg('g', { class: `unit ${unit.side} ${unit.cls}` })
  const shadow = svg('ellipse', { class: 'shadow', rx: '34', ry: '13', cx: '0', cy: '0' })

  const sprite = svg('g', { class: 'sprite' })
  sprite.innerHTML = SPRITES[`${unit.cls}-${unit.gender}`] ?? ''
  // A nested <svg> with no explicit size would fill the whole scene viewport.
  sizeNested(sprite, 64, 64)

  const barBg = svg('rect', { class: 'hp-bg', x: '-48', y: '-196', width: '96', height: '14', rx: '7' })
  const barFill = svg('rect', { class: 'hp', x: '-45', y: '-193', width: '90', height: '8', rx: '4' })

  group.append(shadow, sprite, barBg, barFill)

  return {
    group,
    ring,
    update(u, time, selected) {
      const px = u.x * SCALE
      const py = u.y * SCALE
      group.setAttribute('transform', `translate(${px.toFixed(1)} ${py.toFixed(1)})`)
      ring.setAttribute('cx', px.toFixed(1))
      ring.setAttribute('cy', py.toFixed(1))
      ring.style.display = selected && u.alive ? '' : 'none'

      const s = SPRITE_SCALE * (u.alive ? 1 : 0.9)
      sprite.setAttribute('transform',
        `scale(${(u.facing * s).toFixed(3)} ${s.toFixed(3)}) translate(-32 -60)`)

      const ratio = Math.max(0, u.hp / u.maxHp)
      barFill.setAttribute('width', (90 * ratio).toFixed(1))
      const hurt = time - u.lastHitAt < 0.18
      group.classList.toggle('hurt', hurt && u.alive)
      group.classList.toggle('dead', !u.alive)
      barBg.style.display = u.alive ? '' : 'none'
      barFill.style.display = u.alive ? '' : 'none'
    },
  }
}

function renderShots(layer: SVGGElement, projectiles: Projectile[]): void {
  while (layer.childNodes.length > projectiles.length) layer.lastChild?.remove()
  while (layer.childNodes.length < projectiles.length) layer.append(svg('g', { class: 'shot' }))

  projectiles.forEach((p, i) => {
    const node = layer.childNodes[i] as SVGGElement
    node.setAttribute('class', `shot ${p.kind}`)
    node.setAttribute('transform', `translate(${(p.x * SCALE).toFixed(1)} ${(p.y * SCALE).toFixed(1)})`)
    if (node.childNodes.length === 0) {
      if (p.kind === 'arrow') {
        node.append(svg('rect', { x: '-18', y: '-2.5', width: '36', height: '5', rx: '2.5' }))
      } else {
        node.append(svg('circle', { r: '13' }))
      }
    }
  })
}
