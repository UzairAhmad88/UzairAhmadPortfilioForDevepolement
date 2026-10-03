import type { ArchiveState } from './archive';

export type TimelineEventType =
  | 'project'
  | 'research'
  | 'lab'
  | 'note'
  | 'technology'
  | 'milestone'
  | 'methodology';

export type DatePrecision = 'year' | 'month' | 'day' | 'range';

export type TimelineEventStatus =
  | 'planned'
  | 'in-progress'
  | 'completed'
  | 'active'
  | 'archived'
  | 'legacy'
  | 'superseded';

export interface TimelineEvent {
  id: string;
  date: string;               // ISO format (YYYY-MM-DD), Month format (YYYY-MM), or Year (YYYY)
  dateEnd?: string;            // For ranges (e.g. 2024 to 2025)
  dateDisplay: string;         // Human readable (e.g., "September 2024", "2024 – 2025", "2026")
  datePrecision: DatePrecision;
  year: number;

  title: string;
  tagline?: string;
  description: string;

  type: TimelineEventType;
  status: TimelineEventStatus;
  archiveState?: ArchiveState;

  // Canonical entity cross-reference
  entityId?: string;
  entitySlug?: string;
  entityHref?: string;

  // Metadata
  technologies?: string[];
  topics?: string[];
  featured?: boolean;

  // Evolutionary lineage
  successorProjectId?: string;
  successorProjectTitle?: string;
  predecessorProjectId?: string;
  predecessorProjectTitle?: string;
  evolutionNote?: string;

  // Retrospective / take-away
  takeaway?: string;
}

export interface TimelineFilterOptions {
  type?: TimelineEventType | 'all';
  year?: number | 'all';
  searchQuery?: string;
  includeArchived?: boolean;
}

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

export interface TimelineEra {
  id: string;
  title: string;
  timeframe: string;
  description: string;
  focusAreas: string[];
}
