# Euclid

A game that teaches seventh grade mathematics. It runs entirely in the browser,
has no server, and is published as a static site.

## Two halves

**Reader facing** — everything a player sees: mission text, hints,
explanations, every string of the interface. It carries no trace of how it was
made: no alternatives weighed, nothing measured, no reference to earlier
versions or to the working conversation. Each sentence must answer a question
the player actually has.

**Internal** — this file, `docs/`, commit messages and code comments. The
reasoning, the measurements and the decisions belong here, fully written out.

Hebrew in the product: use the accepted term when it is certain, otherwise
transliterate or describe; never invent a Hebrew word by translating the
English. Numbers inside a Hebrew sentence go through `num()` in
`src/missions/text.ts`, which keeps a sign and its digits together.

## Where things are

```
src/battle/     the real time simulation, with no reference to the DOM
src/missions/   mission logic (generate, check, hints) and the boards they are played on
src/content/    the world, the heroes, the upgrades and the mission list
src/render/     battle rendering: scene, rig, sprites and maps
src/ui/         router, screens and shared components
src/state/      profile, storage and progress rules
tools/          the balance tool, the map generator and the browser test
docs/           design notes
```

A mission is a pure generator plus a board: `generate(seed)` returns the
configuration, the solution, the hint ladder and the explanation, and the board
renders it and reads the answer back. Logic is tested over hundreds of seeds;
the board is covered by the browser test.

## Before pushing

```
npm run check
```

Type check, unit tests, the balance check and a browser test that plays every
mission that is open. All of it must pass.

The published site is served from the repository root, so `npm run build` is
part of any change to `src/`, and its output is committed.
