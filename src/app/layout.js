import "@/app/globals.css";
// export const metadata = {
//   title: "Smart Farming Network",
//   description: "A smart agricultural application",
// };
import ClientScripts from "@/components/ClientScripts";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>        
        <div id="app-root">
          {children}
          <ClientScripts />
        </div>
      </body>
    </html>
  );
}
