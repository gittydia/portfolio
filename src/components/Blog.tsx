import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Blog() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="blog"
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-tertiary">Writing</span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">Recent Blog Posts</h2>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition hover:text-accent">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-secondary">
        Insights on technology, development practices, and lessons learned from building software
      </p>

      <div className="mt-10 flex items-center justify-center rounded-2xl border border-border bg-card p-20">
        <p className="text-lg font-medium text-fg-tertiary">Under construction</p>
      </div>
    </section>
  );
}
