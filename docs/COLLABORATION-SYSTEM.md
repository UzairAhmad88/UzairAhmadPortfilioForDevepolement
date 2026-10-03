# Collaboration System Architecture (Phase 21)

## 1. Overview & Purpose

The **Collaboration System** is the professional and technical engagement layer of the Personal Engineering & Research Platform for Uzair Ahmad.

Following the establishment of engineering identity in Phase 20 (About 2.0), the Collaboration System answers the fundamental inquiry of technical visitors, engineering leaders, and research peers:

> **"How can I work with Uzair on a substantive technical or research challenge?"**

Rather than presenting an agency sales funnel, pricing tiers, or generic freelancer marketing, the system articulates:
1. **Problem-First Collaboration:** Exact classes of technical and mathematical problems of interest.
2. **Evidence-Grounded Capabilities:** Direct connections to public repositories, published research inquiries, and empirical lab experiments.
3. **Structured Engagement Modes:** Transparent pathways for systems engineering, quantitative research, and technical prototyping.
4. **Deterministic Engineering Process:** A 6-stage lifecycle (`Understand` $\rightarrow$ `Define` $\rightarrow$ `Explore` $\rightarrow$ `Build` $\rightarrow$ `Validate` $\rightarrow$ `Iterate`) derived from *How I Build*.
5. **Inquiry Preparation Guidance:** A 4-prompt technical brief guide helping collaborators communicate context and constraints.
6. **Truthful Availability State:** Explicit, date-stamped availability status without artificial urgency.

---

## 2. Information Architecture & Navigation

```text
                  ┌──────────────────────┐
                  │    About 2.0 Page    │
                  │       (/about)       │
                  └──────────┬───────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                 /collaborate (Main Route)                   │
├─────────────────────────────────────────────────────────────┤
│ 1. Hero & Availability Banner                               │
│ 2. Problem-First Positioning Philosophy                     │
│ 3. Collaboration Areas (Quant, Agents, Web, Lab)            │
│ 4. Engagement Types (Systems, Research, MVP, Architecture)  │
│ 5. Problem Selection & Non-Goals Criteria                   │
│ 6. 6-Stage Engineering Process Lifecycle                    │
│ 7. Collaboration Brief Guide (4 Inquiry Prompts)            │
│ 8. Contact Handoff & Direct Communication Channels          │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │   /contact (Bridge)  │
                  │ (?type=project/etc)  │
                  └──────────────────────┘
```

- **Primary Route:** `/collaborate`
- **Legacy Forwarding:** `/services` bridges cleanly to `/collaborate`.
- **Top Navigation:** Updated to `Collaborate` (`/collaborate`), maintaining compact navigation without expanding link counts.
- **Cross-Links:** Prominently linked from `/about` Section 07 and global `Footer`.

---

## 3. Relationship with Evidence Systems

Every collaboration area and engagement type strictly cross-references canonical portfolio entities:

| Collaboration Domain | Project Evidence | Research Inquiries | Lab Experiments | Key Technologies |
| :--- | :--- | :--- | :--- | :--- |
| **Quantitative Systems & Financial Engineering** | `deep-learning-stock-return-prediction`, `market-regime-engine` | `signal-research`, `market-regimes` | `fractional-diff-cli`, `gmm-regime-stability-probe`, `streaming-orderbook-sse` | Python, PyTorch, Pandas, NumPy, Scikit-Learn |
| **Multi-Agent AI & Deterministic Workflows** | `multi-agent-prospect-intelligence` | `agentic-systems` | `multi-agent-pydantic-state-machine` | LangGraph, FastAPI, Pydantic, TypeScript, Python |
| **Distributed Web & Operations Platforms** | `curasphere-hms` | — | `css-subgrid-editorial-alignment` | React, TypeScript, PostgreSQL, Astro, TailwindCSS, HTML5/CSS3 |
| **Technical Prototyping & Lab Benchmarks** | `market-regime-engine`, `deep-learning-stock-return-prediction` | `signal-research` | `fractional-diff-cli`, `streaming-orderbook-sse`, `stochastic-volatility-heston-calibration` | Python, NumPy, Scikit-Learn, Astro |

---

## 4. Phase 22 Contact System Handoff

Phase 21 prepares the contextual entry points for the upcoming Contact System (Phase 22):
- Contextual query parameters: `/contact?type=project`, `/contact?type=research`, `/contact?type=consulting`.
- Direct email fallback to `imuzairahmad8@gmail.com`.
- Zero CRM, zero lead scoring, and zero automated booking calendar dependencies.
