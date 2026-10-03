import test, { describe, it } from 'node:test';
import assert from 'node:assert';

import { vercelConfig } from '../../src/config/vercel.ts';
import {
  normalizeDeploymentState,
  normalizeDeploymentTarget,
  sanitizeUrl,
  formatFrameworkName,
  normalizeVercelDeployment,
  normalizeVercelProject,
} from '../../src/lib/vercel/normalizer.ts';
import {
  validateDeploymentUrl,
  validateDeploymentRecord,
  validateCurationEntry,
  validateEvidencePresentation,
} from '../../src/lib/vercel/validator.ts';
import { vercelCurationRegistry } from '../../src/data/vercel/curation.ts';
import { cachedVercelProjects } from '../../src/data/vercel/projects.ts';
import {
  getVercelEvidenceForProject,
  getVercelEvidenceForResearch,
  getVercelEvidenceForLab,
  getAllVercelEvidence,
} from '../../src/lib/vercel/evidence.ts';
import { matchVercelProject } from '../../src/lib/vercel/matcher.ts';
import { runVercelSync, generateVercelMarkdownReport } from '../../src/lib/vercel/sync.ts';
import { findVercelDeployment, KNOWN_VERCEL_DEPLOYMENTS } from '../../src/lib/vercel/index.ts';

describe('Vercel Intelligence Configuration & Types', () => {
  it('should have valid centralized configuration', () => {
    assert.strictEqual(typeof vercelConfig.enabled, 'boolean');
    assert.strictEqual(vercelConfig.enabled, true);
    assert.strictEqual(typeof vercelConfig.username, 'string');
    assert.strictEqual(vercelConfig.apiUrl, 'https://api.vercel.com');
    assert.strictEqual(vercelConfig.apiStrategy, 'STATIC_CACHE');
  });
});

describe('Vercel Normalizer Engine', () => {
  it('should normalize deployment states accurately', () => {
    assert.strictEqual(normalizeDeploymentState('READY'), 'READY');
    assert.strictEqual(normalizeDeploymentState('BUILDING'), 'BUILDING');
    assert.strictEqual(normalizeDeploymentState('INITIALIZING'), 'BUILDING');
    assert.strictEqual(normalizeDeploymentState('ERROR'), 'ERROR');
    assert.strictEqual(normalizeDeploymentState('FAILED'), 'ERROR');
    assert.strictEqual(normalizeDeploymentState('CANCELED'), 'CANCELED');
    assert.strictEqual(normalizeDeploymentState('CANCELLED'), 'CANCELED');
    assert.strictEqual(normalizeDeploymentState('QUEUED'), 'QUEUED');
    assert.strictEqual(normalizeDeploymentState('RANDOM_TEXT'), 'UNKNOWN');
    assert.strictEqual(normalizeDeploymentState(null), 'UNKNOWN');
  });

  it('should normalize deployment targets', () => {
    assert.strictEqual(normalizeDeploymentTarget('production'), 'production');
    assert.strictEqual(normalizeDeploymentTarget('PROD'), 'production');
    assert.strictEqual(normalizeDeploymentTarget('development'), 'development');
    assert.strictEqual(normalizeDeploymentTarget('preview'), 'preview');
    assert.strictEqual(normalizeDeploymentTarget(undefined), 'preview');
  });

  it('should sanitize and enforce HTTPS URLs while discarding unsafe protocols', () => {
    assert.strictEqual(sanitizeUrl('uzairahmad.vercel.app'), 'https://uzairahmad.vercel.app');
    assert.strictEqual(sanitizeUrl('http://uzairahmad.vercel.app'), 'https://uzairahmad.vercel.app');
    assert.strictEqual(sanitizeUrl('https://uzairahmad.vercel.app'), 'https://uzairahmad.vercel.app');
    assert.strictEqual(sanitizeUrl('javascript:alert(1)'), '');
    assert.strictEqual(sanitizeUrl('data:text/html;base64,123'), '');
    assert.strictEqual(sanitizeUrl(''), '');
  });

  it('should format framework display labels cleanly', () => {
    assert.strictEqual(formatFrameworkName('astro'), 'Astro');
    assert.strictEqual(formatFrameworkName('nextjs'), 'Next.js');
    assert.strictEqual(formatFrameworkName('react'), 'React');
    assert.strictEqual(formatFrameworkName('vite'), 'Vite');
    assert.strictEqual(formatFrameworkName('remix'), 'Remix');
    assert.strictEqual(formatFrameworkName(null), 'Web Application');
  });

  it('should normalize raw deployment object structure', () => {
    const raw = {
      id: 'dpl_test123',
      name: 'portfolio-test',
      url: 'portfolio-test.vercel.app',
      readyState: 'READY',
      target: 'production',
      createdAt: 1728000000000,
    };
    const normalized = normalizeVercelDeployment(raw, 'LIVE_VERCEL');
    assert.strictEqual(normalized.id, 'dpl_test123');
    assert.strictEqual(normalized.url, 'https://portfolio-test.vercel.app');
    assert.strictEqual(normalized.state, 'READY');
    assert.strictEqual(normalized.target, 'production');
    assert.strictEqual(normalized.source, 'LIVE_VERCEL');
  });
});

