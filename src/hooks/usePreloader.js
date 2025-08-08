'use client';
import { useEffect } from "react";

export function usePreloader() {

    useEffect(() => {
    const hidePreloader = () => {
      const preloader = document.getElementById('agrica-preloader');
      const mainPreloader = document.getElementById('preloader');

      if (preloader) preloader.classList.add('loaded');

      setTimeout(() => {
        if (mainPreloader?.parentNode) {
          mainPreloader.style.transition = 'opacity 500ms ease';
          mainPreloader.style.opacity = '0';

          setTimeout(() => {
            mainPreloader.parentNode?.removeChild(mainPreloader);
          }, 500);
        }
      }, 900);
    };

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }

    return () => window.removeEventListener('load', hidePreloader);
  }, []);

}
