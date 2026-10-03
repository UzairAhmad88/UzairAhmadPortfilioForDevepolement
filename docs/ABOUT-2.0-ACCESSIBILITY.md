# About 2.0 System — Accessibility & UX Specification

## 1. Compliance Standard

The About 2.0 Identity page is constructed in strict alignment with **WCAG 2.2 Level AA** criteria.

---

## 2. Accessibility Engineering

### 2.1 Landmark & Heading Structure
- Single semantic `<main id="main-content">` landmark.
- Semantic hierarchy: `h1` (Hero Name) $\rightarrow$ `h2` (Major Identity Sections) $\rightarrow$ `h3` (Card and Area Titles).

### 2.2 Keyboard Navigation & Focus Ring
- All interactive links and buttons feature high-contrast visible focus rings matching `--color-accent-teal` (`#7ed8c4`).
- Logical tab order from Hero CTA buttons through focus cards, principles, flagship systems, gateways, and collaboration contacts.

### 2.3 Contrast & Motion
- All body text guarantees a minimum contrast ratio of `4.5:1` against dark background tokens (`#07110f` / `#101a17`).
- All CSS transitions respect `@media (prefers-reduced-motion: reduce)` with zero animation layout shifts.
