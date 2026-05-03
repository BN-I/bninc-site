'use client'

import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, duration = 1.5) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        let start: number | null = null
        const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

        const tick = (ts: number) => {
          if (!start) start = ts
          const elapsed = (ts - start) / (duration * 1000)
          setCount(Math.min(Math.round(easeOutQuart(elapsed) * target), target))
          if (elapsed < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
