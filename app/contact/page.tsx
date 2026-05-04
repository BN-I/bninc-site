import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { JsonLd } from "@/components/layout/JsonLd";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact BNinc | Start Your Software Project",
  description:
    "Get in touch with BNinc. We respond within one business day. Free 30-minute discovery call available.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact BNinc | Start Your Software Project",
    description:
      "Get in touch with BNinc. We respond within one business day. Free 30-minute discovery call available.",
    url: `${siteConfig.url}/contact`,
  },
  twitter: {
    title: "Contact BNinc | Start Your Software Project",
    description:
      "Get in touch with BNinc. We respond within one business day. Free 30-minute discovery call available.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact BNinc",
  url: `${siteConfig.url}/contact`,
  description: "Get in touch with BNinc to start your software project.",
};

const contactInfo = [
  { Icon: Mail, label: "// email", value: "support@bitnetinc.com" },
  { Icon: Clock, label: "// response time", value: "Within one business day" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />

      <section className="bg-teal-950 py-28 pt-[calc(72px+7rem)]">
        <div className="max-w-[1280px] mx-auto px-8">
          <span className="font-mono text-xs text-teal-50/40 uppercase tracking-wide block mb-4">
            // get in touch
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white tracking-tighter leading-none mb-4">
            Let's build something great.
          </h1>
          <p className="font-body font-light text-lg text-teal-50/65 max-w-[520px] leading-relaxed">
            Tell us about your project. We'll respond within one business day
            with honest thoughts and a clear next step.
          </p>
        </div>
      </section>

      <section className="bg-surface-light py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16">
            <div className="lg:col-start-1 lg:row-start-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center font-display font-extrabold text-white text-lg shrink-0">
                  AC
                </div>
                <div>
                  <p className="font-display font-bold text-teal-950">
                    Aren Costanza
                  </p>
                  <span className="font-mono text-xs text-teal-700/60 uppercase tracking-wide">
                    Engineering Lead
                  </span>
                </div>
              </div>

              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4 items-start mb-5">
                  <div className="w-9 h-9 rounded bg-teal-400/10 flex items-center justify-center shrink-0">
                    <item.Icon className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-teal-700/50 uppercase tracking-wide block mb-0.5">
                      {item.label}
                    </span>
                    <p className="font-body text-sm text-teal-700">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="bg-teal-50 border border-teal-700/10 rounded-xl p-6 mt-8">
                <h4 className="font-display font-bold text-teal-950 mb-2">
                  Not ready to commit?
                </h4>
                <p className="font-body text-sm text-teal-700 leading-relaxed mb-4">
                  Book a free 30-minute discovery call. No sales pressure — just
                  honest advice.
                </p>
                <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-display font-bold text-sm px-5 py-2 rounded transition-all duration-200 cursor-pointer">
                  Book a call →
                </button>
              </div>
            </div>

            <div className="lg:col-start-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
