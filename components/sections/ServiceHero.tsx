import Link from 'next/link'

interface ServiceHeroProps {
  name: string
  description: string
  heroGlow: string
  index: number
}

export function ServiceHero({ name, description, heroGlow, index }: ServiceHeroProps) {
  return (
    <section className={`bg-teal-950 ${heroGlow} py-28 relative overflow-hidden pt-[calc(72px+7rem)]`}>
      <div className="absolute inset-0 bg-[image:radial-gradient(circle,rgba(168,212,224,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative max-w-[1280px] mx-auto px-8">
        <p className="font-mono text-xs text-teal-50/40 uppercase tracking-wide mb-6">
          HOME / SERVICES / {name.toUpperCase()}
        </p>

        <span className="font-mono text-xs text-teal-100/50 uppercase tracking-wide block mb-4">
          // service_0{index}
        </span>

        <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight tracking-tighter mb-6 max-w-[680px]">
          {name}
        </h1>
        <p className="font-body font-light text-lg text-teal-50/65 max-w-[580px] leading-relaxed mb-8">
          {description}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-teal-400 hover:bg-teal-700 text-white font-display font-bold px-6 py-3 rounded transition-colors"
        >
          Get a quote →
        </Link>
      </div>
    </section>
  )
}
