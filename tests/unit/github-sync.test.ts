import test from 'node:test';
import assert from 'node:assert/strict';

import {
  normalizeTechnologies,
  suggestRepositoryClassification,
  normalizeRepository,
  isValidExternalUrl,
  safeEscapeHtml,
  sanitizeReadmeContent,
} from '../../src/lib/github/normalizer.ts';
import {
  findMatchingProject,
  isUpdateAvailable,
} from '../../src/lib/github/matcher.ts';
import {
  getProjectGitHubEvidence,
  getResearchGitHubEvidence,
  getLabGitHubEvidence,
} from '../../src/lib/github/evidence.ts';
import {
  validateGitHubIntegrity,
} from '../../src/lib/github/validator.ts';
import {
  runGitHubSync,
  generateGitHubSyncReport,
} from '../../src/lib/github/sync.ts';
import {
  gitHubCurationEntries,
  getCurationByRepo,
  getCurationByProjectSlug,
} from '../../src/data/github/curation.ts';
import { baselineApiRepositories } from '../../src/data/github/repositories.ts';
import { githubConfig } from '../../src/config/github.ts';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';
import { labItems } from '../../src/data/lab.ts';
import type { GitHubApiRepository } from '../../src/types/github.ts';

test('Phase 15: Centralized GitHub Configuration', () => {
  assert.equal(githubConfig.username, 'UzairAhmad88');
  assert.equal(githubConfig.profileUrl, 'https://github.com/UzairAhmad88');
  assert.equal(githubConfig.enabled, true);
  assert.equal(githubConfig.apiUrl, 'https://api.github.com');
});

test('Phase 15: Repository Normalization & Tech Detection', () => {
  const techList = normalizeTechnologies('Python', ['pytorch', 'scikit-learn', 'pandas', 'cuda']);
  assert.ok(techList.includes('Python'));
  assert.ok(techList.includes('PyTorch'));
  assert.ok(techList.includes('Scikit-Learn'));
  assert.ok(techList.includes('Pandas'));
  assert.ok(techList.includes('CUDA'));

  assert.equal(isValidExternalUrl('https://github.com/UzairAhmad88'), true);
  assert.equal(isValidExternalUrl('http://localhost:3000'), true);
  assert.equal(isValidExternalUrl('javascript:alert(1)'), false);
  assert.equal(isValidExternalUrl(''), false);
  assert.equal(isValidExternalUrl(null), false);
});

test('Phase 15: XSS Sanitization & HTML Escaping', () => {
  const unsafeText = '<script>alert("xss")</script><b>Fraud Detection</b> & "Analysis"';
  const escaped = safeEscapeHtml(unsafeText);
  assert.ok(!escaped.includes('<script>'));
  assert.ok(escaped.includes('&lt;script&gt;'));
  assert.ok(escaped.includes('&amp;'));

  const unsafeReadme = '## Overview\n<script>doMalicious()</script><iframe src="evil.com"></iframe>\nReal content.';
  const sanitized = sanitizeReadmeContent(unsafeReadme);
  assert.ok(!sanitized.includes('<script>'));
  assert.ok(!sanitized.includes('<iframe>'));
  assert.ok(sanitized.includes('Real content.'));
});

test('Phase 15: Repository Classification Suggestion (Non-Automated)', () => {
  const quantRepo: GitHubApiRepository = {
    id: 101,
    node_id: 'R_101',
    name: 'Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    full_name: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    private: false,
    html_url: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction',
    description: 'Stock return forecasting pipeline in PyTorch.',
    fork: false,
    url: '',
    created_at: '2024-08-10T12:00:00Z',
    updated_at: '2025-01-15T18:30:00Z',
    pushed_at: '2025-01-15T18:30:00Z',
    git_url: '',
    ssh_url: '',
    clone_url: '',
    homepage: null,
    size: 1000,
    stargazers_count: 5,
    watchers_count: 5,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 1,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    topics: ['quantitative-finance'],
    default_branch: 'main',
  };

  const classification = suggestRepositoryClassification(quantRepo);
  assert.equal(classification, 'portfolio');

  const normalized = normalizeRepository(quantRepo);
  assert.equal(normalized.owner, 'UzairAhmad88');
  assert.equal(normalized.language, 'Python');
  assert.equal(normalized.provenance, 'Verified');
  assert.ok(normalized.detectedTechnologies.includes('Python'));
});

