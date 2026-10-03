import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { aboutProfile } from '../../src/data/about.ts';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';
import { labItems } from '../../src/data/lab.ts';

describe('Phase 20 — About 2.0 Identity System & Content Model', () => {
  it('should have complete and valid identity fields in aboutProfile', () => {
    assert.equal(aboutProfile.name, 'Uzair Ahmad');
    assert.ok(aboutProfile.title.length > 0);
    assert.ok(aboutProfile.eyebrow.length > 0);
    assert.ok(aboutProfile.location.includes('Peshawar'));
    assert.ok(aboutProfile.shortBio.length > 20);
    assert.ok(aboutProfile.narrativeParagraphs.length >= 3);
  });

  it('should define structured focus areas with verified canonical routes', () => {
    assert.ok(aboutProfile.focusAreas.length >= 4);

    for (const focus of aboutProfile.focusAreas) {
      assert.ok(focus.id.length > 0);
      assert.ok(focus.title.length > 0);
      assert.ok(focus.domain.length > 0);
      assert.ok(focus.description.length > 0);
      assert.ok(focus.keyTechnologies.length > 0);

      // Verify canonical target resolution
      if (focus.canonicalHref.startsWith('/work/')) {
        const slug = focus.canonicalHref.replace('/work/', '');
        const exists = projects.some((p) => p.slug === slug);
        assert.ok(exists, `Project target "${slug}" does not exist`);
      } else if (focus.canonicalHref.startsWith('/research/')) {
        const slug = focus.canonicalHref.replace('/research/', '');
        const exists = researchItems.some((r) => r.slug === slug);
        assert.ok(exists, `Research target "${slug}" does not exist`);
      } else if (focus.canonicalHref === '/lab') {
        assert.ok(labItems.length > 0);
      }
    }
  });

  it('should define 4 core engineering principles with practical applications', () => {
    assert.equal(aboutProfile.principles.length, 4);

    for (const p of aboutProfile.principles) {
      assert.ok(p.number.length > 0);
      assert.ok(p.title.length > 0);
      assert.ok(p.summary.length > 0);
      assert.ok(p.application.length > 0);
    }
  });

  it('should contain verified education records for IMSciences', () => {
    assert.ok(aboutProfile.education.length >= 1);
    const edu = aboutProfile.education[0];
    assert.ok(edu.institution.includes('Institute of Management Sciences'));
    assert.equal(edu.degree, 'Bachelor of Science');
    assert.equal(edu.field, 'Computer Science');
    assert.ok(edu.focus && edu.focus.length >= 3);
  });

  it('should define clear collaboration interests with role types', () => {
    assert.ok(aboutProfile.collaborationInterests.length >= 3);
    for (const c of aboutProfile.collaborationInterests) {
      assert.ok(c.id.length > 0);
      assert.ok(c.area.length > 0);
      assert.ok(c.roleType.length > 0);
      assert.ok(c.description.length > 0);
    }
  });

  it('should have verified social links to GitHub, LinkedIn, and Email', () => {
    assert.ok(aboutProfile.socialLinks.github.includes('github.com/UzairAhmad88'));
    assert.ok(aboutProfile.socialLinks.linkedin.includes('linkedin.com'));
    assert.ok(aboutProfile.socialLinks.email.includes('@'));
  });
});
