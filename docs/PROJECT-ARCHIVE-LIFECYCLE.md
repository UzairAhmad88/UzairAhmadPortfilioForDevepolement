# Project Archive System — Lifecycle Specification

## 1. Overview & Operational Principles

The **Project Archive Lifecycle** governs how projects transition from active development to historical preservation, ensuring:
1. **Zero Automated Degradation:** External telemetry fluctuations (e.g., GitHub repo privacy changes, Vercel deployment expiration) never automatically archive or alter a project's curated lifecycle state.
2. **Explicit Human Review:** Lifecycle transitions require human editorial sign-off via `src/data/projects.ts` and `src/data/projectSync/curation.ts`.
3. **URL Stability Invariant:** When a project transitions to an archive state, its canonical URL (`/work/[slug]`) remains unchanged, guaranteeing backlink preservation.

---

## 2. Lifecycle State Machine

```
              ┌─────────────────────────────────────────────────┐
              │             NEW PROJECT PROPOSAL / LAB          │
              └────────────────────────┬────────────────────────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │  ACTIVE WORK    │
                              │ (/work, /labs)  │
                              └────────┬────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
                    ▼                  ▼                  ▼
             ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
             │ ARCHIVED     │   │ SUPERSEDED   │   │ LEGACY       │
             │ (Milestone   │   │ (Replaced by │   │ (Historical  │
             │  Completed)  │   │  Successor)  │   │  Tech Stack) │
             └──────┬───────┘   └──────┬───────┘   └──────┬───────┘
                    │                  │                  │
                    └──────────────────┼──────────────────┘
                                       │
                                       ▼
                       ┌────────────────────────────────┐
                       │     HISTORICAL PRESERVATION    │
                       │ (/archive + /work/[slug] note) │
                       └────────────────────────────────┘
```

---

## 3. Transition Protocols

### 3.1 Active $\rightarrow$ Archived (Completed Milestone)
- **Criteria:** The project reached its intended scope and objectives. It is stable, static, and no longer receiving major feature additions.
- **Actions:**
  1. Set `archive.state = 'archived'`.
  2. Set `archive.reason = 'COMPLETED_HISTORICAL'`.
  3. Record `archivedAt` (YYYY-MM-DD) and `lessonsLearned`.
  4. Project remains accessible via `/work/[slug]` with historical badge and appears in `/archive`.

### 3.2 Active $\rightarrow$ Superseded
- **Criteria:** A newer, superior system or architectural generation has been built that renders this implementation a direct precursor.
- **Actions:**
  1. Set `archive.state = 'superseded'`.
  2. Set `archive.reason = 'SUPERSEDED'`.
  3. Set `archive.successorProjectId = '<successor-slug>'`.
  4. On the successor project, optionally reference `archive.predecessorProjectId = '<precursor-slug>'`.
  5. The Knowledge Graph automatically establishes a directional `SUPERSEDED_BY` edge.

### 3.3 Active $\rightarrow$ Legacy
- **Criteria:** Codebase represents an earlier technological era (e.g. monolithic backend, early template engines) providing valuable insight into engineering growth.
- **Actions:**
  1. Set `archive.state = 'legacy'`.
  2. Set `archive.reason = 'LEGACY'`.
  3. Detail technical evolution in `retrospectiveSummary` or `archiveNote`.

### 3.4 Active $\rightarrow$ Paused / Abandoned
- **Criteria:** Research or development was halted prior to production release due to insurmountable constraints or shift in research focus.
- **Actions:**
  1. Set `archive.state = 'paused'` or `'abandoned'`.
  2. Document specific findings, blockers, and hypotheses tested.

---

## 4. Integration with Project Sync (Phase 17)

When `npm run sync:projects` runs:
- If a GitHub repository is archived on GitHub $\rightarrow$ The sync engine records `github.archived = true`, flags for editorial review, but **does not mutate** `archive.state` without human confirmation.
- If a Vercel deployment expires $\rightarrow$ The sync engine records `vercel.status = 'inactive'`, flags a warning, but **preserves** the project state.
- If an excluded repository is synced $\rightarrow$ It is assigned `archive.state = 'excluded'` in curation rules, remaining invisible on the public platform.
