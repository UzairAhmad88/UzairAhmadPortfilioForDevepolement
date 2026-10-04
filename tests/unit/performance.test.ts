import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('Phase 28: Performance 2.0 & Build Efficiency', () => {
  it('should enforce that all client JS chunks in dist/_astro are under performance budget', () => {
    const distAstroPath = path.resolve(process.cwd(), 'dist/_astro');
    if (!fs.existsSync(distAstroPath)) {
      // If dist has not been built yet, skip or assert gracefully
      return;
    }

    const files = fs.readdirSync(distAstroPath);
    const jsFiles = files.filter((f) => f.endsWith('.js'));

    assert.ok(jsFiles.length > 0, 'Build output should contain generated client chunks');

    let totalJsSize = 0;
    for (const file of jsFiles) {
      const stats = fs.statSync(path.join(distAstroPath, file));
      totalJsSize += stats.size;
      // Individual chunk budget: 50 KB max for any single hoisted script chunk
      assert.ok(
        stats.size < 50 * 1024,
        `Chunk ${file} is ${stats.size} bytes, which exceeds single chunk budget of 50KB`
      );
    }

    // Total client JS budget: 50 KB raw total across all hoisted module chunks
    assert.ok(
      totalJsSize < 50 * 1024,
      `Total JS size (${totalJsSize} bytes) exceeds total client JS budget of 50KB`
    );
  });

  it('should ensure zero blocking third-party tracking scripts in BaseLayout.astro', () => {
    const layoutPath = path.resolve(process.cwd(), 'src/layouts/BaseLayout.astro');
    const content = fs.readFileSync(layoutPath, 'utf8');

    const forbiddenTrackers = [
      'google-analytics.com',
      'googletagmanager.com',
      'hotjar.com',
      'facebook.net',
      'segment.com',
      'mixpanel.com',
    ];

    for (const tracker of forbiddenTrackers) {
      assert.ok(!content.includes(tracker), `BaseLayout must not include third-party tracker: ${tracker}`);
    }
  });

  it('should use preconnect and font-display: swap for Google Fonts in BaseLayout.astro', () => {
    const layoutPath = path.resolve(process.cwd(), 'src/layouts/BaseLayout.astro');
    const content = fs.readFileSync(layoutPath, 'utf8');

    assert.ok(content.includes('rel="preconnect" href="https://fonts.googleapis.com"'), 'Must preconnect to fonts.googleapis.com');
    assert.ok(content.includes('rel="preconnect" href="https://fonts.gstatic.com" crossorigin'), 'Must preconnect to fonts.gstatic.com with crossorigin');
    assert.ok(content.includes('&display=swap'), 'Font URL must specify &display=swap to eliminate FOIT');
  });

  it('should provide zero-FOUC synchronous theme script in BaseLayout.astro', () => {
    const layoutPath = path.resolve(process.cwd(), 'src/layouts/BaseLayout.astro');
    const content = fs.readFileSync(layoutPath, 'utf8');

    assert.ok(content.includes('getThemeInitScript()'), 'BaseLayout must execute getThemeInitScript synchronously in <head>');
  });

  it('should unobserve IntersectionObserver targets in BackgroundEffects to prevent memory leaks', () => {
    const bgPath = path.resolve(process.cwd(), 'src/components/common/BackgroundEffects.astro');
    const content = fs.readFileSync(bgPath, 'utf8');

    assert.ok(content.includes('observer.unobserve(entry.target)'), 'BackgroundEffects must unobserve intersecting targets to free memory');
  });

  it('should bail out of micro-tilt animations under reduced-motion or coarse pointer', () => {
    const bgPath = path.resolve(process.cwd(), 'src/components/common/BackgroundEffects.astro');
    const content = fs.readFileSync(bgPath, 'utf8');

    assert.ok(content.includes("prefers-reduced-motion: reduce"), 'Must check prefers-reduced-motion');
    assert.ok(content.includes("pointer: coarse"), 'Must check pointer: coarse to avoid unneeded calculations on touch devices');
  });

  it('should serialize discovery and knowledge graph data statically at build time', () => {
    const discoveryPage = path.resolve(process.cwd(), 'src/pages/discover.astro');
    const knowledgePage = path.resolve(process.cwd(), 'src/pages/knowledge/index.astro');

    const discContent = fs.readFileSync(discoveryPage, 'utf8');
    const knowContent = fs.readFileSync(knowledgePage, 'utf8');

    assert.ok(discContent.includes('discoveryItems'), 'discover.astro should build from static discoveryItems');
    assert.ok(knowContent.includes('knowledgeGraph.nodes'), 'knowledge/index.astro should build from static nodes');
  });
});
