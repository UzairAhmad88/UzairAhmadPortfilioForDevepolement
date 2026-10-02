import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  validateContactInquiry,
  sanitizeInput,
  sanitizeMessage,
  validateEmail,
} from '../../src/lib/contact/validation.ts';
import { formatInquiryEmail } from '../../src/lib/email/dispatcher.ts';
import { professionalOpportunities } from '../../src/data/opportunities.ts';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';

describe('Contact Validation & Sanitization', () => {
  it('should accept a valid structured contact inquiry', () => {
    const result = validateContactInquiry({
      name: 'Sarah Connor',
      email: 'sarah@skynet-prevention.io',
      inquiryType: 'project',
      organization: 'Cyberdyne Defense',
      timeline: 'Q3 2026',
      message: 'We are looking for an engineer to architect our deterministic agent pipeline.',
    });

    assert.strictEqual(result.isValid, true);
    assert.deepStrictEqual(result.errors, {});
    assert.ok(result.sanitizedData);
    assert.strictEqual(result.sanitizedData.name, 'Sarah Connor');
    assert.strictEqual(result.sanitizedData.email, 'sarah@skynet-prevention.io');
    assert.strictEqual(result.sanitizedData.inquiryType, 'project');
  });

  it('should detect and reject honeypot submissions from bots', () => {
    const result = validateContactInquiry({
      name: 'Bot Runner',
      email: 'bot@spam.com',
      inquiryType: 'general',
      message: 'Automated SEO pitch message here.',
      honeypot: 'http://spam-link.com',
    });

    assert.strictEqual(result.isValid, false);
    assert.ok(result.errors.honeypot);
  });

  it('should reject invalid email addresses', () => {
    assert.strictEqual(validateEmail('invalid-email'), false);
    assert.strictEqual(validateEmail('user@'), false);
    assert.strictEqual(validateEmail('@domain.com'), false);
    assert.strictEqual(validateEmail('user@domain.c'), false);
    assert.strictEqual(validateEmail('valid.user+tag@domain.co.uk'), true);
  });

  it('should sanitize HTML tags from inputs to prevent XSS', () => {
    const dirtyName = '<script>alert("hack")</script>Jane <b>Doe</b>';
    const cleanName = sanitizeInput(dirtyName);
    assert.strictEqual(cleanName, 'alert("hack")Jane Doe');
  });

  it('should strip newlines from header-sensitive fields to prevent email injection', () => {
    const injectedOrg = 'Acme Corp\r\nBcc: evil@attacker.com\nSubject: Spoofed';
    const cleanOrg = sanitizeInput(injectedOrg);
    assert.strictEqual(cleanOrg, 'Acme Corp Bcc: evil@attacker.com Subject: Spoofed');
  });

  it('should format notification email with structured layout and subject', () => {
    const payload = formatInquiryEmail({
      name: 'Dr. John Nash',
      email: 'nash@princeton.edu',
      inquiryType: 'research',
      organization: 'Game Theory Lab',
      timeline: 'Academic Year 2026',
      message: 'Proposing collaboration on latent volatility Markov switching regimes.',
    });

    assert.strictEqual(payload.subject, '[Research Collaboration] Dr. John Nash - Game Theory Lab');
    assert.strictEqual(payload.replyTo, 'nash@princeton.edu');
    assert.ok(payload.plainText.includes('INBOUND INQUIRY: RESEARCH COLLABORATION'));
    assert.ok(payload.htmlText.includes('Dr. John Nash'));
  });
});

describe('Professional Opportunities Data Integrity', () => {
  it('should have valid opportunities with complete fields', () => {
    assert.ok(professionalOpportunities.length > 0);
    professionalOpportunities.forEach((opp) => {
      assert.ok(opp.id, 'Opportunity must have an ID');
      assert.ok(opp.slug, 'Opportunity must have a slug');
      assert.ok(opp.title, 'Opportunity must have a title');
      assert.ok(opp.description, 'Opportunity must have a description');
      assert.ok(opp.capabilities && opp.capabilities.length > 0);
      assert.ok(opp.expectations && opp.expectations.length > 0);
      assert.ok(opp.ctaLabel && opp.ctaHref);
    });
  });

  it('should resolve relatedProjects in opportunities to valid project slugs', () => {
    const projectSlugs = new Set(projects.map((p) => p.slug));
    professionalOpportunities.forEach((opp) => {
      opp.relatedProjects.forEach((projSlug) => {
        assert.ok(
          projectSlugs.has(projSlug),
          `Opportunity ${opp.id} references non-existent project ${projSlug}`
        );
      });
    });
  });

  it('should resolve relatedResearch in opportunities to valid research slugs', () => {
    const researchSlugs = new Set(researchItems.map((r) => r.slug));
    professionalOpportunities.forEach((opp) => {
      if (opp.relatedResearch) {
        opp.relatedResearch.forEach((resSlug) => {
          assert.ok(
            researchSlugs.has(resSlug),
            `Opportunity ${opp.id} references non-existent research ${resSlug}`
          );
        });
      }
    });
  });
});
