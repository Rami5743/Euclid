import { missionById } from '../../content/missions'
import { moduleFor } from '../../missions/registry'
import { MAX_STARS, payout, score } from '../../missions/scoring'
import type { Board, MissionLogic } from '../../missions/types'
import { profile, updateProfile } from '../../state/profile'
import { bestOf } from '../../state/progress'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

export function missionScreen(params: Record<string, string>): Screen {
  const spec = missionById(params.id ?? '')
  const mod = spec ? moduleFor(spec.kind) : undefined
  if (!spec || !mod) {
    return page({ title: 'משימה לא נמצאה' }, el('p', {}, 'חזרה לתפריט המשימות.'))
  }

  const stage = el('div', { class: 'mission-stage' })
  const caption = el('p', { class: 'hint-line' })
  const starRow = el('div', { class: 'stars-row big' })
  const overlay = el('div', { class: 'overlay hidden' })

  const hintButton = el('button', { class: 'btn', type: 'button' }, 'רמז')
  const checkButton = el('button', { class: 'btn primary', type: 'button' }, 'בדיקה')
  checkButton.setAttribute('disabled', 'true')

  let logic: MissionLogic<unknown, unknown>
  let board: Board<unknown>
  let hintsUsed = 0
  let mistakes = 0
  let finished = false

  const paintStars = (): void => {
    const now = finished ? lastScore : score(hintsUsed, mistakes)
    starRow.replaceChildren(
      ...Array.from({ length: MAX_STARS }, (_, i) =>
        el('span', { class: `star${i < now ? ' lit' : ''}` }, '★')),
    )
  }

  let lastScore = MAX_STARS

  const onChange = (): void => {
    if (finished) return
    if (board.answer() === null) checkButton.setAttribute('disabled', 'true')
    else checkButton.removeAttribute('disabled')
  }

  const start = (seed: number): void => {
    board?.destroy()
    logic = mod.generate(seed)
    board = mod.mount(logic, onChange)
    hintsUsed = 0
    mistakes = 0
    finished = false
    lastScore = MAX_STARS
    caption.textContent = ''
    stage.replaceChildren(board.el, overlay)
    overlay.classList.add('hidden')
    checkButton.setAttribute('disabled', 'true')
    hintButton.removeAttribute('disabled')
    paintStars()
    exposeForTests()
  }

  function exposeForTests(): void {
    // Test hook: the end to end tests drive a mission through this.
    ;(window as unknown as { __mission?: unknown }).__mission = {
      solve: () => { board.demonstrate(); onChange() },
      place: (answer: unknown) => { board.place?.(answer); onChange() },
      solution: () => logic.solution,
      state: () => ({ hintsUsed, mistakes, finished, score: score(hintsUsed, mistakes) }),
    }
  }

  hintButton.addEventListener('click', () => {
    if (finished || hintsUsed >= logic.hints.length) return
    hintsUsed++
    board.hint(hintsUsed)
    caption.textContent = logic.hints[hintsUsed - 1]?.text ?? ''
    if (hintsUsed >= logic.hints.length) hintButton.setAttribute('disabled', 'true')
    paintStars()
    onChange()
  })

  checkButton.addEventListener('click', () => {
    if (finished) return
    const answer = board.answer()
    if (answer === null) return
    if (logic.check(answer)) {
      succeed()
      return
    }
    mistakes++
    caption.textContent = 'לא שם. נסה שוב.'
    stage.classList.add('shake')
    setTimeout(() => stage.classList.remove('shake'), 400)
    paintStars()
  })

  function succeed(): void {
    finished = true
    lastScore = score(hintsUsed, mistakes)
    const best = bestOf(profile(), spec!.id)
    const added = payout(best, lastScore)
    updateProfile((p) => {
      p.stars += added
      p.missions[spec!.id] = Math.max(best, lastScore)
      if (!p.solvedTopics.includes(spec!.topicId)) p.solvedTopics.push(spec!.topicId)
    })
    paintStars()

    const again = el('button', { class: 'btn', type: 'button' }, 'עוד אחת')
    again.addEventListener('click', () => start(Math.floor(Math.random() * 65535) + 1))
    const back = el('button', { class: 'btn primary', type: 'button' }, 'לתפריט המשימות')
    back.addEventListener('click', () => navigate('/missions'))

    overlay.replaceChildren(
      el('div', { class: 'panel' },
        el('h2', {}, 'נכון'),
        ...logic.explain.map((line) => el('p', {}, line)),
        el('p', { class: 'reward' }, added > 0 ? `+${added} ★` : '★'),
        el('div', { class: 'modal-actions' }, back, again),
      ),
    )
    overlay.classList.remove('hidden')
  }

  start((Date.now() & 0xffff) || 1)

  const shell = page(
    { title: spec.title, subtitle: '' },
    stage,
    caption,
    el('div', { class: 'hud' }, starRow, el('div', { class: 'hud-actions' }, hintButton, checkButton)),
  )

  return {
    el: shell.el,
    destroy() {
      board.destroy()
      shell.destroy()
    },
  }
}
