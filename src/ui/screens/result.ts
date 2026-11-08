import { continentById, fortressById } from '../../content/world'
import { FIRST_BATTLE_GRANT } from '../../content/upgrades'
import { lastBattle } from '../../state/lastBattle'
import { profile, updateProfile } from '../../state/profile'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

export function resultScreen(params: Record<string, string>): Screen {
  const hit = fortressById(params.id ?? '')
  if (!hit) return page({ title: 'מבצר לא נמצא' }, el('p', {}, 'חזרה למפת העולם.'))
  const { continent, fortress } = hit
  const won = params.outcome === 'win'
  const outcome = lastBattle(fortress.id)

  // The upgrade screen opens after the first battle, win or lose, together with
  // a one time grant of stars. From then on stars come only from missions.
  const firstBattle = !profile().flags.sawUpgrades
  updateProfile((p) => {
    if (won && !p.conquered.includes(fortress.id)) p.conquered.push(fortress.id)
    if (firstBattle) {
      p.flags.sawUpgrades = true
      p.stars += FIRST_BATTLE_GRANT
    }
  })

  const blocks: (Node | string)[] = []

  if (outcome) {
    blocks.push(
      el('section', { class: 'card' },
        el('h3', {}, 'הגיבורים שלך'),
        ...outcome.heroes.map((h) =>
          el('div', { class: 'stat-row' },
            el('span', { class: 'stat-name' }, h.name),
            el('span', { class: 'stat-value' }, h.alive ? `${Math.round(h.health * 100)}% חיים` : 'נפל'),
          ),
        ),
        el('p', { class: 'muted' }, `אורך הקרב: ${Math.round(outcome.seconds)} שניות`),
      ),
    )
  }

  if (firstBattle) {
    blocks.push(el('p', { class: 'notice' },
      `נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${FIRST_BATTLE_GRANT} כוכבים להתחלה. ` +
      'מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.'))
  }

  const remaining = continent.fortresses.filter(
    (f) => !f.home && !profile().conquered.includes(f.id),
  ).length
  if (won && remaining === 0) {
    blocks.push(el('p', { class: 'notice' }, `כל המבצרים ביבשת ${continent.name} נכבשו.`))
  } else if (!won) {
    blocks.push(el('p', { class: 'notice' },
      'האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב.'))
  }

  const actions = el('div', { class: 'row' },
    button(won ? 'שדרוג הגיבורים' : 'לשדרוג הגיבורים', '/upgrades', true),
    button('קרב נוסף באותו מבצר', `/battle/${fortress.id}`),
    button('חזרה ליבשת', `/continent/${continent.id}`),
    button('תפריט המשימות', '/missions'),
  )

  return page(
    { title: won ? 'המבצר נכבש' : 'הקרב אבד', subtitle: `${fortress.name} · ${continentById(continent.id)?.name ?? ''}`, showBack: false },
    ...blocks,
    actions,
  )
}

function button(label: string, path: string, primary = false): HTMLElement {
  const b = el('button', { class: primary ? 'btn primary' : 'btn', type: 'button' }, label)
  b.addEventListener('click', () => navigate(path))
  return b
}
