import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return <div className="w-full min-h-screen bg-[#4e15ff] text-white flex flex-col overflow-hidden relative">
      <div className="p-8 flex justify-between">
        <div className="text-xl font-bold tracking-tighter leading-none z-10">
          VAN
          <br />
          HOLTZ
          <br />
          CO.
        </div>
      </div>
      <main className="flex-1 flex items-center justify-center relative">
        <div className="absolute inset-0 w-full h-full">
          {/* Diagonal lines */}
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-black/20 transform rotate-[15deg]"></div>
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-black/20 transform rotate-[15deg]"></div>
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-black/20 transform rotate-[15deg]"></div>
          <div className="absolute top-[80%] left-0 w-full h-[1px] bg-black/20 transform rotate-[15deg]"></div>
        </div>
        {/* Scrollable container for the right side text */}
        <div className="relative w-full h-full max-w-5xl mx-auto overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent pr-4" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255,255,255,0.3) transparent',
        maxHeight: 'calc(100vh - 200px)'
      }}>
          <div className="relative min-h-[1500px] pb-20">
            <div className={`absolute top-0 right-0 text-9xl font-black transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
            transitionDelay: '100ms'
          }}>
              <div className="text-black transform -rotate-6">STUDIO</div>
            </div>
            <div className={`absolute top-32 right-20 text-9xl font-black transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
            transitionDelay: '200ms'
          }}>
              <div className="text-black transform -rotate-6">MEGA</div>
            </div>
            <div className={`absolute top-64 right-40 text-9xl font-black transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
            transitionDelay: '300ms',
            WebkitTextStroke: '2px black',
            color: 'transparent'
          }}>
              <div className="transform -rotate-6">THE</div>
            </div>
            <div className={`absolute top-96 right-0 text-9xl font-black transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
            transitionDelay: '400ms',
            WebkitTextStroke: '2px black',
            color: 'transparent'
          }}>
              <div className="transform -rotate-6">BRIGADE</div>
            </div>
            <div className={`absolute top-[30rem] right-32 text-9xl font-black transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
            transitionDelay: '500ms'
          }}>
              <div className="text-black transform -rotate-6">PUSH</div>
            </div>
            <div className={`absolute top-[38rem] right-64 text-9xl font-black transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
            transitionDelay: '600ms'
          }}>
              <div className="text-black transform -rotate-6">ONX</div>
            </div>
            <div className={`absolute top-[46rem] right-16 text-9xl font-black transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
            transitionDelay: '700ms'
          }}>
              <div className="text-black transform -rotate-6">MANS</div>
            </div>
            {/* You can add more project text elements here */}
            <div className={`absolute top-[54rem] right-40 text-9xl font-black transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
            transitionDelay: '800ms',
            WebkitTextStroke: '2px black',
            color: 'transparent'
          }}>
              <div className="transform -rotate-6">PROJECTS</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-white z-10">
        <div className="flex flex-col">
          <div className="flex mb-2">
            <span className="mr-2 opacity-70">01</span>
            <Link to="/project" className="hover:underline transition-colors">
              about
            </Link>
          </div>
          <div className="flex">
            <span className="mr-2 opacity-70">02</span>
            <Link to="/project" className="hover:underline transition-colors">
              journal
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mb-2">
            <span className="mr-2 opacity-70">03</span>
            <a href="#" className="hover:underline transition-colors">
              twitter
            </a>
          </div>
          <div className="flex mb-2">
            <span className="mr-2 opacity-70">04</span>
            <a href="#" className="hover:underline transition-colors">
              instagram
            </a>
          </div>
          <div className="flex">
            <span className="mr-2 opacity-70">05</span>
            <a href="#" className="hover:underline transition-colors">
              linkedin
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-2">Portland Oregon</div>
          <div className="hover:underline cursor-pointer">
            hello@vanholtz.co
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="mb-2">design</div>
          <div>feint</div>
        </div>
      </footer>
    </div>;
};
export default Home;