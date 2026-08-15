import type { MetadataRoute } from 'next'
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
  { path: '/news/finmedia-launch', priority: 0.5 },
  { path: '/contact', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    priority,
    changeFrequency: 'monthly',
  }))
}
