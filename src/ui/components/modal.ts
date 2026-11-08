import { el } from './layout'

export interface ModalAction {
  label: string
  onClick: () => void
  primary?: boolean
}

/** Simple modal dialog. Closing by backdrop or Escape is always allowed. */
export function showModal(title: string, body: string, actions: ModalAction[]): void {
  const close = (): void => {
    backdrop.remove()
    removeEventListener('keydown', onKey)
  }
  const onKey = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') close()
  }

  const buttons = actions.map((a) => {
    const b = el('button', { class: a.primary ? 'btn primary' : 'btn', type: 'button' }, a.label)
    b.addEventListener('click', () => {
      close()
      a.onClick()
    })
    return b
  })

  const dialog = el('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true' },
    el('h2', {}, title),
    el('p', {}, body),
    el('div', { class: 'modal-actions' }, ...buttons),
  )
  const backdrop = el('div', { class: 'backdrop' }, dialog)
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close()
  })
  addEventListener('keydown', onKey)
  document.body.append(backdrop)
  buttons.find((b) => b.classList.contains('primary'))?.focus()
}
