import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

const appContainer = document.querySelector('#root');

createRoot(appContainer).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
