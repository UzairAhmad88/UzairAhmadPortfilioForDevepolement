/**
 * PROJECT SYNC ENGINE MODULE
 * Phase 17 — Unified Synchronization Orchestrator
 *
 * Directives:
 * - Deterministic, non-destructive execution.
 * - Dry-run support with structured reporting.
 * - Strict source-of-truth preservation.
 */

import type { ProjectSyncReport, ProjectSyncRecord } from '../../types/projectSync.ts';
import type { Project } from '../../types/project.ts';
import type { GitHubRepository } from '../../types/github.ts';
import type { VercelProject } from '../../types/vercel.ts';
import { projectSyncCurationRegistry } from '../../data/projectSync/curation.ts';
import { buildProjectIdentity } from './identity.ts';
import { detectProjectSyncConflicts } from './conflict.ts';
import { detectProjectChanges } from './changeDetector.ts';

export interface ExecuteProjectSyncOptions {
  isDryRun?: boolean;
  projects?: Project[];
  githubRepos?: GitHubRepository[];
  vercelProjects?: VercelProject[];
}

export function executeProjectSync(
  options: ExecuteProjectSyncOptions = {}
): { report: ProjectSyncReport; markdownSummary: string; jsonSummary: string } {
  const isDryRun = options.isDryRun !== false;
  const timestamp = new Date().toISOString();
  const schemaVersion = '1.0.0';

  const projects = options.projects || [];
  const githubRepos = options.githubRepos || [];
  const vercelProjects = options.vercelProjects || [];

  // 1. Detect Conflicts
  const conflicts = detectProjectSyncConflicts(
    projects,
    projectSyncCurationRegistry,
    githubRepos,
    vercelProjects
  );

  // 2. Build Sync Records for each Project
  const records: ProjectSyncRecord[] = [];
  let verifiedMappingsCount = 0;
  let suggestedMappingsCount = 0;
  let unavailableSourcesCount = 0;
  const staleRecordsCount = 0;

  for (const project of projects) {
    const projId = project.id || project.slug;
    const identity = buildProjectIdentity({ project });
    const curation = projectSyncCurationRegistry.find(
      (c) => c.projectId.toLowerCase() === projId.toLowerCase()
    );

    let githubSummary: ProjectSyncRecord['github'];
    if (identity.githubRepositoryFullName) {
      const repo = githubRepos.find(
        (r) => r.fullName.toLowerCase() === identity.githubRepositoryFullName?.toLowerCase()
      );
      if (repo) {
        githubSummary = {
          repositoryId: repo.id,
          fullName: repo.fullName,
          verified: Boolean(curation?.publishGithubEvidence),
          lastFetchedAt: repo.fetchedAt,
          isPrivate: repo.visibility === 'private',
          isArchived: repo.archived,
          pushedAt: repo.pushedAt,
          primaryLanguage: repo.language,
        };
      } else {
        unavailableSourcesCount++;
      }
    }

    let vercelSummary: ProjectSyncRecord['vercel'];
    if (identity.vercelProjectId || curation?.vercelProjectName) {
      const vercel = vercelProjects.find(
        (v) =>
          v.id === identity.vercelProjectId ||
          v.name.toLowerCase() === curation?.vercelProjectName?.toLowerCase()
      );
      if (vercel) {
        vercelSummary = {
          projectId: vercel.id,
          projectName: vercel.name,
          deploymentId: vercel.productionDeployment?.id,
          deploymentUrl: vercel.productionDeployment?.url,
          target: vercel.productionDeployment?.target,
          state: vercel.productionDeployment?.state,
          verified: Boolean(curation?.publishDeploymentEvidence),
          lastFetchedAt: vercel.fetchedAt,
          framework: vercel.framework || undefined,
        };
      }
    }

    const projectConflicts = conflicts.filter((c) => c.projectId.includes(projId));
    const warnings: string[] = [];

    if (identity.mappingStatus === 'VERIFIED') {
      verifiedMappingsCount++;
    } else if (identity.mappingStatus === 'SUGGESTED') {
      suggestedMappingsCount++;
      warnings.push(`Suggested match for project ${project.title} requires manual verification.`);
    }

    const hasPortfolio = true;
    const hasGitHub = Boolean(githubSummary?.verified);
    const hasVercel = Boolean(vercelSummary?.verified);

    records.push({
      identity,
      github: githubSummary,
      vercel: vercelSummary,
      syncStatus: identity.lifecycleState,
      mappingStatus: identity.mappingStatus,
      lastCheckedAt: timestamp,
      warnings,
      conflicts: projectConflicts,
      evidenceChain: {
        hasPortfolio,
        hasGitHub,
        hasVercel,
        isFullyLinked: hasPortfolio && hasGitHub && hasVercel,
      },
    });
  }

  // 3. Detect Changes
  const changes = detectProjectChanges(
    projects,
    githubRepos,
    githubRepos,
    vercelProjects,
    vercelProjects,
    conflicts
  );

  // 4. Formulate Review Actions
  const reviewActions: string[] = [];
  for (const conf of conflicts) {
    reviewActions.push(`[CONFLICT] ${conf.description}`);
  }
  for (const map of changes.potentialMappings) {
    reviewActions.push(`[REVIEW MAPPING] Project '${map.projectId}' -> Suggested: ${map.suggestedRepo || map.suggestedVercel}`);
  }
  if (reviewActions.length === 0) {
    reviewActions.push('No pending human review actions required. All mappings verified.');
  }

  const report: ProjectSyncReport = {
    timestamp,
    isDryRun,
    schemaVersion,
    portfolioProjectsCount: projects.length,
    githubRepositoriesCount: githubRepos.length,
    vercelProjectsCount: vercelProjects.length,
    verifiedMappingsCount,
    suggestedMappingsCount,
    conflictsCount: conflicts.length,
    unavailableSourcesCount,
    staleRecordsCount,
    records,
    changes,
    reviewActions,
  };

  const markdownSummary = generateProjectSyncMarkdownReport(report);
  const jsonSummary = JSON.stringify(report, null, 2);

  return { report, markdownSummary, jsonSummary };
}

