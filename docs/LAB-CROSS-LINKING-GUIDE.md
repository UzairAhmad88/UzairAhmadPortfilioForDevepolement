# Lab Cross-Linking & Navigation Guide

## 1. Purpose & Standards

This guide governs how internal links, navigation breadcrumbs, and exploratory pathways must be constructed across the platform to ensure smooth, accessible, and meaningful user journeys between Lab experiments and related work.

---

## 2. Canonical URL Schema

| Entity | Canonical Route Format | Example |
|:---|:---|:---|
| **Lab Index** | `/lab` | `https://.../lab` |
| **Lab Detail** | `/lab/[slug]` | `https://.../lab/gmm-regime-detection` |
| **Project Detail** | `/work/[slug]` | `https://.../work/market-regime-engine` |
| **Research Detail** | `/research/[slug]` | `https://.../research/market-regimes` |
| **Engineering Note** | `/notes/[slug]` | `https://.../notes/gmm-state-flipping-variance-ordering` |
| **Technology Detail** | `/technologies/[id]` | `https://.../technologies/scikit-learn` |

**Rule**: All links must be relative paths beginning with `/` and must never include trailing slashes (enforced by project router).

---

## 3. Breadcrumb Hierarchy

On all Lab pages, structured breadcrumbs follow this semantic hierarchy:

- **Lab Index**: `Home → Lab`
- **Lab Detail**: `Home → Lab → [Experiment Title]`
- **Deep Exploration**: If entered via a Project, the breadcrumb remains `Home → Lab → [Experiment Title]` to prevent circular history state, while a contextual banner or back-reference ("Part of [Project Name]") preserves the referring context.

---

## 4. Semantic Link Labels

Avoid ambiguous link text such as "Click here", "Learn more", or "See also". Always use descriptive action labels grounded in the actual relationship:

- `View the GMM Variance Ordering Note`
- `Explore the Market Regime Engine Project`
- `Inspect Empirical Research: Signal Decay`
- `View Python Technology Details`

---

## 5. Mobile Cross-Navigation Invariants

On mobile viewports ($< 768\text{px}$):
1. Cross-system relationship cards stack vertically into a single-column layout.
2. Touch targets exceed the WCAG AAA minimum of $44 \times 44\text{px}$.
3. No horizontal overflowing card carousels or hidden navigation elements.
4. Back navigation to `/lab` is always fixed or prominent at the top and bottom of the experiment narrative.
