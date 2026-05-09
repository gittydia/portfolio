export type TimelineCategory = 'Work' | 'Leadership' | 'Startup' | 'Education' | 'Internship';

export interface NavLink {
  label: string;
  href: string;
}

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  href: string;
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  description: string;
}

export interface HackathonWin {
  id: string;
  placement: string;
  title: string;
  event: string;
  image: string;
  description: string;
  accomplishments: string[];
  href: string;
  tags: string[];
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  organization: string;
  summary: string;
  description: string;
  category: TimelineCategory;
}

export interface TechStackItem {
  name: string;
  slug: string;
  color: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'email' | 'resume';
}

export interface PortfolioProfile {
  name: string;
  roleCycle: string[];
  location: string;
  avatar: string;
  shortBio: string;
  longBio: string;
  openTag: string;
  intro: string;
  email: string;
  resumeHref: string;
}

export interface PortfolioContact {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const profile: PortfolioProfile = {
  name: 'Dianne Boholst',
  roleCycle: ['a developer', 'a learner', 'a builder'],
  location: 'Manila, Philippines',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=640&q=80',
  shortBio:
    'Backend-leaning developer engineering resilient systems and AI-driven features for teams that value clarity, momentum, and a little bit of soul.',
  longBio:
    'My work sits at the intersection of robust backend engineering, distributed architecture, and a deep appreciation for intuitive visual craft.',
  openTag: 'Open to work!',
  intro:
    `I am a developer focused on building the connective tissue of applications. My work involves engineering reliable backend systems, structuring resilient databases, and creating the APIs that empower frontend experiences, ultimately bringing complex, functional features to life.`,
  email: 'Boholstdianne1@gmail.com',
  resumeHref: 'Resume-Boholst-Dianne-May2026.pdf',
};

export const navLinks: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/gittydia', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dianne-boholst/', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'email' },
  { label: 'Resume', href: profile.resumeHref, icon: 'resume' },
];

export const projects: ProjectCard[] = [
  {
    id: 'Calendar Commander',
    title: 'Calendar Commander',
    description: `Multi-user Telegram bot for Google Calendar, built with FastAPI + python-telegram-bot in webhook mode.
  Supports unlimited users connecting their own Google accounts via OAuth.`,
    image: '/calendar-commander.jpg',
    tags: ['Python', 'Docker', 'Telegram Bot API', 'Google Calendar API', 'FastAPI', 'Render'],
    href: '/projects/Calendar Commander',
  },
  {
    id: 'Rulebox-F1',
    title: 'Rulebox F1',
    description:
      'A fullstack AI-powered Formula 1 regulations assistant and search platform.',
    image: '/rulebox-landing.png',
    tags: ['Python', 'FastAPI', 'Deepseek', 'Next.js', 'MongoDB', 'Docker', 'Render', 'JWT'],
    href: '/projects/Rulebox-F1',
  },
  {
    id: 'pdf-hero',
    title: 'PDF Hero',
    description:
      `an AI-powered study assistant that processes PDFs to generate concise and
well-organized explanations. Features include automatic note generation using AI,
simplified “explain like I’m five” notes, and a pretest function to aid efficient learning.`,
    image: '/PDFHero.png',
    tags: ['Python', 'FastAPI', 'Deepseek', 'HTML', 'CSS', 'JavaScript'],
    href: '/projects/pdf-hero',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'editorial-minimalism',
    title: 'Why editorial minimalism makes products feel more trustworthy',
    excerpt:
      'A practical reflection on spacing, hierarchy, and the small design decisions that make a product feel composed instead of crowded.',
    image: 'https://picsum.photos/seed/editorial-minimalism/1200/800',
    date: '14 Apr 2026',
    readTime: '6 min read',
    category: 'Design systems',
    href: '/blog/editorial-minimalism',
  },
  {
    id: 'portfolio-system',
    title: 'Shipping a portfolio as a system, not a one-off page',
    excerpt:
      'How I think about reusable section data, motion states, and future pages before writing the first line of component code.',
    image: 'https://picsum.photos/seed/portfolio-system/1200/800',
    date: '28 Feb 2026',
    readTime: '4 min read',
    category: 'Frontend craft',
    href: '/blog/portfolio-system',
  },
  {
    id: 'scroll-motion',
    title: 'A gentle case for scroll-triggered motion',
    excerpt:
      'Subtle IntersectionObserver reveals can guide attention without turning a page into a carousel of effects.',
    image: 'https://picsum.photos/seed/scroll-motion/1200/800',
    date: '09 Jan 2026',
    readTime: '5 min read',
    category: 'Motion',
    href: '/blog/scroll-motion',
  },
];

