import type { MetadataRoute } from 'next'
import { ARTICLES } from '@/lib/news'
import { SITE_URL } from '@/lib/site'

const ROUTES = [
  { path: '/', priority: 1 },
  { path: '/network', priority: 0.9 },
  { path: '/awards', priority: 0.9 },
  { path: '/expos', priority: 0.8 },
  { path: '/ventures', priority: 0.8 },
  { path: '/partnerships', priority: 0.8 },
  { path: '/investors', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/careers', priority: 0.6 },
  { path: '/news', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      priority,
      changeFrequency: 'monthly' as const,
    })),
    // articles come from the same source the pages render from
    ...ARTICLES.map((a) => ({
      url: `${SITE_URL}/news/${a.slug}`,
      lastModified: a.published,
      priority: 0.5,
      changeFrequency: 'yearly' as const,
    })),
  ]
}
