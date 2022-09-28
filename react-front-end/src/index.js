import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BgLogoLink from './components/BgLogoLink';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BgLogoLink />
    <App />
  </React.StrictMode>
);
