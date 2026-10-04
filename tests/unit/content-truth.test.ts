import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';
import { aboutProfile } from '../../src/data/about.ts';
import { siteConfig } from '../../src/data/site.ts';
import { technologies } from '../../src/data/technologies.ts';
import { engineeringNotes } from '../../src/data/notes.ts';
import { labItems } from '../../src/data/lab.ts';

describe('Phase 32: Content Truth & Factual Claims Invariants', () => {
  it('verifies all projects link to valid public GitHub repositories', () => {
    assert.ok(projects.length >= 6, 'Must have at least 6 verified projects');
    for (const project of projects) {
      assert.ok(project.githubUrl, `Project ${project.slug} must have a valid githubUrl`);
      assert.ok(
        project.githubUrl.startsWith('https://github.com/UzairAhmad88/'),
        `Project ${project.slug} GitHub URL must point to verified author repository`
      );
      assert.equal(project.repositoryStatus, 'public', `Project ${project.slug} must be public`);
      assert.ok(project.problem.length > 20, `Project ${project.slug} must have substantive problem description`);
      assert.ok(project.solution.length > 20, `Project ${project.slug} must have substantive solution description`);
    }
  });

  it('guarantees zero fake skill percentages, skill bars, or gamified statistics across technologies', () => {
    for (const tech of technologies) {
      // Technology objects must not contain arbitrary percentage scores or ratings
      assert.equal((tech as any).proficiency, undefined, `Tech ${tech.id} must not have arbitrary proficiency percentage`);
      assert.equal((tech as any).score, undefined, `Tech ${tech.id} must not have arbitrary score rating`);
      assert.equal((tech as any).yearsOfExperience, undefined, `Tech ${tech.id} must avoid unverified years claim`);
      const hasGrounding =
        tech.projectSlugs.length > 0 ||
        (tech.noteSlugs && tech.noteSlugs.length > 0) ||
        (tech.labSlugs && tech.labSlugs.length > 0);
      assert.ok(hasGrounding, `Tech ${tech.id} must be grounded in at least one project, note, or lab item`);
    }
  });

  it('verifies all research inquiries contain explicit questions, hypotheses, and limitations', () => {
    assert.ok(researchItems.length >= 3, 'Must have at least 3 research inquiries');
    for (const item of researchItems) {
      assert.ok(item.question.length > 15, `Research ${item.slug} must have explicit research question`);
      assert.ok(item.hypothesis.length > 15, `Research ${item.slug} must have testable hypothesis`);
      assert.ok(item.limitations, `Research ${item.slug} must have explicit limitations`);
      assert.ok(item.limitations.length > 0, `Research ${item.slug} must document at least one limitation`);
      assert.ok(item.experiments.length > 0, `Research ${item.slug} must define empirical experiments`);
    }
  });

  it('verifies personal identity, location, and education claims', () => {
    assert.equal(aboutProfile.name, 'Uzair Ahmad');
    assert.equal(aboutProfile.location, 'Peshawar, Pakistan');
    assert.ok(aboutProfile.education.length > 0, 'Must have education record');
    const csDegree = aboutProfile.education[0];
    assert.equal(csDegree.degree, 'Bachelor of Science');
    assert.equal(csDegree.field, 'Computer Science');
    assert.equal(csDegree.institution, 'Institute of Management Sciences (IMSciences)');
    assert.equal(csDegree.period, '2021 – 2025');
  });

  it('verifies direct communication channels and email consistency', () => {
    assert.equal(siteConfig.email, 'imuzairahmad8@gmail.com');
    assert.equal(siteConfig.socialLinks.github.username, 'UzairAhmad88');
    assert.equal(siteConfig.socialLinks.github.url, 'https://github.com/UzairAhmad88');
    assert.equal(siteConfig.socialLinks.linkedin.url, 'https://www.linkedin.com/in/uzair-ahmad-58007a266/');
  });

  it('verifies engineering notes are grounded in real implementation problems and lessons', () => {
    assert.ok(engineeringNotes.length >= 6, 'Must have at least 6 engineering notes');
    for (const note of engineeringNotes) {
      assert.ok(note.problem.length > 20, `Note ${note.slug} must define specific technical problem`);
      assert.ok(note.solution.length > 20, `Note ${note.slug} must define technical solution`);
      assert.ok(note.lessons.length > 0, `Note ${note.slug} must document concrete lessons learned`);
    }
  });

  it('verifies lab workbench items declare authentic state and intent', () => {
    assert.ok(labItems.length >= 6, 'Must have at least 6 lab items');
    for (const lab of labItems) {
      assert.ok(['actual', 'prototype', 'concept', 'planned'].includes(lab.state), `Lab ${lab.slug} must declare valid state`);
      assert.ok(lab.question.length > 10, `Lab ${lab.slug} must define exploration question`);
      assert.ok(lab.intent.length > 10, `Lab ${lab.slug} must define intent`);
    }
  });
});