describe('Vercel Validator & Security Engine', () => {
  it('should validate valid public HTTPS URLs', () => {
    const res = validateDeploymentUrl('https://uzairahmad.vercel.app');
    assert.strictEqual(res.valid, true);
    assert.strictEqual(res.errors.length, 0);
  });

  it('should reject insecure HTTP and malformed URLs', () => {
    const res1 = validateDeploymentUrl('http://uzairahmad.vercel.app');
    assert.strictEqual(res1.valid, false);

    const res2 = validateDeploymentUrl('not-a-url');
    assert.strictEqual(res2.valid, false);
  });

  it('should reject localhost and private IP addresses for security', () => {
    const resLocal = validateDeploymentUrl('https://localhost:3000');
    assert.strictEqual(resLocal.valid, false);

    const resPrivate = validateDeploymentUrl('https://192.168.1.1/dashboard');
    assert.strictEqual(resPrivate.valid, false);
  });

  it('should validate curation registry entries', () => {
    for (const entry of vercelCurationRegistry) {
      const res = validateCurationEntry(entry);
      assert.strictEqual(res.valid, true, `Invalid curation entry: ${entry.vercelProjectName}`);
    }
  });
});

describe('Vercel Baseline Cache & Evidence Layer', () => {
  it('should have cached baseline projects with verified fields', () => {
    assert.ok(cachedVercelProjects.length >= 3);
    const portfolioPrj = cachedVercelProjects.find((p) => p.name === 'uzairahmad');
    assert.ok(portfolioPrj, 'Portfolio project must exist in baseline cache');
    assert.strictEqual(portfolioPrj?.productionDeployment?.state, 'READY');
  });

  it('should resolve verified deployment evidence for mapped portfolio projects', () => {
    const ev = getVercelEvidenceForProject('portfolio-website');
    assert.ok(ev, 'Evidence must exist for portfolio-website');
    assert.strictEqual(ev?.production, true);
    assert.strictEqual(ev?.deploymentUrl, 'https://uzairahmad.vercel.app');
    assert.strictEqual(ev?.deploymentState, 'READY');
    assert.strictEqual(validateEvidencePresentation(ev!), true);
  });

  it('should resolve verified deployment evidence for CuraSphere HMS', () => {
    const ev = getVercelEvidenceForProject('curasphere-hms');
    assert.ok(ev, 'Evidence must exist for curasphere-hms');
    assert.strictEqual(ev?.production, true);
    assert.strictEqual(ev?.projectName, 'curasphere-hms');
  });

  it('should return undefined for portfolio projects without deployment (e.g. stock-return-prediction)', () => {
    const ev = getVercelEvidenceForProject('deep-learning-stock-return-prediction');
    assert.strictEqual(ev, undefined);
  });

  it('should resolve verified deployment evidence for Lab items (e.g. streaming-orderbook-sse)', () => {
    const ev = getVercelEvidenceForLab('streaming-orderbook-sse');
    assert.ok(ev, 'Evidence must exist for streaming-orderbook-sse lab experiment');
    assert.strictEqual(ev?.target, 'preview');
    assert.strictEqual(ev?.deploymentUrl, 'https://orderbook-sse-lab.vercel.app');
  });

  it('should return all verified evidence entries across projects and lab', () => {
    const all = getAllVercelEvidence();
    assert.ok(all.length >= 3);
    for (const item of all) {
      assert.ok(item.deploymentUrl.startsWith('https://'));
      assert.ok(item.projectName);
    }
  });
});

