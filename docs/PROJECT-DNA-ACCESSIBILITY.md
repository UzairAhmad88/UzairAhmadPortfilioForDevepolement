# PROJECT DNA ACCESSIBILITY & INCLUSION SPECIFICATION (PHASE 06)
## Semantic Structure, Screen-Reader Compatibility & Focus Management

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Status:** Active / Production Specification  
> **Phase:** 06 — Project DNA  

---

## 1. ACCESSIBILITY OBJECTIVES & WCAG 2.1 AA COMPLIANCE

Project DNA is engineered to satisfy strict accessibility standards:
- **WCAG 2.1 Level AA Contrast:** All text elements exceed the minimum 4.5:1 contrast ratio against the deep sage backgrounds.
- **Semantic HTML5:** Native lists (`<ul>`, `<li>`), definition terms (`<dl>`, `<dt>`, `<dd>`), and headings (`<h3>`) are utilized instead of unsemantic `<div>` soup.
- **Zero Color-Only Signaling:** Status states include explicit text labels (e.g. `Active Research`, `Academic FYP`, `Completed`) alongside color tokens and status dots.

---

## 2. KEY ACCESSIBILITY IMPLEMENTATIONS

### A. ARIA Landmarks & Labels
- Detail DNA container includes `aria-label="Project Technical Specification & DNA"`.
- Technology pill lists include `aria-label="Technologies and runtime components"`.
- Evidence artifact blocks include `aria-label="Verifiable project artifacts"`.
- Decorative arrow symbols (`↗`, `→`) are flagged with `aria-hidden="true"` so screen readers announce only the link text (e.g. "GitHub Repository", "Launch Live Demo").

### B. External Link Security & Navigation Semantics
- External links (e.g. GitHub, Vercel) include `target="_blank"` and `rel="noopener noreferrer"`.
- Internal case study links (e.g. `/work/[slug]`) use direct semantic anchors without opening unnecessary tabs.

### C. Keyboard Navigation & Focus Visible
- All interactive evidence pills and action links feature high-contrast `2px` focus rings (`var(--color-accent, #7ed8c4)`) with `outline-offset: 2px`.
- Minimum touch target size adheres to mobile accessibility standards (`min-height: 44px` or equivalent inline touch targets with generous padding).

### D. Motion Preference Accommodation
```css
@media (prefers-reduced-motion: reduce) {
  .project-card,
  .evidence-pill,
  .status-indicator {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }
}
```
