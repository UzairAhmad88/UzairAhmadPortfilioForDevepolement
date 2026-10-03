import type { GitHubRepository } from '../../types/github.ts';
import type { Project } from '../../types/project.ts';
import { gitHubCurationEntries } from '../../data/github/curation.ts';
import { isValidExternalUrl } from './normalizer.ts';

export interface ValidationIssue {
  type: 'error' | 'warning' | 'info';
  field: string;
  message: string;
  repository?: string;
}

export interface ValidationReport {
  valid: boolean;
  issues: ValidationIssue[];
  curationCount: number;
  verifiedMappingsCount: number;
}

/**
 * Validates curation mappings and repository records against active portfolio projects
 */
export function validateGitHubIntegrity(
  repositories: GitHubRepository[],
  projects: Project[]
): ValidationReport {
  const issues: ValidationIssue[] = [];
  const projectSlugs = new Set(projects.map((p) => p.slug));
  const repoNames = new Set(repositories.map((r) => r.fullName.toLowerCase()));

  // 1. Validate curation mappings
  let verifiedMappingsCount = 0;
  for (const curation of gitHubCurationEntries) {
    if (!curation.repositoryFullName) {
      issues.push({
        type: 'error',
        field: 'repositoryFullName',
        message: 'Curation entry is missing repositoryFullName.',
      });
      continue;
    }

    if (!repoNames.has(curation.repositoryFullName.toLowerCase())) {
      issues.push({
        type: 'warning',
        field: 'repositoryFullName',
        message: `Curated repository "${curation.repositoryFullName}" is not found in discovered/baseline repositories.`,
        repository: curation.repositoryFullName,
      });
    }

    if (curation.projectId && !projectSlugs.has(curation.projectId)) {
      issues.push({
        type: 'error',
        field: 'projectId',
        message: `Curated projectId "${curation.projectId}" does not match any existing project slug.`,
        repository: curation.repositoryFullName,
      });
    } else if (curation.projectId) {
      verifiedMappingsCount++;
    }
  }

  // 2. Validate repository URLs and structures
  for (const repo of repositories) {
    if (!isValidExternalUrl(repo.htmlUrl)) {
      issues.push({
        type: 'error',
        field: 'htmlUrl',
        message: `Invalid external repository URL: "${repo.htmlUrl}"`,
        repository: repo.fullName,
      });
    }

    if (repo.homepage && !isValidExternalUrl(repo.homepage)) {
      issues.push({
        type: 'warning',
        field: 'homepage',
        message: `Invalid homepage URL format: "${repo.homepage}"`,
        repository: repo.fullName,
      });
    }

    if (!repo.name || !repo.fullName) {
      issues.push({
        type: 'error',
        field: 'name',
        message: 'Repository is missing name or full_name identifier.',
        repository: repo.fullName,
      });
    }
  }

  const hasErrors = issues.some((i) => i.type === 'error');

  return {
    valid: !hasErrors,
    issues,
    curationCount: gitHubCurationEntries.length,
    verifiedMappingsCount,
  };
}
