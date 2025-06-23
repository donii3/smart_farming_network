import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function usePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }

    return () => {
      window.removeEventListener('load', hidePreloader);
    };
  }, [pathname, searchParams]);

  return isLoading;
}
