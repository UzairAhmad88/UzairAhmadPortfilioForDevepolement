import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  methodologyManifest,
  methodologySteps,
  engineeringDecisions,
  buildPrinciples,
  projectPathFlows,
  getMethodologyStep,
  getDecisionsForProject,
  getStepsForProject,
} from '../../src/data/methodology.ts';
import { projects } from '../../src/data/projects.ts';

describe('How I Build — Engineering Methodology & Decision System', () => {
  const validProjectSlugs = projects.map((p) => p.slug);

  it('should verify that all 6 methodology steps exist with complete metadata', () => {
    assert.strictEqual(methodologySteps.length, 6, 'Must have exactly 6 methodology steps');

    const expectedStepIds = ['understand', 'model', 'design', 'build', 'validate', 'iterate'];
    for (let i = 0; i < expectedStepIds.length; i++) {
      const step = methodologySteps[i];
      assert.strictEqual(step.id, expectedStepIds[i]);
      assert.strictEqual(step.number, `0${i + 1}`);
      assert.ok(step.title, `Step ${step.id} must have a title`);
      assert.ok(step.tagline, `Step ${step.id} must have a tagline`);
      assert.ok(step.shortDescription, `Step ${step.id} must have a short description`);
      assert.ok(step.description, `Step ${step.id} must have a detailed description`);
      assert.ok(Array.isArray(step.questions) && step.questions.length >= 3, `Step ${step.id} must have at least 3 questions`);
      assert.ok(Array.isArray(step.practices) && step.practices.length >= 3, `Step ${step.id} must have at least 3 practices`);
      assert.ok(Array.isArray(step.artifacts) && step.artifacts.length >= 3, `Step ${step.id} must have at least 3 artifacts`);
      assert.ok(Array.isArray(step.projectSlugs) && step.projectSlugs.length > 0, `Step ${step.id} must reference real project slugs`);

      // Verify all referenced project slugs exist in projects data
      for (const slug of step.projectSlugs) {
        assert.ok(
          validProjectSlugs.includes(slug),
          `Methodology step ${step.id} references non-existent project slug: ${slug}`
        );
      }
    }
  });

  it('should verify engineering decision patterns have valid contexts, rationales, and real project evidence', () => {
    assert.ok(engineeringDecisions.length >= 5, 'Must have at least 5 documented engineering decisions');

    for (const dec of engineeringDecisions) {
      assert.ok(dec.id, 'Decision must have an ID');
      assert.ok(dec.title, `Decision ${dec.id} must have a title`);
      assert.ok(dec.context, `Decision ${dec.id} must have a context`);
      assert.ok(dec.decision, `Decision ${dec.id} must have a decision statement`);
      assert.ok(Array.isArray(dec.alternatives) && dec.alternatives.length > 0, `Decision ${dec.id} must list alternatives`);
      assert.ok(dec.rationale, `Decision ${dec.id} must have a rationale`);
      assert.ok(Array.isArray(dec.tradeoffs) && dec.tradeoffs.length > 0, `Decision ${dec.id} must list trade-offs`);
      assert.ok(Array.isArray(dec.projectSlugs) && dec.projectSlugs.length > 0, `Decision ${dec.id} must reference project evidence`);

      for (const slug of dec.projectSlugs) {
        assert.ok(
          validProjectSlugs.includes(slug),
          `Decision ${dec.id} references non-existent project slug: ${slug}`
        );
      }
    }
  });

  it('should verify core build principles link to valid project evidence', () => {
    assert.ok(buildPrinciples.length >= 4, 'Must have at least 4 build principles');

    for (const p of buildPrinciples) {
      assert.ok(p.id, 'Principle must have an ID');
      assert.ok(p.title, `Principle ${p.id} must have a title`);
      assert.ok(p.statement, `Principle ${p.id} must have a statement`);
      assert.ok(p.description, `Principle ${p.id} must have a description`);
      assert.ok(Array.isArray(p.evidenceSlugs) && p.evidenceSlugs.length > 0, `Principle ${p.id} must cite evidence`);

      for (const slug of p.evidenceSlugs) {
        assert.ok(
          validProjectSlugs.includes(slug),
          `Principle ${p.id} references non-existent project slug: ${slug}`
        );
      }
    }
  });

  it('should verify domain-specific project path flows match real projects and steps', () => {
    assert.ok(projectPathFlows.length >= 3, 'Must have at least 3 domain path flows');

    for (const flow of projectPathFlows) {
      assert.ok(flow.id, 'Flow must have an ID');
      assert.ok(flow.name, `Flow ${flow.id} must have a name`);
      assert.ok(flow.domain, `Flow ${flow.id} must have a domain`);
      assert.ok(validProjectSlugs.includes(flow.projectSlug), `Flow ${flow.id} references invalid project: ${flow.projectSlug}`);
      assert.ok(Array.isArray(flow.steps) && flow.steps.length >= 4, `Flow ${flow.id} must have at least 4 sequential steps`);
    }
  });

  it('should verify helper functions retrieve valid mapped data', () => {
    const understandStep = getMethodologyStep('understand');
    assert.ok(understandStep);
    assert.strictEqual(understandStep?.title, 'Understand');

    const stockDecisions = getDecisionsForProject('deep-learning-stock-return-prediction');
    assert.ok(stockDecisions.length > 0);
    assert.ok(stockDecisions.some((d) => d.id === 'pytorch-over-wrappers'));

    const hmsSteps = getStepsForProject('curasphere-hms');
    assert.ok(hmsSteps.length > 0);
    assert.ok(hmsSteps.some((s) => s.id === 'design'));
  });

  it('should guarantee zero skill percentage rankings, fake proficiency scores, or self-ratings', () => {
    const rawData = JSON.stringify(methodologyManifest);

    // Assert no fake percentages or skill ratings
    assert.ok(!rawData.includes('95%'), 'Must not contain 95% skill ratings');
    assert.ok(!rawData.includes('90%'), 'Must not contain 90% skill ratings');
    assert.ok(!rawData.includes('80%'), 'Must not contain 80% skill ratings');
    assert.ok(!rawData.includes('proficiency'), 'Must not contain proficiency rankings');
    assert.ok(!rawData.includes('Expert level'), 'Must not contain inflated self-ratings');
  });
});
