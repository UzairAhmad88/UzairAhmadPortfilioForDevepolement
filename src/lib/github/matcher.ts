import type { NormalizedRepository, ProjectSourceMapping } from './types.ts';
import type { Project } from '../../types/project.ts';

// Explicit source mapping registry connecting repositories to portfolio project slugs
export const KNOWN_PROJECT_MAPPINGS: ProjectSourceMapping[] = [
  {
    githubRepo: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    portfolioSlug: 'deep-learning-stock-return-prediction',
    classification: 'RESEARCH',
    syncStatus: 'PUBLISHED',
  },
  {
    githubRepo: 'UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    portfolioSlug: 'market-regime-engine',
    classification: 'RESEARCH',
    syncStatus: 'PUBLISHED',
  },
  {
    githubRepo: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    portfolioSlug: 'curasphere-hms',
    vercelProjectName: 'curasphere-hms',
    liveUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    classification: 'PORTFOLIO',
    syncStatus: 'PUBLISHED',
  },
  {
    githubRepo: 'UzairAhmad88/Resturent-Managment-System---POS',
    portfolioSlug: 'restaurant-pos',
    classification: 'PORTFOLIO',
    syncStatus: 'PUBLISHED',
  },
  {
    githubRepo: 'UzairAhmad88/Hayatabad-Gym-BYMe',
    portfolioSlug: 'hayatabad-gym',
    classification: 'PORTFOLIO',
    syncStatus: 'PUBLISHED',
  },
  {
    githubRepo: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    portfolioSlug: 'portfolio-website',
    vercelProjectName: 'uzairahmad',
    liveUrl: 'https://uzairahmad.vercel.app',
    classification: 'PORTFOLIO',
    syncStatus: 'PUBLISHED',
  },
];

/**
 * Finds a matching portfolio project for a given GitHub repository
 */
export function findMatchingProject(
  repo: NormalizedRepository,
  curatedProjects: Project[]
): Project | undefined {
  // 1. Check explicit mapping
  const mapped = KNOWN_PROJECT_MAPPINGS.find(
    (m) => m.githubRepo.toLowerCase() === repo.fullName.toLowerCase()
  );

  if (mapped) {
    const project = curatedProjects.find((p) => p.slug === mapped.portfolioSlug);
    if (project) return project;
  }

  // 2. Match by exact or normalized GitHub URL
  const matchedByUrl = curatedProjects.find(
    (p) => p.githubUrl && p.githubUrl.toLowerCase() === repo.htmlUrl.toLowerCase()
  );
  if (matchedByUrl) return matchedByUrl;

  // 3. Match by slug similarity (case-insensitive alphanumeric match)
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
  repo: NormalizedRepository,
  project?: Project
): boolean {
  if (!project) return false;
  if (!project.repositoryUpdatedAt) return true;

  const repoPushedTime = new Date(repo.pushedAt).getTime();
  const projectSyncTime = new Date(project.repositoryUpdatedAt).getTime();

  return repoPushedTime > projectSyncTime;
}
