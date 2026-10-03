/**
 * PROJECT SYNC IDENTITY MODULE
 * Phase 17 — Unified Project Identity Normalization
 */

import type { ProjectIdentity, ProjectLifecycleState, MappingStatus } from '../../types/projectSync.ts';
import type { Project } from '../../types/project.ts';
import { getProjectSyncCuration } from '../../data/projectSync/curation.ts';

export interface BuildProjectIdentityOptions {
  project: Project;
  githubRepoFullName?: string;
  githubRepoId?: string | number;
  vercelProjectId?: string;
  primaryProductionDeploymentId?: string;
}

/**
 * Builds a canonical ProjectIdentity combining curated, GitHub, and Vercel attributes.
 */
export function buildProjectIdentity(options: BuildProjectIdentityOptions): ProjectIdentity {
  const { project } = options;
  const projId = project.id || project.slug;
  const curation = getProjectSyncCuration(projId);

  const githubRepositoryFullName =
    curation?.githubRepositoryFullName || options.githubRepoFullName || project.githubRepo;

  const githubRepositoryId = curation?.githubRepositoryId || options.githubRepoId;

  const vercelProjectId = curation?.vercelProjectId || options.vercelProjectId;

  const liveUrl = curation?.preferredLiveUrl || project.liveUrl;
  const repositoryUrl = project.githubUrl;

  let mappingStatus: MappingStatus = 'UNMATCHED';
  if (curation) {
    mappingStatus = 'VERIFIED';
  } else if (githubRepositoryFullName || vercelProjectId) {
    mappingStatus = 'SUGGESTED';
  }

  let lifecycleState: ProjectLifecycleState = 'CURATED';
  if (project.status === 'active') {
    lifecycleState = 'PUBLISHED';
  } else if (project.status === 'academic') {
    lifecycleState = 'PUBLISHED';
  } else if (project.status === 'completed') {
    lifecycleState = 'PUBLISHED';
  }

  return {
    projectId: projId,
    projectSlug: project.slug,
    title: project.title,
    githubRepositoryId,
    githubRepositoryFullName,
    vercelProjectId,
    primaryProductionDeploymentId: options.primaryProductionDeploymentId,
    liveUrl,
    repositoryUrl,
    lifecycleState,
    mappingStatus,
  };
}
