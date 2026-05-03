interface TechStackProps {
  technologies: string[]
  heading?: string
}

export function TechStack({
  technologies,
  heading = 'Built with the right tools.',
}: TechStackProps) {
  return (
    <section className="bg-teal-950 py-24 relative">
      <div className="absolute inset-0 bg-[image:radial-gradient(circle,rgba(168,212,224,0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-[560px] mx-auto mb-14">
          <span className="font-mono text-xs text-teal-100/50 uppercase tracking-wide block mb-4">
            // tech stack
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-white tracking-tighter">
            {heading}
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-sm font-medium text-teal-50 bg-teal-50/[0.05] border border-teal-50/[0.15] px-4 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
