import { describe, it } from 'node:test';
import assert from 'node:assert';
import { researchItems, featuredResearch } from '../../src/data/research.ts';
import { projects } from '../../src/data/projects.ts';

describe('Research Data & Knowledge Graph Integrity', () => {
  it('should have valid research items with complete scientific fields', () => {
    assert.ok(researchItems.length > 0, 'Research items array must not be empty');
    researchItems.forEach((item) => {
      assert.ok(item.id, 'Item must have an ID');
      assert.ok(item.slug, 'Item must have a slug');
      assert.ok(item.title, `Item ${item.id} must have a title`);
      assert.ok(item.summary, `Item ${item.id} must have a summary`);
      assert.ok(item.question, `Item ${item.id} must have a research question`);
      assert.ok(item.hypothesis, `Item ${item.id} must have a hypothesis`);
      assert.ok(item.methodology && item.methodology.length > 0, `Item ${item.id} must have a methodology description`);
      assert.ok(item.limitations && item.limitations.length > 0, `Item ${item.id} must state limitations`);
      assert.ok(item.references && item.references.length > 0, `Item ${item.id} must have references`);
    });
  });

  it('should have unique slugs for all research items', () => {
    const slugs = researchItems.map((r) => r.slug);
    const uniqueSlugs = new Set(slugs);
    assert.strictEqual(slugs.length, uniqueSlugs.size, 'All research slugs must be unique');
  });

  it('should have a valid featured research item', () => {
    assert.ok(featuredResearch, 'Featured research item must exist');
    assert.strictEqual(featuredResearch.featured, true, 'Featured research item must have featured: true');
  });

  it('should resolve all relatedProjects to existing project slugs in the knowledge graph', () => {
    const projectSlugs = new Set(projects.map((p) => p.slug));
    researchItems.forEach((item) => {
      if (item.relatedProjects) {
        item.relatedProjects.forEach((projSlug) => {
          assert.ok(
            projectSlugs.has(projSlug),
            `Research item "${item.slug}" references non-existent project "${projSlug}"`
          );
        });
      }
    });
  });

  it('should verify project relatedResearch references resolve to valid research items', () => {
    const researchSlugs = new Set(researchItems.map((r) => r.slug));
    projects.forEach((proj) => {
      if (proj.relatedResearch) {
        proj.relatedResearch.forEach((resSlug) => {
          assert.ok(
            researchSlugs.has(resSlug),
            `Project "${proj.slug}" references non-existent research slug "${resSlug}"`
          );
        });
      }
    });
  });

  it('should ensure all mathematical formulations are readable strings', () => {
    researchItems.forEach((item) => {
      if (item.mathematicalFormulation) {
        assert.strictEqual(
          typeof item.mathematicalFormulation,
          'string',
          `Item ${item.slug} formulation must be a string`
        );
        assert.ok(
          item.mathematicalFormulation.length > 0,
          `Item ${item.slug} formulation must not be empty`
        );
      }
    });
  });
});
