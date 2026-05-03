'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/lib/constants'

const staggerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function ProcessSteps() {
  return (
    <section id="process" className="bg-teal-950 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:linear-gradient(rgba(168,212,224,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(168,212,224,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-teal-100/50 uppercase tracking-wide block mb-4">
            // how we work
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-white tracking-tighter">
            From idea to launch in four phases.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-teal-50/15 z-0" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative z-10 text-center"
            >
              <span className="font-mono text-xs text-teal-50/30 uppercase tracking-wide block mb-3">
                STEP_0{i + 1}
              </span>

              <div className="w-14 h-14 rounded-full bg-teal-400 flex items-center justify-center font-display font-extrabold text-lg text-white mx-auto mb-5">
                {i + 1}
              </div>

              <h4 className="font-display font-bold text-base text-white mb-2">{step.title}</h4>
              <p className="font-body text-sm text-teal-50/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
