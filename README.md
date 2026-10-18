# The Practical AI Guy

A single-page portfolio and online resume for Jason Northcutt, an active North
Texas real estate broker who builds and ships AI tools in the middle of live
transactions.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (CSS-first `@theme` tokens)
- Google Fonts: Inter (display), Newsreader (serif body), JetBrains Mono (labels)
- No backend. The contact form is front-end only and is structured so it can be
  wired to an email service or endpoint later (see `src/components/ContactForm.tsx`).

## Develop

```bash
npm install
npm run dev      # http://localhost:5219
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Editing content

All case-study content lives in a single typed array: `src/data/builds.ts`.
Add, remove, or reorder builds there. The grid renders the first four as a
two-column grid and the fifth as a full-width finale card; adjust in
`src/components/Builds.tsx` if the count changes.

Coaching offers live in `src/components/WorkWithMe.tsx`.

## Design system

The palette, type roles, spacing, radii, and motion are defined as tokens in
`src/index.css` under `@theme`. Burnt orange (`--color-accent`) is the only
color and is used sparingly: the accent dot, the highlighted headline phrase,
the primary button, section eyebrows, card icon tiles, and status badges.

## Notes

- The footer links out to `https://aifromthefield.com`. Update the `href` in
  `src/components/Footer.tsx` if the destination differs.
- Motion respects `prefers-reduced-motion`. Scroll reveals and the hero
  entrance fall back to fully visible, static content.

## Project structure

```
src/
  components/   Nav, Hero, CredentialStrip, Builds, BuildCard,
                Tuesday, WorkWithMe, ContactForm, Footer
  data/         builds.ts        (case-study content)
  lib/          Reveal.tsx       (scroll-reveal + reduced-motion helper)
  index.css     design tokens + component styles
  App.tsx       page composition
```
