import { useParams } from 'react-router-dom';
import { talks } from '../data/portfolio';
import { PageLayout } from '../components/ui/PageLayout';
import { ResponsiveImage } from '../components/ui/ResponsiveImage';

export function TalkDetail() {
  const { id } = useParams();
  const talk = talks.find((item) => item.id === id);
  if (!talk) return <PageLayout back="/#blog" label="Back to the margins"><h1>Session not found.</h1></PageLayout>;
  return <PageLayout back="/#blog" label="Back to the margins"><p className="meta">{talk.date} / {talk.event}</p><h1>{talk.title}</h1>{talk.image && <ResponsiveImage src={talk.image} alt="AWS Alpha Weekly Bootcamp session on static website hosting" className="detail-image" loading="eager" />}<div className="prose"><h2>Learning, together.</h2><p>{talk.description}</p></div></PageLayout>;
}
