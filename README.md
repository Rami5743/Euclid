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
- **M1 - maps (done).** Drawn world and continent maps with interactive markers.
- **M2 - heroes (done).** Gender and name for each of the three heroes.
- **M3 - simulation (done).** Deterministic battle simulation, headless, tested.
- **M4 - battle (done).** SVG rendering, pointer controls for touch and mouse.
- **M5 - results (done).** Battle outcome feeding the star economy.
- **M6 - balance (done).** Difficulty and star figures measured, not guessed:
  `npm run balance` prints the win rate for every combination of fortress
  difficulty and star budget, and `npm run balance:check` verifies the numbers
  the game ships with.
- **M7** art pass: detailed vector sprites.

## Balance

The campaign is a ladder of twelve fortresses. Each one carries a difficulty
multiplier on the enemy's hit points, attack and defense, and the number of
stars the player needs to have invested in upgrades before it becomes winnable.
Both numbers come from `tools/balance.ts`, which runs hundreds of headless
battles per cell with the simulation's own AI on both sides. Since a real
player plays better than that AI, the measured rates are a lower bound.

The three rules of the opening, verified on every run of `npm run check`:
the first fortress is won without any upgrades, the second cannot be won
without them, the second becomes winnable but barely after the eight stars
granted at the end of the first battle, and the third stays out of reach.

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
