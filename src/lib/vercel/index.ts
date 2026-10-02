export type VercelDeploymentStatus = 'READY' | 'BUILDING' | 'ERROR' | 'CANCELED' | 'UNKNOWN';

export interface VercelProject {
  id: string;
  name: string;
  framework: string | null;
  latestDeployments?: Array<{
    id: string;
    url: string;
    readyState: VercelDeploymentStatus;
    createdAt: number;
  }>;
  targets?: {
    production?: {
      id: string;
      url: string;
      readyState: VercelDeploymentStatus;
      createdAt: number;
    };
  };
  link?: {
    type: 'github' | 'gitlab' | 'bitbucket';
    repo: string;
    repoId: number;
    org?: string;
  };
}

export interface VerifiedVercelDeployment {
  projectName: string;
  productionUrl: string;
  status: VercelDeploymentStatus;
  lastDeployedAt?: string;
  matchedGitHubRepo?: string;
}

// Known verified Vercel deployments
export const KNOWN_VERCEL_DEPLOYMENTS: VerifiedVercelDeployment[] = [
  {
    projectName: 'uzairahmad',
    productionUrl: 'https://uzairahmad.vercel.app',
    status: 'READY',
    matchedGitHubRepo: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
  },
  {
    projectName: 'curasphere-hms',
    productionUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    status: 'READY',
    matchedGitHubRepo: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
  },
];

/**
 * Finds a matching verified Vercel deployment for a given GitHub repository or portfolio slug
 */
export function findVercelDeployment(
  githubRepoFullName?: string,
  portfolioSlug?: string
): VerifiedVercelDeployment | undefined {
  if (githubRepoFullName) {
    const matched = KNOWN_VERCEL_DEPLOYMENTS.find(
      (d) => d.matchedGitHubRepo?.toLowerCase() === githubRepoFullName.toLowerCase()
    );
    if (matched) return matched;
  }

  if (portfolioSlug) {
    const matchedBySlug = KNOWN_VERCEL_DEPLOYMENTS.find(
      (d) => d.projectName.toLowerCase() === portfolioSlug.toLowerCase()
    );
    if (matchedBySlug) return matchedBySlug;
  }

  return undefined;
}
