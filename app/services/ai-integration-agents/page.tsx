import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { FeaturesGrid } from '@/components/sections/FeaturesGrid'
import { TechStack } from '@/components/sections/TechStack'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { RelatedServices } from '@/components/sections/RelatedServices'
import { CtaBand } from '@/components/sections/CtaBand'
import { TiredusShowcase } from '@/components/sections/TiredusShowcase'
import { JsonLd } from '@/components/layout/JsonLd'
import { servicePages } from '@/lib/constants'
import { siteConfig } from '@/lib/seo'

const service = servicePages.find((s) => s.slug === 'ai-integration-agents')!

export const metadata: Metadata = {
  title: 'AI Integration & AI Agent Development for Business | BNinc',
  description:
    'BNinc embeds AI into products and workflows. LLM integration, RAG, autonomous AI agents, conversational AI. Practical AI, measurable results.',
  alternates: { canonical: `${siteConfig.url}/services/ai-integration-agents` },
  openGraph: {
    title: 'AI Integration & AI Agent Development for Business | BNinc',
    description:
      'BNinc embeds AI into products and workflows. LLM integration, RAG, autonomous AI agents, conversational AI. Practical AI, measurable results.',
    url: `${siteConfig.url}/services/ai-integration-agents`,
  },
  twitter: {
    title: 'AI Integration & AI Agent Development for Business | BNinc',
    description:
      'BNinc embeds AI into products and workflows. LLM integration, RAG, autonomous AI agents, conversational AI. Practical AI, measurable results.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  provider: { '@type': 'Organization', name: 'BNinc', url: siteConfig.url },
  serviceType: 'AI Integration & Agent Development',
  url: `${siteConfig.url}/services/ai-integration-agents`,
  description: service.description,
}

export default function AiIntegrationAgentsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ServiceHero
        name={service.name}
        description={service.description}
        heroGlow={service.heroGlow}
        index={service.index}
      />
      <TiredusShowcase />
      <FeaturesGrid
        features={service.features}
        heading="Practical AI that delivers measurable results."
        eyebrow="// what's included"
      />
      <TechStack
        technologies={service.techStack}
        heading="The AI stack for production-grade systems."
      />
      <FaqAccordion faqs={service.faqs} heading="Common questions about AI integration." />
      <RelatedServices currentSlug={service.slug} />
      <CtaBand
        heading="Ready to put AI to work in your business?"
        subtext="Tell us about your workflow or product. We'll respond within one business day with an honest assessment."
        buttonLabel="Start the conversation →"
      />
    </>
  )
}