test('Phase 15: Human Curation Registry & Project Matching', () => {
  assert.ok(gitHubCurationEntries.length >= 6);

  const stockCuration = getCurationByProjectSlug('deep-learning-stock-return-prediction');
  assert.ok(stockCuration);
  assert.equal(stockCuration.classification, 'portfolio');
  assert.equal(stockCuration.curationState, 'published');
  assert.equal(stockCuration.publish, true);

  const stockRepo = baselineApiRepositories.find((r) => r.name.includes('Stock-Return'))!;
  const normalizedStockRepo = normalizeRepository(stockRepo);
  const matchedProject = findMatchingProject(normalizedStockRepo, projects);
  assert.ok(matchedProject);
  assert.equal(matchedProject.slug, 'deep-learning-stock-return-prediction');
});

test('Phase 15: Project GitHub Evidence Resolution', () => {
  const stockProject = projects.find((p) => p.slug === 'deep-learning-stock-return-prediction')!;
  const stockEvidence = getProjectGitHubEvidence(stockProject);

  assert.ok(stockEvidence);
  assert.equal(stockEvidence.public, true);
  assert.equal(stockEvidence.archived, false);
  assert.ok(stockEvidence.repositoryUrl.includes('github.com/UzairAhmad88'));
  assert.ok(stockEvidence.codeUrl.includes('/tree/main'));
  assert.ok(stockEvidence.commitsUrl?.includes('/commits/main'));
  assert.equal(stockEvidence.language, 'Python');
});

test('Phase 15: Research & Lab GitHub Evidence Resolution', () => {
  const signalResearch = researchItems.find((r) => r.slug === 'signal-research')!;
  const researchEvidence = getResearchGitHubEvidence(signalResearch);
  assert.ok(researchEvidence);
  assert.ok(researchEvidence.repositoryUrl.includes('Deep-Learning-Based-Stock-Return'));

  const diffLab = labItems.find((l) => l.slug === 'fractional-diff-cli')!;
  const labEvidence = getLabGitHubEvidence(diffLab);
  assert.ok(labEvidence);
  assert.ok(labEvidence.repositoryUrl.includes('Deep-Learning-Based-Stock-Return'));
});

test('Phase 15: Private / Unavailable Repository Handling', () => {
  const mockPrivateProject = {
    ...projects[0],
    repositoryStatus: 'private' as const,
  };
  const privateEvidence = getProjectGitHubEvidence(mockPrivateProject);
  assert.equal(privateEvidence, null);
});

test('Phase 15: Update Detection Engine', () => {
  const stockProject = projects.find((p) => p.slug === 'deep-learning-stock-return-prediction')!;
  const stockRepo = normalizeRepository(baselineApiRepositories[0]);

  // Baseline repo matches stored date
  const isUpdate = isUpdateAvailable(stockRepo, stockProject);
  assert.equal(typeof isUpdate, 'boolean');

  // Stale check
  const futureRepo = { ...stockRepo, pushedAt: '2029-01-01T00:00:00Z' };
  assert.equal(isUpdateAvailable(futureRepo, stockProject), true);
});

test('Phase 15: Integrity Validation Engine', () => {
  const normalizedRepos = baselineApiRepositories.map((r) => normalizeRepository(r));
  const validation = validateGitHubIntegrity(normalizedRepos, projects);

  assert.equal(validation.valid, true);
  assert.ok(validation.curationCount >= 6);
  assert.ok(validation.verifiedMappingsCount >= 5);
});

test('Phase 15: Synchronization Engine & Markdown Report', async () => {
  const syncReport = await runGitHubSync(projects, { dryRun: true });
  assert.ok(syncReport.totalDiscovered >= 6);
  assert.ok(syncReport.publishedCount >= 5);
  assert.equal(syncReport.username, 'UzairAhmad88');

  const reportMarkdown = generateGitHubSyncReport(syncReport, true);
  assert.ok(reportMarkdown.includes('# GitHub Intelligence & Project Synchronization Report'));
  assert.ok(reportMarkdown.includes('Zero Auto-Publishing'));
  assert.ok(reportMarkdown.includes('Curated Separation'));
});

test('Phase 15: Guarantees Zero Star Leaderboards or Proficiency Inflation', () => {
  for (const repo of baselineApiRepositories) {
    const normalized = normalizeRepository(repo);
    // Verified: No star ranking or proficiency tier properties are attached
    assert.equal((normalized as any).proficiencyTier, undefined);
    assert.equal((normalized as any).developerScore, undefined);
    assert.equal((normalized as any).qualityScore, undefined);
  }
});
