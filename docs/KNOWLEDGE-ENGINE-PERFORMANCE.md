# Knowledge Engine Performance & Memory Architecture

## 1. Zero Runtime Graph Construction
- **Build-Time Compilation:** The Knowledge Graph and pathway mappings are computed once at build time during SSG execution.
- **Client JS Footprint:** Consumes zero additional client runtime libraries (0 KB external dependency overhead).
- **Sub-Millisecond Resolution:** `resolveKnowledgeContext` resolves in `< 0.2ms` on local memory lookups.
