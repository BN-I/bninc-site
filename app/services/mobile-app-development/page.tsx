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

const service = servicePages.find((s) => s.slug === 'mobile-app-development')!

export const metadata: Metadata = {
  title: 'Mobile App Development | React Native iOS & Android | BNinc',
  description:
    'BNinc builds high-performance iOS and Android apps with React Native. Native UX, single codebase, App Store & Play Store submission included.',
  alternates: { canonical: `${siteConfig.url}/services/mobile-app-development` },
  openGraph: {
    title: 'Mobile App Development | React Native iOS & Android | BNinc',
    description:
      'BNinc builds high-performance iOS and Android apps with React Native. Native UX, single codebase, App Store & Play Store submission included.',
    url: `${siteConfig.url}/services/mobile-app-development`,
  },
  twitter: {
    title: 'Mobile App Development | React Native iOS & Android | BNinc',
    description:
      'BNinc builds high-performance iOS and Android apps with React Native. Native UX, single codebase, App Store & Play Store submission included.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  provider: { '@type': 'Organization', name: 'BNinc', url: siteConfig.url },
  serviceType: 'Mobile App Development',
  url: `${siteConfig.url}/services/mobile-app-development`,
  description: service.description,
}

export default function MobileAppDevelopmentPage() {
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
        heading="Everything you need to ship a great mobile app."
        eyebrow="// what's included"
      />
      <TechStack
        technologies={service.techStack}
        heading="Built with battle-tested mobile tools."
      />
      <FaqAccordion faqs={service.faqs} heading="Common questions about mobile development." />
      <RelatedServices currentSlug={service.slug} />
      <CtaBand
        heading="Ready to ship your mobile app?"
        subtext="Tell us about your project. We'll respond within one business day with honest thoughts and a clear next step."
        buttonLabel="Start the conversation →"
      />
    </>
  )
}
