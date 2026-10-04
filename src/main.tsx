import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';

if (import.meta.env.DEV) {
  void import('react-grab');
  void import('react-scan').then(({ scan }) => scan({ enabled: true }));
}

const root = document.getElementById('root');
if (!root) throw new Error('Portfolio root element is missing');
const application = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (root.hasChildNodes() && root.dataset.route === (window.location.pathname.replace(/\/$/, '') || '/')) ReactDOM.hydrateRoot(root, application);
else ReactDOM.createRoot(root).render(application);
