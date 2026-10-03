/**
 * VERCEL MATCHER MODULE
 * Phase 16 — Intelligent Mapping between Vercel Projects and Portfolio Entities
 */

import type { VercelProject, VercelMatchingResult } from '../../types/vercel.ts';
import { vercelCurationRegistry } from '../../data/vercel/curation.ts';

export interface MatchingContext {
  portfolioProjects?: Array<{ id: string; slug: string; githubRepo?: string }>;
  researchItems?: Array<{ id: string; slug: string; githubRepo?: string }>;
  labItems?: Array<{ id: string; slug: string; githubRepo?: string }>;
}

/**
 * Matches a Vercel project against portfolio entities using deterministic evidence hierarchy.
 */
export function matchVercelProject(
  vercelProject: VercelProject,
  context: MatchingContext = {}
): VercelMatchingResult {
  // 1. First Priority: Human-verified curation mapping
  const curated = vercelCurationRegistry.find(
    (c) =>
      c.vercelProjectId === vercelProject.id ||
      c.vercelProjectName.toLowerCase() === vercelProject.name.toLowerCase()
  );

  if (curated && curated.publish) {
    return {
      matchStatus: 'VERIFIED_MATCH',
      vercelProjectName: vercelProject.name,
      vercelProjectId: vercelProject.id,
      matchedPortfolioSlug: curated.portfolioProjectId,
      matchedResearchId: curated.researchId,
      matchedLabId: curated.labId,
      matchedGitHubRepo: curated.gitRepository || vercelProject.gitRepository,
      reason: 'Verified in central curation registry with human confirmation.',
      confidence: 1.0,
    };
  }

  // 2. Second Priority: Git repository exact match
  if (vercelProject.gitRepository && context.portfolioProjects) {
    const matchedProject = context.portfolioProjects.find(
      (p) => p.githubRepo && p.githubRepo.toLowerCase() === vercelProject.gitRepository?.toLowerCase()
    );
    if (matchedProject) {
      return {
        matchStatus: 'SUGGESTED_MATCH',
        vercelProjectName: vercelProject.name,
        vercelProjectId: vercelProject.id,
        matchedPortfolioSlug: matchedProject.slug,
        matchedGitHubRepo: vercelProject.gitRepository,
        reason: `Matched via linked GitHub repository: ${vercelProject.gitRepository}`,
        confidence: 0.85,
      };
    }
  }

  // 3. Third Priority: Direct slug/name exact match
  if (context.portfolioProjects) {
    const slugMatch = context.portfolioProjects.find(
      (p) =>
        p.slug.toLowerCase() === vercelProject.name.toLowerCase() ||
        p.id.toLowerCase() === vercelProject.name.toLowerCase()
    );
    if (slugMatch) {
      return {
        matchStatus: 'SUGGESTED_MATCH',
        vercelProjectName: vercelProject.name,
        vercelProjectId: vercelProject.id,
        matchedPortfolioSlug: slugMatch.slug,
        reason: `Matched by project identifier/slug exact name: ${slugMatch.slug}`,
        confidence: 0.75,
      };
    }
  }

  // 4. Lab item check
  if (context.labItems) {
    const labMatch = context.labItems.find(
      (l) =>
        l.slug.toLowerCase() === vercelProject.name.toLowerCase() ||
        l.id.toLowerCase() === vercelProject.name.toLowerCase()
    );
    if (labMatch) {
      return {
        matchStatus: 'SUGGESTED_MATCH',
        vercelProjectName: vercelProject.name,
        vercelProjectId: vercelProject.id,
        matchedLabId: labMatch.id,
        reason: `Matched by Lab experiment ID: ${labMatch.id}`,
        confidence: 0.7,
      };
    }
  }

  // 5. Unmatched
  return {
    matchStatus: 'UNMATCHED',
    vercelProjectName: vercelProject.name,
    vercelProjectId: vercelProject.id,
    reason: 'No corresponding portfolio project, research study, or lab experiment verified.',
    confidence: 0,
  };
}
