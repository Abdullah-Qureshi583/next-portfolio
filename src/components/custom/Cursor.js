"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppSelector } from "@/lib/hooks";

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorText = useAppSelector((state) => state.cursor.value);
  // const [cursorText, setCursorText] = useState("");

  useGSAP(
    () => {
      gsap.set(cursorRef.current, {
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
      });
    },
    { scope: cursorRef }
  );

  useEffect(() => {
    const moveHandler = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        opacity: 1,
        ease: "back.out",

        delay: 0.02,
      });
    };

    const leaveHandler = () => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        ease: "power3.out",
      });
    };

    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseleave", leaveHandler);

    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseleave", leaveHandler);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0  min-w-3 min-h-3 h-auto w-auto font-semibold text-xl flex text-nowrap rounded-full pointer-events-none z-[50] bg-yellow-500  ${
        cursorText ? "px-4 py-2" : ""
      }`}
    >
      {cursorText && cursorText}
    </div>
  );
};

export default Cursor;
