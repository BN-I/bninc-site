import Link from 'next/link'

interface CtaBandProps {
  heading?: string
  subtext?: string
  buttonLabel?: string
  buttonHref?: string
}

export function CtaBand({
  heading = 'Ready to build something great?',
  subtext = "Tell us what you're building. We'll tell you how we'd approach it.",
  buttonLabel = 'Start the conversation →',
  buttonHref = '/contact',
}: CtaBandProps) {
  return (
    <section className="bg-teal-700 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(168,212,224,0.04)_0px,rgba(168,212,224,0.04)_1px,transparent_1px,transparent_14px)]" />

      <div className="relative max-w-[1280px] mx-auto px-8 text-center">
        <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.2rem)] text-white tracking-tighter mb-4">
          {heading}
        </h2>
        <p className="font-body font-light text-xl text-teal-50/70 mb-10 max-w-[480px] mx-auto leading-relaxed">
          {subtext}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-teal-50 hover:bg-white text-teal-950 font-display font-bold px-8 py-4 rounded transition-all duration-200"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
