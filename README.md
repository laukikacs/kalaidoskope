# Handoff: Kalaidoskope Website

## Overview
Marketing website for **Kalaidoskope**, built by the leadership of Laukika Consultancy Solutions. Kalaidoskope has three businesses:

- **Academy (Train):** a 4-month, practitioner-led marketing programme in Mysore. First batch starts 15 Nov 2026, with 20 seats, weekend classes, a hands-on month on Laukika brands and 100% placement assistance.
- **Talent (Place):** marketers screening marketers. Candidates are screened and interviewed for real ability, and only those who match the job description (JD) are shortlisted.
- **Enterprise AI Tools (Automate):** custom AI tools for marketing teams, covering reporting, follow-ups, campaign task trees and drips. Every tool starts with a workflow review by Laukika experts.

The site has 6 routes: Home, Academy, Talent, Enterprise AI Tools, About and Contact. Most pages are designed to capture leads through enquiry forms, sticky call-to-action (CTA) buttons and calculators.

## About the Design Files
The files in this bundle are **design references created in HTML**: React prototypes, run with in-browser Babel, that show the intended look, copy and behaviour. They are **not production code to ship as-is**. Recreate them in the target codebase's environment, using its established patterns.

If no codebase exists yet, the recommended stack is **Next.js (App Router) + TypeScript + CSS Modules or Tailwind**, with Framer Motion or plain CSS for animation. Each route should be a real URL (`/academy`, `/talent`, and so on); the prototype uses hash routing instead (`#/academy`).

Open `Kalaidoskope Website.html` in a browser to see the live reference. Toolbar "Tweaks", if available, exposes the theme, hero and serif options that were explored. The production build should keep only the defaults listed below.

## Fidelity
**High-fidelity.** Colours, typography, spacing, copy and interactions are final, apart from the items marked as placeholders in the "Open content items" section. Recreate the UI pixel-close.

---

## Design Tokens

### Brand colours (from the brand guidelines PDF)
| Token | Hex | Use |
|---|---|---|
| `--k-blue` (Kalaidoskope Blue) | `#2E3192` | Primary, headings, primary buttons |
| `--k-gold` (Kalaidoskope Gold) | `#CC9939` | **Reserved for AI and the master brand.** Accents on Home, About and Enterprise only |
| `--k-indigo` (Moonlight Indigo) | `#181A53` | Footer, dark bands, Talent ground |
| `--k-peri` (Periwinkle) | `#6B72C6` | Secondary accent, and the accent on Academy and Talent |
| `--k-mist` (Mist) | `#E5E6F9` | Light tints, Academy ground |

### Laukika palette
Laukika's colours are used **only** in two places: the Laukika logo itself, and the parts of the page about the Month-4 hands-on work and "Our story" chapter 1. Do not use them elsewhere.

`#79A342` green · `#265CAB` blue · `#00A99D` teal · `#403F99` indigo · `#F04D2B` orange

### Per-page themes
Each page sets `data-theme` on `<html>`, which swaps the CSS variables below.

| Page | Theme | `--bg` | `--bg-alt` | `--surface` | `--ink` | `--head` | `--accent` |
|---|---|---|---|---|---|---|---|
| Home, About, Contact | light | `#FFFFFF` | `#F5F5FC` | `#FFFFFF` | `#16173F` | `#2E3192` | `#CC9939` |
| Academy | mist (+ no-gold) | `#EFF0FA` | `#FFFFFF` | `#FFFFFF` | `#16173F` | `#2E3192` | `#4F56B8` |
| Talent | indigo (+ no-gold) | `#14164A` | `#1A1D5C` | `#1F2266` | `#EDEEFB` | `#FFFFFF` | `#A3A8E8` |
| Enterprise AI | gold | `#F7EFDD` | `#EFE2C4` | `#FFFBF2` | `#1E1B3A` | `#181A53` | `#A97A22` |

