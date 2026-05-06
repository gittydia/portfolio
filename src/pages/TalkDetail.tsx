import { useParams, useNavigate } from 'react-router-dom';
import { talks } from '../data/portfolio';
import { ArrowLeft, Calendar } from 'lucide-react';

export function TalkDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const talk = talks.find((t) => t.id === id);

  if (!talk) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Talk not found</h1>
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
          Back to talks
        </button>

        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Calendar size={18} />
          <span>{talk.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{talk.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{talk.event}</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {talk.description}
          </p>
        </div>
      </div>
    </div>
  );
}
