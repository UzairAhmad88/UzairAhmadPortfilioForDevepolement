# Project Archive System — Content Writing Guide

## 1. Editorial Philosophy

The archive is an **engineering retrospective and historical record**. It communicates technical maturity, intellectual honesty, and engineering progression.

### Core Tenets:
1. **Context over Excuses:** Focus on the problem constraints, available tooling, and state of knowledge at the time the code was written.
2. **Technical Transparency:** Detail why an architecture was retired (e.g., monolithic session bottlenecks, absence of client-side reactivity, shift from REST to event-driven architectures).
3. **Evidence-Grounded:** Only reference technologies, frameworks, and deployment records that actually existed in the repository.

---

## 2. Structured Section Writing Guidelines

### 2.1 Archive Note (`archiveNote`)
- **Length:** 2 to 4 concise sentences.
- **Content:** State what the project accomplished, its operational period, and the rationale for its current archive classification.
- **Example:**
  > *"Developed in early 2024 as a full-stack Flask application for institutional complaint management. The system established foundational patterns for role-based access control and transactional auditing before being superseded by Curasphere HMS."*

### 2.2 Retrospective Summary (`retrospectiveSummary`)
- **Focus:** The bridge between past implementation and modern engineering practices.
- **Structure:**
  - *Initial Architectural Intent:* What was the goal?
  - *Engineering Tradeoffs Made:* What decisions were made given the stack constraints?
  - *Evolutionary Influence:* What concepts transferred to subsequent systems?

### 2.3 Lessons Learned (`lessonsLearned`)
- Provide 2 to 4 bulleted technical takeaways per archived project.
- **Format:** `[Domain]: [Specific realization or pattern discovery]`.
- **Examples:**
  - *Schema Architecture:* Server-rendered monolithic templates tightly coupled database queries to presentation logic; separating API contracts in later systems reduced refactor friction.
  - *State Management:* Managing multi-step checkout state across server sessions highlighted the need for idempotent API mutations and client-side state caching.

---

## 3. Tone Reference Matrix

| Aspect | Tone to Avoid ❌ | Approved Voice ✅ |
|---|---|---|
| Early Code Quality | "This was written when I was a beginner and is full of bugs." | "Implemented using early Python/Flask patterns, prior to adopting structured service-layer architectures." |
| Deprecated Frameworks | "Flask and jQuery are obsolete garbage." | "Demonstrates traditional server-side rendered architectures before migrating to React/TypeScript SPAs." |
| Paused Projects | "Gave up because it was too difficult." | "Project development was paused to prioritize quantitative finance modeling and agent orchestration." |
| Replaced Projects | "This old app was deleted." | "Superseded by Curasphere HMS, which introduced multi-tenant PostgreSQL partitioning." |
