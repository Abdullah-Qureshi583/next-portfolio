// ===================== all in one react ====================

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Logo from "./Logo";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const words = ["Work", "Agency", "Studio", "Services"];

// const Navbar = () => {
//   const charRefs = useRef([]); // Array of arrays for each word
//   const timelinesRef = useRef([]); // Stores timelines per word
//   const navContainerRef = useRef(null);

//   const [isActive, setIsActive] = useState(Array(words.length).fill(false)); // isHovered per word

//   // Initial entrance animation on mount
//   useGSAP(() => {
//     const allSpans = charRefs.current.flat();
//     gsap.from(allSpans, {
//       y: -60,
//       opacity: 0,
//       duration: 0.5,
//       stagger: 0.05,
//       ease: "power3.out",
//     });
//   }, []);

//   // Resize font on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (navContainerRef.current) {
//         navContainerRef.current.style.fontSize =
//           window.scrollY > 700 ? "1.1rem" : "1.25rem";
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Add refs to charRefs
//   const addToRefs = (el, wordIdx) => {
//     if (el) {
//       if (!charRefs.current[wordIdx]) {
//         charRefs.current[wordIdx] = [];
//       }
//       if (!charRefs.current[wordIdx].includes(el)) {
//         charRefs.current[wordIdx].push(el);
//       }
//     }
//   };

//   // Animate In
//   const animateIn = (wordIdx) => {
//     const wordSpans = charRefs.current[wordIdx];
//     if (!wordSpans || isActive[wordIdx]) return;

//     // Kill any existing timeline
//     if (timelinesRef.current[wordIdx]) {
//       timelinesRef.current[wordIdx].kill();
//       gsap.set(wordSpans, { clearProps: "all" }); // Reset styles
//     }

//     const tl = gsap.timeline();
//     tl.fromTo(
//       wordSpans,
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.4,
//         stagger: 0.03,
//         ease: "power3.out",
//       }
//     );

//     timelinesRef.current[wordIdx] = tl;

//     // Set active
//     setIsActive((prev) => {
//       const copy = [...prev];
//       copy[wordIdx] = true;
//       return copy;
//     });
//   };

//   // Animate Out
//   const animateOut = (wordIdx) => {
//     const wordSpans = charRefs.current[wordIdx];
//     if (!wordSpans || !isActive[wordIdx]) return;

//     // Kill any existing timeline
//     if (timelinesRef.current[wordIdx]) {
//       timelinesRef.current[wordIdx].kill();
//       gsap.set(wordSpans, { clearProps: "all" });
//     }

//     const tl = gsap.timeline();
//     tl.from(wordSpans, {
//       y: 40,
//       opacity: 0,
//       duration: 0.3,
//       stagger: 0.03,
//       ease: "power3.inOut",
//     });

//     timelinesRef.current[wordIdx] = tl;

//     // Set inactive
//     setIsActive((prev) => {
//       const copy = [...prev];
//       copy[wordIdx] = false;
//       return copy;
//     });
//   };

//   return (
//     <div className="flex justify-between fixed z-[999] top-0 w-full items-start">
//       <div className="flex justify-center items-center size-32">
//         <Logo />
//       </div>

//       <div
//         ref={navContainerRef}
//         className="flex flex-col items-start tracking-wider mt-10 gap-2 mr-14 text-xl transition-all duration-200"
//         style={{ fontSize: "1.25rem" }}
//       >
//         {words.map((item, idx) => (
//           <div
//             key={idx}
//             className="overflow-hidden cursor-pointer  flex items-center "
//             onMouseEnter={() => animateIn(idx)}
//             onMouseLeave={() => animateOut(idx)}
//           >
//             <span className="font-bold rounded-full overflow-hidden mr-2  min-w-2.5 min-h-2.5 bg-white"></span>
//             {item.split("").map((char, charIdx) => (
//               <span
//                 key={charIdx}
//                 ref={(el) => addToRefs(el, idx)}
//                 className="inline-block"
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// ========================================react simple link ====================

    // "use client";
    // import React, { useRef, useEffect } from "react";
    // import { gsap } from "gsap";

    // // Reusable AnimatedLink component
    // const AnimatedLink = ({ linkA, linkB, href }) => {
    //   const frontRef = useRef(null);
    //   const backRef = useRef(null);

    //   useEffect(() => {
    //     gsap.set(backRef.current, { yPercent: 100, autoAlpha: 0 });
    //   }, []);

    //   const handleMouseEnter = () => {
    //     gsap.timeline()
    //       .to(frontRef.current, {
    //         yPercent: -100,
    //         autoAlpha: 0,
    //         duration: 0.3,
    //         ease: "power2.out",
    //       }, 0)
    //       .to(backRef.current, {
    //         yPercent: 0,
    //         autoAlpha: 1,
    //         duration: 0.3,
    //         ease: "power2.out",
    //       }, 0);
    //   };

    //   const handleMouseLeave = () => {
    //     gsap.timeline()
    //       .to(backRef.current, {
    //         yPercent: 100,
    //         autoAlpha: 0,
    //         duration: 0.3,
    //         ease: "power2.in",
    //       }, 0)
    //       .to(frontRef.current, {
    //         yPercent: 0,
    //         autoAlpha: 1,
    //         duration: 0.3,
    //         ease: "power2.in",
    //       }, 0);
    //   };

    //   return (
    //     <a
    //       href={href}
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //       className="relative w-fit h-12 px-6 bg-green-300 overflow-hidden flex items-center justify-center font-semibold text-lg cursor-pointer rounded-md mx-4"
    //     >
    //       <span
    //         ref={frontRef}
    //         className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    //       >
    //         {linkA}
    //       </span>
    //       <span
    //         ref={backRef}
    //         className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    //       >
    //         {linkB}
    //       </span>
    //     </a>
    //   );
    // };

    // // Main Navbar component with map
    // const Navbar = () => {
    //   const links = [
    //     { id: 1, linkA: "Home", linkB: "Start", href: "#" },
    //     { id: 2, linkA: "About", linkB: "Story", href: "#" },
    //     { id: 3, linkA: "Contact", linkB: "Email", href: "#" },
    //     { id: 4, linkA: "Blog", linkB: "Read", href: "#" },
    //   ];

    //   return (
    //     <div className="w-full h-screen flex justify-center items-center bg-gray-100">
    //       <div className="flex">
    //         {links.map(({ id, linkA, linkB, href }) => (
    //           <AnimatedLink key={id} linkA={linkA} linkB={linkB} href={href} />
    //         ))}
    //       </div>
    //     </div>
    //   );
    // };

    // export default Navbar;



