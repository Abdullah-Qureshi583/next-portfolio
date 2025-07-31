"use client";
import Hero from "@/components/custom/Hero";
import React, { useEffect } from "react";
import Lenis from "lenis";
import Practice from "@/components/custom/Prac";

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
      {/* <Practice /> */}
    </main>
  );
};

export default Home;
