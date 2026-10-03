import test, { describe, it } from 'node:test';
import assert from 'node:assert';

import {
  projectSyncCurationRegistry,
  getProjectSyncCuration,
  getProjectSyncCurationByRepo,
} from '../../src/data/projectSync/curation.ts';
import { buildProjectIdentity } from '../../src/lib/projectSync/identity.ts';
import { matchProjectEvidence } from '../../src/lib/projectSync/matcher.ts';
import { detectProjectSyncConflicts } from '../../src/lib/projectSync/conflict.ts';
import { detectProjectChanges } from '../../src/lib/projectSync/changeDetector.ts';
import { executeProjectSync, generateProjectSyncMarkdownReport } from '../../src/lib/projectSync/syncEngine.ts';
import { projects } from '../../src/data/projects.ts';
import { baselineApiRepositories } from '../../src/data/github/repositories.ts';
import { normalizeRepository } from '../../src/lib/github/normalizer.ts';
import { cachedVercelProjects } from '../../src/data/vercel/projects.ts';

const normalizedGithubRepos = baselineApiRepositories.map((r) => normalizeRepository(r, 'LIVE_API'));

describe('Phase 17: Project Sync Curation Registry', () => {
  it('should contain verified mappings for all core platform projects', () => {
    assert.ok(projectSyncCurationRegistry.length >= 6);
    for (const entry of projectSyncCurationRegistry) {
      assert.ok(entry.projectId, 'Must have projectId');
      assert.ok(entry.projectSlug, 'Must have projectSlug');
      assert.ok(entry.verifiedAt, 'Must have verifiedAt timestamp');
      assert.strictEqual(typeof entry.publishGithubEvidence, 'boolean');
      assert.strictEqual(typeof entry.publishDeploymentEvidence, 'boolean');
    }
  });

  it('should retrieve curation entries by ID or slug', () => {
    const cur1 = getProjectSyncCuration('stock-return-prediction');
    assert.ok(cur1);
    assert.strictEqual(cur1?.projectSlug, 'deep-learning-stock-return-prediction');

    const cur2 = getProjectSyncCuration('deep-learning-stock-return-prediction');
    assert.ok(cur2);
    assert.strictEqual(cur2?.projectId, 'stock-return-prediction');
  });

  it('should retrieve curation entries by repository full name', () => {
    const cur = getProjectSyncCurationByRepo(
      'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii'
    );
    assert.ok(cur);
    assert.strictEqual(cur?.projectId, 'stock-return-prediction');
  });
});

describe('Phase 17: Unified Project Identity', () => {
  it('should build canonical project identity with lifecycle states', () => {
    const sampleProject = projects[0];
    const identity = buildProjectIdentity({ project: sampleProject });

    assert.strictEqual(identity.projectId, sampleProject.id);
    assert.strictEqual(identity.projectSlug, sampleProject.slug);
    assert.strictEqual(identity.title, sampleProject.title);
    assert.strictEqual(identity.mappingStatus, 'VERIFIED');
    assert.strictEqual(identity.lifecycleState, 'PUBLISHED');
  });
});

describe('Phase 17: Multi-Level Project Matcher Engine', () => {
  it('Level 1: should match curated projects with EXACT confidence', () => {
    const p = projects[0];
    const match = matchProjectEvidence(p, normalizedGithubRepos, cachedVercelProjects);
    assert.strictEqual(match.status, 'VERIFIED');
    assert.strictEqual(match.confidence, 'EXACT');
    assert.strictEqual(match.matchLevel, 1);
  });

  it('Level 2: should match projects with explicit githubRepo property', () => {
    const uncuratedProject = {
      id: 'test-direct-repo',
      slug: 'test-direct-repo',
      title: 'Test Direct Repo',
      githubRepo: 'UzairAhmad88/Hayatabad-Gym-BYMe',
      status: 'active' as const,
      category: ['engineering'] as any,
      projectType: 'Web',
      domain: 'Engineering',
      type: 'Product' as const,
      presentationLevel: 'B' as const,
      featured: false,
      isLatest: false,
      publishedAt: '2024-01-01',
      source: 'github' as const,
      technologies: ['TypeScript'],
      tools: ['Git'],
      role: 'Engineer',
      team: 'Individual',
      timeline: '2024',
      deployment: 'Web',
      order: 99,
      caseStudy: {} as any,
    };

    // Bypass level 1 by simulating project not in curation
    const match = matchProjectEvidence(uncuratedProject, normalizedGithubRepos, cachedVercelProjects);
    assert.ok(match.status === 'VERIFIED');
    assert.strictEqual(match.confidence, 'EXACT');
  });

  it('Level 6: should suggest match based on slug/name similarity without auto-verifying', () => {
    const uncuratedProject = {
      id: 'custom-gym-portal',
      slug: 'hayatabadgym',
      title: 'Hayatabad Gym Portal',
      status: 'active' as const,
      category: ['engineering'] as any,
      projectType: 'Web',
      domain: 'Engineering',
      type: 'Product' as const,
      presentationLevel: 'B' as const,
      featured: false,
      isLatest: false,
      publishedAt: '2024-01-01',
      source: 'github' as const,
      technologies: ['TypeScript'],
      tools: ['Git'],
      role: 'Engineer',
      team: 'Individual',
      timeline: '2024',
      deployment: 'Web',
      order: 99,
      caseStudy: {} as any,
    };

    const dummyRepos = [
      {
        id: 99999,
        name: 'Hayatabad-Gym-BYMe',
        fullName: 'UzairAhmad88/Hayatabad-Gym-BYMe',
        htmlUrl: 'https://github.com/UzairAhmad88/Hayatabad-Gym-BYMe',
        description: 'Gym app',
        primaryLanguage: 'JavaScript',
        topics: [],
        starsCount: 1,
        forksCount: 0,
        openIssuesCount: 0,
        isArchived: false,
        isFork: false,
        isPrivate: false,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
        pushedAt: '2024-01-01T00:00:00Z',
        fetchedAt: '2026-10-04T00:00:00Z',
        detectedTechnologies: [],
        sourceProvenance: 'LIVE_API' as const,
      },
    ];

    const match = matchProjectEvidence(uncuratedProject, dummyRepos, []);
    assert.strictEqual(match.status, 'SUGGESTED');
    assert.strictEqual(match.confidence, 'POSSIBLE');
    assert.strictEqual(match.matchLevel, 6);
  });
});

