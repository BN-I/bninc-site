'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { whyItems } from '@/lib/constants'

const staggerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function WhySection() {
  return (
    <section id="why" className="bg-surface-light py-24 border-b border-teal-700/10">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-teal-700/50 uppercase tracking-wide block mb-4">
              // why bninc
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-teal-950 tracking-tighter leading-tight mb-5">
              Built different. Delivered consistently.
            </h2>
            <p className="font-body font-light text-teal-700 leading-relaxed mb-8 max-w-[400px]">
              A focused engineering team — not a bloated agency. Faster decisions, cleaner
              code, and a partner who understands your product.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal-400 hover:bg-teal-700 text-white font-display font-bold px-6 py-3 rounded transition-all duration-200"
            >
              Work with us →
            </Link>
          </div>

          <ul className="flex flex-col gap-6">
            {whyItems.map((item, i) => (
              <motion.li
                key={item.title}
                custom={i}
                variants={staggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex gap-4 items-start"
              >
                <div className="w-9 h-9 rounded bg-teal-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.Icon className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-teal-950 mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-teal-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
