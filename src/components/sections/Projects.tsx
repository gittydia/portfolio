import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  datePublish: string
}
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
    // Import all PNGs from the picture folder
    const images = import.meta.glob('../picture/*.png', { eager: true, import: 'default' });
    const projects: Project[] = [{
      id: 1,
      title: 'RuleBox-F1',
      description: 'A fullstack AI-powered Formula 1 regulations assistant and search platform.',
      image: typeof images['../picture/rulebox-landing.png'] === 'string' ? images['../picture/rulebox-landing.png'] as string : '',
      tags: ['React', 'Next.js', 'Typescript', 'MongoDB', 'Python','FastAPI','Docker', 'nginx'],
      githubUrl: 'https://github.com/gittydia/RuleBox-F1',
      liveUrl: 'rulebox-f1.onrender.com/',
      datePublish: '2025',
    }, {
    id: 2,
    title: 'PDFHero',
    description: 'An app called PDFhero aids pupils in their efficient study sessions. Among the features that PDFhero provides are concise and well-organized explanations of the PDF information that you provide, notes that are created for you using AI technology, notes that are explained as if you were five years old, a pretest, and lastly you can chat with your PDF or notes!',
    image: typeof images['../picture/PDFHero.png'] === 'string' ? images['../picture/PDFHero.png'] as string : '',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'FastAPI'],
    githubUrl: 'https://github.com/gittydia/PDFhero',
    datePublish: '2024',
  }, {
    id: 3,
    title: 'AMBAG',
    description: `A collaborative financial platform developed during a hackathon to help groups manage shared savings, bill payments, and contributions. It enables users to create financial goals, track group progress, automate reminders, and manage payments collectively.
    As part of the team, I focused on backend, database, middleware development, and deployment. I also integrated the backend with the frontend, ensuring seamless communication and a cohesive user experience.`,
    image: typeof images['../picture/ambag-landing.png'] === 'string' ? images['../picture/ambag-landing.png'] as string : '',
    tags: ['JavaScript', 'React','Typescript', 'Python', 'FastAPI', 'MongoDB', 'Firebase', 'Docker'],
    githubUrl: 'https://github.com/gittydia/AMBAG-Datawave2025/tree/main/frontend',
    liveUrl: 'https://ambag.onrender.com',
    datePublish: '2025'
  }, {
    id: 4,
    title: 'Small Projects',
    description: 'A collection of Python-based applications including a BMI calculator, car parking management system, finance tracker (with data entry and reporting), GWA calculator, news summarizer (NLP), dataset testing utility, and PDF combiner. Features reusable library modules and integrates MySQL for data management, delivering practical solutions for academics.',
    image: 'https://images.stockcake.com/public/9/f/6/9f6994d9-b91e-46ef-b05c-df5d06ebad05_large/coding-on-laptop-stockcake.jpg',
    tags: ['Python'],
    githubUrl: 'https://github.com/gittydia/Python',
    datePublish: '2022-2024'
  }];
  // Extract unique tags for filtering
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  // Filter projects based on active tag
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.tags.includes(activeFilter));
  return <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            to solve specific problems and demonstrate different skills.
          </p>
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTags.map(tag => <button key={tag} onClick={() => setActiveFilter(tag)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === tag ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'}`}>
              {tag}
            </button>)}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden" style={{
            paddingBottom: '60%'
          }}>
                <img src={project.image} alt={project.title} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                      {tag}
                    </span>)}
                </div>
                {project.datePublish && (
                  <div className="mb-4 text-xs text-gray-500 dark:text-gray-400">
                    Published: {project.datePublish}
                  </div>
                )}
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <GithubIcon className="h-4 w-4 mr-1" /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLinkIcon className="h-4 w-4 mr-1" /> Deployed
                    </a>
                  )}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;