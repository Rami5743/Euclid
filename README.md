# Euclid

משחק אסטרטגיה ללימוד מתמטיקה בכיתה ז. השחקן כובש מבצרים בארבע יבשות, אחת לכל
תחום בתוכנית הלימודים, ומשדרג שלושה גיבורים בעזרת כוכבים שמתקבלים על פתרון
משימות במתמטיקה.

```
Stack:  TypeScript + Vite · SVG rendering · localStorage · static hosting
Run:    npm install && npm run dev
Build:  npm run build      (type check + production bundle in dist/)
```

## Structure

```
src/
  state/      profile + storage abstraction (localStorage today, cloud later)
  content/    world (continents, fortresses, curriculum topics), heroes, upgrades
  missions/   the seam to the learning content - empty on purpose for now
  ui/         hash router, shared components, one module per screen
  battle/     real time simulation (M3) - not written yet
  render/     SVG scene and sprites (M4, M7) - not written yet
tools/        headless balance simulation (M6) - not written yet
```

## Milestones

- **M0 - framework (done).** Router, screens, profile state, star economy,
  upgrade screen, "want more stars?" modal, empty missions menu.
- **M1** world map and continent maps as drawn maps rather than card lists.
- **M2** hero setup: class, gender, name.
- **M3** deterministic battle simulation, headless, with unit tests.
- **M4** SVG rendering, unified pointer controls, battle HUD.
- **M5** battle results feeding the star economy.
- **M6** balance pass driven by `tools/balance.ts`.
- **M7** art pass: detailed vector sprites.

## Design decisions

- **No server.** Everything runs in the browser. A future Google sign-in
  replaces `src/state/storage.ts` only.
- **Pointer, not mouse.** Controls are built for touch and mouse alike: tap a
  hero to select it, tap a target to order an attack, tap the ground to move.
  There is no right-click-only action anywhere.
- **Simulation separated from rendering.** The battle runs on a fixed time step
  with no reference to the DOM, so the same code can be run headless hundreds of
  times to calibrate difficulty.
- **Difficulty by a single multiplier** per fortress on every enemy stat, which
  keeps the progression curve tunable from one number.

## Curriculum source

Topics and their order follow the official teaching plan for 7th grade,
Israeli Ministry of Education, school year 2026/27.
