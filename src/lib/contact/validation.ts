import type { ContactInquiry, ContactValidationResult, InquiryType } from '../../types/contact.ts';
import { projects } from '../../data/projects.ts';
import { researchItems } from '../../data/research.ts';

export const VALID_INQUIRY_TYPES: InquiryType[] = [
  'project',
  'research',
  'technical',
  'academic',
  'open-source',
  'consulting',
  'employment',
  'general',
];

/**
 * Strips HTML tags and line breaks from single-line fields to prevent header injection and XSS.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/[\r\n\t]+/g, ' ') // Strip newlines/tabs to prevent header injection
    .trim();
}

/**
 * Strips HTML tags from multi-line text fields while preserving standard paragraph whitespace.
 */
export function sanitizeMessage(input: string): string {
  if (!input) return '';
  return input
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/\r\n/g, '\n') // Normalize line endings
    .replace(/\r/g, '\n')
    .trim();
}

/**
 * Validates email address format and reasonable length bounds.
 */
export function validateEmail(email: string): boolean {
  if (!email) return false;
  const normalized = email.trim();
  if (normalized.length > 100 || normalized.length < 5) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(normalized);
}

/**
 * Validates URL ensuring only safe HTTP/HTTPS protocols.
 */
export function validateUrl(url: string): boolean {
  if (!url) return true; // Optional field
  const trimmed = url.trim();
  if (trimmed.length === 0) return true;
  if (trimmed.length > 300) return false;

  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Validates canonical project slug if provided as context.
 */
export function validateProjectContext(slug?: string): boolean {
  if (!slug || slug.trim() === '') return true;
  return projects.some((p) => p.slug === slug.trim().toLowerCase());
}

/**
 * Validates canonical research slug if provided as context.
 */
export function validateResearchContext(slug?: string): boolean {
  if (!slug || slug.trim() === '') return true;
  return researchItems.some((r) => r.slug === slug.trim().toLowerCase());
}

/**
 * Comprehensive server and client-side contact inquiry validator.
 */
export function validateContactInquiry(data: Partial<ContactInquiry>): ContactValidationResult {
  const errors: Record<string, string> = {};

  // 1. Honeypot check (anti-bot)
  if (data.honeypot && data.honeypot.trim() !== '') {
    return {
      isValid: false,
      errors: { honeypot: 'Bot submission detected.' },
    };
  }

  // 2. Validate Name
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your name (minimum 2 characters).';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Name must be 100 characters or fewer.';
  }

  // 3. Validate Email
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  // 4. Validate Inquiry Type
  if (!data.inquiryType || !VALID_INQUIRY_TYPES.includes(data.inquiryType as InquiryType)) {
    errors.inquiryType = 'Please select a valid inquiry type.';
  }

  // 5. Validate Message Body
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide more details in your message (minimum 10 characters).';
  } else if (data.message.trim().length > 4000) {
    errors.message = 'Message must be 4000 characters or fewer.';
  }

  // 6. Validate Optional Relevant Link
  if (data.relevantLink && !validateUrl(data.relevantLink)) {
    errors.relevantLink = 'Please provide a valid URL starting with http:// or https://';
  }

  // 7. Validate Context References (if provided)
  if (data.projectContext && !validateProjectContext(data.projectContext)) {
    errors.projectContext = 'Referenced project context is not recognized.';
  }

  if (data.researchContext && !validateResearchContext(data.researchContext)) {
    errors.researchContext = 'Referenced research context is not recognized.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      isValid: false,
      errors,
    };
  }

  return {
    isValid: true,
    errors: {},
    sanitizedData: {
      name: sanitizeInput(data.name || ''),
      email: data.email?.trim().toLowerCase() || '',
      inquiryType: data.inquiryType as InquiryType,
      subject: data.subject ? sanitizeInput(data.subject) : undefined,
      organization: data.organization ? sanitizeInput(data.organization) : undefined,
      timeline: data.timeline ? sanitizeInput(data.timeline) : undefined,
      message: sanitizeMessage(data.message || ''),
      relevantLink: data.relevantLink ? data.relevantLink.trim() : undefined,
      projectContext: data.projectContext ? sanitizeInput(data.projectContext) : undefined,
      researchContext: data.researchContext ? sanitizeInput(data.researchContext) : undefined,
      expectedOutcome: data.expectedOutcome ? sanitizeInput(data.expectedOutcome) : undefined,
      timestamp: data.timestamp || Date.now(),
    },
  };
}
