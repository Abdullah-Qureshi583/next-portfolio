"use client";
import Hero from "@/components/custom/Hero";
import React, { useEffect } from "react";
import Lenis from "lenis";
const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
};

export default Home;
