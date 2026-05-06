import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Talks from '../components/Talks';
import Hackathons from '../components/Hackathons';
import Timeline from '../components/Timeline';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RainBackground from '../components/RainBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <RainBackground />
      <div className="relative z-10 bg-bg/85 backdrop-blur-[2px]">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Blog />
          <Talks />
          <Hackathons />
          <Timeline />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
