# Phase 02 Change Plan: Personal Brand System & Visual Identity

**Target Project:** Uzair Ahmad — Personal Engineering & Research Platform  
**Live URL:** https://uzair-ahmad-portfilio-for-devepolem.vercel.app/  
**Phase:** 02 — Personal Brand System + Visual Identity + Design Language  
**Date:** October 2026  
**Status:** Approved & Implemented  

---

## 1. Executive Summary

Phase 02 transforms the portfolio from a developer portfolio aesthetic into a distinctive **Personal Engineering & Research Platform**.

The core visual concept is **"Engineering as a body of work"**—combining the depth of an **Engineering Notebook**, the rigor of a **Project Archive**, and the curiosity of a **Research Log**.

This change plan defines the exact modifications, categorization (KEEP, IMPROVE, REPLACE, REMOVE, ADD), and technical rationale for all design systems and components updated in Phase 02.

---

## 2. Change Categorization Matrix

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PHASE 02 CHANGE MATRIX                         │
├───────────────────┬────────────────────────────────────────────────────┤
│ CATEGORY          │ SCOPE / ARTIFACTS                                  │
├───────────────────┼────────────────────────────────────────────────────┤
│ KEEP              │ • Astro framework & SSR/SSG architecture           │
│                   │ • Existing project data (`src/data/*.ts`)          │
│                   │ • Verified project metrics & truthful copy         │
│                   │ • Core layout structure & routing (17 pages)       │
│                   │ • Accessibility touch targets (min 44px)           │
│                   │ • Zero runtime JS overhead for base presentation   │
├───────────────────┼────────────────────────────────────────────────────┤
│ IMPROVE           │ • Color token centralization in `variables.css`    │
│                   │ • Typography hierarchy (fluid clamp scale)         │
│                   │ • Spacing scale & container reading measures       │
│                   │ • Header & Footer editorial styling                │
│                   │ • Section headings with subtle 01/02 numbering     │
│                   │ • Button states (default, hover, active, focus)    │
│                   │ • Technical metadata tags & project status badges  │
├───────────────────┼────────────────────────────────────────────────────┤
│ REPLACE           │ • Ad-hoc color declarations with semantic tokens   │
│                   │ • Overly rounded card borders with restrained radii│
│                   │ • Generic badge styles with structured metadata    │
│                   │ • Raw pixel margins with fluid spacing tokens      │
├───────────────────┼────────────────────────────────────────────────────┤
│ REMOVE            │ • Neon cyan glows & high-contrast artificial fills │
│                   │ • Generic gradient text titles                     │
│                   │ • Unstructured card containers with no hierarchy   │
│                   │ • Redundant CSS rules across component styles      │
├───────────────────┼────────────────────────────────────────────────────┤
│ ADD               │ • Centralized semantic token architecture          │
│                   │ • Structured metadata language (`PROJECT / 07`)   │
│                   │ • Subtle section numbering (`01 / SELECTED WORK`) │
│                   │ • Standardized button hierarchy (primary, ghost,   │
│                   │   secondary, link)                                 │
│                   │ • `docs/PERSONAL-BRAND-SYSTEM.md`                  │
│                   │ • `docs/DESIGN-TOKENS.md`                          │
│                   │ • `docs/PHASE-02-VISUAL-QA.md`                     │
└───────────────────┴────────────────────────────────────────────────────┘
```

---

## 3. Detailed Component & System Rationale

### 3.1 Design Tokens (`src/styles/variables.css`)
- **Action:** IMPROVE & ADD
- **Why:** Centralizes the design tokens into a single authoritative source of truth. Adds semantic color tokens (`--color-background`, `--color-background-subtle`, `--color-surface-elevated`, `--color-border-subtle`, `--color-accent-hover`, `--color-accent-muted`, `--color-warning`, `--color-error`, `--color-info`), standardized reading widths (`--container-reading: 70ch`), fluid clamp scales, and motion tokens.
- **Safety:** Preserves all existing token names (`--paper`, `--ink`, `--muted`, `--line`, `--teal`, `--clay`, etc.) as aliases so no legacy components break.

### 3.2 Global Typography & Layout (`src/styles/global.css`)
- **Action:** IMPROVE & ADD
- **Why:** Establishes typographic discipline with maximum line measures (`65–75ch`), calm leading, consistent letter-spacing, and clean code formatting. Eliminates giant gradient headings in favor of crisp, legible headings.

### 3.3 Component Utilities (`src/styles/utilities.css`)
- **Action:** IMPROVE & STANDARDIZE
- **Why:** Standardizes four core button variants (primary, secondary, ghost, link) with uniform focus rings, padding, touch targets (≥44px), and transition tokens. Introduces reusable metadata label classes (`.meta-label`, `.tech-tag`, `.editorial-number`).

### 3.4 Header & Navigation (`src/components/layout/Header.astro`)
- **Action:** IMPROVE
- **Why:** Refines the header backdrop blur, restrained border contrast, and monogram badge to feel like an editorial publication masthead rather than a noisy SaaS floating bar.

### 3.5 Footer (`src/components/layout/Footer.astro`)
- **Action:** IMPROVE
- **Why:** Formats the footer as the colophon/closing page of a technical document, cleanly organizing navigation columns, direct contact channels, verified open-source licenses, and copyright.

### 3.6 Section Headings & Section Numbering
- **Action:** ADD & IMPROVE
- **Why:** Introduces quiet, disciplined section numbering:
  - `01 / SELECTED WORK`
  - `02 / CORE DISCIPLINES`
  - `03 / HOW I THINK`
  - `04 / RESEARCH LAB`
  - `05 / TECHNICAL MAP`
  - `06 / INQUIRY & COLLABORATION`
- **Why:** Gives the platform an intentional, notebook-like structure without feeling cluttered.

---

## 4. Phase Boundary Check (Non-Goals)
The following are strictly out of scope for Phase 02 and deferred to their designated phases:
- No Information Architecture overhaul (Phase 03).
- No Project DNA engine or dynamic graph visualizations (Phases 06 & 07).
- No live GitHub / Vercel Webhook sync automation (Phases 15, 16, 17).
- No new dynamic Lab or Notes engine (Phases 11 & 12).
- No interactive theme switcher toggle engine (Phase 24).
- No custom kinetic motion engine (Phase 25).
