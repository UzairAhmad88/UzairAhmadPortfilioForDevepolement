# Performance Baseline 28 (Measured Production Telemetry)

## 1. Production Build Baseline
- **Framework:** Astro 4.16.18 (Static Site Generation / SSG)
- **Output Target:** `dist/` (100% Static HTML + Scoped CSS/JS)
- **Static Routes Built:** 60 Pages
- **Build Execution Duration:** ~3.00 seconds (Local Node.js runtime)
- **Diagnostics:** 0 errors, 0 warnings, 0 hints across 170 source files

---

## 2. Client-Side JavaScript Artifacts Breakdown

| Generated Chunk File | Raw Size (Bytes) | Gzip Size (Bytes) | Primary Responsibility |
| :--- | :--- | :--- | :--- |
| `hoisted.Bm1b0Z5V.js` | 4,038 B (3.94 KB) | 1,751 B (1.71 KB) | Discovery search filter & query execution |
| `hoisted.C7u-AcBd.js` | 2,852 B (2.78 KB) | 1,136 B (1.11 KB) | Timeline multi-era filtering & sorting |
| `hoisted.BCFd6aWC.js` | 2,819 B (2.75 KB) | 1,331 B (1.30 KB) | Knowledge Graph SVG rendering & interactive nodes |
| `hoisted.L6JoG_SQ.js` | 1,661 B (1.62 KB) | 593 B (0.58 KB) | Theme toggle synchronization & persistence |
| `hoisted.DQjrXUMu.js` | 1,239 B (1.21 KB) | 593 B (0.58 KB) | Contact inquiry validation & status dispatcher |
| `hoisted.DnfC6WW4.js` | 1,233 B (1.20 KB) | 604 B (0.59 KB) | Engineering Lens navigator interaction |
| `hoisted.DFdai61g.js` | 974 B (0.95 KB) | 450 B (0.44 KB) | Micro-tilt pointer calculation & reveal observer |
| `hoisted.BEiAXbmp.js` | 813 B (0.79 KB) | 440 B (0.43 KB) | Mobile navigation drawer focus management |
| `hoisted.-jogWsVt.js` | 722 B (0.70 KB) | 420 B (0.41 KB) | Copy-to-clipboard code block helpers |
| **TOTAL CLIENT JS** | **16,351 B (15.96 KB)** | **7,318 B (7.15 KB)** | **Full Platform Interactivity** |

---

## 3. Route Output Sizes (Sample Representative Routes)

| Route Path | Generated HTML File | Raw Size | Transfer Size (Estimated Gzip) |
| :--- | :--- | :--- | :--- |
| `/` (Homepage) | `dist/index.html` | 140.3 KB | ~28.5 KB |
| `/work` (Projects) | `dist/work/index.html` | 86.4 KB | ~16.2 KB |
| `/work/deep-learning...` | `dist/work/[slug]/index.html` | 92.1 KB | ~18.4 KB |
| `/research` | `dist/research/index.html` | 74.8 KB | ~14.9 KB |
| `/lab` | `dist/lab/index.html` | 68.2 KB | ~13.8 KB |
| `/notes` | `dist/notes/index.html` | 64.1 KB | ~12.5 KB |
| `/discover` | `dist/discover/index.html` | 82.3 KB | ~15.7 KB |
| `/knowledge-graph` | `dist/knowledge/index.html` | 98.6 KB | ~19.1 KB |
| `/timeline` | `dist/timeline/index.html` | 79.4 KB | ~15.3 KB |
| `/contact` | `dist/contact/index.html` | 42.6 KB | ~9.1 KB |
| `/404` | `dist/404.html` | 19.8 KB | ~4.6 KB |
