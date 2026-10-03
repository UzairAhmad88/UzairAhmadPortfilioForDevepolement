import type { InquiryTypeOption } from '../types/contact.ts';

export const inquiryTypeOptions: InquiryTypeOption[] = [
  {
    value: 'project',
    label: 'Project & Full-Stack Systems',
    description: 'Collaborate on product engineering, data architectures, or Next.js/PostgreSQL platforms.',
    hint: 'Tip: Describe the core deliverables, expected user volume, technical constraints, and target timeline.',
  },
  {
    value: 'research',
    label: 'Quantitative & AI Research',
    description: 'Explore statistical time-series modeling, market regime engines, or neural architectures.',
    hint: 'Tip: Reference the specific statistical hypothesis, time-series dataset, or research paper of interest.',
  },
  {
    value: 'technical',
    label: 'Multi-Agent AI & Architecture',
    description: 'Discuss deterministic LangGraph state machines, Pydantic guardrails, or async microservices.',
    hint: 'Tip: Detail the orchestration bottlenecks, agent tool-calling schemas, or state transition constraints.',
  },
  {
    value: 'academic',
    label: 'Academic & Student Discussion',
    description: 'Discuss academic research methodology, machine learning theory, or computer science studies.',
    hint: 'Tip: Outline your institutional background, research domain, and specific questions.',
  },
  {
    value: 'open-source',
    label: 'Open-Source Collaboration',
    description: 'Propose contributions, discuss public repositories, or report technical edge cases.',
    hint: 'Tip: Include the relevant repository URL, branch, or reproduction steps.',
  },
  {
    value: 'consulting',
    label: 'Architecture Review & Consulting',
    description: 'Request in-depth audits on data pipelines, lookahead leakage, or frontend Zero-CLS performance.',
    hint: 'Tip: Highlight existing system architecture, latency requirements, and compliance standards.',
  },
  {
    value: 'employment',
    label: 'High-Impact Engineering Role',
    description: 'Discuss full-time or specialized contract engineering positions.',
    hint: 'Tip: Please include the role title, team domain, technical stack, and location/remote parameters.',
  },
  {
    value: 'general',
    label: 'General Professional Inquiry',
    description: 'Start a general technical conversation or professional introduction.',
    hint: 'Tip: Share the context of your inquiry and what you would like to explore.',
  },
];

export const contactConfig = {
  title: 'Start a Technical Conversation',
  eyebrow: 'DIRECT COMMUNICATION // PROFESSIONAL INQUIRY',
  introduction:
    'Whether you have an engineering challenge, an applied research question, or a project prototype to scope, send over the context and constraints below. I review and respond personally to substantive technical inquiries.',
  responseSLA: '24–48 business hours',
  privacyStatement:
    'Your details are used solely to review and respond to your inquiry. No marketing lists, trackers, or automated sales sequences.',
  directEmail: 'imuzairahmad8@gmail.com',
  updatedAt: '2026-10-01',
};
