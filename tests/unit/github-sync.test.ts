import test from 'node:test';
import assert from 'node:assert/strict';

import {
  normalizeTechnologies,
  classifyRepository,
  normalizeRepository,
  isValidExternalUrl,
} from '../../src/lib/github/normalizer.ts';
import {
  findMatchingProject,
  isUpdateAvailable,
  KNOWN_PROJECT_MAPPINGS,
} from '../../src/lib/github/matcher.ts';
import {
  runProjectSync,
  generateSyncMarkdownReport,
  generateProjectDraftScaffold,
} from '../../src/lib/github/sync.ts';
import { findVercelDeployment } from '../../src/lib/vercel/index.ts';
import { projects } from '../../src/data/projects.ts';
import type { GithubApiRepository } from '../../src/lib/github/types.ts';

test('GitHub Repository Normalization & Tech Detection', () => {
  const techList = normalizeTechnologies('Python', ['pytorch', 'scikit-learn', 'pandas']);
  assert.ok(techList.includes('Python'));
  assert.ok(techList.includes('PyTorch'));
  assert.ok(techList.includes('Scikit-Learn'));
  assert.ok(techList.includes('Pandas'));

  assert.equal(isValidExternalUrl('https://github.com/UzairAhmad88'), true);
  assert.equal(isValidExternalUrl('http://localhost:3000'), true);
  assert.equal(isValidExternalUrl('javascript:alert(1)'), false);
  assert.equal(isValidExternalUrl(''), false);
  assert.equal(isValidExternalUrl(null), false);
});

test('GitHub Repository Classification', () => {
  const quantRepo: GithubApiRepository = {
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

  const classification = classifyRepository(quantRepo);
  assert.equal(classification, 'RESEARCH');

  const normalized = normalizeRepository(quantRepo);
  assert.equal(normalized.owner, 'UzairAhmad88');
  assert.equal(normalized.primaryLanguage, 'Python');
  assert.ok(normalized.detectedTechnologies.includes('Python'));
});

test('Project Matching & Vercel Linking', () => {
  const quantRepo = normalizeRepository({
    id: 101,
    node_id: 'R_101',
    name: 'Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    full_name: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    private: false,
    html_url: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
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
    default_branch: 'main',
  });

  const matched = findMatchingProject(quantRepo, projects);
  assert.ok(matched);
  assert.equal(matched.slug, 'deep-learning-stock-return-prediction');

  const vercelMatch = findVercelDeployment(
    'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    'curasphere-hms'
  );
  assert.ok(vercelMatch);
  assert.equal(vercelMatch.projectName, 'curasphere-hms');
});

test('Curated Content Protection & Update Detection', () => {
  const stockProject = projects.find((p) => p.slug === 'deep-learning-stock-return-prediction')!;
  assert.ok(stockProject);

  const olderRepo = normalizeRepository({
    id: 101,
    node_id: 'R_101',
    name: 'Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    full_name: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    private: false,
    html_url: stockProject.githubUrl!,
    description: 'Updated code.',
    fork: false,
    url: '',
    created_at: '2024-08-10T12:00:00Z',
    updated_at: '2025-01-10T12:00:00Z',
    pushed_at: '2025-01-10T12:00:00Z',
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
    default_branch: 'main',
  });

  // Older repo should not trigger update available when stored date is newer
  assert.equal(isUpdateAvailable(olderRepo, stockProject), false);

  // Newer pushed date should trigger update available
  const newerRepo = { ...olderRepo, pushedAt: '2026-06-01T00:00:00Z' };
  assert.equal(isUpdateAvailable(newerRepo, stockProject), true);
});

test('Draft Project Scaffold Generation', () => {
  const dummyRepo = normalizeRepository({
    id: 999,
    node_id: 'R_999',
    name: 'Quantum-Computing-Optimization',
    full_name: 'UzairAhmad88/Quantum-Computing-Optimization',
    private: false,
    html_url: 'https://github.com/UzairAhmad88/Quantum-Computing-Optimization',
    description: 'Quantum annealing simulation for portfolio optimization.',
    fork: false,
    url: '',
    created_at: '2025-03-01T12:00:00Z',
    updated_at: '2025-03-01T12:00:00Z',
    pushed_at: '2025-03-01T12:00:00Z',
    git_url: '',
    ssh_url: '',
    clone_url: '',
    homepage: null,
    size: 500,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    default_branch: 'main',
  });

  const scaffold = generateProjectDraftScaffold(dummyRepo);
  assert.ok(scaffold.includes("slug: 'quantum-computing-optimization'"));
  assert.ok(scaffold.includes('DRAFT SCAFFOLD - NOT YET PUBLISHED'));
  assert.ok(scaffold.includes('UzairAhmad88/Quantum-Computing-Optimization'));
});

test('Sync Engine & Report Generation', async () => {
  const syncReport = await runProjectSync(projects, { dryRun: true });
  assert.ok(syncReport.totalDiscovered >= 5);
  assert.ok(syncReport.publishedCount >= 4);

  const markdown = generateSyncMarkdownReport(syncReport);
  assert.ok(markdown.includes('# GitHub & Vercel Project Synchronization Report'));
  assert.ok(markdown.includes('Curated Content Protected'));
});
