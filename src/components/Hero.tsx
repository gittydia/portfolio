import { ArrowRight, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.12 });
  const [displayRole, setDisplayRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = profile.roleCycle[roleIndex];
    const typingSpeed = isDeleting ? 55 : 95;
    const pause = !isDeleting && characterIndex === activeRole.length ? 1100 : 0;

    const timer = window.setTimeout(() => {
      if (!isDeleting && characterIndex < activeRole.length) {
        setDisplayRole(activeRole.slice(0, characterIndex + 1));
        setCharacterIndex((value) => value + 1);
        return;
      }

      if (!isDeleting && characterIndex === activeRole.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && characterIndex > 0) {
        setDisplayRole(activeRole.slice(0, characterIndex - 1));
        setCharacterIndex((value) => value - 1);
        return;
      }

      setIsDeleting(false);
      setRoleIndex((value) => (value + 1) % profile.roleCycle.length);
      setCharacterIndex(0);
      setDisplayRole('');
    }, pause || typingSpeed);

    return () => window.clearTimeout(timer);
  }, [characterIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      ref={ref}
      className={`relative pb-20 pt-16 md:pb-28 md:pt-24 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent/30 bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {profile.openTag}
            </span>
            <span className="text-sm font-medium text-fg-secondary">{profile.location}</span>
          </div>

          <div className="mt-8 space-y-4">
            <h1
              className={`font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg text-balance transition-all duration-700 delay-100 md:text-5xl lg:text-6xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              Hey, I&apos;m {profile.name.split(' ')[0]} &mdash;
            </h1>
            <p
              className={`font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg text-balance transition-all duration-700 delay-200 md:text-5xl lg:text-6xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              I&apos;m <span className="text-accent">{displayRole || 'a developer'}</span>
              <span className="ml-1 inline-block w-[0.6ch] animate-pulse text-accent">|</span>
            </p>
          </div>

          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed text-fg-secondary transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {profile.intro}
          </p>

          <p
            className={`mt-3 max-w-2xl text-base leading-relaxed text-fg-tertiary transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {profile.longBio}
          </p>

          <div
            className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-semibold text-bg transition hover:bg-accent"
            >
              Explore projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
            >
              Get in touch
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
