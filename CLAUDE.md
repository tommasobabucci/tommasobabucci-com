# Project: tommasobabucci.com

## Overview

Personal website for Tommaso Babucci — AI Strategy & Development consultant at Ernst & Young. The site is structured as two distinct worlds: **"Fun at Work"** (professional identity) and **"Working for Fun"** (articles, projects, creative work). The design reflects a visual shift between these two halves — warm and editorial for Work, dark and expressive for Fun.

---

## Technical Stack

### Framework: Astro

- **Version:** Latest stable (5.x)
- **Why Astro:** Static-first, zero-JS by default, built-in content collections for markdown articles, island architecture for selective interactivity
- **Output:** Static HTML deployed to Cloudflare Pages

### Key Dependencies

```
astro                  - Core framework (5.x)
@astrojs/react         - React integration for interactive islands
@tailwindcss/vite      - Tailwind CSS 4 via Vite plugin (NOT @astrojs/tailwind)
tailwindcss            - Tailwind CSS 4 (CSS-first config, no tailwind.config.mjs)
@astrojs/sitemap       - Auto-generated sitemap
react / react-dom      - Only for interactive components (skill accordion, content grid)
```

### Styling: Tailwind CSS 4 + CSS Custom Properties

- **Tailwind 4** (CSS-first config) — all theme tokens defined in `src/styles/global.css` under `@theme {}`. No `tailwind.config.mjs`.
- CSS custom properties for the dual-palette system (work vs fun themes)
- No component library — all custom components
- Fonts loaded via Google Fonts CDN: Krona One, Sora, Newsreader

### Hosting & Deployment

- **Host:** Cloudflare Pages (free tier — unlimited bandwidth)
- **Deploy:** Automatic via GitHub push
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Domain:** tommasobabucci.com (already registered on Cloudflare)

### Media Strategy

Keep it simple — all assets live in the repo:

| Asset Type | Location | Notes |
|---|---|---|
| Headshot, favicon, OG image | `public/images/` | Small, static |
| Article images | `public/images/articles/` | Optimized via Astro `<Image />` |
| Comic panels | `public/images/comics/` | WebP format, max ~1200px wide |
| Videos | YouTube/Vimeo embeds | No self-hosting needed |

**Image optimization:** Use Astro's built-in `<Image />` component — it auto-converts to WebP, generates responsive sizes, and lazy-loads. No external tooling needed.

If the media folder ever grows beyond what's comfortable in git (~500MB+), migrate to Cloudflare R2 later. For now, this is more than enough.

---

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   └── images/
│       ├── headshot.jpg
│       ├── articles/             # Article cover images (01.png – 04.png)
│       └── comics/               # Comic panels (empty — not yet built)
│
├── src/
│   ├── components/
│   │   ├── SectionTag.astro      # Reusable section label (01 — About)
│   │   ├── FadeIn.astro          # Scroll-triggered fade with direction prop
│   │   │
│   │   ├── work/
│   │   │   ├── About.astro
│   │   │   ├── SkillAccordion.tsx   # React island — interactive
│   │   │   ├── Experience.astro
│   │   │   └── Contact.astro
│   │   │
│   │   └── fun/
│   │       └── ContentGrid.tsx      # React island — filterable articles + projects grid
│   │
│   ├── content/
│   │   ├── config.ts             # Content collection schemas
│   │   ├── articles/             # 4 markdown articles with frontmatter
│   │   ├── projects/             # Empty — not yet populated
│   │   └── comics/               # Empty — not yet built
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro      # HTML shell, meta tags, fonts, JSON-LD
│   │   └── ArticleLayout.astro   # Individual article page layout
│   │
│   ├── pages/
│   │   ├── index.astro           # Landing (unified hero + Fun section + Work section)
│   │   └── articles/
│   │       └── [...slug].astro   # Dynamic article pages
│   │
│   └── styles/
│       └── global.css            # Tailwind 4 @theme, type utilities, animations, all component styles
│
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── CLAUDE.md                     # This file
```

> **Not yet built:** Comic system (ComicReader island, episode pages, ComicLayout), project pages, OG image.

---

## Content Collections

### Articles Schema (`src/content/config.ts`)

> **Critical:** Use `z.coerce.date()` (not `z.date()`) — YAML dates parse as strings and need coercion.

```typescript
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tag: z.string(),                          // Primary category
    tags: z.array(z.string()).default([]),     // Subject tags for filtering
    published: z.boolean().default(true),
    externalUrl: z.string().url().optional(),  // For LinkedIn articles that link out
    coverImage: z.string().optional(),         // Path in public/images/articles/
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    coverImage: z.string().optional(),
  }),
});

