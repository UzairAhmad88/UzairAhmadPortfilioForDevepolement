# Collaboration Data Model Specification (Phase 21)

## 1. Type Definitions (`src/types/collaboration.ts`)

```typescript
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
```

---

## 2. Centralized Profile Object (`src/data/collaboration.ts`)

- `title`: Top-level headline for the collaboration experience.
- `eyebrow`: Monospace categorization indicator.
- `introduction`: High-level summary of technical collaboration stance.
- `positioningStatement`: Problem-first core philosophy statement.
- `areas`: Array of 4 structured collaboration areas with canonical evidence linkages.
- `engagementTypes`: Array of 4 structured engagement modes with target profiles and evidence.
- `preferredProblems`: List of technical characteristics that make for a high-fit project.
- `nonGoals`: List of boundaries eliminating ambiguity regarding unsupported work.
- `process`: 6-stage engineering lifecycle with operational principles.
- `briefQuestions`: 4 structured questions guiding prospective collaborators.
- `availability`: Availability state, label, note, and explicit date stamp.
- `contactGuidance`: Response SLA and context recommendations.
- `updatedAt`: ISO date timestamp (`2026-10-01`).