describe('Phase 17: Conflict Detection Engine', () => {
  it('should detect duplicate repository mappings across multiple projects', () => {
    const dummyCurations = [
      {
        projectId: 'project-alpha',
        projectSlug: 'project-alpha',
        githubRepositoryFullName: 'UzairAhmad88/Shared-Monorepo',
        publishGithubEvidence: true,
        publishDeploymentEvidence: false,
        verifiedAt: '2026-10-04T00:00:00Z',
      },
      {
        projectId: 'project-beta',
        projectSlug: 'project-beta',
        githubRepositoryFullName: 'UzairAhmad88/Shared-Monorepo',
        publishGithubEvidence: true,
        publishDeploymentEvidence: false,
        verifiedAt: '2026-10-04T00:00:00Z',
      },
    ];

    const conflicts = detectProjectSyncConflicts(projects, dummyCurations, [], []);
    const dupConflict = conflicts.find((c) => c.type === 'DUPLICATE_MAPPING');
    assert.ok(dupConflict);
    assert.strictEqual(dupConflict?.requiresHumanReview, true);
  });

  it('should detect repository mismatch between GitHub and Vercel links', () => {
    const dummyCurations = [
      {
        projectId: 'mismatch-project',
        projectSlug: 'mismatch-project',
        githubRepositoryFullName: 'UzairAhmad88/Repo-A',
        vercelProjectName: 'vercel-prj-mismatch',
        publishGithubEvidence: true,
        publishDeploymentEvidence: true,
        verifiedAt: '2026-10-04T00:00:00Z',
      },
    ];

    const dummyVercel = [
      {
        id: 'prj_mis_1',
        name: 'vercel-prj-mismatch',
        framework: 'nextjs',
        createdAt: 1700000000000,
        updatedAt: 1700000000000,
        gitRepository: 'UzairAhmad88/Repo-B', // Intentionally mismatched
        domains: [],
        latestDeployments: [],
        fetchedAt: '2026-10-04T00:00:00Z',
        source: 'CACHED_VERCEL' as const,
      },
    ];

    const conflicts = detectProjectSyncConflicts([], dummyCurations, [], dummyVercel);
    const mismatch = conflicts.find((c) => c.type === 'REPO_MISMATCH');
    assert.ok(mismatch);
    assert.strictEqual(mismatch?.severity, 'CRITICAL');
  });
});

describe('Phase 17: Change Detection Engine', () => {
  it('should detect new incoming GitHub repositories not present in cache', () => {
    const cachedRepos: any[] = [{ fullName: 'UzairAhmad88/Repo-1', description: 'Desc 1' }];
    const incomingRepos: any[] = [
      { fullName: 'UzairAhmad88/Repo-1', description: 'Desc 1' },
      { fullName: 'UzairAhmad88/Repo-NEW-2', description: 'New Repo' },
    ];

    const changes = detectProjectChanges([], cachedRepos, incomingRepos, [], []);
    assert.strictEqual(changes.newGithubRepos.length, 1);
    assert.strictEqual(changes.newGithubRepos[0], 'UzairAhmad88/Repo-NEW-2');
  });
});

describe('Phase 17: Project Sync Orchestrator & Reporting', () => {
  it('should execute deterministic dry-run synchronization without modifying curated files', () => {
    const { report, markdownSummary, jsonSummary } = executeProjectSync({
      isDryRun: true,
      projects,
      githubRepos: normalizedGithubRepos,
      vercelProjects: cachedVercelProjects,
    });

    assert.strictEqual(report.isDryRun, true);
    assert.strictEqual(report.schemaVersion, '1.0.0');
    assert.ok(report.portfolioProjectsCount >= 6);
    assert.ok(report.verifiedMappingsCount >= 5);
    assert.ok(markdownSummary.includes('PROJECT SYNCHRONIZATION REPORT'));
    assert.ok(markdownSummary.includes('Evidence Chain Matrix'));
    assert.ok(jsonSummary.includes('"schemaVersion": "1.0.0"'));
  });

  it('should accurately verify fully linked evidence chains (Portfolio + GitHub + Vercel)', () => {
    const { report } = executeProjectSync({
      isDryRun: true,
      projects,
      githubRepos: normalizedGithubRepos,
      vercelProjects: cachedVercelProjects,
    });

    const hmsRecord = report.records.find((r) => r.identity.projectId === 'curasphere-hms');
    assert.ok(hmsRecord);
    assert.strictEqual(hmsRecord?.evidenceChain.hasPortfolio, true);
    assert.strictEqual(hmsRecord?.evidenceChain.hasGitHub, true);
    assert.strictEqual(hmsRecord?.evidenceChain.hasVercel, true);
    assert.strictEqual(hmsRecord?.evidenceChain.isFullyLinked, true);
  });
});
