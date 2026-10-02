import type { ContactInquiry, ContactValidationResult, InquiryType } from '@/types/contact';

const VALID_INQUIRY_TYPES: InquiryType[] = [
  'project',
  'employment',
  'research',
  'consulting',
  'general',
];

export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/<[^>]*>/g, '') // Strip full HTML tags
    .replace(/[\r\n]+/g, ' ') // Strip newlines to prevent header injection
    .trim();
}

export function sanitizeMessage(input: string): string {
  if (!input) return '';
  return input.replace(/<[^>]*>/g, '').trim(); // Preserve multiline breaks but strip HTML
}

export function validateEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim()) && email.length <= 100;
}

export function validateContactInquiry(data: Partial<ContactInquiry>): ContactValidationResult {
  const errors: Record<string, string> = {};

  // Check honeypot
  if (data.honeypot && data.honeypot.trim() !== '') {
    return {
      isValid: false,
      errors: { honeypot: 'Bot submission detected.' },
    };
  }

  // Validate Name
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your name (minimum 2 characters).';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Name must be under 100 characters.';
  }

  // Validate Email
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  // Validate Inquiry Type
  if (!data.inquiryType || !VALID_INQUIRY_TYPES.includes(data.inquiryType as InquiryType)) {
    errors.inquiryType = 'Please select a valid inquiry type.';
  }

  // Validate Message
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide more details in your message (minimum 10 characters).';
  } else if (data.message.trim().length > 3000) {
    errors.message = 'Message must be under 3000 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      isValid: false,
      errors,
    };
  }

  return {
    isValid: true,
    errors: {},
    sanitizedData: {
      name: sanitizeInput(data.name || ''),
      email: data.email?.trim().toLowerCase() || '',
      inquiryType: data.inquiryType as InquiryType,
      organization: data.organization ? sanitizeInput(data.organization) : undefined,
      timeline: data.timeline ? sanitizeInput(data.timeline) : undefined,
      message: sanitizeMessage(data.message || ''),
    },
  };
}
