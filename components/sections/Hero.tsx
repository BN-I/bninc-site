'use client'

import Link from 'next/link'
import { ProofStack } from '@/components/ui/ProofStack'

export function Hero() {
  return (
    <section className="bg-teal-950 min-h-screen flex items-center relative overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-[image:linear-gradient(rgba(168,212,224,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(168,212,224,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute inset-0 bg-[image:radial-gradient(circle,rgba(168,212,224,0.10)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_72%_48%,rgba(74,143,163,0.18)_0%,transparent_65%)]" />

      <div className="relative max-w-[1280px] mx-auto px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-teal-400" />
              <span className="font-mono text-xs text-teal-100 tracking-wide uppercase">
                // software engineering
              </span>
            </div>

            <h1 className="font-display font-extrabold text-[clamp(3.2rem,7vw,6.5rem)] leading-none tracking-tightest text-white mb-6">
              We build digital
              <br />
              <span className="text-teal-400">products that</span>
              <br />
              perform.
            </h1>

            <p className="font-body font-light text-lg text-teal-50/70 max-w-[460px] leading-relaxed mb-8">
              Mobile apps, cross-platform solutions, web applications, and AI-powered
              tools — engineered for scale and built to last.
            </p>

            <div className="flex gap-4 flex-wrap mb-10">
              <Link
                href="/contact"
                className="bg-teal-400 hover:bg-teal-700 text-white font-display font-bold px-6 py-3 rounded transition-all duration-200 hover:scale-[1.02]"
              >
                Start a project →
              </Link>
              <Link
                href="/#services"
                className="border border-teal-400/50 hover:border-teal-400 text-teal-100 hover:text-white font-display font-bold px-6 py-3 rounded transition-all duration-200"
              >
                Our services
              </Link>
            </div>

            <div className="flex gap-6 flex-wrap">
              <span className="font-mono text-xs text-teal-50/40 uppercase tracking-wide">
                // 50+ projects
              </span>
              <span className="font-mono text-xs text-teal-50/40 uppercase tracking-wide">
                // 4+ years
              </span>
              <span className="font-mono text-xs text-teal-50/40 uppercase tracking-wide">
                // 98% satisfaction
              </span>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <ProofStack />
          </div>
        </div>
      </div>
    </section>
  )
}
