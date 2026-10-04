# Lab Discovery & Search Integration

## 1. Discovery Architecture

The platform provides a centralized, client-side Discovery search engine located in `src/lib/discovery/discoveryEngine.ts`. The Lab system participates fully within the unified `SearchDocument` registry.

---

## 2. SearchDocument Invariants for Lab Entities

Each Lab item is compiled into a `SearchDocument` with the following attributes:

```typescript
{
  id: string;             // "lab:<slug>"
  type: 'LAB';           // Unified discriminator
  title: string;          // e.g. "GMM Market Regime Detection"
  slug: string;           // "gmm-regime-detection"
  href: string;           // "/lab/gmm-regime-detection"
  excerpt: string;        // Concise summary of research question & outcome
  topics: string[];       // Domain categories (e.g. "Quantitative Finance", "Machine Learning")
  technologies: string[]; // Stack IDs (e.g. "python", "scikit-learn")
  year: number;           // e.g. 2024
  status: string;         // "Completed" | "Prototype"
  searchableText: string; // Aggregated corpus: title + question + hypothesis + implementation + results
  relatedIds: string[];   // Graph references
}
```

---

## 3. Search Index Inventory

| Lab Slug | Indexed Document ID | Type | Sample Keywords in `searchableText` |
|:---|:---|:---|:---|
| `streaming-orderbook-sse` | `lab:streaming-orderbook-sse` | `LAB` | SSE, orderbook, L2 market depth, FastAPI, low-latency, streaming |
| `gmm-regime-detection` | `lab:gmm-regime-detection` | `LAB` | Gaussian Mixture Models, regime shifts, volatility, covariance, clustering |
| `langgraph-state-machine` | `lab:langgraph-state-machine` | `LAB` | LangGraph, state graph, cyclic graphs, multi-agent, Pydantic, recovery |
| `wasm-parquet-parser` | `lab:wasm-parquet-parser` | `LAB` | WebAssembly, Rust, Parquet, client-side decoding, zero-copy, Arrow |
| `fractional-differentiation` | `lab:fractional-differentiation` | `LAB` | fractional differentiation, memory preservation, stationarity, returns |
| `design-token-parser` | `lab:design-token-parser` | `LAB` | AST parser, design tokens, CSS variables, typography, fluid clamp |

---

## 4. Query Matching & Search UX

When a user searches on `/search`:
1. **Result Type Badge**: Displayed with a distinct `LAB` pill badge.
2. **Contextual Excerpt**: Shows the targeted research question and outcome rather than a generic metadata dump.
3. **Technology Chips**: Displays associated technologies with direct filters.
4. **Instant Route**: Clicking a Lab result links directly to `/lab/[slug]`.

---

## 5. Automated Verification

The test `tests/unit/lab-platform-integration.test.ts` validates that:
- 100% of canonical Lab items are indexed in `searchDocuments`.
- No broken `href` paths exist.
- Searchable text includes both `question` and `resultOutcome`.
- Results match all expected technology and topic queries.
