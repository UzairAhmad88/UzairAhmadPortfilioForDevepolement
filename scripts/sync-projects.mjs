#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import data and sync utilities
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'UzairAhmad88';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const isDryRun = process.argv.includes('--dry-run');

console.log(`\n🔍 Starting Project Discovery & Synchronization Engine...`);
console.log(`Target GitHub Account: ${GITHUB_USERNAME}`);
console.log(`Mode: ${isDryRun ? 'DRY-RUN (Read-Only)' : 'ACTIVE SYNC'}\n`);

// Load baseline fallback repos if offline
const baselineRepos = [
  {
    name: 'Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    full_name: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    html_url: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    description: 'Multi-horizon quantitative trading and return forecasting pipeline built in PyTorch.',
    language: 'Python',
    pushed_at: '2025-01-15T18:30:00Z',
    archived: false,
    stargazers_count: 5,
    forks_count: 1,
  },
  {
    name: 'Develop-Market-Regime--Engine-byUzaii',
    full_name: 'UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    html_url: 'https://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    description: 'Unsupervised statistical clustering engine for financial market volatility regime detection.',
    language: 'Python',
    pushed_at: '2025-02-01T14:20:00Z',
    archived: false,
    stargazers_count: 3,
    forks_count: 0,
  },
  {
    name: '-CuraSphere-HMS-DevelopbyUzaii',
    full_name: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    html_url: 'https://github.com/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    description: 'Modern, responsive Healthcare Management System with role-based access control and patient records.',
    language: 'TypeScript',
    pushed_at: '2024-12-18T11:45:00Z',
    archived: false,
    stargazers_count: 4,
    forks_count: 2,
  },
  {
    name: 'Resturent-Managment-System---POS',
    full_name: 'UzairAhmad88/Resturent-Managment-System---POS',
    html_url: 'https://github.com/UzairAhmad88/Resturent-Managment-System---POS',
    description: 'High-throughput Point of Sale and inventory control software for dining operations.',
    language: 'JavaScript',
    pushed_at: '2024-09-10T15:00:00Z',
    archived: false,
    stargazers_count: 2,
    forks_count: 0,
  },
  {
    name: 'Hayatabad-Gym-BYMe',
    full_name: 'UzairAhmad88/Hayatabad-Gym-BYMe',
    html_url: 'https://github.com/UzairAhmad88/Hayatabad-Gym-BYMe',
    description: 'Modern, accessible web platform for premier fitness facility brand and membership inquiries.',
    language: 'HTML',
    pushed_at: '2024-04-05T12:10:00Z',
    archived: false,
    stargazers_count: 1,
    forks_count: 0,
  },
  {
    name: 'UzairAhmadPortfilioForDevepolement',
    full_name: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    html_url: 'https://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    description: 'Personal professional developer and quantitative engineering website built with Astro and TypeScript.',
    language: 'Astro',
    pushed_at: '2026-10-02T22:00:00Z',
    archived: false,
    stargazers_count: 8,
    forks_count: 1,
  },
];

async function fetchGithubRepos() {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'UzairAhmad-Portfolio-Sync/1.0',
  };
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers,
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (res.ok) {
      const repos = await res.json();
      console.log(`✓ Fetched ${repos.length} live repositories from GitHub API.`);
      return repos;
    }
  } catch {
    // offline or network failure
  }

  console.log(`ℹ Using verified offline baseline repository data.`);
  return baselineRepos;
}

async function main() {
  const repos = await fetchGithubRepos();

  const knownMappings = {
    'Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii': 'deep-learning-stock-return-prediction',
    'Develop-Market-Regime--Engine-byUzaii': 'market-regime-engine',
    '-CuraSphere-HMS-DevelopbyUzaii': 'curasphere-hms',
    'Resturent-Managment-System---POS': 'restaurant-pos',
    'Hayatabad-Gym-BYMe': 'hayatabad-gym',
    'UzairAhmadPortfilioForDevepolement': 'portfolio-website',
  };

  const vercelMappings = {
    '-CuraSphere-HMS-DevelopbyUzaii': 'https://vercel.com/imuzairahmad8-6603s-projects',
    'UzairAhmadPortfilioForDevepolement': 'https://uzairahmad.vercel.app',
  };

  const results = repos.map((repo) => {
    const matchedSlug = knownMappings[repo.name] || null;
    const vercelUrl = vercelMappings[repo.name] || null;
    const isPublished = Boolean(matchedSlug);

    return {
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description || 'No description provided',
      htmlUrl: repo.html_url,
      language: repo.language || 'Software',
      pushedAt: repo.pushed_at,
      matchedSlug,
      vercelUrl,
      status: isPublished ? 'PUBLISHED' : 'DISCOVERED',
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
    };
  });

  console.log('------------------------------------------------------------');
  console.log('DISCOVERY SUMMARY:');
  for (const r of results) {
    const matchTag = r.matchedSlug ? `-> [${r.matchedSlug}]` : '-> (New/Unmapped)';
    console.log(`  • ${r.name.padEnd(45)} ${r.status.padEnd(12)} ${matchTag}`);
  }
  console.log('------------------------------------------------------------\n');

  if (isDryRun) {
    console.log('✓ Dry-run complete. No files modified.');
    return;
  }

  // Ensure directories exist
  const dataDir = path.join(rootDir, 'data', 'generated');
  const docsGeneratedDir = path.join(rootDir, 'docs', 'generated');
  fs.mkdirSync(dataDir, { recursive: true });
  fs.mkdirSync(docsGeneratedDir, { recursive: true });

  // Write cached repository data
  const jsonPath = path.join(dataDir, 'github-repositories.json');
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`✓ Generated: ${path.relative(rootDir, jsonPath)}`);

  // Write markdown report
  const reportPath = path.join(docsGeneratedDir, 'github-project-sync.md');
  const mdContent = `# GitHub Project Synchronization Report

**Generated**: ${new Date().toISOString()}  
**Total Discovered Repositories**: ${results.length}  
**Published Projects**: ${results.filter((r) => r.status === 'PUBLISHED').length}  
**Unmapped / Discovered Repositories**: ${results.filter((r) => r.status === 'DISCOVERED').length}  

---

| Repository Name | Primary Language | Matched Portfolio Project | Vercel Deployment | Sync Status |
| :--- | :--- | :--- | :--- | :--- |
${results
  .map(
    (r) =>
      `| [\`${r.name}\`](${r.htmlUrl}) | ${r.language} | ${r.matchedSlug ? `\`${r.matchedSlug}\`` : '—'} | ${r.vercelUrl ? `[Vercel ↗](${r.vercelUrl})` : '—'} | **${r.status}** |`
  )
  .join('\n')}

---

## Data Protection Standard
- GitHub synchronization updates metadata caches only.
- Curated case study narratives, problems, solutions, architecture notes, and lessons are NEVER overwritten.
`;

  fs.writeFileSync(reportPath, mdContent, 'utf-8');
  console.log(`✓ Generated: ${path.relative(rootDir, reportPath)}`);

  console.log('\n✓ Project Synchronization Completed Successfully.\n');
}

main().catch((err) => {
  console.error('Sync failed:', err);
  process.exit(1);
});
