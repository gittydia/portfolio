import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/portfolio';
import { PageLayout } from '../components/ui/PageLayout';

export function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((item) => item.id === id);
  if (!post) return <PageLayout back="/blog" label="Back to the notebook"><h1>Note not found.</h1></PageLayout>;
  return <PageLayout back="/blog" label="Back to the notebook"><p className="meta">{post.date} / {post.category}</p><h1>{post.title}</h1><div className="prose"><p>{post.excerpt}</p><p className="small">An excerpt from a work in progress. The full article is not published yet.</p></div></PageLayout>;
}
