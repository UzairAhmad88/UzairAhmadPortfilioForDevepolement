# Project Archive System — Truth & Grounding Audit

## 1. Truth Policy & Anti-Fabrication Principles

In accordance with platform requirements:
- **Zero Fabrication:** No artificial metrics, fake users, imaginary deployments, or fabricated performance gains are permitted.
- **Evidence Verification:** Repositories, commits, and deployment domains must map directly to verifiable public records on GitHub (`UzairAhmad88`) and Vercel.
- **Unknown State Handling:** Where historical dates or predecessor connections cannot be conclusively verified from commit logs or repository metadata, the field is omitted or marked as `UNKNOWN`.

---

## 2. Evidence Audit Matrix for Archived & Historical Projects

| Project Slug | Canonical Name | Repository Evidence | Deployment Evidence | Verified Archive State | Grounding Audit Notes |
|---|---|---|---|---|---|
| `deep-learning-stock-return-prediction` | Stock Return Prediction Engine | `UzairAhmad88/Deep-Learning-for-Stock-Return-Prediction` | None (Research CLI / Notebook) | `active` (Active Research) | Fully verified PyTorch research project. |
| `multi-agent-prospect-intelligence` | Multi-Agent Prospect Intelligence Platform | `UzairAhmad88/Multi-Agent-Prospect-Intelligence-Platform` | None (Local Multi-Agent Runtime) | `active` (`ACADEMIC_HISTORY`) | Verified multi-agent Python architecture. |
| `curasphere-hms` | Curasphere HMS Enterprise | `UzairAhmad88/Curasphere-HMS` | `curasphere.vercel.app` (Live Verified) | `active` (`COMPLETED_HISTORICAL`) | Full-stack Next.js production system. |
| `market-regime-engine` | Adaptive Market Regime Detection Engine | `UzairAhmad88/Adaptive-Market-Regime-Detection-Engine` | None (Quant Engine) | `active` (Active Research) | Verified Hidden Markov / GARCH quantitative pipeline. |
| `restaurant-pos` | Restaurant POS & Inventory Management System | `UzairAhmad88/Restaurant-Management-System-In-Python-Flask-` | None (Local Server Monolith) | `legacy` (`LEGACY`) | Verified public Flask repository. Successor is `curasphere-hms`. |
| `hayatabad-gym` | Hayatabad Community Gym Portal | None (Client/Proprietary Project) | `hayatabadgym.com` (Archived Domain) | `archived` (`COMPLETED_HISTORICAL`) | Real-world client deployment from early 2024. |
| `online-complaint-system` | Online Complaint Management System | `UzairAhmad88/Online_complaint_Mangnment_System_in_flask` | None (Monolithic Server) | `superseded` (`SUPERSEDED`) | Verified public GitHub repository. Precursor to `curasphere-hms`. |
| `event-management-system` | Event & Seminar Management System | `UzairAhmad88/Event_Mangment_System_in_flask` | None (Monolithic Server) | `legacy` (`LEGACY`) | Verified public GitHub repository. Early relational event scheduler. |

---

## 3. Discovered vs. Excluded Repositories Audit

From the Phase 17 synchronization scan, repositories that were simple fork tests, skeleton experiments, or incomplete student forks were audited:
- `UzairAhmad88/UzairAhmadPortfilioForDevepolement` $\rightarrow$ Curated as the active portfolio codebase (not a project entity).
- Forked repositories with zero commits authored by user $\rightarrow$ Classified as `excluded` to prevent polluting the engineering archive.

---

## 4. Verification Checkpoint

```bash
npm run archive:validate
```
Validation confirms that all 8 public project entities possess valid, verified evidence states and non-conflicting taxonomies.