export const talks: Talk[] = [
  {
    id: 'small-interfaces-big-trust',
    title: 'Small Interfaces, Big Trust',
    event: 'Manila Frontend Nights',
    date: '18 Mar 2026',
    description: 'Exploring how thoughtful interface design builds user confidence through subtle patterns, clear hierarchy, and intentional whitespace.',
  },
  {
    id: 'design-systems-small-teams',
    title: 'Building design systems for small teams',
    event: 'Craft & Code Meetup',
    date: '07 Nov 2025',
    description: 'Practical strategies for creating scalable design systems that small teams can actually maintain and evolve over time.',
  },
  {
    id: 'threejs-atmosphere',
    title: 'Three.js as atmosphere, not spectacle',
    event: 'Pixel Playground 2025',
    date: '21 Jul 2025',
    description: 'Using Three.js to create subtle, atmospheric effects that enhance user experience without overwhelming the interface.',
  },
];

export const hackathons: HackathonWin[] = [
  {
    id: 'ambag',
    placement: 'semi-finalist',
    title: 'AMBAG',
    event: 'BPI Datawave 2025',
    image: '/ambag-landing.png',
    description: 'A collaborative financial platform developed during a hackathon to help groups manage shared savings, bill payments, and contributions. It enables users to create financial goals, track group progress, automate reminders, and manage payments collectively. As part of the team, I focused on backend, database, middleware development, and deployment. I also integrated the backend with the frontend, ensuring seamless communication and a cohesive user experience.',
    accomplishments: [
      'Built the team\u2019s final demo in under 36 hours with a shared component system and rapid content iterations.',
      'Designed a presentation flow that turned a complicated workflow into a clear story for judges and mentors.',
      'Won the product category by pairing a practical user flow with a polished live prototype.',
    ],
    href: '/competitions/ambag',
    tags: ['ReactJS', 'Python', 'Deepseek', 'MongoDB', 'FirebaseAuth', 'Render', 'Docker'],
  },
  {
    id: 'clarify',
    placement: '3rd Place',
    title: 'Clarify',
    event: '2025 Innovation Cup Hackathon',
    image: '/aws-cloud-3rd-place.jpg',
    description: 'Clarify is a real-time conversational AI that listens to meetings to capture decisions, instantly answer questions, and automatically delegate structured tasks with deadlines to an intuitive dashboard for seamless post-meeting follow-up.',
    accomplishments: [
      'Built an innovative solution in 48 hours.',
      'Collaborated with a team of 4 developers.',
      'Received recognition for creative problem-solving.',
    ],
    href: '/competitions/clarify',
    tags: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Next.js', 'Agora', 'OpenAI', 'AWS'],
  },
    {
    id: 'BukidMate',
    placement: 'Semi-finalist',
    title: 'BukidMate',
    event: '2025 Innovation Cup Hackathon',
    image: '/bukidmate.jpg',
    tags: ['Python', 'FastAPI','React.js', 'Vite'],
    description: 'AI partner for smarter crop selling. Farmers lose income when they sell at the wrong time. BukidMate solves that. Just type your region and crop. The AI analyzes weather, supply, and demand to predict the best price and tells you exactly when to sell. BukidMate talks directly to buyers and helps you close the deal, no middleman needed.',
    accomplishments: [
      'As part of the team, I focused on backend and middleware development..',
      'Collaborated with a team of 4 developers.',
      'Received recognition for creative problem-solving.',
    ],
    href: '/competitions/BukidMate',
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'intern-2026',
    year: '2026',
    title: 'Software Engineer Intern and QA Intern',
    organization: 'Golden Suntec Solution Inc.',
    summary: 'Engineered a distributed offline-first sync architecture, built high-performance Wasm logic, and executed over 100 automated QA tasks',
    description: `Collaborated with the Infra and Commercial Tech teams on enterprise ERP implementations. 
    Designed and optimized an ETL pipeline for complex data migrations, engineered an offline-first distributed sync 
    architecture for a custom client project, and compiled performance-critical logic into WebAssembly (Wasm) to 
    secure real-time remote updates via a custom Telegram bot integration. Additionally, accelerated release reliability by 
    executing 112 automated QA tasks using Arrange-Act-Assert (AAA) methodologies.`,
    category: 'Internship',
  },
  {
    id: 'hack-horizon-2025',
    year: '2025-2026',
    title: 'AWS Learning Club ML and AI Skill Builder Co-Head',
    organization: 'AWS Learning Club - Alpha',
    summary: 'Leading community initiatives and mentoring student developers in cloud computing, machine learning, and AI implementation.',
    description: 'Serve as Co-Head to drive cloud and AI literacy among students. Design learning roadmaps, conduct technical workshops, and mentor student teams on integrating AWS services and AI models.',
    category: 'Leadership',
  },
  {
    id: 'CS-2025',
    year: '2025',
    title: 'Exploratory Backend Developer',
    organization: 'Rizal Technological University',
    summary: 'I started joining hackathon and fully experiencing backend development and still learning',
    description: 'Participating in hackathons and building projects to gain hands-on experience in backend development. I explored various technologies and frameworks, learning how to design and implement scalable backend systems while collaborating with other developers.',
    category: 'Education',
  },
  {
    id: 'studio-north-2024',
    year: '2023-2024',
    title: 'College Student - Backend Developer',
    organization: 'Rizal Technological University',
    summary: 'Still a novice in the world of coding, I started to explore the Backend Development by playing and learning with how it can fix real worlds problem. I explored, MySQL and Python potential.',
    description: 'Learning to explore the Backend Development by playing and learning with how it can fix real worlds problem. I explored, MySQL and Python potential.',
    category: 'Education',
  },
  {
    id: 'AMA-STEM-21-23',
    year: '2021-2023',
    title: 'BS Computer Science',
    organization: 'AMA Computer Learning Center',
    summary: 'I am learning the basics in free time since I am a STEM student, there is no subject about coding.',
    description: 'Got interested in coding and IT Fields while in my STEM course. I started learning programming languages such as Python online resources and personal projects.',
    category: 'Education',
  },
];

