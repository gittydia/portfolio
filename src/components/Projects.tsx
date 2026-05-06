import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-tertiary">Portfolio</span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">Featured Projects</h2>
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition hover:text-accent">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-secondary">
        A selection of projects I&apos;ve built, from web applications to side projects that solve real problems
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`rainbow-border group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
              <Link to={project.href} className="block h-full">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-fg">{project.title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-accent opacity-0 transition group-hover:opacity-100" />
                </div>
                <p className="text-sm leading-relaxed text-fg-secondary">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full bg-bg-tertiary px-3 py-1.5 text-xs font-medium text-fg-secondary"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}/666666`}
                        alt=""
                        className="h-3.5 w-3.5"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
             </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
