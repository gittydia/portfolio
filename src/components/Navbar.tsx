import { useEffect, useRef, useState } from 'react';
import { Menu, X, FileText, Folder, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { projects, hackathons, profile, socialLinks } from '../data/portfolio';

const links = [
  { label: 'Work', file: 'selected-work', id: 'projects' },
  { label: 'About', file: 'about-dianne', id: 'about' },
  { label: 'In the margins', file: 'notes-and-experiments', id: 'blog' },
  { label: 'Contact', file: 'say-hello', id: 'contact' },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const toggle = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const projectMatch = useMatch('/projects/:id');
  const competitionMatch = useMatch('/competitions/:id');
  const section = pathname === '/' ? active : /^\/(projects|competitions)/.test(pathname) ? 'projects' : /^\/(blog|talks)/.test(pathname) ? 'blog' : 'home';
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-10% 0px -65% 0px' });
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);
  return <>
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <a href="/#home" className="wordmark"><span aria-hidden="true">~/</span><span>dianne’s digital abode</span></a>
      <button type="button" ref={toggle} className="menu-toggle" aria-controls="site-index" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Index'}{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="site-index" className={`edge-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <p className="explorer-label">personal workspace</p>
        <a href="/#home" aria-current={pathname === '/' && active === 'home' ? 'location' : undefined} onClick={() => setOpen(false)}><FileText aria-hidden="true" />welcome.md</a>
        {links.map((link, index) => <a key={link.id} href={`/#${link.id}`} aria-label={`0${index + 1} ${link.label}: ${link.file}`} aria-current={section === link.id ? 'location' : undefined} onClick={() => setOpen(false)}><FileText aria-hidden="true" />{link.file}</a>)}
        <details className="explorer-folder" open={pathname.startsWith('/projects') || undefined}><summary data-current={/^\/projects\/?$/.test(pathname)}><ChevronRight aria-hidden="true" /><Folder aria-hidden="true" />projects</summary><div>{projects.map((project) => <Link key={project.id} to={project.href} aria-current={projectMatch?.params.id === project.id ? 'page' : undefined} onClick={() => setOpen(false)}><FileText aria-hidden="true" />{project.title}</Link>)}</div></details>
        <details className="explorer-folder" open={pathname.startsWith('/competitions') || undefined}><summary data-current={/^\/competitions\/?$/.test(pathname)}><ChevronRight aria-hidden="true" /><Folder aria-hidden="true" />built-together</summary><div>{hackathons.map((item) => <Link key={item.id} to={item.href} aria-current={competitionMatch?.params.id === item.id ? 'page' : undefined} onClick={() => setOpen(false)}><FileText aria-hidden="true" />{item.title}</Link>)}</div></details>
        <div className="explorer-elsewhere"><p className="explorer-label">outside this space</p>{socialLinks.map((link) => <a key={link.label} href={link.icon === 'resume' ? `/${profile.resumeHref}` : link.href}><ArrowUpRight aria-hidden="true" />{link.label.toLowerCase()}</a>)}<p className="explorer-note">built with curiosity.<br />always learning.</p></div>
      </nav>
    </header>
    <aside className="workspace-bar" aria-label="Current document"><span>portfolio <span aria-hidden="true">/</span> {pathname === '/' ? 'welcome.md' : pathname.slice(1).replace(/\//g, ' / ').replace(/%20/g, ' ')}</span><span className="availability">open to work · Manila, PH</span></aside>
  </>;
}
