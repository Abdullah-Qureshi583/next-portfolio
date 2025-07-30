"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAppDispatch } from "@/lib/hooks";
import {
  resetCursorText,
  setCursorText,
} from "@/lib/features/cursor/cursorSclice";

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-subtitle",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-[300vh] flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 -z-10" />

      <div className="max-w-4xl mx-auto px-4 text-center" ref={contentRef}>
        <h1
          onMouseEnter={() => dispatch(setCursorText("Zoomed"))}
          onMouseLeave={() => dispatch(resetCursorText())}
          className="hero-title text-6xl md:text-9xl cursor-pointer font-bold mb-6"
        >
          <span className="gradient-text">John Doe</span>
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Full Stack Developer & Creative Technologist
        </p>
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="gradient" size="xl">
            View My Work
          </Button>
          <Button variant="outline" size="xl">
            Get In Touch
          </Button>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
