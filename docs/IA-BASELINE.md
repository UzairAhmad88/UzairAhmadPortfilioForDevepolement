# Information Architecture Baseline & Navigation Flows

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  

---

## 1. Primary User Discovery Flows

```
Primary Entry (Homepage: /)
        │
        ├──► 1. Hero (Identity, Value Proposition, Metadata Strip)
        │       │
        │       ├──► [Explore Verified Systems →] ──► /work (Project Catalog)
        │       │                                       │
        │       │                                       └──► /work/[slug] (Detailed Case Study)
        │       │                                               │
        │       │                                               └──► GitHub Source / Live Demo
        │       │
        │       └──► [Read Research Inquiries] ─────► /research
        │                                               │
        │                                               └──► /research/[slug] (Inquiry Deep-Dive)
        │
        ├──► 2. "How I Build" (5-Stage Engineering Lifecycle)
        │
        ├──► 3. Selected Systems (Flagship Showcase)
        │
        ├──► 4. "Currently" Live Workbench (Building / Learning / Exploring)
        │
        └──► 5. Collaboration & Direct Contact ─────► /contact ──► /contact/success
```

---

## 2. Navigation Architecture
- **Desktop Navigation:** 5 unambiguous primary destinations (`Work`, `Research`, `About`, `Services`, `Contact`) + prominent `Get in Touch` action button.
- **Mobile Navigation:** Off-canvas drawer maintaining the same 5 primary destinations with ≥44px touch targets.
- **Zero Dead Ends:** Every case study and inquiry subpage concludes with breadcrumb navigation and a contextual `ContactCallout` banner.
