import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { ProjectEntry } from './ui/ProjectEntry';

export default function Projects() {
  return <section id="projects" className="section">
    <div className="section-heading"><p className="meta"><span>01</span>Selected work</p><Link className="text-link" to="/projects">The project index ↗</Link></div>
    <h2>Useful things,<br /><em>carefully connected.</em></h2>
    {projects.map((project, index) => <ProjectEntry key={project.id} project={project} index={index} />)}
  </section>;
}
