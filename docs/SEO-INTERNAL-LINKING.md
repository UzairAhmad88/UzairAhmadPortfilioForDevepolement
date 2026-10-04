# Internal Linking & Relational Entity Architecture

## 1. Bidirectional Entity Linking Graph
Every entity is contextually discoverable from multiple logical entry points:

```text
       ┌──────────────┐
       │   Project    │
       └───┬──────────┘
           │ ▲
           ▼ │
  ┌────────┴──────────┐
  │    Technology     │◄─────────┐
  └────────┬──────────┘          │
           │ ▲                   │
           ▼ │                   ▼
       ┌───┴──────────┐   ┌──────────────┐
       │   Research   ├──►│ Engineering  │
       │   Inquiry    │   │     Note     │
       └──────────────┘   └──────────────┘
```

- **Projects to Tech:** Every project case study links directly to canonical technology pages (`/technology/[slug]`).
- **Tech to Projects:** Every technology profile lists verified production projects and lab prototypes built with that tool.
- **Research to Notes:** Research methodology links to companion in-depth engineering notes (`/notes/[slug]`).
- **Zero Orphan Pages:** Every public route is linked through global navigation, related grids, or domain directories.

---

## 2. Semantic Anchor Tags (`<a href="...">`)
- Navigation relies strictly on standard `<a href="...">` elements.
- Zero fake JavaScript `onclick` buttons pretending to be links.
