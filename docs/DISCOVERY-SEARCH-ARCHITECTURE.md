# DISCOVERY SEARCH ARCHITECTURE & DETERMINISTIC MATCHING
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Static-First In-Browser Architecture

The Discovery search engine runs 100% locally in the browser using pre-computed, static data structures:
- **Build-Time Generation:** `buildDiscoveryIndex()` is executed once during Astro SSG, serializing compact index payloads.
- **Client Execution:** A lightweight script executes query normalization, alias expansion, and multi-facet filtering in real-time.
- **Sub-5ms Query Latency:** Instant response on every keystroke without network requests or loading states.

---

## 2. Query Processing Pipeline

```
USER QUERY (e.g., "postgres orderbook")
      │
      ▼
1. Lowercase & Whitespace Tokenization
      │
      ▼
2. Canonical Alias Expansion ("postgres" -> "postgresql", "py" -> "python")
      │
      ▼
3. Multi-Field Scoring Matrix
   • Exact Title Match:    +150
   • Title Substring:      +60
   • Technology Match:     +45
   • Topic Match:          +35
   • Excerpt Substring:    +25
   • Searchable Token:     +10
      │
      ▼
4. Facet Filtering (Content Type, Technology, Topic, Status, Year)
      │
      ▼
5. Deterministic Sort (Score Descending -> Title Ascending)
      │
      ▼
RENDERED RESULTS GRID & ARIA ANNOUNCER
```
