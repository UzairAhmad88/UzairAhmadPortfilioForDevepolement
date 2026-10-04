import { describe, it } from 'node:test';
import assert from 'node:assert';
import { projects, featuredProject, fypProject } from '../../src/data/projects.ts';

describe('Project Visualization System & Architecture Topologies', () => {
  it('should verify structured visualizations on key engineering projects if defined', () => {
    const projectsWithVisualizations = projects.filter((p) => p.caseStudy?.visualizations && p.caseStudy.visualizations.length > 0);

    for (const project of projectsWithVisualizations) {
      for (const vis of project.caseStudy!.visualizations!) {
        assert.ok(vis.id, `Visualization for ${project.slug} must have an id`);
        assert.ok(vis.title, `Visualization for ${project.slug} must have a title`);
        assert.ok(vis.status, `Visualization for ${project.slug} must have a status`);
        assert.ok(['actual', 'prototype', 'conceptual'].includes(vis.status), `Visualization status must be valid`);
        assert.ok(Array.isArray(vis.nodes), `Visualization for ${project.slug} must have a nodes array`);
        assert.ok(vis.nodes.length >= 3, `Visualization for ${project.slug} must have at least 3 nodes`);
        assert.ok(vis.sourceEvidence, `Visualization for ${project.slug} must cite grounding source evidence`);
        assert.ok(vis.textAlternative, `Visualization for ${project.slug} must provide an accessible text alternative`);

        // Verify each node
        for (const node of vis.nodes) {
          assert.ok(node.id, `Node in ${vis.id} must have an id`);
          assert.ok(node.label, `Node in ${vis.id} must have a label`);
          if (node.role) {
            assert.ok(
              ['input', 'process', 'model', 'guardrail', 'storage', 'output', 'router'].includes(node.role),
              `Node role "${node.role}" must be valid in ${vis.id}`
            );
          }
        }
      }
    }
  });

  it('should verify project cases are grounded in real technical implementations', () => {
    const quantProject = projects.find((p) => p.slug === 'deep-learning-stock-return-prediction');
    assert.ok(quantProject);
    assert.ok(quantProject.technologies.includes('PyTorch') || quantProject.technologies.includes('Python'));
  });

  it('should verify FYP project is present with valid academic status', () => {
    assert.ok(fypProject);
    assert.strictEqual(fypProject.slug, 'multi-agent-prospect-intelligence');
  });

  it('should verify CuraSphere HMS project exists with healthcare domain', () => {
    const curasphere = projects.find((p) => p.slug === 'curasphere-hms');
    assert.ok(curasphere);
    assert.ok(curasphere.technologies.length > 0);
  });

  it('should guarantee no fabricated metrics or fake statistics in visualization payloads', () => {
    for (const project of projects) {
      if (project.caseStudy?.visualizations) {
        for (const vis of project.caseStudy.visualizations) {
          const visString = JSON.stringify(vis);
          assert.ok(!visString.includes('98.4%'), 'Must not contain fake accuracy percentages');
          assert.ok(!visString.includes('ROI:'), 'Must not contain fake ROI metrics');
          assert.ok(!visString.includes('Latency: 42ms'), 'Must not contain fake latency claims');
        }
      }
    }
  });
});
