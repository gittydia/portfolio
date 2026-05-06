import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
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

      <div className="mt-10 flex items-center justify-center rounded-2xl border border-border bg-card p-20">
        <p className="text-lg font-medium text-fg-tertiary">Under construction</p>
      </div>
    </section>
  );
}
