import { Link } from 'react-router-dom';
import { talks } from '../data/portfolio';
import { ResponsiveImage } from './ui/ResponsiveImage';

export default function Talks() {
  return <>{talks.map((talk) => <article className="talk-note" key={talk.id}>
    {talk.image && <ResponsiveImage src={talk.image} alt="Dianne's AWS Management Console and static website hosting bootcamp session" />}
    <div><p className="meta">Shared learning / {talk.date}</p><h3>{talk.title}</h3><p className="small">{talk.event}</p><Link className="text-link" to={`/talks/${talk.id}`}>About the session ↗</Link></div>
  </article>)}</>;
}
