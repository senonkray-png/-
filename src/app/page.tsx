"use client";

import { useEffect } from "react";
import type Lenis from "@studio-freight/lenis";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    let lenis: Lenis | undefined;

    const initLenis = async () => {
      const { default: LenisClass } = await import("@studio-freight/lenis");
      lenis = new LenisClass({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        if (lenis) lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Competencies />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
}
