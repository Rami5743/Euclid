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
const SPRITE_SCALE = 3.1
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

function svg<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string> = {}): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  return node
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

/** Gradients and filters shared by everything drawn on top of the field. */
function defs(): SVGDefsElement {
  const node = svg('defs')
  node.innerHTML = `
    <radialGradient id="fx-fire" cx="40%" cy="40%">
      <stop offset="0%" stop-color="#fff6d8"/>
      <stop offset="40%" stop-color="#ffb43c"/>
      <stop offset="100%" stop-color="#d9480f"/>
    </radialGradient>
    <radialGradient id="fx-heal" cx="40%" cy="40%">
      <stop offset="0%" stop-color="#f0fff0"/>
      <stop offset="55%" stop-color="#8fe07a"/>
      <stop offset="100%" stop-color="#3f7a35"/>
    </radialGradient>
    <radialGradient id="fx-shadow">
      <stop offset="0%" stop-color="rgba(47,36,24,0.42)"/>
      <stop offset="100%" stop-color="rgba(47,36,24,0)"/>
    </radialGradient>
    <radialGradient id="fx-vignette">
      <stop offset="60%" stop-color="rgba(0,0,0,0)"/>
      <stop offset="100%" stop-color="rgba(47,36,24,0.22)"/>
    </radialGradient>
    <filter id="fx-glow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="9" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>`
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
  const burstLayer = svg('g', { class: 'layer-bursts' })
  const textLayer = svg('g', { class: 'layer-text' })
  const vignette = svg('rect', {
    class: 'vignette', width: String(state.arena.width * SCALE),
    height: String(state.arena.height * SCALE), fill: 'url(#fx-vignette)',
  })
  root.append(defs(), art, groundLayer, unitLayer, shotLayer, burstLayer, textLayer, vignette)

  const views = new Map<string, UnitView>()
  for (const unit of state.units) {
    const view = createUnitView(unit)
    views.set(unit.id, view)
    groundLayer.append(view.ring, view.shadow)
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
    let bestD = 1.0
    for (const u of state.units) {
      if (!u.alive) continue
      // The feet are the anchor, so the body sits above the point.
      const d = Math.hypot(u.x - x, (u.y - 0.5) - y)
      if (d < bestD) { bestD = d; hit = u }
    }
    onPick({ x, y, unit: hit })
  }
  root.addEventListener('pointerdown', pick)

  return {
    el: root,
    update(current, selected) {
      for (const unit of current.units) views.get(unit.id)?.update(unit, current.time, selected.has(unit.id))
      // Painter's order: whoever stands lower on the field is drawn in front.
      const order = [...current.units].sort((a, b) => Number(a.alive) - Number(b.alive) || a.y - b.y)
      for (const unit of order) {
        const view = views.get(unit.id)
        if (view) unitLayer.append(view.group)
      }
      renderShots(shotLayer, current.projectiles, current.time)
      renderBursts(burstLayer, current, views)
      renderFloatingText(textLayer, current, views)
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
  shadow: SVGEllipseElement
  /** last drawn position, for the walk animation */
  px: number
  py: number
  update: (unit: Unit, time: number, selected: boolean) => void
}

function createUnitView(unit: Unit): UnitView {
  const ring = svg('ellipse', { class: `ring ${unit.side}`, rx: '46', ry: '19', cx: '0', cy: '0' })
  ring.style.display = 'none'
  const shadow = svg('ellipse', { class: 'shadow', rx: '52', ry: '22', cx: '0', cy: '0', fill: 'url(#fx-shadow)' })

  const group = svg('g', { class: `unit ${unit.side} ${unit.cls}` })
  const sprite = svg('g', { class: 'sprite' })
  sprite.innerHTML = SPRITES[`${unit.cls}-${unit.gender}`] ?? ''
  // A nested <svg> with no explicit size would fill the whole scene viewport.
  sizeNested(sprite, 64, 64)

  const barBg = svg('rect', { class: 'hp-bg', x: '-42', y: '-208', width: '84', height: '13', rx: '6.5' })
  const barFill = svg('rect', { class: 'hp', x: '-39.5', y: '-205.5', width: '79', height: '8', rx: '4' })
  group.append(sprite, barBg, barFill)

  const view: UnitView = {
    group,
    ring,
    shadow,
    px: unit.x,
    py: unit.y,
    update(u, time, selected) {
      const px = u.x * SCALE
      const py = u.y * SCALE
      const moving = Math.hypot(u.x - view.px, u.y - view.py) > 0.004
      view.px = u.x
      view.py = u.y

      // A walking hero bobs; a striking one lunges forward and back.
      const bob = u.alive && moving ? Math.sin(time * 14) * 5 : 0
      const sway = u.alive && moving ? Math.sin(time * 14) * 2.5 : 0
      const sinceAttack = time - u.lastAttackAt
      const lunge = u.alive && sinceAttack >= 0 && sinceAttack < 0.26
        ? Math.sin((sinceAttack / 0.26) * Math.PI) * 26 * u.facing
        : 0

      group.setAttribute('transform', `translate(${(px + lunge).toFixed(1)} ${(py + bob).toFixed(1)})`)
      ring.setAttribute('cx', px.toFixed(1))
      ring.setAttribute('cy', py.toFixed(1))
      ring.style.display = selected && u.alive ? '' : 'none'
      shadow.setAttribute('cx', px.toFixed(1))
      shadow.setAttribute('cy', (py + 6).toFixed(1))
      shadow.style.opacity = u.alive ? '1' : '0.45'

      const hurt = time - u.lastHitAt < 0.18
      const pop = hurt ? 1.06 : 1
      const s = SPRITE_SCALE * (u.alive ? pop : 0.92)
      const fall = u.alive ? '' : `rotate(${(u.facing * -78).toFixed(0)}) `
      sprite.setAttribute('transform',
        `${fall}rotate(${sway.toFixed(2)}) scale(${(u.facing * s).toFixed(3)} ${s.toFixed(3)}) translate(-32 -60)`)

      const ratio = Math.max(0, u.hp / u.maxHp)
      barFill.setAttribute('width', (79 * ratio).toFixed(1))
      group.classList.toggle('hurt', hurt && u.alive)
      group.classList.toggle('dead', !u.alive)
      barBg.style.display = u.alive ? '' : 'none'
      barFill.style.display = u.alive ? '' : 'none'
    },
  }
  return view
}

function renderShots(layer: SVGGElement, projectiles: Projectile[], time: number): void {
  while (layer.childNodes.length > projectiles.length) layer.lastChild?.remove()
  while (layer.childNodes.length < projectiles.length) layer.append(svg('g'))

  projectiles.forEach((p, i) => {
    const node = layer.childNodes[i] as SVGGElement
    const kind = node.getAttribute('data-kind')
    if (kind !== p.kind) {
      node.setAttribute('data-kind', p.kind)
      node.setAttribute('class', `shot ${p.kind}`)
      node.innerHTML = shotMarkup(p.kind)
    }
    const spin = p.kind === 'fire' ? ` rotate(${((time * 420) % 360).toFixed(0)})` : ''
    node.setAttribute('transform',
      `translate(${(p.x * SCALE).toFixed(1)} ${(p.y * SCALE).toFixed(1)}) rotate(${((p.angle * 180) / Math.PI).toFixed(1)})${spin}`)
  })
}

function shotMarkup(kind: Projectile['kind']): string {
  if (kind === 'arrow') {
    return `<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`
  }
  if (kind === 'fire') {
    return `<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`
  }
  return `<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>`
}

/** A short burst wherever a blow or a heal just landed. */
function renderBursts(layer: SVGGElement, state: BattleState, views: Map<string, UnitView>): void {
  const recent = state.events.filter((e) => state.time - e.time < 0.32)
  while (layer.childNodes.length > recent.length) layer.lastChild?.remove()
  while (layer.childNodes.length < recent.length) layer.append(svg('circle'))

  recent.forEach((e, i) => {
    const node = layer.childNodes[i] as SVGCircleElement
    const view = views.get(e.unitId)
    if (!view) return
    const age = (state.time - e.time) / 0.32
    node.setAttribute('class', `burst ${e.kind}`)
    node.setAttribute('cx', (view.px * SCALE).toFixed(1))
    node.setAttribute('cy', (view.py * SCALE - 90).toFixed(1))
    node.setAttribute('r', (14 + age * 40).toFixed(1))
    node.setAttribute('opacity', (1 - age).toFixed(2))
  })
}

/** Damage and healing rise over the head and fade out. */
function renderFloatingText(layer: SVGGElement, state: BattleState, views: Map<string, UnitView>): void {
  const recent = state.events.filter((e) => state.time - e.time < 1.1 && e.amount >= 1)
  while (layer.childNodes.length > recent.length) layer.lastChild?.remove()
  while (layer.childNodes.length < recent.length) {
    layer.append(svg('text', { 'text-anchor': 'middle' }))
  }

  recent.forEach((e, i) => {
    const node = layer.childNodes[i] as SVGTextElement
    const view = views.get(e.unitId)
    if (!view) return
    const age = (state.time - e.time) / 1.1
    node.setAttribute('class', `floater ${e.kind}`)
    node.setAttribute('x', (view.px * SCALE).toFixed(1))
    node.setAttribute('y', (view.py * SCALE - 210 - age * 70).toFixed(1))
    node.setAttribute('opacity', (1 - age * age).toFixed(2))
    const text = `${e.kind === 'heal' ? '+' : '-'}${Math.round(e.amount)}`
    if (node.textContent !== text) node.textContent = text
  })
}
