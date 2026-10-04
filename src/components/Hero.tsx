import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ThreadDrawing } from './generative/ThreadDrawing';

export default function Hero() {
  return <section id="home" className="hero">
    <div className="editor-gutter" aria-hidden="true">{Array.from({ length: 24 }, (_, index) => <span key={index}>{String(index + 1).padStart(2, '0')}</span>)}</div>
    <div className="hero-art"><ThreadDrawing /></div>
    <div className="hero-copy"><p className="hero-kicker">a small corner of the internet</p><h1>Dianne Boholst</h1><p className="hero-role">backend developer / learner / builder</p><p className="hero-description">I build the connective tissue of applications.<br />Reliable systems. Thoughtful connections.</p><div className="hero-actions"><a className="text-link" href="#projects">Explore my work <ArrowDown aria-hidden="true" /></a><a className="text-link" href="#contact">Say hello <ArrowUpRight aria-hidden="true" /></a></div></div>
    <p className="hero-footnote">[ signal study 001 ] <span className="hero-footnote-hint">move slowly. look around.</span></p>
  </section>;
}
