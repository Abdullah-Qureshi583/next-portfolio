"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ----------------- Main Navbar Component -----------------
const Navbar = () => {
  const words = ["Work", "Agency", "Studio", "Services"];
  const frontRefs = useRef([]);
  const backRefs = useRef([]);
  const [activeLinkIndex, setActiveLinkIndex] = useState(-1);
  const dotRef = useRef([]);
  const underlineRef = useRef([]);
  const navContainerRef = useRef(null);

  // Resize font on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (navContainerRef.current) {
        navContainerRef.current.style.fontSize =
          window.scrollY > 700 ? "1.1rem" : "1.25rem";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    // Initial entrance animation on mount
    frontRefs.current.forEach((innerRefs) => {
      if (innerRefs && innerRefs.length) {
        gsap.from(innerRefs, {
          y: -80,
          opacity: 0,
          duration: 0.2,
          stagger: 0.04,
          ease: "power3.out",
        });
      }
    });

    // Set initial state for backRefs as a fallback
    backRefs.current.forEach((innerRefs) => {
      if (innerRefs && innerRefs.length) {
        gsap.set(innerRefs, {
          yPercent: 100,
          opacity: 0,
        });
      }
    });
  }, []);

  const animateIn = (wordIdx) => {
    if (activeLinkIndex >= 0) return;
    setActiveLinkIndex(wordIdx);

    const frontChars = frontRefs.current[wordIdx];
    const backChars = backRefs.current[wordIdx];

    if (!frontChars || !backChars) return;

    // Cancel any ongoing animations on these elements
    gsap.killTweensOf([frontChars, backChars, dotRef.current[wordIdx]]);

    if (dotRef.current[wordIdx]) {
      gsap.fromTo(
        dotRef.current[wordIdx],
        { scale: 0 },
        { scale: 1, duration: 0.2, ease: "power2.in" }
      );
    }
    if (underlineRef.current[wordIdx]) {
      gsap.fromTo(
        underlineRef.current[wordIdx],
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.3, ease: "power2.out" }
      );
    }

    gsap.to(frontChars, {
      yPercent: -100,
      opacity: 0,
      duration: 0.2,
      ease: "expo.out",
      stagger: 0.02,
    });

    gsap.to(backChars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.2,
      ease: "expo.out",
      stagger: 0.02,
    });
  };

  const animateOut = (wordIdx) => {
    setActiveLinkIndex(-1);

    const frontChars = frontRefs.current[wordIdx];
    const backChars = backRefs.current[wordIdx];

    if (!frontChars || !backChars) return;

    // Stop any in-progress animations
    gsap.killTweensOf([frontChars, backChars, dotRef.current[wordIdx]]);

    if (dotRef.current[wordIdx]) {
      gsap.to(dotRef.current[wordIdx], {
        scale: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }

    if (underlineRef.current[wordIdx]) {
      gsap.to(underlineRef.current[wordIdx], {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.3,
        ease: "power2.out",
      });
    }

    gsap.to(frontChars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.2,
      ease: "expo.out",
      stagger: 0.02,
    });

    gsap.to(backChars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.2,
      ease: "expo.out",
      stagger: 0.02,
    });
  };

  return (
    <div className="flex justify-between fixed z-[999] top-0 w-full items-start">
      <div className="flex justify-center items-center size-32">
        <Logo />
      </div>

      <div
        ref={navContainerRef}
        className="flex flex-col items-start tracking-wider mt-10 gap-2 mr-20 text-xl transition-all duration-200"
        style={{ fontSize: "1.25rem" }}
      >
        {words.map((word, idx) => (
          <div
            key={idx}
            className=" overflow-hidden cursor-pointer flex flex-col items-center relative pl-5"
            onMouseEnter={() => animateIn(idx)}
            onMouseLeave={() => animateOut(idx)}
          >
            <div
              ref={(el) => (dotRef.current[idx] = el)}
              className={`min-h-2.5 min-w-2.5 bg-black rounded-full absolute left-0 top-[50%] ${
                activeLinkIndex === idx ? "block" : "hidden"
              }`}
              style={{
                transform: "translateY(-50%)",
              }}
            ></div>

            {/* Front layer */}
            <div className="w-full h-full flex items-center justify-center">
              {word.split("").map((char, charIdx) => (
                <span
                  className="inline-block"
                  key={charIdx}
                  ref={(el) => {
                    if (el) {
                      if (!frontRefs.current[idx]) frontRefs.current[idx] = [];
                      frontRefs.current[idx][charIdx] = el;
                    }
                  }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Back layer */}
            <div className="w-full absolute h-full flex items-center justify-center">
              {word.split("").map((char, charIdx) => (
                <span
                  className="inline-block"
                  key={charIdx}
                  ref={(el) => {
                    if (el) {
                      if (!backRefs.current[idx]) backRefs.current[idx] = [];
                      backRefs.current[idx][charIdx] = el;
                    }
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
            <div
              ref={(el) => (underlineRef.current[idx] = el)}
              className={` bg-black underline rounded-full absolute left-5 bottom-0 h-[2px] w-full
                 ${activeLinkIndex === idx ? "block" : "hidden"}
                `}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
