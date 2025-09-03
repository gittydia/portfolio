import React from 'react';
import { GithubIcon, LinkedinIcon, HeartIcon } from 'lucide-react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              Dianne Boholst
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              Backend Developer, specialize in AI Development, Database, and Features. Nice to meet you.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/gittydia" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:text-blue-500 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/dianne-boholst/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:text-blue-500 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <span>© {currentYear} Dianne Boholst. All rights reserved.</span>
              <HeartIcon className="h-4 w-4 mx-1 text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;