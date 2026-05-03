'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    label: '// latest delivery',
    title: 'React Native App',
    sub: 'iOS + Android · 6 weeks',
    className: 'bg-teal-50/[0.06] border border-teal-50/15 rotate-[-1.5deg]',
  },
  {
    label: '// shipped last month',
    title: 'AI Agent Platform',
    sub: 'Next.js + LangChain · 8 weeks',
    className: 'bg-teal-400/[0.12] border border-teal-400/30 rotate-[1deg]',
  },
  {
    label: '// in progress',
    title: 'Cross-Platform App',
    sub: 'Expo · iOS & Android & Web',
    className: 'bg-teal-400 rotate-[-0.5deg]',
  },
]

export function ProofStack() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto h-[320px] lg:h-[380px]">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className={`absolute inset-0 rounded-xl p-6 ${card.className}`}
          style={{ top: `${index * 24}px`, zIndex: index }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [0, index % 2 === 0 ? -4 : 4, 0] }}
          transition={{
            opacity: { delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            y: {
              delay: index * 1.4,
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <span className="font-mono text-xs text-teal-100/60 uppercase tracking-wide block mb-2">
            {card.label}
          </span>
          <p className="font-display font-bold text-white text-base">{card.title}</p>
          <p className="font-body text-sm text-teal-50/50 mt-1">{card.sub}</p>
        </motion.div>
      ))}
    </div>
  )
}
