import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.bninc.com', lastModified: new Date(), priority: 1.0 },
    {
      url: 'https://www.bninc.com/services/mobile-app-development',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.bninc.com/services/cross-platform-development',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.bninc.com/services/web-application-development',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.bninc.com/services/ai-integration-agents',
      lastModified: new Date(),
      priority: 0.9,
    },
    { url: 'https://www.bninc.com/portfolio', lastModified: new Date(), priority: 0.85 },
    { url: 'https://www.bninc.com/contact', lastModified: new Date(), priority: 0.8 },
  ]
}
