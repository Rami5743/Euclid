import { continentById, type ContinentId } from '../../content/world'
import { profile } from '../../state/profile'
import { el, page } from '../components/layout'
import { mapView, type MapMarker } from '../components/mapView'
import { navigate, type Screen } from '../router'
import fortressIcon from '../../render/sprites/fortress-icon.svg?raw'
import asiaArt from '../../render/maps/asia.svg?raw'
import europeArt from '../../render/maps/europe.svg?raw'
import africaArt from '../../render/maps/africa.svg?raw'
import americaArt from '../../render/maps/america.svg?raw'

const ART: Record<ContinentId, string> = {
  asia: asiaArt,
  europe: europeArt,
  africa: africaArt,
  america: americaArt,
}

export function continentScreen(params: Record<string, string>): Screen {
  const continent = continentById(params.id ?? '')
  if (!continent) return page({ title: 'יבשת לא נמצאה' }, el('p', {}, 'חזרה למפת העולם.'))

  const p = profile()
  const markers: MapMarker[] = continent.fortresses.map((f) => {
    if (f.home) {
      return { x: f.x, y: f.y, label: f.name, sub: 'הבית שלך', state: 'home', icon: fortressIcon }
    }
    const conquered = p.conquered.includes(f.id)
    // Level and the stars it takes, as plain numbers.
    const sub = conquered
      ? 'נכבש'
      : f.starsNeeded > 0
        ? `${f.level} · ★ ${f.starsNeeded}`
        : String(f.level)
    // A conquered fortress is not attacked again.
    if (conquered) {
      return { x: f.x, y: f.y, label: f.name, sub, state: 'done', icon: fortressIcon }
    }
    return {
      x: f.x,
      y: f.y,
      label: f.name,
      sub,
      state: 'open',
      icon: fortressIcon,
      onClick: () => navigate(`/battle/${f.id}`),
    }
  })

  return page(
    { title: continent.name, subtitle: continent.domain },
    mapView(ART[continent.id], markers),
    el('div', { class: 'row' },
      linkButton('שדרוג הגיבורים', '/upgrades'),
      linkButton('תפריט המשימות', '/missions'),
    ),
  )
}

function linkButton(label: string, path: string): HTMLElement {
  const b = el('button', { class: 'btn', type: 'button' }, label)
  b.addEventListener('click', () => navigate(path))
  return b
}
