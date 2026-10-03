export type ArchiveState =
  | 'active'
  | 'archived'
  | 'superseded'
  | 'abandoned'
  | 'paused'
  | 'legacy'
  | 'unpublished'
  | 'excluded';

export type ArchiveReason =
  | 'COMPLETED_HISTORICAL'
  | 'SUPERSEDED'
  | 'ABANDONED'
  | 'PAUSED'
  | 'LEGACY'
  | 'NO_LONGER_MAINTAINED'
  | 'ACADEMIC_HISTORY'
  | 'EXPERIMENTAL_HISTORY'
  | 'UNPUBLISHED'
  | 'EXCLUDED';

export interface ProjectArchiveMetadata {
  state: ArchiveState;
  reason?: ArchiveReason;
  archivedAt?: string;             // ISO Date or Year (e.g., '2024-06' or '2024')
  originalYear?: string;           // Year project originated / active
  archiveNote?: string;            // Editorial context explaining why this was archived/superseded
  successorProjectId?: string;     // Slug of successor project
  successorProjectTitle?: string;  // Title of successor project for direct display
  predecessorProjectId?: string;   // Slug of predecessor project
  predecessorProjectTitle?: string;// Title of predecessor project for direct display
  historicalSignificance?: string; // Summary of lessons / architectural legacy
  preserveEvidence?: boolean;      // Whether repository/deployment evidence should be surfaced
}

export interface ArchiveFilterOptions {
  category?: string;
  state?: ArchiveState | 'all';
  year?: string;
  query?: string;
}

export interface ArchiveCatalogSummary {
  totalProjects: number;
  activeCount: number;
  archivedCount: number;
  supersededCount: number;
  legacyCount: number;
  pausedCount: number;
  unpublishedCount: number;
  excludedCount: number;
}
