import { CONTINENTS } from '../../content/world'
import { provider } from '../../missions/empty'
import { el, page } from '../components/layout'
import type { Screen } from '../router'

/**
 * The missions menu. The structure is final; the content is not there yet, so
 * every topic is listed from the curriculum and marked as coming soon.
 */
export function missionsScreen(): Screen {
  const sections = CONTINENTS.map((c) => {
    const ready = new Set(provider.topics(c.id).map((t) => t.id))
    const rows = c.topics.map((t) => {
      const available = ready.has(t.id)
      return el('li', { class: `topic${available ? '' : ' soon'}` },
        el('span', { class: 'topic-name' }, t.name),
        el('span', { class: 'badge' }, available ? 'זמין' : 'בקרוב'),
      )
    })
    return el('section', { class: 'card topics' },
      el('h3', {}, `${c.name} · ${c.domain}`),
      el('ul', {}, ...rows),
    )
  })

  return page(
    { title: 'תפריט המשימות', subtitle: 'פתרון משימות מזכה בכוכבים, וכוכבים משדרגים את הגיבורים' },
    el('p', { class: 'notice' },
      'המשימות עצמן טרם נכתבו. התפריט מציג את נושאי הלימוד של כיתה ז לפי סדר ההוראה, ' +
      'וכל נושא ייפתח כאן ברגע שיוכנסו לו משימות.'),
    el('div', { class: 'stack' }, ...sections),
  )
}
