import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/portfolio';

export function BlogList() {
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
        <h1 className="font-display text-3xl font-semibold text-fg md:text-4xl mb-8">All Blog Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rainbow-border group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to={`/blog/${post.id}`} className="block h-full">
                <img src={post.image} alt={post.title} className="aspect-[4/3] w-full object-cover" />
                <div className="space-y-3 p-5">
                  <div className="flex items-center gap-3 text-xs font-medium text-fg-tertiary">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-fg">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-secondary">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="rounded-full bg-bg-tertiary px-3 py-1 text-xs font-medium text-fg-secondary">
                      {post.category}
                    </span>
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
