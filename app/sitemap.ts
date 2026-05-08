import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE = 'https://www.bitnetinc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE}/services/mobile-app-development`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/services/cross-platform-development`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/services/web-application-development`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/services/ai-integration-agents`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/portfolio`, lastModified: new Date(), priority: 0.85, changeFrequency: 'monthly' },
    { url: `${BASE}/blog`, lastModified: new Date(), priority: 0.85, changeFrequency: 'daily' },
    { url: `${BASE}/contact`, lastModified: new Date(), priority: 0.8, changeFrequency: 'yearly' },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.75,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticRoutes, ...blogRoutes]
}
