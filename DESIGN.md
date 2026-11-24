# DESIGN.md — Nur Toha Mubarak portfolio

## Subject, audience, job

**Subject.** Nur Toha Mubarak (Bara), 23, Jakarta Utara. By day he is an HSE
Fire Watcher on high-risk field work (hot work, permits, hazard identification)
at PT Bina Karya Prima, placed via PT Bina Cipta Abadi. Off shift he builds AI
tools with an AI copilot, from his phone, with no paid APIs — and ships them:
a Devpost-submitted developer tool, a daily game on Reddit, Kaggle
competition entries, and responsible-disclosure security research.

**Audience.** Hiring managers and collaborators for junior AI/automation and
software work, plus hackathon judges. They need to see, in under a minute,
that this is a real person with real shipped work — not a template.

**Job of the page.** Prove shipping. Every claim on the page must resolve to
a live link, a verifiable score, or a plainly-worded fact. Nothing decorative
may pretend to be evidence.

## Identity: the field logbook

The visual identity comes from Bara's field world, used with restraint: the
**permit-to-work / shift logbook**. A logbook is ruled, left-aligned, dense
with facts, and sparing with emphasis — one signal colour marks the one thing
that must not be missed. That is the whole design:

- Ruled paper ground, hairline rules between entries, left-aligned text.
- One signal-orange accent, used only where a permit uses it: the single
  marker that says "look here" (the hero stamp block and the primary action).
- Documentation structure: entries, labels, and figures — no marketing
  chrome, no hero screenshot, no stat row.
- The portrait is presented like a permit photo ID: framed, captioned with
  name and role, not a decorative circle avatar.

## Palette (6 named values)

| Token | Hex | Role |
|---|---|---|
| Paper | `#EDEEE8` | Page ground. Pale concrete grey, not cream. |
| Card | `#F8F7F2` | Raised surface for the flagship project panel. |
| Ink | `#21231F` | Text, and the dark Field Record band. Soft black, not `#0B0B0B`. |
| Steel | `#5F665C` | Secondary text and metadata. Verified ≥ 4.5:1 on Paper. |
| Rule | `#D2D4CB` | Hairline rules and borders. |
| Signal / Signal Deep | `#E4571F` / `#9C3D0F` | One accent family. Signal is for graphic/large use only (stamp block, rules); Signal Deep is the text-safe shade for links and small text on Paper. Signal is never used for body text. |

No gradients anywhere. No blue, no purple. Palette cap respected: two neutrals
(Paper/Card), Ink, Steel, Rule, one accent family.

## Typography

- **Display — Archivo (700/800), tight leading, sentence case.**
  An industrial grotesque: the voice of signage and stencils, which is the
  field world's typography. Used for the page title and section titles only.
- **Body — IBM Plex Sans (400/500).** The documentation voice: plain,
  legible, slightly technical without being decorative.
- **Data — IBM Plex Mono (400/500), figures only.** Kaggle scores and
  submission references are set in mono because they are logbook figures,
  not because mono looks technical.

Type scale: display `clamp(2.5rem, 7vw, 4rem)`; section titles `1.75rem`;
body `1.0625rem / 1.65`; small/meta `0.875rem`. Body measure under 80ch.
Headlines are sentence case. No tracked-out all-caps eyebrow labels above
headings. The single exception to the caps rule is one mono "field log" line
in the hero (`Field log — Jakarta Utara, Indonesia`), which is a logbook
device, not a label above a heading.

## Layout concept

Left-aligned throughout. Rhythm varies by content type; no two sections share
the same composition.

```
┌──────────────────────────────────────────────────────────┐
│ NAME (wordmark)              About  Work  Record  Contact│  header, hairline below
├──────────────────────────────────────────────────────────┤
│                                                          │
│  NUR TOHA MUBARAK                                        │
│  Builds AI tools off shift.                              │
│  Fire watcher by trade.                                  │
│                                                          │
│  [portrait ID panel, captioned]                          │
│  Field log — Jakarta Utara, Indonesia · No paid APIs     │
│  [ See the work ]  [ GitHub ]                            │
│  ─────────── signal rule ───────────                     │
├──────────────────────────────────────────────────────────┤
│  ABOUT — narrow measure, two short paragraphs            │
├──────────────────────────────────────────────────────────┤
│  WORK                                                    │
│  ┌────────────────────────────────────────────────────┐  │
│  │ FLAGSHIP: NanoOrCloud — full-width panel,          │  │
│  │ visual block + description + 4 links               │  │
│  └────────────────────────────────────────────────────┘  │
│  ── Daily Drift — log row: title left, text, links      │
│  ── Kaggle — data table: competition / score / ref      │
│  ── Security research — plain block, no links by design │
├──────────────────────────────────────────────────────────┤
│  FIELD RECORD (ink band)                                 │
│  Experience (definition list)  │  Education (plain list) │
├──────────────────────────────────────────────────────────┤
│  CONTACT — one column: email, LinkedIn, 3 GitHub accts  │
│  © line                                                  │
└──────────────────────────────────────────────────────────┘
```

ASCII wireframes are schematic; the built page uses the same left-aligned,
ruled structure. Alignment: left everywhere, including the hero. No centered
sections. No bento grid, no uniform card grid, no stat row, no testimonials,
no FAQ, no pricing, no logo bar.

Section treatments follow content, not a template:

- **NanoOrCloud** gets the full-width panel because it is the flagship: a
  live deployed app with four verifiable links.
