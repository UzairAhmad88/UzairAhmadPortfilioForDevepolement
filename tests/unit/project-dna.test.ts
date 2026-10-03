import { describe, it } from 'node:test';
import assert from 'node:assert';
import { projects, featuredProject, fypProject } from '../../src/data/projects.ts';
import { getProjectDNA } from '../../src/utils/projectDNA.ts';

describe('Project DNA System & Technical Fingerprint Integrity', () => {
  it('should extract valid Project DNA for every project in the system', () => {
    assert.ok(projects.length >= 6, 'Should have verified projects');


    for (const project of projects) {
      const dna = getProjectDNA(project);
      assert.ok(dna.type, `Project ${project.slug} must have a valid DNA type`);
      assert.ok(dna.status, `Project ${project.slug} must have a formatted status`);
      assert.ok(dna.rawStatus, `Project ${project.slug} must preserve rawStatus`);
      assert.ok(Array.isArray(dna.technologies), `Project ${project.slug} must have a technologies array`);
      assert.ok(dna.technologies.length > 0, `Project ${project.slug} must have at least one technology`);
      assert.ok(Array.isArray(dna.evidence), `Project ${project.slug} must have an evidence array`);
      assert.ok(dna.evidence.length > 0, `Project ${project.slug} must have at least one verifiable evidence item`);
    }
  });

  it('should verify the Flagship project DNA attributes', () => {
    const dna = getProjectDNA(featuredProject);
    assert.strictEqual(dna.type, 'Quantitative Research & System');
    assert.strictEqual(dna.status, 'Active Research');
    assert.strictEqual(dna.rawStatus, 'active');
    assert.strictEqual(dna.role, 'Lead Quantitative AI Engineer');
    assert.strictEqual(dna.context, 'Independent Research');
    assert.strictEqual(dna.deployment, 'Local Research / GPU (CUDA)');
    assert.ok(dna.technologies.includes('PyTorch'));
    assert.ok(dna.technologies.includes('Python'));

    const githubEvidence = dna.evidence.find((e) => e.type === 'github');
    assert.ok(githubEvidence, 'Featured project must have GitHub evidence');
    assert.strictEqual(githubEvidence?.verified, true);
    assert.ok(githubEvidence?.url?.includes('UzairAhmad88'));

    const caseStudyEvidence = dna.evidence.find((e) => e.type === 'case-study');
    assert.ok(caseStudyEvidence, 'Featured project must have on-platform case study evidence');
    assert.strictEqual(caseStudyEvidence?.url, `/work/${featuredProject.slug}`);
  });

  it('should verify the Final Year Project (FYP) DNA attributes', () => {
    const dna = getProjectDNA(fypProject);
    assert.strictEqual(dna.type, 'Final Year Project (FYP) & AI System');
    assert.strictEqual(dna.status, 'Academic FYP');
    assert.strictEqual(dna.rawStatus, 'academic');
    assert.strictEqual(dna.role, 'Lead Architect & AI Systems Engineer');
    assert.strictEqual(dna.context, 'Academic (FYP)');
    assert.strictEqual(dna.deployment, 'Python / LangGraph Agent Runtime');
    assert.ok(dna.technologies.includes('Multi-Agent AI'));
    assert.ok(dna.technologies.includes('LangGraph'));
  });

  it('should verify production SaaS project (CuraSphere HMS) DNA attributes', () => {
    const curasphere = projects.find((p) => p.slug === 'curasphere-hms');
    assert.ok(curasphere, 'CuraSphere HMS project must exist');
    const dna = getProjectDNA(curasphere!);
    assert.strictEqual(dna.type, 'Healthcare Management SaaS');
    assert.strictEqual(dna.status, 'Completed');
    assert.strictEqual(dna.rawStatus, 'completed');
    assert.strictEqual(dna.context, 'Personal Engineering');
    assert.strictEqual(dna.deployment, 'Vercel (Production)');
    assert.ok(dna.technologies.includes('React'));
    assert.ok(dna.technologies.includes('TypeScript'));
    assert.ok(dna.technologies.includes('PostgreSQL'));

    const liveEvidence = dna.evidence.find((e) => e.type === 'live');
    assert.ok(liveEvidence, 'CuraSphere must have live application evidence');
    assert.strictEqual(liveEvidence?.verified, true);
  });

  it('should guarantee no fabricated quality scores, ratings, or fake progress percentages exist in project DNA', () => {
    for (const project of projects) {
      const dna = getProjectDNA(project);
      const dnaString = JSON.stringify(dna);
      assert.ok(!dnaString.includes('9/10'), 'Must not contain fake ratings');
      assert.ok(!dnaString.includes('Complexity Score'), 'Must not contain arbitrary complexity scores');
      assert.ok(!dnaString.includes('87%'), 'Must not contain fake progress percentages');
      assert.ok(!dnaString.includes('Top Project'), 'Must not contain marketing ranking labels');
    }
  });

  it('should ensure all evidence links have valid protocols or internal routing paths', () => {
    for (const project of projects) {
      const dna = getProjectDNA(project);
      for (const item of dna.evidence) {
        if (item.url) {
          const isValid = item.url.startsWith('https://') || item.url.startsWith('http://') || item.url.startsWith('/work/');
          assert.ok(isValid, `Evidence URL for ${project.slug} must be valid: ${item.url}`);
        }
      }
    }
  });
});
