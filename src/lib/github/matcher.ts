import type { GitHubRepository } from '../../types/github.ts';
import type { Project } from '../../types/project.ts';
import { getCurationByRepo } from '../../data/github/curation.ts';

/**
 * Finds a matching portfolio project for a given GitHub repository
 */
export function findMatchingProject(
  repo: GitHubRepository,
  curatedProjects: Project[]
): Project | undefined {
  // 1. Check explicit curation mapping
  const curated = getCurationByRepo(repo.fullName);
  if (curated && curated.projectId) {
    const project = curatedProjects.find((p) => p.slug === curated.projectId);
    if (project) return project;
  }

  // 2. Match by exact or normalized GitHub URL
  const matchedByUrl = curatedProjects.find(
    (p) => p.githubUrl && p.githubUrl.toLowerCase() === repo.htmlUrl.toLowerCase()
  );
  if (matchedByUrl) return matchedByUrl;

  // 3. Match by explicit githubRepo property
  const matchedByRepoName = curatedProjects.find(
    (p) => p.githubRepo && p.githubRepo.toLowerCase() === repo.fullName.toLowerCase()
  );
  if (matchedByRepoName) return matchedByRepoName;

  // 4. Safe slug similarity match (alphanumeric only)
  const normalizedRepoName = repo.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  return curatedProjects.find((p) => {
    const normalizedSlug = p.slug.toLowerCase().replace(/[^a-z0-9]/g, '');
    return (
      normalizedRepoName.includes(normalizedSlug) ||
      normalizedSlug.includes(normalizedRepoName)
    );
  });
}

/**
 * Checks if a GitHub repository has received newer pushed commits than the stored project record
 */
export function isUpdateAvailable(
  repo: GitHubRepository,
  project?: Project
): boolean {
  if (!project) return false;
  if (!project.repositoryUpdatedAt) return true;

  const repoPushedTime = new Date(repo.pushedAt).getTime();
  const projectSyncTime = new Date(project.repositoryUpdatedAt).getTime();

  return repoPushedTime > projectSyncTime;
}
