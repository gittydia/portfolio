import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/portfolio';
import { ArrowLeft } from 'lucide-react';

export function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft size={20} />
          Back to blog
        </button>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span>&middot;</span>
          <span>{post.readTime}</span>
          <span>&middot;</span>
          <span className="px-2 py-1 bg-secondary rounded-full">{post.category}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
        />

        <p className="text-lg text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
}
