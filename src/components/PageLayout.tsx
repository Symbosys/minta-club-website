"use client";

import { Header, Footer } from "../app/page";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#FAF8F4] to-[#FDFBF7]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Legal
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-[#0A0A0A] leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-slate max-w-none">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

