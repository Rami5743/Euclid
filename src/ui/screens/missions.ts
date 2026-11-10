import { continentById } from '../../content/world'
import { MAX_STARS } from '../../missions/scoring'
import { profile } from '../../state/profile'
import { bestOf, currentContinent, isOpen, openMissions, playableMissions } from '../../state/progress'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

/** The missions of the continent being played that are open right now. */
export function missionsScreen(params: Record<string, string>): Screen {
  const p = profile()
  const asked = continentById(params.id ?? '')
  const continent = asked && isOpen(asked, p) ? asked : currentContinent(p)
  const open = openMissions(continent, p)
  const locked = playableMissions(continent).length - open.length

  const cards = open.map((m) => {
    const best = bestOf(p, m.id)
    const card = el('button', { class: 'card mission-card', type: 'button' },
      el('h3', {}, m.title),
      el('span', { class: 'stars-row' }, stars(best)),
    )
    card.addEventListener('click', () => navigate(`/mission/${m.id}`))
    return card
  })

  const body: (Node | string)[] = cards.length > 0
    ? [el('div', { class: 'grid' }, ...cards)]
    : [el('p', { class: 'notice' }, 'המשימות של היבשת הזו עדיין בדרך.')]

  if (locked > 0) {
    body.push(el('p', { class: 'muted' }, `עוד ${locked} משימות ייפתחו לפי ההתקדמות.`))
  }

  return page(
    { title: 'משימות', subtitle: `${continent.name} · ${continent.domain}` },
    ...body,
  )
}

function stars(best: number): string {
  return '★'.repeat(best) + '☆'.repeat(MAX_STARS - best)
}
