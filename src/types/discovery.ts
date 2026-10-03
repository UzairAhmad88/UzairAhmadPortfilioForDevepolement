export type DiscoveryItemType =
  | 'project'
  | 'research'
  | 'lab'
  | 'note'
  | 'technology'
  | 'methodology';

export interface DiscoveryItem {
  id: string;                      // Unique namespaced ID (e.g., 'project:deep-learning-stock-return-prediction')
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
  internalScore: number;           // Strictly deterministic functional sort weight; NEVER exposed as quality score or match percentage
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
