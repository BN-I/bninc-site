'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

interface Faq {
  id: string
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: Faq[]
  heading?: string
}

export function FaqAccordion({ faqs, heading = 'Common questions.' }: FaqAccordionProps) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="bg-surface-light py-24 border-b border-teal-700/10">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-[560px] mx-auto mb-14">
          <span className="font-mono text-xs text-teal-700/50 uppercase tracking-wide block mb-4">
            // faq
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-teal-950 tracking-tighter">
            {heading}
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto divide-y divide-teal-700/[0.10]">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between py-5 text-left group hover:bg-teal-400/[0.03] px-2 -mx-2 rounded transition-colors"
                aria-expanded={open === faq.id}
              >
                <span className="font-display font-bold text-base text-teal-950">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: open === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 ml-4"
                >
                  <Plus className="w-5 h-5 text-teal-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === faq.id && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="font-body text-sm text-teal-700 leading-relaxed pb-5 px-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
