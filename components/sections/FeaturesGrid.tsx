'use client'

import { motion } from 'framer-motion'
import {
  Smartphone, Layers, ArrowRight, Code, TestTube, BookOpen,
  Zap, GitBranch, Shield, Globe, Database, Cloud, Lock, Bot, Cpu,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Smartphone, Layers, ArrowRight, Code, TestTube, BookOpen,
  Zap, GitBranch, Shield, Globe, Database, Cloud, Lock, Bot, Cpu,
}

interface Feature {
  iconName: string
  title: string
  description: string
}

interface FeaturesGridProps {
  features: Feature[]
  heading: string
  eyebrow?: string
}

const staggerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function FeaturesGrid({ features, heading, eyebrow = "// what's included" }: FeaturesGridProps) {
  return (
    <section className="bg-surface-light py-24 border-b border-teal-700/10">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-[560px] mx-auto mb-14">
          <span className="font-mono text-xs text-teal-700/50 uppercase tracking-wide block mb-4">
            {eyebrow}
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-teal-950 leading-tight tracking-tighter">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName] ?? Code
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={staggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-surface-card border border-teal-700/10 rounded-xl p-8 group transition-all duration-200 hover:border-teal-400/50"
              >
                <Icon className="w-6 h-6 text-teal-400 mb-4" />
                <h3 className="font-display font-bold text-[1.1rem] text-teal-950 mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-teal-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
