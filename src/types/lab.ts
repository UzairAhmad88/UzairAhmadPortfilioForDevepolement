export type LabStatus = 'Experiment' | 'Prototype' | 'Promoted to Work' | 'Archived';

export type LabType = 'Experiment' | 'Prototype' | 'Exploration' | 'Proof of Concept';

export interface LabEntry {
  slug: string;
  title: string;
  summary: string;
  type: LabType;
  topics: string[];
  status: LabStatus;
  date: string;
  technologies: string[];
  objective: string;
  experimentDetails: string;
  result: string;
  keyLesson?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  relatedWorkSlug?: string;
  relatedResearchSlug?: string;
}
