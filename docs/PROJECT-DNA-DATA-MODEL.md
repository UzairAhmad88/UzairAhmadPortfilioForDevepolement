# PROJECT DNA DATA MODEL (PHASE 06)
## Schema, Derivation Logic & Type Contracts

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Status:** Active / Production Specification  
> **Phase:** 06 — Project DNA  

---

## 1. TYPESCRIPT INTERFACES

The Project DNA contracts are defined in `src/types/project.ts`:

```typescript
export type ProjectContext = 
  | 'Personal Engineering'
  | 'Independent Research'
  | 'Academic (FYP)'
  | 'Academic Project'
  | 'Client Platform'
  | 'Open Source'
  | 'Prototype / Experiment';

export interface ProjectEvidenceItem {
  label: string;
  url?: string;
  type: 'github' | 'live' | 'demo' | 'case-study' | 'documentation';
  verified: boolean;
}

export interface ProjectDNAMetadata {
  type: string;
  status: string;
  rawStatus: ProjectStatus;
  year?: string;
  timeline?: string;
  role?: string;
  context?: string;
  technologies: string[];
  evidence: ProjectEvidenceItem[];
  deployment?: string;
  domain?: string;
  architecturePattern?: string;
}
```

---

## 2. DETERMINISTIC EXTRACTION PIPELINE (`src/utils/projectDNA.ts`)

The canonical `getProjectDNA(project: Project): ProjectDNAMetadata` utility normalizes raw project records into clean DNA objects:

```text
Raw Project Object (src/data/projects.ts)
       │
       ▼
1. Lifecycle Status Mapping (active -> 'Active Research', academic -> 'Academic FYP', etc.)
       │
       ▼
2. Context Deduction (e.g. FYP -> 'Academic (FYP)', Client -> 'Client Platform')
       │
       ▼
3. Deployment Derivation (e.g. production -> 'Vercel (Production)', quant -> 'Local Research / GPU (CUDA)')
       │
       ▼
4. Evidence Assembly (GitHub Repo + Live Application + On-Platform Case Study)
       │
       ▼
5. Explicit Override Merge (project.dna)
       │
       ▼
ProjectDNAMetadata Fingerprint Object
```

---

## 3. VERIFIED DNA MANIFEST (6 PROJECTS)

| Project Slug | Type | Status | Role | Context | Deployment | Evidence Types |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `deep-learning-stock-return-prediction` | Quantitative Research & System | Active Research | Lead Quantitative AI Engineer | Independent Research | Local Research / GPU (CUDA) | GitHub (Public), Case Study |
| `multi-agent-prospect-intelligence` | Final Year Project (FYP) & AI System | Academic FYP | Lead Architect & AI Systems Engineer | Academic (FYP) | Python / LangGraph Agent Runtime | GitHub (Public), Case Study |
| `curasphere-hms` | Healthcare Management SaaS | Completed | Full-Stack Web Engineer | Personal Engineering | Vercel (Production) | GitHub (Public), Live Demo, Case Study |
| `market-regime-engine` | Quantitative Market Intelligence | Active Research | Quantitative Machine Learning Engineer | Independent Research | Local Research / Jupyter Engine | GitHub (Public), Case Study |
| `restaurant-pos` | Operations & POS Software | Completed | Frontend & System Engineer | Personal Engineering | Local Execution / Browser | GitHub (Public), Case Study |
| `hayatabad-gym` | Fitness Platform & Brand Experience | Completed | Web Designer & Developer | Client Platform | Web Hosting | GitHub (Public), Case Study |
