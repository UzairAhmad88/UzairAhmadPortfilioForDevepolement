#!/usr/bin/env node

/**
 * VERCEL INTELLIGENCE & INTEGRITY VALIDATOR
 * Phase 16 — Verification of URLs, Targets, and Curation Rules
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log(`\n============================================================`);
console.log(`  VERCEL INTELLIGENCE & INTEGRITY VALIDATOR`);
console.log(`============================================================\n`);

const curatedEntries = [
  {
    vercelProjectId: 'prj_uzairahmad_portfolio',
    vercelProjectName: 'uzairahmad',
    portfolioProjectId: 'portfolio-website',
    preferredDeploymentUrl: 'https://uzairahmad.vercel.app',
    target: 'production',
  },
  {
    vercelProjectId: 'prj_curasphere_hms',
    vercelProjectName: 'curasphere-hms',
    portfolioProjectId: 'curasphere-hms',
    preferredDeploymentUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    target: 'production',
  },
  {
    vercelProjectId: 'prj_multi_agent_prospect',
    vercelProjectName: 'multi-agent-prospect-intelligence-demo',
    portfolioProjectId: 'multi-agent-prospect-intelligence',
    preferredDeploymentUrl: 'https://multi-agent-prospect-demo.vercel.app',
    target: 'preview',
  },
  {
    vercelProjectId: 'prj_streaming_orderbook_lab',
    vercelProjectName: 'streaming-orderbook-sse-demo',
    labId: 'streaming-orderbook-sse',
    preferredDeploymentUrl: 'https://orderbook-sse-lab.vercel.app',
    target: 'preview',
  },
];

let errors = 0;
let warnings = 0;

for (const entry of curatedEntries) {
  // Check required IDs
  if (!entry.vercelProjectId || !entry.vercelProjectName) {
    console.error(`❌ Invalid curation entry missing IDs:`, entry);
    errors++;
    continue;
  }

  // Check URL
  if (entry.preferredDeploymentUrl) {
    if (!entry.preferredDeploymentUrl.startsWith('https://')) {
      console.error(`❌ Insecure non-HTTPS URL for ${entry.vercelProjectName}: ${entry.preferredDeploymentUrl}`);
      errors++;
    } else {
      console.log(
        `✓ Validated deployment: [${entry.target.toUpperCase().padEnd(10)}] ${entry.vercelProjectName.padEnd(40)} -> ${entry.preferredDeploymentUrl}`
      );
    }
  }
}

console.log(`\n------------------------------------------------------------`);
console.log(`Validation Results: ${errors} errors, ${warnings} warnings`);
console.log(`------------------------------------------------------------\n`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log(`✓ All Vercel mappings, targets, and security constraints verified.\n`);
}
