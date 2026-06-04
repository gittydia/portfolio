import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { talks } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Talks() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-tertiary">Recent Talks</span>
      </div>
      <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">Speaking Engagements</h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-secondary">
        Workshops and talks I&apos;ve given on web development, sharing knowledge with the community
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {talks.map((talk, index) => (
          <Link
            key={talk.id}
            to={`/talks/${talk.id}`}
            className={`group block overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {talk.image && (
              <div className="overflow-hidden">
                <img src={talk.image} alt={talk.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-fg-tertiary">
                <Calendar size={14} />
                <span>{talk.date}</span>
                <span className="text-border">·</span>
                <span>{talk.event}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-fg group-hover:text-accent">{talk.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-secondary line-clamp-2">{talk.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
