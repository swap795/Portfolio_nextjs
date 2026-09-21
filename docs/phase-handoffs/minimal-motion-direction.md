# Minimal Motion Direction Handoff

- Status: IN PROGRESS
- Updated: 2026-09-21
- Branch: `st/minimal-motion-direction`
- Base: `origin/main` at `021204438a7b2ecfe9c59516812763fe26ecc929`
- Gate: PASS - the approved minimal proof-first direction is documented in the Firstmate report and visual artifact.

## Completed

- Baseline browser inspection completed at desktop 1440 x 1000 and requested mobile 390 x 844; the browser reported 500 x 844 for mobile.
- Confirmed the current page still has redundant hero/header/project/contact framing and continuous portrait pulse motion.
- Implemented the quiet proof-first hierarchy: one hero claim, supporting sentence, primary selected-work action, compact proof, one-line About, focused project, concise Contact, and owner-only footer.
- Implemented bounded motion: 480 ms hero entrance with 80 ms art stagger, 15% IntersectionObserver reveals that unobserve after entry, 180 ms project lift/scale/arrow feedback, 220 ms mobile menu, and no continuous portrait animation.

## Decisions and Key Files

- Preserve the warm paper/surface, ink/navy, cobalt, orange signal, Georgia, Manrope, and DM Mono system.
- Preserve Experience content, proof, progression, tabs, keyboard behavior, and touch behavior.
- Key implementation files: `app/page.tsx`, `app/content.ts`, `app/globals.css`, `app/components/site-header.tsx`, `app/components/reveal.tsx`, `tests/home.test.js`, and `tests/motion.test.js`.
- Secondary About and project context remains available through native accessible `details` disclosures; Experience data and behavior were not changed.

## Validation

- Deterministic `npm ci` completed successfully.
- Baseline dev browser render had no console errors and no horizontal overflow.
- `npm test`: 6 passed.
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `NEXT_PUBLIC_BASE_PATH=/swapnil-portfolio npm run build`: passed with static `/` and `/_not-found` routes.
- `NEXT_PUBLIC_BASE_PATH=/swapnil-portfolio npm run verify:export`: passed for 4 HTML files.
- Browser QA: no hydration overlay, console errors, or horizontal overflow at desktop 1440 x 1000 and requested mobile 390 x 844 (reported 500 x 844); mobile hero reduced from 1,049 px to 777 px.
- Keyboard QA: menu focus return/Escape, menu link reachability, Experience ArrowRight/End, disclosures, Contact links, Back to top, and visible focus outlines passed.
- Reduced-motion Chrome session: `matchMedia` true; animation/transition none, reveal visible without transform, scroll behavior auto, menu immediate, no console errors.

## Remaining Work

- Commit and push `st/minimal-motion-direction`, open an unmerged PR, confirm checks, then run a fresh root-path production build and serve it for captain review.
- Record the commit, PR URL, local preview URL/process, and final captain review call here; change Status to REVIEW when those are ready.
