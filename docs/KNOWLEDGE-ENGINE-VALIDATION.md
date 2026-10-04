# Knowledge Engine Build-Time Validation Suite

## 1. Automated Integrity Checks
1. **Node Resolution:** Every `nodeId` declared in `curatedKnowledgePaths` and `curatedKnowledgeClusters` must resolve to an active entity in `knowledgeGraph`.
2. **Type Uniformity:** Step `nodeType` matches the underlying entity type exactly.
3. **No Broken Links:** All generated URLs (`href`) point to valid static SSG routes.
4. **Topic Synonyms:** Canonical normalization reduces lexical variants (`ml`, `machine-learning`, `ML`) to authoritative topic labels.
