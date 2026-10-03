# GitHub Intelligence — Curation System

## 1. Separation of Curation & External Metadata
A critical requirement of Phase 15 is preventing unmoderated external repositories from automatically populating the public portfolio.

### 1.1 The Curation Lifecycle
All repositories discovered on GitHub traverse a 5-step lifecycle:
1. **Discovered**: Found on GitHub account via API sync. Logged in audit reports. Not published on portfolio.
2. **Reviewed**: Inspected for technical relevance, code quality, and alignment with engineering domains.
3. **Classified**: Tagged with canonical category (`portfolio`, `research`, `academic`, `infrastructure`, `experiment`, `archive`, `fork`).
4. **Curated**: Assigned human-authored title, narrative case study, architectural diagrams, and trade-off reflections.
5. **Published**: Exposed publicly on `/work/[slug]`, `/research/[slug]`, or `/lab/[slug]` with verified GitHub evidence.

---

## 2. Curation Registry (`src/data/github/curation.ts`)
The curation registry maintains explicit mappings between external GitHub repository identifiers and internal portfolio entities:

| Repository Name | Display Name | Classification | Target Slug | Published |
| :--- | :--- | :--- | :--- | :--- |
| `Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii` | Deep Learning Stock Return Prediction | `portfolio` | `deep-learning-stock-return-prediction` | Yes (Featured) |
| `Develop-Market-Regime--Engine-byUzaii` | Market Regime Detection Engine | `portfolio` | `market-regime-engine` | Yes |
| `-CuraSphere-HMS-DevelopbyUzaii` | CuraSphere HMS | `portfolio` | `curasphere-hms` | Yes |
| `Resturent-Managment-System---POS` | Restaurant POS & Management System | `portfolio` | `restaurant-pos` | Yes |
| `Hayatabad-Gym-BYMe` | Hayatabad Gym Web Platform | `portfolio` | `hayatabad-gym` | Yes |
| `UzairAhmadPortfilioForDevepolement` | Personal Engineering Platform | `infrastructure` | `portfolio-website` | Yes |
| `Multi-Modal-Quantitative-AI-Development` | Multi-Agent Prospect Intelligence (FYP) | `academic` | `multi-agent-prospect-intelligence` | Yes |
