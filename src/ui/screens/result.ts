import { fortressById } from '../../content/world'
import { FIRST_BATTLE_GRANT } from '../../content/upgrades'
import { profile, updateProfile } from '../../state/profile'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

export function resultScreen(params: Record<string, string>): Screen {
  const hit = fortressById(params.id ?? '')
  if (!hit) return page({ title: 'מבצר לא נמצא' }, el('p', {}, 'חזרה למפת העולם.'))
  const { continent, fortress } = hit
  const won = params.outcome === 'win'

  // The upgrade loop opens right after the first battle, win or lose, together
  // with a one time grant of stars - just enough for the second fortress.
  const firstBattle = !profile().flags.sawUpgrades
  updateProfile((p) => {
    if (won && !p.conquered.includes(fortress.id)) p.conquered.push(fortress.id)
    if (firstBattle) {
      p.flags.sawUpgrades = true
      p.stars += FIRST_BATTLE_GRANT
    }
  })

  const notes: HTMLElement[] = []
  if (firstBattle) {
    notes.push(el('p', { class: 'notice' },
      `נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${FIRST_BATTLE_GRANT} כוכבים להתחלה. ` +
      'מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.'))
  }

  const actions = el('div', { class: 'row' },
    button('שדרוג הגיבורים', '/upgrades', true),
    button('חזרה ליבשת', `/continent/${continent.id}`),
  )

  return page(
    { title: won ? 'המבצר נכבש' : 'הקרב אבד', subtitle: fortress.name, showBack: false },
    ...notes,
    actions,
  )
}

function button(label: string, path: string, primary = false): HTMLElement {
  const b = el('button', { class: primary ? 'btn primary' : 'btn', type: 'button' }, label)
  b.addEventListener('click', () => navigate(path))
  return b
}
