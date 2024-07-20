// pages/_app.js
import React, { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          },
          (error) => {
            console.log('ServiceWorker registration failed: ', error);
          }
        );
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
