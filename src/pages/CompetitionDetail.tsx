import { useParams } from 'react-router-dom';
import { hackathons } from '../data/portfolio';
import { projectDetails } from '../data/details';
import { PageLayout } from '../components/ui/PageLayout';
import { ResponsiveImage } from '../components/ui/ResponsiveImage';

export function CompetitionDetail() {
  const { id } = useParams();
  const item = hackathons.find((entry) => entry.id === id);
  if (!item) return <PageLayout><h1>Competition not found.</h1></PageLayout>;
  const details = projectDetails[item.id];
  return <PageLayout back="/competitions" label="Back to competitions"><p className="meta">{item.event} / {item.placement}</p><h1>{item.title}</h1><ResponsiveImage src={item.image} alt={`${item.title}, ${item.event}`} className="detail-image" loading="eager" /><div className="prose"><h2>What we built</h2><p>{item.description}</p><h2>Contributions & outcome</h2><ul>{item.accomplishments.map((text) => <li key={text}>{text}</li>)}</ul><h2>Built with</h2><p>{item.tags.join(' · ')}</p></div><div className="project-links">{details?.repository && <a className="text-link" href={details.repository}>Explore the source ↗</a>}{details?.live && <a className="text-link" href={details.live}>Open live project ↗</a>}</div></PageLayout>;
}
