# Project Archive System — Relationships & Evolution Specification

## 1. Relational Architecture

The Project Archive System formalizes evolutionary and predecessor-successor relationships across the body of engineering work. Rather than presenting projects as disconnected islands, the platform models software genealogy and architectural lineage.

```
       [ Online Complaint Management System ] (2024, Python/Flask)
                         │
                         │ (superseded by)
                         ▼
        [ Restaurant POS & Inventory Engine ] (2024, Python/Flask)
                         │
                         │ (superseded by / evolved into)
                         ▼
           [ Curasphere HMS Enterprise ] (2025-2026, Next.js / TypeScript)
```

---

## 2. Supported Relationship Types

| Relationship | Direction | Knowledge Graph Edge | Description |
|---|---|---|---|
| `SUPERSEDED_BY` | Precursor $\rightarrow$ Successor | `SUPERSEDED_BY` | Indicates that the source project was replaced or rendered historical by the target project. |
| `EVOLVED_FROM` | Successor $\rightarrow$ Precursor | `EVOLVED_FROM` | Indicates that the source project directly drew architectural patterns, data models, or lessons from the target project. |
| `RELATED_TO` | Bidirectional | `RELATED_TO` | Projects in a shared research domain or utilizing common architectural libraries. |

---

## 3. Knowledge Graph Engine Integration

The Knowledge Graph builder in `src/lib/knowledge/graphBuilder.ts` automatically consumes archive relationships and incorporates them into the canonical graph:

```typescript
// Excerpt from Knowledge Graph edge builder
if (proj.archive?.successorProjectId) {
  edges.push({
    id: `edge-${proj.slug}-superseded-by-${proj.archive.successorProjectId}`,
    source: proj.slug,
    target: proj.archive.successorProjectId,
    relationship: 'SUPERSEDED_BY',
    weight: 0.9,
    metadata: {
      type: 'evolution',
      note: 'Superseded by newer architecture'
    }
  });
}

if (proj.archive?.predecessorProjectId) {
  edges.push({
    id: `edge-${proj.slug}-evolved-from-${proj.archive.predecessorProjectId}`,
    source: proj.slug,
    target: proj.archive.predecessorProjectId,
    relationship: 'EVOLVED_FROM',
    weight: 0.85,
    metadata: {
      type: 'evolution',
      note: 'Evolved from predecessor system'
    }
  });
}
```

---

## 4. UI Navigation & Cross-Linking

### 4.1 Successor Banner on Precursor Pages
When viewing a superseded or legacy project on `/work/[slug]`, a prominent historical alert box guides visitors to the modern implementation:

```html
<div class="archive-banner superseded">
  <span class="badge">SUPERSEDED</span>
  <p>This project has been superseded by a newer architectural generation:</p>
  <a href="/work/curasphere-hms">Explore Curasphere HMS →</a>
</div>
```

### 4.2 Ancestor Attribution on Successor Pages
When viewing a modern flagship project that evolved from an earlier prototype, the project details sidebar documents the lineage:

```html
<div class="evolution-lineage">
  <span class="label">Evolutionary Ancestor:</span>
  <a href="/work/restaurant-pos">Restaurant POS (Legacy)</a>
</div>
```

---

## 5. Circular Reference Prevention

The validation script `scripts/validate-archive.mjs` strictly prohibits circular or self-referential relations:
- `A.successorProjectId !== A.slug` (Self-reference violation)
- `A.successorProjectId === B` and `B.successorProjectId === A` (Cycle violation)
All evolutionary graphs must form Directed Acyclic Graphs (DAGs).
