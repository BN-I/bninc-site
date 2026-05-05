'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, X, Menu } from 'lucide-react'
import { useScrollNav } from '@/lib/hooks/useScrollNav'
import { services } from '@/lib/constants'

export function Navbar() {
  const scrolled = useScrollNav()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled ? 'bg-teal-950/90 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-8 w-full flex items-center justify-between">
          <Link href="/" aria-label="BNinc home" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.svg" alt="" className="h-8 w-auto" />
            <span className="font-display font-extrabold text-xl">
              <span className="text-white">BN</span>
              <span className="text-teal-400">inc</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 font-display font-bold text-sm text-teal-50/80 hover:text-white transition-colors"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Services
                <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-teal-950 border border-teal-50/10 rounded-lg shadow-2xl p-2 min-w-[320px]"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-start gap-3 p-3 rounded-md hover:bg-teal-50/5 transition-colors group"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <service.Icon className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-display font-bold text-sm text-white">{service.name}</p>
                          <p className="font-body text-xs text-teal-50/60 mt-0.5 leading-relaxed">
                            {service.description.slice(0, 72)}…
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/portfolio"
              className="font-display font-bold text-sm text-teal-50/80 hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/#why"
              className="font-display font-bold text-sm text-teal-50/80 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-display font-bold text-sm text-teal-50/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-teal-400 hover:bg-teal-700 text-white font-display font-bold text-sm px-5 py-2 rounded transition-colors"
            >
              Get in touch →
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-teal-950 z-50 flex flex-col px-8 py-8"
          >
            <div className="flex items-center justify-between mb-12">
              <Link href="/" onClick={() => setMobileOpen(false)} aria-label="BNinc home" className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-white.svg" alt="" className="h-8 w-auto" />
                <span className="font-display font-extrabold text-xl">
                  <span className="text-white">BN</span>
                  <span className="text-teal-400">inc</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-8 flex-1">
              <div>
                <p className="font-mono text-xs text-teal-50/40 uppercase tracking-wide mb-4">
                  // services
                </p>
                {services.map((service, i) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block font-display font-extrabold text-2xl text-white mb-3 hover:text-teal-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { href: '/portfolio', label: 'Portfolio' },
                  { href: '/#why', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (services.length + i) * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block font-display font-extrabold text-2xl text-teal-50/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full bg-teal-400 hover:bg-teal-700 text-white font-display font-bold py-4 rounded text-center transition-colors"
            >
              Start a project →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
