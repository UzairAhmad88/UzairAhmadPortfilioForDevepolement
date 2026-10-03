# Personal Engineering Timeline — System Specification

## 1. System Objective & Philosophy

The **Personal Engineering Timeline** is a first-class chronological interpretation of the body of engineering work across the platform. It documents how systems, mathematical research, laboratory experiments, engineering notes, and technologies evolved over time.

### Core Philosophy
1. **Evolution over Resume Dates:** Rather than presenting disconnected skill checkboxes (e.g. "Learned React in 2024"), the timeline traces tangible system milestones, architectural predecessors, and research directions.
2. **Contextual & Chronological, Not Evaluative:** The timeline never ranks or scores years or outputs. It objectively answers: *"How did this body of work develop over time?"*
3. **Canonical Derivation Principle:** Timeline events are derived deterministically from canonical source entities (`projects`, `researchItems`, `labItems`, `engineeringNotes`) without maintaining disconnected or duplicate content records.

```
                  CANONICAL PLATFORM ENTITIES
    ┌──────────────┬──────────────┬──────────────┬──────────────┐
    │   Projects   │   Research   │     Lab      │    Notes     │
    └──────┬───────┴──────┬───────┴──────┬───────┴──────┬───────┘
           │              │              │              │
           └──────────────┼──────────────┼──────────────┘
                          │
                          ▼
              TIMELINE DERIVATION ENGINE
           (src/lib/timeline/timelineEngine.ts)
                          │
                          ├── Date & Precision Normalization
                          ├── Lineage & Relationship Cross-Linking
                          ├── Deterministic Chronological Sorting
                          └── Isolation of Private/Excluded Records
                          │
                          ▼
            PERSONAL ENGINEERING TIMELINE UI
             ├── Dedicated Route: /timeline
             └── Homepage Preview: TimelinePreview.astro
```

---

## 2. Key Capabilities & Invariants

- **Multi-Level Date Precision:** Explicitly supports `year`, `month`, `day`, and `range` precisions based strictly on verified historical records.
- **Dynamic Type & Year Filtering:** Native interactive controls allow instant filtering by type (`project`, `research`, `lab`, `note`) and year (`2026`, `2025`, `2024`) with zero layout shift.
- **Integrated Lineage Attribution:** Integrates with Phase 18 Archive predecessor/successor relationships, displaying evolution links directly on event cards.
- **Strict Privacy Isolation:** Entities flagged as `unpublished` or `excluded` in curation rules are guaranteed zero exposure on the timeline.
