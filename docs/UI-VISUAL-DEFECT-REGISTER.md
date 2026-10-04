# UI Visual Defect Register
## Personal Engineering & Research Platform — Comprehensive UI/UX Audit & Correction Register

> **Role:** Principal UI Engineer, Design Systems Architect, UX/HCI Specialist, Frontend Architect, and Visual QA Lead.  
> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Repository:** `UzairAhmad88/UzairAhmadPortfilioForDevepolement`  
> **Audit Date:** October 2026  
> **Baseline System Status:** 60 Static Routes, 244 Unit Tests passing.

---

### Defect Severity Definitions
- **P0 — Broken / Unreadable:** Text or UI component completely unreadable (e.g. text color identical to background color), broken layout, or blocking accessibility defect.
- **P1 — Major Visual Inconsistency:** Section or subsystem diverging completely from global design system (e.g. purple/indigo themed Lab cards vs dark green-black/mint platform).
- **P2 — Noticeable Quality Problem:** Multi-colored rainbow headlines, duplicated metadata lines, misaligned card heights or spacing jumps.
- **P3 — Minor Polish:** Subtle border contrast differences, icon stroke variance, hover transition smoothing.
- **P4 — Cosmetic:** Minor padding or margin micro-adjustments.

---

## 1. Visual Defect Register

| ID | Area | Problem | Severity | Root Cause | Fix Plan |
|---|---|---|---|---|---|
| **DEF-01** | **Hero Headline** (`Hero.astro`) | Multi-color rainbow headline ("statistical rigor" in mint `#7ed8c4`, "AI models" in lavender `#bda6ff`, "production code" in tan `#d2a071`) creates visual fragmentation and feels unfocused. | **P1** | Three separate highlight classes (`.highlight-text`, `.highlight-alt`, `.highlight-eng`) applied across a single sentence. | Unify headline typography to warm off-white primary text (`#f6f1e8`), reserving the single primary mint accent (`#7ed8c4`) for the key technical phrase. |
| **DEF-02** | **Hero Topology SVG** (`Hero.astro`) | Topology nodes and data flow paths introduce lavender, purple, and tan gradients conflicting with the single mint identity. | **P2** | Linear gradients `#bda6ff` and `#d2a071` defined inside SVG defs. | Harmonize SVG defs to use mint/teal gradients and dark neutral surfaces matching `--color-surface-card`. |
| **DEF-03** | **Project Card CTA Buttons** (`ProjectCard.astro` & `utilities.css`) | Primary action button appears as a solid mint rectangle with completely invisible/unreadable text. | **P0** | Global `.primary` class in `utilities.css` set `background: #7ed8c4`, while `ProjectCard.astro` set `.action-link.primary { color: #7ed8c4; }`, causing mint text on mint background. | Scope `.button.primary` properly, ensure primary button text is dark `#07110f` with `font-weight: 700` (AAA contrast 13.8:1), and ensure action links have clear readable text. |
| **DEF-04** | **Project Card Metadata Stacking** (`ProjectDNA.astro`) | Duplicate status metadata rendered (e.g. "Active Research" badge pill immediately followed by another "Active Research" plain text subtitle line). | **P1** | `dna.timeline` contained status strings like "Active Research" or "Completed Project" and was rendered adjacent to `dna.status`. | Standardize card header: Eyebrow classification + single status badge pill, followed by clean Role & Year metadata row without redundant text. |
| **DEF-05** | **Lab Workbench Theme Divergence** (`LabSection.astro`, `LabItemCard.astro`, `lab/index.astro`, `lab/[slug].astro`) | The Lab subsystem uses blue/indigo/purple surfaces (`#12161c`, `#151b23`), indigo borders (`rgba(99,102,241,0.4)`), and lavender question blocks, looking like an unrelated website. | **P1** | Tailwind indigo color utility classes (`bg-indigo-500/10`, `text-indigo-400`, `border-indigo-500/30`) and custom hex values hardcoded in Lab components. | Refactor all Lab components to use global dark green-black surfaces (`#101a17`), subtle borders, mint accents (`#7ed8c4`), and warm off-white typography. |
| **DEF-06** | **Lab Question Block Treatment** (`LabItemCard.astro`, `LabSection.astro`) | Question blocks in Lab cards use heavy purple backgrounds (`bg-indigo-950/20`, `color: #c7d2fe`) and indigo borders. | **P1** | Separate purple component style instead of global semantic tokens. | Redesign Question blocks to use `--color-surface` with thin mint accent left border, warm off-white question text, and clear typographic hierarchy. |
| **DEF-07** | **Global Button Class Leakage** (`utilities.css`) | Bare `.primary` and `.secondary` class selectors in `utilities.css` pollute non-button components with unexpected solid backgrounds. | **P0** | Unscoped CSS selectors `.primary` and `.secondary` defined at top level. | Restrict selectors strictly to `.button.primary`, `.button.secondary`, `.btn-primary`, `.btn-secondary`. |
| **DEF-08** | **Status Badge Inconsistency** (`utilities.css`, `ProjectDNA.astro`, `LabItemCard.astro`) | Status badges across Work, Research, and Lab use different border radii, padding, font weights, and arbitrary colors. | **P1** | Fragmented status styling across multiple component files. | Unify into one central `.status-pill` tokenized component with consistent pill radius (`9999px`), monospace typography, and disciplined semantic borders. |
| **DEF-09** | **Technology Tags Visual Noise** (`ProjectDNA.astro`, `FeaturedProjectCard.astro`, `LabItemCard.astro`) | Tech tags vary in background opacity, font size, and border styles between featured cards, project cards, and lab cards. | **P2** | Inconsistent CSS rules across multiple card components. | Standardize `.tech-tag` / `.card-tech-pill` into a compact, low-noise metadata badge with consistent padding (`0.15rem 0.5rem`), font-size (`0.75rem`), and subtle borders. |
| **DEF-10** | **Footer Information Hierarchy & Visual Polish** (`Footer.astro`) | Footer links and brand column had uneven column alignment and inconsistent heading weights. | **P2** | Grid spacing and typography definitions in `Footer.astro` needed alignment with global design system. | Rework Footer layout into a balanced multi-column grid with clear identity statement, verified navigation groups, mint hover transitions, and legal copyright. |
| **DEF-11** | **Floating WhatsApp / Contact Control** (`WhatsAppFloat.astro`, `utilities.css`) | Floating action button lacked responsive safe-area offset and token integration. | **P3** | Fixed coordinate calculation without dynamic viewport fallback. | Refine `.whatsapp-float` with safe-area insets, accessible `aria-label`, hover micro-interactions, and high contrast. |
| **DEF-12** | **Secondary Button Color Inconsistency** (`Hero.astro`, `utilities.css`) | Hero secondary button used purple lavender styling (`background: rgba(189,166,255,0.12)`, `color: #bda6ff`). | **P1** | Component-level override in `Hero.astro`. | Standardize secondary button to use subtle surface with mint border or off-white text matching global `.button.secondary`. |
| **DEF-13** | **Card Surface Uniformity** (`global.css`, `utilities.css`) | Multiple card types used slightly different background opacities (`rgba(16,26,23,0.75)`, `rgba(18,24,32,0.85)`, `#12161c`). | **P2** | Ad-hoc hex and rgba color definitions in individual `.astro` files. | Unify all card surfaces to reference `--color-surface-card` (`#101a17` in dark, `#ffffff` in light) with `--color-border-subtle`. |

