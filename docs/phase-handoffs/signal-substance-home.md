# Signal and Substance Home Handoff

- Status: REVIEW
- Updated: 2026-09-18
- Branch: `st/signal-substance-home`
- Base: `origin/main` at `d4690eabd8618602ce7532f82afdb297f509b0e2`
- Gate: CONDITIONAL/PASS - approved palette, portrait motion, availability omission, and public contact boundaries are applied.

## Completed

- Replaced the legacy Pages Router home with a typed App Router/server-first home vertical slice.
- Added the warm-paper, dark-ink, cobalt, and signal-orange visual system.
- Added semantic responsive navigation, keyboard/touch-complete employer tabs, reduced-motion handling, proof strip, About section, current Verisk progression, focused Glove Controlled Car story, and GitHub/LinkedIn contact band.
- Copied the approved binary portrait into `public/assets/binary-portrait.png`.

## Decisions and Key Files

- `app/content.ts` is the typed local source for approved facts and public links.
- `app/page.tsx` owns the server-rendered home composition; `app/components/experience-tabs.tsx` and `app/components/site-header.tsx` own the only interactive controls.
- The portrait resolves once and uses a slow signal pulse; `prefers-reduced-motion: reduce` disables motion and leaves a static portrait.
- Availability wording, public location, and personal email remain omitted.

## Validation

- `npm ci`: PASS, clean install with 0 vulnerabilities.
- `npm run lint`: PASS.
- `npm run typecheck`: PASS with strict TypeScript checking.
- `npm test`: PASS, 2 focused content and boundary tests.
- `npm run build`: PASS, static App Router home and not-found routes generated.
- Chrome visual review: PASS at the default desktop viewport and explicit 390x844 mobile viewport. Confirmed readable hierarchy, no horizontal overflow, responsive menu, touch/click employer tabs, Arrow-key tab movement, Escape-to-close with focus restoration, and resolved portrait motion.
- Browser console review: PASS, no error or warning entries on desktop or mobile.

## Remaining Work

- Ready for captain review through the pull request from `st/signal-substance-home`.
- Stop at the home vertical slice; a separate full project case-study route remains out of scope.
