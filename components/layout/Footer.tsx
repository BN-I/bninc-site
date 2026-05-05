import Link from "next/link";
import { services } from "@/lib/constants";

const companyLinks = [
  { label: "Portfolio", href: "/portfolio" },
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
    <footer className="bg-teal-950 border-teal-50/[0.08] border-t">
      <div className="mx-auto px-8 py-16 max-w-[1280px]">
        <div className="gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] pb-12 border-teal-50/[0.08] border-b">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg"
              alt="BNinc"
              className="mb-3 w-auto h-7"
            />
            <p className="max-w-[240px] font-body text-teal-50/55 text-sm leading-relaxed">
              A focused software engineering firm. Mobile apps, cross-platform,
              web, and AI.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono font-medium text-teal-50/40 text-xs uppercase tracking-wide">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-body text-teal-50/65 hover:text-teal-50 text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono font-medium text-teal-50/40 text-xs uppercase tracking-wide">
              Company
            </p>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-teal-50/65 hover:text-teal-50 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono font-medium text-teal-50/40 text-xs uppercase tracking-wide">
              Contact
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:support@bitnetinc.com"
                  className="font-body text-teal-50/65 hover:text-teal-50 text-sm transition-colors"
                >
                  support@bitnetinc.com
                </a>
              </li>
              <li>
                <p className="font-body text-teal-50/65 text-sm">
                  Response within 1 business day
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-4 pt-8">
          <p className="font-mono text-teal-50/30 text-xs">
            © 2026 BNinc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-teal-50/30 hover:text-teal-50/60 text-xs transition-colors"
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
