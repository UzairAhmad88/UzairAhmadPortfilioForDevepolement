import { describe, it } from 'node:test';
import assert from 'node:assert';
import { projects, featuredProject, fypProject } from '../../src/data/projects.ts';

describe('Project Visualization System & Architecture Topologies', () => {
  it('should verify structured visualizations on key engineering projects', () => {
    const projectsWithVisualizations = projects.filter((p) => p.caseStudy?.visualizations && p.caseStudy.visualizations.length > 0);
    assert.ok(projectsWithVisualizations.length >= 4, 'At least 4 core projects must have structured visualizations');

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

  it('should verify Quantitative ML Pipeline visualization on featured project', () => {
    const visList = featuredProject.caseStudy?.visualizations;
    assert.ok(visList && visList.length > 0, 'Featured project must have visualizations');
    const pipeline = visList[0];
    assert.strictEqual(pipeline.type, 'pipeline');
    assert.strictEqual(pipeline.status, 'actual');
    assert.ok(pipeline.nodes.some((n) => n.id === 'market-data' && n.role === 'input'));
    assert.ok(pipeline.nodes.some((n) => n.id === 'feature-store' && n.role === 'process'));
    assert.ok(pipeline.nodes.some((n) => n.id === 'neural-arch' && n.role === 'model'));
    assert.ok(pipeline.nodes.some((n) => n.id === 'signal-backtest' && n.role === 'output'));
  });

  it('should verify Multi-Agent State Graph visualization on FYP project', () => {
    const visList = fypProject.caseStudy?.visualizations;
    assert.ok(visList && visList.length > 0, 'FYP project must have visualizations');
    const stateGraph = visList[0];
    assert.strictEqual(stateGraph.type, 'state-graph');
    assert.strictEqual(stateGraph.status, 'prototype');
    assert.ok(stateGraph.nodes.some((n) => n.id === 'orchestrator' && n.role === 'router'));
    assert.ok(stateGraph.nodes.some((n) => n.id === 'guardrails' && n.role === 'guardrail'));
  });

  it('should verify Tiered Healthcare Architecture on CuraSphere HMS', () => {
    const curasphere = projects.find((p) => p.slug === 'curasphere-hms');
    assert.ok(curasphere);
    const visList = curasphere.caseStudy?.visualizations;
    assert.ok(visList && visList.length > 0);
    const arch = visList[0];
    assert.strictEqual(arch.type, 'architecture');
    assert.strictEqual(arch.status, 'actual');
    assert.ok(arch.nodes.some((n) => n.id === 'database-emr' && n.role === 'storage'));
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
