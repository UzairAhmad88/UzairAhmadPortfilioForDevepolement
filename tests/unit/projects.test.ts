import { describe, it } from 'node:test';
import assert from 'node:assert';
import { projects, featuredProject } from '../../src/data/projects.ts';
import { primaryNavigation } from '../../src/data/navigation.ts';

describe('Project & Navigation Data Integrity', () => {
  it('should have a valid featured project', () => {
    assert.ok(featuredProject);
    assert.strictEqual(featuredProject.slug, 'deep-learning-stock-return-prediction');
    assert.ok(featuredProject.caseStudy);
    assert.ok(featuredProject.caseStudy.objectives && featuredProject.caseStudy.objectives.length > 0);
  });

  it('should contain valid unique slugs for all projects', () => {
    const slugs = projects.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    assert.strictEqual(slugs.length, uniqueSlugs.size, 'All project slugs must be unique');
  });

  it('should have valid navigation links without dead hashes', () => {
    primaryNavigation.forEach((item) => {
      assert.ok(item.href.startsWith('/'), `Nav link ${item.label} should be a root-relative path`);
    });
  });
});
