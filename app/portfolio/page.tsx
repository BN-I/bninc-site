import type { Metadata } from 'next'
import { PortfolioGrid } from '@/components/sections/PortfolioGrid'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/layout/JsonLd'
import { siteConfig } from '@/lib/seo'
import { portfolioApps } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: "Portfolio | Apps We've Shipped — BNinc",
  description:
    'Browse 12 live mobile apps shipped by BNinc across iOS and Android — travel, real estate, finance, fitness, and more.',
  alternates: { canonical: `${siteConfig.url}/portfolio` },
  openGraph: {
    title: "Portfolio | Apps We've Shipped — BNinc",
    description:
      'Browse 12 live mobile apps shipped by BNinc across iOS and Android — travel, real estate, finance, fitness, and more.',
    url: `${siteConfig.url}/portfolio`,
  },
  twitter: {
    title: "Portfolio | Apps We've Shipped — BNinc",
    description:
      'Browse 12 live mobile apps shipped by BNinc across iOS and Android — travel, real estate, finance, fitness, and more.',
  },
}

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'BNinc Portfolio',
  url: `${siteConfig.url}/portfolio`,
  description: 'Live mobile apps shipped by BNinc across iOS and Android.',
}

const iosCount = portfolioApps.filter((a) => a.platforms.includes('ios')).length
const androidCount = portfolioApps.filter((a) => a.platforms.includes('android')).length

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioSchema} />

      {/* Hero */}
      <section className="bg-teal-950 pt-[calc(72px+5rem)] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:radial-gradient(ellipse_60%_55%_at_70%_40%,rgba(74,143,163,0.18)_0%,transparent_65%)]" />
        <div className="relative max-w-[1280px] mx-auto px-8">
          <span className="font-mono text-xs text-teal-50/40 uppercase tracking-wide block mb-4">
            // our work
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white tracking-tighter leading-none mb-5">
            Apps we've shipped.
          </h1>
          <p className="font-body font-light text-lg text-teal-50/65 max-w-[520px] leading-relaxed mb-12">
            Real products in the hands of real users. Every app below is live and has gone
            through our full build, test, and submission process.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: portfolioApps.length, label: 'apps shipped' },
              { value: iosCount, label: 'on the App Store' },
              { value: androidCount, label: 'on Google Play' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-extrabold text-4xl text-white tracking-tighter">
                  {value}
                </p>
                <p className="font-mono text-xs text-teal-50/40 uppercase tracking-wide mt-1">
                  // {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-teal-950 py-16 pb-28">
        <div className="max-w-[1280px] mx-auto px-8">
          <PortfolioGrid />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
