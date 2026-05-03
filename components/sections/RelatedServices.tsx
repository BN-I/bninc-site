import Link from 'next/link'
import { services } from '@/lib/constants'

interface RelatedServicesProps {
  currentSlug: string
}

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related = services.filter((s) => s.slug !== currentSlug)

  return (
    <section className="bg-teal-950 py-16 border-t border-teal-50/10">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="font-mono text-xs text-teal-50/40 uppercase tracking-wide block mb-8">
          // also from bninc
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-teal-50/[0.04] border border-teal-50/10 rounded-lg px-6 py-5 group hover:border-teal-400/40 hover:bg-teal-50/[0.06] transition-all duration-200"
            >
              <service.Icon className="w-5 h-5 text-teal-400 mb-3" />
              <h4 className="font-display font-bold text-sm text-white mb-1">{service.name}</h4>
              <span className="font-mono text-xs text-teal-400/70 uppercase tracking-wide group-hover:text-teal-400 transition-colors">
                // learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
