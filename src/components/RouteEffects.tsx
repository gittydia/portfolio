import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts, hackathons, profile, projects, talks } from '../data/portfolio';

export function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const id = decodeURIComponent(pathname.split('/').pop() || '');
    const content = [...projects, ...hackathons, ...talks, ...blogPosts].find((item) => item.id === id);
    const title = content?.title || ({ '/projects': 'Project index', '/competitions': 'Shared work', '/blog': 'The notebook' }[pathname]) || 'Dianne’s digital abode';
    const description = content ? ('description' in content ? content.description : content.excerpt) : profile.shortBio;
    document.title = `${title} | Dianne Boholst`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    const url = `https://gittydia.vercel.app${pathname}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', document.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting && entry.target instanceof HTMLElement) {
        entry.target.dataset.reveal = 'ready'; observer.unobserve(entry.target);
      }
    }, { threshold: .05 });
    for (const element of elements) {
      if (!reduced.matches && element.getBoundingClientRect().top > window.innerHeight) element.dataset.reveal = 'waiting';
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
