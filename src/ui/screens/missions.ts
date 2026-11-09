import { continentById } from '../../content/world'
import { provider } from '../../missions/empty'
import { profile } from '../../state/profile'
import { currentContinent, isOpen, openTopics } from '../../state/progress'
import { el, page } from '../components/layout'
import type { Screen } from '../router'

/**
 * The missions menu shows one continent - the one being played - and only the
 * topics that are open: the first from the start, and each next one once the
 * one before it has been solved.
 */
export function missionsScreen(params: Record<string, string>): Screen {
  const p = profile()
  const asked = continentById(params.id ?? '')
  const continent = asked && isOpen(asked, p) ? asked : currentContinent(p)
  const ready = new Set(provider.topics(continent.id).map((t) => t.id))
  const open = openTopics(continent, p)
  const locked = continent.topics.length - open.length

  const rows = open.map((t) => {
    const available = ready.has(t.id)
    return el('li', { class: `topic${available ? '' : ' soon'}` },
      el('span', { class: 'topic-name' }, t.name),
      el('span', { class: 'badge' }, available ? 'זמין' : 'בקרוב'),
    )
  })

  return page(
    { title: 'תפריט המשימות', subtitle: `${continent.name} · ${continent.domain}` },
    el('p', { class: 'notice' },
      'פתרון משימות מזכה בכוכבים, וכוכבים משדרגים את הגיבורים.'),
    el('section', { class: 'card topics' }, el('ul', {}, ...rows)),
    ...(locked > 0
      ? [el('p', { class: 'muted' }, `עוד ${locked} נושאים ייפתחו בהמשך, אחד אחרי השני.`)]
      : []),
  )
}
