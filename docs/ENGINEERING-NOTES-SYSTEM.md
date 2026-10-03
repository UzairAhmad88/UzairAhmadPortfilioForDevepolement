# Engineering Notes System — Architecture & Knowledge Operations

**Uzair Ahmad — Personal Engineering & Research Platform**  
**Phase 11 Specification**

---

## 1. System Purpose & Philosophy

The **Engineering Notes System** (`/notes`) is a first-class technical publication engine designed to capture atomic, evidence-backed units of accumulated engineering knowledge. Unlike marketing blogs, generic tutorials, or high-level project showcases, Engineering Notes function as a **public engineering notebook**.

```
                   ENGINEERING KNOWLEDGE HIERARCHY
┌─────────────────────────────────────────────────────────────────┐
│ Projects (/projects)        → What was built (System outcome)  │
│ Research (/research)        → What was investigated (Inquiry)   │
│ How I Build (/how-i-build)  → Engineering methodology & process │
│ Technology (/technology)    → Canonical tools & ecosystems      │
│ Engineering Notes (/notes)  → What was learned, debugged, &     │
│                               decided (Atomic knowledge)        │
└─────────────────────────────────────────────────────────────────┘
```

### Core Tenets
1. **No Generic Content Marketing:** Zero clickbait titles ("You Won't Believe...", "10 Tips..."). Every title is an accurate technical summary.
2. **Honest, First-Person Reflection:** Documents real problems, real failures, exact error traces, root cause diagnostics, and engineering trade-offs.
3. **Deterministic Relationships:** Notes establish strict bidirectional relationships with canonical Projects, Research inquiries, and Technology entities without fabricated AI recommendations.
4. **Code Truth:** Every code example is sanitized, reproducible, syntax-highlighted, and directly derived from actual system implementations.

---

## 2. Note Taxonomy & Content Types

The system supports 6 core note classifications:

| Note Type | Identifier | Primary Structure | Use Case |
| :--- | :--- | :--- | :--- |
| **Debugging Note** | `debugging` | Problem → Error Trace → Root Cause → Fix → Lesson | Resolving runtime panics, concurrency bugs, memory leaks, ORM traps. |
| **Technical Note** | `technical` | Context → Mathematical/Technical Analysis → Proof/Derivation → Trade-offs | In-depth analysis of signal processing, statistical mechanics, algorithms. |
| **Architecture Note** | `architecture` | Problem → Structural Constraints → State Model → Boundary Defense | Designing state graphs, API boundaries, schema normalization, isolation layers. |
| **Decision Note** | `decision` | Context → Options Evaluated → Selected Strategy → Relational Integrity | Justifying architectural forks (e.g. Postgres RBAC vs NoSQL). |
| **Learning Note** | `learning` | Initial Assumption → Counter-Evidence → Refined Understanding → Application | Revising mental models after empirical failure or deeper mathematical study. |
| **UX Note** | `ux` | Metric Failure → Layout Engine Analysis → Token Architecture → Resolution | Eliminating layout shift (CLS), font flashing, or rendering latency. |

---

## 3. Controlled Topic Classification

To prevent uncontrolled tag sprawl, notes are tagged exclusively with standard taxonomy topics:

- `Software Engineering`
- `Frontend`
- `Backend`
- `Database`
- `AI / ML`
- `Data`
- `Quant`
- `HCI`
- `Performance`
- `Accessibility`
- `Architecture`
- `DevOps`
- `Debugging`

---

## 4. Routing & URL State Architecture

- **Index Route:** `/notes`
  - Client-side accessible topic filtering via URL query params (`/notes?topic=quant`, `/notes?topic=backend`) and interactive DOM filter buttons.
  - Compact editorial note cards displaying type badge, topic, reading time, published date, summary, and canonical technology tags.
- **Detail Route:** `/notes/[slug]`
  - Dynamic SSG page generated via `getStaticPaths()`.
  - Structured editorial typography with numbered section hierarchy (`01 — Context`, `02 — Investigation`, `03 — Implementation`).
  - Terminal code blocks with copy interactions and horizontal scrolling isolation (`overflow-x: auto`).
  - Cross-system bidirectional evidence cards linking to related Projects, Research inquiries, and Technologies.

---

## 5. Security & Truth Rules

1. **Zero Secret Leakage:** No environment variables (`.env`), private tokens, internal IP addresses, production database credentials, or private file paths are ever committed in note examples.
2. **Safe Code & Error Output:** Error stack traces use generic system paths (`/srv/app/...`) and standard exceptions (`sqlalchemy.exc.MissingGreenlet`).
3. **Deterministic Reading Time:** Derived deterministically from content word count at ~200 words/minute (`Math.max(2, Math.ceil(wordCount / 200))`).

---

## 6. Future Integration Notice

Phase 11 strictly establishes the static SSG data model, routing, and bidirectional links. Future phases (Phase 12 Lab, Phase 13 Knowledge Graph, Phase 14 Discovery) will consume these canonical note entities as first-class nodes in the portfolio graph.
