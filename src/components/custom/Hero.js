// Web Solutions by abdullahdotdevs
// “Crafting fast, modern, and scalable web experiences for growing businesses.

"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

import { useAppDispatch } from "@/lib/hooks";
import {
  resetCursorText,
  setCursorText,
} from "@/lib/features/cursor/cursorSclice";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const dispatch = useAppDispatch();
  const container = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const badgeRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(
    () => {
      // Create timeline for orchestrated animations
      const tl = gsap.timeline({ delay: 0.5 });

      // Badge animation
      tl.from(badgeRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Main heading split text animation
      let headingSplit = SplitText.create(headingRef.current, {
        type: "chars,words,lines",
        linesClass: "line-mask",
      });

      tl.from(
        headingSplit.chars,
        {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.02,
        },
        "-=0.3"
      );

      // Subheading animation
      let subHeadingSplit = SplitText.create(subHeadingRef.current, {
        type: "words",
      });

      tl.from(
        subHeadingSplit.words,
        {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.2"
      );

      // Description animation
      tl.from(
        descriptionRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.1"
      );

      // Buttons animation
      // tl.from(
      //   buttonsRef.current.children,
      //   {
      //     y: 40,
      //     opacity: 0,
      //     duration: 0.6,
      //     ease: "power3.out",
      //     stagger: 0.1,
      //   },
      //   "-=0.3"
      // );

      // Social links animation
      // tl.from(
      //   socialRef.current.children,
      //   {
      //     scale: 0,
      //     opacity: 0,
      //     duration: 0.5,
      //     ease: "back.out(1.7)",
      //     stagger: 0.1,
      //   },
      //   "-=0.2"
      // );

      // Scroll indicator animation
      tl.from(
        scrollIndicatorRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.1"
      );

      // Floating animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });

      // Background elements animation
      gsap.from(".bg-orb", {
        scale: 0,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.3,
        delay: 1,
      });
    },
    { scope: container }
  );

  const handleMouseEnter = (text) => {
    // dispatch(setCursorText(text));
  };

  const handleMouseLeave = () => {
    // dispatch(resetCursorText());
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative flex flex-col   items-center min-h-screen w-full overflow-hidden"
    >
      {/* all text related content */}
      <div className="relative min-h-screen flex flex-col gap-5 w-full text-center items-center pt-[23vh]">
        {/* Status Badge */}
        <div
          ref={badgeRef}
          className="absolute top-0 w-full flex justify-center"
        >
          <Badge
            className="px-6 py-3 bg-white/5 text-white border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => handleMouseEnter("Available for work")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            Available for freelance projects
          </Badge>
        </div>

        {/* Main Heading */}
        {/* <div className=" scale-y-110 overflow-hidden "> */}
        <h1
          ref={headingRef}
          className="h1"
          onMouseEnter={() => handleMouseEnter("Creative Developer")}
          onMouseLeave={handleMouseLeave}
        >
          Creative Developer
        </h1>
        {/* </div> */}

        {/* Subheading */}
        {/* <div className="mb-8 overflow-hidden"> */}
        <h2
          ref={subHeadingRef}
          className="h3 max-w-4xl mx-auto"
          onMouseEnter={() => handleMouseEnter("Full Stack Magic")}
          onMouseLeave={handleMouseLeave}
        >
          Crafting exceptional digital experiences with modern web technologies
        </h2>
        {/* </div> */}

        {/* Description */}
        <div
          ref={descriptionRef}
          className="max-w-3xl mx-auto"
          onMouseEnter={() => handleMouseEnter("About Me")}
          onMouseLeave={handleMouseLeave}
        >
          <p className="paragraph">
            I specialize in React, Next.js, and full-stack development, bringing
            innovative ideas to life through clean code, stunning animations,
            and user-centered design. Let&apos;s build something amazing
            together.
          </p>
        </div>

        {/* lets talk button */}
        <Button
          size="lg"
          className="group px-6 py-4 text-secondary  rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onMouseEnter={() => handleMouseEnter("View Projects")}
          onMouseLeave={handleMouseLeave}
        >
          Let talk
          <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* <div
          // ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-start self-start ml-8 mt-16"
        >
          <Button
            size="lg"
            className="group px-6 py-4 text-secondary  rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onMouseEnter={() => handleMouseEnter("View Projects")}
            onMouseLeave={handleMouseLeave}
          >
            Let talk
            <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm hover:border-white/40 transition-all duration-300"
            onMouseEnter={() => handleMouseEnter("Download CV")}
            onMouseLeave={handleMouseLeave}
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm hover:border-white/40 transition-all duration-300"
            onMouseEnter={() => handleMouseEnter("Download CV")}
            onMouseLeave={handleMouseLeave}
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Developer Mode
          </Button>
        </div> */}

        {/* Social Links
        <div ref={socialRef} className="flex w-full justify-center  gap-6 mt-4">
          {[
            {
              icon: Github,
              href: "https://github.com",
              label: "GitHub",
              text: "GitHub Profile",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              label: "LinkedIn",
              text: "LinkedIn Profile",
            },
            {
              icon: Mail,
              href: "mailto:hello@example.com",
              label: "Email",
              text: "Send Email",
            },
          ].map(({ icon: Icon, href, label, text }) => (
            <a
              key={label}
              href={href}
              className="group p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
              aria-label={label}
              onMouseEnter={() => handleMouseEnter(text)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div> */}

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          onClick={scrollToNext}
          onMouseEnter={() => handleMouseEnter("Scroll Down")}
          onMouseLeave={handleMouseLeave}
          className="flex flex-col cursor-pointer items-center text-gray-400 hover:text-primary mt-12 transition-colors"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>

      {/* Custom CSS for line masking */}
      {/* <style jsx>{`
        .line-mask {
          overflow: hidden;
        }
      `}</style> */}
    </div>
  );
};

export default Hero;
