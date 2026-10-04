# Lab Platform Integration Architecture

## 1. System Purpose & Vision

The **Lab System** on Uzair Ahmad's engineering platform is the connective tissue between theory, implementation, and learning. Rather than serving as an isolated showcase or disconnected demo page, it serves as the platform's empirical workbench.

```
                ┌────────────────────────┐
                │   RESEARCH PLATFORM    │
                │  (Theoretical Inquiries)│
                └───────────┬────────────┘
                            │ VALIDATES / EXPLORES
                            ▼
┌──────────────┐     ┌──────────────┐     ┌───────────────────┐
│   PROJECTS   │◄────┤  LAB SYSTEM  ├────►│ ENGINEERING NOTES │
│ (Production) │     │ (Experiments)│     │    (Learnings)    │
└──────────────┴─────┴──────┬───────┴─────┴───────────────────┘
                            │ USES / BENCHMARKS
                            ▼
                ┌────────────────────────┐
                │      TECHNOLOGIES      │
                │   (Capabilities/Stack) │
                └────────────────────────┘
```

---

## 2. Integration Principles

1. **Deterministic Relationships**: Every cross-system reference uses immutable entity keys (`slug` or canonical `id`), never fuzzy title matching or dynamic heuristics.
2. **Bidirectional Coherence**: If Lab item $L$ references Project $P$, Project $P$ explicitly acknowledges its relationship with $L$ (e.g. `relatedLab` or `originatedFromLab`).
3. **No Fabricated Data**: Zero synthetic scores, star ratings, difficulty levels, or artificial recommendation engines.
4. **Single Source of Truth**: Lab records in `src/data/lab.ts` are the sole source for Lab metadata, consumed uniformly by Discovery, Knowledge Graph, Timeline, and UI pages.

---

## 3. Platform Touchpoints

### 3.1 Knowledge Graph Layer (`src/lib/knowledge/graphBuilder.ts`)
- Nodes: Registered with ID format `lab:<slug>` and typed as `lab`.
- Edges: Typed directed edges created for `USED_IN` (tech), `RELATED_TO` (projects/research), `DOCUMENTS` (notes), and `PROMOTED_TO` (lineage).

### 3.2 Discovery Engine (`src/lib/discovery/discoveryEngine.ts`)
- All 6 Lab items indexed as `SearchDocument` with `type: 'LAB'`.
- Matches queries across research question, hypothesis, implementation, results, technologies, and topics.

### 3.3 Timeline Engine (`src/lib/timeline/timelineEngine.ts`)
- Promoted experiments and prototype milestones integrated as `LAB_EXPERIMENT` events.
- Historical integrity maintained with truthful date stamping.

### 3.4 Page Integration & Navigation
- `/lab`: Primary index with filters for Experiment Type, Implementation State, and Technology.
- `/lab/[slug]`: Deep detail view displaying Question, Hypothesis, Technical Methodology, Evidence Artifacts, Code/Repo access, and Deterministic "Next to Explore" pathways.
- `/work/[slug]`: Displays "Related Lab Experiments" section for informed projects.
- `/research/[slug]`: Displays "Empirical Evidence & Lab Validation" section.
- `/notes/[slug]`: Displays "Originating Lab Experiments" where relevant.
- `/technologies/[id]`: Displays "Explored in Lab Experiments" list.

---

## 4. Maintenance & Governance

To maintain integrity as new experiments are authored:
1. Ensure all new Lab records define explicit `relatedProjects`, `relatedResearch`, `relatedNotes`, and `technologies`.
2. Update the corresponding project/research/note/tech records with reciprocal links.
3. Run `npm test` to execute `tests/unit/lab-platform-integration.test.ts` and verify graph invariants.
