import "@/app/globals.css";
// export const metadata = {
//   title: "Smart Farming Network",
//   description: "A smart agricultural application",
// };
import ClientScripts from "@/components/ClientScripts";
import Script from "next/script";


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
          {children}
          <ClientScripts />
        </div>
      </body>
    </html>
  );
}
