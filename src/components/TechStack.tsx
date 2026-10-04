import { techStack, agileSkills } from '../data/portfolio';
import { certificates, personal } from '../data/details';

export default function TechStack() {
  const categories = [...new Set(techStack.map((tech) => tech.category))];
  return <div className="qualifications">
    <details className="qualification"><summary>Tools & ways of working</summary><div className="qualification-content">
      {categories.map((category) => <div className="tool-group" key={category}><p className="meta">{category}</p><div className="tool-links">{techStack.filter((tech) => tech.category === category).map((tech) => <a key={tech.name} href={tech.href} target="_blank" rel="noreferrer">{tech.name}</a>)}</div></div>)}
      <div className="tool-group"><p className="meta">Practice</p><p className="small">{agileSkills.join(' · ')}</p></div>
    </div></details>
    <details className="qualification"><summary>Education & certificates</summary><div className="qualification-content">
      <div className="prose"><h3>{personal.education}</h3><p className="small">{personal.university}<br />{personal.academic}<br />{personal.coursework}</p><a className="text-link" href="/Resume-Boholst-Dianne-Aug2026.pdf">Resume / August 2026 ↗</a></div>
      <div className="certificate-list">{certificates.map((item) => <article key={item.title}><span className="meta">{item.issuer} / 2024</span><h4>{item.title}</h4><p>{item.description}</p><div className="project-links"><a className="text-link" href={item.href} target="_blank" rel="noreferrer">Verify credential ↗</a><a className="text-link" href={item.image} target="_blank" rel="noreferrer">View certificate ↗</a></div></article>)}</div>
    </div></details>
  </div>;
}
