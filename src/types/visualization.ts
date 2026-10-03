/**
 * PROJECT VISUALIZATION SYSTEM TYPES
 * Strict TypeScript schema contracts for data-driven technical diagrams,
 * pipelines, architectures, and state graphs.
 */

export type VisualizationType = 
  | 'architecture'
  | 'pipeline'
  | 'state-graph'
  | 'system-flow'
  | 'process-flow';

export type VisualizationStatus = 'actual' | 'prototype' | 'conceptual';

export type NodeRole = 
  | 'input' 
  | 'process' 
  | 'model' 
  | 'guardrail' 
  | 'storage' 
  | 'output' 
  | 'router';

export interface VisualizationNode {
  id: string;
  label: string;
  subLabel?: string;
  role?: NodeRole;
  badge?: string;
  details?: string[];
}

export interface VisualizationConnector {
  from: string;
  to: string;
  label?: string;
  type?: 'directed' | 'bidirectional' | 'fallback';
}

export interface ProjectVisualization {
  id: string;
  type: VisualizationType;
  title: string;
  caption?: string;
  status: VisualizationStatus;
  description?: string;
  sourceEvidence?: string;
  nodes: VisualizationNode[];
  connectors?: VisualizationConnector[];
  textAlternative?: string;
}
