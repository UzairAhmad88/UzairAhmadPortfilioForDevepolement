# Engineering Documentation Master Index

> **Uzair Ahmad — Personal Engineering & Research Platform**
> Complete, verified technical documentation for platform architecture, content systems, knowledge graph, design tokens, testing, deployment, and operations.

---

## 1. Quick Navigation by Role

| If You Are... | Start Here | Key References |
|:---|:---|:---|
| **New Developer Onboarding** | [Getting Started](file:///d:/web/protfolio/docs/getting-started/LOCAL-DEVELOPMENT.md) | [Local Setup](file:///d:/web/protfolio/docs/getting-started/LOCAL-DEVELOPMENT.md), [Repo Structure](file:///d:/web/protfolio/docs/architecture/REPOSITORY-STRUCTURE.md), [Testing Guide](file:///d:/web/protfolio/docs/testing/TESTING-GUIDE.md) |
| **Content Editor / Author** | [Content Architecture](file:///d:/web/protfolio/docs/content/CONTENT-ARCHITECTURE.md) | [Canonical Sources](file:///d:/web/protfolio/docs/content/CANONICAL-SOURCES.md), [Adding a Project](file:///d:/web/protfolio/docs/content/ADDING-A-PROJECT.md), [Adding a Lab Experiment](file:///d:/web/protfolio/docs/content/ADDING-A-LAB-EXPERIMENT.md) |
| **System Architect / Engineer** | [System Architecture](file:///d:/web/protfolio/docs/architecture/SYSTEM-ARCHITECTURE.md) | [Knowledge Graph](file:///d:/web/protfolio/docs/knowledge/KNOWLEDGE-GRAPH.md), [Design System](file:///d:/web/protfolio/docs/design-system/DESIGN-SYSTEM.md), [Route Catalog](file:///d:/web/protfolio/docs/architecture/ROUTE-ARCHITECTURE.md) |
| **DevOps / Release Engineer** | [Deployment Runbook](file:///d:/web/protfolio/docs/deployment/DEPLOYMENT-RUNBOOK.md) | [Release Checklist](file:///d:/web/protfolio/docs/testing/RELEASE-CHECKLIST.md), [Verification](file:///d:/web/protfolio/docs/deployment/PRODUCTION-VERIFICATION.md), [Troubleshooting](file:///d:/web/protfolio/docs/troubleshooting/TROUBLESHOOTING.md) |
| **Security & Privacy Reviewer** | [Security Architecture](file:///d:/web/protfolio/docs/security/SECURITY.md) | [Env Variables](file:///d:/web/protfolio/docs/operations/ENVIRONMENT-VARIABLES.md), [Threat Model](file:///d:/web/protfolio/docs/security/SECURITY.md) |

---

## 2. Documentation Directory Map

```
docs/
├── README.md                              <- You are here (Master Index)
├── DOCUMENTATION-AUDIT.md                 <- Phase 34 Audit & Inventory
├── DOCUMENTATION-TRUTH-AUDIT.md           <- Truth & Fact Verification
├── DOCUMENTATION-COMPLETENESS-MATRIX.md   <- Completeness Scorecard
├── PHASE-34-FINAL-REPORT.md               <- Phase 34 Final Sign-off
│
├── getting-started/
│   └── LOCAL-DEVELOPMENT.md              <- Prerequisites, Install & Run
│
├── architecture/
│   ├── PROJECT-OVERVIEW.md               <- Platform Purpose & Vision
│   ├── SYSTEM-ARCHITECTURE.md            <- 5-Layer System Architecture
│   ├── REPOSITORY-STRUCTURE.md           <- Directory & Code Placement Map
│   └── ROUTE-ARCHITECTURE.md             <- 60 Static Routes Catalog
│
├── content/
│   ├── CONTENT-ARCHITECTURE.md           <- Domain Models & Taxonomies
│   ├── CANONICAL-SOURCES.md              <- Single Source of Truth Files
│   ├── PROJECT-SYSTEM.md                 <- Project Lifecycle & Multi-Lens
│   ├── RESEARCH-SYSTEM.md                <- Hypothesis & Inquiries
│   ├── LAB-SYSTEM.md                     <- Workbench Experiments & Artifacts
│   ├── ENGINEERING-NOTES-SYSTEM.md       <- Learnings & Technical Notes
│   ├── TECHNOLOGY-SYSTEM.md              <- Canonical Stack Taxonomy
│   ├── ADDING-A-PROJECT.md               <- Runbook: New Project
│   ├── ADDING-A-RESEARCH-ITEM.md         <- Runbook: New Research Item
│   ├── ADDING-A-LAB-EXPERIMENT.md        <- Runbook: New Lab Experiment
│   ├── ADDING-AN-ENGINEERING-NOTE.md     <- Runbook: New Engineering Note
│   ├── ADDING-A-TECHNOLOGY.md            <- Runbook: New Technology
│   └── ADDING-A-VISUAL-ARTIFACT.md       <- Runbook: New Visual Artifact
│
├── knowledge/
│   ├── KNOWLEDGE-SYSTEM.md               <- Graph vs Engine vs Discovery
│   ├── KNOWLEDGE-GRAPH.md                <- In-Memory Relational Graph
│   └── DISCOVERY-SYSTEM.md               <- Full-Text Search Engine
│
├── design-system/
│   ├── DESIGN-SYSTEM.md                  <- Tokens, Typography & Subgrid
│   ├── THEME-SYSTEM.md                   <- Dark/Light Sync & Zero FOUC
│   ├── MOTION-SYSTEM.md                  <- Reduced Motion & CSS Easing
│   └── RESPONSIVE-SYSTEM.md              <- Fluid Scaling & Breakpoints
│
├── testing/
│   ├── TESTING-GUIDE.md                  <- Unit & Integration Testing
│   ├── ACCESSIBILITY-GUIDE.md            <- WCAG 2.1 AA Compliance
│   ├── PERFORMANCE-GUIDE.md              <- Zero-JS & Core Web Vitals
│   ├── SEO-GUIDE.md                      <- Meta, Schema.org & Sitemaps
│   └── RELEASE-CHECKLIST.md              <- Pre-Deployment QA Gates
│
├── integrations/
│   ├── GITHUB-OPERATIONS.md              <- GitHub Intelligence & Mapping
│   ├── VERCEL-OPERATIONS.md              <- Vercel Deployment Telemetry
│   └── PROJECT-SYNC-OPERATIONS.md        <- Project Sync Operations
│
├── operations/
│   ├── ENVIRONMENT-VARIABLES.md          <- Safe Configuration Reference
│   └── MAINTENANCE-GUIDE.md              <- Regular Upkeep & Risk Model
│
├── deployment/
│   ├── DEPLOYMENT-RUNBOOK.md             <- Vercel Production Deployment
│   └── PRODUCTION-VERIFICATION.md        <- Post-Deploy Verification
│
├── security/
│   └── SECURITY.md                       <- Secrets, Inputs & Threat Model
│
└── troubleshooting/
    └── TROUBLESHOOTING.md                <- Observed Issues & Debugging
```

---

## 3. Verified Core Commands

All commands below are verified in `package.json`:

```bash
# Start local development server
npm run dev

# Run diagnostic Astro and TypeScript typecheck (0 errors across 179 files)
npm run check

# Run complete automated test suite (266 unit tests across 48 suites)
npm test

# Build production static bundle (60 pages in dist/)
npm run build

# Preview production build locally
npm run preview

# Dry-run project sync
npm run projects:sync:dry

# Dry-run Vercel deployment sync
npm run vercel:sync:dry
```