export const techStack: TechStackItem[] = [
  { name: 'React', slug: 'react', color: '61DAFB', href: 'https://react.dev/' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6', href: 'https://www.typescriptlang.org/' },
  { name: 'Vite', slug: 'vite', color: '646CFF', href: 'https://vitejs.dev/' },
  { name: 'React Router', slug: 'reactrouter', color: 'CA4245', href: 'https://reactrouter.com/' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4', href: 'https://tailwindcss.com/' },
  { name: 'Three.js', slug: 'threedotjs', color: '000000', href: 'https://threejs.org/' },
  { name: 'Lucide', slug: 'lucide', color: '171411', href: 'https://lucide.dev/' },
  { name: 'EmailJS', slug: 'emailjs', color: 'E94D3C', href: 'https://www.emailjs.com/' },
  { name: 'ESLint', slug: 'eslint', color: '4B32C3', href: 'https://eslint.org/' },
  { name: 'Node.js', slug: 'node.js', color: '339933', href: 'https://nodejs.org/' },
  { name: 'Figma', slug: 'figma', color: 'F24E1E', href: 'https://www.figma.com/' },
  { name: 'GitHub', slug: 'github', color: '181717', href: 'https://github.com/' },
];

export const contact: PortfolioContact = {
  serviceId: 'service_placeholder',
  templateId: 'template_placeholder',
  publicKey: 'public_key_placeholder',
};