/**
 * Generates human-readable Markdown Project Sync report.
 */
export function generateProjectSyncMarkdownReport(report: ProjectSyncReport): string {
  const lines: string[] = [
    '# PROJECT SYNCHRONIZATION REPORT',
    `**Execution Timestamp:** \`${report.timestamp}\``,
    `**Mode:** \`${report.isDryRun ? 'DRY-RUN (Verification only)' : 'ACTIVE SYNC'}\``,
    `**Schema Version:** \`${report.schemaVersion}\``,
    '',
    '## Executive Summary',
    `- **Portfolio Projects:** ${report.portfolioProjectsCount}`,
    `- **GitHub Repositories:** ${report.githubRepositoriesCount}`,
    `- **Vercel Projects:** ${report.vercelProjectsCount}`,
    `- **Verified Mappings:** ${report.verifiedMappingsCount}`,
    `- **Suggested Mappings:** ${report.suggestedMappingsCount}`,
    `- **Detected Conflicts:** ${report.conflictsCount}`,
    `- **Unavailable Sources:** ${report.unavailableSourcesCount}`,
    `- **Stale Records:** ${report.staleRecordsCount}`,
    '',
    '## Evidence Chain Matrix',
    '| Project Title | Lifecycle | GitHub Evidence | Deployment Evidence | Fully Linked | Mapping Status |',
    '|:---|:---|:---|:---|:---|:---|',
  ];

  for (const rec of report.records) {
    const gh = rec.github?.fullName ? `\`${rec.github.fullName.split('/')[1] || rec.github.fullName}\`` : '—';
    const vercel = rec.vercel?.deploymentUrl ? `[Live ↗](${rec.vercel.deploymentUrl})` : '—';
    const fullyLinked = rec.evidenceChain.isFullyLinked ? '✓ Yes' : 'Partial';
    lines.push(
      `| **${rec.identity.title}** | \`${rec.syncStatus}\` | ${gh} | ${vercel} | ${fullyLinked} | \`${rec.mappingStatus}\` |`
    );
  }

  if (report.reviewActions.length > 0) {
    lines.push('', '## Review Actions & Action Items');
    for (const action of report.reviewActions) {
      lines.push(`- ${action}`);
    }
  }

  lines.push(
    '',
    '---',
    '*Report generated by Project Synchronization Engine (Phase 17). Source-of-truth hierarchy: Portfolio (Narrative) > GitHub (Code Evidence) > Vercel (Deployment Evidence).*'
  );

  return lines.join('\n');
}
