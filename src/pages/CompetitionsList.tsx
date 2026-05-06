import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy } from 'lucide-react';
import { hackathons } from '../data/portfolio';

export function CompetitionsList() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft size={20} />
          Back to home
        </Link>
        <h1 className="font-display text-3xl font-semibold text-fg md:text-4xl mb-8">All Competitions</h1>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hackathons.map((hackathon) => (
            <article
              key={hackathon.id}
              className="rainbow-border group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to={hackathon.href} className="block h-full">
                <div className="overflow-hidden">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="text-yellow-500" size={18} />
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-medium">
                      {hackathon.placement}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-fg group-hover:text-accent mb-2">
                    {hackathon.title}
                  </h3>
                  <p className="text-sm text-fg-tertiary mb-3">{hackathon.event}</p>
                  <p className="text-sm leading-relaxed text-fg-secondary line-clamp-3">
                    {hackathon.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
