import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { FeaturesGrid } from '@/components/sections/FeaturesGrid'
import { TechStack } from '@/components/sections/TechStack'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { RelatedServices } from '@/components/sections/RelatedServices'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/layout/JsonLd'
import { servicePages } from '@/lib/constants'
import { siteConfig } from '@/lib/seo'

const service = servicePages.find((s) => s.slug === 'cross-platform-development')!

export const metadata: Metadata = {
  title: 'Cross-Platform App Development | iOS, Android & Web | BNinc',
  description:
    'One codebase for mobile and web. BNinc delivers cross-platform apps with React Native — faster to market, lower cost, consistent UX.',
  alternates: { canonical: `${siteConfig.url}/services/cross-platform-development` },
  openGraph: {
    title: 'Cross-Platform App Development | iOS, Android & Web | BNinc',
    description:
      'One codebase for mobile and web. BNinc delivers cross-platform apps with React Native — faster to market, lower cost, consistent UX.',
    url: `${siteConfig.url}/services/cross-platform-development`,
  },
  twitter: {
    title: 'Cross-Platform App Development | iOS, Android & Web | BNinc',
    description:
      'One codebase for mobile and web. BNinc delivers cross-platform apps with React Native — faster to market, lower cost, consistent UX.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  provider: { '@type': 'Organization', name: 'BNinc', url: siteConfig.url },
  serviceType: 'Cross-Platform App Development',
  url: `${siteConfig.url}/services/cross-platform-development`,
  description: service.description,
}

export default function CrossPlatformDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ServiceHero
        name={service.name}
        description={service.description}
        heroGlow={service.heroGlow}
        index={service.index}
      />
      <FeaturesGrid
        features={service.features}
        heading="One codebase. Every platform."
        eyebrow="// what's included"
      />
      <TechStack
        technologies={service.techStack}
        heading="The cross-platform stack that actually works."
      />
      <FaqAccordion faqs={service.faqs} heading="Common questions about cross-platform." />
      <RelatedServices currentSlug={service.slug} />
      <CtaBand
        heading="Ship to iOS, Android, and web at once."
        subtext="Tell us about your project. We'll respond within one business day with honest thoughts and a clear next step."
        buttonLabel="Start the conversation →"
      />
    </>
  )
}
