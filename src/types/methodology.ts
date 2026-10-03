export interface MethodologyStep {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  questions: string[];
  practices: string[];
  artifacts: string[];
  projectSlugs: string[];
}

export interface EngineeringDecisionPattern {
  id: string;
  title: string;
  context: string;
  decision: string;
  alternatives: string[];
  rationale: string;
  tradeoffs: string[];
  projectSlugs: string[];
}

export interface BuildPrinciple {
  id: string;
  title: string;
  statement: string;
  description: string;
  evidenceSlugs: string[];
}

export interface ProjectPathFlow {
  id: string;
  name: string;
  domain: string;
  projectSlug: string;
  description: string;
  steps: string[];
}

export interface MethodologyManifest {
  headline: string;
  subheading: string;
  philosophy: string;
  steps: MethodologyStep[];
  decisionPatterns: EngineeringDecisionPattern[];
  principles: BuildPrinciple[];
  pathFlows: ProjectPathFlow[];
}
