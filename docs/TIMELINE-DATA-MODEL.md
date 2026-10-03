# Personal Engineering Timeline — Data Model Specification

## 1. Type Definitions

Defined in `src/types/timeline.ts`:

### 1.1 TimelineEventType

```typescript
export type TimelineEventType =
  | 'project'        // Major software product, platform, or system
  | 'research'       // Scientific / quantitative research inquiry
  | 'lab'            // Laboratory experiment, CLI utility, or prototype
  | 'note'           // Key engineering / debugging note
  | 'technology'     // Core technology adoption milestone
  | 'milestone'      // Architectural transition / verified milestone
  | 'methodology';   // Engineering methodology shift
```

### 1.2 DatePrecision & TimelineEventStatus

```typescript
export type DatePrecision = 'year' | 'month' | 'day' | 'range';

export type TimelineEventStatus =
  | 'planned'
  | 'in-progress'
  | 'completed'
  | 'active'
  | 'archived'
  | 'legacy'
  | 'superseded';
```

### 1.3 TimelineEvent Schema

```typescript
export interface TimelineEvent {
  id: string;                      // Deterministic ID (e.g. "timeline-project-curasphere-hms")
  date: string;                    // ISO date string (YYYY-MM-DD), Month (YYYY-MM), or Year (YYYY)
  dateEnd?: string;                // End date for range precision
  dateDisplay: string;             // Human-readable formatted string (e.g. "September 15, 2024")
  datePrecision: DatePrecision;    // 'year' | 'month' | 'day' | 'range'
  year: number;                    // Numerical year used for bucket grouping

  title: string;                   // Canonical event title
  tagline?: string;                // Category, domain, or subtitle
  description: string;             // Summary or problem statement

  type: TimelineEventType;         // 'project' | 'research' | 'lab' | 'note' | ...
  status: TimelineEventStatus;     // Operational / historical status
  archiveState?: ArchiveState;     // Phase 18 archive state enum

  // Canonical entity cross-reference
  entityId?: string;               // Slug or identifier
  entitySlug?: string;             // Slug for route lookup
  entityHref?: string;             // Target URL (/work/[slug], /research/[slug], /lab/[slug])

  // Metadata
  technologies?: string[];         // Normalized technology IDs / names
  topics?: string[];               // Domain / category tags
  featured?: boolean;              // Highlighted milestone

  // Evolutionary lineage
  successorProjectId?: string;     // Slug of successor project
  successorProjectTitle?: string;  // Title of successor project
  predecessorProjectId?: string;   // Slug of predecessor project
  predecessorProjectTitle?: string;// Title of predecessor project
  evolutionNote?: string;          // Editorial lineage context

  // Takeaways
  takeaway?: string;               // Key outcome, finding, or lesson
}
```

---

## 2. Aggregates & Era Model

### 2.1 TimelineSummary

```typescript
export interface TimelineSummary {
  totalEvents: number;
  yearRange: {
    start: number;
    end: number;
  };
  byType: Record<TimelineEventType, number>;
  byYear: Record<number, number>;
  activeCount: number;
  archivedCount: number;
}
```

### 2.2 TimelineEra

```typescript
export interface TimelineEra {
  id: string;
  title: string;
  timeframe: string;
  description: string;
  focusAreas: string[];
}
```
