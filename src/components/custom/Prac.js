// "use client";
// import React, { useRef, useState } from "react";
// import { gsap } from "gsap";

// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// const Prac = () => {
//   const frontRefs = useRef([]);
//   const backRefs = useRef([]);
//   const [activeLinkIndex, setActiveLinkIndex] = useState(-1);
//   const dotRef = useRef([]);

//   useGSAP(() => {
//     backRefs.current.forEach((ref) => {
//       gsap.set(ref, {
//         yPercent: 100,
//         opacity: 0,
//       });
//     });
//   }, [backRefs]);

//   const animateIn = (wordIdx) => {
//     setActiveLinkIndex(wordIdx);
//     const frontRef = frontRefs.current[wordIdx];
//     const backRef = backRefs.current[wordIdx];

//     if (activeLinkIndex >= 0) return;
//     if (dotRef.current[wordIdx]) {
//       gsap.fromTo(
//         dotRef.current[wordIdx],
//         {
//           scale: 0,
//         },
//         {
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.in",
//         }
//       );
//     }
//     if (!frontRef || !backRef) return;
//     gsap.to(frontRef, {
//       yPercent: -100,
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.in",
//       stagger: 0.1,
//     });
//     gsap.to(backRef, {
//       yPercent: 0,
//       opacity: 1,
//       duration: 0.3,
//       ease: "power2.in",
//       stagger: 0.1,
//     });
//   };
//   const animateOut = (wordIdx) => {
//     setActiveLinkIndex(-1);
//     const frontRef = frontRefs.current[wordIdx];
//     const backRef = backRefs.current[wordIdx];
//     if (!backRef || !frontRef) return;
//     if (dotRef.current[wordIdx]) {
//       gsap.to(dotRef.current[wordIdx], {
//         scale: 0,
//         duration: 0.3,
//         ease: "power2.in",
//       });
//     }
//     gsap.to(frontRef, {
//       yPercent: 0,
//       opacity: 1,
//       duration: 0.3,
//       ease: "power2.in",
//       stagger: 0.1,
//     });
//     gsap.to(backRef, {
//       yPercent: 100,
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.in",
//       stagger: 0.1,
//     });
//   };

//   return (
//     <div className="flex flex-col gap-5 bg-red-300 w-full h-screen justify-center items-center">
//       {["link1", "link2", "link3"].map((word, wordIdx) => (
//         <div
//           key={wordIdx}
//           className="flex flex-col justify-center overflow-hidde px-2 py-1 items-center relative cursor-pointer bg-sky-300"
//           onMouseEnter={() => animateIn(wordIdx)}
//           onMouseLeave={() => animateOut(wordIdx)}
//         >
//           <div
//             ref={(el) => (dotRef.current[wordIdx] = el)}
//             className={`min-h-3 min-w-3 bg-white rounded-full absolute -left-6 ${
//               activeLinkIndex === wordIdx ? "block" : "hidden"
//             }`}
//           ></div>
//           <div
//             // className="absolute top-0 left-0"
//             className="w-full h-full flex items-center justify-center"
//             ref={(el) => (frontRefs.current[wordIdx] = el)}
//           >
//             {word}
//           </div>
//           <div
//             // className="absolute top-0 left-0"
//             className="w-full h-full flex items-center justify-center absolute opacity-0 "
//             ref={(el) => (backRefs.current[wordIdx] = el)}
//           >
//             {word}O
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Prac;

"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Prac = () => {
  const frontRefs = useRef([]);
  const backRefs = useRef([]);
  const [activeLinkIndex, setActiveLinkIndex] = useState(-1);
  const dotRef = useRef([]);

  useGSAP(() => {
    backRefs.current.forEach((innerRefs) => {
      innerRefs.forEach((ref) => {
        // console.log("in the use gsap the ref are : ", ref);
        if (ref) {
          gsap.set(ref, {
            yPercent: 100,
            opacity: 0,
          });
        }
      });
    });
  }, [backRefs]);

  const animateIn = (wordIdx) => {
    if (activeLinkIndex >= 0) return;
    setActiveLinkIndex(wordIdx);

    const frontChars = frontRefs.current[wordIdx];
    const backChars = backRefs.current[wordIdx];
    console.log("char in movein", frontRefs.current, backRefs.current);
    if (!frontChars || !backChars) return;

    if (dotRef.current[wordIdx]) {
      gsap.fromTo(
        dotRef.current[wordIdx],
        { scale: 0 },
        { scale: 1, duration: 0.3, ease: "power2.in" }
      );
    }

    gsap.to(frontChars, {
      yPercent: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.05, // Per character!
    });

    gsap.to(backChars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.05,
    });
  };

  const animateOut = (wordIdx) => {
    setActiveLinkIndex(-1);

    const frontChars = frontRefs.current[wordIdx];
    const backChars = backRefs.current[wordIdx];

    if (!frontChars || !backChars) return;

    if (dotRef.current[wordIdx]) {
      gsap.to(dotRef.current[wordIdx], {
        scale: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }

    gsap.to(frontChars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.05,
    });

    gsap.to(backChars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.05,
    });
  };

  return (
    <div className="flex flex-col gap-5 bg-red-300 w-full h-screen justify-center items-center">
      {["link1", "link2", "link3"].map((word, wordIdx) => (
        <div
          key={wordIdx}
          className="flex flex-col justify-center overflow-hidde px-2 py-1 items-center relative cursor-pointer bg-sky-300"
          onMouseEnter={() => animateIn(wordIdx)}
          onMouseLeave={() => animateOut(wordIdx)}
        >
          {/* dot */}
          <div
            ref={(el) => (dotRef.current[wordIdx] = el)}
            className={`min-h-3 min-w-3 bg-white rounded-full absolute -left-6 ${
              activeLinkIndex === wordIdx ? "block" : "hidden"
            }`}
          ></div>

          {/* Frontref chars */}
          <div
            // className="absolute top-0 left-0"
            className="w-full h-full flex items-center justify-center"
            // ref={(el) => (frontRefs.current[wordIdx] = el)}
          >
            {word.split("").map((char, charIdx) => (
              <span
                key={charIdx}
                ref={(el) => {
                  if (el) {
                    if (!frontRefs.current[wordIdx])
                      frontRefs.current[wordIdx] = [];
                    frontRefs.current[wordIdx][charIdx] = el;
                  }
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Backref chars */}
          <div
            // className="absolute top-0 left-0"
            className="w-full h-full flex items-center justify-center absolute opacity- "
            // ref={(el) => (backRefs.current[wordIdx] = el)}
          >
            {word.split("").map((char, charIdx) => (
              <span
                key={charIdx}
                ref={(el) => {
                  if (el) {
                    if (!backRefs.current[wordIdx])
                      backRefs.current[wordIdx] = [];
                    backRefs.current[wordIdx][charIdx] = el;
                  }
                }}
              >
                {char}
              </span>
            ))}
            <p>o</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prac;
