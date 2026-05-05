'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Mic, Calendar, Mail, Globe, BarChart2, Users } from 'lucide-react'

const capabilities = [
  { Icon: Mic, text: 'Inbound & outbound call handling — picks up in under 0.5 seconds' },
  { Icon: Calendar, text: 'Live calendar sync with Google Calendar, Calendly & Outlook' },
  { Icon: Mail, text: 'Smart email triage and automated responses' },
  { Icon: Globe, text: '24/7 multilingual support across 30+ languages' },
  { Icon: BarChart2, text: 'Call transcripts, sentiment analysis & ROI dashboards' },
  { Icon: Users, text: 'Caller recognition and live call takeover via dashboard' },
]

const stats = [
  { value: '312%', label: 'more consultations booked' },
  { value: '<0.5s', label: 'average response time' },
  { value: '92%', label: 'tickets resolved autonomously' },
  { value: '30+', label: 'languages supported' },
]

export function TiredusShowcase() {
  return (
    <section className="bg-teal-950 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:radial-gradient(ellipse_55%_60%_at_20%_50%,rgba(74,143,163,0.18)_0%,transparent_65%)]" />

      <div className="relative max-w-[1280px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-teal-100/50 uppercase tracking-wide">
            // our product
          </span>
          <span className="font-mono text-[10px] text-teal-400 border border-teal-400/40 rounded-full px-2.5 py-0.5 uppercase tracking-wide">
            Live
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-16 items-start">
          {/* Left — identity + stats + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tiredus-logo.png" alt="Tiredus" className="h-12 w-auto mb-8" />
            <p className="font-mono text-sm text-teal-400 mb-6">
              The voice your business deserves.
            </p>
            <p className="font-body text-base text-teal-50/65 leading-relaxed mb-10 max-w-[420px]">
              An AI voice agent platform we built from the ground up — real conversations,
              bookings, and revenue handled around the clock, in under half a second per
              response, without a single hire.
            </p>

            <div className="grid grid-cols-2 gap-px bg-teal-50/10 border border-teal-50/10 mb-10">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-teal-950 p-5">
                  <p className="font-display font-extrabold text-2xl text-white tracking-tight">
                    {value}
                  </p>
                  <p className="font-mono text-[11px] text-teal-50/40 uppercase tracking-wide mt-1.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://tiredus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-700 text-white font-display font-bold text-sm px-6 py-3 rounded transition-colors duration-200"
            >
              Visit tiredus.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right — capabilities list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="border border-teal-50/10"
          >
            <div className="px-6 py-4 border-b border-teal-50/10">
              <span className="font-mono text-xs text-teal-100/40 uppercase tracking-wide">
                // capabilities
              </span>
            </div>
            {capabilities.map(({ Icon, text }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 px-6 py-5 border-b border-teal-50/[0.06] last:border-0"
              >
                <div className="w-8 h-8 rounded bg-teal-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-teal-400" />
                </div>
                <p className="font-body text-sm text-teal-50/65 leading-relaxed">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
