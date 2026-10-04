import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectCard } from '../../data/portfolio';
import { projectDetails } from '../../data/details';
import { ResponsiveImage } from './ResponsiveImage';

export function ProjectEntry({ project, index, headingLevel = 3 }: { readonly project: ProjectCard; readonly index: number; readonly headingLevel?: 2 | 3 }) {
  const details = projectDetails[project.id];
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return <article className="project-row reveal" data-reveal="ready">
    <div>
      <span className="project-number">({String(index + 1).padStart(2, '0')})</span>
      <Heading className="project-title"><Link to={project.href}>{project.title}</Link></Heading>
      <p className="meta">{details?.year}{details?.role && ` / ${details.role}`}</p>
      <p className="project-description">{project.description}</p>
      <p className="project-tags">{project.tags.join(' · ')}</p>
      <div className="project-links">
        <Link className="text-link" to={project.href}>Explore project <ArrowUpRight aria-hidden="true" /></Link>
        {details?.repository && <a className="text-link" href={details.repository} target="_blank" rel="noreferrer">Source <ArrowUpRight aria-hidden="true" /></a>}
      </div>
    </div>
    <figure className="project-figure">
      <Link to={project.href} className="project-preview" aria-label={`Explore ${project.title}`}><ResponsiveImage src={project.image} alt={`${project.title}, project interface preview`} /></Link>
      <figcaption><span>fig. {String(index + 1).padStart(2, '0')} / {project.title}</span><span>A closer look ↗</span></figcaption>
    </figure>
  </article>;
}
