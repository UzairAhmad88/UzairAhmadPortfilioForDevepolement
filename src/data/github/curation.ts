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
    repositoryFullName: 'UzairAhmad88/Resturent-Managment-System---POS',
    displayName: 'Restaurant POS & Management System',
    classification: 'portfolio',
    projectId: 'restaurant-pos',
    publish: true,
    curationState: 'published',
    featured: false,
    canonicalSlug: 'restaurant-pos',
    curatedAt: '2024-09-10T15:00:00Z',
    notes: 'High-throughput touchscreen Point of Sale and table inventory management application.',
  },
  {
    repositoryFullName: 'UzairAhmad88/Hayatabad-Gym-BYMe',
    displayName: 'Hayatabad Gym Web Platform',
    classification: 'portfolio',
    projectId: 'hayatabad-gym',
    publish: true,
    curationState: 'published',
    featured: false,
    canonicalSlug: 'hayatabad-gym',
    curatedAt: '2024-04-05T12:10:00Z',
    notes: 'Client fitness facility brand portal and membership inquiry web experience.',
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
