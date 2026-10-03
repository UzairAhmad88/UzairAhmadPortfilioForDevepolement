# Personal Engineering Timeline — Event Taxonomy Specification

## 1. Controlled Event Taxonomies

To prevent timeline pollution and ensure high signal-to-noise ratio, the platform limits events to 7 well-defined technical event types:

```
                          TIMELINE EVENT TYPES
  ┌──────────────┬──────────────┬──────────────┬──────────────┐
  │   PROJECT    │   RESEARCH   │     LAB      │     NOTE     │
  └──────────────┴──────────────┴──────────────┴──────────────┘
         │              │              │              │
  ┌──────┴───────┬──────┴───────┬──────┴───────┐      │
  │  TECHNOLOGY  │  MILESTONE   │ METHODOLOGY  │◄─────┘
  └──────────────┴──────────────┴──────────────┘
```

---

## 2. Event Type Criteria & Thresholds

### 2.1 `project`
- **Definition:** A full-stack software system, machine learning application, or quantitative platform.
- **Inclusion Criteria:** Has a dedicated case study on `/work/[slug]`, architecture notes, and verified repository/deployment evidence.
- **Examples:** *Deep Learning Stock Return Prediction Engine*, *Curasphere HMS Enterprise*, *Restaurant POS (Legacy)*.

### 2.2 `research`
- **Definition:** A structured scientific investigation centered on a formal hypothesis, mathematical formulation, or quantitative backtest.
- **Inclusion Criteria:** Has a published research paper / case study on `/research/[slug]` with documented methodology stages and empirical observations.
- **Examples:** *Predictive Feature Extraction & Stationarity in Financial Series*, *Adaptive Market Regime Detection via GMM*.

### 2.3 `lab`
- **Definition:** An isolated technical experiment, command-line tool, benchmark probe, or architectural prototype.
- **Inclusion Criteria:** Demonstrates a specific technical hypothesis with measurable observations on `/lab/[slug]`.
- **Examples:** *fractional-diff-cli*, *streaming-orderbook-sse*, *multi-agent-pydantic-state-machine*.

### 2.4 `note`
- **Definition:** A documented engineering breakthrough, concurrency debugging diagnosis, or architectural tradeoff analysis.
- **Inclusion Criteria:** Published in `/notes/[slug]` with context, error logs, root cause analysis, and production takeaways.
- **Examples:** *Async Session Lifecycles in FastAPI*, *Deterministic State Machine Guardrails for LLM Pipelines*.

### 2.5 `technology`
- **Definition:** Formal adoption of a foundational framework or language across multiple platform systems.
- **Constraint:** Never used for minor utility libraries or transient npm dependencies.

### 2.6 `milestone`
- **Definition:** Verified multi-system milestones (e.g. platform release, architectural generation transition).

### 2.7 `methodology`
- **Definition:** Verified shifts in development methodology (e.g. transition to expanding-window temporal walk-forward validation).

---

## 3. Anti-Changelog Invariants

The timeline explicitly prohibits:
- ❌ Minor dependency updates or patch bumps.
- ❌ Trivial bug fixes or styling tweaks.
- ❌ Automated commit streams or deployment alerts.
- ❌ Unverified personal learning claims.
