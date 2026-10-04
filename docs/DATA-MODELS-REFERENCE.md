# Data Models & Schemas Reference

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Type Definition Root:** `src/types/` (Strict TypeScript 5.7.3)  

---

## 1. Core Domain Interfaces

### 1.1 Project (`src/types/project.ts`)
Represents an engineering case study with complete technical depth, Project DNA, and 6-lens data.

```typescript
export interface Project {
  id: string;                      // Unique stable identifier (e.g. 'deep-learning-stock-return-prediction')
  slug: string;                    // URL route slug (e.g. 'deep-learning-stock-return-prediction')
  title: string;                   // Case study display title
  tagline: string;                 // High-level value summary
  category: ProjectCategory;       // 'quant-ml' | 'ai-systems' | 'full-stack' | 'desktop'
  featured: boolean;               // Homepage hero placement flag
  status: 'production' | 'completed' | 'active' | 'archived' | 'paused';
  year: number;                    // Year of creation/completion
  role: string;                    // Role (e.g. 'Lead Architect & ML Engineer')
  summary: string;                 // Detailed technical synopsis
  technologies: string[];          // Array of canonical technology IDs (e.g. ['python', 'pytorch'])
  githubUrl?: string;              // Verifiable GitHub repository URL
  liveUrl?: string;                // Live deployment URL if available
  metrics: ProjectMetric[];        // Empirical performance metrics (loss, latency, throughput)
  architecture: ProjectArchitecture; // Stages, components, and topology visualization
  lenses: ProjectLenses;           // 6 Lenses: Overview, Architecture, Constraints, Stack, Evidence, Lessons
  challenges: string[];            // Technical obstacles overcome
  limitations: string[];           // Honest empirical constraints
  lessonsLearned: string[];        // Architectural retrospectives
  relatedResearch?: string[];      // Connected research inquiry IDs
  relatedNotes?: string[];         // Connected engineering note IDs
}
```

### 1.2 ResearchItem (`src/types/research.ts`)
Represents a hypothesis-driven scientific or quantitative inquiry dossier.

```typescript
export interface ResearchItem {
  id: string;                      // Unique ID (e.g. 'signal-research')
  slug: string;                    // URL route slug
  title: string;                   // Inquiry headline
  subtitle: string;                // Contextual summary
  stage: 'hypothesis' | 'methodology' | 'empirical' | 'concluded';
  topic: string;                   // Research domain (e.g. 'Quantitative Signal Processing')
  hypothesis: string;              // Formal mathematical/empirical hypothesis statement
  methodology: ResearchStage[];    // Step-by-step experimental stages with assigned tools
  findings: string[];              // Factually verified empirical results
  interpretation: string;          // Technical analysis of results
  mathematicalFormulations: string[]; // Mathematical equations / LaTeX strings
  limitations: string[];           // Known theoretical constraints
  openQuestions: string[];         // Unresolved future research questions
  technologies: string[];          // Associated technology IDs
  relatedProjects: string[];       // Associated project slugs
  relatedNotes: string[];          // Associated note slugs
}
```

### 1.3 EngineeringNote (`src/types/note.ts`)
Represents an in-depth technical note focused on systems engineering, databases, or algorithms.

```typescript
export interface EngineeringNote {
  id: string;                      // Unique ID (e.g. 'async-sqlalchemy-session-lifecycle')
  slug: string;                    // URL route slug
  title: string;                   // Note headline
  summary: string;                 // Problem & solution summary
  date: string;                    // Publication date (YYYY-MM-DD)
  category: 'systems' | 'data' | 'ai' | 'web' | 'architecture';
  readingTimeMinutes: number;      // Calculated reading duration
  technologies: string[];          // Associated technology IDs
  codeSnippets: CodeSnippet[];     // Formatted code blocks with language annotations
  relatedProjects?: string[];      // Cross-referenced project IDs
  relatedResearch?: string[];      // Cross-referenced research IDs
}
```

### 1.4 LabItem (`src/types/lab.ts`)
Represents an experimental workbench, interactive simulator, or terminal CLI tool.

```typescript
export interface LabItem {
  id: string;                      // Unique ID (e.g. 'fractional-diff-cli')
  slug: string;                    // URL route slug
  title: string;                   // Workbench title
  status: 'completed' | 'prototype' | 'concept';
  type: 'interactive' | 'cli' | 'probe' | 'layout';
  summary: string;                 // Experiment objective
  repoUrl?: string;                // GitHub repository URL
  demoUrl?: string;                // Live sandbox or demo endpoint
  cliUsage?: string;               // Terminal command syntax
  technologies: string[];          // Associated technology IDs
}
```

### 1.5 Technology (`src/types/technology.ts`)
Represents a canonical language, framework, database, or tool in the stack.

```typescript
export interface Technology {
  id: string;                      // Canonical ID (e.g. 'python', 'langgraph')
  slug: string;                    // Route slug (e.g. 'python')
  name: string;                    // Formatted display name (e.g. 'Python 3.11+')
  category: 'languages' | 'frameworks' | 'data-ml' | 'databases' | 'tools' | 'cloud';
  description: string;             // Architectural role in the stack
  ecosystem: string[];             // Related tools and libraries
}
```

### 1.6 TimelineEvent (`src/types/timeline.ts`)
Represents a chronological milestone across the engineering journey.

```typescript
export interface TimelineEvent {
  id: string;                      // Unique event identifier
  date: string;                    // Date string (YYYY-MM-DD or YYYY-MM)
  year: number;                    // Event calendar year
  title: string;                   // Milestone summary
  description: string;             // Detailed event narrative
  type: 'project' | 'research' | 'lab' | 'milestone' | 'education';
  entitySlug?: string;             // Link to entity page
  technologies: string[];          // Associated technology IDs
}
```

### 1.7 Knowledge & Discovery Models (`src/types/knowledge.ts`, `src/types/discovery.ts`)

```typescript
export interface KnowledgeNode {
  id: string;                      // Entity ID
  label: string;                   // Display title
  type: 'project' | 'research' | 'lab' | 'note' | 'technology';
  slug: string;                    // URL destination
  radius?: number;                 // Graph node visual weight
}

export interface KnowledgeEdge {
  source: string;                  // Source node ID
  target: string;                  // Target node ID
  relationship: 'uses' | 'informs' | 'validates' | 'documents' | 'extends';
}

export interface SearchDocument {
  id: string;                      // Unique search index key
  title: string;                   // Searchable headline
  summary: string;                 // Searchable excerpt
  type: 'project' | 'research' | 'lab' | 'note' | 'technology';
  slug: string;                    // Route URL
  url: string;                     // Full path
  technologies: string[];          // Searchable stack tokens
  topic?: string;                  // Topic classification
}
```

### 1.8 GitHub & Vercel Models (`src/types/github.ts`, `src/types/vercel.ts`, `src/types/projectSync.ts`)

```typescript
export interface GitHubRepository {
  name: string;
  fullName: string;
  url: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  topics: string[];
  updatedAt: string;
  isArchived: boolean;
}

export interface VercelDeployment {
  id: string;
  name: string;
  url: string;
  state: 'READY' | 'BUILDING' | 'ERROR' | 'CANCELED';
  target: 'production' | 'preview';
  createdAt: number;
  meta?: Record<string, string>;
}

export interface ProjectSyncRecord {
  projectSlug: string;
  githubRepo?: string;
  vercelDeployment?: string;
  lastSyncedAt: string;
  syncStatus: 'SYNCED' | 'DRIFT_DETECTED' | 'MANUAL_OVERRIDE';
}
```
