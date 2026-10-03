import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  buildKnowledgeGraph,
  validateKnowledgeGraph,
  getNodeById,
  getNodeBySlug,
  getDirectEdges,
  getConnectedNodes,
  getFocusedGraph,
} from '../../src/lib/knowledge/graphBuilder.ts';
import { knowledgeGraph, knowledgeGraphValidation } from '../../src/data/knowledgeGraph.ts';

describe('Phase 13: Knowledge Graph System & Relational Integrity', () => {
  it('should build a non-empty knowledge graph from canonical sources', () => {
    const graph = buildKnowledgeGraph();
    assert.ok(graph.nodes.length > 0, 'Graph should have nodes');
    assert.ok(graph.edges.length > 0, 'Graph should have edges');
  });

  it('should pass structural integrity validation with zero invalid edges', () => {
    const validation = validateKnowledgeGraph(knowledgeGraph);
    assert.strictEqual(validation.isValid, true, 'Knowledge graph should be valid');
    assert.deepStrictEqual(validation.invalidEdgeIds, [], 'There should be 0 invalid edges');
    assert.ok(validation.totalNodes >= 30, `Expected at least 30 nodes, found ${validation.totalNodes}`);
    assert.ok(validation.totalEdges >= 50, `Expected at least 50 edges, found ${validation.totalEdges}`);
  });

  it('should find nodes by ID and by slug accurately', () => {
    const projNode = getNodeBySlug(knowledgeGraph, 'project', 'deep-learning-stock-return-prediction');
    assert.ok(projNode, 'Should find project node by slug');
    assert.strictEqual(projNode?.id, 'project:deep-learning-stock-return-prediction');
    assert.strictEqual(projNode?.href, '/work/deep-learning-stock-return-prediction');

    const fetchedById = getNodeById(knowledgeGraph, 'project:deep-learning-stock-return-prediction');
    assert.deepStrictEqual(fetchedById, projNode);
  });

  it('should resolve direct edges and connected nodes for an entity', () => {
    const edges = getDirectEdges(knowledgeGraph, 'project:deep-learning-stock-return-prediction');
    assert.ok(edges.length > 0, 'Expected direct edges for project');

    const connected = getConnectedNodes(knowledgeGraph, 'project:deep-learning-stock-return-prediction');
    assert.ok(connected.length > 0, 'Expected connected nodes for project');
    assert.ok(connected.length <= edges.length, 'Unique connected nodes should be <= total edges');
  });

  it('should generate a focused graph view with depth 1 and depth 2', () => {
    const focus1 = getFocusedGraph(knowledgeGraph, 'project:deep-learning-stock-return-prediction', 1);
    assert.ok(focus1, 'Focus view depth 1 should exist');
    assert.strictEqual(focus1?.focusNode.slug, 'deep-learning-stock-return-prediction');
    assert.ok((focus1?.connectedNodes.length || 0) > 0);
    assert.strictEqual(focus1?.secondaryNodes, undefined);

    const focus2 = getFocusedGraph(knowledgeGraph, 'project:deep-learning-stock-return-prediction', 2);
    assert.ok(focus2, 'Focus view depth 2 should exist');
    assert.ok(Array.isArray(focus2?.secondaryNodes));
  });

  it('should support technology nodes with derived relationships across projects, lab, and notes', () => {
    const pythonNode = getNodeById(knowledgeGraph, 'technology:python');
    assert.ok(pythonNode, 'Python technology node should exist');
    const edges = getDirectEdges(knowledgeGraph, 'technology:python');
    assert.ok(edges.length > 0, 'Python node should have connected edges');
  });

  it('should ensure zero fabricated quality scores, stars, or tiers in knowledge nodes', () => {
    for (const node of knowledgeGraph.nodes) {
      assert.ok(!('qualityScore' in (node.metadata || {})), `Node ${node.id} has qualityScore`);
      assert.ok(!('rank' in (node.metadata || {})), `Node ${node.id} has rank`);
      assert.ok(!('tier' in (node.metadata || {})), `Node ${node.id} has tier`);
    }
  });
});
