"use client";
import "@/app/globals.css";
import { Suspense, use } from "react";
import Preloader from "@/components/Preloader";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Smart Farming Network",
  description: "A smart agricultural application",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
