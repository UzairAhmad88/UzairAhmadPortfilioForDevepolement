interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Maximum 5 submissions per IP per 10 minutes
const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 60 * 1000;

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number; retryAfterSeconds?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + WINDOW_MS,
    });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfterSeconds = Math.ceil((entry.resetTime - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - entry.count };
}

export function resetRateLimits(): void {
  rateLimitStore.clear();
}
