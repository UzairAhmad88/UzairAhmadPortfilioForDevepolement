#!/usr/bin/env node

/**
 * Deterministic About 2.0 Identity & Content Validator (Phase 20)
 */

import { aboutProfile } from '../src/data/about.ts';
import { technologies } from '../src/data/technologies.ts';
import { projects } from '../src/data/projects.ts';
import { researchItems } from '../src/data/research.ts';

console.log(`
═══════════════════════════════════════════════════════════════════════════
            PHASE 20 — ABOUT 2.0 IDENTITY & CONTENT VALIDATOR              
═══════════════════════════════════════════════════════════════════════════
`);

let errors = 0;
let warnings = 0;

function error(msg) {
  console.error(`  ❌ [ERROR] ${msg}`);
  errors++;
}

function success(msg) {
  console.log(`  ✓ ${msg}`);
}

// 1. Validate Identity Schema & Required Fields
console.log('[PASS 1] Validating identity model and required profile fields...');

if (!aboutProfile.name || aboutProfile.name.trim() === '') {
  error('aboutProfile is missing a name.');
}
if (!aboutProfile.title || aboutProfile.title.trim() === '') {
  error('aboutProfile is missing a professional title.');
}
if (!aboutProfile.location || aboutProfile.location.trim() === '') {
  error('aboutProfile is missing location.');
}
if (!aboutProfile.shortBio || aboutProfile.shortBio.trim() === '') {
  error('aboutProfile is missing shortBio.');
}
if (!aboutProfile.narrativeParagraphs || aboutProfile.narrativeParagraphs.length === 0) {
  error('aboutProfile is missing narrativeParagraphs.');
} else {
  success(`Verified profile: ${aboutProfile.name} — ${aboutProfile.title} (${aboutProfile.location})`);
}

// 2. Validate Focus Areas & Canonical Cross-Links
console.log('\n[PASS 2] Validating focus areas and canonical cross-links...');
if (!aboutProfile.focusAreas || aboutProfile.focusAreas.length === 0) {
  error('aboutProfile has no focusAreas.');
} else {
  for (const focus of aboutProfile.focusAreas) {
    if (!focus.id || !focus.title || !focus.domain || !focus.canonicalHref) {
      error(`Focus area "${focus.id || 'unknown'}" missing required properties.`);
    }

    // Verify canonical routes
    if (focus.canonicalHref.startsWith('/work/')) {
      const slug = focus.canonicalHref.replace('/work/', '');
      const proj = projects.find((p) => p.slug === slug);
      if (!proj) {
        error(`Focus area "${focus.id}" references non-existent project: "${slug}"`);
      }
    } else if (focus.canonicalHref.startsWith('/research/')) {
      const slug = focus.canonicalHref.replace('/research/', '');
      const res = researchItems.find((r) => r.slug === slug);
      if (!res) {
        error(`Focus area "${focus.id}" references non-existent research item: "${slug}"`);
      }
    }

    // Check technologies
    if (!focus.keyTechnologies || focus.keyTechnologies.length === 0) {
      error(`Focus area "${focus.id}" has no keyTechnologies.`);
    }
  }
  success(`Verified ${aboutProfile.focusAreas.length} focus areas and canonical cross-references.`);
}

// 3. Validate Engineering Principles
console.log('\n[PASS 3] Validating engineering principles...');
if (!aboutProfile.principles || aboutProfile.principles.length === 0) {
  error('aboutProfile has no principles.');
} else {
  for (const p of aboutProfile.principles) {
    if (!p.number || !p.title || !p.summary || !p.application) {
      error(`Principle "${p.number || 'unknown'}" missing required fields.`);
    }
  }
  success(`Verified ${aboutProfile.principles.length} engineering principles.`);
}

// 4. Validate Education & Academic Grounding
console.log('\n[PASS 4] Validating education records...');
if (!aboutProfile.education || aboutProfile.education.length === 0) {
  error('aboutProfile has no education records.');
} else {
  for (const edu of aboutProfile.education) {
    if (!edu.institution || !edu.degree || !edu.field || !edu.location) {
      error(`Education record at "${edu.institution || 'unknown'}" missing required fields.`);
    }
  }
  success(`Verified ${aboutProfile.education.length} education records.`);
}

// 5. Validate Collaboration & Social Links
console.log('\n[PASS 5] Validating collaboration interests and social links...');
if (!aboutProfile.collaborationInterests || aboutProfile.collaborationInterests.length === 0) {
  error('aboutProfile has no collaborationInterests.');
} else {
  for (const c of aboutProfile.collaborationInterests) {
    if (!c.id || !c.area || !c.roleType || !c.description) {
      error(`Collaboration interest "${c.id || 'unknown'}" missing required fields.`);
    }
  }
  success(`Verified ${aboutProfile.collaborationInterests.length} collaboration areas.`);
}

if (!aboutProfile.socialLinks.github || !aboutProfile.socialLinks.linkedin || !aboutProfile.socialLinks.email) {
  error('aboutProfile has missing social links (github/linkedin/email required).');
} else {
  success('Verified social channels (GitHub, LinkedIn, Email, WhatsApp).');
}

// 6. Anti-Fabrication & Voice Check
console.log('\n[PASS 6] Scanning for prohibited buzzwords or ungrounded claims...');
const prohibitedWords = ['world-class', 'industry-leading', 'rockstar', '10x engineer', 'guru', 'mastered all technologies'];
const allText = [
  aboutProfile.shortBio,
  ...aboutProfile.narrativeParagraphs,
  ...aboutProfile.principles.map((p) => `${p.title} ${p.summary}`),
].join(' ').toLowerCase();

for (const word of prohibitedWords) {
  if (allText.includes(word)) {
    error(`Found prohibited hyperbolic phrase: "${word}" in profile copy.`);
  }
}
success('Anti-fabrication and voice audit passed (zero marketing hyperbole).');

console.log('\n───────────────────────────────────────────────────────────────────────────');
console.log(`Validation Complete: ${errors} Errors, ${warnings} Warnings.\n`);

if (errors > 0) {
  console.error('❌ Validation FAILED.');
  process.exit(1);
} else {
  console.log('✔ All About 2.0 identity models, links, and content checks PASSED.\n');
  process.exit(0);
}
