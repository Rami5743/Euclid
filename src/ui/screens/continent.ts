import { continentById } from '../../content/world'
import { profile } from '../../state/profile'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

function difficultyLabel(d: number): string {
  if (d <= 0.9) return 'קל'
  if (d <= 1.3) return 'בינוני'
  if (d <= 1.8) return 'קשה'
  return 'קשה מאוד'
}

export function continentScreen(params: Record<string, string>): Screen {
  const continent = continentById(params.id ?? '')
  if (!continent) return page({ title: 'יבשת לא נמצאה' }, el('p', {}, 'חזרה למפת העולם.'))

  const p = profile()
  const items = continent.fortresses.map((f) => {
    if (f.home) {
      return el('div', { class: 'card fortress home' },
        el('h3', {}, f.name),
        el('p', { class: 'muted' }, 'המצודה שלך ביבשת הזו'),
      )
    }
    const conquered = p.conquered.includes(f.id)
    const card = el('button', { class: `card fortress${conquered ? ' conquered' : ''}`, type: 'button' },
      el('h3', {}, f.name),
      el('p', { class: 'muted' }, `רמת האויב: ${difficultyLabel(f.difficulty)}`),
      el('p', { class: 'progress' }, conquered ? 'נכבש' : 'טרם נכבש'),
    )
    card.addEventListener('click', () => navigate(`/battle/${f.id}`))
    return card
  })

  return page(
    { title: continent.name, subtitle: continent.domain },
    el('div', { class: 'grid' }, ...items),
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
