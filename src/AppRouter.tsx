import { BrowserRouter } from 'react-router-dom';
import { RouteEffects } from './components/RouteEffects';
import { AppRoutes } from './AppRoutes';

export function AppRouter() {
  return <BrowserRouter><a href="#main-content" className="skip-link">Skip to content</a><RouteEffects /><AppRoutes /></BrowserRouter>;
}
