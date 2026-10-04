# Step-by-Step Content Update Guide

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Audience:** Developers and Content Maintainers  

---

## 1. How to Add a New Project Case Study

### Step 1: Define the TypeScript Record in `src/data/projects.ts`
Open `src/data/projects.ts` and append a new `Project` object adhering to the `Project` interface:

```typescript
{
  id: 'distributed-order-matching-engine',
  slug: 'distributed-order-matching-engine',
  title: 'Distributed In-Memory Order Matching Engine',
  tagline: 'Sub-millisecond FIFO limit order book with deterministic event sourcing in Rust.',
  category: 'quant-ml',
  featured: false,
  status: 'active',
  year: 2026,
  role: 'Lead Systems Architect',
  summary: 'A deterministic orderbook architecture processing 50,000+ orders/sec.',
  technologies: ['rust', 'python', 'git'], // Must exist in src/data/technologies.ts
  githubUrl: 'https://github.com/UzairAhmad88/order-matching-engine',
  metrics: [
    { label: 'Throughput', value: '50k+ ops/sec', unit: 'ops/sec' },
    { label: 'p99 Latency', value: '0.85 ms', unit: 'ms' }
  ],
  architecture: {
    stages: ['Ingestion Ring Buffer', 'Sequencer', 'Matching Engine Core', 'Journaling'],
    components: ['Orderbook State', 'Price-Time Queue', 'WAL Engine'],
    topologyType: 'linear-pipeline'
  },
  lenses: {
    overview: 'High-throughput electronic market simulation engine.',
    architecture: 'Lock-free single-threaded core with ring-buffer IPC.',
    constraints: 'Zero GC pauses; deterministic state replay from WAL.',
    stack: 'Rust 2021 Edition, Criterion benchmark suite, Python telemetry.',
    evidence: 'Criterion benchmarks verifying < 1ms p99 execution.',
    lessonsLearned: 'Memory layout and cache locality dictate throughput over multithreading.'
  },
  challenges: ['Eliminating dynamic allocations during order matching'],
  limitations: ['Single asset pair per engine instance'],
  lessonsLearned: ['Data-oriented design outperforms object-oriented hierarchies in low latency.']
}
```

### Step 2: Register GitHub Mapping
Add repository metadata to `src/lib/github/curation-registry.ts` if a public repository exists.

### Step 3: Run Validation and Test
```bash
npm run check
npm test
npm run build
```
Verify that `/work/distributed-order-matching-engine` is generated in `dist/work/`.

---

## 2. How to Add a Research Inquiry

1. Open `src/data/research.ts`.
2. Add a `ResearchItem` with `hypothesis`, `methodology`, `findings`, `mathematicalFormulations`, `limitations`, and `openQuestions`.
3. Link associated technology IDs and project slugs.
4. Run `npm test` to verify referential integrity.

---

## 3. How to Add an Engineering Note

1. Open `src/data/notes.ts`.
2. Add an `EngineeringNote` with `title`, `summary`, `category`, `codeSnippets`, and `technologies`.
3. Run `npm test` to verify code snippet formatting and reading time calculation.

---

## 4. How to Add a Lab Workbench

1. Open `src/data/lab.ts`.
2. Add a `LabItem` with `title`, `status`, `type` (`cli` | `interactive` | `probe`), `repoUrl`, and optional `demoUrl`.
3. Run `npm test` to verify workbench rendering.
