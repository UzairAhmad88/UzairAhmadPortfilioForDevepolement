export type InquiryType =
  | 'project'
  | 'employment'
  | 'research'
  | 'consulting'
  | 'general';

export interface ContactInquiry {
  name: string;
  email: string;
  inquiryType: InquiryType;
  organization?: string;
  timeline?: string;
  message: string;
  honeypot?: string;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactInquiry;
}
