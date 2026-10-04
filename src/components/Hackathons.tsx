import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { hackathons } from '../data/portfolio';
import { ResponsiveImage } from './ui/ResponsiveImage';

export default function Hackathons({ headingLevel = 3 }: { readonly headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return <div className="competition-list">
    <div className="section-heading"><p className="meta">Built together / competitions</p><Link to="/competitions" className="text-link">All competitions ↗</Link></div>
    {hackathons.map((item) => <Link key={item.id} to={item.href} className="competition-row">
      <ResponsiveImage src={item.image} alt={`${item.title}, ${item.event}`} />
      <div><Heading className="competition-title">{item.title}</Heading><p className="meta">{item.placement}</p></div>
      <p className="small">{item.event}</p><ArrowUpRight aria-hidden="true" />
    </Link>)}
  </div>;
}
