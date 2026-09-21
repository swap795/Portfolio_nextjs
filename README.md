# Signal and Substance

Swapnil Thapa's proof-first portfolio, built as a typed Next.js App Router site.

## Run locally

```bash
npm ci
npm run dev
```

Useful checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

The home page is intentionally server-rendered. The responsive menu and employer tabs are the only client interaction in this subphase. Public contact stays limited to GitHub and LinkedIn; personal email, location, and availability wording are omitted.

## Deploy to GitHub Pages

The `Deploy portfolio to GitHub Pages` workflow builds the static export and publishes `out/` on pushes to `main`. In the repository settings, set Pages to `GitHub Actions` as the source. Local development stays at the root URL; both workflows derive the Pages project-site base path from the current GitHub repository name, so repository renames keep generated asset URLs aligned.
