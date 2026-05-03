const items =
  'REACT NATIVE · NEXT.JS · AI AGENTS · CROSS-PLATFORM · TYPESCRIPT · NODE.JS · LLMs · EXPO · POSTGRESQL · AWS · '

export function MarqueeStrip() {
  return (
    <div className="bg-teal-700 py-3 overflow-hidden border-y border-teal-50/10">
      <div className="flex animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
        {[0, 1].map((i) => (
          <span key={i} className="font-mono text-xs text-teal-50/80 uppercase tracking-wide mx-6">
            {items}
          </span>
        ))}
      </div>
    </div>
  )
}
