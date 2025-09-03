import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, } from 'lucide-react';
import HeroAnimation from '../3d/HeroAnimation';
import { useState } from 'react';
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
    const [animationLoaded, setAnimationLoaded] = useState(false);

    // Simulate loading for 3D animation (replace with actual loading event if available)
    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimationLoaded(true);
      }, 1000); // 800ms loading fallback
      return () => clearTimeout(timer);
    }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - Math.min(scrollY / 500, 1);
      const translateY = scrollY * 0.4;
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Radial background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-blue-500/30 blur-3xl opacity-70 animate-pulse-slow"></div>
      </div>
      <div ref={heroRef} className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
  {/* Hero details, no card */}
  <div className="w-full md:w-[480px] max-w-lg text-center md:text-left flex flex-col items-center md:items-start p-0 md:p-0 bg-transparent border-none shadow-none">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 tracking-wider uppercase letter-spacing-wider">
            WELCOME TO MY PORTFOLIO
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 text-transparent bg-clip-text shimmer-gradient">
              Dianne Boholst
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            Backend Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            I am a developer focused on building the connective tissue of applications. 
            My work involves engineering reliable backend systems, structuring resilient databases, 
            and creating the APIs that empower frontend experiences, ultimately bringing complex, 
            functional features to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
            <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-medium rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse-btn">
              Get in Touch
            </a>
            <a href="#projects" className="px-6 py-3 border border-blue-500 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300">
              View Projects
            </a>
          </div>
          <div className="flex mt-8 gap-4 justify-center md:justify-start w-full">
            <a href="https://github.com/gittydia" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 neon-glow transition-colors" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/dianne-boholst/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 neon-glow transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        {/* Floating 3D animation */}
        <div className="w-full md:w-[420px] max-w-md flex justify-center items-center mb-8 md:mb-0">
          <div className="animate-float-3d">
            {animationLoaded ? <HeroAnimation /> : (
              <div className="flex items-center justify-center h-64">
                <span className="text-white/60 text-lg animate-pulse">Loading animation...</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Animated scroll down arrow - below card on mobile, centered on desktop */}
      <div className="w-full flex justify-center mt-4 md:mt-8 z-20">
        <a href="#about" className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors bg-white/20 backdrop-blur-md animate-bounce" aria-label="Scroll Down">
          <ArrowDownIcon className="h-5 w-5" />
        </a>
      </div>
      {/* Custom styles for shimmer, neon, float, and pulse */}
      <style>{`
        .shimmer-gradient {
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .neon-glow:hover {
          box-shadow: 0 0 8px 2px #22d3ee, 0 0 16px 4px #2563eb;
          filter: brightness(1.2) drop-shadow(0 0 6px #22d3ee);
        }
        .animate-float-3d {
          animation: float3d 4s ease-in-out infinite alternate;
        }
        @keyframes float3d {
          0% { transform: translateY(0) scale(1) rotateZ(0deg); }
          50% { transform: translateY(-18px) scale(1.03) rotateZ(2deg); }
          100% { transform: translateY(0) scale(1) rotateZ(0deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-pulse-btn {
          animation: pulse-btn 2.5s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulse-btn {
          0%, 100% { box-shadow: 0 0 0 0 #22d3ee44; }
          50% { box-shadow: 0 0 0 8px #22d3ee22; }
        }
      `}</style>
    </section>
  );
};
export default Hero;