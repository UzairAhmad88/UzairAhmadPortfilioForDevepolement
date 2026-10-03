# Phase 15 — GitHub Intelligence System

## 1. Executive Summary
The GitHub Intelligence system transforms external GitHub repositories into a verified evidence layer for the personal engineering and research platform. Rather than treating GitHub as an unmoderated auto-publisher, this architecture introduces a clear boundary between **automatic external facts** and **human-curated portfolio narratives**.

```
GITHUB (External Host)
   ↓ [fetch / build-time sync]
DISCOVER (Repositories & Metadata)
   ↓
INSPECT (Language, Branches, Licences, Timestamps)
   ↓
CLASSIFY (Portfolio, Research, Academic FYP, Infrastructure, Experiment)
   ↓
CURATE (Human Editorial Review & Mapping)
   ↓
PUBLISH (Verified Evidence Badges & Direct Source Links)
```

---

## 2. Core Operating Principles
1. **GitHub is Evidence, Not Publishing Authority**: Public repositories substantiate engineering claims; they never generate or overwrite problem definitions, architecture topologies, or post-mortem learnings.
2. **Zero Metric Quality Inflation**: Star and fork counts are factual repository metadata. They are never transformed into popularity ratings, skill proficiency scores, or sorted leaderboards.
3. **Strict Separation of Concerns**:
   - **Automatic Facts**: Repository name, default branch, primary language, license, last pushed timestamp, detected topics, visibility.
   - **Human Curated Information**: Problem statement, architectural decisions, technical trade-offs, empirical research findings, presentation tier.
4. **Resilient Static Generation**: The platform builds reproducibly offline using a verified baseline cache, guaranteeing zero build failures during GitHub API downtime or rate-limit windows.
