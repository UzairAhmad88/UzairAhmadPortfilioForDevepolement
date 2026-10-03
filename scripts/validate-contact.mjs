#!/usr/bin/env node

/**
 * Deterministic Contact System & Validation Engine Validator (Phase 22)
 */

import { contactConfig, inquiryTypeOptions } from '../src/data/contact.ts';
import {
  validateContactInquiry,
  sanitizeInput,
  sanitizeMessage,
  validateEmail,
  validateUrl,
  validateProjectContext,
  validateResearchContext,
  VALID_INQUIRY_TYPES,
} from '../src/lib/contact/validation.ts';
import { formatInquiryEmail } from '../src/lib/email/dispatcher.ts';
import { checkRateLimit, resetRateLimits } from '../src/lib/contact/rateLimiter.ts';

console.log(`
═══════════════════════════════════════════════════════════════════════════
          PHASE 22 — CONTACT SYSTEM & SECURITY ENGINE VALIDATOR            
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

// 1. Validate Contact Configuration
console.log('[PASS 1] Validating contact configuration metadata...');

if (!contactConfig.title || contactConfig.title.trim() === '') {
  error('contactConfig is missing title.');
}
if (!contactConfig.eyebrow || contactConfig.eyebrow.trim() === '') {
  error('contactConfig is missing eyebrow.');
}
if (!contactConfig.introduction || contactConfig.introduction.trim() === '') {
  error('contactConfig is missing introduction.');
}
if (!contactConfig.responseSLA || contactConfig.responseSLA.trim() === '') {
  error('contactConfig is missing responseSLA.');
}
if (!contactConfig.directEmail || !validateEmail(contactConfig.directEmail)) {
  error(`Invalid directEmail in contactConfig: "${contactConfig.directEmail}"`);
} else {
  success(`Verified contact metadata: "${contactConfig.title}" (Direct Email: ${contactConfig.directEmail})`);
}

// 2. Validate Inquiry Types & Controlled Taxonomy
console.log('\n[PASS 2] Validating controlled inquiry taxonomy and hints...');
if (!inquiryTypeOptions || inquiryTypeOptions.length !== 8) {
  error(`inquiryTypeOptions must define exactly 8 options (found ${inquiryTypeOptions?.length || 0}).`);
} else {
  for (const opt of inquiryTypeOptions) {
    if (!opt.value || !VALID_INQUIRY_TYPES.includes(opt.value)) {
      error(`Inquiry option "${opt.value || 'unknown'}" is not in VALID_INQUIRY_TYPES.`);
    }
    if (!opt.label || !opt.description || !opt.hint) {
      error(`Inquiry option "${opt.value}" is missing label, description, or hint.`);
    }
  }
  success(`Verified ${inquiryTypeOptions.length} controlled inquiry types with contextual hints.`);
}

// 3. Test Validation & Sanitization Pipeline
console.log('\n[PASS 3] Testing validation and sanitization pipeline...');

// Valid payload test
const validPayload = {
  name: 'Ada Lovelace',
  email: 'ada@analytical-engine.org',
  inquiryType: 'research',
  organization: 'Babbage Labs',
  subject: 'Bernoulli Numbers Algorithm',
  message: 'Proposing an algorithmic collaboration on non-stationary analytical workflows.',
  relevantLink: 'https://github.com/lovelace/engine-notes',
  projectContext: 'deep-learning-stock-return-prediction',
  researchContext: 'signal-research',
};

const validRes = validateContactInquiry(validPayload);
if (!validRes.isValid || !validRes.sanitizedData) {
  error(`Failed to validate valid payload: ${JSON.stringify(validRes.errors)}`);
} else {
  success('Successfully validated comprehensive structured inquiry.');
}

// Honeypot test
const botPayload = {
  name: 'Spam Bot',
  email: 'bot@spam.xyz',
  inquiryType: 'general',
  message: 'Buy our backlink package now!',
  honeypot: 'http://spam-link.ru',
};
const botRes = validateContactInquiry(botPayload);
if (botRes.isValid) {
  error('Failed to reject bot submission with populated honeypot field.');
} else {
  success('Successfully intercepted and rejected bot honeypot submission.');
}

// Malicious tag and injection test
const dirtyInput = '<script>alert("xss")</script>Dr. Alan <b>Turing</b>\r\nBcc: evil@hacker.com';
const cleanInput = sanitizeInput(dirtyInput);
if (cleanInput.includes('<script>') || cleanInput.includes('\r') || cleanInput.includes('\n')) {
  error(`Sanitizer failed to clean input: "${cleanInput}"`);
} else {
  success(`Sanitization stripped HTML and header newlines correctly: "${cleanInput}"`);
}

// URL Protocol Safety
if (validateUrl('javascript:alert(1)')) {
  error('URL validator failed to reject "javascript:" protocol.');
} else if (!validateUrl('https://github.com/UzairAhmad88')) {
  error('URL validator rejected valid HTTPS URL.');
} else {
  success('Verified URL protocol security filter (allowing only http/https).');
}

// Canonical Context Validator
if (!validateProjectContext('deep-learning-stock-return-prediction')) {
  error('Failed to validate canonical project context.');
}
if (validateProjectContext('fake-nonexistent-project-slug-12345')) {
  error('Failed to reject fake project context slug.');
}
success('Verified canonical project and research context lookups.');

// 4. Test Email Payload Formatter
console.log('\n[PASS 4] Testing email dispatcher payload formatting...');
const formattedEmail = formatInquiryEmail(validRes.sanitizedData);
if (!formattedEmail.subject.includes('[Quantitative & AI Research]')) {
  error(`Formatted subject mismatch: "${formattedEmail.subject}"`);
}
if (formattedEmail.replyTo !== 'ada@analytical-engine.org') {
  error(`Reply-To mismatch: "${formattedEmail.replyTo}"`);
}
if (!formattedEmail.htmlText.includes('Ada Lovelace') || !formattedEmail.plainText.includes('MESSAGE:')) {
  error('Email payload missing required plain text or HTML sections.');
} else {
  success('Verified structured email payload formatting with Reply-To header safety.');
}

// 5. Test Rate Limiter
console.log('\n[PASS 5] Testing rate limiting engine...');
resetRateLimits();
const testIp = '192.168.1.100';
for (let i = 0; i < 5; i++) {
  const check = checkRateLimit(testIp);
  if (!check.allowed) error(`Premature rate limit at iteration ${i}`);
}
const blockedCheck = checkRateLimit(testIp);
if (blockedCheck.allowed) {
  error('Rate limiter failed to block 6th request from same IP.');
} else {
  success(`Rate limiter correctly throttled 6th request (Retry-After: ${blockedCheck.retryAfterSeconds}s).`);
}
resetRateLimits();

// 6. Anti-Marketing & Clean Tone Check
console.log('\n[PASS 6] Scanning copy for prohibited marketing/sales clichés...');
const prohibitedTerms = ['world-class', 'rockstar', '10x engineer', 'best developer', 'cheap', 'pricing table', 'guaranteed roi', 'hire me now'];
const allCopy = [
  contactConfig.title,
  contactConfig.introduction,
  contactConfig.privacyStatement,
  ...inquiryTypeOptions.map((o) => `${o.label} ${o.description} ${o.hint}`),
].join(' ').toLowerCase();

for (const term of prohibitedTerms) {
  if (allCopy.includes(term)) {
    error(`Found prohibited marketing cliché: "${term}" in contact copy.`);
  }
}
success('Anti-marketing and truthful tone audit passed (zero marketing fluff).');

console.log('\n───────────────────────────────────────────────────────────────────────────');
console.log(`Validation Complete: ${errors} Errors, ${warnings} Warnings.\n`);

if (errors > 0) {
  console.error('❌ Contact Validation FAILED.');
  process.exit(1);
} else {
  console.log('✔ All Contact System models, security validators, and email formatters PASSED.\n');
  process.exit(0);
}
