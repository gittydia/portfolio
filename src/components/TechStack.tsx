import { techStack } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TechStack() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-tertiary">Technologies</span>
      </div>
      <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">Tech Stack</h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-secondary">
        The technologies and tools I work with to build modern web applications
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {techStack.map((tech) => (
          <a
            key={tech.name}
            href={tech.href}
            target="_blank"
            rel="noreferrer"
            className={`rainbow-border group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:-translate-y-0.5 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-tertiary p-2 transition group-hover:bg-accent-soft">
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/666666`}
                alt={tech.name}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-sm font-medium text-fg">{tech.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
