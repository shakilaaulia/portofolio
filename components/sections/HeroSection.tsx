"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import KineticGrid from "@/components/ui/KineticGrid";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  { text: "AULIA", stroke: false },
  { text: "UI/UX\nDESIGNER", stroke: true },
  { text: "SOFTWARE\nENGINEER", stroke: true },
  { text: "DATA\nENTHUSIAST", stroke: true },
];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[index];

  return (
    <div className="h-[20vw] md:h-[15vw] flex items-center justify-start w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={`font-bold leading-none tracking-tighter select-none flex flex-wrap justify-start text-left ${
            currentRole.stroke
              ? "text-transparent [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_black] md:dark:[-webkit-text-stroke:2px_white] text-[7vw] md:text-[8vw] max-w-[90vw]"
              : "text-transparent bg-clip-text bg-gradient-to-b from-black to-black/10 dark:from-white dark:to-white/10 text-[12vw] md:text-[12vw]"
          }`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0.3 } }
          }}
        >
          {currentRole.text.split("").map((char, i) => (
            char === '\n' ? <div key={i} className="w-full h-0" /> :
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, display: "none" },
                visible: { opacity: 1, display: "inline-block" }
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

import dynamic from 'next/dynamic';
const Lanyard = dynamic(() => import('@/components/ui/Lanyard'), { ssr: false });

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef1 = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 }); 

    tl.fromTo(
      headlineRef1.current,
      { opacity: 0, y: 80, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
    );

    tl.fromTo(
      visualRef.current,
      { opacity: 0, y: 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    );

    tl.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    );

    tl.fromTo(
      statsRef.current?.children ? Array.from(statsRef.current.children) : [],
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    const xTo = gsap.quickTo(visualRef.current, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(visualRef.current, "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; 
      const y = (e.clientY / innerHeight - 0.5) * 30;
      xTo(x);
      yTo(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      <KineticGrid className="absolute inset-0 z-0 opacity-80 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />

      <div className="absolute inset-y-0 right-[5vw] w-[50vw] z-10 pointer-events-auto hidden md:block">
        <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} frontImage="/images/profile.png" />
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-center z-20 pointer-events-none text-left opacity-90 pl-8 md:pl-24 w-full md:w-2/3">
        <h1 ref={headlineRef1} className="text-[12vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black to-black/10 dark:from-white dark:to-white/10 select-none">
          SHAKILA
        </h1>
        <RotatingRole />
        <div ref={buttonsRef} className="mt-4 flex flex-col sm:flex-row items-center justify-start gap-4 pointer-events-auto">
          <a href="#contact" className="px-8 py-3 rounded-full bg-neon-blue text-black font-semibold hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,106,0,0.6)] transition-all">
            Contact Me
          </a>
          <a href="/cv.pdf" target="_blank" className="px-8 py-3 rounded-full border border-black/20 dark:border-white/20 text-black dark:text-white font-semibold hover:border-neon-blue hover:text-neon-blue transition-all backdrop-blur-sm">
            Download My CV
          </a>
        </div>
      </div>

      <div ref={statsRef} className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex-col gap-12 z-20 hidden md:flex items-end text-right pointer-events-none">
        <div className="flex flex-col gap-1">
          <span className="text-5xl font-bold text-neon-blue drop-shadow-[0_0_10px_rgba(255,106,0,0.5)] dark:drop-shadow-[0_0_10px_rgba(255,106,0,0.8)]">3+</span>
          <span className="text-[10px] tracking-widest text-black/50 dark:text-white/50 uppercase font-medium">Years Experience</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-5xl font-bold text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,85,0.5)] dark:drop-shadow-[0_0_10px_rgba(255,0,85,0.8)]">30+</span>
          <span className="text-[10px] tracking-widest text-black/50 dark:text-white/50 uppercase font-medium">Projects Done</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-5xl font-bold text-neon-purple drop-shadow-[0_0_10px_rgba(255,184,0,0.5)] dark:drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]">100%</span>
          <span className="text-[10px] tracking-widest text-black/50 dark:text-white/50 uppercase font-medium">Creative Drive</span>
        </div>
      </div>

      <div className="absolute bottom-8 w-full overflow-hidden border-y border-black/5 dark:border-white/5 py-4 bg-white/50 dark:bg-black/20 backdrop-blur-md z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center mr-8">
              <span className="text-sm font-medium tracking-widest text-black/70 dark:text-white/70">FULL STACK DEVELOPER</span>
              <span className="text-neon-blue text-xs">✦</span>
              <span className="text-sm font-medium tracking-widest text-black/70 dark:text-white/70">WEB DESIGNER</span>
              <span className="text-neon-pink text-xs">✦</span>
              <span className="text-sm font-medium tracking-widest text-black/70 dark:text-white/70">ANIMATION SPECIALIST</span>
              <span className="text-neon-purple text-xs">✦</span>
              <span className="text-sm font-medium tracking-widest text-black/70 dark:text-white/70">UI/UX INNOVATION</span>
              <span className="text-neon-blue text-xs">✦</span>
              <span className="text-sm font-medium tracking-widest text-black/70 dark:text-white/70">CREATIVE CODE</span>
              <span className="text-neon-pink text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
