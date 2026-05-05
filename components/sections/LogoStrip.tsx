const logos = [
  // Clients & products
  { src: "/logos/wanderlog.png", alt: "Wanderlog", h: "h-7" },
  { src: "/logos/selldo.png", alt: "Sell.Do", h: "h-6" },
  { src: "/logos/tiredus.png", alt: "Tiredus", h: "h-7" },
  { src: "/logos/propy.svg", alt: "Propy", h: "h-7" },
  { src: "/logos/myestatelife.svg", alt: "My Estate Life", h: "h-6" },
  // LLM / AI
  { src: "/logos/openai-wordmark.svg", alt: "OpenAI", h: "h-6" },
  { src: "/logos/anthropic.svg", alt: "Anthropic", h: "h-6" },
  { src: "/logos/gemini.svg", alt: "Gemini", h: "h-6" },
  { src: "/logos/mistral.svg", alt: "Mistral", h: "h-9" },
  { src: "/logos/cohere.svg", alt: "Cohere", h: "h-5" },
];

export function LogoStrip() {
  return (
    <section className="bg-surface-light py-12 border-teal-700/10 border-b overflow-hidden">
      <div className="mx-auto px-8 max-w-[1280px]">
        <p className="mb-10 font-mono text-teal-700/50 text-xs text-center uppercase tracking-wide">
          {"// trusted by ambitious teams"}
        </p>
      </div>

      {/* Full-width marquee — no padding so it bleeds edge-to-edge */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Duplicate the list so the loop is seamless */}
        {[0, 1].map((set) => (
          <ul
            key={set}
            aria-hidden={set === 1}
            className="flex items-center gap-16 animate-[marquee_32s_linear_infinite] shrink-0"
          >
            {logos.map(({ src, alt, h }) => (
              <li key={alt} className="px-4 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className={`${h} w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
