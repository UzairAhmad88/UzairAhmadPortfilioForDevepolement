# Project Archive System — Accessibility & UX Specification

## 1. Compliance Target

The Project Archive System is designed in alignment with **WCAG 2.2 Level AA** standards, ensuring all historical records, interactive filters, and evolutionary links are accessible to all users.

---

## 2. Core Accessibility Implementations

### 2.1 Non-Color Dependent Status Indicators
Archive states (`SUPERSEDED`, `LEGACY`, `ARCHIVED`, `PAUSED`) use distinct textual labels, uppercase monospace typography, and bordered pill containers. State is never communicated solely through color hue.

### 2.2 Keyboard Navigation & Focus Management
- Interactive filter pills on `/archive` are native HTML `<button>` elements with clear `:focus-visible` outlines matching the design token `--accent-primary`.
- Arrow keys and Tab navigate seamlessly through archive cards and evolution links.
- ARIA pressed states (`aria-pressed="true|false"`) and `aria-live="polite"` result counters inform screen readers when filter criteria change.

### 2.3 Semantic Hierarchy & Landmarks
```
<main id="main-content">
  <header>
    <h1>Engineering Archive & Historical Systems</h1>
    <p>Subheading / Philosophy</p>
  </header>
  <section aria-label="Archive metrics">...</section>
  <nav aria-label="Filter archive by state">...</nav>
  <section aria-label="Historical projects catalog">
    <h2>All Historical Work (4)</h2>
    <div class="archive-grid">
      <article aria-labelledby="proj-title-1">
        <h3 id="proj-title-1">...</h3>
        ...
      </article>
    </div>
  </section>
</main>
```

### 2.4 Contrast & Motion
- All text meets a minimum contrast ratio of `4.5:1` against dark backgrounds (`#0a0a0a` / `#121212`).
- Badges utilize a minimum contrast ratio of `7:1` for normal text and `4.5:1` for muted subtitles.
- All filter transitions and card fades respect `@media (prefers-reduced-motion: reduce)`.
