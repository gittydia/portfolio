import { profile, socialLinks } from '../data/portfolio';
import { personal } from '../data/details';
import Timeline from './Timeline';
import TechStack from './TechStack';

export function About() {
  return <section id="about" className="section">
    <div className="section-heading"><p className="meta"><span>02</span>The person behind the work</p><span className="small">Always a work in progress.</span></div>
    <div className="about-grid">
      <div><h2 className="about-lead">I like the part where separate things start to <em>work together.</em></h2><div className="prose"><p>{personal.biography}</p><p>{profile.longBio}</p><p>{profile.intro}</p><p>{personal.interests}</p></div></div>
      <aside className="about-aside" aria-label="About Dianne">
        <div><p className="meta">Based in</p><p>{profile.location}</p><p className="small">From {personal.hometown}</p></div>
        <div><p className="meta">Drawn to</p><p className="small">Backend systems<br />AI & data-driven tools<br />Intuitive visual craft</p></div>
        <div><p className="meta">Elsewhere</p><div className="social-list">{socialLinks.map((link) => <a key={link.label} className="text-link" href={link.icon === 'resume' ? `/${profile.resumeHref}` : link.href}>{link.label} ↗</a>)}</div></div>
      </aside>
    </div>
    <Timeline /><TechStack />
  </section>;
}
