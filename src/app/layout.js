import Head from "next/head";
import Script from "next/script";
import "@/app/globals.css";

import Preloader from "@/app/components/Preloder";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Smart Farming Network",
  description: "A smart agricultural application",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" sizes="32x32" />
      </Head>

      <body suppressHydrationWarning>
        <Preloader />
        {children}
        <Footer />

        {/* JavaScript Files */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.appear.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.scrolla.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/count-to.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/progress-bar.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollOnReveal.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/validnavs.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
