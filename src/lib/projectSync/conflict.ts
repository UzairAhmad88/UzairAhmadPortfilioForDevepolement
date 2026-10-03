/**
 * PROJECT SYNC CONFLICT ENGINE MODULE
 * Phase 17 — Detection of Data Inconsistencies and Misaligned Mappings
 */

import type { SyncConflict, ProjectSyncCurationEntry } from '../../types/projectSync.ts';
import type { Project } from '../../types/project.ts';
import type { GitHubRepository } from '../../types/github.ts';
import type { VercelProject } from '../../types/vercel.ts';

export function detectProjectSyncConflicts(
  projects: Project[],
  curations: ProjectSyncCurationEntry[],
  _githubRepos: GitHubRepository[],
  vercelProjects: VercelProject[]
): SyncConflict[] {
  const conflicts: SyncConflict[] = [];
  const now = new Date().toISOString();

  // 1. Check for Duplicate Repository Mappings
  const repoToProjects = new Map<string, string[]>();
  for (const c of curations) {
    if (c.githubRepositoryFullName) {
      const lower = c.githubRepositoryFullName.toLowerCase();
      const existing = repoToProjects.get(lower) || [];
      existing.push(c.projectId);
      repoToProjects.set(lower, existing);
    }
  }

  for (const [repo, projectIds] of repoToProjects.entries()) {
    if (projectIds.length > 1) {
      conflicts.push({
        id: `conf_dup_${repo.replace(/[^a-z0-9]/gi, '_')}`,
        type: 'DUPLICATE_MAPPING',
        projectId: projectIds.join(', '),
        description: `Multiple portfolio projects (${projectIds.join(', ')}) are mapped to the same GitHub repository: ${repo}`,
        requiresHumanReview: true,
        severity: 'WARNING',
        detectedAt: now,
      });
    }
  }

  // 2. Check for GitHub / Vercel Repository Mismatch
  for (const c of curations) {
    if (c.githubRepositoryFullName && c.vercelProjectName) {
      const vercelProj = vercelProjects.find(
        (v) => v.name.toLowerCase() === c.vercelProjectName?.toLowerCase()
      );
      if (vercelProj && vercelProj.gitRepository) {
        if (vercelProj.gitRepository.toLowerCase() !== c.githubRepositoryFullName.toLowerCase()) {
          conflicts.push({
            id: `conf_mismatch_${c.projectId}`,
            type: 'REPO_MISMATCH',
            projectId: c.projectId,
            description: `Project ${c.projectId} is mapped to GitHub repo '${c.githubRepositoryFullName}', but Vercel project '${c.vercelProjectName}' is linked to '${vercelProj.gitRepository}'.`,
            requiresHumanReview: true,
            severity: 'CRITICAL',
            detectedAt: now,
          });
        }
      }
    }
  }

  // 3. Check for Insecure or Inconsistent URLs
  for (const p of projects) {
    const projId = p.id || p.slug;
    if (p.liveUrl && p.liveUrl.startsWith('http://')) {
      conflicts.push({
        id: `conf_url_${projId}`,
        type: 'URL_INCONSISTENCY',
        projectId: projId,
        description: `Project ${p.title} specifies an insecure HTTP liveUrl: ${p.liveUrl}`,
        requiresHumanReview: true,
        severity: 'WARNING',
        detectedAt: now,
      });
    }
  }

  // 4. Check for Deployment State Conflicts
  for (const c of curations) {
    if (c.publishDeploymentEvidence && c.vercelProjectName) {
      const vercelProj = vercelProjects.find(
        (v) => v.name.toLowerCase() === c.vercelProjectName?.toLowerCase()
      );
      if (vercelProj?.productionDeployment?.state === 'ERROR') {
        conflicts.push({
          id: `conf_state_${c.projectId}`,
          type: 'STATE_CONFLICT',
          projectId: c.projectId,
          description: `Project ${c.projectId} has published deployment evidence, but Vercel reports state ERROR.`,
          requiresHumanReview: true,
          severity: 'CRITICAL',
          detectedAt: now,
        });
      }
    }
  }

  return conflicts;
}
