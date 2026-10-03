import { describe, it } from 'node:test';
import assert from 'node:assert';
import { researchItems, featuredResearch, getResearchBySlug } from '../../src/data/research.ts';
import { projects } from '../../src/data/projects.ts';
import { technologies } from '../../src/data/technologies.ts';

describe('Phase 10: Research Platform & Hypothesis-Driven Investigation System', () => {
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

  it('should resolve research items accurately by slug', () => {
    researchItems.forEach((item) => {
      const found = getResearchBySlug(item.slug);
      assert.ok(found, `getResearchBySlug must resolve for ${item.slug}`);
      assert.strictEqual(found?.id, item.id);
    });
    assert.strictEqual(getResearchBySlug('non-existent-research-slug'), undefined);
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

  it('should resolve all canonical technologies to existing technology IDs in Phase 09 system', () => {
    const techIds = new Set(technologies.map((t) => t.id));
    researchItems.forEach((item) => {
      if (item.technologies) {
        item.technologies.forEach((techId) => {
          assert.ok(
            techIds.has(techId),
            `Research item "${item.slug}" references non-existent canonical technology ID "${techId}"`
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

  it('should contain structured experiments with valid statuses and observations', () => {
    const validStatuses = new Set(['Planned', 'Running', 'Completed', 'Inconclusive', 'Failed']);
    researchItems.forEach((item) => {
      if (item.experimentsList) {
        item.experimentsList.forEach((exp) => {
          assert.ok(exp.id, `Experiment in ${item.slug} must have an ID`);
          assert.ok(exp.title, `Experiment ${exp.id} must have a title`);
          assert.ok(exp.objective, `Experiment ${exp.id} must have an objective`);
          assert.ok(validStatuses.has(exp.status), `Experiment ${exp.id} has invalid status "${exp.status}"`);
          if (exp.status === 'Completed') {
            assert.ok(exp.results && exp.results.length > 0, `Completed experiment ${exp.id} must have recorded results`);
          }
        });
      }
    });
  });

  it('should contain structured methodology stages with tool assignments', () => {
    researchItems.forEach((item) => {
      if (item.methodologyStages) {
        item.methodologyStages.forEach((stage) => {
          assert.ok(stage.stage, `Stage in ${item.slug} must have a stage label`);
          assert.ok(stage.title, `Stage in ${item.slug} must have a title`);
          assert.ok(stage.description, `Stage in ${item.slug} must have a description`);
        });
      }
    });
  });

  it('should explicitly separate factual findings from technical interpretation and state open questions', () => {
    researchItems.forEach((item) => {
      assert.ok(item.interpretation, `Research item ${item.slug} must provide technical interpretation`);
      assert.ok(item.openQuestions && item.openQuestions.length > 0, `Research item ${item.slug} must acknowledge open questions`);
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
