/**
 * VERCEL VALIDATOR MODULE
 * Phase 16 — Verification, URL Validation, and Security Screening
 */

import type { VercelDeployment, VercelCurationEntry, VercelEvidence } from '../../types/vercel.ts';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validates a deployment URL against security and format standards.
 */
export function validateDeploymentUrl(url?: string | null): ValidationResult {
  const result: ValidationResult = { valid: true, errors: [], warnings: [] };

  if (!url || typeof url !== 'string' || url.trim() === '') {
    result.valid = false;
    result.errors.push('URL is empty or undefined');
    return result;
  }

  const trimmed = url.trim();

  // Scheme verification
  if (!trimmed.startsWith('https://')) {
    result.valid = false;
    result.errors.push('URL must use secure HTTPS protocol');
    return result;
  }

  // Reject localhost or internal loopback/private IPs
  if (
    /https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)/i.test(
      trimmed
    )
  ) {
    result.valid = false;
    result.errors.push('URL cannot point to localhost or private network ranges');
    return result;
  }

  try {
    const parsed = new URL(trimmed);
    if (!parsed.hostname || !parsed.hostname.includes('.')) {
      result.valid = false;
      result.errors.push('URL must possess a fully qualified domain name');
    }
  } catch (err) {
    result.valid = false;
    result.errors.push('URL string is malformed and cannot be parsed');
  }

  return result;
}

/**
 * Validates a Vercel deployment record.
 */
export function validateDeploymentRecord(deployment: VercelDeployment): ValidationResult {
  const result: ValidationResult = { valid: true, errors: [], warnings: [] };

  if (!deployment.id) {
    result.valid = false;
    result.errors.push('Deployment is missing a unique ID');
  }

  const urlValidation = validateDeploymentUrl(deployment.url);
  if (!urlValidation.valid) {
    result.valid = false;
    result.errors.push(...urlValidation.errors);
  }

  if (deployment.state === 'ERROR') {
    result.warnings.push(`Deployment ${deployment.id} is in ERROR state`);
  } else if (deployment.state === 'CANCELED') {
    result.warnings.push(`Deployment ${deployment.id} was CANCELED`);
  }

  return result;
}

/**
 * Validates a curation entry against required schema.
 */
export function validateCurationEntry(entry: VercelCurationEntry): ValidationResult {
  const result: ValidationResult = { valid: true, errors: [], warnings: [] };

  if (!entry.vercelProjectId || !entry.vercelProjectName) {
    result.valid = false;
    result.errors.push('Curation entry must specify vercelProjectId and vercelProjectName');
  }

  if (!entry.portfolioProjectId && !entry.researchId && !entry.labId) {
    result.valid = false;
    result.errors.push('Curation entry must target at least one portfolio item (project, research, or lab)');
  }

  if (entry.preferredDeploymentUrl) {
    const urlValidation = validateDeploymentUrl(entry.preferredDeploymentUrl);
    if (!urlValidation.valid) {
      result.valid = false;
      result.errors.push(...urlValidation.errors);
    }
  }

  return result;
}

/**
 * Validates deployment evidence prior to rendering.
 */
export function validateEvidencePresentation(evidence: VercelEvidence): boolean {
  if (!evidence.deploymentUrl) return false;
  const urlCheck = validateDeploymentUrl(evidence.deploymentUrl);
  if (!urlCheck.valid) return false;
  if (evidence.provenance === 'UNAVAILABLE') return false;
  return true;
}
