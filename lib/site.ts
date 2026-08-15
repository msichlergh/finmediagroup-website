/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL per environment; Vercel's
 * VERCEL_PROJECT_PRODUCTION_URL is used as the fallback on preview builds.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://finmediagroup.com')

export const SITE_NAME = 'FinMedia Group'
