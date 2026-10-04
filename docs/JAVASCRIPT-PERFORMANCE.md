# JavaScript Performance & Hydration Strategy

## 1. Zero-Hydration Architecture
The vast majority of pages require **zero client JavaScript** to render full editorial and technical content:
- **SSG-First:** Case studies, research methodology, lab logs, engineering notes, timeline events, and technology profiles render as pure HTML.
- **No Virtual DOM Overhead:** Zero React or Vue runtime engines are downloaded on page load.
- **Progressive Enhancement:** Interactive widgets (theme toggle, search filter, drawer menu) execute as standalone, isolated vanilla ES modules.

---

## 2. Total Client JS Budget & Allocation

```text
Budget: 50 KB raw total across all hoisted chunks
Actual: 15.96 KB raw (7.15 KB gzip)
Headroom: 68% remaining budget
```

---

## 3. Client Interaction Audit
| Interaction Component | JS Payload | Execution Trigger | Deferral / Optimization |
| :--- | :--- | :--- | :--- |
| **Theme Toggle** | ~1.62 KB | Synchronous `<head>` + button listener | Prevents theme flash; persists to localStorage |
| **Discovery Search** | ~3.94 KB | User enters `/discover` and types | Precomputed static index; instant sub-millisecond filtering |
| **Timeline Filter** | ~2.78 KB | User clicks type/era filter chips | In-memory DOM toggle; no network requests |
| **Knowledge Graph** | ~2.75 KB | User enters `/knowledge-graph` | SVG rendering; zero runtime external APIs |
| **Contact Form** | ~1.21 KB | Form submit or input blur | Real-time validation without external schema libraries |
