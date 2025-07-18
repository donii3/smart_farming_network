'use client';

import { Suspense } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PublicLayout({ children }) {
  return (
    <div id="public-layout">
      <Suspense fallback={<div>Loading...</div>}>      
        <Preloader />
      </Suspense>
      <Header />
      {children}
      <Footer />

    </div>
  );
}