const comics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    season: z.number().int().positive(),
    episode: z.number().int().positive(),
    description: z.string(),
    date: z.coerce.date(),
    published: z.boolean().default(true),
    coverImage: z.string().optional(),
    panels: z.array(z.object({
      image: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })),
  }),
});

export const collections = { articles, projects, comics };
```

### Comic Episode Frontmatter Example

```markdown
---
title: "Welcome to NovaCorp"
season: 1
episode: 1
description: "Meet the team navigating NovaCorp's AI-native transformation."
date: 2025-01-15
published: true
coverImage: "comics/neon-nostalgia/s01e01/cover.webp"
panels:
  - image: "comics/neon-nostalgia/s01e01/panel-01.webp"
    alt: "Wide shot of NovaCorp headquarters, neon-lit skyline, 2050"
    caption: "NovaCorp HQ. The future of work — allegedly."
  - image: "comics/neon-nostalgia/s01e01/panel-02.webp"
    alt: "Character at desk, holographic interface"
  - image: "comics/neon-nostalgia/s01e01/panel-03.webp"
    alt: "Team meeting with AI assistant floating above table"
    caption: "The weekly sync. Now with 73% more artificial intelligence."
---

Optional narrative text or behind-the-scenes notes here...
```

### Article Frontmatter Example

```markdown
---
title: "Want to Develop a ChatGPT App? Start Here"
description: "A practical guide to building GPT-powered applications using OpenAI's API"
date: 2023-03-20
tag: "Engineering"
tags: ["AI Engineering", "Product Development"]
published: true
coverImage: "/images/articles/chatgpt-app-cover.webp"
externalUrl: "https://www.linkedin.com/pulse/want-develop-chatgpt-app-start-here-tommaso-babucci"
---

Article content here...
```

### Article Cover Images

Each article has a cover image. These should be used in two places:

1. **Article cards in the gallery grid** — cover image displayed at the top of each card, cropped to a consistent aspect ratio (16:9 or 3:2). Use `object-fit: cover`.
2. **Individual article pages** — full-width hero image at the top of the article, below the title and metadata.

Cover images are stored in `public/images/articles/` and referenced by path in frontmatter. Use Astro's `<Image />` component for automatic WebP conversion and responsive sizing.

---

## Design System

### Dual Palette

The site uses two distinct color palettes that shift when crossing from the Work section to the Fun section.

```css
/* Work palette — warm, editorial, Etruscan Red accent */
--work-bg: #F5F1EB;
--work-bg-card: #ffffff;
--work-text: #1C1917;
--work-text-mid: #57534E;
--work-text-dim: #A8A29E;
--work-accent: #B53B2E;          /* Etruscan Red */
--work-accent-light: rgba(181, 59, 46, 0.06);
--work-border: rgba(0, 0, 0, 0.07);

