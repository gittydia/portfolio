import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-bg/90 border-b border-border shadow-sm backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="text-lg font-semibold tracking-tight text-fg">
            {profile.name.split(' ')[0]}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-fg-secondary transition hover:text-fg"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-bg-tertiary"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 text-fg-secondary" />
              ) : (
                <Sun className="h-4 w-4 text-fg-secondary" />
              )}
            </button>
            <a
              href={profile.resumeHref}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-bg-tertiary"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 text-fg-secondary" />
              ) : (
                <Sun className="h-4 w-4 text-fg-secondary" />
              )}
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg transition hover:border-accent hover:text-accent"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className={`mx-auto max-w-6xl px-6 pb-5 sm:px-8 lg:px-10 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-fg-secondary transition hover:bg-bg-tertiary hover:text-fg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeHref}
                className="rounded-xl border border-border px-4 py-3 text-base font-medium text-fg transition hover:border-accent hover:text-accent"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
