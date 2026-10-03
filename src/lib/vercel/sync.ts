/**
 * VERCEL SYNC ENGINE MODULE
 * Phase 16 — Build-time and Manual CLI Synchronization with Dry-Run Mode
 *
 * Core Directives:
 * - NEVER automatically create portfolio pages.
 * - NEVER automatically publish unmatched projects.
 * - NEVER overwrite manual curation files during dry-run.
 */

import type { VercelSyncReport, VercelSyncReportItem } from '../../types/vercel.ts';
import { fetchVercelProjects } from './client.ts';
import { matchVercelProject } from './matcher.ts';
import { validateDeploymentUrl } from './validator.ts';

export interface RunVercelSyncOptions {
  isDryRun?: boolean;
  token?: string;
  portfolioProjects?: Array<{ id: string; slug: string; title: string; githubRepo?: string }>;
}

export async function runVercelSync(
  options: RunVercelSyncOptions = {}
): Promise<{ report: VercelSyncReport; markdownSummary: string }> {
  const isDryRun = options.isDryRun !== false;
  const timestamp = new Date().toISOString();
  const warnings: string[] = [];
  const items: VercelSyncReportItem[] = [];

  // 1. Discover Projects
  const { projects, fromCache, error: fetchError } = await fetchVercelProjects({
    token: options.token,
    useCacheFallback: true,
  });

  if (fetchError) {
    warnings.push(`Fetch Notice: ${fetchError}`);
  }

  let productionDeployments = 0;
  let previewDeployments = 0;
  let verifiedMappingsCount = 0;
  let unmatchedVercelProjectsCount = 0;
  let unavailableDeploymentsCount = 0;

  const context = {
    portfolioProjects: options.portfolioProjects,
  };

  // 2. Evaluate each discovered Vercel project
  for (const proj of projects) {
    const matching = matchVercelProject(proj, context);
    const prodDep = proj.productionDeployment || proj.latestDeployments[0];
    const depUrl = prodDep?.url || '';
    const state = prodDep?.state || 'UNKNOWN';
    const target = prodDep?.target || 'preview';

    if (target === 'production') productionDeployments++;
    else previewDeployments++;

    if (depUrl) {
      const urlCheck = validateDeploymentUrl(depUrl);
      if (!urlCheck.valid) {
        unavailableDeploymentsCount++;
        warnings.push(`Invalid URL format for project ${proj.name}: ${depUrl}`);
      }
    } else {
      unavailableDeploymentsCount++;
    }

    let matchType: 'PORTFOLIO' | 'RESEARCH' | 'LAB' | 'VERCEL_ONLY' = 'VERCEL_ONLY';
    let matchedItem = 'Unmatched';

    if (matching.matchStatus === 'VERIFIED_MATCH') {
      verifiedMappingsCount++;
      if (matching.matchedPortfolioSlug) {
        matchType = 'PORTFOLIO';
        matchedItem = `Project: ${matching.matchedPortfolioSlug}`;
      } else if (matching.matchedLabId) {
        matchType = 'LAB';
        matchedItem = `Lab: ${matching.matchedLabId}`;
      } else if (matching.matchedResearchId) {
        matchType = 'RESEARCH';
        matchedItem = `Research: ${matching.matchedResearchId}`;
      }
    } else if (matching.matchStatus === 'SUGGESTED_MATCH') {
      matchedItem = `Suggested: ${matching.matchedPortfolioSlug || matching.matchedLabId || 'item'}`;
      warnings.push(`Suggested match found for ${proj.name} -> ${matchedItem}. Requires human verification.`);
    } else {
      unmatchedVercelProjectsCount++;
    }

    items.push({
      vercelProjectId: proj.id,
      vercelProjectName: proj.name,
      deploymentUrl: depUrl,
      target,
      state,
      matchedItem,
      matchType,
      provenance: fromCache ? 'CACHED' : 'LIVE_VERIFIED',
      notes: matching.reason,
    });
  }

  // 3. Count portfolio-only projects
  const portfolioOnlyProjectsCount =
    (options.portfolioProjects?.length || 0) -
    items.filter((i) => i.matchType === 'PORTFOLIO').length;

  const totalDeployments = items.filter((i) => Boolean(i.deploymentUrl)).length;

  const report: VercelSyncReport = {
    timestamp,
    isDryRun,
    projectsDiscovered: projects.length,
    deploymentsDiscovered: totalDeployments,
    productionDeployments,
    previewDeployments,
    verifiedMappingsCount,
    unmatchedVercelProjectsCount,
    portfolioOnlyProjectsCount: Math.max(0, portfolioOnlyProjectsCount),
    unavailableDeploymentsCount,
    warnings,
    items,
  };

  const markdownSummary = generateVercelMarkdownReport(report);

  return { report, markdownSummary };
}

/**
 * Generates an internal Vercel Intelligence Report in clean Markdown.
 */
export function generateVercelMarkdownReport(report: VercelSyncReport): string {
  const lines: string[] = [
    '# VERCEL INTELLIGENCE REPORT',
    `**Execution Timestamp:** \`${report.timestamp}\``,
    `**Mode:** \`${report.isDryRun ? 'DRY-RUN (No state changes)' : 'LIVE SYNC'}\``,
    '',
    '## Executive Summary',
    `- **Projects Discovered:** ${report.projectsDiscovered}`,
    `- **Deployments Discovered:** ${report.deploymentsDiscovered}`,
    `- **Production Deployments:** ${report.productionDeployments}`,
    `- **Preview Deployments:** ${report.previewDeployments}`,
    `- **Verified Portfolio Mappings:** ${report.verifiedMappingsCount}`,
    `- **Unmatched Vercel Projects:** ${report.unmatchedVercelProjectsCount}`,
    `- **Portfolio-Only Projects (No Vercel):** ${report.portfolioOnlyProjectsCount}`,
    `- **Unavailable / Malformed Deployments:** ${report.unavailableDeploymentsCount}`,
    '',
    '## Discovered Projects & Evidence Inventory',
    '| Vercel Project | Target | State | Matched Entity | Deployment URL | Provenance |',
    '|:---|:---|:---|:---|:---|:---|',
  ];

  for (const item of report.items) {
    const urlLink = item.deploymentUrl ? `[Link ↗](${item.deploymentUrl})` : '—';
    lines.push(
      `| \`${item.vercelProjectName}\` | \`${item.target}\` | \`${item.state}\` | ${item.matchedItem} | ${urlLink} | \`${item.provenance}\` |`
    );
  }

  if (report.warnings.length > 0) {
    lines.push('', '## Warnings & Action Items');
    for (const w of report.warnings) {
      lines.push(`- ⚠️ ${w}`);
    }
  }

  lines.push(
    '',
    '---',
    '*Report generated by Vercel Intelligence Engine (Phase 16). Deployment metadata is evidence of deployment only; it does not infer project quality, scale, or business success.*'
  );

  return lines.join('\n');
}
