# Discovery Search Engine

## 1. Engine Overview

The Discovery search engine (`src/lib/discovery/discoveryEngine.ts`) compiles an in-memory `DiscoveryIndexPayload` containing all platform entities for instant, zero-latency client-side search on `/discover`.

---

## 2. Search Document Attributes

Each `DiscoveryItem` includes:
- `id`: `<type>:<slug>` (e.g. `lab:streaming-orderbook-sse`).
- `type`: `project`, `research`, `lab`, `note`, `technology`, `methodology`.
- `title`, `slug`, `href`, `excerpt`, `topics`, `technologies`, `year`, `status`, `badge`.
- `searchableText`: Normalized corpus combining title, problem, question, results, and stack terms.
- `relatedIds`: 1-hop Knowledge Graph neighbor IDs.

---

## 3. Search Matching & Scoring

- **Alias Expansion**: Common technical aliases are mapped deterministically (e.g. `postgres` $\rightarrow$ `postgresql`, `sklearn` $\rightarrow$ `scikit-learn`, `ts` $\rightarrow$ `typescript`).
- **Deterministic Sort**: Matches are ranked by exact title match (150pts), partial title (60pts), technology (45pts), topic (35pts), and token frequency (10pts).
- **XSS Protection**: `safeHighlight` escapes HTML entities before wrapping matched substrings in `<mark>`.
