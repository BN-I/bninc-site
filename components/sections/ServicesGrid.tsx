'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/lib/constants'

const staggerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function ServicesGrid() {
  return (
    <section id="services" className="bg-teal-950 py-24 relative">
      <div className="absolute inset-0 bg-[image:radial-gradient(circle,rgba(168,212,224,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-[560px] mx-auto mb-14">
          <span className="font-mono text-xs text-teal-100/50 uppercase tracking-wide block mb-4">
            // what we do
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tighter text-white">
            Four specialisms. One focused team.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-teal-50/10 border border-teal-50/10">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              custom={i}
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-teal-950 p-8 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-teal-400 transition-all duration-300" />

              <div className="w-10 h-10 rounded bg-teal-400/10 flex items-center justify-center mb-5">
                <service.Icon className="w-5 h-5 text-teal-400" />
              </div>

              <h3 className="font-display font-bold text-[1.15rem] text-white mb-3">
                {service.name}
              </h3>
              <p className="font-body text-sm text-teal-50/60 leading-relaxed mb-5">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="font-mono text-xs text-teal-400 uppercase tracking-wide group-hover:text-teal-100 transition-colors"
              >
                // explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
