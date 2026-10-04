# Canonical Sources of Truth

## 1. Single Source of Truth Directory Map

When editing or updating content across the platform, edit **only** the corresponding canonical TypeScript source file. Never attempt to edit generated files in `dist/` or intermediate build caches in `.astro/`.

| Content Entity | Canonical Source File | TypeScript Interface | Primary Route |
|:---|:---|:---|:---|
| **Projects** | `src/data/projects.ts` | `Project` (`src/types/project.ts`) | `/work/[slug]` |
| **Research Inquiries** | `src/data/research.ts` | `ResearchItem` (`src/types/research.ts`) | `/research/[slug]` |
| **Lab Experiments** | `src/data/lab.ts` | `LabItem` (`src/types/lab.ts`) | `/lab/[slug]` |
| **Visual Artifacts** | `src/data/labArtifacts.ts` | `LabVisualArtifact` (`src/types/labArtifact.ts`) | `/lab/[slug]` |
| **Engineering Notes** | `src/data/notes.ts` | `EngineeringNote` (`src/types/notes.ts`) | `/notes/[slug]` |
| **Technologies** | `src/data/technologies.ts` | `Technology` (`src/types/technology.ts`) | `/technology/[slug]` |
| **Methodology Steps** | `src/data/methodology.ts` | `MethodologyStep` (`src/types/methodology.ts`) | `/how-i-build` |
| **Currently Focus** | `src/data/currently.ts` | `CurrentlyItem` (`src/types/currently.ts`) | `/` (Homepage) |
| **Collaboration Specs**| `src/data/collaboration.ts`| `CollaborationData` (`src/types/collaboration.ts`)| `/collaborate` |
| **Timeline Events** | `src/data/timelineEvents.ts`| `TimelineEvent` (`src/types/timeline.ts`) | `/timeline` |
| **Social & Identity** | `src/data/social.ts` | `SocialProfile` (`src/types/site.ts`) | Global Nav/Footer |

---

## 2. Content Synchronization Workflow

```
[Edit src/data/*.ts] ──► [npm test] ──► [npm run check] ──► [npm run build]
```

1. **Edit Canonical File**: Update the array in `src/data/`.
2. **Run Automated Invariant Tests**: `npm test` checks for reciprocal slug resolution and valid IDs.
3. **Verify Types**: `npm run check` asserts full schema compliance.
4. **Build Static Site**: `npm run build` generates pre-rendered HTML.
