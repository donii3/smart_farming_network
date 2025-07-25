'use client';

import { Suspense } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import loading from "../loading";

export default function PublicLayout({ children }) {
  return (
    <div id="public-layout">
      <Suspense fallback={<loading />}>      
        <Preloader />
      </Suspense>
      <Header />
      {children}
      <Footer />

    </div>
  );
}