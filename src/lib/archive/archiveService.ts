import type { Project, ArchiveState, ArchiveReason, ArchiveCatalogSummary } from '../../types/project.ts';

/**
 * Checks if a project is publicly viewable (not internal/unpublished/excluded).
 */
export function isPublicProject(project: Project): boolean {
  const state = project.archive?.state;
  return state !== 'unpublished' && state !== 'excluded';
}

/**
 * Returns all publicly visible projects.
 */
export function getPublicProjects(allProjects: Project[]): Project[] {
  return allProjects.filter(isPublicProject);
}

/**
 * Returns active, non-archived projects suitable for the main portfolio catalog.
 */
export function getActiveProjects(allProjects: Project[]): Project[] {
  return allProjects.filter((p) => {
    if (!isPublicProject(p)) return false;
    const state = p.archive?.state || (p.status === 'archived' ? 'archived' : 'active');
    return state === 'active';
  });
}

/**
 * Returns all publicly archived/historical/superseded/legacy/paused projects.
 */
export function getArchivedProjects(allProjects: Project[]): Project[] {
  return allProjects.filter((p) => {
    if (!isPublicProject(p)) return false;
    const state = p.archive?.state || (p.status === 'archived' ? 'archived' : 'active');
    return state === 'archived' || state === 'superseded' || state === 'legacy' || state === 'paused' || state === 'abandoned';
  });
}

/**
 * Returns superseded projects (projects replaced by newer architectures).
 */
export function getSupersededProjects(allProjects: Project[]): Project[] {
  return allProjects.filter((p) => isPublicProject(p) && p.archive?.state === 'superseded');
}

/**
 * Returns legacy system implementations.
 */
export function getLegacyProjects(allProjects: Project[]): Project[] {
  return allProjects.filter((p) => isPublicProject(p) && p.archive?.state === 'legacy');
}

/**
 * Returns completed historical projects preserved for engineering context.
 */
export function getCompletedHistoricalProjects(allProjects: Project[]): Project[] {
  return allProjects.filter((p) => isPublicProject(p) && p.archive?.state === 'archived');
}

/**
 * Returns paused or abandoned experimental projects.
 */
export function getPausedProjects(allProjects: Project[]): Project[] {
  return allProjects.filter((p) => isPublicProject(p) && (p.archive?.state === 'paused' || p.archive?.state === 'abandoned'));
}

/**
 * Generates an audit summary of the project archive catalog.
 */
export function getArchiveCatalogSummary(allProjects: Project[]): ArchiveCatalogSummary {
  let activeCount = 0;
  let archivedCount = 0;
  let supersededCount = 0;
  let legacyCount = 0;
  let pausedCount = 0;
  let unpublishedCount = 0;
  let excludedCount = 0;

  for (const p of allProjects) {
    const state = p.archive?.state || (p.status === 'archived' ? 'archived' : 'active');
    switch (state) {
      case 'active':
        activeCount++;
        break;
      case 'archived':
        archivedCount++;
        break;
      case 'superseded':
        supersededCount++;
        break;
      case 'legacy':
        legacyCount++;
        break;
      case 'paused':
      case 'abandoned':
        pausedCount++;
        break;
      case 'unpublished':
        unpublishedCount++;
        break;
      case 'excluded':
        excludedCount++;
        break;
    }
  }

  return {
    totalProjects: allProjects.length,
    activeCount,
    archivedCount,
    supersededCount,
    legacyCount,
    pausedCount,
    unpublishedCount,
    excludedCount,
  };
}

/**
 * Returns human-readable label for an ArchiveState.
 */
export function getArchiveStateBadge(state?: ArchiveState): { label: string; badgeClass: string; description: string } {
  switch (state) {
    case 'superseded':
      return {
        label: 'Superseded',
        badgeClass: 'badge-superseded',
        description: 'An evolved or successor implementation replaced this project.',
      };
    case 'legacy':
      return {
        label: 'Legacy System',
        badgeClass: 'badge-legacy',
        description: 'Preserved earlier architecture demonstrating foundational engineering.',
      };
    case 'paused':
      return {
        label: 'Paused',
        badgeClass: 'badge-paused',
        description: 'Development is intentionally suspended.',
      };
    case 'abandoned':
      return {
        label: 'Historical Experiment',
        badgeClass: 'badge-abandoned',
        description: 'Exploratory prototype preserved for research lessons.',
      };
    case 'archived':
      return {
        label: 'Archived',
        badgeClass: 'badge-archived',
        description: 'Completed historical project preserved as part of the engineering record.',
      };
    case 'unpublished':
      return {
        label: 'Internal Only',
        badgeClass: 'badge-internal',
        description: 'Internal record not surfaced in public catalog.',
      };
    case 'excluded':
      return {
        label: 'Excluded',
        badgeClass: 'badge-excluded',
        description: 'Excluded from public portfolio presentation.',
      };
    case 'active':
    default:
      return {
        label: 'Active / Current',
        badgeClass: 'badge-active',
        description: 'Current engineering platform or active research system.',
      };
  }
}

/**
 * Returns human-readable reason explanation.
 */
export function getArchiveReasonText(reason?: ArchiveReason): string {
  switch (reason) {
    case 'COMPLETED_HISTORICAL':
      return 'Completed project preserved as part of the historical engineering record.';
    case 'SUPERSEDED':
      return 'Superseded by a newer, more advanced architecture.';
    case 'LEGACY':
      return 'Represents an earlier technology stack or architectural foundation.';
    case 'PAUSED':
      return 'Active development is paused while prioritizing downstream initiatives.';
    case 'ABANDONED':
      return 'Initial exploration concluded; lessons documented in engineering notes.';
    case 'NO_LONGER_MAINTAINED':
      return 'Codebase exists but is no longer actively maintained.';
    case 'ACADEMIC_HISTORY':
      return 'Academic milestone deliverable preserving degree coursework or FYP history.';
    case 'EXPERIMENTAL_HISTORY':
      return 'Early technical exploration that informed subsequent systems.';
    case 'UNPUBLISHED':
      return 'Internal portfolio record.';
    case 'EXCLUDED':
      return 'Curated exclusion from public catalog.';
    default:
      return 'Preserved as part of the engineering history.';
  }
}
