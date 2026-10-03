# About 2.0 System — Data Model Specification

## 1. Type Definitions

Defined in `src/types/about.ts`:

### 1.1 AboutFocusArea
```typescript
export interface AboutFocusArea {
  id: string;                      // Deterministic ID (e.g. "focus-quant-modeling")
  title: string;                   // Technical focus area title
  domain: string;                  // High-level domain (e.g. "Quantitative Finance")
  description: string;             // Concrete 1-2 sentence description
  canonicalHref: string;           // Direct evidence link (/research/[slug], /work/[slug], /lab)
  evidenceType: 'project' | 'research' | 'lab' | 'note' | 'technology';
  keyTechnologies: string[];       // Normalized technology names
}
```

### 1.2 EngineeringPrinciple
```typescript
export interface EngineeringPrinciple {
  number: string;                  // e.g. "01", "02"
  title: string;                   // Principle title
  summary: string;                 // Detailed philosophical explanation
  application: string;             // Practical implementation on the platform
}
```

### 1.3 EducationRecord
```typescript
export interface EducationRecord {
  institution: string;             // "Institute of Management Sciences (IMSciences)"
  degree: string;                  // "Bachelor of Science"
  field: string;                   // "Computer Science"
  location: string;                // "Peshawar, Pakistan"
  period?: string;                 // "2021 – 2025"
  focus?: string[];                // Key coursework and concentration areas
}
```

### 1.4 CollaborationInterest
```typescript
export interface CollaborationInterest {
  id: string;
  area: string;                    // Focus domain
  roleType: string;                // "Full-Time / Research Collaboration", etc.
  description: string;             // Specific technical problem scope
}
```

### 1.5 AboutProfile (Central Schema)
```typescript
export interface AboutProfile {
  name: string;
  title: string;
  eyebrow: string;
  location: string;
  shortBio: string;
  narrativeParagraphs: string[];
  focusAreas: AboutFocusArea[];
  principles: EngineeringPrinciple[];
  education: EducationRecord[];
  collaborationInterests: CollaborationInterest[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
  };
}
```

---

## 2. Dynamic Integration Endpoints

The About page (`src/pages/about.astro`) combines `aboutProfile` from `src/data/about.ts` with canonical dynamic entities:
- `projects` from `src/data/projects.ts` (featured case studies preview).
- `currentlyData` from `src/data/currently.ts` (active workbench direction).
- `/timeline` from Phase 19 (chronological evolution).
- `/archive` from Phase 18 (historical and legacy systems).
