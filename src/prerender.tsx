import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './AppRoutes';
import { projects, hackathons, talks, blogPosts, profile } from './data/portfolio';

export const pages = [
  { path: '/', title: 'Dianne’s digital abode', description: profile.shortBio },
  { path: '/projects', title: 'Project index', description: 'Backend systems, AI tools and useful experiments by Dianne Boholst.' },
  { path: '/competitions', title: 'Shared work', description: 'Hackathon projects, contributions and results from Dianne Boholst.' },
  { path: '/blog', title: 'The notebook', description: 'Short notes on software, visual craft and building for the web.' },
  ...projects.map((item) => ({ path: item.href, title: item.title, description: item.description })),
  ...hackathons.map((item) => ({ path: item.href, title: item.title, description: item.description })),
  ...talks.map((item) => ({ path: `/talks/${item.id}`, title: item.title, description: item.description })),
  ...blogPosts.map((item) => ({ path: item.href, title: item.title, description: item.excerpt })),
];

export function render(path: string) {
  return renderToString(<StaticRouter location={path}><a href="#main-content" className="skip-link">Skip to content</a><AppRoutes /></StaticRouter>);
}
