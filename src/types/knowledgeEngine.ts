import type { KnowledgeNode, KnowledgeNodeType } from './knowledge.ts';

export interface KnowledgePathStep {
  nodeId: string;
  nodeType: KnowledgeNodeType;
  title: string;
  href: string;
  rationale: string;
  keyLearning: string;
}

export interface KnowledgePath {
  id: string;
  title: string;
  slug: string;
  description: string;
  theme: 'quantitative-finance' | 'agentic-systems' | 'data-engineering' | 'frontend-architecture' | 'system-design';
  steps: KnowledgePathStep[];
}

export interface KnowledgeCluster {
  id: string;
  name: string;
  slug: string;
  description: string;
  nodeIds: string[];
  primaryTechnologies: string[];
}

export interface ContextualNextItem {
  id: string;
  type: KnowledgeNodeType;
  title: string;
  href: string;
  summary: string;
  connectionReason: string;
  connectionPriority: 'explicit' | 'derived' | 'contextual';
}

export interface KnowledgeContext {
  currentEntity: KnowledgeNode;
  relatedProjects: KnowledgeNode[];
  relatedResearch: KnowledgeNode[];
  relatedNotes: KnowledgeNode[];
  relatedLab: KnowledgeNode[];
  relatedTechnologies: KnowledgeNode[];
  pathways: KnowledgePath[];
  nextExploration: ContextualNextItem[];
}
