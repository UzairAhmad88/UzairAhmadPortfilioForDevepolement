import type { Project } from '../../types/project.ts';
import type { NormalizedRepository, RepositorySyncResult, SyncReport, SyncStatus } from './types.ts';
import { listGithubRepositories } from './client.ts';
import { findMatchingProject, isUpdateAvailable } from './matcher.ts';
import { findVercelDeployment } from '../vercel/index.ts';

/**
 * Runs the project synchronization diff between GitHub repositories, Vercel deployments,
 * and curated portfolio projects in memory.
 */
export async function runProjectSync(
  curatedProjects: Project[],
  options: { githubToken?: string; dryRun?: boolean } = {}
): Promise<SyncReport> {
  const { repositories } = await listGithubRepositories('UzairAhmad88', options.githubToken);

  const results: RepositorySyncResult[] = [];
  let publishedCount = 0;
  let updateAvailableCount = 0;
  let newDiscoveredCount = 0;
  let unchangedCount = 0;

  for (const repo of repositories) {
    const matchedProject = findMatchingProject(repo, curatedProjects);
    const vercelMatch = findVercelDeployment(repo.fullName, matchedProject?.slug);

    let syncStatus: SyncStatus = 'DISCOVERED';
    let requiresReview = false;
    let updateDetails: string | undefined;

    if (matchedProject) {
      if (isUpdateAvailable(repo, matchedProject)) {
        syncStatus = 'UPDATE_AVAILABLE';
        updateAvailableCount++;
        updateDetails = `Newer commit detected on GitHub (${repo.pushedAt.slice(0, 10)})`;
      } else {
        syncStatus = 'UNCHANGED';
        unchangedCount++;
      }
      publishedCount++;
    } else {
      syncStatus = 'DISCOVERED';
      newDiscoveredCount++;
      requiresReview = true;
      updateDetails = `New repository discovered: ${repo.name}`;
    }

    results.push({
      repository: repo,
      syncStatus,
      matchedProjectSlug: matchedProject?.slug,
      possibleVercelDeployment: vercelMatch?.productionUrl,
      updateDetails,
      requiresReview,
    });
  }

  return {
    timestamp: new Date().toISOString(),
    totalDiscovered: repositories.length,
    publishedCount,
    updateAvailableCount,
    newDiscoveredCount,
    unchangedCount,
    results,
  };
}

/**
 * Generates markdown documentation report from a sync execution
 */
export function generateSyncMarkdownReport(report: SyncReport): string {
  const lines: string[] = [
    '# GitHub & Vercel Project Synchronization Report',
    '',
    `**Execution Timestamp**: ${report.timestamp}  `,
    `**Total Repositories Discovered**: ${report.totalDiscovered}  `,
    `**Published Portfolio Projects**: ${report.publishedCount}  `,
    `**Updates Available**: ${report.updateAvailableCount}  `,
    `**New Repositories Discovered**: ${report.newDiscoveredCount}  `,
    '',
    '---',
    '',
    '## Repository Status Table',
    '',
    '| Repository Name | Classification | Matched Project | Vercel Deployment | Sync Status | Action Needed |',
    '| :--- | :--- | :--- | :--- | :--- | :--- |',
  ];

  for (const res of report.results) {
    const matched = res.matchedProjectSlug ? `[\`${res.matchedProjectSlug}\`](/work/${res.matchedProjectSlug})` : '—';
    const vercel = res.possibleVercelDeployment ? `[Vercel ↗](${res.possibleVercelDeployment})` : '—';
    const action = res.requiresReview ? '**Review & Curate**' : res.syncStatus === 'UPDATE_AVAILABLE' ? 'Metadata Update' : 'None';

    lines.push(
      `| \`${res.repository.name}\` | ${res.repository.classification} | ${matched} | ${vercel} | **${res.syncStatus}** | ${action} |`
    );
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Data Governance Note');
  lines.push('- **Curated Content Protected**: Syncing NEVER overwrites manual case study narrative, architecture diagrams, or trade-offs.');
  lines.push('- **No Auto-Publishing**: Newly discovered repositories remain in `DISCOVERED` status until explicitly curated.');

  return lines.join('\n');
}

/**
 * Generates an un-published project draft scaffold for a newly discovered repository
 */
export function generateProjectDraftScaffold(repo: NormalizedRepository): string {
  const slug = repo.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  return `// DRAFT SCAFFOLD - NOT YET PUBLISHED
import type { Project } from '@/types/project';

export const ${slug.replace(/-/g, '_')}: Project = {
  id: '${slug}',
  slug: '${slug}',
  title: '${repo.name.replace(/-/g, ' ')}',
  shortDescription: '${repo.description.replace(/'/g, "\\'")}',
  category: ['engineering'],
  projectType: 'Software Project',
  domain: 'Full-Stack Engineering',
  type: 'Product',
  status: 'active',
  presentationLevel: 'C',
  problem: 'TODO: Define the core engineering problem addressed by this project.',
  solution: 'TODO: Define the technical solution and architecture.',
  githubUrl: '${repo.htmlUrl}',
  githubRepo: '${repo.fullName}',
  repositoryStatus: '${repo.isArchived ? 'archived' : 'public'}',
  deploymentStatus: 'unknown',
  repositoryUpdatedAt: '${repo.pushedAt}',
  source: 'github',
  technologies: ${JSON.stringify(repo.detectedTechnologies)},
  caseStudy: {
    overview: '${repo.description.replace(/'/g, "\\'")}',
    role: 'Sole Architect & Developer',
    challenges: [],
    keyDecisions: [],
    results: [],
  }
};
`;
}
