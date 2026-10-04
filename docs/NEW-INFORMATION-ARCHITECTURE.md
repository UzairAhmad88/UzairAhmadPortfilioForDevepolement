# New Information Architecture (IA) Specification

**Architect:** Senior Information Architect & Principal Engineer  
**Model:** Human-Centric, Recognition-Over-Recall Mental Model  

---

## 1. Top-Level Site Hierarchy

```
PORTFOLIO ROOT (/)
│
├── 01. HOME (/)
│   ├── Hero (Identity, Monogram, Direct CTAs)
│   ├── Currently (Building, Exploring, Learning)
│   ├── Selected Work (Top 4 Curated Projects)
│   ├── Research Preview (Core Quantitative & ML Inquiries)
│   ├── About Preview (Bio & Capabilities)
│   └── Contact Callout (Direct Outreach)
│
├── 02. WORK (/work)
│   ├── Category Filters (All, Client, Quant/Finance, AI/ML, Full-Stack)
│   ├── Curated Project Catalog (9 Verified Projects)
│   └── Individual Project Case Studies (/work/[slug])
│       ├── Overview & Executive Summary
│       ├── Problem Statement
│       ├── What I Built & Key Highlights
│       ├── System Architecture & Method
│       ├── Results & Technical Impact
│       ├── Engineering Lessons Learned
│       └── Verified Evidence Links (GitHub / Live Site)
│
├── 03. RESEARCH (/research)
│   ├── Research Inquiry Catalog (6 Core Inquiries)
│   └── Detailed Research Reports (/research/[slug])
│       ├── Core Question & Empirical Hypothesis
│       ├── Methodological Pipeline & Mathematical Formulation
│       ├── Empirical Findings & Data Sources
│       └── Known Limitations & Epistemic Uncertainty
│
├── 04. ABOUT (/about)
│   ├── Authentic Technical Narrative
│   ├── Engineering Philosophy & Principles
│   ├── Categorized Technical Capabilities
│   ├── Education & Academic Background
│   └── Direct Contact Options
│
└── 05. CONTACT (/contact)
    ├── Structured Inquiry Form
    ├── Direct Communication Channels (Email, LinkedIn, GitHub, WhatsApp)
    └── Response Expectations & SLA
```

---

## 2. Navigation State Model

- **Desktop:** Sticky header with Monogram/Logo, 5 core links, Theme Toggle, and External GitHub link.
- **Mobile:** Accessible slide-over drawer triggered by standard hamburger button with 44px+ touch targets and trapped keyboard focus.
- **Deep Links:** Preserved for backward compatibility, routing gracefully to the appropriate clean views.
