import { Link } from 'react-router-dom';
import { personal } from '../data/details';
import Talks from './Talks';

export default function Blog() {
  return <section id="blog" className="section">
    <div className="section-heading"><p className="meta"><span>03</span>In the margins</p><span className="small">Small things count, too.</span></div>
    <div className="note-grid">
      <article><p className="meta">01 / The small-project shelf · 2022–2024</p><h3>Learning by <em>making.</em></h3><p>{personal.experiments}</p><a className="text-link" href={personal.experimentsHref} target="_blank" rel="noreferrer">Open the Python collection ↗</a></article>
      <article><p className="meta">02 / Notes from the process</p><h3>A few thoughts,<br /><em>still taking shape.</em></h3><p>Notes on spacing, building a portfolio as a system, and the quieter side of motion. These are short excerpts; the writing space is still in progress.</p><Link className="text-link" to="/blog">Read the notebook ↗</Link></article>
    </div>
    <Talks />
  </section>;
}
