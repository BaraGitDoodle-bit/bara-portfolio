# Nur Toha Mubarak — Portfolio

A production-quality portfolio site: Next.js App Router + React + TypeScript,
static export for GitHub Pages, GSAP motion with reduced-motion support.
Design rationale, palette, typography, layout, and motion purposes live in
[DESIGN.md](DESIGN.md).

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build   # static export lands in ./out
```

## Deploy to GitHub Pages

The contents of this directory are the repository contents. Push them to the
public repository `BaraGitDoodle-bit/bara-portfolio`'s `main` branch, then in
the repository settings enable Pages with **Source: GitHub Actions**. The
included workflow (`.github/workflows/pages.yml`) builds the static export and
deploys it on every push to `main`. The `basePath` is hardcoded to
`/bara-portfolio` in `next.config.ts`, so no repository variable is needed.

Live URL: https://BaraGitDoodle-bit.github.io/bara-portfolio/

## Content rules

- Every claim on the page resolves to a verified live page, a verifiable
  figure, or a plainly-worded fact. See `src/data/content.ts`.
- No phone number appears anywhere on the site.
- Education lists SMAN 110 Jakarta Utara (completed) only. No university
  is listed anywhere, per Bara's instruction of 25 Nov 2026.
- OrderFlow and SCAMCHECK are intentionally not listed: no verified
  repository links yet.
- Project visuals are honest placeholder panels. A screenshot pass (real
  screenshots of NanoOrCloud and Daily Drift) is still needed before the
  site is presented as finished.

## TODO

- [ ] Screenshot pass: replace the NanoOrCloud placeholder panel with a real
      screenshot of the live app; add a real visual for Daily Drift.
- [x] Repository name decided at publish time: `bara-portfolio`; `basePath`
      hardcoded to `/bara-portfolio` in `next.config.ts`.
- [ ] Bara's remaining confirmations (if any) before publish.
