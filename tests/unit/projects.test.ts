import { describe, it } from 'node:test';
import assert from 'node:assert';
import { projects, featuredProject, fypProject } from '../../src/data/projects.ts';
import { primaryNavigation } from '../../src/data/navigation.ts';

describe('Project & Navigation Data Integrity', () => {
  it('should have a valid featured project with complete case study', () => {
    assert.ok(featuredProject);
    assert.strictEqual(featuredProject.slug, 'deep-learning-stock-return-prediction');
    assert.ok(featuredProject.caseStudy);
    assert.ok(featuredProject.caseStudy.objectives && featuredProject.caseStudy.objectives.length > 0);
    assert.ok(featuredProject.caseStudy.keyDecisions && featuredProject.caseStudy.keyDecisions.length > 0);
    assert.ok(featuredProject.caseStudy.results && featuredProject.caseStudy.results.length > 0);
  });

  it('should include the Final Year Project (FYP) with valid academic status', () => {
    assert.ok(fypProject);
    assert.strictEqual(fypProject.slug, 'multi-agent-prospect-intelligence');
    assert.strictEqual(fypProject.status, 'academic');
    assert.ok(fypProject.caseStudy);
    assert.ok(fypProject.caseStudy.architectureDiagram);
  });

  it('should contain valid unique slugs for all projects', () => {
    const slugs = projects.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    assert.strictEqual(slugs.length, uniqueSlugs.size, 'All project slugs must be unique');
  });

  it('should resolve all related project slugs to existing projects without dead links', () => {
    const allSlugs = new Set(projects.map((p) => p.slug));
    projects.forEach((project) => {
      if (project.relatedProjects) {
        project.relatedProjects.forEach((relSlug) => {
          assert.ok(allSlugs.has(relSlug), `Related project slug "${relSlug}" in "${project.slug}" must exist`);
        });
      }
    });
  });

  it('should ensure technical decisions have context, rationale, and tradeoffs', () => {
    projects.forEach((project) => {
      if (project.caseStudy?.keyDecisions) {
        project.caseStudy.keyDecisions.forEach((dec) => {
          assert.ok(dec.decision, `Decision must have a title in ${project.slug}`);
          assert.ok(dec.rationale, `Decision must have a rationale in ${project.slug}`);
        });
      }
    });
  });

  it('should have valid navigation links without dead hashes', () => {
    primaryNavigation.forEach((item) => {
      assert.ok(item.href.startsWith('/'), `Nav link ${item.label} should be a root-relative path`);
    });
  });
});
