# Lab System QA Defect Register

**Project:** Personal Engineering & Research Platform — Lab Subsystem  
**Date:** 2026-10-04  
**Status:** All P0, P1, and P2 Defects Resolved (0 Remaining)  

---

## Severity Definitions

- **P0 (Critical):** Blocks build, breaks route resolution, or produces fatal runtime crashes. (Must be 0)
- **P1 (High):** Major functional defect, broken deep navigation, or severely impaired UX. (Must be 0)
- **P2 (Medium):** Important visual inconsistency, theme contrast failure, or accessibility violation. (Must be 0)
- **P3 (Low):** Minor polish, spacing adjustment, or cosmetic refinement.
- **P4 (Trivial):** Optional future enhancement or non-blocking micro-interaction.

---

## Defect Log & Verification Matrix

| Defect ID | Severity | Area / Route | Description | Root Cause | Resolution Status | Verified By |
|---|---|---|---|---|---|---|
| **DEF-LAB-001** | P1 | `/lab` (Index) | Card title redundancy (`streaming-orderbook-sse: Asynchronous...` displayed raw slug prefix in header). | Card component rendered raw `item.title` without separating the slug identifier prefix. | **FIXED:** Added regex parsing to split identifier prefix (`EXP // streaming-orderbook-sse`) and clean title (`Asynchronous Server-Sent Events for Market Feeds`). | Automated Unit Test + Visual Inspection |
| **DEF-LAB-002** | P2 | `/lab` & `/lab/[slug]` | Light theme contrast deficiency in `ProjectVisualization.astro` node connectors and dark background remnants. | Node cards used hardcoded dark surface colors and lacked light mode overrides. | **FIXED:** Added comprehensive `:global(html[data-theme="light"])` CSS tokens, crisp borders, and dark slate text tokens. | Theme Switcher Pass |
| **DEF-LAB-003** | P1 | `/lab` (Filters) | Filter buttons lost active state on page refresh when navigating via query parameters (`?type=...`). | Filter script only listened to click events without parsing `window.location.search` on initial DOM mount. | **FIXED:** Added initial URL query parameter parsing and `history.pushState` synchronizer in `LabFilters.astro`. | Browser Navigation & Deep-Link Test |
| **DEF-LAB-004** | P2 | `/lab/[slug]` | Detail hero typography clipped long titles on narrow mobile screens (320px–375px). | Fixed `font-size` without `clamp()` and overly restrictive max-width constraint. | **FIXED:** Implemented `clamp(1.5rem, 4vw, 2.5rem)` fluid typography and word-breaking wrap rules. | Mobile Viewport Matrix (320px–430px) |
| **DEF-LAB-005** | P2 | `/lab` (Empty State) | Empty state search/filter reset lacked an explicit keyboard-accessible "Clear Filters" action. | Zero-result container had text explanation but required manual filter button hunting. | **FIXED:** Added an accessible `<button id="reset-filters-btn">` with event listener to reset active filter to 'all'. | Keyboard Navigation Pass |
| **DEF-LAB-006** | P2 | `VercelEvidenceBadge` | Badge text lacked sufficient color contrast in Light mode on subtle gray backgrounds. | Used low-opacity green on white background. | **FIXED:** Enhanced Light mode token to `#0d7663` (emerald-800) with `#e6f7f3` surface background (contrast ratio > 4.8:1). | A11y Contrast Audit |

---

## Summary Statistics

- **Total Defects Identified:** 6
- **Total P0 Defects:** 0
- **Total P1 Defects:** 2 (Resolved: 2, Remaining: 0)
- **Total P2 Defects:** 4 (Resolved: 4, Remaining: 0)
- **Total P3/P4 Defects:** 0
- **Unresolved Defects:** **0**
- **Quality Gate Verdict:** **PASS (Production Ready)**
