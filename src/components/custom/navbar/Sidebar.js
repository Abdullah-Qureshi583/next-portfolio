"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import gsap from "gsap";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;

    if (open && panel) {
      // Reset to initial state
      gsap.set(panel, {
        scaleX: 0,
        transformOrigin: "left center",
        borderRadius: "50px",
      });

      gsap.to(panel, {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
        borderRadius: "0px",
      });
    } else if (panel) {
      gsap.to(panel, {
        scaleX: 0,
        duration: 0.5,
        ease: "power2.in",
        borderRadius: "50px",
      });
    }
  }, [open, panelRef]);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Sheet onOpenChange={setOpen}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">
          <div
            ref={panelRef}
            className="w-full h-full bg-[#1e1e1e] text-white origin-left overflow-hidden"
          >
            <SheetHeader className="p-4">
              <SheetTitle>Animated Sidebar</SheetTitle>
              <SheetDescription>
                Sidebar animates from the center with rounded vertical edges.
              </SheetDescription>
            </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
