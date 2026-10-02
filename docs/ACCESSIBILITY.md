# Accessibility (a11y) Foundation

## 1. Accessibility Philosophy
Accessibility is an engineering baseline. The codebase is architected to adhere to WCAG 2.1 AA standards without compromising the dark, technical design aesthetic.

---

## 2. Core Foundations Implemented

### 1. Semantic Elements
- Replaced non-semantic clickable divs with native `<button>` and `<a>` elements.
- Semantic HTML landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.

### 2. Skip to Main Content
- Implemented accessible `.skip-link` in `BaseLayout.astro` for keyboard screen-reader users to bypass repetitive header navigation directly to `#top`.

### 3. Keyboard Navigation & Focus Indicators
- Visible focus rings (`:focus-visible`) across all interactive buttons, cards, and links.
- Interactive capability cards are keyboard-focusable with `tabindex="0"`.

### 4. Reduced Motion Support
- Full `@media (prefers-reduced-motion: reduce)` support in `src/styles/global.css`.
- Three.js WebGL canvas and marquee animations are automatically disabled or sanitized when reduced motion is requested.

### 5. ARIA & Labels
- Icon-only links (WhatsApp floating button, Email, GitHub) feature explicit, descriptive `aria-label` tags.
- Non-text decorative SVGs and canvas backgrounds are marked with `aria-hidden="true"`.

### 6. Heading Hierarchy
- Single `<h1>` in the Hero section.
- Standardized `<h2>` for major sections and `<h3>` for cards and subsections.

---

## 3. Recommended Audit Tools for Future Phases
- Google Lighthouse Accessibility Audit (target: 100/100)
- Axe DevTools Chrome Extension
- Screen reader testing via NVDA / VoiceOver
