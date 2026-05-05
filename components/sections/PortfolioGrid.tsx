'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  portfolioApps,
  portfolioCategories,
  type PortfolioCategory,
} from '@/lib/portfolio'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function PortfolioGrid() {
  const [active, setActive] = useState<PortfolioCategory>('All')

  const filtered =
    active === 'All' ? portfolioApps : portfolioApps.filter((a) => a.category === active)

  const counts = Object.fromEntries(
    portfolioCategories.map((cat) => [
      cat,
      cat === 'All'
        ? portfolioApps.length
        : portfolioApps.filter((a) => a.category === cat).length,
    ])
  )

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-12 scrollbar-none">
        {portfolioCategories
          .filter((cat) => counts[cat] > 0)
          .map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-xs uppercase tracking-wide px-4 py-2 rounded border whitespace-nowrap transition-all duration-200 shrink-0 ${
                active === cat
                  ? 'bg-teal-400 border-teal-400 text-white'
                  : 'border-teal-50/20 text-teal-50/50 hover:border-teal-400/60 hover:text-teal-50'
              }`}
            >
              {cat}
              <span
                className={`ml-2 ${active === cat ? 'text-white/70' : 'text-teal-50/30'}`}
              >
                {counts[cat]}
              </span>
            </button>
          ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-teal-50/10 border border-teal-50/10"
        >
          {filtered.map((app, i) => (
            <motion.div
              key={app.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-teal-950 p-7 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-teal-400 transition-all duration-300" />

              {/* Icon + category */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded bg-teal-400/10 flex items-center justify-center shrink-0">
                  <app.CategoryIcon className="w-4 h-4 text-teal-400" />
                </div>
                <span className="font-mono text-xs text-teal-100/40 uppercase tracking-wide">
                  {app.category}
                </span>
              </div>

              {/* Name + tagline */}
              <h3 className="font-display font-bold text-[1.1rem] text-white leading-snug mb-1">
                {app.name}
              </h3>
              <p className="font-mono text-xs text-teal-400 mb-4">{app.tagline}</p>

              {/* Description */}
              <p className="font-body text-sm text-teal-50/60 leading-relaxed flex-1 mb-6">
                {app.description}
              </p>

              {/* Bottom row */}
              <div className="flex items-center justify-between pt-4 border-t border-teal-50/[0.08]">
                <div className="flex gap-1.5">
                  {app.platforms.includes('ios') && (
                    <span className="font-mono text-[10px] text-teal-50/40 border border-teal-50/10 rounded px-2 py-0.5 uppercase tracking-wide">
                      iOS
                    </span>
                  )}
                  {app.platforms.includes('android') && (
                    <span className="font-mono text-[10px] text-teal-50/40 border border-teal-50/10 rounded px-2 py-0.5 uppercase tracking-wide">
                      Android
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {app.storeLinks.ios && (
                    <a
                      href={app.storeLinks.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-teal-400 hover:text-teal-100 transition-colors uppercase tracking-wide"
                    >
                      App Store →
                    </a>
                  )}
                  {app.storeLinks.android && (
                    <a
                      href={app.storeLinks.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-teal-400 hover:text-teal-100 transition-colors uppercase tracking-wide"
                    >
                      Play Store →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
