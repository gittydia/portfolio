import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import Footer from '../components/Footer';
const Project = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return <div className={`w-full min-h-screen bg-gray-50 text-black flex flex-col transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <header className="p-8 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tighter leading-none">
          VAN
          <br />
          HOLTZ
          <br />
          CO.
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/project" className="hover:underline transition-colors">
            <span className="mr-2 opacity-70">01</span>about
          </Link>
          <Link to="/project" className="hover:underline transition-colors">
            <span className="mr-2 opacity-70">02</span>journal
          </Link>
        </nav>
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeftIcon size={24} />
        </Link>
      </header>
      <main className="flex-1">
        <div className="relative w-full h-[60vh] bg-gradient-to-br from-emerald-400 to-blue-500 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://uploadthingy.s3.us-west-1.amazonaws.com/68423Xn7ahasXeKDqXm6D6/image.png')] bg-cover bg-center mix-blend-multiply opacity-80" />
          <div className="absolute inset-0 flex items-center justify-end p-12">
            <h1 className={`text-7xl md:text-8xl lg:text-9xl font-black text-transparent transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{
            WebkitTextStroke: '2px black'
          }}>
              STUDIO
              <br />
              MEGA
            </h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Project;