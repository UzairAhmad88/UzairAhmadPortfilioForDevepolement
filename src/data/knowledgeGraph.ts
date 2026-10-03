import {
  buildKnowledgeGraph,
  validateKnowledgeGraph,
  getNodeById,
  getNodeBySlug,
  getDirectEdges,
  getConnectedNodes,
  getFocusedGraph,
} from '../lib/knowledge/graphBuilder.ts';
import type {
  KnowledgeGraph,
  GraphValidationReport,
} from '../types/knowledge.ts';

// Singleton build-time graph instance
export const knowledgeGraph: KnowledgeGraph = buildKnowledgeGraph();

// Singleton validation report
export const knowledgeGraphValidation: GraphValidationReport = validateKnowledgeGraph(knowledgeGraph);

export {
  buildKnowledgeGraph,
  validateKnowledgeGraph,
  getNodeById,
  getNodeBySlug,
  getDirectEdges,
  getConnectedNodes,
  getFocusedGraph,
};
