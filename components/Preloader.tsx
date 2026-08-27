"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
      },
    });

    // 0 to 100% width
    tl.to(barRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
    });

    // Fade out text and bar
    tl.to([textRef.current, barRef.current], {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    // Scale down and fade out preloader
    tl.to(containerRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, { scope: containerRef });

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
    >
      <div ref={textRef} className="text-4xl font-light tracking-widest mb-8">
        Hello
      </div>
      <div className="w-64 h-1 bg-glass-border overflow-hidden rounded-full">
        <div ref={barRef} className="h-full bg-neon-blue w-0"></div>
      </div>
    </div>
  );
}
