/**
 * LAB VISUAL ARTIFACT SYSTEM TYPES
 * Canonical schema contracts for technical figures, architecture diagrams,
 * telemetry charts, code outputs, and empirical visual evidence.
 */

export type ArtifactType =
  | 'ARCHITECTURE'
  | 'SYSTEM_FLOW'
  | 'DATA_FLOW'
  | 'PIPELINE'
  | 'EXPERIMENT_FLOW'
  | 'ALGORITHM'
  | 'STATE_GRAPH'
  | 'UI_SCREENSHOT'
  | 'TECHNICAL_SCREENSHOT'
  | 'CHART'
  | 'GRAPH'
  | 'CODE_OUTPUT'
  | 'COMPARISON'
  | 'BEFORE_AFTER';

export type EvidenceState =
  | 'actual'
  | 'prototype'
  | 'concept'
  | 'simulation'
  | 'planned';

export interface ArtifactNode {
  id: string;
  label: string;
  subLabel?: string;
  role?: 'input' | 'process' | 'model' | 'guardrail' | 'storage' | 'output' | 'router';
  badge?: string;
  details?: string[];
}

export interface ArtifactConnector {
  from: string;
  to: string;
  label?: string;
  type?: 'directed' | 'bidirectional' | 'fallback';
}

export interface ChartDataPoint {
  label: string;
  value: number;
  secondaryValue?: number;
  annotation?: string;
}

export interface ComparisonTrack {
  name: string;
  metricA: string;
  metricB: string;
  delta: string;
  verdict?: 'advantage' | 'neutral' | 'drawback';
}

export interface ArtifactVisualPayload {
  kind: 'nodes' | 'chart' | 'comparison' | 'code-output' | 'custom-svg';
  nodes?: ArtifactNode[];
  connectors?: ArtifactConnector[];
  chartData?: ChartDataPoint[];
  chartXAxis?: string;
  chartYAxis?: string;
  chartSecondaryYAxis?: string;
  comparisonTracks?: ComparisonTrack[];
  codeOutputSnippet?: {
    language: string;
    code: string;
    output?: string;
  };
}

export interface LabVisualArtifact {
  id: string;
  experimentSlug: string;
  type: ArtifactType;
  title: string;
  subtitle?: string;
  description: string;
  evidenceState: EvidenceState;
  sourceEvidence?: string;
  
  // Interpretation & Context
  whatThisShows: string;
  whatToNotice?: string;
  caption: string;
  textAlternative: string;

  // Visual Data
  visual: ArtifactVisualPayload;

  // Metadata & Relations
  date?: string;
  technologies?: string[];
  relatedProject?: string;
  relatedResearch?: string;
  relatedNote?: string;
}
