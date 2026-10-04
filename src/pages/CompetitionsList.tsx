import Hackathons from '../components/Hackathons';
import { PageLayout } from '../components/ui/PageLayout';

export function CompetitionsList() {
  return <PageLayout back="/#projects" label="Back to selected work"><p className="meta">The shared work</p><h1>Made with<br /><em>other people.</em></h1><p className="prose">Weekend builds and civic tech: shipping under pressure with a team, then iterating on what stuck.</p><Hackathons headingLevel={2} /></PageLayout>;
}
