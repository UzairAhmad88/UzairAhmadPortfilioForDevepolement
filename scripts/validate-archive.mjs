#!/usr/bin/env node

/**
 * Phase 18 Project Archive Pre-Flight Validator
 * Validates integrity of historical project states, taxonomy reasons, successor/predecessor relationships.
 */

import { projects } from '../src/data/projects.ts';

const VALID_ARCHIVE_STATES = new Set([
  'active',
  'archived',
  'superseded',
  'abandoned',
  'paused',
  'legacy',
  'unpublished',
  'excluded'
]);

const VALID_ARCHIVE_REASONS = new Set([
  'COMPLETED_HISTORICAL',
  'SUPERSEDED',
  'ABANDONED',
  'PAUSED',
  'LEGACY',
  'NO_LONGER_MAINTAINED',
  'ACADEMIC_HISTORY',
  'EXPERIMENTAL_HISTORY',
  'UNPUBLISHED',
  'EXCLUDED'
]);

console.log('═══════════════════════════════════════════════════════════════════════════');
console.log('            PHASE 18 — PROJECT ARCHIVE VALIDATOR                        ');
console.log('═══════════════════════════════════════════════════════════════════════════\n');

let errorCount = 0;
let warningCount = 0;
const projectSlugs = new Set(projects.map((p) => p.slug));
const projectIds = new Set(projects.map((p) => p.id || p.slug));

console.log(`[PASS 1] Auditing ${projects.length} project archive states...`);
for (const project of projects) {
  const archive = project.archive;
  const state = archive?.state || (project.status === 'archived' ? 'archived' : 'active');

  if (!VALID_ARCHIVE_STATES.has(state)) {
    console.error(`  ✖ [ERROR] Project "${project.title}" (${project.slug}) has invalid archive state: "${state}"`);
    errorCount++;
  }

  if (archive?.reason && !VALID_ARCHIVE_REASONS.has(archive.reason)) {
    console.error(`  ✖ [ERROR] Project "${project.title}" (${project.slug}) has invalid archive reason: "${archive.reason}"`);
    errorCount++;
  }
}

console.log(`\n[PASS 2] Auditing successor & predecessor relationships...`);
for (const project of projects) {
  const archive = project.archive;
  if (!archive) continue;

  if (archive.successorProjectId) {
    if (archive.successorProjectId === project.slug || archive.successorProjectId === project.id) {
      console.error(`  ✖ [ERROR] Project "${project.title}" has self-referencing successorProjectId: "${archive.successorProjectId}"`);
      errorCount++;
    } else if (!projectSlugs.has(archive.successorProjectId) && !projectIds.has(archive.successorProjectId)) {
      console.error(`  ✖ [ERROR] Project "${project.title}" references non-existent successorProjectId: "${archive.successorProjectId}"`);
      errorCount++;
    }
  }

  if (archive.predecessorProjectId) {
    if (archive.predecessorProjectId === project.slug || archive.predecessorProjectId === project.id) {
      console.error(`  ✖ [ERROR] Project "${project.title}" has self-referencing predecessorProjectId: "${archive.predecessorProjectId}"`);
      errorCount++;
    } else if (!projectSlugs.has(archive.predecessorProjectId) && !projectIds.has(archive.predecessorProjectId)) {
      console.error(`  ✖ [ERROR] Project "${project.title}" references non-existent predecessorProjectId: "${archive.predecessorProjectId}"`);
      errorCount++;
    }
  }
}

console.log(`\n[PASS 3] Auditing public/internal isolation & evidence integrity...`);
for (const project of projects) {
  const state = project.archive?.state;
  if (state === 'unpublished' || state === 'excluded') {
    if (project.featured) {
      console.error(`  ✖ [ERROR] Internal/Excluded project "${project.title}" cannot be marked featured!`);
      errorCount++;
    }
  }

  if (project.githubUrl && !project.githubUrl.startsWith('https://')) {
    console.error(`  ✖ [ERROR] Project "${project.title}" has insecure or invalid githubUrl: "${project.githubUrl}"`);
    errorCount++;
  }

  if (project.liveUrl && !project.liveUrl.startsWith('https://')) {
    console.error(`  ✖ [ERROR] Project "${project.title}" has insecure or invalid liveUrl: "${project.liveUrl}"`);
    errorCount++;
  }
}

console.log('\n───────────────────────────────────────────────────────────────────────────');
console.log(`Validation Complete: ${errorCount} Errors, ${warningCount} Warnings.`);

if (errorCount > 0) {
  console.error('\n✖ Project archive validation FAILED.');
  process.exit(1);
} else {
  console.log('\n✔ All project archive records, taxonomy states, and relationships PASSED.');
  process.exit(0);
}
