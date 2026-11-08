import { CONTINENTS } from '../../content/world'
import { profile } from '../../state/profile'
import { el, page } from '../components/layout'
import { mapView, type MapMarker } from '../components/mapView'
import { navigate, type Screen } from '../router'
import worldArt from '../../render/maps/world.svg?raw'
import bannerIcon from '../../render/sprites/banner-icon.svg?raw'

export function worldMapScreen(): Screen {
  const p = profile()
  const markers: MapMarker[] = CONTINENTS.map((c) => {
    const total = c.fortresses.filter((f) => !f.home).length
    const done = c.fortresses.filter((f) => !f.home && p.conquered.includes(f.id)).length
    return {
      x: c.x,
      y: c.y,
      label: c.name,
      sub: `${done}/${total}`,
      state: 'continent',
      icon: bannerIcon,
      onClick: () => navigate(`/continent/${c.id}`),
    }
  })

  return page(
    { title: 'מפת העולם', subtitle: 'ארבע יבשות, ארבעה תחומים במתמטיקה', showBack: false },
    mapView(worldArt, markers),
    el('div', { class: 'row' },
      linkButton('שדרוג הגיבורים', '/upgrades'),
      linkButton('תפריט המשימות', '/missions'),
      linkButton('הגיבורים שלי', '/setup'),
    ),
  )
}

function linkButton(label: string, path: string): HTMLElement {
  const b = el('button', { class: 'btn', type: 'button' }, label)
  b.addEventListener('click', () => navigate(path))
  return b
}
