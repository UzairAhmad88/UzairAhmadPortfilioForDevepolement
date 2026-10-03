/**
 * VERCEL CURATION REGISTRY
 * Phase 16 — Personal Engineering & Research Platform
 *
 * Explicit, human-verified mappings between Vercel Projects and Portfolio entities.
 *
 * AXIOM:
 * - VERCEL = Deployment / Hosting Evidence
 * - GITHUB = Code Evidence
 * - PORTFOLIO = Curated Engineering Presentation
 *
 * Synchronizations must NEVER auto-publish or override curated mappings.
 */

import type { VercelCurationEntry } from '../../types/vercel.ts';

export const vercelCurationRegistry: VercelCurationEntry[] = [
  {
    vercelProjectId: 'prj_uzairahmad_portfolio',
    vercelProjectName: 'uzairahmad',
    portfolioProjectId: 'portfolio-website',
    preferredDeploymentUrl: 'https://uzairahmad.vercel.app',
    target: 'production',
    displayLabel: 'Production Live Site',
    publish: true,
    gitRepository: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    verifiedAt: '2026-10-04T02:00:00Z',
    notes: 'Canonical live production deployment of the Personal Engineering & Research Platform.',
  },
  {
    vercelProjectId: 'prj_curasphere_hms',
    vercelProjectName: 'curasphere-hms',
    portfolioProjectId: 'curasphere-hms',
    preferredDeploymentUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    target: 'production',
    displayLabel: 'Production Platform',
    publish: true,
    gitRepository: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    verifiedAt: '2026-10-04T02:00:00Z',
    notes: 'Verified hospital management system enterprise platform deployed on Vercel.',
  },
  {
    vercelProjectId: 'prj_multi_agent_prospect',
    vercelProjectName: 'multi-agent-prospect-intelligence-demo',
    portfolioProjectId: 'multi-agent-prospect-intelligence',
    preferredDeploymentUrl: 'https://multi-agent-prospect-demo.vercel.app',
    target: 'preview',
    displayLabel: 'Preview Deployment',
    publish: true,
    gitRepository: 'UzairAhmad88/Multi-Modal-Quantitative-AI-Development',
    verifiedAt: '2026-10-04T02:00:00Z',
    notes: 'FYP multi-agent decision support interactive preview interface.',
  },
  {
    vercelProjectId: 'prj_streaming_orderbook_lab',
    vercelProjectName: 'streaming-orderbook-sse-demo',
    labId: 'streaming-orderbook-sse',
    preferredDeploymentUrl: 'https://orderbook-sse-lab.vercel.app',
    target: 'preview',
    displayLabel: 'Experimental Demo',
    publish: true,
    gitRepository: 'UzairAhmad88/Orderbook-SSE-Lab',
    verifiedAt: '2026-10-04T02:00:00Z',
    notes: 'Lab experiment: live Server-Sent Events orderbook feed interactive visualization.',
  },
];
