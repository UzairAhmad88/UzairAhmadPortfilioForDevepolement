# Engineering Notes — Visual Specification & Design Language

**Uzair Ahmad — Personal Engineering & Research Platform**  
**Phase 11 Specification**

---

## 1. Editorial Aesthetic & Design Philosophy

The Engineering Notes UI follows the portfolio's **Phase 02 Visual Identity**:
- **Palette:** Deep Obsidian dark mode (`#0b0d10`, `#12161c`), elevated slate panels (`#181d26`), subtle indigo/blue accents (`#6366f1`, `#38bdf8`), high-contrast text tokens (`#f8fafc` primary, `#94a3b8` secondary).
- **Typography:** Modern clean sans for headings/body (`Inter`, system UI fallback), monospaced type for technical metadata, tags, dates, and code (`JetBrains Mono`, `Fira Code`, system monospace).
- **Line Length & Measure:** Maximum prose width bounded to `65ch` (`max-w-4xl` container) ensuring optimal typographic readability across viewport sizes up to 4K displays.

---

## 2. Component Specifications

### 2.1 Engineering Note Card (`EngineeringNoteCard.astro`)
- **Container:** Rounded rectangular card (`rounded-xl`), subtle border (`border-slate-800`), hover transition with subtle elevation and border highlight (`hover:border-indigo-500/40 hover:-translate-y-0.5`).
- **Header:**
  - Note type badge with color-coded classification (`Technical`, `Debugging`, `Architecture`, `Decision`, `UX`, etc.).
  - Deterministic reading time indicator (`4 min read`) with clock icon.
- **Title:** Bold heading (`text-xl font-bold text-slate-100 group-hover:text-indigo-400`).
- **Summary:** Concise multi-line description clamped to 3 lines.
- **Footer:** Topic label (`Quant`, `Backend`, etc.), canonical technology pills, and published date.

### 2.2 Notes Index Page (`/notes`)
- **Hero Section:** Clear editorial statement framing the notes as a public engineering notebook.
- **Filter Controls:** Horizontal scrollable/wrap pill bar allowing instant topic filtering (`All`, `Backend`, `Quant`, `AI / ML`, `Database`, `Architecture`, `UX`).
- **Philosophy Banner:** Minimalist callout reinforcing the zero-fluff, empirical engineering mandate.
- **Notes Grid:** 2-column responsive layout on desktop (`md:grid-cols-2`), 1-column on mobile.

### 2.3 Note Detail Page (`/notes/[slug]`)
- **Metadata Header:** Breadcrumbs (`← Back to Notes`), note type badge, reading time, published/updated dates, and technology pills.
- **Title & Problem Statement:** High-impact heading followed by an executive summary callout.
- **Structured Sections:**
  - `01 — Context & Problem Statement`
  - `02 — Investigation & Root Cause` (with highlighted stack trace blocks for debugging notes)
  - `03 — Implementation & Solution` (with syntax-highlighted code blocks, line wrapping protection, and copy triggers)
- **Trade-Offs & Lessons Learned Callouts:** Elevated dark panels with checkmark/alert icons highlighting durable takeaways.
- **Cross-System Evidence Grid:** Dynamic cards linking directly to related Projects (`/projects/[slug]`), Research Inquiries (`/research/[slug]`), and Technologies (`/technology/[slug]`).

---

## 3. Responsive & Accessibility Matrix

- **Mobile Viewports (320px – 430px):**
  - Zero horizontal page overflow (`overflow-x: hidden` on viewport, `overflow-x: auto` on code blocks).
  - Touch-friendly filter pill targets (minimum 44px tap height).
  - Adaptive font scaling from `text-3xl` down to `text-2xl` on narrow screens.
- **Accessibility (WCAG 2.1 AA):**
  - High contrast text ratios (> 7:1 for body, > 4.5:1 for accents).
  - Semantic HTML elements (`<article>`, `<header>`, `<section>`, `<aside>`, `<nav>`).
  - Screen-reader accessible ARIA roles and labels for interactive filters.
  - Reduced-motion support respecting `prefers-reduced-motion: reduce`.
