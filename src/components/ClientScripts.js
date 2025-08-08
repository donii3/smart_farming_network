'use client';
import Script from 'next/script';

export default function ClientScripts() {
  return (
    <>
      {/* 1. Core Dependencies */}
      <Script src="/assets/js/jquery.appear.js" strategy="afterInteractive" />
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

      {/* 2. Animation Libraries */}
      <Script src="/assets/js/gsap.js" strategy="afterInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/ScrollOnReveal.js" strategy="afterInteractive" />

      {/* 3. UI Components */}
      <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.scrolla.min.js" strategy="afterInteractive" />

      {/* 4. Utility Scripts */}
      <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/progress-bar.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/count-to.js" strategy="afterInteractive" />
      <Script src="/assets/js/YTPlayer.min.js" strategy="afterInteractive" />

      {/* 5. Navigation & Main Script - Load Last */}
      <Script src="/assets/js/validnavs.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}