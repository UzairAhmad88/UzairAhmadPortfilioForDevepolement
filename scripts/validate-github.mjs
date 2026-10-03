#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log(`\n============================================================`);
console.log(`  GITHUB INTELLIGENCE & INTEGRITY VALIDATOR`);
console.log(`============================================================\n`);

// Curated mappings
const curatedEntries = [
  {
    repo: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    project: 'deep-learning-stock-return-prediction',
  },
  {
    repo: 'UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    project: 'market-regime-engine',
  },
  {
    repo: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    project: 'curasphere-hms',
  },
  {
    repo: 'UzairAhmad88/Resturent-Managment-System---POS',
    project: 'restaurant-pos',
  },
  {
    repo: 'UzairAhmad88/Hayatabad-Gym-BYMe',
    project: 'hayatabad-gym',
  },
  {
    repo: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    project: 'portfolio-website',
  },
  {
    repo: 'UzairAhmad88/Multi-Modal-Quantitative-AI-Development',
    project: 'multi-agent-prospect-intelligence',
  },
];

let errors = 0;
let warnings = 0;

for (const entry of curatedEntries) {
  if (!entry.repo || !entry.project) {
    console.error(`❌ Invalid curation entry:`, entry);
    errors++;
  } else {
    console.log(`✓ Validated mapping: ${entry.repo.padEnd(75)} -> [${entry.project}]`);
  }
}

console.log(`\n------------------------------------------------------------`);
console.log(`Validation Results: ${errors} errors, ${warnings} warnings`);
console.log(`------------------------------------------------------------\n`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log(`✓ All GitHub mappings and repository constraints valid.\n`);
}
