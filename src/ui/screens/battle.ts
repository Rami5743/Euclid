import {
  castHealOn, createBattle, healReady, healTargetFor, issueOrder, step as stepSimulation,
} from '../../battle/sim'
import { battleConfigFor } from '../../battle/setup'
import { TICK, type BattleState, type Unit } from '../../battle/types'
import { heroTitle } from '../../content/heroes'
import { fortressById } from '../../content/world'
import { profile } from '../../state/profile'
import { setLastBattle } from '../../state/lastBattle'
import { createScene, type Scene, type ScenePick } from '../../render/scene'
import { el, page } from '../components/layout'
import { navigate, type Screen } from '../router'

export function battleScreen(params: Record<string, string>): Screen {
  const hit = fortressById(params.id ?? '')
  const config = hit ? battleConfigFor(hit.fortress.id, profile(), (Date.now() & 0xffff) || 1) : null
  if (!hit || !config) return page({ title: 'מבצר לא נמצא' }, el('p', {}, 'חזרה למפת העולם.'))
  const { continent, fortress } = hit

  if (profile().conquered.includes(fortress.id)) {
    const back = el('button', { class: 'btn primary', type: 'button' }, 'חזרה ליבשת')
    back.addEventListener('click', () => navigate(`/continent/${continent.id}`))
    return page(
      { title: fortress.name, subtitle: continent.name, showStars: false },
      el('p', { class: 'notice' }, 'המבצר הזה כבר נכבש.'),
      el('div', { class: 'row' }, back),
    )
  }

  const state: BattleState = createBattle(config)
  const selected = new Set<string>(state.units.filter((u) => u.side === 'player').map((u) => u.id))

  // Optional time multiplier, used by the automated tests and for manual
  // inspection: open the game with ?speed=8 to run battles faster.
  const speed = clampSpeed(new URLSearchParams(location.search).get('speed'))

  let running = false
  let finished = false
  let frame = 0
  let last = 0
  let accumulator = 0

  // Test hook: the end to end tests read the live simulation from here.
  ;(window as unknown as { __battle?: BattleState }).__battle = state

  const scene: Scene = createScene(state, (pick: ScenePick) => onPick(pick))
  const stage = el('div', { class: 'stage' })
  stage.append(scene.el)

  // --- overlays -----------------------------------------------------------
  const overlay = el('div', { class: 'overlay' })
  stage.append(overlay)

  const showIntro = (): void => {
    overlay.replaceChildren(
      el('div', { class: 'panel' },
        el('h2', {}, fortress.name),
        el('p', {}, `רמת האויב: ${fortress.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),
        el('p', { class: 'muted' },
          'הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, ' +
          'וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, ' +
          'והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי.'),
        startButton(),
      ),
    )
    overlay.classList.remove('hidden')
  }

  const showResult = (won: boolean): void => {
    setLastBattle({
      fortressId: fortress.id,
      won,
      seconds: state.time,
      heroes: playerUnits.map((u) => ({
        cls: u.cls,
        name: u.name || heroTitle(u.cls, u.gender),
        alive: u.alive,
        health: Math.max(0, u.hp / u.maxHp),
      })),
    })
    const go = el('button', { class: 'btn primary', type: 'button' }, 'המשך')
    go.addEventListener('click', () => navigate(`/result/${fortress.id}/${won ? 'win' : 'lose'}`))
    overlay.replaceChildren(
      el('div', { class: 'panel' },
        el('h2', {}, won ? 'המבצר נכבש' : 'הקרב אבד'),
        el('p', {}, won ? 'כל מגיני המבצר הובסו.' : 'כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב.'),
        go,
      ),
    )
    overlay.classList.remove('hidden')
  }

  function startButton(): HTMLElement {
    const b = el('button', { class: 'btn primary', type: 'button' }, 'התחל קרב')
    b.addEventListener('click', () => {
      overlay.classList.add('hidden')
      running = true
      last = performance.now()
    })
    return b
  }

  // --- controls -----------------------------------------------------------
  const portraits = el('div', { class: 'portraits' })
  const pauseButton = el('button', { class: 'btn small', type: 'button' }, 'השהה')
  const healButton = el('button', { class: 'btn small', type: 'button' }, 'ריפוי')
  const allButton = el('button', { class: 'btn small', type: 'button' }, 'בחר הכול')
  const holdButton = el('button', { class: 'btn small', type: 'button' }, 'עמוד במקום')

  pauseButton.addEventListener('click', () => {
    if (finished) return
    running = !running
    last = performance.now()
    pauseButton.textContent = running ? 'השהה' : 'המשך'
  })
  allButton.addEventListener('click', () => {
    selected.clear()
    for (const u of state.units) if (u.side === 'player' && u.alive) selected.add(u.id)
    updatePortraits()
  })
  holdButton.addEventListener('click', () => {
    for (const id of selected) issueOrder(state, id, { kind: 'hold' })
  })

  // Healing is never automatic: the mage casts it on the most wounded ally
  // within its range, and only when this is pressed.
  const mage = state.units.find((u) => u.side === 'player' && u.cls === 'mage')
  healButton.addEventListener('click', () => {
    if (!mage) return
    const target = healTargetFor(state, mage.id)
    if (!target) return
    castHealOn(state, mage.id, target.id)
    updateHeal()
  })

  function updateHeal(): void {
    const ready = mage ? healReady(state, mage.id) && healTargetFor(state, mage.id) !== null : false
    if (ready) healButton.removeAttribute('disabled')
    else healButton.setAttribute('disabled', 'true')
  }

  // The portraits are built once and only updated afterwards. Rebuilding them
  // every frame would replace the DOM under the player's finger mid-tap.
  const playerUnits: Unit[] = state.units.filter((u) => u.side === 'player')
  const portraitViews = playerUnits.map((unit) => {
    const fill = el('span', { class: 'portrait-fill' })
    const button = el('button', { class: `portrait ${unit.cls}`, type: 'button' },
      el('span', { class: 'portrait-name' }, unit.name || heroTitle(unit.cls, unit.gender)),
      el('span', { class: 'portrait-bar' }, fill),
    )
    button.addEventListener('click', () => {
      if (!unit.alive) return
      selected.clear()
      selected.add(unit.id)
      updatePortraits()
    })
    portraits.append(button)
    return { unit, button, fill }
  })

  function updatePortraits(): void {
    updateHeal()
    for (const view of portraitViews) {
      const ratio = Math.max(0, view.unit.hp / view.unit.maxHp)
      view.fill.style.width = `${(ratio * 100).toFixed(0)}%`
      view.button.classList.toggle('selected', selected.has(view.unit.id))
      view.button.classList.toggle('dead', !view.unit.alive)
    }
  }
  updatePortraits()

  function onPick(pick: ScenePick): void {
    if (!running) return
    const target = pick.unit
    if (target && target.side === 'player' && target.alive) {
      selected.clear()
      selected.add(target.id)
      updatePortraits()
      return
    }
    if (selected.size === 0) return
    for (const id of selected) {
      if (target && target.side === 'enemy' && target.alive) issueOrder(state, id, { kind: 'attack', targetId: target.id })
      else issueOrder(state, id, { kind: 'move', x: pick.x, y: pick.y })
    }
  }

  const onKey = (e: KeyboardEvent): void => {
    if (e.code === 'Space') {
      e.preventDefault()
      pauseButton.click()
    }
  }
  addEventListener('keydown', onKey)

  // --- loop ---------------------------------------------------------------
  // The loop is driven by performance.now(), not by the timestamp handed to
  // requestAnimationFrame: some browsers, headless ones in particular, advance
  // that timestamp faster than the wall clock, which would run the battle at
  // the wrong speed.
  const tick = (): void => {
    frame = requestAnimationFrame(tick)
    if (running && !finished) {
      const now = performance.now()
      accumulator += Math.min(0.1, (now - last) / 1000) * speed * PACE
      last = now
      let steps = 0
      while (accumulator >= TICK && steps < 8 * speed) {
        step()
        accumulator -= TICK
        steps++
      }
    }
    scene.update(state, selected)
  }

  const step = (): void => {
    stepSimulation(state)
    if (state.winner && !finished) {
      finished = true
      running = false
      showResult(state.winner === 'player')
    }
    updatePortraits()
  }

  showIntro()
  frame = requestAnimationFrame(tick)

  const shell = page(
    { title: fortress.name, subtitle: `${continent.name} · ${continent.domain}`, showStars: false },
    stage,
    el('div', { class: 'hud' }, portraits, el('div', { class: 'hud-actions' }, healButton, allButton, holdButton, pauseButton)),
  )

  return {
    el: shell.el,
    destroy() {
      cancelAnimationFrame(frame)
      removeEventListener('keydown', onKey)
      scene.destroy()
      shell.destroy()
    },
  }
}

/**
 * How fast a battle runs on screen compared to the simulation's own clock.
 * Below one so that a person has time to look and to give orders; it changes
 * nothing about the fight itself, only how quickly it is played back.
 */
const PACE = 0.6

function clampSpeed(raw: string | null): number {
  const value = Number(raw ?? 1)
  if (!Number.isFinite(value) || value <= 0) return 1
  return Math.min(16, Math.max(1, value))
}

