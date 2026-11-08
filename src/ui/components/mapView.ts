import { el } from './layout'

export type MarkerState = 'home' | 'done' | 'open' | 'continent'

export interface MapMarker {
  /** position in percent of the map */
  x: number
  y: number
  label: string
  sub?: string
  state: MarkerState
  icon: string
  onClick?: () => void
}

/**
 * A drawn map (an SVG asset) with interactive markers placed on top of it.
 * The art stays in src/render/maps, the interaction stays here.
 */
export function mapView(background: string, markers: MapMarker[]): HTMLElement {
  const art = el('div', { class: 'map-art', 'aria-hidden': 'true' })
  art.innerHTML = background

  const layer = el('div', { class: 'map-markers' })
  for (const m of markers) {
    const tag: 'button' | 'div' = m.onClick ? 'button' : 'div'
    const node = el(tag, { class: `marker ${m.state}`, style: `left:${m.x}%; top:${m.y}%` })
    if (tag === 'button') node.setAttribute('type', 'button')
    const icon = el('span', { class: 'marker-icon' })
    icon.innerHTML = m.icon
    const caption = el('span', { class: 'marker-caption' },
      el('span', { class: 'marker-label' }, m.label),
      ...(m.sub ? [el('span', { class: 'marker-sub' }, m.sub)] : []),
    )
    node.append(icon, caption)
    if (m.onClick) node.addEventListener('click', m.onClick)
    layer.append(node)
  }

  return el('div', { class: 'map' }, art, layer)
}
