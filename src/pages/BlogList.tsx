import { Link } from 'react-router-dom';
import { blogPosts } from '../data/portfolio';
import { PageLayout } from '../components/ui/PageLayout';

export function BlogList() {
  return <PageLayout back="/#blog" label="Back to the margins"><p className="meta">The notebook / In progress</p><h1>Notes along<br /><em>the way.</em></h1><p className="prose">Short excerpts from a writing space that is still taking shape.</p>{blogPosts.map((post) => <article className="note-row" key={post.id}><p className="meta">{post.date} / {post.category}</p><h2><Link to={post.href}>{post.title}</Link></h2><p className="small prose">{post.excerpt}</p><Link className="text-link" to={post.href}>Read note ↗</Link></article>)}</PageLayout>;
}
