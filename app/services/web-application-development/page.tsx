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

const service = servicePages.find((s) => s.slug === 'web-application-development')!

export const metadata: Metadata = {
  title: 'Web Application Development | Next.js, React, Node.js | BNinc',
  description:
    'BNinc builds scalable web applications — customer platforms to internal tools. Full-stack: Next.js, React, Node.js, PostgreSQL, AWS.',
  alternates: { canonical: `${siteConfig.url}/services/web-application-development` },
  openGraph: {
    title: 'Web Application Development | Next.js, React, Node.js | BNinc',
    description:
      'BNinc builds scalable web applications — customer platforms to internal tools. Full-stack: Next.js, React, Node.js, PostgreSQL, AWS.',
    url: `${siteConfig.url}/services/web-application-development`,
  },
  twitter: {
    title: 'Web Application Development | Next.js, React, Node.js | BNinc',
    description:
      'BNinc builds scalable web applications — customer platforms to internal tools. Full-stack: Next.js, React, Node.js, PostgreSQL, AWS.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  provider: { '@type': 'Organization', name: 'BNinc', url: siteConfig.url },
  serviceType: 'Web Application Development',
  url: `${siteConfig.url}/services/web-application-development`,
  description: service.description,
}

export default function WebApplicationDevelopmentPage() {
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
        heading="Full-stack engineering, front to back."
        eyebrow="// what's included"
      />
      <TechStack
        technologies={service.techStack}
        heading="The modern web stack, done right."
      />
      <FaqAccordion faqs={service.faqs} heading="Common questions about web development." />
      <RelatedServices currentSlug={service.slug} />
      <CtaBand
        heading="Build the web application your business deserves."
        subtext="Tell us about your project. We'll respond within one business day with honest thoughts and a clear next step."
        buttonLabel="Start the conversation →"
      />
    </>
  )
}
