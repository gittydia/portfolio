import React from 'react';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from 'lucide-react';
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime?: string;
  category: string;
  link?: string;
}
const Certificate: React.FC = () => {
  const blogPosts: BlogPost[] = [{
    id: 1,
    title: 'Crash Course on Python',
    excerpt: 'Developed strong problem-solving skills by applying structured frameworks to complex projects. Gained experience in formulating problem statements, researching solutions, planning approaches, and writing scripts to implement effective outcomes.',
    image: '/Coursera.png', 
    date: '2024',
    category: 'Coursera',
    link: 'https://coursera.org/share/8c5e43c3729b12bb5bef4188a9b41b2f'
  }, {
    id: 2,
    title: 'Introduction to Cybersecurity',
    excerpt: 'Gained foundational knowledge in cybersecurity, including best practices for protecting personal data and understanding major security challenges faced by organizations. Developed awareness of the growing demand for professionals skilled in defending networks and digital assets.',
    image: '/Cyber.png',
    date: '2024',
    category: 'Cisco',
    link: 'https://www.credly.com/badges/681e6d4e-9cf6-4e51-861d-99b6cb78ea4b/public_url'

  }, {
    id: 3,
    title: 'Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate',
    excerpt: 'Earned Oracle Cloud Infrastructure (OCI) AI Foundations certification, demonstrating strong knowledge of AI and ML concepts, including supervised/unsupervised learning, deep learning models (CNNs, RNNs, LSTMs), and generative AI. Gained hands-on familiarity with OCI’s AI/ML services and tools, applying them to real-world business challenges.',
    image: '/oracle-foundations.png',
    date: '2024',
    category: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E8C52F21E7B714548023E582D868F3793398EE543433DA6294C7029B0839C336'
  },{
    id: 4,
    title: 'Completed Data Science & Machine Learning course',
    excerpt: 'Gaining hands-on experience with Python libraries for data analysis and visualization, and building predictive models using various ML algorithms and techniques.',
    image: '/data-ML.png',
    date: '2024',
    category: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-b2a4f0a0-6d17-4164-b163-77ff6bd9c79c/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com'
  }];
  return <section id="certificate" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Certificates</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the certificates I have earned in technology and related fields.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden" style={{
            paddingBottom: '56.25%'
          }}>
                {post.image.endsWith('.pdf') ? (
                  <embed src={post.image} type="application/pdf" className="absolute top-0 left-0 w-full h-full object-cover" />
                ) : (
                  <img src={post.image} alt={post.title} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                )}
                <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center mr-4">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <a href={post.link ? post.link : `/certificate/${post.id}`} target={post.link ? "_blank" : undefined} rel={post.link ? "noopener noreferrer" : undefined} className="inline-flex items-center font-medium text-blue-500 hover:text-blue-600 transition-colors">
                  View Certificate <ArrowRightIcon className="h-4 w-4 ml-1" />
                </a>
              </div>
            </article>)}
        </div>
        <div className="text-center mt-10">
        </div>
      </div>
    </section>;
};
export default Certificate;