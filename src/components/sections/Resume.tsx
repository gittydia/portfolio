import React from 'react';
import { DownloadIcon, GraduationCapIcon, Laptop } from 'lucide-react';
const Resume: React.FC = () => {
  const experiences = [{
    id: 1,
    role: 'Experience Backend developer with experience in frontend',
    period: '2025 - Present',
    description: 'I started joining hackathon and fully experiencing backend development and still learning.'
  }, {
    id: 2,
    role: 'Backend Developer',
    period: '2023 - 2024',
    description: 'Learning to explore the Backend Development by playing and learning with how it can fix real worlds problem. I explored, MySQL and Python potential.'
  }, {
    id: 3,
    role: 'Python',
    period: '2021 - 2023',
    description: 'I am learning the basics in free time since I am a STEM student, there is no subject about coding.'
  }];
  return <section id="resume" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Resume</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          {/* Download Button */}
          <div className="flex justify-center mb-12">
            <a href="/resume-dianne-boholst-october-3-25.pdf" download className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <DownloadIcon className="h-5 w-5 mr-2" /> Download CV
            </a>
          </div>
          {/* Experience Timeline */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {experiences.map((exp, index) => <div key={exp.id} className="relative">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                          <Laptop className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <p className="text-blue-500 dark:text-blue-400">
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {exp.period}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  <div className={`absolute top-6 bg-blue-500 rounded-full h-4 w-4 border-2 border-white dark:border-gray-800 ${index % 2 === 0 ? 'left-0 md:left-1/2 transform -translate-x-1/2' : 'left-0 md:left-1/2 transform -translate-x-1/2'}`}></div>
                </div>)}
            </div>
          </div>
          {/* Education */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCapIcon className="h-6 w-6 mr-2 text-blue-500" />
              Education
            </h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold">
                Bachelor of Science in Information Technology
              </h4>
              <p className="text-blue-500 dark:text-blue-400">
                Rizal Technological University
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                2023-ongoing
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Cumulative GWA: 1.50, Academic Achiever 2023-2025
                Relevant Course Work: Software Engineering, Networking, Algorithms and System Design  
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Resume;