Supporting variables:
- Light: `--ink-soft #4A4C78`, `--ink-faint #8A8CB0`, `--line rgba(46,49,146,.14)`, `--line-strong rgba(46,49,146,.32)`.
- Indigo: `--ink-soft #B9BCE8`, `--ink-faint #7E82C4`, lines `rgba(229,230,249,.14/.30)`.
- Gold: lines `rgba(120,88,30,.18/.34)`.

Gold rules:
- On Academy and Talent ("no-gold"), gold content accents become periwinkle. Gold survives only at the edges: the "ai" in the logo, a 3px gold gradient line fixed to the top of the viewport, eyebrow dashes and footer accents.
- On Enterprise, the primary button is indigo `#181A53` with white text, and the top line turns indigo.

### Typography
- **Serif (headlines):** the brand face is *Timeless* (commercial). Web stand-in: **Source Serif 4** (400/700). Alternatives explored: Libre Caslon Text, IBM Plex Serif. If the client licenses Timeless, swap it in.
- **Sans (body/UI):** **IBM Plex Sans** 400/500/700.
- **Mono (labels, numbers):** **IBM Plex Mono** 400/500.
- **Laukika-specific:** Space Grotesk. Loaded, but no longer used after a revert.

| Style | Size | Line-height | Notes |
|---|---|---|---|
| `.display` | `clamp(44px, 6.6vw, 96px)` | 1.02 | letter-spacing −0.025em |
| `.h2` | `clamp(34px, 4.4vw, 60px)` | 1.06 | −0.02em |
| `.h3` | `clamp(24px, 2.2vw, 32px)` | 1.15 | |
| `.h4` | 21px | 1.25 | |
| `.lede` | `clamp(18px, 1.45vw, 21px)` | 1.6 | `--ink-soft`, max 60ch |
| body | 17px (16px under 620px) | 1.6 | |
| `.eyebrow` | 12.5px / 500 / UPPERCASE / 0.18em | — | accent colour with a 28px line before it |
| `.num` | Mono 12.5px / 0.06em | — | accent colour |

**Signature two-line title (`.duo`):** line 1 is regular weight in the accent colour; line 2 is **bold** in the head colour. Example: *Train marketers.* / **Place talent. Automate the busywork.** Every title animates in line by line through a mask: each line slides up from `translateY(105%)` over 1.1s with a 0.09s stagger.

### Spacing, radius and shadow
- Content wrap: max-width 1240px; gutter `clamp(20px, 4vw, 56px)`.
- Section padding: `clamp(80px, 11vw, 160px)` vertical (tight sections use `clamp(56px, 7vw, 100px)`).
- Radius: cards 6–14px; buttons and pills 999px; arch images `999px 999px 6px 6px`.
- Buttons: height 52px (44px in the nav), padding `0 26px`, 15px/500.
- Shadows: cards `0 40px 80px -50px rgba(24,26,83,.45)`; hero CTA `0 18px 40px -14px rgba(204,153,57,.7)`.
- Easing everywhere: `cubic-bezier(.2,.7,.1,1)`.

