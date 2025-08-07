"use client";
import Hero from "@/components/custom/Hero";
import React, { useEffect } from "react";
import Lenis from "lenis";
import Practice from "@/components/custom/Prac";
import About from "@/components/custom/About";

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
      <About />
      {/* <Practice /> */}
    </main>
  );
};

export default Home;
