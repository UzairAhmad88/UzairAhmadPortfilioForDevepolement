# Content Architecture & Entity Relationship System

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Data Storage:** Canonical TypeScript Registries in `src/data/` (Strictly Typed)  

---

## 1. Content Ecosystem & Entity Types

The platform manages 11 core domain entity types, connected through strongly-typed bi-directional relationship graphs.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CONTENT ENTITY ECOSYSTEM                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│     ┌──────────────┐         bridges          ┌──────────────┐             │
│     │   PROJECTS   │ ◄──────────────────────► │ TECHNOLOGIES │             │
│     └──────┬───────┘                          └──────┬───────┘             │
│            │                                         │                     │
│    informs │                                 powers  │                     │
│            ▼                                         ▼                     │
│     ┌──────────────┐                          ┌──────────────┐             │
│     │   RESEARCH   │ ◄──────────────────────► │     LAB      │             │
│     └──────┬───────┘         validates        └──────────────┘             │
│            │                                         ▲                     │
│   explains │                                 builds  │                     │
│            ▼                                         │                     │
│     ┌──────────────┐                                 │                     │
│     │    NOTES     │ ────────────────────────────────┘                     │
│     └──────┬───────┘                                                       │
│            │                                                               │
│            │ emits                                                         │
│            ▼                                                               │
│     ┌──────────────┐                                                       │
│     │   TIMELINE   │ ◄───────────────────────────────────────────────────┤ │
│     └──────────────┘           (Projects, Research, Lab, Archive Events)   │
│                                                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Canonical Source Mapping

| Entity Type | Canonical Source File | TypeScript Model | Primary Identifiers | Key Relationships |
|:---|:---|:---|:---|:---|
| **Project** | `src/data/projects.ts` | `Project` (`src/types/project.ts`) | `id`, `slug` | `technologies`, `relatedResearch`, `relatedNotes`, `architecture` |
| **Research Item** | `src/data/research.ts` | `ResearchItem` (`src/types/research.ts`) | `id`, `slug` | `technologies`, `relatedProjects`, `relatedNotes`, `methodology` |
| **Engineering Note** | `src/data/notes.ts` | `EngineeringNote` (`src/types/note.ts`) | `id`, `slug` | `technologies`, `relatedProjects`, `relatedResearch`, `category` |
| **Lab Item** | `src/data/lab.ts` | `LabItem` (`src/types/lab.ts`) | `id`, `slug` | `technologies`, `relatedProjects`, `relatedResearch`, `status` |
| **Technology** | `src/data/technologies.ts` | `Technology` (`src/types/technology.ts`) | `id`, `slug` | `category`, `projects`, `research`, `lab`, `notes` |
| **Timeline Event** | `src/data/timeline.ts` | `TimelineEvent` (`src/types/timeline.ts`) | `id`, `date` | `type`, `entitySlug`, `technologies` |
| **Archive Project**| `src/data/archive.ts` | `ArchiveProject` (`src/types/archive.ts`) | `id`, `slug` | `status`, `technologies`, `year`, `githubUrl` |
| **Methodology** | `src/data/methodology.ts` | `MethodologyPillar` (`src/types/methodology.ts`) | `id` | `title`, `principles`, `codeContract` |
| **About Profile** | `src/data/site.ts` | `SiteConfig` (`src/types/site.ts`) | `author.name` | `education`, `focusAreas`, `socialLinks` |
| **Collaboration** | `src/data/opportunities.ts`| `CollaborationData` (`src/types/collaboration.ts`)| `id` | `areas`, `engagementTypes`, `deliveryPhases` |
| **Contact Meta** | `src/data/site.ts` | `ContactConfig` (`src/types/site.ts`) | `contact.email` | `formFields`, `spamProtection` |

---

## 3. Entity Relationship Resolution & Integrity

### Bi-directional Graph Resolution
When an entity references another entity (for example, a Project referencing `technologies: ['python', 'pytorch']`), the Knowledge Engine (`src/lib/knowledge/engine.ts`) and Discovery index (`src/lib/discovery/index.ts`):
1. Verifies that `python` and `pytorch` exist in `src/data/technologies.ts`.
2. Automatically associates the Project with the Technology entity page (`/technology/python`).
3. Dynamically suggests the Project on the Technology detail view.

### Referential Integrity Invariants
- **No Orphan Slugs:** Every `relatedResearch`, `relatedProjects`, or `relatedNotes` entry must resolve to a valid entity ID.
- **Automated Validation:** Test suites `tests/unit/projects.test.ts`, `tests/unit/research.test.ts`, and `tests/unit/technologies.test.ts` assert 100% referential integrity during `npm test`.
- **Zero Circular Crash Vulnerability:** Graph traversal functions implement a visited-set mechanism to guarantee finite execution and zero infinite loop crashes.
