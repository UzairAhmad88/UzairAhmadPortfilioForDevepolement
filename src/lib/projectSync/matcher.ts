/**
 * PROJECT SYNC MATCHER MODULE
 * Phase 17 — Multi-Level Project Matching Engine
 *
 * Matching Hierarchy:
 * - Level 1: Human-curated mapping registry
 * - Level 2: Stable external ID
 * - Level 3: Verified repository URL
 * - Level 4: Verified deployment URL
 * - Level 5: GitHub / Vercel relationship link
 * - Level 6: Name similarity suggestion (NEVER auto-verified)
 */

import type { MatchConfidence, MappingStatus } from '../../types/projectSync.ts';
import type { Project } from '../../types/project.ts';
import type { GitHubRepository } from '../../types/github.ts';
import type { VercelProject } from '../../types/vercel.ts';
import { getProjectSyncCuration } from '../../data/projectSync/curation.ts';

export interface MatchResult {
  status: MappingStatus;
  confidence: MatchConfidence;
  matchLevel: number;
  matchedGitHubRepo?: string;
  matchedVercelProject?: string;
  reason: string;
}

export function matchProjectEvidence(
  project: Project,
  githubRepos: GitHubRepository[] = [],
  vercelProjects: VercelProject[] = []
): MatchResult {
  // LEVEL 1: Explicit human-curated mapping
  const curated = getProjectSyncCuration(project.id || project.slug);
  if (curated) {
    return {
      status: 'VERIFIED',
      confidence: 'EXACT',
      matchLevel: 1,
      matchedGitHubRepo: curated.githubRepositoryFullName,
      matchedVercelProject: curated.vercelProjectName,
      reason: 'Verified in central project sync curation registry with human confirmation.',
    };
  }

  // LEVEL 2: Direct GitHub Repo property match
  if (project.githubRepo) {
    const directRepo = githubRepos.find(
      (r) => r.fullName.toLowerCase() === project.githubRepo?.toLowerCase()
    );
    if (directRepo) {
      return {
        status: 'VERIFIED',
        confidence: 'EXACT',
        matchLevel: 2,
        matchedGitHubRepo: directRepo.fullName,
        reason: `Matched by explicit project.githubRepo declaration: ${directRepo.fullName}`,
      };
    }
  }

  // LEVEL 3: Verified repository URL matching
  if (project.githubUrl) {
    const urlMatch = githubRepos.find(
      (r) => r.htmlUrl.toLowerCase() === project.githubUrl?.toLowerCase()
    );
    if (urlMatch) {
      return {
        status: 'VERIFIED',
        confidence: 'STRONG',
        matchLevel: 3,
        matchedGitHubRepo: urlMatch.fullName,
        reason: `Matched by project.githubUrl exact match: ${urlMatch.htmlUrl}`,
      };
    }
  }

  // LEVEL 4: Verified deployment URL matching
  if (project.liveUrl) {
    const vercelMatch = vercelProjects.find(
      (v) =>
        v.productionDeployment?.url?.toLowerCase() === project.liveUrl?.toLowerCase() ||
        v.domains.some((d) => project.liveUrl?.toLowerCase().includes(d.toLowerCase()))
    );
    if (vercelMatch) {
      return {
        status: 'SUGGESTED',
        confidence: 'STRONG',
        matchLevel: 4,
        matchedVercelProject: vercelMatch.name,
        matchedGitHubRepo: vercelMatch.gitRepository,
        reason: `Matched via linked Vercel production domain: ${vercelMatch.name}`,
      };
    }
  }

  // LEVEL 5: GitHub / Vercel relationship link
  for (const v of vercelProjects) {
    if (v.gitRepository && project.githubRepo) {
      if (v.gitRepository.toLowerCase() === project.githubRepo.toLowerCase()) {
        return {
          status: 'SUGGESTED',
          confidence: 'STRONG',
          matchLevel: 5,
          matchedVercelProject: v.name,
          matchedGitHubRepo: v.gitRepository,
          reason: `Matched via Vercel linked repository relationship: ${v.gitRepository}`,
        };
      }
    }
  }

  // LEVEL 6: Name similarity suggestion
  const cleanProjectName = project.slug.replace(/[-_]/g, '').toLowerCase();
  for (const r of githubRepos) {
    const cleanRepoName = r.name.replace(/[-_]/g, '').toLowerCase();
    if (cleanRepoName.includes(cleanProjectName) || cleanProjectName.includes(cleanRepoName)) {
      return {
        status: 'SUGGESTED',
        confidence: 'POSSIBLE',
        matchLevel: 6,
        matchedGitHubRepo: r.fullName,
        reason: `Suggested based on name similarity between ${project.slug} and ${r.name}. Requires human verification.`,
      };
    }
  }

  return {
    status: 'UNMATCHED',
    confidence: 'AMBIGUOUS',
    matchLevel: 0,
    reason: 'No corresponding external repository or deployment verified.',
  };
}
