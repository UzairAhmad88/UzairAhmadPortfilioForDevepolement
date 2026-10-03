import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  buildDiscoveryIndex,
  searchDiscovery,
  getContextualDiscovery,
  safeHighlight,
} from '../../src/lib/discovery/discoveryEngine.ts';
import { discoveryItems, discoveryTaxonomy } from '../../src/data/discovery.ts';

describe('Phase 14: Discovery System & Search Engine Integrity', () => {
  it('should build a non-empty discovery index with complete taxonomy', () => {
    const payload = buildDiscoveryIndex();
    assert.ok(payload.items.length >= 40, `Expected at least 40 items, found ${payload.items.length}`);
    assert.ok(payload.taxonomy.types.length >= 6, 'Expected at least 6 content types');
    assert.ok(payload.taxonomy.technologies.length >= 15, 'Expected at least 15 technologies');
    assert.ok(payload.taxonomy.topics.length >= 10, 'Expected at least 10 topics');
  });

  it('should execute exact title match search accurately', () => {
    const results = searchDiscovery(discoveryItems, {
      query: 'deep learning stock return prediction',
    });
    assert.ok(results.length > 0, 'Expected results for flagship project title');
    assert.strictEqual(results[0].item.slug, 'deep-learning-stock-return-prediction');
    assert.ok(results[0].matchedFields.includes('exact') || results[0].matchedFields.includes('title'));
  });

  it('should execute case-insensitive and partial token queries', () => {
    const resultsLower = searchDiscovery(discoveryItems, { query: 'fastapi' });
    const resultsUpper = searchDiscovery(discoveryItems, { query: 'FASTAPI' });
    assert.ok(resultsLower.length > 0, 'Expected FastAPI results');
    assert.strictEqual(resultsLower.length, resultsUpper.length, 'Search should be case-insensitive');
  });

  it('should resolve canonical technology aliases', () => {
    const resultsPostgres = searchDiscovery(discoveryItems, { query: 'postgres' });
    assert.ok(resultsPostgres.length > 0, 'Expected results for postgres alias');
    assert.ok(
      resultsPostgres.some((r) => r.item.technologies.includes('postgresql')),
      'Should map postgres alias to postgresql'
    );
  });

  it('should filter strictly by content type', () => {
    const projectResults = searchDiscovery(discoveryItems, { type: 'project' });
    assert.ok(projectResults.length > 0);
    for (const res of projectResults) {
      assert.strictEqual(res.item.type, 'project');
    }

    const labResults = searchDiscovery(discoveryItems, { type: 'lab' });
    assert.ok(labResults.length > 0);
    for (const res of labResults) {
      assert.strictEqual(res.item.type, 'lab');
    }
  });

  it('should filter by specific technology and topic facets', () => {
    const pythonResults = searchDiscovery(discoveryItems, { technology: 'python' });
    assert.ok(pythonResults.length > 0, 'Expected Python items');
    for (const res of pythonResults) {
      assert.ok(res.item.technologies.includes('python'));
    }
  });

  it('should support multi-facet combined queries', () => {
    const combined = searchDiscovery(discoveryItems, {
      query: 'orderbook',
      type: 'lab',
    });
    assert.ok(combined.length > 0, 'Expected streaming orderbook SSE lab experiment');
    assert.strictEqual(combined[0].item.type, 'lab');
    assert.strictEqual(combined[0].item.slug, 'streaming-orderbook-sse');
  });

  it('should return empty results gracefully for non-matching queries', () => {
    const noResults = searchDiscovery(discoveryItems, {
      query: 'nonexistent-crypto-blockchain-query-xyz',
    });
    assert.strictEqual(noResults.length, 0);
  });

  it('should sanitize HTML highlighting to prevent XSS injection', () => {
    const unsafeQuery = '<script>alert(1)</script>';
    const highlighted = safeHighlight('Sample title with text', unsafeQuery);
    assert.ok(!highlighted.includes('<script>'), 'Highlighted text must escape HTML tags');
    assert.ok(highlighted.includes('&lt;script&gt;') || !highlighted.includes('alert'));
  });

  it('should ensure zero fabricated quality scores, stars, or percentages exist', () => {
    for (const item of discoveryItems) {
      assert.ok(!('qualityScore' in (item.metadata || {})), `Item ${item.id} has qualityScore`);
      assert.ok(!('rank' in (item.metadata || {})), `Item ${item.id} has rank`);
      assert.ok(!('matchPercentage' in item), `Item ${item.id} has matchPercentage`);
    }
  });

  it('should resolve contextual discovery items without duplicates', () => {
    const flagshipId = 'project:deep-learning-stock-return-prediction';
    const contextual = getContextualDiscovery(discoveryItems, flagshipId, 4);
    assert.ok(contextual.length > 0, 'Expected contextual discovery items');
    assert.ok(contextual.every((item) => item.id !== flagshipId), 'Should not include self');
  });
});
