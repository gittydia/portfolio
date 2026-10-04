import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export function PageLayout({ children, back = '/#projects', label = 'Back to selected work' }: { readonly children: ReactNode; readonly back?: string; readonly label?: string }) {
  return <div className="page"><Navbar /><main id="main-content" tabIndex={-1} className="detail-page"><Link to={back} className="text-link">← {label}</Link>{children}</main><Footer /></div>;
}
