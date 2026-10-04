import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Hackathons from '../components/Hackathons';
import { About } from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return <div className="page"><Navbar /><main id="main-content" tabIndex={-1}><Hero /><Projects /><Hackathons /><About /><Blog /><Contact /></main><Footer /></div>;
}
