# Engineering Notes — Data Model & Schema Specification

**Uzair Ahmad — Personal Engineering & Research Platform**  
**Phase 11 Specification**

---

## 1. Core TypeScript Interface

Located at `src/types/note.ts`:

```typescript
export type NoteType = 
  | 'technical'
  | 'debugging'
  | 'architecture'
  | 'decision'
  | 'learning'
  | 'experiment'
  | 'research-reflection'
  | 'implementation'
  | 'performance'
  | 'ux'
  | 'data'
  | 'quant';

export type NoteTopic =
  | 'Software Engineering'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'AI / ML'
  | 'Data'
  | 'Quant'
  | 'HCI'
  | 'Performance'
  | 'Accessibility'
  | 'Architecture'
  | 'DevOps'
  | 'Debugging';

export type NoteStatus = 'draft' | 'published' | 'archived';

export interface NoteSource {
  title: string;
  url: string;
  type?: 'documentation' | 'paper' | 'rfc' | 'book' | 'article' | 'codebase';
  author?: string;
  date?: string;
}

export interface NoteSection {
  heading: string;
  subheading?: string;
  content: string; // Markdown or structured prose
  codeSnippet?: {
    code: string;
    language: string;
    filename?: string;
    caption?: string;
  };
  callout?: {
    type: 'note' | 'tip' | 'warning' | 'important';
    title: string;
    message: string;
  };
}

export interface EngineeringNote {
  id: string;
  slug: string;
  title: string;
  summary: string;
  type: NoteType;
  status: NoteStatus;
  topics: NoteTopic[];
  technologies: string[]; // Canonical technology IDs from src/data/technologies.ts

  // Technical Breakdown
  problem: string;
  context: string;
  investigation?: string;
  observedError?: string;
  rootCause?: string;
  solution: string;
  sections?: NoteSection[];

  // Analytical Reflection
  tradeoffs?: string[];
  lessonsLearned: string[];

  // Cross-System Relationships
  relatedProjects?: string[];   // Canonical project slugs from src/data/projects.ts
  relatedResearch?: string[];   // Canonical research slugs from src/data/research.ts
  sources?: NoteSource[];

  // Provenance & Metadata
  createdAt: string;            // YYYY-MM-DD
  updatedAt?: string;           // YYYY-MM-DD
  readingTimeMinutes?: number;  // Deterministically calculated
}
```

---

## 2. Bidirectional Relationship Extensions

### 2.1 Project Entity Extension (`src/types/project.ts`)
```typescript
export interface Project {
  // ... existing fields ...
  relatedNotes?: string[]; // Slugs of Engineering Notes linked to this project
}
```

### 2.2 Research Entity Extension (`src/types/research.ts`)
```typescript
export interface ResearchItem {
  // ... existing fields ...
  relatedNotes?: string[]; // Slugs of Engineering Notes stemming from this inquiry
}
```

### 2.3 Technology Entity Extension (`src/types/technology.ts`)
```typescript
export interface Technology {
  // ... existing fields ...
  noteSlugs?: string[]; // Slugs of Engineering Notes providing empirical evidence
}
```

---

## 3. Data Integrity & Validation Rules

1. **Unique Key Enforcement:** Every `id` and `slug` must be globally unique across `src/data/notes.ts`.
2. **Project Slug Integrity:** Every string in `note.relatedProjects` must resolve to an existing project slug in `src/data/projects.ts`.
3. **Research Slug Integrity:** Every string in `note.relatedResearch` must resolve to an existing research slug in `src/data/research.ts`.
4. **Technology ID Integrity:** Every string in `note.technologies` must resolve to a valid canonical ID in `src/data/technologies.ts`.
5. **No Draft Exposure:** Only notes with `status: 'published'` are returned by `getPublishedNotes()`.
6. **Mandatory Lessons:** Every published note must contain at least one concrete entry in `lessonsLearned`.

These invariants are strictly tested by `tests/unit/notes.test.ts`.
