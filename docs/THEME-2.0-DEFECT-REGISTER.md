# Theme 2.0 Defect Register & Resolution Log

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Target:** https://uzair-ahmad-portfilio-for-devepolem.vercel.app/  
**Audit Scope:** Light Theme, Hero/UI Hierarchy, Lab Workbench Interface, Topological Architecture Visualizations, Global Design System  
**Standard:** WCAG 2.1 Level AA / AAA, Zero-FOUC, Strict Design Token Discipline

---

## Defect Severity Definitions
- **P0:** Unreadable text, broken layout, dual-icon visual glitches, unfunctional interface state.
- **P1:** Major contrast regression, dark surface artifact rendered on light canvas, visual hierarchy collapse.
- **P2:** Noticeable theme inconsistency, missing active/hover state, subtle border/elevation mismatch.
- **P3:** Minor polish, transition smoothing, spacing alignment.

---

## Defect Resolution Registry

| ID | Route | Component | Current Problem | Dark Theme | Light Theme (Resolved) | Severity | Root Cause | Fix Applied |
|---|---|---|---|---|---|---|---|---|
| **DEF-01** | `/lab` | `.philosophy-box` (The Workbench Principle) | Dark green/charcoal container with extremely low-contrast dark text (#141f1c on #101a17). Unreadable. | Dark elevated surface (`#101a17`, border `#7ed8c4`/20%) | Elevated white card (`#ffffff`), border `rgba(20, 31, 28, 0.15)`, primary text `#141f1c` (14.2:1 AAA), eyebrow `#0d7663` (5.3:1 AA) | **P0** | Astro scoped style compilation required `:global()` on root `html[data-theme="light"]` selector | Scoped CSS updated to `:global(html[data-theme="light"]) .philosophy-box` with dedicated light elevation and AAA contrast tokens |
| **DEF-02** | All | `ThemeToggle.astro` | Both sun and moon icons visible simultaneously in Light Mode due to broken CSS selector inheritance. | Moon icon visible, sun icon hidden | Sun icon hidden, moon icon visible with crisp `#0d7663` stroke on `#ffffff` elevated pill | **P0** | Scoped `.icon-sun`/`.icon-moon` display rules failed to bind to `html[data-theme="light"]` | Re-architected with `:global(html[data-theme="light"]) .icon-sun` and `:global(html[data-theme="light"]) .icon-moon` rules |
| **DEF-03** | `/` (Hero) | `Hero.astro` (`.hero-system`) | Dark terminal background rendered inside light mode canvas; node labels and SVG links unreadable. | Technical canvas (`rgba(16, 26, 23, 0.95)`) | Clean elevated technical surface (`#ffffff`), header `#f7f4ec`, node labels `#141f1c`, accent `#0d7663` | **P1** | Hardcoded dark background on `.hero-system` and SVG rects | Converted to CSS variables and `:global` light rules for SVG nodes, links, and terminal bar |
| **DEF-04** | `/lab` | `LabItemCard.astro`, `LabCard.astro` | Experiment cards appeared as dark charcoal blocks against light canvas. | Deep engineering card (`#101a17`) | Elevated warm card (`#ffffff`), border `rgba(20,31,28,0.12)`, text `#141f1c` & `#35453f` | **P1** | Scoped CSS lacked root `:global` light selector | Added `:global(html[data-theme="light"]) .lab-card` and semantic card tokens |
| **DEF-05** | `/lab/[slug]` | Detail sections (`.hypothesis-box`, `.outcome-panel`) | Unreadable text in hypothesis statements and outcome metrics on light canvas. | Technical dark panel (`#101a17`) | Elevated white card (`#ffffff`), body text `#35453f`, metrics `#0d7663` | **P1** | Scoped styles lacked global light selector binding | Implemented `:global(html[data-theme="light"])` for all 6 lab detail templates |
| **DEF-06** | `/discover` | Search panel & Bridge card | Search input and discovery bridge rendered with dark backgrounds and low-contrast borders. | Dark surface (`rgba(16, 26, 23, 0.75)`) | Elevated white card (`#ffffff`), input `#ffffff`, text `#141f1c` | **P1** | Scoped light rules did not match root theme attribute | Added `:global` wrapper to all light theme styles in `discover.astro` |
| **DEF-07** | `/knowledge` | Controls panel & Inspector card | Dark inspector panel and unreadable node connection lists in light mode. | Topological dark canvas (`#07110f`) | Elevated white inspector (`#ffffff`), ribbon `#ffffff`, text `#141f1c` | **P1** | Scoped light rules missed global pseudo-class | Refactored with `:global` light selectors and contrast tuning |
| **DEF-08** | All | `Header.astro` & `Nav.astro` | Navigation bar active state lacked high contrast on warm ivory canvas. | Translucent dark backdrop (`rgba(7,17,15,0.88)`) | Translucent ivory backdrop (`rgba(251,249,245,0.94)`), active link `#0d7663` on `rgba(13,118,99,0.1)` | **P2** | Scoped nav links relied on fallback variables without light variant tuning | Added `:global` light styles for header container, brand text, and nav links |
| **DEF-09** | All | `Footer.astro` | Footer brand statement and navigation links had low contrast against white/ivory background. | Deep dark footer (`rgba(7, 17, 15, 0.95)`) | Warm ivory footer (`rgba(251, 249, 245, 0.98)`), text `#141f1c`, links `#4e6059` | **P2** | Scoped `site-footer` selector missed `:global` prefix | Updated `Footer.astro` with `:global` selectors and high-contrast link states |
| **DEF-10** | `/contact` | `contact.astro` (`.form-card`, `.response-card`) | Form inputs and response expectation card rendered as dark panels. | Dark form container (`rgba(16, 26, 23, 0.85)`) | Elevated white form (`#ffffff`), inputs `#ffffff`, text `#141f1c` | **P1** | Hardcoded background colors in scoped style block | Added `:global` light theme styles and semantic form tokens |
| **DEF-11** | `/about` | `about.astro` (`.focus-card`, `.principle-card`) | Cards rendered as dark blocks against light background. | Dark card surface (`#101a17`) | Elevated white card (`#ffffff`), text `#141f1c` & `#35453f` | **P1** | Component scoped styles missed root light selector | Added `:global(html[data-theme="light"])` for all card classes in `about.astro` |
| **DEF-12** | `/collaborate` | `collaborate.astro` (Engagement cards) | Process and engagement cards rendered with dark charcoal surfaces. | Dark container (`rgba(16, 26, 23, 0.85)`) | Elevated white card (`#ffffff`), text `#141f1c` & `#35453f` | **P1** | Scoped styles lacked light selector binding | Added `:global` light rules for all 5 section grids in `collaborate.astro` |
| **DEF-13** | `/timeline` | `timeline.astro` (`.era-card`, `.controls-section`) | Controls and era cards rendered with dark background. | Dark surface (`#101a17`) | Elevated white card (`#ffffff`), spine dot `#0d7663`, text `#141f1c` | **P1** | Scoped styles lacked light selector binding | Added `:global` light rules in `timeline.astro` |
| **DEF-14** | `/archive` | `archive.astro` (`.archive-summary-ribbon`) | Summary ribbon rendered with dark background. | Dark ribbon (`rgba(16, 26, 23, 0.6)`) | Elevated white ribbon (`#ffffff`), metric values `#141f1c` | **P2** | Scoped styles lacked light selector binding | Added `:global` light rules in `archive.astro` |

---

## Verification Status
- **Total Defects Identified:** 14
- **Total Defects Resolved:** 14
- **Regression Count in Dark Mode:** 0 (Verified via automated test suite and Astro build)
- **Static Route Build:** 60/60 routes verified
