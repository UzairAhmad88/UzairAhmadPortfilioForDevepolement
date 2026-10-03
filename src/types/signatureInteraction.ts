import type { TechnicalDecision, TechnicalChallenge, ProjectResult } from './project';

export type EngineeringLensId = 
  | 'architecture'
  | 'constraints'
  | 'implementation'
  | 'evidence'
  | 'tradeoffs'
  | 'connections';

export interface EngineeringLensMetadata {
  id: EngineeringLensId;
  name: string;
  tagline: string;
  badge: string;
  icon: string;
  description: string;
  question: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  subtitle?: string;
  type: 'input' | 'process' | 'model' | 'storage' | 'output' | 'gateway';
  details: string[];
}

export interface ArchitectureStageFlow {
  step: string;
  label: string;
  role: string;
  technologies: string[];
}

export interface LensArchitectureContent {
  topologyDescription: string;
  stages: ArchitectureStageFlow[];
  nodes: ArchitectureNode[];
  dataFlowSummary: string;
  stateModel?: string;
}

export interface LensConstraintsContent {
  problemStatement: string;
  mathematicalBoundaries: string[];
  operationalConstraints: string[];
  latencyAndThroughput?: string;
  failureModesGuarded: string[];
}

export interface LensImplementationContent {
  coreStack: {
    id: string;
    name: string;
    role: string;
    category: string;
  }[];
  keyHighlights: string[];
  codeOrContractSnippet?: {
    language: string;
    filename: string;
    code: string;
    caption: string;
  };
}

export interface LensEvidenceContent {
  verifiableResults: ProjectResult[];
  outcomes: string[];
  githubVerified: boolean;
  githubUrl?: string;
  githubStars?: number;
  vercelVerified: boolean;
  vercelUrl?: string;
  deploymentTarget?: string;
  auditMetrics: {
    label: string;
    value: string;
    status: 'pass' | 'optimal' | 'verified';
  }[];
}

export interface LensTradeoffsContent {
  decisions: TechnicalDecision[];
  challenges: TechnicalChallenge[];
  knownLimitations: string[];
  lessonsLearned: string[];
}

export interface LensConnectionsContent {
  connectedResearch: {
    slug: string;
    title: string;
    relationship: string;
    summary?: string;
  }[];
  connectedLab: {
    slug: string;
    title: string;
    relationship: string;
    status: string;
  }[];
  connectedNotes: {
    slug: string;
    title: string;
    topic: string;
    relationship: string;
  }[];
  historicalEvolution?: {
    predecessorSlug?: string;
    predecessorTitle?: string;
    successorSlug?: string;
    successorTitle?: string;
  };
  totalConnectedEntities: number;
}

export interface SignatureInteractionPayload {
  projectSlug: string;
  projectTitle: string;
  domain: string;
  category: string;
  status: string;
  shortDescription: string;
  lenses: {
    architecture: LensArchitectureContent;
    constraints: LensConstraintsContent;
    implementation: LensImplementationContent;
    evidence: LensEvidenceContent;
    tradeoffs: LensTradeoffsContent;
    connections: LensConnectionsContent;
  };
}
