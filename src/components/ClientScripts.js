'use client';
import Script from 'next/script';

export default function ClientScripts() {
  return (
    <>
    {/* JavaScript Files */}
        
        <Script src="/assets/js/jquery.appear.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.scrolla.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/count-to.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/isotope.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/progress-bar.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/ScrollOnReveal.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/validnavs.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}