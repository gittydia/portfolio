import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { BlogDetail } from './pages/BlogDetail';
import { TalkDetail } from './pages/TalkDetail';
import { CompetitionDetail } from './pages/CompetitionDetail';
import { ProjectsList } from './pages/ProjectsList';
import { BlogList } from './pages/BlogList';
import { CompetitionsList } from './pages/CompetitionsList';

export function AppRoutes() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<ProjectsList />} />
    <Route path="/projects/:id" element={<ProjectDetail />} />
    <Route path="/blog" element={<BlogList />} />
    <Route path="/blog/:id" element={<BlogDetail />} />
    <Route path="/talks/:id" element={<TalkDetail />} />
    <Route path="/competitions" element={<CompetitionsList />} />
    <Route path="/competitions/:id" element={<CompetitionDetail />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
