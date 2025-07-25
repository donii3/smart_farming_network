'use client';

import { Suspense } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "../loading";


export default function AuthLayout({ children }) {
  return (
    <div id="auth-layout">
      <Suspense fallback={<Loading />}>
        <Preloader />
      </Suspense>
      <Header />
      {children}
      <Footer />
      

    </div>
  );
}
