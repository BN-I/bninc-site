import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhySection } from "@/components/sections/WhySection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/layout/JsonLd";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "BNinc | Mobile App, Web & AI Development Company",
  description:
    "BNinc builds mobile apps, cross-platform solutions, web applications, and AI-powered products. React Native, Next.js, AI agents — engineered for scale.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "BNinc | Mobile App, Web & AI Development Company",
    description:
      "BNinc builds mobile apps, cross-platform solutions, web applications, and AI-powered products. React Native, Next.js, AI agents — engineered for scale.",
    url: siteConfig.url,
  },
  twitter: {
    title: "BNinc | Mobile App, Web & AI Development Company",
    description:
      "BNinc builds mobile apps, cross-platform solutions, web applications, and AI-powered products.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BNinc",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  email: "support@bitnetinc.com",
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Hero />
      <MarqueeStrip />
      <LogoStrip />
      <ServicesGrid />
      <StatsBar />
      <WhySection />
      <ProcessSteps />
      <CtaBand />
    </>
  );
}
