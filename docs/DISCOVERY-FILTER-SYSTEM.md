# DISCOVERY FILTER SYSTEM & MULTI-FACET TAXONOMY
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Facet Filtering Controls

The Discovery page provides five distinct, non-destructive filtering facets:
1. **Content Type Filter Pills:**
   - All (46 entities)
   - Projects (6)
   - Research (3)
   - Lab Experiments (6)
   - Engineering Notes (6)
   - Technologies (19)
   - Methodology (6)
2. **Technology Dropdown / Facet:**
   - Dropdown dynamically populated with 19 canonical technologies sorted by total platform usage count.
3. **Topic Dropdown / Facet:**
   - Dropdown populated with canonical engineering domains (Quantitative Finance, Machine Learning, Systems Architecture, Time-Series Analysis, etc.).
4. **Status & Year Facets:**
   - Multi-attribute capability filtering across production statuses (`Completed`, `Active`, `Prototype`, `Research`).

---

## 2. URL State Synchronization

Discovery filter states are synchronized with browser URL parameters in real time via `window.history.replaceState`:
- Query: `?q=<term>` (e.g. `/discover?q=fastapi`)
- Content Type: `?type=<type>` (e.g. `/discover?type=lab`)
- Technology: `?tech=<techId>` (e.g. `/discover?tech=python`)
- Topic: `?topic=<topicName>` (e.g. `/discover?topic=Quantitative+Finance`)
- Multi-Facet: `/discover?q=orderbook&type=lab&tech=python`

Benefits:
- **Shareability:** Visitors can bookmark or share direct filtered views.
- **Deep-linking:** Project and Technology pages link directly into specific Discovery pre-filtered states.
- **Browser History:** Native back/forward navigation functions correctly without breaking application state.
