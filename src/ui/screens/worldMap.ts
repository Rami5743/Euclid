import { CONTINENTS } from '../../content/world'
import { profile } from '../../state/profile'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

export function worldMapScreen(): Screen {
  const p = profile()
  const cards = CONTINENTS.map((c) => {
    const total = c.fortresses.filter((f) => !f.home).length
    const done = c.fortresses.filter((f) => !f.home && p.conquered.includes(f.id)).length
    const card = el('button', { class: 'card continent-card', type: 'button' },
      el('h3', {}, c.name),
      el('p', { class: 'muted' }, c.domain),
      el('p', { class: 'progress' }, `${done} מתוך ${total} מבצרים נכבשו`),
    )
    card.addEventListener('click', () => navigate(`/continent/${c.id}`))
    return card
  })

  return page(
    { title: 'מפת העולם', subtitle: 'ארבע יבשות, ארבעה תחומים במתמטיקה', showBack: false },
    el('div', { class: 'grid' }, ...cards),
  )
}
