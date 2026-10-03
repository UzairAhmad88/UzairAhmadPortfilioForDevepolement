import type { InquiryType } from './contact';

export type AvailabilityState =
  | 'open'
  | 'selective'
  | 'limited'
  | 'unavailable'
  | 'notSpecified';

export interface CollaborationAvailability {
  state: AvailabilityState;
  badgeLabel: string;
  note: string;
  updatedAt: string;
}

export interface CollaborationArea {
  id: string;
  title: string;
  domain: string;
  shortExplanation: string;
  relevantProblems: string[];
  projectSlugs: string[];
  researchSlugs: string[];
  labSlugs: string[];
  technologyIds: string[];
  potentialCollaboration: string;
}

export interface EngagementType {
  id: string;
  title: string;
  category: InquiryType;
  description: string;
  suitableFor: string[];
  evidenceSlugs: {
    type: 'project' | 'research' | 'lab';
    slug: string;
    label: string;
  }[];
  contactType: InquiryType;
  ctaLabel: string;
}

export interface CollaborationProcessStep {
  step: string;
  title: string;
  summary: string;
  principle: string;
}

export interface CollaborationBriefQuestion {
  number: string;
  prompt: string;
  guidance: string;
  example: string;
}

export interface CollaborationProfile {
  title: string;
  eyebrow: string;
  introduction: string;
  positioningStatement: string;
  areas: CollaborationArea[];
  engagementTypes: EngagementType[];
  preferredProblems: string[];
  nonGoals: string[];
  process: CollaborationProcessStep[];
  briefQuestions: CollaborationBriefQuestion[];
  availability: CollaborationAvailability;
  contactGuidance: string[];
  updatedAt: string;
}
