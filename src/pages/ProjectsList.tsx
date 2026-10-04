import { projects } from '../data/portfolio';
import { personal } from '../data/details';
import { ProjectEntry } from '../components/ui/ProjectEntry';
import { PageLayout } from '../components/ui/PageLayout';

export function ProjectsList() {
  return <PageLayout back="/" label="Back to the abode"><p className="meta">The project index</p><h1>A collection of<br /><em>connected things.</em></h1>{projects.map((project, index) => <ProjectEntry key={project.id} project={project} index={index} headingLevel={2} />)}<div className="prose"><h2>Small Projects / 2022–2024</h2><p>{personal.experiments}</p><a className="text-link" href={personal.experimentsHref} target="_blank" rel="noreferrer">Explore the Python collection ↗</a></div></PageLayout>;
}
