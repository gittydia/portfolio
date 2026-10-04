import { useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { projectDetails } from '../data/details';
import { PageLayout } from '../components/ui/PageLayout';
import { ResponsiveImage } from '../components/ui/ResponsiveImage';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  if (!project) return <PageLayout><h1>Project not found.</h1><p>There are more things to explore in the project index.</p></PageLayout>;
  const details = projectDetails[project.id];
  return <PageLayout><p className="meta">Project notes / {details?.year}</p><h1>{project.title}</h1><p className="small">{details?.role}</p>
    <ResponsiveImage src={project.image} alt={`${project.title} application preview`} className="detail-image" loading="eager" />
    <div className="prose"><h2>The project</h2><p>{project.description}</p><h2>Built with</h2><p>{project.tags.join(' · ')}</p></div>
    <div className="project-links">{details?.repository && <a className="text-link" href={details.repository} target="_blank" rel="noreferrer">Explore the source ↗</a>}{details?.live && <a className="text-link" href={details.live} target="_blank" rel="noreferrer">Open live project ↗</a>}</div>
    {details?.live && <p className="small">Hosted on Render; the first visit may take a moment to wake up.</p>}
  </PageLayout>;
}
