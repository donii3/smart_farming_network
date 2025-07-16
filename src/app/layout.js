
import "@/app/globals.css";

// export const metadata = {
//   title: "Smart Farming Network",
//   description: "A smart agricultural application",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        
        {children}

      </body>
    </html>
  );
}
