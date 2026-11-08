import { BASE_STATS, HERO_NAMES, STAT_NAMES, UPGRADABLE, type HeroClass, type Stat } from '../../content/heroes'
import { costOfNextLevel, effectiveValue } from '../../content/upgrades'
import { profile, updateProfile } from '../../state/profile'
import { el, page } from '../components/layout'
import { showModal } from '../components/modal'
import { navigate, type Screen } from '../router'

export function upgradesScreen(): Screen {
  if (!profile().flags.sawUpgrades) {
    return page(
      { title: 'שדרוג הגיבורים' },
      el('p', { class: 'notice' }, 'אפשרות השדרוג נפתחת אחרי הקרב הראשון.'),
    )
  }

  const body = el('div', { class: 'stack' })
  const paint = (): void => {
    const p = profile()
    body.replaceChildren(
      ...(Object.keys(HERO_NAMES) as HeroClass[]).map((cls) => {
        const hero = p.heroes[cls]
        const rows = UPGRADABLE[cls].map((stat) => statRow(cls, stat, paint))
        return el('section', { class: 'card hero' },
          el('h3', {}, hero.name ? `${hero.name} · ${HERO_NAMES[cls]}` : HERO_NAMES[cls]),
          el('div', { class: 'stats' }, ...rows),
        )
      }),
    )
  }
  paint()

  return page(
    { title: 'שדרוג הגיבורים', subtitle: 'כל דרגה מוסיפה שמונה אחוזים לתכונה' },
    body,
  )
}

function statRow(cls: HeroClass, stat: Stat, repaint: () => void): HTMLElement {
  const p = profile()
  const hero = p.heroes[cls]
  const level = hero.levels[stat] ?? 0
  const base = BASE_STATS[cls][stat] ?? 0
  const value = effectiveValue(base, stat, level)
  const cost = costOfNextLevel(level)

  const button = el('button', { class: 'btn small', type: 'button' },
    cost === null ? 'מרבי' : `★ ${cost}`)
  if (cost === null) button.setAttribute('disabled', 'true')
  button.addEventListener('click', () => {
    if (cost === null) return
    if (profile().stars < cost) {
      showModal(
        'רוצה עוד כוכבים?',
        'כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.',
        [
          { label: 'לא עכשיו', onClick: () => {} },
          { label: 'לתפריט המשימות', primary: true, onClick: () => navigate('/missions') },
        ],
      )
      return
    }
    updateProfile((prof) => {
      prof.stars -= cost
      const h = prof.heroes[cls]
      h.levels[stat] = (h.levels[stat] ?? 0) + 1
    })
    repaint()
  })

  return el('div', { class: 'stat-row' },
    el('span', { class: 'stat-name' }, STAT_NAMES[stat]),
    el('span', { class: 'stat-value' }, formatValue(value)),
    el('span', { class: 'stat-level' }, `דרגה ${level}`),
    button,
  )
}

function formatValue(v: number): string {
  return v >= 10 ? String(Math.round(v)) : v.toFixed(1)
}
