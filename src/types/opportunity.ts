import type { InquiryType } from './contact';

export interface ProfessionalOpportunity {
  id: string;
  slug: string;
  title: string;
  category: InquiryType;
  description: string;
  suitableFor: string[];
  capabilities: string[];
  relatedProjects: string[];
  relatedResearch?: string[];
  expectations: string[];
  ctaLabel: string;
  ctaHref: string;
}
