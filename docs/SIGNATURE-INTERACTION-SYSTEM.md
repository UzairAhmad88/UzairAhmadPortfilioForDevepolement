# ⚙️ Signature Interaction System Architecture

## Architecture Overview

```text
Canonical Data Entities
(Projects, CaseStudies, Research, Lab, Notes, Tech, GitHub, Vercel)
                     │
                     ▼
  interactionBuilder.ts (Build-Time Extraction)
                     │
                     ▼
       SignatureInteractionPayload
       ├── Architecture Lens Content
       ├── Constraints Lens Content
       ├── Implementation Lens Content
       ├── Evidence Lens Content
       ├── Tradeoffs Lens Content
       └── Connections Lens Content
                     │
                     ▼
   EngineeringLensNavigator.astro (Component Layer)
   ├── Tablist Navigator (role="tablist")
   ├── Perspective Query Banner (aria-live="polite")
   ├── 6 Distinct Tabpanels (role="tabpanel")
   ├── Keyboard & Deep-Link State Synchronizer (?lens=...)
   └── Responsive Grid Layouts
                     │
                     ▼
   Deployment Touchpoints
   ├── Homepage: SignatureSection.astro
   └── Case Studies: /work/[slug].astro
```

---

## Component Ecosystem
1. `src/types/signatureInteraction.ts`: TypeScript interfaces for lenses, stage flows, nodes, and payload contracts.
2. `src/data/signatureInteraction.ts`: Canonical lens definitions, questions, taglines, badges, and configuration.
3. `src/lib/signature/interactionBuilder.ts`: Build-time payload generator that unifies all platform data models.
4. `src/components/signature/EngineeringLensNavigator.astro`: The core interactive lens switcher.
5. `src/components/sections/SignatureSection.astro`: Flagship homepage presentation with interactive system selection.
6. `src/pages/work/[slug].astro`: Embedded contextual lens navigator on every project case study.
7. `scripts/validate-signature-interaction.mjs`: Automated deterministic validator.
8. `tests/unit/signatureInteraction.test.ts`: Automated test suite for node testing.
