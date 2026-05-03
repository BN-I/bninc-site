export function LogoStrip() {
  return (
    <section className="bg-surface-light border-b border-teal-700/10 py-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        <p className="font-mono text-xs text-teal-700/50 uppercase tracking-wide text-center mb-8">
          // trusted by ambitious teams
        </p>
        <div className="flex gap-12 animate-[marquee_40s_linear_infinite] overflow-hidden">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-28 h-8 bg-teal-700/10 rounded shrink-0"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
