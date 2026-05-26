import { techStack, agileSkills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';
import { Lightbulb } from 'lucide-react';

const categories = ['Languages', 'Frameworks & Libraries', 'Databases', 'Tools & Platforms', 'AI & ML'] as const;

function TechIcon({ tech: { name, slug, color } }: { tech: { name: string; slug: string; color: string } }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span
        className="flex h-full w-full items-center justify-center text-xs font-bold"
        style={{ color: `#${color}` }}
      >
        {name[0]}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/666666`}
      alt={name}
      className="h-full w-full object-contain"
      onError={() => setHasError(true)}
    />
  );
}

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
        The technologies and tools I work with to build modern applications
      </p>

      <div className="mt-10 space-y-10">
        {categories.map((category) => {
          const items = techStack.filter((t) => t.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-fg-tertiary">
                {category}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((tech) => (
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
                      <TechIcon tech={tech} />
                    </span>
                    <span className="text-sm font-medium text-fg">{tech.name}</span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-tertiary">Methodologies</span>
        </div>
        <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">Agile &amp; Methodology</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-secondary">
          The practices and processes I follow to deliver quality software
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {agileSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
            >
              <Lightbulb className="h-3.5 w-3.5" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
