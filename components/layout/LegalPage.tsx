export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-teal-950 py-20 pt-[calc(72px+5rem)]">
        <div className="max-w-[1280px] mx-auto px-8">
          <span className="font-mono text-xs text-teal-50/40 uppercase tracking-wide block mb-4">
            {eyebrow}
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] text-white tracking-tighter leading-none mb-4">
            {title}
          </h1>
          <p className="font-mono text-xs text-teal-50/50 uppercase tracking-wide">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-surface-light py-20">
        <div className="max-w-[1280px] mx-auto px-8">
          <article className="max-w-[760px] font-body text-teal-700 leading-relaxed [&_h2]:font-display [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:text-teal-950 [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h2:first-child]:mt-0 [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-lg [&_h3]:text-teal-950 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-teal-400 [&_a]:underline [&_a:hover]:text-teal-950 [&_strong]:text-teal-950">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
