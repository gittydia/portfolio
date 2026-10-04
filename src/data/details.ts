export const projectDetails: Readonly<Record<string, {
  readonly year: string;
  readonly role?: string;
  readonly repository?: string;
  readonly live?: string;
}>> = {
  'Calendar Commander': { year: 'Year not recorded' },
  'Rulebox-F1': { year: '2025', repository: 'https://github.com/gittydia/RuleBox-F1', live: 'https://rulebox-f1.onrender.com' },
  'pdf-hero': { year: '2024', repository: 'https://github.com/gittydia/PDFhero' },
  ambag: { year: '2025', role: 'Backend, database & deployment', repository: 'https://github.com/gittydia/AMBAG-Datawave2025/tree/main/frontend', live: 'https://ambag.onrender.com' },
};

export const personal = {
  biography: 'I am an Information Technology student with a strong interest in backend development. My work revolves around implementing AI, structuring databases, and building features that solve real-life problems. I have developed full-stack applications, participated in hackathons, and created data-driven tools.',
  interests: 'Outside of coding, I watch documentaries and Formula 1, read novels, and explore new technologies. I value collaboration, continuous learning, and work with real-world relevance.',
  education: 'Bachelor of Science in Information Technology',
  university: 'Rizal Technological University · 2023–ongoing',
  academic: 'Cumulative GWA: 1.50 · Academic Achiever 2023–2025',
  coursework: 'Software Engineering, Networking, Algorithms and System Design',
  hometown: 'Angono, Rizal, Philippines',
  phone: '09127482700',
  phoneHref: 'tel:+639127482700',
  experiments: 'A collection of Python applications: a BMI calculator, parking management system, finance tracker, GWA calculator, news summarizer, dataset testing utility, and PDF combiner. Built with reusable modules and MySQL for data management.',
  experimentsHref: 'https://github.com/gittydia/Python',
} as const;

export const certificates = [
  { title: 'Crash Course on Python', issuer: 'Coursera', image: '/Coursera.png', href: 'https://coursera.org/share/8c5e43c3729b12bb5bef4188a9b41b2f', description: 'Structured problem-solving, researching solutions, planning approaches and writing scripts.' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco', image: '/Cyber.png', href: 'https://www.credly.com/badges/681e6d4e-9cf6-4e51-861d-99b6cb78ea4b/public_url', description: 'Protecting personal data, understanding security challenges and defending networks and digital assets.' },
  { title: 'Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate', issuer: 'Oracle', image: '/oracle-foundations.png', href: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E8C52F21E7B714548023E582D868F3793398EE543433DA6294C7029B0839C336', description: 'AI and ML fundamentals, supervised and unsupervised learning, deep learning and generative AI, with OCI services.' },
  { title: 'Data Science & Machine Learning', issuer: 'Udemy', image: '/data-ML.png', href: 'https://www.udemy.com/certificate/UC-b2a4f0a0-6d17-4164-b163-77ff6bd9c79c/', description: 'Python data analysis, visualization and predictive models using ML algorithms.' },
] as const;
