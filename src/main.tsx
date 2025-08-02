import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/enterprise-theme.css';
import './styles/theme.css';
import { Toaster } from 'react-hot-toast';

const registerPWA = async () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      const { registerSW } = await import('virtual:pwa-register');
      const updateSW = registerSW({
        onNeedRefresh() {
          if (confirm('New content available. Reload?')) {
            updateSW(true);
          }
        },
        onOfflineReady() {
          console.log('TradeSphere is ready to work offline');
        },
      });
    } catch (error) {
      // Silently fail in development environments that don't support PWA
      console.log('PWA registration skipped (development environment)');
    }
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster position="top-right" />
  </StrictMode>
);

registerPWA();