import type { HeroClass } from '../content/heroes'

/**
 * The movable parts of a hero sprite. The sprites are authored as rigs: each
 * limb, the cloak and the weapon are their own group, marked with a class, so
 * the renderer can pose them every frame instead of sliding one flat picture
 * about.
 */
export interface Rig {
  cloak: SVGGElement | null
  legBack: SVGGElement | null
  legFront: SVGGElement | null
  armBack: SVGGElement | null
  armFront: SVGGElement | null
  body: SVGGElement | null
  head: SVGGElement | null
  robe: SVGGElement | null
  quiver: SVGGElement | null
  arrow: SVGGElement | null
  bow: SVGGElement | null
  staff: SVGGElement | null
  orb: SVGCircleElement | null
  orbHalo: SVGCircleElement | null
}

/** Joints, in the sprite's own 128 unit coordinates. */
const HIP = { x: 64, y: 84 }
const SHOULDER_BACK = { x: 56, y: 58 }
const SHOULDER_FRONT = { x: 77, y: 56 }
const NECK = { x: 66, y: 50 }
const COLLAR = { x: 60, y: 52 }
const STAFF_GRIP = { x: 100, y: 70 }

export function readRig(host: Element): Rig {
  const find = <T extends Element>(name: string): T | null => host.querySelector<T>(`.part-${name}`)
  return {
    cloak: find('cloak'),
    legBack: find('leg-back'),
    legFront: find('leg-front'),
    armBack: find('arm-back'),
    armFront: find('arm-front'),
    body: find('body'),
    head: find('head'),
    robe: find('robe'),
    quiver: find('quiver'),
    arrow: find('arrow'),
    bow: find('bow'),
    staff: find('staff'),
    orb: find('orb'),
    orbHalo: find('orb-halo'),
  }
}

export interface Pose {
  cls: HeroClass
  /** walk cycle phase in radians; stays put when the hero does */
  phase: number
  /** how much of the walk cycle to apply, 0 standing still, 1 walking */
  stride: number
  /** seconds since the last blow was struck, or a large number */
  sinceAttack: number
  /** simulation time, for breathing */
  time: number
  alive: boolean
}

function rotate(node: SVGElement | null, angle: number, cx: number, cy: number, extra = ''): void {
  if (!node) return
  node.setAttribute('transform', `rotate(${angle.toFixed(2)} ${cx} ${cy})${extra}`)
}

/** Where the swing of a blow stands, from -1 (wound up) to 1 (followed through). */
export function swing(t: number): number {
  if (t < 0 || t > 0.42) return 0
  if (t < 0.13) return -Math.sin((t / 0.13) * (Math.PI / 2))
  return Math.cos(((t - 0.13) / 0.29) * (Math.PI / 2))
}

export function poseRig(rig: Rig, pose: Pose): void {
  const { phase, stride, time } = pose
  const walk = Math.sin(phase) * stride
  const walk2 = Math.sin(phase * 2) * stride
  const breath = Math.sin(time * 2.1) * (1 - stride)
  const hit = swing(pose.sinceAttack)

  rotate(rig.legBack, walk * 26, HIP.x, HIP.y)
  rotate(rig.legFront, -walk * 26, HIP.x, HIP.y)
  rotate(rig.cloak, walk * 9 + breath * 1.6, COLLAR.x, COLLAR.y)
  rotate(rig.robe, walk * 4 + breath * 1.2, HIP.x, HIP.y + 20)
  rotate(rig.quiver, walk * 6, SHOULDER_BACK.x, SHOULDER_BACK.y)

  // The body rises on each step and breathes when standing.
  const lift = -Math.abs(walk2) * 3
  if (rig.body) {
    rig.body.setAttribute('transform',
      `translate(0 ${lift.toFixed(2)}) rotate(${(walk * 2 + breath * 0.9).toFixed(2)} ${HIP.x} ${HIP.y})`)
  }
  if (rig.head) {
    rig.head.setAttribute('transform',
      `translate(0 ${(lift * 1.15).toFixed(2)}) rotate(${(-walk * 2.5 + breath * 1.4).toFixed(2)} ${NECK.x} ${NECK.y})`)
  }

  switch (pose.cls) {
    case 'warrior': {
      rotate(rig.armBack, -walk * 14, SHOULDER_BACK.x, SHOULDER_BACK.y)
      rotate(rig.armFront, walk * 10 + hit * 52, SHOULDER_FRONT.x, SHOULDER_FRONT.y)
      break
    }
    case 'archer': {
      // The bow arm stays level; the drawing hand pulls back and snaps forward.
      const draw = pose.sinceAttack < 0.42 ? hit : -0.35
      rotate(rig.armFront, walk * 5, SHOULDER_FRONT.x, SHOULDER_FRONT.y)
      rotate(rig.armBack, -walk * 8 - draw * 16, SHOULDER_BACK.x, SHOULDER_BACK.y)
      if (rig.arrow) {
        const flying = pose.sinceAttack >= 0 && pose.sinceAttack < 0.5
        rig.arrow.style.opacity = flying ? '0' : '1'
        rig.arrow.setAttribute('transform', `translate(${(-draw * 9).toFixed(2)} 0)`)
      }
      if (rig.bow) rotate(rig.bow, draw * 4, 104, 62)
      break
    }
    case 'mage': {
      rotate(rig.armBack, -walk * 10, SHOULDER_BACK.x, SHOULDER_BACK.y)
      rotate(rig.armFront, walk * 6 + hit * 26, SHOULDER_FRONT.x, SHOULDER_FRONT.y)
      rotate(rig.staff, hit * 18, STAFF_GRIP.x, STAFF_GRIP.y)
      // The orb flares as the fire leaves it.
      const flare = pose.sinceAttack >= 0 && pose.sinceAttack < 0.5
        ? 1 + 0.9 * Math.max(0, 1 - pose.sinceAttack / 0.5)
        : 1 + 0.08 * Math.sin(time * 4)
      if (rig.orb) scaleAbout(rig.orb, flare, 100, 20)
      if (rig.orbHalo) scaleAbout(rig.orbHalo, flare * 1.1, 100, 20)
      break
    }
  }
}

function scaleAbout(node: SVGElement, factor: number, cx: number, cy: number): void {
  node.setAttribute('transform',
    `translate(${(cx * (1 - factor)).toFixed(2)} ${(cy * (1 - factor)).toFixed(2)}) scale(${factor.toFixed(3)})`)
}

/** The collapse of a hero, from upright at 0 to flat at 1. */
export function poseDeath(rig: Rig, t: number): void {
  const fall = Math.min(1, t)
  const ease = 1 - Math.pow(1 - fall, 3)
  rotate(rig.legBack, ease * 30, HIP.x, HIP.y)
  rotate(rig.legFront, -ease * 20, HIP.x, HIP.y)
  rotate(rig.armBack, ease * 40, SHOULDER_BACK.x, SHOULDER_BACK.y)
  rotate(rig.armFront, -ease * 60, SHOULDER_FRONT.x, SHOULDER_FRONT.y)
  rotate(rig.head, ease * 18, NECK.x, NECK.y)
  rotate(rig.cloak, ease * 12, COLLAR.x, COLLAR.y)
}
