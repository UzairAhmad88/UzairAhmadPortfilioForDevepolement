import type { GitHubEvidence } from '../../types/github.ts';
import type { Project } from '../../types/project.ts';
import type { ResearchItem } from '../../types/research.ts';
import type { LabItem } from '../../types/lab.ts';
import { baselineApiRepositories } from '../../data/github/repositories.ts';
import { getCurationByProjectSlug, getCurationByResearchSlug, getCurationByLabSlug } from '../../data/github/curation.ts';
import { normalizeRepository } from './normalizer.ts';

/**
 * Normalizes all baseline repositories into domain models
 */
const normalizedBaselineMap = new Map(
  baselineApiRepositories.map((r) => [
    r.full_name.toLowerCase(),
    normalizeRepository(r, 'CACHED_GITHUB', 'Verified'),
  ])
);

/**
 * Extracts verified GitHub evidence for a Project
 */
export function getProjectGitHubEvidence(project: Project): GitHubEvidence | null {
  if (project.repositoryStatus === 'private') {
    return null;
  }

  const curation = getCurationByProjectSlug(project.slug);
  const repoFullName = curation?.repositoryFullName || project.githubRepo;
  const projectTechs = project.technologies || [];

  if (!repoFullName) {
    if (project.githubUrl) {
      // Basic manual fallback if URL is provided
      return {
        repositoryUrl: project.githubUrl,
        repositoryName: project.title,
        fullName: project.title,
        public: true,
        archived: false,
        fork: false,
        lastVerifiedAt: project.repositoryUpdatedAt || new Date().toISOString(),
        readmeAvailable: true,
        defaultBranch: 'main',
        language: projectTechs[0] || 'Software',
        license: 'MIT License',
        topics: projectTechs,
        provenance: 'Manual',
        sourceType: 'MANUAL',
        codeUrl: project.githubUrl,
      };
    }
    return null;
  }

  const repo = normalizedBaselineMap.get(repoFullName.toLowerCase());
  if (repo) {
    return {
      repositoryUrl: repo.htmlUrl,
      repositoryName: repo.name,
      fullName: repo.fullName,
      public: repo.visibility === 'public',
      archived: repo.archived,
      fork: repo.fork,
      lastVerifiedAt: repo.pushedAt,
      readmeAvailable: repo.readmeAvailable,
      defaultBranch: repo.defaultBranch,
      language: repo.language,
      license: repo.license,
      topics: repo.topics,
      provenance: repo.provenance,
      sourceType: repo.sourceType,
      codeUrl: `${repo.htmlUrl}/tree/${repo.defaultBranch}`,
      releaseUrl: `${repo.htmlUrl}/releases`,
      issuesUrl: `${repo.htmlUrl}/issues`,
      commitsUrl: `${repo.htmlUrl}/commits/${repo.defaultBranch}`,
      description: repo.description,
    };
  }

  if (project.githubUrl) {
    return {
      repositoryUrl: project.githubUrl,
      repositoryName: repoFullName.split('/')[1] || repoFullName,
      fullName: repoFullName,
      public: true,
      archived: false,
      fork: false,
      lastVerifiedAt: project.repositoryUpdatedAt || new Date().toISOString(),
      readmeAvailable: true,
      defaultBranch: 'main',
      language: projectTechs[0] || 'Software',
      license: 'MIT License',
      topics: projectTechs,
      provenance: 'Cached',
      sourceType: 'CACHED_GITHUB',
      codeUrl: project.githubUrl,
    };
  }

  return null;
}

/**
 * Extracts verified GitHub evidence for a Research item
 */
export function getResearchGitHubEvidence(research: ResearchItem): GitHubEvidence | null {
  const curation = getCurationByResearchSlug(research.slug);
  if (!curation) {
    if (research.githubUrl) {
      return {
        repositoryUrl: research.githubUrl,
        repositoryName: research.title,
        fullName: research.title,
        public: true,
        archived: false,
        fork: false,
        lastVerifiedAt: research.updatedAt || new Date().toISOString(),
        readmeAvailable: true,
        defaultBranch: 'main',
        language: 'Python',
        license: 'MIT License',
        topics: ['quantitative-finance', 'research'],
        provenance: 'Manual',
        sourceType: 'MANUAL',
        codeUrl: research.githubUrl,
      };
    }
    return null;
  }

  const repo = normalizedBaselineMap.get(curation.repositoryFullName.toLowerCase());
  if (!repo) return null;

  return {
    repositoryUrl: repo.htmlUrl,
    repositoryName: repo.name,
    fullName: repo.fullName,
    public: repo.visibility === 'public',
    archived: repo.archived,
    fork: repo.fork,
    lastVerifiedAt: repo.pushedAt,
    readmeAvailable: repo.readmeAvailable,
    defaultBranch: repo.defaultBranch,
    language: repo.language,
    license: repo.license,
    topics: repo.topics,
    provenance: repo.provenance,
    sourceType: repo.sourceType,
    codeUrl: `${repo.htmlUrl}/tree/${repo.defaultBranch}`,
    releaseUrl: `${repo.htmlUrl}/releases`,
    issuesUrl: `${repo.htmlUrl}/issues`,
    commitsUrl: `${repo.htmlUrl}/commits/${repo.defaultBranch}`,
    description: repo.description,
  };
}

/**
 * Extracts verified GitHub evidence for a Lab item
 */
export function getLabGitHubEvidence(lab: LabItem): GitHubEvidence | null {
  const curation = getCurationByLabSlug(lab.slug);
  if (!curation) {
    return null;
  }

  const repo = normalizedBaselineMap.get(curation.repositoryFullName.toLowerCase());
  if (!repo) return null;

  return {
    repositoryUrl: repo.htmlUrl,
    repositoryName: repo.name,
    fullName: repo.fullName,
    public: repo.visibility === 'public',
    archived: repo.archived,
    fork: repo.fork,
    lastVerifiedAt: repo.pushedAt,
    readmeAvailable: repo.readmeAvailable,
    defaultBranch: repo.defaultBranch,
    language: repo.language,
    license: repo.license,
    topics: repo.topics,
    provenance: repo.provenance,
    sourceType: repo.sourceType,
    codeUrl: `${repo.htmlUrl}/tree/${repo.defaultBranch}`,
    releaseUrl: `${repo.htmlUrl}/releases`,
    issuesUrl: `${repo.htmlUrl}/issues`,
    commitsUrl: `${repo.htmlUrl}/commits/${repo.defaultBranch}`,
    description: repo.description,
  };
}
