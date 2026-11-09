import { continentById } from '../../content/world'
import { profile } from '../../state/profile'
import { isOpen } from '../../state/progress'
import { viewFor } from '../../render/maps/projection'
import { el, page } from '../components/layout'
import { mapView, type MapMarker } from '../components/mapView'
import { navigate, type Screen } from '../router'
import fortressIcon from '../../render/sprites/fortress-icon.svg?raw'
import worldArt from '../../render/maps/world.svg?raw'

/** The frame a map is drawn in; the view is fitted to it. */
export const MAP_ASPECT = 5 / 3

export function continentScreen(params: Record<string, string>): Screen {
  const continent = continentById(params.id ?? '')
  if (!continent) return page({ title: 'יבשת לא נמצאה' }, el('p', {}, 'חזרה למפת העולם.'))

  const p = profile()
  if (!isOpen(continent, p)) {
    const back = el('button', { class: 'btn primary', type: 'button' }, 'למפת העולם')
    back.addEventListener('click', () => navigate('/'))
    return page(
      { title: continent.name, subtitle: continent.domain },
      el('p', { class: 'notice' }, 'היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה.'),
      el('div', { class: 'row' }, back),
    )
  }

  const markers: MapMarker[] = continent.fortresses.map((f) => {
    if (f.home) {
      return { lon: f.lon, lat: f.lat, label: f.name, sub: 'הבית שלך', state: 'player', icon: fortressIcon }
    }
    // A conquered fortress joins the player's side and is not attacked again.
    if (p.conquered.includes(f.id)) {
      return { lon: f.lon, lat: f.lat, label: f.name, sub: 'נכבש', state: 'player', icon: fortressIcon }
    }
    return {
      lon: f.lon,
      lat: f.lat,
      label: f.name,
      sub: f.starsNeeded > 0 ? `${f.level} · ★ ${f.starsNeeded}` : String(f.level),
      state: 'enemy',
      icon: fortressIcon,
      onClick: () => navigate(`/battle/${f.id}`),
    }
  })

  return page(
    { title: continent.name, subtitle: continent.domain },
    mapView(worldArt, viewFor(continent.view, MAP_ASPECT), markers),
    el('div', { class: 'row' },
      linkButton('שדרוג הגיבורים', '/upgrades'),
      linkButton('תפריט המשימות', `/missions/${continent.id}`),
    ),
  )
}

function linkButton(label: string, path: string): HTMLElement {
  const b = el('button', { class: 'btn', type: 'button' }, label)
  b.addEventListener('click', () => navigate(path))
  return b
}
