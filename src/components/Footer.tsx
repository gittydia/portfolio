import { ArrowUpRight, FileText, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { navLinks, profile, socialLinks } from '../data/portfolio';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
  resume: FileText,
} as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">
            Got an idea? Want to collaborate on something cool?
          </h2>
          <p className="mt-4 text-lg text-fg-secondary">Let&apos;s make it happen.</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[1fr_auto_auto]">
          <div className="max-w-sm">
            <a href="#home" className="text-lg font-semibold text-fg">
              {profile.name.split(' ')[0]}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{profile.shortBio}</p>
            <p className="mt-4 text-xs text-fg-tertiary">Made with in Manila</p>
          </div>

          <nav className="flex flex-col gap-3 text-sm font-medium text-fg-secondary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-fg">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-start gap-3 lg:justify-end">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon === 'email' || link.icon === 'resume' ? undefined : '_blank'}
                  rel={link.icon === 'email' || link.icon === 'resume' ? undefined : 'noreferrer'}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-fg-secondary transition hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                  {link.icon === 'resume' && <ArrowUpRight className="h-3 w-3" />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center text-xs text-fg-tertiary">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
