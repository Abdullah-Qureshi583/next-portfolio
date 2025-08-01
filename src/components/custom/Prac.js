// //

// "use client";
// import React, { useRef } from "react";
// import { gsap } from "gsap";

// import { useGSAP } from "@gsap/react";
// import { Button } from "../ui/button";

// gsap.registerPlugin(useGSAP);

// const Prac = () => {
//   const panelRef = useRef(null);
//   const tween = useRef(null);

//   useGSAP(() => {
//     const panel = panelRef.current;

//     if (panel) {
//       tween.current = gsap.to(panel, {
//         x: 700,
//         paused: true,
//         // clipPath: "circle(50% at 50% 50%)",
//         clipPath: "circle(0% at 50% 50%)",
//         duration: 3,
//         ease: "power2.out",
//       });
//     }
//   }, []);

//   const handleStart = () => {
//     if (tween.current) {
//       tween.current.play();
//     }
//   };
//   const handleReverse = () => {
//     if (tween.current) {
//       tween.current.reverse();
//     }
//   };
//   const handleStop = () => {
//     if (tween.current) {
//       tween.current.pause();
//     }
//   };

//   return (
//     <div className=" min-h-screen w-full bg-sky-300 flex items-start justify-center flex-col gap-10">
//       <div
//         ref={panelRef}
//         className="min-w-[200px] min-h-[400px] bg-white rounded-lg  p-4 "
//         // style={{ clipPath: "circle(50% at 50% 50%)" }}
//       ></div>
//       <div className="flex gap-16 justify-center w-full items-center">
//         <Button className="" onClick={handleStart}>
//           Start
//         </Button>
//         <Button className="" onClick={handleStop}>
//           Stop
//         </Button>
//         <Button className="" onClick={handleReverse}>
//           Reverse
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Prac;

"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText);

const Prac = () => {
  const container = useRef(null);
  const headingRef = useRef(null);
  useGSAP(() => {
    let split = SplitText.create(headingRef.current, {
      type: "chars,words, lines",
      mask: "lines",
      linesClass: "line++",
    });

    gsap.from(split.chars, {
      // y: 100,
      x: 100,
      opacity: 0,
      duration: 0.7,
      ease: "power4",
      stagger: 0.04,
    });
  });
  return (
    <div
      ref={container}
      className="flex overflow-hidden justify-center items-center min-h-screen w-full"
    >
      <h1 className="text-8xl font-semibold" ref={headingRef}>
        There is the content {" "}
      </h1>
      
    </div>
  );
};

export default Prac;
