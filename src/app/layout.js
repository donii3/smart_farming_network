import "@/app/globals.css";
// export const metadata = {
//   title: "Smart Farming Network",
//   description: "A smart agricultural application",
// };
import ClientScripts from "@/components/ClientScripts";
import Script from "next/script";

import { SessionProvider } from 'next-auth/react';

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
