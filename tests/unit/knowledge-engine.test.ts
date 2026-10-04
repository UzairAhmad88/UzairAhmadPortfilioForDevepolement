import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  curatedKnowledgePaths,
  curatedKnowledgeClusters,
  resolveKnowledgeContext,
  normalizeTopic,
  getKnowledgePathways,
  getKnowledgeClusters,
} from '../../src/lib/knowledge/engine.ts';
import { knowledgeGraph, getNodeById } from '../../src/data/knowledgeGraph.ts';

describe('Phase 30: Personal Knowledge Engine & Entity Resolution', () => {
  it('should verify all curated knowledge pathways have valid existing nodes in knowledgeGraph', () => {
    const pathways = getKnowledgePathways();
    assert.ok(pathways.length >= 3, 'Must define at least 3 curated engineering pathways');

    for (const path of pathways) {
      assert.ok(path.id, 'Pathway must have an ID');
      assert.ok(path.title, 'Pathway must have a title');
      assert.ok(path.description, 'Pathway must have a description');
      assert.ok(path.steps.length >= 3, `Pathway ${path.id} must have at least 3 sequential steps`);

      for (const step of path.steps) {
        const node = getNodeById(knowledgeGraph, step.nodeId);
        assert.ok(node, `Pathway step node ${step.nodeId} must resolve to a valid node in knowledgeGraph`);
        assert.strictEqual(node.type, step.nodeType, `Step nodeType must match actual node type for ${step.nodeId}`);
        assert.ok(step.rationale, 'Step must have a clear engineering rationale');
        assert.ok(step.keyLearning, 'Step must have a documented key takeaway');
      }
    }
  });

  it('should verify all knowledge clusters contain valid nodes and technologies', () => {
    const clusters = getKnowledgeClusters();
    assert.ok(clusters.length >= 3, 'Must define at least 3 knowledge clusters');

    for (const cluster of clusters) {
      assert.ok(cluster.name, 'Cluster must have a name');
      assert.ok(cluster.description, 'Cluster must have a description');
      assert.ok(cluster.nodeIds.length >= 3, `Cluster ${cluster.id} must have at least 3 entities`);

      for (const nodeId of cluster.nodeIds) {
        const node = getNodeById(knowledgeGraph, nodeId);
        assert.ok(node, `Cluster entity ${nodeId} must resolve in knowledgeGraph`);
      }

      assert.ok(cluster.primaryTechnologies.length > 0, 'Cluster must specify primary technologies');
    }
  });

  it('should deterministically resolve knowledge context for projects with connected entities', () => {
    const context = resolveKnowledgeContext('deep-learning-stock-return-prediction', 'project');
    assert.ok(context, 'Must resolve knowledge context for primary stock prediction project');
    assert.strictEqual(context.currentEntity.slug, 'deep-learning-stock-return-prediction');
    assert.ok(context.relatedTechnologies.length > 0, 'Must have connected technologies');
    assert.ok(context.pathways.length > 0, 'Must connect to curated quantitative pathway');
    assert.ok(context.nextExploration.length > 0, 'Must provide deterministic next exploration items');
  });

  it('should deterministically resolve knowledge context for research inquiries', () => {
    const context = resolveKnowledgeContext('signal-research', 'research');
    assert.ok(context, 'Must resolve knowledge context for signal research inquiry');
    assert.strictEqual(context.currentEntity.slug, 'signal-research');
    assert.ok(context.relatedProjects.length > 0, 'Research must link to related projects');
    assert.ok(context.nextExploration.length > 0, 'Must provide exploration next steps');
  });

  it('should normalize topic synonyms correctly and idempotently', () => {
    assert.strictEqual(normalizeTopic('ml'), 'Machine Learning');
    assert.strictEqual(normalizeTopic('machine-learning'), 'Machine Learning');
    assert.strictEqual(normalizeTopic('dl'), 'Deep Learning');
    assert.strictEqual(normalizeTopic('quant'), 'Quantitative Finance');
    assert.strictEqual(normalizeTopic('quantitative-finance'), 'Quantitative Finance');
    assert.strictEqual(normalizeTopic('multi-agent'), 'Agentic Systems');
    assert.strictEqual(normalizeTopic('Distributed Systems'), 'Distributed Systems');
  });

  it('should safely return undefined for invalid or nonexistent entities', () => {
    const invalidContext = resolveKnowledgeContext('nonexistent-project-xyz', 'project');
    assert.strictEqual(invalidContext, undefined);
  });
});
