import { PostHog } from 'posthog-node';

let posthogClient = null;

/**
 * Server-side PostHog client for feature flag evaluation
 * Uses singleton pattern to reuse client across requests
 */
export default function PostHogNode() {
  if (!posthogClient) {
    const apiKey = import.meta.env.POSTHOG_API_KEY || process.env.POSTHOG_API_KEY || 'phc_PLACEHOLDER';
    posthogClient = new PostHog(apiKey, {
      host: import.meta.env.POSTHOG_HOST || process.env.POSTHOG_HOST || 'https://us.i.posthog.com',
    });
  }
  return posthogClient;
}

/**
 * Get distinct ID from cookies or generate new one
 */
export function getDistinctId(cookies) {
  let distinctId = cookies.get('ph_distinct_id')?.value;
  if (!distinctId) {
    distinctId = crypto.randomUUID();
    cookies.set('ph_distinct_id', distinctId, { 
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      httpOnly: false // Allow client-side access
    });
  }
  return distinctId;
}