### Brand graphic language
- **Four-point concave star** (the logo's directional form), built procedurally. For radius r and pinch p, k = r·p:

  `M0,-r C0,-k k,0 r,0 C k,0 0,k 0,r C0,k -k,0 -r,0 C-k,0 0,-k 0,-r Z`

- **Arcs:** 6–9 nested stars as hairline strokes (blue, with 1–2 gold rings), cropped off the page edge and rotating slowly with scroll (about 0.03°/px).
- **Triad:** three triangles (the logo's core) that spread apart and converge.
- **Star pattern:** outlined stars on a 64px grid with gold dots at the corners, at 18% opacity on blue bands.
- **Living kaleidoscope** (homepage hero and Enterprise hero): 12 mirrored wedges of drifting triangle shards in brand colours. They rotate slowly and react to the cursor.

---

## Global Components

**Nav** (fixed)
- Logo on the left. Links: **Home · Academy · Talent · Enterprise AI Tools · About**. Search icon, plus a "Talk to us →" primary button.
- Height 84px, shrinking to 70px on scroll, when it gains a blurred translucent background and a bottom hairline.
- Underline animates in on hover; the active link stays underlined.
- Under 1020px: a burger opens a full-screen sheet of serif 38px links.

**Footer** (`#181A53`)
- Logo and a short description, an email capture with a gold "Join" button, three link columns, a giant "LEARN · BUILD · AUTOMATE" line (gold dots) and the © line.

**Page hero (inner pages)**
- Breadcrumb, sub-brand lockup (full logo + **Academy** / **Talent**, plus "by [Laukika logo]"), `.duo` display title, lede and CTAs.
- Rotating arcs top-right.

**Reveal on scroll**
- `.rv` elements fade and rise 28px over 1s, staggered by 0.08s steps, triggered by IntersectionObserver.
- Include a fallback that reveals anything in the first viewport after 1.4s.

**FAQ accordion**
- Numbered serif questions with a +/− icon. The panel expands through a grid-rows transition.

**Enquiry forms**
- Card on `--surface` with underline-style inputs and segmented pill selectors. The submit button is full-width.
- Submitting shows a "Thank you…" state.
- **No backend exists.** Wire the forms to the CRM, WhatsApp or email endpoint the client chooses.

**Sticky CTA pill**
- Appears at the bottom-centre after the user scrolls about 1100px on Academy and Talent.
- Indigo pill with a short message and a button.

---

## Screens

### 1. Home (`/`), light theme, the full brand palette
1. **Hero (Kaleidoscope variant, the default).**
   - Two columns: copy on the left, `<Kaleidoscope>` on the right.
   - Eyebrow: "Academy · Talent · Enterprise AI Tools".
   - Title: *Train marketers.* / **Place talent. Automate the busywork.**
   - Sub: "Built by the leadership of Laukika. We train industry-ready marketers, place marketers who can think, and build custom AI tools that give marketing teams their week back."
   - CTAs: "Explore what we do" (smooth-scrolls to #what) and "Talk to us".
   - Below: 3 "doors" linking to the three businesses (We train / We place / We automate).
2. **The gap.** "Marketing has a thinking gap. / It shows up three ways."
   - SVG circle diagram: centre reads "ROOT CAUSE / Missing marketing logic"; 3 nodes for Learners, Businesses and Marketing teams, joined by spokes.
   - Tabs auto-cycle every 3.8s and stop when the user interacts. Each symptom links to its fix.
3. **What we do** (scroll story). "One root cause. / Three ways we fix it."
   - A sticky SVG on the left: a star whose triangles separate into Train / Place / Automate and converge at the end.
   - Steps on the right: Academy, Talent, Enterprise, each with chips and a link.
4. **Laukika band.** Laukika logo, a paragraph and 3 stats (100+ brands; categories; Mysore + Bangalore).
5. **Find your path.** 4 personas on the left (student, entrepreneur, hiring marketers, runs a marketing team). A blue card on the right shows the matching need, 3 points and a CTA.
6. **Approach band** (blue, compact).
   - "AI first starts with / **marketing thinking.**" in two columns.
   - Triad below: Train (Thinking before tools), Place (Reasoning over resumes), Automate (Your process, not a template).
7. **Open now (the hook)**, on an indigo ground.
   - Pill: "Enquiries open · First batch in the palace city of Mysore".
   - Title: "India's first / **practitioner-led** (gold) / marketing programme."
   - **Live countdown to 2026-11-15 09:30 IST**, in days/hrs/min/sec.
   - A card with a gold gradient border: seats bar (13 of 20 left, a placeholder), 4 highlights and a large gold pill CTA, "Reserve your seat →", with an animated shine. Secondary links to Talent and Enterprise.
8. **FAQ** (6 questions), then **Closing**: "Train. Place. Automate. / Start where you are."

### 2. Academy (`/academy`), mist theme, no gold
1. **Hero.**
   - Left: breadcrumb, sub-brand lockup, badge "India's first practitioner-led programme · Mysore batch starts 15 November", title *Those who do,* / **now teach.**, a line about the Laukika leadership, a lede, "Enquire now" (scrolls to the form) and "Download Brochure". Below: a "Taught by the leadership of [Laukika]" lockup.
   - Right: **enquiry form** with name, phone/WhatsApp, email and "I am a…" segments. A seat bar sits on top.
   - 8-cell highlight grid below.
2. **Why this programme exists.** Laukika logo, 2 paragraphs and 3 pillars.
3. **What you'll learn.** 3 cards, each with a **technical SVG diagram**:
   - FIG.01 Customer decision (inputs flowing into the decision node; P(buy)=σ(…); a sigmoid curve).
   - FIG.02 When an ad is served (impression→click→visit→lead→sale funnel bars, a moving dot, CTR/CPA formulas).
   - FIG.03 Dashboard (live-ticking ROAS/CTR/CPA, a line chart that redraws, a scan line, animated bars).
   - All diagrams use `preserveAspectRatio="xMidYMid meet"` in 4:5 frames.
4. **Follow the customer, stage by stage.** 5 clickable nodes (Awareness, Consideration, Purchase, Loyalty, Hands-on) that auto-advance every 3.8s. **Only the Hands-on node uses a Laukika gradient.**
5. **Month 04 hands-on band** (blue): white Laukika logo and a Laukika colour strip along the top. This is the only Laukika-coloured band on the page.
6. **Who** (3 audience cards), **Curriculum** (6-row accordion with chip lists).
7. **Skills.** A two-column list of 10 skills with icons on the left. A blue stage on the right shows a large icon, title and description, auto-cycling every 3.2s and pausing on hover.
8. **What makes MAP different.** "Most courses teach buttons. / MAP teaches the system."
   - A toggle switches between "Typical marketing course" (tool pills scattered and rotated) and "The MAP way" (6 blue core cards Business→…→Execution, with tool pills fanning out beneath Execution).
   - It switches automatically 1.6s after scrolling into view. Comparison rows below strike through the "typical" column.
9. **Certificate.** A straight A4-landscape certificate with a gold inner border.
   - Text: "Trained at Kalaidoskope · Honed at Laukika", plus "Hands-on experience working on [Brand A] · [Brand B]".
   - Signature lines for Kalaidoskope and Laukika.
10. **Placement band** (blue): a count-up to **100%** (240px serif) and a 3-step vertical path (Learning → Preparation → Opportunity), plus a CTA.
11. **Meet the trainers** (real content, data in `team.jsx`).
    - Header: eyebrow "Meet the trainers", `.duo` title *Learn from people who* / **practise and teach.**, and a lede on the right.
    - `.tr-grid`: 2 columns, 24px gap (1 column at ≤1020px). An odd last card is centred at half width.
    - Each `.tr-card`: a portrait (blue studio backdrop, 2:3 photo, cropped to the card's frame); a mono role label; a serif name (`.h3`); the org; an **italic serif quote** (`.tr-quote`); a 15px bio; "Teaches" chips; and a LinkedIn link.
    - Order, by experience (keep this rule for new people): Abhijith → Purnima → Santhosh → Tarun → Srivas → Devu.
    - **"Where we also teach" band** (`.tch-band`), 100px below the grid.
      - Layout: a 2-column grid (1.3fr / 1fr), padding 44px 48px, 1px `--line` border, radius 20px, on `--surface`. Stacks to 1 column with padding 32px 24px at ≤820px.
      - Left: eyebrow "Where we also teach"; h3 "Teaching MBA students at Amrita Vishwa Vidyapeetham."; the copy; and "Taught by **Abhijith Shyandilya** and **Santhosh Chandramurthy**".
      - Right: the Amrita logo on a white tile (radius 14px, padding 28px 32px, logo max-width 380px).
      - The copy deliberately positions the Kalaidoskope programme as **more advanced** than the university course. Do not claim they are the same.
    - The old "What our learners say" testimonials were **removed**, because this is the first batch. Add them back only with real, verified quotes.
12. **Mysore section:** an embedded Google Map of Laukika Mysore, "Classes held at Laukika, Mysore" and a "Get directions" link. The programme details list includes the row "Marketing science".
13. **FAQ**, a **final enquiry form** and the **sticky CTA**.

### 3. Talent (`/talent`), indigo theme, no gold
1. **Hero.** Title *Resumes say they do everything.* / **We check if they can think.**
   - Right: **hiring brief form** with role pills (Copywriter/Content, Graphic designer, Performance/Paid, Social media, SEO, Brand/Marketing manager, Marketing head, Other) and engagement type (Permanent/Contract/Freelance).
   - 4-cell highlight strip below.
2. **Scenario: a real estate company building its marketing team.**
   - 4 role cards that switch from "?" to "✓".
   - Toggle: "Hiring on their own" (red `#C2410C`) vs "With Kalaidoskope" (blue).
   - A 5-step stepper that auto-advances, with a risk meter. Two bullet columns show what goes wrong at each step and how Kalaidoskope handles it.
3. **Screening funnel (`#screen`).** "120 applications in. / The right few out."
   - A 15×8 dot grid that narrows 120→36→12→4 as the steps change. The final 4 dots are highlighted.
4. **Roles reality.** "The portfolio looks great. / Then they join."
   - A role list on the left: Copywriter, Graphic designer, Performance marketer, Social media manager, SEO specialist, Brand manager.
   - A 3D flip card: the front shows the interview view; the back (rotateY 180) shows what happens after joining. Below it, "How Kalaidoskope catches it".
   - Then "Why this is a big problem" (4 points) and a solution box.
5. **Resume test.** Role tabs: Copywriter, Graphic Designer, Digital Marketing Executive, Social Media Manager, Brand Manager.
   - Each role shows 4 ticked claims. "Ask why?" turns each claim into a probing question.
6. **Interview simulator.** 3 questions with two candidate answers each. Picking one shows a verdict (green or orange); at the end, a score screen with a CTA.
7. **Iceberg** (sticky, 260vh).
   - The waterline sits at 66vh. Tool chips bob on the tip; 5 "what we really check" items appear one by one below the water as the user scrolls.
   - Keep the chips clear of the headline.
8. **JD match ring.** Toggle 5 checks; an SVG ring fills to 100% and reads "shortlisted".
9. **Wrong-hire cost calculator.** Sliders for salary, months and ad budget, with a ₹ output and breakdown bars.
10. **FAQ** (11 questions), a **final form** and the **sticky CTA**.

### 4. Enterprise AI Tools (`/enterprise`), gold theme
1. **Hero.** Pill "Custom AI tools for marketing teams". Title *Your team works its own way.* / **Your tools should too.**
   - CTAs: "Book a workflow review" and "Estimate your savings". Kaleidoscope on the right.
2. **Week planner.** A Mon–Fri × 9am–5pm calendar of colour-coded blocks:
   - Reporting `#C2410C`, Following up `#D97706`, Task tracking `#9333EA`, Briefs & docs `#0E7490`, Strategy `#2E3192`.
   - The toggle "With your custom tool" shrinks the admin blocks to 30% height and turns them gold "⚡ automated", and the hours counters update.
   - The toggle fires automatically 2.2s after the planner enters view.
3. **Flat list vs task tree.** A messy flat to-do list beside a collapsible campaign tree (parent, child and grandchild tasks, drip and auto pills).
4. **How we build** (indigo band): Review → Design → Build → Refine, with a "Workflow review by [Laukika]" lockup.
5. **Capability demos.** "Pick what to automate. / Watch it work."
   - Left: 6 capabilities, each with a "+" pick toggle and hours per week. The total updates as items are picked.
   - Right: a dark "app window" that plays a looping live demo for the hovered capability: auto-report, follow-up chat, task tree build, drip timeline, brief typing, alerts feed.
6. **Savings calculator** (team size, hours, ₹/hour, showing hours back and ₹ per month) and a **workflow review form**.

### 5. About (`/about`), light theme
1. **Hero.** *One view of marketing.* / **Every perspective that matters.** 3 lens chips (Learner, Employer, Team) auto-cycle. Kaleidoscope on the right.
2. **Our story** (sticky, 380vh). A heading with a 4-segment progress rail that is clickable and fills in gold.
   - Each chapter shows a visual card on the left and chapter copy plus a large stat on the right.
   - Ch1 *The practice*: soft Laukika tint; 100 dots in muted Laukika colours, category chips, Mysore/Bangalore pins.
   - Ch2 *The pattern*: 3 symptom rows flipping ✓ to ?, plus a root-cause box.
   - Ch3 *The idea*: rotating stars and a converging triad.
   - Ch4 *Today*: the logo hub and 3 business cards with live status.
3. **Family.** 3 cards in each business's colour: Academy `#E5E6F9`, Talent `#14164A`, Enterprise `#F1E2BF`.
4. **Beliefs** (blue band): 4 hoverable beliefs, with the large text updating.
5. **Mission and Vision** cards, each with a small animated visual (Learn→Practise→Place nodes; admin vs value bars).
6. **Founder: Abhijith Shyandilya.**
   - Portrait (`assets/founder/abhijith-option-c.png`) in an arch with a gold ring and a logo badge.
   - Name; title "Founder, Kalaidoskope · CEO & MD, Laukika"; "Taught at SJCE, Mysore · Amrita Vishwa Vidyapeetham"; education; a LinkedIn button (`#0A66C2`).
   - Approved quote. Stats: 13+ years · ₹200 Cr+ ad investment led at Amazon · 50+ person teams · 140%+ YoY growth.
   - "Four sides" tabs (Practitioner, Hirer, Teacher, Builder), each with "→ became …".
   - **Brands accelerated:** 2 infinite marquee rows (38s/44s, opposite directions, paused on hover). Row 1: Zee5, Mondelez, Mamaearth, Tata Consumer (TCPL), Probe42, Blenders Pride, Lifestyle, BPL. Row 2: Assetz Property, Bhartiya City, Coolpad, UMBRO, Smartron, Zopo Mobile, DropKaffe, Covo.
7. **Powered by Laukika** (Kalaidoskope palette), **The people behind Kalaidoskope** and **Closing**.
   - The people section is `TeamGrid` in `team.jsx`, using the same data as the trainers minus the founder.
   - Grid: 4 columns (`.ab-team`), dropping to 2 columns at ≤1020px.
   - Each card: an arch-cropped portrait, a business tag, the name, the role, a one-line summary and a LinkedIn icon.
   - When there are fewer than 4 people, empty "Profile coming soon" slots fill the row.

### 6. Contact (`/contact`)
Title *Start a* / **conversation.** A form with topic chips (Academy, Talent, Enterprise AI Tools, Something else). The third field changes with the topic chosen.

---

## Interactions & Behaviour (summary)
- **Routing:** the prototype uses a hash router and saves the current route to localStorage. In production, use real routes and scroll to the top on navigation.
- **Auto-cycling components pause on user interaction:** gap tabs, stage journey, skills, scenario stepper, funnel, lens chips.
- **Sticky scroll sections** use section progress, where p = −rect.top / (height − viewport height):
  - Home "What we do"
  - Talent Iceberg
  - About Story
- **Countdown:** a 1s interval, targeting `2026-11-15T09:30:00+05:30`.
- **Reduced motion:** the kaleidoscope already stops under `prefers-reduced-motion`. Extend this to marquees, loops and auto-cycling.
- **Responsive (≤1020px):** all 2-column splits stack; the nav switches to the burger; grids drop to 2 columns, then 1 column at ≤620px; the role list becomes horizontal pills; the sticky CTA collapses to just its button.

## State Management
All state is local UI state. Nothing needs to be fetched except the form submissions. Needed:
- Route
- Per-page theme (`data-theme`, `data-page`, `data-nogold`)
- Form values and submitted flags
- Toggles, tabs and auto-cycle indices
- Calculator slider values
- Scroll progress

## Assets
| File | Notes |
|---|---|
| `assets/logo-full.png`, `logo-full-white.png` | Kalaidoskope lockup, extracted from the brand PDF (vector source is in the PDF; ask the client for master SVGs) |
| `assets/logo-mark.png`, `logo-mark-white.png` | Star mark (favicon, badges) |
| `assets/laukika/laukika-logo.png`, `laukika-logo-02.png` (white), `laukika-icon.png` | Taken from laukika.com. **Low resolution; request SVGs** |
| `assets/founder/abhijith-option-c.png` | AI-enhanced founder portrait, approved by the client |
| `assets/team/purnima-kalia-studio.png`, `santhosh-c-pressed.png`, `tarun-rao-pressed.png`, `srivas-sc-pressed.png`, `devu-lokesh-pressed.png` | Trainer portraits. AI-retouched from the team's own photos into a consistent studio style: Kalaidoskope-blue backdrop, gold rim light, subject centred, shirts pressed. About 1200×1900 PNGs; **compress to WebP/AVIF (~1000px tall) for production** |
| `assets/partners/amrita-logo.png` | Official Amrita Vishwa Vidyapeetham logo, from amrita.edu/branding. **Use only with the university's written permission** |
| Google Maps embed | Laukika Mysore office, iframe URL in `academy-extras.jsx` (`MysoreMap`) |
| Image placeholders (striped boxes) | Home "who" and case images. Real photography still needed |

## Open content items (placeholders)
- Batch start time (09:30 IST is assumed) and the seats-left count (13/20 is a placeholder)
- Certificate brand names [Brand A] and [Brand B]
- The trainer quotes for Abhijith, Santhosh, Srivas, Purnima and Devu are drafts that each person still needs to approve (Tarun's is his own). Purnima's Laukika job title also needs confirming
- Permission to use the Amrita logo, and the exact wording for the engagement (campus, programme)
- Whether to keep "11 years of teaching experience" on Academy
- Form destinations (CRM, WhatsApp or email) and the brochure PDF
- The claim "India's first", which the client must confirm they can stand behind
- Tool logos for the Academy "Tools & technologies" section (not yet designed)

## Files
| File | Contents |
|---|---|
| `Kalaidoskope Website.html` | Entry point: router, per-page theme logic, Tweaks defaults |
| `site.css` | All tokens, themes and component styles |
| `components.jsx` | Geometry helpers (starPath, triPts), Arcs, Triad, StarPattern, Kaleidoscope, Laukika lockups, Nav, Footer, PageHero, Faq, reveal hooks |
| `home.jsx` + `home2.jsx` | Homepage (home2 holds the current narrative and overrides HomePage) |
| `academy.jsx` + `academy-extras.jsx` | Academy page, diagrams, skills, MAP comparison, certificate, placement, map |
| `talent.jsx`, `talent-scenario.jsx`, `talent-interactive.jsx`, `talent-roles.jsx` | Talent page and its interactive sections |
| `enterprise.jsx` + `enterprise-demos.jsx` | Enterprise page, week planner, capability demos |
| `about.jsx` | About page |
| `team.jsx` | `TEAM` data array (single source of truth for trainers and the About team), `TrainersGrid`, `TeamGrid`, `LinkedInIcon` |
| `pages.jsx` | Contact page |
| `tweaks_panel.jsx` | Prototype-only tweak panel. **Do not port** |
| `reference/BRAND-NOTES.md` | Summary of the brand guidelines |
| `reference/content/*.md` | Original page copy from the client's content team |
