import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { hackathons } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hackathons() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-tertiary">Competitions</span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">Hackathon Wins</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-secondary">
            Weekend builds and civic tech: shipping under pressure with a team, then iterating on what stuck.
          </p>
        </div>
        <Link to="/competitions" className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition hover:text-accent">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {hackathons.map((hackathon, index) => (
          <Link
            key={hackathon.id}
            to={hackathon.href}
            className={`rainbow-border group block overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="overflow-hidden">
              <img src={hackathon.image} alt={hackathon.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {hackathon.placement}
                </span>
                <span className="text-sm text-fg-tertiary">{hackathon.event}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-fg group-hover:text-accent">{hackathon.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-secondary line-clamp-2">{hackathon.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {hackathon.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-bg-secondary px-2.5 py-0.5 text-xs text-fg-tertiary">
                    {tag}
                  </span>
                ))}
              </div>
             </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
