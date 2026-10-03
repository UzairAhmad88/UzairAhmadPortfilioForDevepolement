export interface AboutFocusArea {
  id: string;
  title: string;
  domain: string;
  description: string;
  canonicalHref: string;
  evidenceType: 'project' | 'research' | 'lab' | 'note' | 'technology';
  keyTechnologies: string[];
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  summary: string;
  application: string;
}

export interface EducationRecord {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period?: string;
  focus?: string[];
}

export interface CollaborationInterest {
  id: string;
  area: string;
  roleType: string;
  description: string;
}

export interface AboutProfile {
  name: string;
  title: string;
  eyebrow: string;
  location: string;
  shortBio: string;
  narrativeParagraphs: string[];
  focusAreas: AboutFocusArea[];
  principles: EngineeringPrinciple[];
  education: EducationRecord[];
  collaborationInterests: CollaborationInterest[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
  };
}
