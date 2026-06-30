## Direction

Pivot from the current "dark SaaS landing page" tone to a restrained corporate firm aesthetic — McKinsey/BCG structure, kept on the black & gold palette. Confident, dry, expensive. Type does the work, not effects.

## What gets removed (the AI tells)

- Gradient word ("automation") inside the hero headline
- Pulsing "Now booking Q1" badge
- The 48+ / 2–4wk / 120+ / 98% stat strip under the hero
- Bento services grid + the three extra tiles (WhatsApp / Booking / n8n)
- Lucide icons sitting in tinted rounded squares on every card
- Grid-pattern overlays, noise texture utility, glow shadows on buttons
- Hero background image (the gold wave) — replaced with flat black + a single hairline rule
- Copy clichés: "A modern stack for the modern business", "Trusted by founders who count their hours", "Built like a product team, priced like a partner", "Let's map your growth engine"
- Fake outcome metrics on portfolio cards (+62%, 3.4×, etc.) — replaced with neutral descriptors until real numbers exist

## What the new page looks like

Single column max-width ~1100px, generous left margin, hairline gold rules between sections, small-caps eyebrows with section numbers (01 — Services), serif-feeling display via Sora at heavy tracking-tight weights, body in Manrope at a calmer size.

```text
┌─────────────────────────────────────────────┐
│  HORIZON WORKS              Services  Work  │  ← thin nav, no CTA pill
│                             Approach Contact│
├─────────────────────────────────────────────┤
│  01 — Practice                              │
│                                             │
│  Websites, automation, and                  │
│  growth systems for businesses              │
│  that have outgrown their tools.            │  ← no gradient, no badge
│                                             │
│  Based remotely. Selected engagements.      │
│                                             │
│  → Request an introduction                  │  ← text link, gold underline
├─────────────────────────────────────────────┤
│  02 — Services                              │
│                                             │
│  I.  Websites          II. Automation       │  ← three columns, roman numerals
│  Body copy.            Body copy.           │     no icons, no cards
│  — Item                — Item                │
│  — Item                — Item                │
│                                             │
│  III. Lead systems                          │
│  Body copy.                                 │
├─────────────────────────────────────────────┤
│  03 — Approach                              │
│  Discover · Build · Launch · Scale          │  ← horizontal, hairline divided
├─────────────────────────────────────────────┤
│  04 — Selected work                         │
│  Coastal Cafe        Hospitality      2024  │  ← table-style list, not cards
│  Northline Physio    Healthcare       2024  │
│  Pure Supplements    Retail           2023  │
│  Marcus Vale         Coaching         2023  │
├─────────────────────────────────────────────┤
│  05 — Notes from clients                    │
│  Two long-form pull-quotes, serif, no       │
│  avatar circles, no card backgrounds.       │
├─────────────────────────────────────────────┤
│  06 — Contact                               │
│  Left: short paragraph + email + WhatsApp   │
│        as plain text links                  │
│  Right: minimal form, underline inputs only │
└─────────────────────────────────────────────┘
```

## Visual language

- Backgrounds: flat #0A0A0A everywhere. No radial gradients, no grid overlays.
- Rules: 1px hairlines in gold-at-15%-alpha between every section, not boxes around cards.
- Cards: removed wherever possible. Where retained (form, one quote), background is `rgba(255,255,255,0.02)` with a hairline gold border — no shadow, no glow.
- Icons: removed from services, why-us, contact tiles. Kept only in the form inputs (smaller, muted).
- Headlines: keep Sora, but step down sizes (hero to ~56–64px from 88px), tighten tracking, drop the gradient fill.
- Eyebrows: small-caps, gold, with section numbers like "01 —".
- Buttons: replaced with text links carrying a gold underline and an inline arrow. One solid gold button kept on the form submit only.
- Motion: remove the staggered fade-ins on every section. Keep one quiet hero fade. No hover lifts, no rotating arrows.

## Copy rewrite

Replace SaaS-tone copy with shorter, drier sentences. Examples:
- Hero sub: "Websites, automation, and growth systems for businesses that have outgrown their tools."
- Services intro: removed entirely.
- Why-us section: removed as a standalone block; the six points get folded into a short "Approach" paragraph.
- Portfolio cards → an indexed table (name · sector · year). Per-project Challenge/Solution/Outcome moves to a future detail page; not on the landing page.
- Contact: "For new engagements and introductions." + email + WhatsApp + form.

## Sections affected

- `src/routes/index.tsx` — full rewrite of `Hero`, `Services`, `Process`, `WhyUs` (removed/merged), `Portfolio`, `Testimonials`, `Contact`, `Nav`, `Footer`. Component file stays the same, internal subcomponents change.
- `src/styles.css` — remove `grid-bg` and `noise` utilities (no longer used), remove the body radial-gradient backgrounds (flat black), keep the gold token palette as-is. Remove `--shadow-glow` usage.
- `src/assets/hero-horizon.jpg` — no longer referenced. Left on disk; safe to delete later.

## Out of scope

- No palette change (stays black & gold).
- No new routes, no real client logos sourced, no real metrics fabricated.
- No font swap — Sora + Manrope already read as serious; pulled back via weight and tracking rather than family change.
