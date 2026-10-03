import type { Project } from '../../types/project.ts';
import type {
  RepositorySyncResult,
  GitHubSyncReport,
  SyncStatus,
  CurationLifecycleState,
} from '../../types/github.ts';
import { githubConfig } from '../../config/github.ts';
import { listGithubRepositories } from './client.ts';
import { findMatchingProject, isUpdateAvailable } from './matcher.ts';
import { getCurationByRepo } from '../../data/github/curation.ts';
import { findVercelDeployment } from '../vercel/index.ts';

/**
 * Executes a full repository synchronization and change detection audit
 */
export async function runGitHubSync(
  curatedProjects: Project[],
  options: {
    username?: string;
    token?: string;
    dryRun?: boolean;
  } = {}
): Promise<GitHubSyncReport> {
  const username = options.username || githubConfig.username;
  const { repositories, error } = await listGithubRepositories({
    username,
    token: options.token,
  });

  const results: RepositorySyncResult[] = [];
  const warnings: string[] = [];
  if (error) {
    warnings.push(`Fetch warning: ${error}`);
  }

  let publishedCount = 0;
  let updateAvailableCount = 0;
  let newDiscoveredCount = 0;
  let unchangedCount = 0;
  let archivedCount = 0;
  let unmatchedCount = 0;

  for (const repo of repositories) {
    const matchedProject = findMatchingProject(repo, curatedProjects);
    const curation = getCurationByRepo(repo.fullName);
    const vercelMatch = findVercelDeployment(repo.fullName, matchedProject?.slug);

    let syncStatus: SyncStatus = 'DISCOVERED';
    let curationState: CurationLifecycleState = curation?.curationState || 'discovered';
    let requiresReview = false;
    let updateDetails: string | undefined;
    const repoWarnings: string[] = [];

    if (repo.archived) {
      archivedCount++;
      curationState = 'archived';
      repoWarnings.push('Repository is archived on GitHub.');
    }

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
      unmatchedCount++;
      requiresReview = true;
      updateDetails = `New repository discovered: ${repo.name}`;
      repoWarnings.push('No matching curated portfolio project configured.');
    }

    results.push({
      repository: repo,
      syncStatus,
      curationState,
      matchedProjectSlug: matchedProject?.slug || curation?.projectId,
      matchedResearchSlug: curation?.researchId,
      matchedLabSlug: curation?.labId,
      possibleVercelDeployment: vercelMatch?.productionUrl,
      updateDetails,
      requiresReview,
      warnings: repoWarnings.length > 0 ? repoWarnings : undefined,
    });
  }

  return {
    timestamp: new Date().toISOString(),
    username,
    totalDiscovered: repositories.length,
    publishedCount,
    updateAvailableCount,
    newDiscoveredCount,
    unchangedCount,
    archivedCount,
    unmatchedCount,
    results,
    warnings,
  };
}

/**
 * Generates a structured Markdown report from a sync execution
 */
export function generateGitHubSyncReport(report: GitHubSyncReport, isDryRun: boolean = false): string {
  const lines: string[] = [
    '# GitHub Intelligence & Project Synchronization Report',
    '',
    `**Target Account**: \`https://github.com/${report.username}\`  `,
    `**Execution Timestamp**: ${report.timestamp}  `,
    `**Execution Mode**: ${isDryRun ? 'DRY-RUN (Zero Files Modified)' : 'LIVE SYNC'}  `,
    `**Total Repositories Discovered**: ${report.totalDiscovered}  `,
    `**Published Portfolio Mappings**: ${report.publishedCount}  `,
    `**Updates Available**: ${report.updateAvailableCount}  `,
    `**New / Unmatched Repositories**: ${report.unmatchedCount}  `,
    `**Archived Repositories**: ${report.archivedCount}  `,
    '',
    '---',
    '',
    '## Discovered Repositories & Evidence Status',
    '',
    '| Repository Name | Classification | Matched Project | Evidence Status | Vercel Deployment | Sync State | Action |',
    '| :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
  ];

  for (const res of report.results) {
    const matched = res.matchedProjectSlug ? `[\`${res.matchedProjectSlug}\`](/work/${res.matchedProjectSlug})` : '*(Unmatched)*';
    const vercel = res.possibleVercelDeployment ? `[Live ↗](${res.possibleVercelDeployment})` : '—';
    const action = res.requiresReview ? '**Review & Curate**' : res.syncStatus === 'UPDATE_AVAILABLE' ? 'Metadata Update' : 'None';
    const evidenceStatus = res.repository.visibility === 'public' ? 'Public Verified' : 'Private (Protected)';

    lines.push(
      `| [\`${res.repository.name}\`](${res.repository.htmlUrl}) | \`${res.repository.detectedTechnologies[0] || 'Software'}\` | ${matched} | ${evidenceStatus} | ${vercel} | **${res.syncStatus}** | ${action} |`
    );
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Governance & Publishing Rules');
  lines.push('1. **Zero Auto-Publishing**: Repositories on GitHub never automatically create or alter public portfolio project narratives.');
  lines.push('2. **Curated Separation**: Automatic repository facts (stars, dates, forks) remain external evidence; problem statements and architecture remain human-curated.');
  lines.push('3. **No Metric Ranking**: Star and fork counts are metadata attributes, never quality or proficiency rankings.');

  return lines.join('\n');
}
