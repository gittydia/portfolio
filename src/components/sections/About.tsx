import React from 'react';
import { CodeIcon, Bot, DatabaseIcon } from 'lucide-react';

const About: React.FC = () => {
  const skills = [{
    name: 'Python',
    level: 90
  }, {
    name: 'MySQL',
    level: 50
  }, {
    name: 'JavaScript',
    level: 60
  }, {
    name: 'MongoDB',
    level: 50
  }, {
    name: 'FastAPI',
    level: 85
  }];
  return <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I am a Information Technology student with a passion in Backend Development. Although, I say that I'm a backend developer, I can work with Frontend but just the basics. I mostly work
              with implementing AI, structuring and creating Databases, Features that can solve problem in real life.
              My experience includes building full-stack applications, hackathon projects, and data-driven tools using Python, JavaScript, and MySQL.

              I enjoy creating solutions to the real life problems, it's what keeps me motivated. Beyond Technical skills, I value collaboration, continuous learning, and creating solutions that have real-world impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me watching documentaries and F1,
              reading novels, or experimenting with new technologies. I
              believe in continuous learning and am always exploring new tools
              and frameworks to improve my craft.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <CodeIcon className="w-10 h-10 text-blue-500 mb-3" />
              <h4 className="font-medium">Frontend</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <DatabaseIcon className="w-10 h-10 text-blue-500 mb-3" />
              <h4 className="font-medium">Backend</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <DatabaseIcon className="w-10 h-10 text-blue-500 mb-3" />
              <h4 className="font-medium">Database</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Bot className="w-10 h-10 text-blue-500 mb-3" />
              <h4 className="font-medium">AI</h4>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Skills</h3>
            <div className="space-y-5">
              {skills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="font-medium">
                  Bachelor of Science in Information Technology
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Rizal Technological University, 2023-ongoing
                </p>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                    Cumulative GWA: 1.50, Academic Achiever 2023-2024
                </p>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                    Relevant Course Work: Software Engineering, Networking, Algorithms and System Design  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;