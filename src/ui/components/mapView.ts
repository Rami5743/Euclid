import { toPercent, type ViewBox } from '../../render/maps/projection'
import { el } from './layout'

export type MarkerState = 'player' | 'enemy' | 'continent' | 'locked'

export interface MapMarker {
  lon: number
  lat: number
  label: string
  sub?: string
  state: MarkerState
  icon: string
  onClick?: () => void
}

/**
 * A window onto the drawn world map, with interactive markers placed on top of
 * it by longitude and latitude. A continent map is the same art zoomed in.
 */
export function mapView(background: string, view: ViewBox, markers: MapMarker[]): HTMLElement {
  const art = el('div', { class: 'map-art', 'aria-hidden': 'true' })
  art.innerHTML = background
  const inner = art.firstElementChild
  if (inner instanceof SVGSVGElement) {
    inner.setAttribute('viewBox', `${view.x.toFixed(1)} ${view.y.toFixed(1)} ${view.w.toFixed(1)} ${view.h.toFixed(1)}`)
    inner.setAttribute('preserveAspectRatio', 'xMidYMid slice')
  }

  const layer = el('div', { class: 'map-markers' })
  for (const m of markers) {
    const { left, top } = toPercent(m.lon, m.lat, view)
    const tag: 'button' | 'div' = m.onClick ? 'button' : 'div'
    const node = el(tag, {
      class: `marker ${m.state}`,
      style: `left:${left.toFixed(2)}%; top:${top.toFixed(2)}%`,
    })
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
