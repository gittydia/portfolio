import { timelineEntries } from '../data/portfolio';

export default function Timeline() {
  return <div className="timeline">
    <p className="meta">A little of the journey</p>
    {timelineEntries.map((entry) => <details key={entry.id}>
      <summary><span className="small">{entry.year}</span><h3>{entry.title}</h3></summary>
      <div className="entry-body"><p className="meta">{entry.organization} / {entry.category}</p><p>{entry.description}</p><p>{entry.summary}</p></div>
    </details>)}
  </div>;
}
