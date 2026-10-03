/**
 * VERCEL EVIDENCE ENGINE MODULE
 * Phase 16 — Evidence Resolution and Integration
 *
 * Core Principle:
 * - Evidence confirms deployment existence and provenance.
 * - Never transforms deployment state into qualitative/performance claims.
 */

import type { VercelEvidence, VercelProvenanceState } from '../../types/vercel.ts';
import { cachedVercelProjects } from '../../data/vercel/projects.ts';
import { vercelCurationRegistry } from '../../data/vercel/curation.ts';
import { validateDeploymentUrl } from './validator.ts';

/**
 * Resolves verified Vercel deployment evidence for a portfolio project.
 */
export function getVercelEvidenceForProject(
  projectSlugOrId?: string,
  githubRepo?: string
): VercelEvidence | undefined {
  if (!projectSlugOrId && !githubRepo) return undefined;

  // 1. Check human-curated registry first
  const curated = vercelCurationRegistry.find((c) => {
    if (!c.publish) return false;
    if (
      projectSlugOrId &&
      c.portfolioProjectId &&
      (c.portfolioProjectId.toLowerCase() === projectSlugOrId.toLowerCase() ||
        c.portfolioProjectId.toLowerCase() === projectSlugOrId.replace(/-/g, '').toLowerCase())
    ) {
      return true;
    }
    if (githubRepo && c.gitRepository && c.gitRepository.toLowerCase() === githubRepo.toLowerCase()) {
      return true;
    }
    return false;
  });

  if (curated) {
    const cachedProj = cachedVercelProjects.find(
      (p) => p.id === curated.vercelProjectId || p.name === curated.vercelProjectName
    );

    const deploymentUrl = curated.preferredDeploymentUrl || cachedProj?.productionDeployment?.url || '';
    if (!deploymentUrl || !validateDeploymentUrl(deploymentUrl).valid) {
      return undefined;
    }

    const state = cachedProj?.productionDeployment?.state || 'READY';
    const provenance: VercelProvenanceState = cachedProj?.source === 'LIVE_VERCEL' ? 'LIVE_VERIFIED' : 'CACHED';

    return {
      projectName: curated.vercelProjectName,
      deploymentUrl,
      production: curated.target === 'production',
      target: curated.target,
      deploymentState: state,
      framework: cachedProj?.framework || null,
      environment: curated.target,
      provenance,
      lastVerifiedAt: curated.verifiedAt,
      source: 'CURATED',
      matchedPortfolioSlug: curated.portfolioProjectId,
      matchedGitHubRepo: curated.gitRepository || cachedProj?.gitRepository,
      gitBranch: cachedProj?.productionDeployment?.gitSource?.branch,
      gitCommit: cachedProj?.productionDeployment?.gitSource?.commitSha,
      isCustomDomain: !deploymentUrl.includes('.vercel.app') && !deploymentUrl.includes('vercel.com'),
      evidenceChainNotes: curated.notes,
    };
  }

  // 2. Check cached projects by git repo or name
  if (githubRepo) {
    const repoMatch = cachedVercelProjects.find(
      (p) => p.gitRepository?.toLowerCase() === githubRepo.toLowerCase()
    );
    if (repoMatch && repoMatch.productionDeployment) {
      const dep = repoMatch.productionDeployment;
      if (validateDeploymentUrl(dep.url).valid) {
        return {
          projectName: repoMatch.name,
          deploymentUrl: dep.url,
          production: dep.target === 'production',
          target: dep.target,
          deploymentState: dep.state,
          framework: repoMatch.framework,
          environment: dep.environment,
          provenance: repoMatch.source === 'LIVE_VERCEL' ? 'LIVE_VERIFIED' : 'CACHED',
          lastVerifiedAt: repoMatch.fetchedAt,
          source: repoMatch.source,
          matchedGitHubRepo: repoMatch.gitRepository,
          gitBranch: dep.gitSource?.branch,
          gitCommit: dep.gitSource?.commitSha,
          isCustomDomain: !dep.url.includes('.vercel.app') && !dep.url.includes('vercel.com'),
        };
      }
    }
  }

  return undefined;
}

/**
 * Resolves verified deployment evidence for a Research study.
 */
export function getVercelEvidenceForResearch(researchId?: string): VercelEvidence | undefined {
  if (!researchId) return undefined;

  const curated = vercelCurationRegistry.find((c) => c.researchId === researchId && c.publish);
  if (!curated) return undefined;

  const cachedProj = cachedVercelProjects.find(
    (p) => p.id === curated.vercelProjectId || p.name === curated.vercelProjectName
  );

  const deploymentUrl = curated.preferredDeploymentUrl || cachedProj?.productionDeployment?.url || '';
  if (!deploymentUrl || !validateDeploymentUrl(deploymentUrl).valid) {
    return undefined;
  }

  return {
    projectName: curated.vercelProjectName,
    deploymentUrl,
    production: curated.target === 'production',
    target: curated.target,
    deploymentState: cachedProj?.productionDeployment?.state || 'READY',
    framework: cachedProj?.framework || null,
    environment: curated.target,
    provenance: 'CACHED',
    lastVerifiedAt: curated.verifiedAt,
    source: 'CURATED',
    matchedResearchId: researchId,
    matchedGitHubRepo: curated.gitRepository,
    isCustomDomain: !deploymentUrl.includes('.vercel.app'),
    evidenceChainNotes: curated.notes,
  };
}

/**
 * Resolves verified deployment evidence for a Lab experiment.
 */
export function getVercelEvidenceForLab(labId?: string): VercelEvidence | undefined {
  if (!labId) return undefined;

  const curated = vercelCurationRegistry.find((c) => c.labId === labId && c.publish);
  if (!curated) return undefined;

  const cachedProj = cachedVercelProjects.find(
    (p) => p.id === curated.vercelProjectId || p.name === curated.vercelProjectName
  );

  const deploymentUrl = curated.preferredDeploymentUrl || cachedProj?.productionDeployment?.url || '';
  if (!deploymentUrl || !validateDeploymentUrl(deploymentUrl).valid) {
    return undefined;
  }

  return {
    projectName: curated.vercelProjectName,
    deploymentUrl,
    production: curated.target === 'production',
    target: curated.target,
    deploymentState: cachedProj?.productionDeployment?.state || 'READY',
    framework: cachedProj?.framework || null,
    environment: curated.target,
    provenance: 'CACHED',
    lastVerifiedAt: curated.verifiedAt,
    source: 'CURATED',
    matchedLabId: labId,
    matchedGitHubRepo: curated.gitRepository,
    isCustomDomain: !deploymentUrl.includes('.vercel.app'),
    evidenceChainNotes: curated.notes,
  };
}

/**
 * Returns all verified deployment evidence records across the platform.
 */
export function getAllVercelEvidence(): VercelEvidence[] {
  const evidenceList: VercelEvidence[] = [];

  for (const entry of vercelCurationRegistry) {
    if (!entry.publish) continue;
    if (entry.portfolioProjectId) {
      const ev = getVercelEvidenceForProject(entry.portfolioProjectId, entry.gitRepository);
      if (ev) evidenceList.push(ev);
    } else if (entry.labId) {
      const ev = getVercelEvidenceForLab(entry.labId);
      if (ev) evidenceList.push(ev);
    } else if (entry.researchId) {
      const ev = getVercelEvidenceForResearch(entry.researchId);
      if (ev) evidenceList.push(ev);
    }
  }

  return evidenceList;
}
