'use client';

import { Suspense } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function AuthLayout({ children }) {
  return (
    <div id="auth-layout">
      <Suspense fallback={<div>Loading...</div>}>
        <Preloader />
      </Suspense>
      <Header />
      {children}
      <Footer />
      

    </div>
  );
}
