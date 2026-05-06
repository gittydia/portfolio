import { useParams, useNavigate } from 'react-router-dom';
import { hackathons } from '../data/portfolio';
import { ArrowLeft, Trophy } from 'lucide-react';

export function CompetitionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const hackathon = hackathons.find((h) => h.id === id);

  if (!hackathon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Competition not found</h1>
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
          onClick={() => navigate('/competitions')}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft size={20} />
          Back to competitions
        </button>

        <div className="flex items-center gap-2 mb-4">
          <Trophy className="text-yellow-500" size={24} />
          <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-sm font-medium">
            {hackathon.placement}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{hackathon.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{hackathon.event}</p>

        <img
          src={hackathon.image}
          alt={hackathon.title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
        />

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {hackathon.description}
        </p>

        <h2 className="text-2xl font-bold mb-4">Accomplishments</h2>
        <ul className="space-y-3">
          {hackathon.accomplishments.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-primary mt-1">&#8226;</span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
