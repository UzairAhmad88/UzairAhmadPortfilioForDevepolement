# DISCOVERY DATA MODEL & SCHEMA SPECIFICATION
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Schema Definitions (`src/types/discovery.ts`)

```typescript
export type DiscoveryItemType =
  | 'project'
  | 'research'
  | 'lab'
  | 'note'
  | 'technology'
  | 'methodology';

export interface DiscoveryItem {
  id: string;                      // Unique namespaced ID (e.g., 'project:curasphere-hms')
  type: DiscoveryItemType;
  slug: string;
  title: string;
  href: string;
  excerpt: string;
  topics: string[];
  technologies: string[];          // Canonical technology IDs
  year?: string;
  status?: string;
  badge?: string;
  searchableText: string;
  relatedIds: string[];            // Connected entity IDs from Knowledge Graph
  metadata?: Record<string, any>;
}

export interface DiscoveryFilterState {
  query?: string;
  type?: DiscoveryItemType | 'all';
  technology?: string;
  topic?: string;
  status?: string;
  year?: string;
}

export interface DiscoveryMatchResult {
  item: DiscoveryItem;
  matchedFields: ('title' | 'technology' | 'topic' | 'excerpt' | 'searchableText' | 'exact')[];
  internalScore: number;           // Functional sorting weight; NEVER displayed to users
  snippet?: string;
}

export interface DiscoveryTaxonomy {
  types: { type: DiscoveryItemType; label: string; count: number }[];
  technologies: { id: string; name: string; count: number }[];
  topics: { name: string; count: number }[];
  statuses: { status: string; count: number }[];
  years: { year: string; count: number }[];
}

export interface DiscoveryIndexPayload {
  items: DiscoveryItem[];
  taxonomy: DiscoveryTaxonomy;
  generatedAt: string;
  totalItems: number;
}
```

---

## 2. Canonical Data Ingestion Pipeline

1. **Projects:** Extracted from `src/data/projects.ts` with normalized canonical technologies, DNA execution model, outcomes, problem, solution, and Knowledge Graph connections.
2. **Research:** Extracted from `src/data/research.ts` with scientific questions, hypotheses, open questions, and domain topics.
3. **Lab Experiments:** Extracted from `src/data/lab.ts` with experimental hypotheses, results, lessons learned, and topics.
4. **Engineering Notes:** Extracted from `src/data/notes.ts` with technical topics, failure investigations, takeaways, and tradeoffs.
5. **Technologies:** Extracted from `src/data/technologies.ts` with roles, categories, taglines, and aliases.
6. **Methodology:** Extracted from `src/data/methodology.ts` with engineering steps, practices, questions, and artifacts.
