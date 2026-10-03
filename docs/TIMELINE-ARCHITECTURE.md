# Personal Engineering Timeline — Architecture Specification

## 1. Derived Pipeline Architecture

The Timeline System operates as a deterministic, pure functional transformation pipeline. No duplicate database or manual event array is maintained. When the platform builds, the Timeline Engine dynamically extracts, transforms, and organizes events from canonical sources:

```
Step 1: Ingestion
  ├── Projects (src/data/projects.ts)
  ├── Research (src/data/research.ts)
  ├── Lab Experiments (src/data/lab.ts)
  └── Notes (src/data/notes.ts)
           │
           ▼
Step 2: Normalization & Filtering
  ├── Filter out unpublished / excluded archive states
  ├── Extract dates and assign date precision ('year' | 'month' | 'day' | 'range')
  ├── Format accessible display strings
  └── Resolve successor/predecessor project titles
           │
           ▼
Step 3: Multi-Key Deterministic Sorting
  ├── Primary: Year / Date descending (Newest first: 2026 → 2025 → 2024)
  ├── Secondary: Normalized ISO date comparison
  ├── Tertiary: Event type priority (project > research > lab > note)
  └── Quaternary: Title / Slug alphabetical tie-breaker
           │
           ▼
Step 4: Year Grouping & Aggregation
  ├── Bucket events by numerical year
  ├── Compute summary counts by type and year
  └── Inject verified engineering eras
           │
           ▼
Step 5: Presentation & Interactive Delivery
  ├── Dedicated SSG Route (/timeline)
  ├── Homepage Preview Component (TimelinePreview.astro)
  └── Semantic HTML / ARIA live regions for client-side filtering
```

---

## 2. Component Hierarchy

```
src/pages/timeline.astro
  ├── BaseLayout.astro
  ├── Header & Introduction
  │     └── Metrics Summary Ribbon
  ├── Eras Grid (TimelineEra cards)
  ├── Filter Controls (Type & Year pills)
  └── Timeline Stream (grouped by Year)
        └── TimelineEventCard.astro
              ├── Meta Header (Type pill, Status badge, Date)
              ├── Title & Entity Cross-Link
              ├── Description & Takeaways
              ├── Evolution Link Box (Successor / Predecessor)
              └── Footer (Technology tags & Action link)
```
