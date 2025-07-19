import "@/app/globals.css";
// export const metadata = {
//   title: "Smart Farming Network",
//   description: "A smart agricultural application",
// };
import ClientScripts from "@/components/ClientScripts";
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
