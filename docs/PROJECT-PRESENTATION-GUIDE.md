# Project Presentation Guide & Authoring SOP

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Phase:** 05 — Project System 2.0  
**Status:** Approved Standard Operating Procedure  

---

## 1. Step-by-Step Guide for Adding a New Project

When a new software system or research project is engineered, follow these steps to add it to the platform:

### Step 1: Define the Slug & Metadata in `src/data/projects.ts`
Add a new object adhering to the `Project` interface:

```typescript
{
  id: 'unique-project-id',
  slug: 'lowercase-kebab-case-slug',
  title: 'Clear Descriptive System Title',
  shortDescription: 'One-sentence summary of what was built and the primary stack.',
  category: ['quant'], // 'quant' | 'ai' | 'engineering' | 'product'
  projectType: 'Quantitative System & Research',
  domain: 'Quantitative Finance',
  type: 'System', // 'Product' | 'System' | 'Research' | 'Academic' | 'Prototype' | 'Experiment'
  status: 'completed', // 'active' | 'completed' | 'academic' | 'prototype' | 'archived'
  presentationLevel: 'B', // 'A' (Flagship) | 'B' (Detailed) | 'C' (Standard) | 'D' (Archive)
  
  problem: 'Precise technical problem context without generic buzzwords.',
  solution: 'Clear explanation of how the system solves the problem.',
  technologies: ['Python', 'PyTorch', 'FastAPI', 'PostgreSQL'],
  
  githubUrl: 'https://github.com/UzairAhmad88/repository-name',
  liveUrl: 'https://demo-url.vercel.app', // optional if deployed
  
  role: 'Sole Architect & Developer',
  timeline: '2025',
  
  relatedProjects: ['adjacent-project-slug'],
  relatedResearch: ['corresponding-research-slug'],
  
  caseStudy: {
    overview: 'High-level executive summary of the build.',
    context: 'Business, academic, or technical constraints.',
    objectives: [
      'Concrete objective 1',
      'Concrete objective 2'
    ],
    approach: 'Engineering architecture and design methodology.',
    architectureDiagram: 'ASCII or SVG text representation of dataflow.',
    challenges: [
      {
        challenge: 'Exact technical difficulty encountered.',
        solution: 'Specific engineering solution implemented.'
      }
    ],
    keyDecisions: [
      {
        decision: 'Use PostgreSQL instead of MongoDB',
        context: 'Need strict relational integrity across ledger entries.',
        rationale: 'ACID guarantees prevent race conditions.',
        tradeOff: 'Requires upfront migration scripts for schema updates.'
      }
    ],
    results: [
      {
        status: 'Implemented',
        description: 'Successfully deployed and validated with automated test suite.'
      }
    ],
    limitations: [
      'Honest statement of what the system does not handle.'
    ],
    lessonsLearned: [
      'Specific architectural takeaway from the project.'
    ]
  }
}
```

### Step 2: Verify Integrity
Run the automated test runner to ensure all internal slugs, URLs, and relational references resolve:
```bash
npm test
npm run check
```

### Step 3: Build & Deploy
```bash
npm run build
git add src/data/projects.ts
git commit -m "feat(projects): add [project-title] system"
git push origin main
```
