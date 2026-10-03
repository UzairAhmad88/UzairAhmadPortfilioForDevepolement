# Personal Engineering Timeline — Accessibility & UX Specification

## 1. Compliance Target

The Personal Engineering Timeline is engineered in alignment with **WCAG 2.2 Level AA** criteria.

---

## 2. Core Accessibility Features

### 2.1 Accessible Chronological Structure
- Uses native HTML `<time datetime="...">` elements for every date.
- Clear heading hierarchy (`h1` $\rightarrow$ `h2` Year groups $\rightarrow$ `h3` Event titles).
- Decorative connecting lines and timeline spine dots are marked with `aria-hidden="true"`.

### 2.2 Non-Color Dependent Indicators
- Event types (`PROJECT`, `RESEARCH`, `LAB EXPERIMENT`, `ENGINEERING NOTE`) and statuses (`SUPERSEDED`, `LEGACY`, `ARCHIVED`) use distinct uppercase monospace text labels, borders, and backgrounds.

### 2.3 Interactive Filter Accessibility
- Native `<button>` elements with `aria-pressed="true|false"` indicate active filter state.
- `aria-live="polite"` status region announces filtered result counts to assistive technologies when toggling filters.
- Full keyboard focus management with visible outlines matching `--color-accent-teal`.

### 2.4 Contrast & Reduced Motion
- All text meets or exceeds `4.5:1` contrast ratio on dark backgrounds.
- All transitions respect `@media (prefers-reduced-motion: reduce)`.
