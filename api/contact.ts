import { validateContactInquiry } from '../src/lib/contact/validation.ts';
import { formatInquiryEmail } from '../src/lib/email/dispatcher.ts';
import { checkRateLimit } from '../src/lib/contact/rateLimiter.ts';

export default async function handler(req: any, res: any) {
  // 1. Method restriction
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      error: 'Method Not Allowed',
      message: 'Only POST requests are accepted.',
    });
  }

  // 2. IP Rate limiting
  const forwarded = req.headers['x-forwarded-for'];
  const clientIp = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket?.remoteAddress || '127.0.0.1';
  const rateLimit = checkRateLimit(clientIp);

  if (!rateLimit.allowed) {
    res.setHeader('Retry-After', String(rateLimit.retryAfterSeconds || 60));
    return res.status(429).json({
      error: 'Too Many Requests',
      message: `Rate limit exceeded. Please try again in ${rateLimit.retryAfterSeconds} seconds.`,
    });
  }

  // 3. Body validation & size check
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid JSON payload.',
      });
    }
  }

  if (!body || typeof body !== 'object') {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Missing request body.',
    });
  }

  const validation = validateContactInquiry(body);
  if (!validation.isValid || !validation.sanitizedData) {
    return res.status(400).json({
      error: 'Validation Error',
      message: 'One or more fields failed validation.',
      errors: validation.errors,
    });
  }

  // 4. Format email payload safely
  const formattedEmail = formatInquiryEmail(validation.sanitizedData);

  // 5. If provider environment variables exist (e.g. RESEND_API_KEY), send via transactional API
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey && process.env.CONTACT_TO_EMAIL) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || 'portfolio@uzairahmad.com',
          to: process.env.CONTACT_TO_EMAIL,
          reply_to: formattedEmail.replyTo,
          subject: formattedEmail.subject,
          text: formattedEmail.plainText,
          html: formattedEmail.htmlText,
        }),
      });

      if (!response.ok) {
        // Log internally, return safe generic message
        console.error('Email delivery error status:', response.status);
      }
    } catch (err) {
      console.error('Email delivery network error');
    }
  }

  // 6. Return clean success response
  return res.status(200).json({
    success: true,
    message: 'Your inquiry has been received. Thank you for starting a conversation.',
  });
}
