export type InquiryType =
  | 'project'
  | 'research'
  | 'technical'
  | 'academic'
  | 'open-source'
  | 'consulting'
  | 'employment'
  | 'general';

export interface ContactInquiry {
  name: string;
  email: string;
  inquiryType: InquiryType;
  subject?: string;
  organization?: string;
  timeline?: string;
  message: string;
  relevantLink?: string;
  projectContext?: string;
  researchContext?: string;
  expectedOutcome?: string;
  honeypot?: string;
  timestamp?: number;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactInquiry;
}

export interface FormattedEmailPayload {
  subject: string;
  fromName: string;
  replyTo: string;
  plainText: string;
  htmlText: string;
}

export interface DeliveryResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface ContactDeliveryProvider {
  name: string;
  send(payload: FormattedEmailPayload): Promise<DeliveryResult>;
}

export interface InquiryTypeOption {
  value: InquiryType;
  label: string;
  description: string;
  hint: string;
}
