# Minimal Motion Direction Handoff

- Status: REVIEW
- Updated: 2026-09-21
- Branch: `st/minimal-motion-direction`
- Base: `origin/main` at `021204438a7b2ecfe9c59516812763fe26ecc929`
- Gate: PASS - the approved minimal proof-first direction is documented in the Firstmate report and visual artifact.

## Completed

- Baseline browser inspection completed at desktop 1440 x 1000 and requested mobile 390 x 844; the browser reported 500 x 844 for mobile.
- Confirmed the current page still has redundant hero/header/project/contact framing and continuous portrait pulse motion.
- Implemented the quiet proof-first hierarchy: one hero claim, supporting sentence, primary selected-work action, compact proof, one-line About, focused project, concise Contact, and owner-only footer.
- Implemented bounded motion: 480 ms hero entrance with 80 ms art stagger, 15% IntersectionObserver reveals that unobserve after entry, 180 ms project lift/scale/arrow feedback, 220 ms mobile menu, and no continuous portrait animation.
- Added the captain-requested one-time 2.1 second `stroke-dasharray`/`stroke-dashoffset` draw for the existing signal curve, with the completed path shown immediately under reduced motion.

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
- Follow-up focused motion test, lint, typecheck, and `env -u NEXT_PUBLIC_BASE_PATH npm run build`: passed.
- Follow-up browser QA: dev and served builds showed the curve mid-draw and complete at `strokeDashoffset: 0`, with one iteration and no console errors; mobile remained 500 x 844 with a 777 px hero and no overflow; reduced-motion served build showed animation `none`, offset `0`, and no overflow.
- PR #14 is open, unmerged, targets `main`, and its `validate` check is passing.
- Fresh root-path production export is served at `http://127.0.0.1:4173/` by Python PID `33495` (`python3 -m http.server 4173 --bind 127.0.0.1 --directory out`) from this worktree.
- Served-build Chrome QA passed at desktop 1440 x 1000 and requested mobile 390 x 844 (reported 500 x 844), with expected content, no dev overlay, no console errors, and no horizontal overflow.

## Remaining Work

- Commits: `cde2defd469f44bba4f493e2b11ed23a33a71820`, `3e2a9cb`, and follow-up `ca68ce5`.
- PR: https://github.com/swap795/swapnil-portfolio/pull/14
- Preview: http://127.0.0.1:4173/ (keep PID 33495 running for captain review).
- Remaining captain review: approve the preview as-is or request changes; nothing has been merged.

## Follow-up feedback

- Captain requested a subtle one-time draw of the existing curved signal path behind the portrait, approximately 1.8 to 2.4 seconds, with the completed path shown immediately under reduced motion.
- This follow-up remains within the approved motion vocabulary and preserves the portrait entrance, layering, mobile geometry, and accessibility.
