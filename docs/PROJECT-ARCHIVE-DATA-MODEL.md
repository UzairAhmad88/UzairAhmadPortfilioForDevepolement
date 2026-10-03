# Project Archive System — Data Model Specification

## 1. Architectural Overview

The **Project Archive System** extends the canonical `Project` entity from Phase 05 without creating a disconnected or duplicate data structure. It decouples **Operational Lifecycle Status** (which denotes engineering state: e.g., `in-progress`, `completed`, `experimental`, `maintenance`) from **Archive State** (which denotes historical placement and platform visibility: e.g., `active`, `archived`, `superseded`, `legacy`, `paused`, `unpublished`, `excluded`).

```
Canonical Project Entity (src/types/project.ts)
  ├── Basic Metadata (title, slug, tagline, description, year)
  ├── Operational Lifecycle (status: 'completed' | 'in-progress' | ...)
  ├── Project DNA (metrics, badges, context)
  ├── External Evidence (github: GitHubIntelligence, vercel: VercelIntelligence)
  └── Historical Archive Metadata (archive?: ProjectArchiveMetadata)
        ├── state: ArchiveState
        ├── reason: ArchiveReason
        ├── archivedAt?: string
        ├── originalYear?: number
        ├── successorProjectId?: string
        ├── predecessorProjectId?: string
        ├── relatedProjects?: string[]
        ├── archiveNote?: string
        ├── lessonsLearned?: string[]
        └── retrospectiveSummary?: string
```

---

## 2. Core Type Definitions

Defined in `src/types/archive.ts`:

### 2.1 ArchiveState

```typescript
export type ArchiveState =
  | 'active'        // Active flagship / currently maintained work
  | 'archived'      // Preserved historical project
  | 'superseded'    // Replaced by a more modern/refined implementation
  | 'abandoned'     // Development halted prior to production release
  | 'paused'        // Intentionally paused; may resume
  | 'legacy'        // Older codebase/architecture showcasing historical skill progression
  | 'unpublished'   // Curated in data but withheld from public presentation
  | 'excluded';     // Strictly excluded from index, graph, sitemap, and search
```

### 2.2 ArchiveReason

```typescript
export type ArchiveReason =
  | 'COMPLETED_HISTORICAL'     // Completed milestones that are preserved for historical record
  | 'SUPERSEDED'               // Superseded by a newer architectural generation or product
  | 'ABANDONED'                // Exploratory or early work that was discontinued
  | 'PAUSED'                   // Work suspended due to priority shifts or pending dependencies
  | 'LEGACY'                   // Earlier technological stack (e.g. monolithic Flask, vanilla JS)
  | 'NO_LONGER_MAINTAINED'     // Deployed codebase that is static and no longer actively patched
  | 'ACADEMIC_HISTORY'         // Academic/educational coursework milestone
  | 'EXPERIMENTAL_HISTORY'     // Historical proof of concept or experiment
  | 'UNPUBLISHED'              // Internal draft or non-public item
  | 'EXCLUDED';                // Filtered out from public interface
```

### 2.3 ProjectArchiveMetadata Interface

```typescript
export interface ProjectArchiveMetadata {
  state: ArchiveState;
  reason: ArchiveReason;
  archivedAt?: string;             // ISO Date (YYYY-MM-DD) or Year string
  originalYear?: number;           // Year work commenced / was completed
  successorProjectId?: string;     // Slug of newer project that superseded this one
  predecessorProjectId?: string;   // Slug of earlier ancestor project
  relatedProjects?: string[];      // Array of associated project slugs
  archiveNote?: string;            // Editorial retrospective or context
  lessonsLearned?: string[];       // Technical or architectural takeaways
  retrospectiveSummary?: string;   // Summary of historical significance
}
```

---

## 3. Project DNA Integration

The `ProjectDNAMetadata` interface in `src/types/project.ts` integrates the archive state to enable unified rendering across cards, hero sections, and visual indicators:

```typescript
export interface ProjectDNAMetadata {
  type: string;
  status: string;                  // e.g. "Legacy (Completed)", "Superseded", "Archived"
  archiveState?: ArchiveState;     // Canonical archive state enum
  role: string;
  year: string;
  context: string;
  timeline: string;
  impactScore?: number;
  featured?: boolean;
}
```

---

## 4. Relationship Consistency & Validation Rules

To preserve data integrity, the deterministic validator (`scripts/validate-archive.mjs`) enforces the following invariants:

| Field | Invariant Rule | Violation Severity |
|---|---|---|
| `state` | Must be a recognized `ArchiveState`. Non-active items must define `reason`. | Fatal (Build Failure) |
| `reason` | Must match one of the 10 approved `ArchiveReason` taxonomy values. | Fatal (Build Failure) |
| `successorProjectId` | Must reference an existing, valid public project slug. Must NOT self-reference. | Fatal (Build Failure) |
| `predecessorProjectId` | Must reference an existing, valid public project slug. Must NOT self-reference. | Fatal (Build Failure) |
| `unpublished` / `excluded` | Must never be surfaced on `/archive`, sitemap, Knowledge Graph, or Discovery indexes. | Fatal (Build Failure) |
| `slug` | Must match across canonical projects, sync registry, and graph nodes. | Fatal (Build Failure) |

---

## 5. Preparation for Future Timeline (Phase 19)

The archive data model establishes normalized time markers:
- `originalYear`: The canonical origin year of the project.
- `archivedAt`: The ISO date when development completed or transitioned to historical status.
- `successorProjectId` / `predecessorProjectId`: Directional acyclic relationships forming the evolutionary chain for Phase 19 timeline generation.
