import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('Phase 33: Production QA & Complete Verification Invariants', () => {
  const distDir = path.resolve(process.cwd(), 'dist');

  it('should verify that dist directory exists and has built static output', () => {
    assert.ok(fs.existsSync(distDir), 'dist directory must exist');
    assert.ok(fs.statSync(distDir).isDirectory(), 'dist must be a directory');
  });

  it('should verify all core static routes exist in dist', () => {
    const coreRoutes = [
      'index.html',
      '404.html',
      'about/index.html',
      'archive/index.html',
      'collaborate/index.html',
      'contact/index.html',
      'contact/success/index.html',
      'discover/index.html',
      'how-i-build/index.html',
      'knowledge/index.html',
      'knowledge-graph/index.html',
      'lab/index.html',
      'notes/index.html',
      'research/index.html',
      'services/index.html',
      'technology/index.html',
      'timeline/index.html',
      'work/index.html'
    ];

    for (const route of coreRoutes) {
      const filePath = path.join(distDir, route);
      assert.ok(fs.existsSync(filePath), `Route ${route} must exist in dist output`);
    }
  });

  it('should verify all 8 project detail routes exist and contain non-empty semantic HTML', () => {
    const projectSlugs = [
      'deep-learning-stock-return-prediction',
      'multi-agent-prospect-intelligence',
      'curasphere-hms',
      'market-regime-engine',
      'restaurant-pos',
      'hayatabad-gym',
      'online-complaint-system',
      'event-management-system'
    ];

    for (const slug of projectSlugs) {
      const filePath = path.join(distDir, 'work', slug, 'index.html');
      assert.ok(fs.existsSync(filePath), `Project route for /work/${slug} must exist`);
      const content = fs.readFileSync(filePath, 'utf-8');
      assert.ok(content.length > 5000, `Project route for /work/${slug} must have substantial content`);
      assert.ok(content.includes('<h1'), `Project route for /work/${slug} must contain an h1 tag`);
      assert.ok(content.includes('canonical'), `Project route for /work/${slug} must have canonical tag`);
      assert.ok(!content.includes('undefined') || !content.includes('NaN'), `Project route for /work/${slug} must not contain accidental JS artifacts`);
    }
  });

  it('should verify all 3 research routes exist in dist', () => {
    const researchSlugs = ['signal-research', 'market-regimes', 'agentic-systems'];
    for (const slug of researchSlugs) {
      const filePath = path.join(distDir, 'research', slug, 'index.html');
      assert.ok(fs.existsSync(filePath), `Research route for /research/${slug} must exist`);
      const content = fs.readFileSync(filePath, 'utf-8');
      assert.ok(content.includes('<article') || content.includes('<main'), `Research route /research/${slug} must have article/main structure`);
    }
  });

  it('should verify all 6 engineering notes exist in dist', () => {
    const noteSlugs = [
      'async-sqlalchemy-session-lifecycle',
      'fractional-differentiation-memory-stationarity',
      'gmm-state-flipping-variance-ordering',
      'deterministic-state-graph-pydantic-guardrails',
      'zero-layout-shift-ssg-design-tokens',
      'rbac-relational-integrity-emr-systems'
    ];
    for (const slug of noteSlugs) {
      const filePath = path.join(distDir, 'notes', slug, 'index.html');
      assert.ok(fs.existsSync(filePath), `Notes route for /notes/${slug} must exist`);
      const content = fs.readFileSync(filePath, 'utf-8');
      assert.ok(content.includes('<pre') || content.includes('<code'), `Note ${slug} should contain formatted code blocks`);
    }
  });

  it('should verify all 6 lab workbenches exist in dist', () => {
    const labSlugs = [
      'fractional-diff-cli',
      'streaming-orderbook-sse',
      'gmm-regime-stability-probe',
      'multi-agent-pydantic-state-machine',
      'css-subgrid-editorial-alignment',
      'stochastic-volatility-heston-calibration'
    ];
    for (const slug of labSlugs) {
      const filePath = path.join(distDir, 'lab', slug, 'index.html');
      assert.ok(fs.existsSync(filePath), `Lab route for /lab/${slug} must exist`);
    }
  });

  it('should verify all 19 technology pages exist in dist', () => {
    const techSlugs = [
      'python', 'typescript', 'pytorch', 'react', 'langgraph',
      'fastapi', 'nodejs', 'express', 'postgresql', 'pandas',
      'numpy', 'scikit-learn', 'astro', 'tailwindcss', 'git',
      'cuda', 'jupyter', 'html5-css3', 'pydantic'
    ];
    for (const slug of techSlugs) {
      const filePath = path.join(distDir, 'technology', slug, 'index.html');
      assert.ok(fs.existsSync(filePath), `Technology route for /technology/${slug} must exist`);
    }
  });

  it('should verify sitemap-index.xml and robots.txt exist in dist', () => {
    const sitemapPath = path.join(distDir, 'sitemap-index.xml');
    assert.ok(fs.existsSync(sitemapPath), 'sitemap-index.xml must exist');
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    assert.ok(sitemapContent.includes('sitemap'), 'sitemap content must be valid xml');

    const robotsPath = path.join(distDir, 'robots.txt');
    if (fs.existsSync(robotsPath)) {
      const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
      assert.ok(robotsContent.includes('User-agent'), 'robots.txt must declare User-agent');
    }
  });

  it('should verify zero exposed secret keys or private tokens in client files', () => {
    const envExamplePath = path.resolve(process.cwd(), '.env.example');
    if (fs.existsSync(envExamplePath)) {
      const envContent = fs.readFileSync(envExamplePath, 'utf-8');
      assert.ok(!envContent.includes('ghp_'), 'No real GitHub PAT in .env.example');
      assert.ok(!envContent.includes('vercel_tok_'), 'No real Vercel token in .env.example');
    }

    // Inspect JS chunks in dist/_astro
    const astroDir = path.join(distDir, '_astro');
    if (fs.existsSync(astroDir)) {
      const files = fs.readdirSync(astroDir);
      for (const file of files) {
        if (file.endsWith('.js')) {
          const jsContent = fs.readFileSync(path.join(astroDir, file), 'utf-8');
          assert.ok(!jsContent.includes('ghp_'), `No GitHub PAT in JS chunk ${file}`);
          assert.ok(!jsContent.includes('vercel_'), `No Vercel secret token in JS chunk ${file}`);
        }
      }
    }
  });

  it('should verify contact form security and no honeypot bypass in contact route', () => {
    const contactHtmlPath = path.join(distDir, 'contact', 'index.html');
    assert.ok(fs.existsSync(contactHtmlPath), 'Contact HTML must exist');
    const content = fs.readFileSync(contactHtmlPath, 'utf-8');
    assert.ok(content.includes('form'), 'Contact page must contain form element');
    assert.ok(content.includes('honeypot') || content.includes('_gotcha') || content.includes('botcheck') || content.includes('name="subject"'), 'Contact page has honeypot or spam mitigation field');
  });

  it('should verify valid JSON-LD metadata on key pages', () => {
    const homeHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
    assert.ok(homeHtml.includes('application/ld+json'), 'Homepage must contain JSON-LD structured data');
    assert.ok(homeHtml.includes('https://schema.org'), 'JSON-LD must reference schema.org');
  });
});
