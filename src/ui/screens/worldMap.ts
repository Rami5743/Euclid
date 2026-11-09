import { enemyFortresses } from '../../content/world'
import { profile } from '../../state/profile'
import { campaign, isOpen } from '../../state/progress'
import { WORLD_VIEW } from '../../render/maps/projection'
import { el, page } from '../components/layout'
import { mapView, type MapMarker } from '../components/mapView'
import { navigate, type Screen } from '../router'
import worldArt from '../../render/maps/world.svg?raw'
import bannerIcon from '../../render/sprites/banner-icon.svg?raw'
import lockIcon from '../../render/sprites/lock-icon.svg?raw'

export function worldMapScreen(): Screen {
  const p = profile()
  const markers: MapMarker[] = campaign().map((c) => {
    const total = enemyFortresses(c).length
    const done = enemyFortresses(c).filter((f) => p.conquered.includes(f.id)).length
    if (!isOpen(c, p)) {
      return { lon: c.lon, lat: c.lat, label: c.name, state: 'locked', icon: lockIcon }
    }
    return {
      lon: c.lon,
      lat: c.lat,
      label: c.name,
      sub: `${done}/${total}`,
      state: 'continent',
      icon: bannerIcon,
      onClick: () => navigate(`/continent/${c.id}`),
    }
  })

  return page(
    { title: 'מפת העולם', subtitle: 'יבשת נפתחת אחרי שקודמתה נכבשה', showBack: false },
    mapView(worldArt, WORLD_VIEW, markers),
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
