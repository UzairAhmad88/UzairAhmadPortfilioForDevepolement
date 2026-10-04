import type { GitHubCurationEntry } from '../../types/github.ts';

/**
 * Centralized human-curated mapping connecting verified GitHub repositories
 * to canonical portfolio entities (Projects, Research, Lab, Notes).
 * 
 * CORE PRINCIPLE:
 * Automatic GitHub metadata remains external evidence.
 * Personal project narrative, classification, and publishing state are curated here.
 */
export const gitHubCurationEntries: GitHubCurationEntry[] = [
  {
    repositoryFullName: 'UzairAhmad88/Quant-Research---Portfolio-Dashboard',
    displayName: 'Quant Research Portfolio Dashboard',
    classification: 'portfolio',
    projectId: 'quant-research-portfolio-dashboard',
    publish: true,
    curationState: 'published',
    featured: true,
    canonicalSlug: 'quant-research-portfolio-dashboard',
    curatedAt: '2025-01-20T12:00:00Z',
    notes: 'Flagship quantitative portfolio research and risk factor dashboard.',
  },
  {
    repositoryFullName: 'UzairAhmad88/RafaqatBaber---Co',
    displayName: 'RafaqatBaber & Co',
    classification: 'portfolio',
    projectId: 'rafaqatbaber-co',
    publish: true,
    curationState: 'published',
    featured: true,
    canonicalSlug: 'rafaqatbaber-co',
    curatedAt: '2024-12-20T14:00:00Z',
    notes: 'Corporate accounting advisory web platform.',
  },
  {
    repositoryFullName: 'UzairAhmad88/HEALIX-By-Uzaii-',
    displayName: 'HEALIX Healthcare Management Platform',
    classification: 'portfolio',
    projectId: 'healix-platform',
    publish: true,
    curationState: 'published',
    featured: true,
    canonicalSlug: 'healix-platform',
    curatedAt: '2024-11-30T10:00:00Z',
    notes: 'Healthcare patient consultation and appointment portal.',
  },
  {
    repositoryFullName: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    displayName: 'Deep Learning Stock Return Prediction',
    classification: 'portfolio',
    projectId: 'deep-learning-stock-return-prediction',
    researchId: 'signal-research',
    labId: 'fractional-diff-cli',
    noteId: 'fractional-differentiation-memory-stationarity',
    publish: true,
    curationState: 'published',
    featured: true,
    canonicalSlug: 'deep-learning-stock-return-prediction',
    curatedAt: '2025-01-15T18:30:00Z',
    notes: 'Flagship quantitative forecasting system using PyTorch, stationarized feature extraction, and walk-forward cross validation.',
  },
  {
    repositoryFullName: 'UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    displayName: 'Market Regime Detection Engine',
    classification: 'portfolio',
    projectId: 'market-regime-engine',
    researchId: 'market-regimes',
    labId: 'gmm-regime-stability-probe',
    noteId: 'gmm-state-flipping-variance-ordering',
    publish: true,
    curationState: 'published',
    featured: false,
    canonicalSlug: 'market-regime-engine',
    curatedAt: '2025-02-01T14:20:00Z',
    notes: 'Unsupervised statistical clustering engine using GMM and variance ordering for financial market regime detection.',
  },
  {
    repositoryFullName: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    displayName: 'CuraSphere HMS',
    classification: 'portfolio',
    projectId: 'curasphere-hms',
    noteId: 'rbac-relational-integrity-emr-systems',
    publish: true,
    curationState: 'published',
    featured: false,
    canonicalSlug: 'curasphere-hms',
    curatedAt: '2024-12-18T11:45:00Z',
    notes: 'Production-ready full-stack healthcare management SaaS with role-based access control and EMR workflows.',
  },
  {
    repositoryFullName: 'UzairAhmad88/News-Market-Trading-Signal---Multi-Modal-Quantitative-Research-Platform-ByUzaii',
    displayName: 'News + Market Trading Signal Platform',
    classification: 'portfolio',
    projectId: 'news-market-trading-signal',
    researchId: 'signal-research',
    publish: true,
    curationState: 'published',
    featured: false,
    canonicalSlug: 'news-market-trading-signal',
    curatedAt: '2024-11-20T10:00:00Z',
    notes: 'Multi-modal financial NLP sentiment and technical market indicator signal platform.',
  },
  {
    repositoryFullName: 'UzairAhmad88/North-Client-Acquisition-Platform',
    displayName: 'North Client Acquisition Platform',
    classification: 'portfolio',
    projectId: 'north-client-acquisition-platform',
    publish: true,
    curationState: 'published',
    featured: false,
    canonicalSlug: 'north-client-acquisition-platform',
    curatedAt: '2024-08-15T12:00:00Z',
    notes: 'High-converting client acquisition and onboarding platform.',
  },
  {
    repositoryFullName: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    displayName: 'Personal Engineering Platform',
    classification: 'infrastructure',
    noteId: 'zero-layout-shift-ssg-design-tokens',
    publish: true,
    curationState: 'published',
    featured: false,
    canonicalSlug: 'portfolio-website',
    curatedAt: '2026-10-02T22:00:00Z',
    notes: 'Source code for this multi-layer static engineering and research platform built with Astro and TypeScript.',
  },
  {
    repositoryFullName: 'UzairAhmad88/Multi-Modal-Quantitative-AI-Development',
    displayName: 'Multi-Agent Prospect Intelligence (FYP)',
    classification: 'academic',
    projectId: 'multi-agent-prospect-intelligence',
    researchId: 'agentic-systems',
    labId: 'multi-agent-pydantic-state-machine',
    noteId: 'deterministic-state-graph-pydantic-guardrails',
    publish: true,
    curationState: 'published',
    featured: false,
    canonicalSlug: 'multi-agent-prospect-intelligence',
    curatedAt: '2025-02-15T10:00:00Z',
    notes: 'Academic Final Year Project (FYP) repository developing multi-agent collaborative workflows with deterministic guardrails.',
  },
];

/**
 * Retrieves a curated entry by GitHub repository full name
 */
export function getCurationByRepo(fullName: string): GitHubCurationEntry | undefined {
  const target = fullName.toLowerCase().trim();
  return gitHubCurationEntries.find((e) => e.repositoryFullName.toLowerCase().trim() === target);
}

/**
 * Retrieves a curated entry by portfolio project slug
 */
export function getCurationByProjectSlug(slug: string): GitHubCurationEntry | undefined {
  const target = slug.toLowerCase().trim();
  return gitHubCurationEntries.find((e) => e.projectId?.toLowerCase().trim() === target);
}

/**
 * Retrieves a curated entry by research inquiry slug
 */
export function getCurationByResearchSlug(slug: string): GitHubCurationEntry | undefined {
  const target = slug.toLowerCase().trim();
  return gitHubCurationEntries.find((e) => e.researchId?.toLowerCase().trim() === target);
}

/**
 * Retrieves a curated entry by lab experiment slug
 */
export function getCurationByLabSlug(slug: string): GitHubCurationEntry | undefined {
  const target = slug.toLowerCase().trim();
  return gitHubCurationEntries.find((e) => e.labId?.toLowerCase().trim() === target);
}
