import "@/app/globals.css";
import ClientScripts from "@/components/ClientScripts";
import Script from "next/script";

import { SessionProvider } from 'next-auth/react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Smart Farming Network",
  description: "A smart agricultural application",
  icons: {
    icon: [
      { url: "/img/favicon.png", type: "image/png", sizes: "32x32" },
    ],
  },

  openGraph: {
    title: "Smart Farming Network 🌾",
    description: "Transforming agriculture through technology — monitor, analyze, and improve farm productivity effortlessly.",
    url: siteUrl,
    siteName: "Smart Farming Network",
    images: [
      {
        url: "/img/logo.png", 
        width: 1200,
        height: 630,
        alt: "Smart Farming Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Smart Farming Network",
    description: "Empowering farmers with smart tools and analytics for better yield and sustainability.",
    site: "@your_twitter_handle", 
    creator: "@your_twitter_handle", 
    images: [`${siteUrl}/img/logo.png`],
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>        
        <div id="app-root">
          <SessionProvider>
            {children}
          </SessionProvider>
          <ClientScripts />
        </div>
      </body>
    </html>
  );
}
