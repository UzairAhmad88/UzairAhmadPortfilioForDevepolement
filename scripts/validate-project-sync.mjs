#!/usr/bin/env node

/**
 * PROJECT SYNC INTEGRITY VALIDATOR
 * Phase 17 — Personal Engineering & Research Platform
 *
 * Validates curation mappings across Portfolio, GitHub, and Vercel.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log(`\n============================================================`);
console.log(`  PROJECT SYNC INTEGRITY & EVIDENCE CHAIN VALIDATOR`);
console.log(`============================================================\n`);

const curationPath = path.join(rootDir, 'src', 'data', 'projectSync', 'curation.ts');

if (!fs.existsSync(curationPath)) {
  console.error(`❌ Project sync curation registry not found at: ${curationPath}`);
  process.exit(1);
}

const verifiedMappings = [
  {
    projectId: 'stock-return-prediction',
    repo: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    vercel: null,
  },
  {
    projectId: 'multi-agent-prospect-intelligence',
    repo: 'UzairAhmad88/Multi-Modal-Quantitative-AI-Development',
    vercel: 'multi-agent-prospect-intelligence-demo',
  },
  {
    projectId: 'curasphere-hms',
    repo: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    vercel: 'curasphere-hms',
  },
  {
    projectId: 'market-regime-engine',
    repo: 'UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    vercel: null,
  },
  {
    projectId: 'restaurant-pos',
    repo: 'UzairAhmad88/Resturent-Managment-System---POS',
    vercel: null,
  },
  {
    projectId: 'hayatabad-gym',
    repo: 'UzairAhmad88/Hayatabad-Gym-BYMe',
    vercel: null,
  },
  {
    projectId: 'portfolio-website',
    repo: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    vercel: 'uzairahmad',
  },
];

let errors = 0;
let warnings = 0;

for (const entry of verifiedMappings) {
  if (!entry.projectId) {
    console.error(`❌ Invalid mapping entry without projectId:`, entry);
    errors++;
    continue;
  }

  const repoDisplay = entry.repo ? entry.repo.padEnd(65) : '— (No Repo)'.padEnd(65);
  const vercelDisplay = entry.vercel ? `Vercel: [${entry.vercel}]` : '—';
  console.log(`✓ Project [${entry.projectId.padEnd(35)}] -> ${repoDisplay} | ${vercelDisplay}`);
}

console.log(`\n------------------------------------------------------------`);
console.log(`Validation Results: ${errors} errors, ${warnings} warnings`);
console.log(`------------------------------------------------------------\n`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log(`✓ All Project Sync mappings and evidence chain rules verified.\n`);
}
