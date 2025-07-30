"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ----------------- Main Navbar Component -----------------
const Navbar = () => {
  const navContainerRef = useRef(null);

  // Resize font on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (navContainerRef.current) {
  //       navContainerRef.current.style.fontSize =
  //         window.scrollY > 700 ? "1.1rem" : "1.25rem";
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="flex justify-between fixed z-[999] top-0 w-full items-start">
      <div className="flex justify-center items-center size-32">
        <Logo />
      </div>

      <div
        ref={navContainerRef}
        className="flex flex-col items-start tracking-wider mt-10 gap-2 mr-14 text-xl transition-all duration-200"
        style={{ fontSize: "1.25rem" }}
      >
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;

// ----------------- NavLinks Component -----------------
const NavLinks = () => {
  const words = ["Work", "Agency", "Studio", "Services"];
  const charRefs = useRef([]);
  const timelinesRef = useRef([]);
  const [isActive, setIsActive] = useState(Array(words.length).fill(false));

  // Initial load animation
  // useGSAP(() => {
  //   const allSpans = charRefs.current.flat();
  //   gsap.from(allSpans, {
  //     y: -60,
  //     opacity: 0,
  //     duration: 0.5,
  //     stagger: 0.05,
  //     ease: "power3.out",
  //   });
  // }, []);

  const addToRefs = (el, wordIdx) => {
    if (el) {
      if (!charRefs.current[wordIdx]) charRefs.current[wordIdx] = [];
      if (!charRefs.current[wordIdx].includes(el)) {
        charRefs.current[wordIdx].push(el);
      }
    }
  };

  return (
    <>
      {words.map((word, idx) => (
        <NavLinkItem
          key={idx}
          word={word}
          wordIdx={idx}
          isActive={isActive}
          setIsActive={setIsActive}
          charRefs={charRefs}
          timelinesRef={timelinesRef}
          addToRefs={addToRefs}
        />
      ))}
    </>
  );
};

// ----------------- NavLinkItem Component -----------------

const NavLinkItem = ({
  word,
  wordIdx,
  isActive,
  setIsActive,
  charRefs,
  timelinesRef,
  addToRefs,
}) => {
  const frontRefs = useRef([]);
  const backRefs = useRef([]);

  useEffect(() => {
    gsap.set(backRefs.current[wordIdx], { yPercent: 100, autoAlpha: 0 });
  }, []);

  // const animateIn = () => {
  //   const spans = charRefs.current[wordIdx];
  //   if (!spans || isActive[wordIdx]) return;

  //   console.log("IN the prev animate in : ", spans)
  //   if (timelinesRef.current[wordIdx]) {
  //     timelinesRef.current[wordIdx].kill();
  //     gsap.set(spans, { clearProps: "all" });
  //   }

  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     spans,
  //     { y: 40, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.4,
  //       stagger: 0.03,
  //       ease: "power3.out",
  //     }
  //   );

  //   timelinesRef.current[wordIdx] = tl;

  //   setIsActive((prev) => {
  //     const copy = [...prev];
  //     copy[wordIdx] = true;
  //     return copy;
  //   });
  // };

  // const animateOut = () => {
  //   const spans = charRefs.current[wordIdx];
  //   if (!spans || !isActive[wordIdx]) return;

  //   if (timelinesRef.current[wordIdx]) {
  //     timelinesRef.current[wordIdx].kill();
  //     gsap.set(spans, { clearProps: "all" });
  //   }

  //   const tl = gsap.timeline();
  //   tl.from(spans, {
  //     y: 40,
  //     opacity: 0,
  //     duration: 0.3,
  //     stagger: 0.03,
  //     ease: "power3.inOut",
  //   });

  //   timelinesRef.current[wordIdx] = tl;

  //   setIsActive((prev) => {
  //     const copy = [...prev];
  //     copy[wordIdx] = false;
  //     return copy;
  //   });
  // };

  // return (
  //   <div
  //     className="overflow-hidden cursor-pointer flex items-center"
  //     onMouseEnter={animateIn}
  //     onMouseLeave={animateOut}
  //   >
  //     <span className="font-bold rounded-full overflow-hidden mr-2 min-w-2.5 min-h-2.5 bg-white"></span>
  //     {word.split("").map((char, idx) => (
  //       <span
  //         key={idx}
  //         ref={(el) => addToRefs(el, wordIdx)}
  //         className="inline-block"
  //       >
  //         {char}
  //       </span>
  //     ))}
  //   </div>
  // );
  // ======================================================

  const animateIn = () => {
    const front = frontRefs.current[wordIdx];
    const back = backRefs.current[wordIdx];
    if (!front || !back) return;

    const frontChars = Array.from(front.children);
    const backChars = Array.from(back.children);

    console.log("frontChars in ", frontChars);
    console.log("backChars in", backChars);
    gsap
      .timeline()
      .to(
        frontChars,
        {
          yPercent: -100,
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.out",

          stagger: 0.1,
        },
        0
      )
      .to(
        backChars,
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.3,
          ease: "power2.out",

          stagger: 0.1,
        },
        0
      );
  };

  const animateOut = () => {
    const front = frontRefs.current[wordIdx];
    const back = backRefs.current[wordIdx];
    if (!front || !back) return;


    const frontChars = Array.from(front.children);
    const backChars = Array.from(back.children);

    console.log("frontChars Out ", frontChars);
    console.log("backChars Out", backChars);
    gsap
      .timeline()
      .to(
        backChars,
        {
          yPercent: 100,
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.in",
          stagger: 0.1,
        },
        0
      )
      .to(
        frontChars,
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.3,
          ease: "power2.in",
          stagger: 0.1,
        },
        0
      );
  };

  return (
    <div
      className="overflow-y-hidden cursor-pointer flex flex-col items-center relative "
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      {/* <p>hey thre is somehting</p> */}

      {/* Front layer */}
      <span
        className=" absolute top-0 left-0 w-full h-full flex justify-center items-center "
        // className=" w-full h-full flex items-center"
        ref={(el) => (frontRefs.current[wordIdx] = el)}
      >
        {word.split("").map((char, idx) => (
          <span
            key={idx}
            ref={(el) => addToRefs(el, wordIdx)}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </span>

      {/* Back layer */}

      <span
        className="relative w-full h-full flex items-center"
        ref={(el) => (backRefs.current[wordIdx] = el)}
      >
        {/* <span className="font-bold rounded-full  mr-3 min-w-2.5  min-h-2.5 bg-white " /> */}
        {word.split("").map((char, idx) => (
          <span key={idx} className="inline-block">
            {char}
          </span>
        ))}
      </span>
    </div>
  );
};
