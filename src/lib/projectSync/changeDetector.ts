/**
 * PROJECT SYNC CHANGE DETECTOR MODULE
 * Phase 17 — Detection of Incoming Differences from GitHub and Vercel
 */

import type { ProjectChangeSet, SyncConflict } from '../../types/projectSync.ts';
import type { GitHubRepository } from '../../types/github.ts';
import type { VercelProject } from '../../types/vercel.ts';
import type { Project } from '../../types/project.ts';
import { matchProjectEvidence } from './matcher.ts';

export function detectProjectChanges(
  projects: Project[],
  cachedGithubRepos: GitHubRepository[],
  incomingGithubRepos: GitHubRepository[],
  cachedVercelProjects: VercelProject[],
  incomingVercelProjects: VercelProject[],
  conflicts: SyncConflict[] = []
): ProjectChangeSet {
  const newGithubRepos: string[] = [];
  const changedGithubRepos: string[] = [];
  const newVercelProjects: string[] = [];
  const changedVercelDeployments: string[] = [];
  const potentialMappings: ProjectChangeSet['potentialMappings'] = [];

  // 1. Detect New & Changed GitHub Repositories
  const cachedRepoNames = new Set(cachedGithubRepos.map((r) => r.fullName.toLowerCase()));
  for (const incoming of incomingGithubRepos) {
    if (!cachedRepoNames.has(incoming.fullName.toLowerCase())) {
      newGithubRepos.push(incoming.fullName);
    } else {
      const cached = cachedGithubRepos.find(
        (r) => r.fullName.toLowerCase() === incoming.fullName.toLowerCase()
      );
      if (
        cached &&
        (cached.description !== incoming.description ||
          cached.language !== incoming.language ||
          cached.archived !== incoming.archived ||
          cached.pushedAt !== incoming.pushedAt)
      ) {
        changedGithubRepos.push(incoming.fullName);
      }
    }
  }

  // 2. Detect New & Changed Vercel Projects
  const cachedVercelNames = new Set(cachedVercelProjects.map((v) => v.name.toLowerCase()));
  for (const incoming of incomingVercelProjects) {
    if (!cachedVercelNames.has(incoming.name.toLowerCase())) {
      newVercelProjects.push(incoming.name);
    } else {
      const cached = cachedVercelProjects.find(
        (v) => v.name.toLowerCase() === incoming.name.toLowerCase()
      );
      if (
        cached &&
        cached.productionDeployment?.url !== incoming.productionDeployment?.url
      ) {
        changedVercelDeployments.push(incoming.name);
      }
    }
  }

  // 3. Propose Potential Mappings for Unmapped Projects
  for (const project of projects) {
    const match = matchProjectEvidence(project, incomingGithubRepos, incomingVercelProjects);
    if (match.status === 'SUGGESTED') {
      potentialMappings.push({
        projectId: project.id || project.slug,
        suggestedRepo: match.matchedGitHubRepo,
        suggestedVercel: match.matchedVercelProject,
        confidence: match.confidence,
        reason: match.reason,
      });
    }
  }

  return {
    newGithubRepos,
    changedGithubRepos,
    newVercelProjects,
    changedVercelDeployments,
    conflictsFound: conflicts,
    potentialMappings,
  };
}
