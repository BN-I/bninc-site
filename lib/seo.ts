import type { Metadata } from 'next'

export const siteConfig = {
  name: 'BNinc',
  url: 'https://www.bitnetinc.com',
  description:
    'BNinc builds mobile apps, cross-platform solutions, web applications, and AI-powered products.',
  ogImage: 'https://www.bitnetinc.com/og.png',
}

export function buildMetadata(overrides: Partial<Metadata> & { canonical?: string }): Metadata {
  const { canonical, ...rest } = overrides
  const title = rest.title ?? siteConfig.name
  const description = (rest.description as string) ?? siteConfig.description
  const url = canonical ?? siteConfig.url

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: title as string,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      images: [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title as string,
      description,
    },
    ...rest,
  }
}
