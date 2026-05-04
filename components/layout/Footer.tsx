import Link from "next/link";
import { services } from "@/lib/constants";

const companyLinks = [
  { label: "About", href: "/#why" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-teal-950 border-t border-teal-50/[0.08]">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-teal-50/[0.08]">
          <div>
            <span className="font-display font-extrabold text-xl text-white block mb-3">
              BN<span className="text-teal-400">inc</span>
            </span>
            <p className="font-body text-sm text-teal-50/55 leading-relaxed max-w-[240px]">
              A focused software engineering firm. Mobile apps, cross-platform,
              web, and AI.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs font-medium text-teal-50/40 uppercase tracking-wide mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-body text-sm text-teal-50/65 hover:text-teal-50 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-medium text-teal-50/40 uppercase tracking-wide mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-teal-50/65 hover:text-teal-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-medium text-teal-50/40 uppercase tracking-wide mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:hello@bitnetinc.com"
                  className="font-body text-sm text-teal-50/65 hover:text-teal-50 transition-colors"
                >
                  hello@bitnetinc.com
                </a>
              </li>
              <li>
                <p className="font-body text-sm text-teal-50/65">
                  Response within 1 business day
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8">
          <p className="font-mono text-xs text-teal-50/30">
            © 2026 BNinc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-teal-50/30 hover:text-teal-50/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
