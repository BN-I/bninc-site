'use client'

import { useCountUp } from '@/lib/hooks/useCountUp'
import { stats } from '@/lib/constants'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)

  return (
    <div ref={ref} className="py-12 px-8 text-center">
      <div className="font-display font-extrabold text-5xl text-teal-50 leading-none">
        {count}
        <span className="text-teal-400">{suffix}</span>
      </div>
      <p className="font-mono text-xs text-teal-50/45 uppercase tracking-wide mt-3">{label}</p>
    </div>
  )
}

export function StatsBar() {
  return (
    <section className="bg-teal-950 border-y border-teal-50/10">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-teal-50/10">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