/* Fun palette — dark, expressive, Neon Magenta accent */
--fun-bg: #0F110F;
--fun-bg-card: #181A18;
--fun-text: #E8E6E1;
--fun-text-mid: #9B9892;
--fun-text-dim: #5C5A56;
--fun-accent: #FF2D6F;           /* Neon Magenta — from Neon Nostalgia artwork */
--fun-accent-light: rgba(255, 45, 111, 0.07);
--fun-border: rgba(255, 255, 255, 0.07);
```

### Typography

Three font families, each with a clear job:

| Font | Role | Where |
|------|------|-------|
| **Krona One** | Display / headings | Hero headings, section titles, skill names, project titles, article titles. Only at ≥16px. The personality carrier. |
| **Sora** | Structural / UI / body (Fun) | Nav, section labels (01 — About), tags, dates, filter tabs, subtitles, body text in Fun section, contact labels. Weights 300–700. |
| **Newsreader** | Body / narrative (Work only) | About text, experience descriptions, contact copy. The editorial warmth — only appears in the Work section. |

**Font loading (Google Fonts):**
```
Krona One: 400 (only weight available)
Sora: 300, 400, 500, 600, 700
Newsreader: 300, 400, 500 + 400 italic (optical sizing)
```

**Type Scale:**
- Hero heading (Krona One): clamp(26px, 3.8vw, 48px), weight 400, letter-spacing -0.025em
- Section title (Krona One): 28px
- Skill name / card title (Krona One): 16–20px
- Body text (Newsreader, Work): 17–18px, line-height 1.72
- Body text (Sora, Fun): 13–15px, weight 400, line-height 1.55
- Section labels (Sora): 11px, weight 500, letter-spacing 0.1em, uppercase
- Tags / metadata (Sora): 10–11px, weight 500
- Nav (Sora): 13px, weight 400

**Why this system works:**
- Krona One and Sora share geometric DNA — they feel like they belong together
- Krona One only has one weight, which forces restraint: it only appears for display headings
- Sora handles everything structural with its full weight range (300–700)
- Newsreader brings editorial warmth to the Work section's long-form narrative
- No monospace fonts — the terminal concept has evolved into something more personal

### Spacing Philosophy

Generous whitespace. Content lives in constrained columns:
- Work section: max-width 1120px, centered
- Fun section: max-width 1160px, centered (slightly wider for gallery grid)
- Section vertical padding: 80px top, 120px bottom (reduced on mobile)
- Between sub-sections: 72px with `<hr class="work-divider">`

### Motion

All animation is CSS-only (keyframes + transitions) with IntersectionObserver for scroll triggers. No JS animation libraries.

**Hero entrance — orchestrated stagger:**
Elements animate in sequence on page load with `cubic-bezier(0.16,1,0.3,1)` spring easing:

| Element | Delay | Animation |
|---------|-------|-----------|
| Radial glow | 0s | Scale 0.5→1 + fade in, then 6s breathing pulse |
| Intro greeting | 0.3s | Fade up (20px) |
| Hero heading | 0.4s | Fade up |
| Intro accent line | 0.5s | Width 0→32px |
| Intro description | 0.6s | Fade up |
| Subtitle | 0.7s | Fade up |
| "explore" link | 0.9s | Fade in |
| Work card | 1.1s | Slide up (32px) + fade |

**Scroll reveals — directional variants:**
`FadeIn.astro` accepts a `direction` prop (`up` | `left` | `right` | `scale`). Used with variety across sections:
- About: `up` (default)
- Experience timeline: `left` with stagger
- Contact: `scale`

**Content grid filter transitions:**
Cards re-animate on filter change via React `filterKey` state — staggered `gridCardIn` at 60ms per card.

**Micro-interactions:**
- `:active` scale(0.97) on all buttons/cards
- Timeline dot: hover scale(1.3) + glow; current dot: 3s breathing pulse
- Bio accordion: subtle background highlight on hover

**Section transition:**
60px gradient pseudo-element on `#work-section::before` blending from `#0F110F` → `#F5F1EB`.

**Accessibility:** `prefers-reduced-motion` disables all hero animations and scroll reveals.