---

## 2. Remediation Verification Matrix

| Defect ID | Target Components / Files | Verified State |
|---|---|---|
| DEF-01 | `src/components/sections/Hero.astro` | ✅ Resolved |
| DEF-02 | `src/components/sections/Hero.astro` | ✅ Resolved |
| DEF-03 | `src/components/cards/ProjectCard.astro`, `src/styles/utilities.css` | ✅ Resolved |
| DEF-04 | `src/components/common/ProjectDNA.astro` | ✅ Resolved |
| DEF-05 | `src/components/sections/LabSection.astro`, `src/components/cards/LabItemCard.astro`, `src/pages/lab/index.astro`, `src/pages/lab/[slug].astro` | ✅ Resolved |
| DEF-06 | `src/components/cards/LabItemCard.astro`, `src/components/sections/LabSection.astro` | ✅ Resolved |
| DEF-07 | `src/styles/utilities.css` | ✅ Resolved |
| DEF-08 | `src/styles/utilities.css`, `src/components/common/ProjectDNA.astro` | ✅ Resolved |
| DEF-09 | `src/styles/utilities.css`, `src/components/common/ProjectDNA.astro` | ✅ Resolved |
| DEF-10 | `src/components/layout/Footer.astro` | ✅ Resolved |
| DEF-11 | `src/components/common/WhatsAppFloat.astro`, `src/styles/utilities.css` | ✅ Resolved |
| DEF-12 | `src/components/sections/Hero.astro`, `src/styles/utilities.css` | ✅ Resolved |
| DEF-13 | `src/styles/variables.css`, `src/styles/utilities.css` | ✅ Resolved |