- **Daily Drift** gets a log row because its evidence is two links and a
  one-line description.
- **Kaggle** gets a data table because its evidence is figures (scores and
  submission references) — numbers are shown as numbers, in mono, with no
  invented deltas or percentages.
- **Security research** gets a plain block with no links, because the
  reports are intentionally not published. No fake UI, no fake terminal.

## Principles

1. **One memorable element.** The permit-style hero: portrait ID panel +
   signal stamp block + shift-log line. Everything else stays quiet.
2. **Evidence or nothing.** A claim without a link or a figure does not ship.
3. **Restraint is the style.** Flat surfaces, one shadow (flagship panel
   only), one radius scale, hairlines instead of boxes where possible.
4. **The page must work without motion, without JavaScript, and from a
   keyboard.** Motion is an enhancement, never the carrier of content.

## Motion (one orchestrated moment + hierarchy reveals)

- **Page-load moment (the only orchestrated sequence).** A single GSAP
  timeline, ~0.9s, `power3.out`: the header rule draws in, the headline
  lines rise 24px, the portrait panel settles, and the signal stamp block
  arrives last. Purpose: the page opens like a field document being laid
  on the desk — it tells the visitor, in the first second, that this is a
  record of work, not a landing page. It runs once.
- **Scroll reveals (hierarchy only).** Section titles and the flagship panel
  rise 24px and fade in, once each, as they enter the viewport. Purpose:
  mark the start of each logbook entry so a long page scans in order.
  Nothing else animates on scroll.
- **Hover.** Links underline; the primary action darkens slightly. No
  lifts, no glows, no scale.
- **Reduced motion.** `prefers-reduced-motion: reduce` disables all of the
  above: content renders in its final state, no animation runs, no
  ScrollTrigger is created. Content is visible with JavaScript disabled
  because all animation uses `gsap.from` (initial state = visible).
- **Forbidden.** No endless pulses, loops, floating, marquee, or
  scroll-linked parallax. No animation on the Kaggle figures.

## Review against the brief (pass 2 — what was revised and why)

Working through the default clusters from the frontend-design skill, the
first draft of this plan failed in five places. Each was revised before
any code was written:

1. **Near-black hero + orange accent** — cluster 2 (near-black + single
   bright accent). Revised: light paper ground for the whole page; the
   single dark element is the Field Record band, two-thirds down, where
   it reads as a filed record rather than a theme.
2. **Cream background + serif display** — cluster 1 (cream + serif +
   terracotta). Revised: concrete-grey paper, grotesk display type, orange
   kept but as signal orange, not terracotta.
3. **Tracked-out all-caps eyebrow above every heading + numbered 01/02/03
   markers** — cluster 5 tells, and the content is not a sequence.
   Revised: no eyebrows, no section numbers; one mono logbook line in the
   hero only.
4. **Uniform project cards in a grid** — cluster 4, the SaaS-card kit.
   Revised: four different treatments matched to four different kinds of
   evidence (panel / row / table / plain block).
5. **Gradient placeholder panels + a big-number stat strip in the hero** —
   gradient tell and stat-card tell; the numbers would have been
   decoration. Revised: flat typographic placeholder panels with no fake
   UI, and a prose shift-log line instead of stats.

## Content rules (binding)

- Verified facts only, from the content source (`~/workspace/portfolio/
  index.html`) plus the confirmed additions below. No invented copy claims.
- Contact: email `tohamubarak110@gmail.com`; LinkedIn
  `linkedin.com/in/nur-toha-mubarak-b8329a280` (confirmed by Bara 24 Nov
  2026, verified live); GitHub accounts — primary
  `github.com/BaraGitDoodle-bit`, plus `github.com/theandroidaiarchitect-dev`
  and `github.com/dokumenhilangid-blip` (all three authorized by Bara;
  no repos claimed for dokumenhilangid-blip).
- NEVER on the site: any phone number; any university education; projects
  OrderFlow, SCAMCHECK, JEV Observatory, KapitalNalar, ANDAI doodle; any
  description of Daily Drift as screenshot analysis; invented metrics,
  testimonials, logos, or stats.
- Experience and Education sections word the facts as on Bara's public page
  (bara-c53.pages.dev) and his LinkedIn (verified live): HSE Fire Watcher,
  PT Bina Karya Prima, placement via PT Bina Cipta Abadi, Jan 2024–present,
  Kota Bekasi; SMAN 110 Jakarta Utara, Social Sciences, Aug 2018–May 2021
  (completed). Education is SMAN 110 only, per Bara's instruction of
  25 Nov 2026: no university is listed anywhere on the site.
- Project visuals are honest placeholder panels (typographic, flat, no fake
  UI, no hotlinked thumbnails). A screenshot pass is still needed.
- Every nav link and control has a real destination. No dead controls.

## Engineering notes

- Next.js App Router + TypeScript strict, static export (`output: 'export'`)
  for GitHub Pages. GSAP + ScrollTrigger for the motion above.
- Semantic tokens only in components (`--color-text`, `--space-4`, …); no
  raw hex and no off-scale pixel values in component styles.
- WCAG 2.1 AA: skip link, landmarks, visible focus, keyboard-operable nav,
  4.5:1 text contrast, `prefers-reduced-motion` respected.
- Responsive: mobile-first; verified at 320 / 768 / 1024 / 1440 by layout
  rules (fluid type, single-column collapse under 720px, table scrolls
  horizontally only if needed — table is two short columns, no scroll).