**NO:** Parallax, scroll-jacking, page transition libraries, loading animations.

### Logo / Brand Mark

The site name is typographic — set in Sora (not Krona One) at the top center of the landing page: `tommasobabucci.com`. No graphic mark, no icon, no `~/` prefix. Just the domain in Sora 400 weight, 13px, subtle color.

**Favicon:** "TB" monogram set in Krona One inside a rounded square. Two variants:
- Etruscan Red background, white text (default)
- Dark background, Neon Magenta text (for dark contexts)

### Interactive Islands (React)

Components that need client-side JavaScript:

1. **SkillAccordion.tsx** — Expandable skill list with open/close state
2. **ContentGrid.tsx** — Unified filterable grid for articles + projects, with type and subject tag filters

Both use `client:visible` (hydrate on scroll).

```astro
<!-- On main page -->
<SkillAccordion client:visible skills={skills} />
<ContentGrid client:visible items={contentItems} />
```

Everything else is static Astro components — zero JS shipped to the browser.

### Neon Nostalgia Comic Reader (Not Yet Built)

Planned: The comic will live at `/comics/` using the Fun palette (dark theme). Will need:
- `ComicReader.tsx` — React island with panel-by-panel reading
- `ComicLayout.astro` — Dark theme layout for episode pages
- Episode list + reader pages

---

## Cost Summary

| Item | Annual Cost |
|---|---|
| Domain (.com via Cloudflare) | ~$12 |
| Cloudflare Pages (hosting) | $0 |
| SSL / CDN | $0 (included) |
| **Total** | **~$12/year** |

Everything fits in Cloudflare Pages' free tier. If you later want custom email (`you@tommasobabucci.com`), Cloudflare Email Routing is free for forwarding, or Google Workspace is ~$6/mo for a full inbox.

---

## Page Architecture

### Landing Page (`index.astro`)

The entire site is a single-page experience with anchor navigation. The "Working for Fun" (dark/creative) section comes **first**, prioritized in the user experience.

```
┌─────────────────────────────────────────────┐
│                                             │
│  HERO — Unified dark panel (100vh)          │
│                                             │
│  ┌─ top-left ──────────────────┐            │
│  │ Ciao, Tommaso here.         │            │
│  │ ── (accent line)            │            │
│  │ Learn more about my...      │            │
│  └─────────────────────────────┘            │
│                                             │
│          Working                            │
│          for Fun                            │
│     Articles, projects & experiments        │
│              explore                        │
│                                             │
│               ┌─ bottom-right ─────────┐    │
│               │ Fun at Work         →  │    │
│               │ Experience, skills...  │    │
│               └────────────────────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ═══ WORKING FOR FUN (dark) — FIRST ══════  │
│                                             │
│  "Working for Fun" heading                  │
│  [type + subject tag filters]               │
│  [responsive content card grid]             │
│  [cross-nav: "Fun at Work →"]               │
│                                             │
│  ──── gradient transition (60px) ────────   │
│                                             │
│  ═══ FUN AT WORK (warm) ═════════════════   │
│                                             │
│  [About + Skills: side-by-side on desktop]  │
│  ────                                       │
│  [Experience timeline]                      │
│  ────                                       │
│  [Contact: LinkedIn + email]                │
│                                             │
└─────────────────────────────────────────────┘
```

### Article Pages (`articles/[slug].astro`)