describe('Vercel Matcher Engine', () => {
  it('should correctly match curated projects with 1.0 confidence', () => {
    const proj = cachedVercelProjects[0];
    const match = matchVercelProject(proj);
    assert.strictEqual(match.matchStatus, 'VERIFIED_MATCH');
    assert.strictEqual(match.confidence, 1.0);
  });

  it('should suggest match for uncurated project with matching git repo', () => {
    const uncuratedProject = {
      id: 'prj_unknown_test',
      name: 'some-test-project',
      framework: 'react',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      gitRepository: 'UzairAhmad88/Hayatabad-Gym-BYMe',
      domains: [],
      latestDeployments: [],
      fetchedAt: new Date().toISOString(),
      source: 'CACHED_VERCEL' as const,
    };

    const context = {
      portfolioProjects: [
        { id: 'hayatabad-gym', slug: 'hayatabad-gym', githubRepo: 'UzairAhmad88/Hayatabad-Gym-BYMe' },
      ],
    };

    const match = matchVercelProject(uncuratedProject, context);
    assert.strictEqual(match.matchStatus, 'SUGGESTED_MATCH');
    assert.strictEqual(match.matchedPortfolioSlug, 'hayatabad-gym');
    assert.strictEqual(match.confidence, 0.85);
  });

  it('should return UNMATCHED for unrelated projects', () => {
    const unmatchedProject = {
      id: 'prj_random_999',
      name: 'random-unrelated-repo',
      framework: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      domains: [],
      latestDeployments: [],
      fetchedAt: new Date().toISOString(),
      source: 'CACHED_VERCEL' as const,
    };

    const match = matchVercelProject(unmatchedProject, { portfolioProjects: [] });
    assert.strictEqual(match.matchStatus, 'UNMATCHED');
    assert.strictEqual(match.confidence, 0);
  });
});

describe('Vercel Sync & Report Engine', () => {
  it('should execute dry-run sync without modifying curated content', async () => {
    const { report, markdownSummary } = await runVercelSync({
      isDryRun: true,
      portfolioProjects: [
        { id: 'portfolio-website', slug: 'portfolio-website', title: 'Portfolio Website' },
        { id: 'curasphere-hms', slug: 'curasphere-hms', title: 'CuraSphere HMS' },
        { id: 'stock-return-prediction', slug: 'deep-learning-stock-return-prediction', title: 'Stock Return' },
      ],
    });

    assert.strictEqual(report.isDryRun, true);
    assert.ok(report.projectsDiscovered >= 3);
    assert.ok(report.deploymentsDiscovered >= 3);
    assert.ok(report.verifiedMappingsCount >= 2);
    assert.ok(markdownSummary.includes('VERCEL INTELLIGENCE REPORT'));
    assert.ok(markdownSummary.includes('DRY-RUN'));
  });
});

describe('Legacy Compatibility Layer', () => {
  it('should support findVercelDeployment by GitHub repo or slug', () => {
    const matchByRepo = findVercelDeployment('UzairAhmad88/UzairAhmadPortfilioForDevepolement');
    assert.ok(matchByRepo);
    assert.strictEqual(matchByRepo?.productionUrl, 'https://uzairahmad.vercel.app');

    const matchBySlug = findVercelDeployment(undefined, 'curasphere-hms');
    assert.ok(matchBySlug);
    assert.strictEqual(matchBySlug?.projectName, 'curasphere-hms');
  });

  it('should expose KNOWN_VERCEL_DEPLOYMENTS constant for legacy consumers', () => {
    assert.ok(Array.isArray(KNOWN_VERCEL_DEPLOYMENTS));
    assert.ok(KNOWN_VERCEL_DEPLOYMENTS.length >= 2);
  });
});
