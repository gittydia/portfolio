import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/portfolio';

export function ProjectsList() {
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
        <h1 className="font-display text-3xl font-semibold text-fg md:text-4xl mb-8">All Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rainbow-border group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to={`/projects/${project.id}`} className="block h-full">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="font-display text-xl font-semibold text-fg">{project.title}</h3>
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
      </div>
    </div>
  );
}