Individual article pages use the **Work palette** (warm/light) with:
- Article title (Krona One, large)
- Tag + date metadata
- Cover image (full-width)
- Rendered markdown body (Newsreader serif, `.article-prose` styles)
- Back link to main page (#fun-section)

---

## SEO & Meta

### Required Meta Tags (BaseLayout.astro)

```html
<title>{pageTitle} — Tommaso Babucci</title>
<meta name="description" content="{description}" />
<meta name="author" content="Tommaso Babucci" />

<!-- Open Graph (works for LinkedIn sharing too) -->
<meta property="og:title" content="{pageTitle}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://tommasobabucci.com" />
```

### Structured Data

Add JSON-LD for Person schema on the homepage for rich search results.

### Sitemap

Auto-generated via `@astrojs/sitemap` integration.

---

## Narrative & Content

### About Text — The Story

The narrative arc: art magazine editor → data scientist → AI strategist. The through-line is that the craft never changed — finding the story, designing the experience, building the audience. Only the medium evolved.

Key beats:
1. Led FORM Magazine at Duke — 120-person team, 1M+ readers, a space for ideas, culture, and aesthetics
2. Economics honors thesis on cannabis taxation and reparations — analytical rigor meets social consciousness
3. OmniShopper — hands-on commerce and advertising, understanding how products reach people
4. USC Marshall MSBA — technical foundation in data science
5. EY — where all of it converges: strategy + narrative + technology + design thinking

### Tone

- **Work section:** Confident, specific, forward-looking. Not corporate. No "driving value" or "leveraging synergies." Write like an essayist, not a brochure.
- **Fun section:** Sharper, more playful, slightly irreverent. "Things I make because I can't not make them."

### What to avoid

- LinkedIn-profile-as-website energy
- Consulting jargon
- Generic stock photo vibes
- Listing responsibilities instead of telling a story

### Contact & Social

Only two channels — keep it clean:
- **LinkedIn:** https://linkedin.com/in/tommasobabucci
- **Email:** tommaso@babucci.com

No Twitter/X, no GitHub, no other socials on the site.

---

## Build Sequence

Progress tracked here — completed steps marked with checkmarks:

1. [x] **Scaffold** — Astro 5 + React + Tailwind 4 + Sitemap
2. [x] **Global styles** — Tailwind 4 `@theme`, dual palette, type utilities, base reset
3. [x] **BaseLayout** — HTML shell, meta tags, Google Fonts, JSON-LD Person schema
4. [x] **Hero** — Unified dark panel with staggered entrance animations
5. [x] **Work section** — About + Skills (side-by-side) → Experience → Contact
6. [x] **Fun section** — ContentGrid with type + subject tag filters
7. [x] **Content collections** — Schemas + 4 articles migrated with frontmatter
8. [x] **Article pages** — Dynamic routes with ArticleLayout
9. [x] **Polish** — Hero animations, directional scroll reveals, micro-interactions, section gradient
10. [ ] **Comic system** — ComicReader island, episode pages (needs comic panel assets)
11. [ ] **OG image** — Create 1200x630px social sharing image
12. [ ] **Deploy** — Initialize git, push to GitHub, connect Cloudflare Pages

---

## Responsive Behavior

- **Desktop (>1024px):** Full-viewport unified dark hero, About+Skills side-by-side grid (`lg:grid-cols-[1.15fr_1fr]`)
- **Tablet (768–1024px):** Hero intro/card repositioned (smaller padding/fonts), content single-column
- **Mobile (<768px):** Hero intro compressed (16px greeting, 240px max-width), work card spans full width, single-column throughout, reduced section padding

---

## Performance Targets

- **Lighthouse:** 95+ on all four metrics
- **First Contentful Paint:** < 1s
- **Total JS shipped:** Minimal (only two React islands: SkillAccordion + ContentGrid)
- **Font loading:** Use `font-display: swap`, preload critical fonts

---

## Assets Status

- [x] Domain registered on Cloudflare (tommasobabucci.com)
- [x] Headshot photo (`public/images/headshot.jpg`)
- [x] Articles converted to markdown with frontmatter (4 articles in `src/content/articles/`)
- [x] Article cover images (`public/images/articles/01.png` – `04.png`)
- [x] Favicon (`public/favicon.svg` + `public/favicon.ico`)
- [ ] OG image (1200x630px) for social sharing — needed at `public/og-image.png`
- [ ] Neon Nostalgia comic panels — needed for comic system
