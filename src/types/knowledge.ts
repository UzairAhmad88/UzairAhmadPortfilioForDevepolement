export type KnowledgeNodeType =
  | 'project'
  | 'research'
  | 'lab'
  | 'note'
  | 'technology'
  | 'methodology';

export type KnowledgeRelationshipType =
  | 'USED_IN'          // Technology used in Project/Lab/Research
  | 'EXPLORES'         // Research explores a problem/tech
  | 'ORIGINATED_FROM'  // Project originated from a Lab experiment
  | 'PROMOTED_TO'      // Lab experiment graduated to a Project
  | 'DOCUMENTS'        // Note documents a lesson/failure from a Project/Lab/Research/Tech
  | 'INFORMED_BY'      // Project/Research informed by Note or Research
  | 'RELATED_TO'       // General meaningful relationship
  | 'IMPLEMENTS'       // Project implements a research inquiry/lab prototype
  | 'VALIDATES'        // Experiment validates a model/assumption
  | 'USES_METHOD';     // Entity utilizes a methodology step

export interface KnowledgeNode {
  id: string;          // Prefixed unique ID (e.g., 'project:deep-learning-stock-return-prediction')
  rawId: string;       // Original entity ID
  type: KnowledgeNodeType;
  title: string;
  slug: string;
  href: string;
  summary?: string;
  badge?: string;
  metadata?: Record<string, any>;
}

export interface KnowledgeEdge {
  id: string;          // Unique edge identifier
  source: string;      // Source node ID (e.g., 'project:deep-learning-stock-return-prediction')
  target: string;      // Target node ID (e.g., 'technology:python')
  relationship: KnowledgeRelationshipType;
  label: string;       // Human-readable relationship label
  bidirectional?: boolean;
  metadata?: Record<string, any>;
}

export interface KnowledgeGraph {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  generatedAt: string;
}

export interface GraphValidationReport {
  totalNodes: number;
  totalEdges: number;
  nodesByType: Record<KnowledgeNodeType, number>;
  edgesByRelationship: Record<KnowledgeRelationshipType, number>;
  orphanedNodeIds: string[];
  invalidEdgeIds: string[];
  warnings: string[];
  isValid: boolean;
}

export interface FocusedGraphView {
  focusNode: KnowledgeNode;
  directEdges: KnowledgeEdge[];
  connectedNodes: KnowledgeNode[];
  secondaryNodes?: KnowledgeNode[];
  secondaryEdges?: KnowledgeEdge[];
  groupedByType: Record<KnowledgeNodeType, KnowledgeNode[]>;
}
