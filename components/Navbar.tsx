"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { List, X, Sun, Moon } from "@phosphor-icons/react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import BorderGlow from "./BorderGlow";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { yPercent: -150, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 2.5 }
    );

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        gsap.to(navRef.current, { yPercent: -150, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(navRef.current, { yPercent: 0, duration: 0.3, ease: "power2.out" });
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        ".mobile-link",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out", delay: 0.1 }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    
    gsap.to(currentTarget, { x, y, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <>
      <div
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-5xl"
      >
        <BorderGlow
          className="rounded-full w-full"
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="transparent"
          borderRadius={9999}
          glowRadius={20}
          glowIntensity={1}
          coneSpread={25}
          animated={false}
          colors={['#ffb800', '#ff0055', '#ff6a00']}
          fillOpacity={0}
        >
          <header
            className="w-full glass-nav rounded-full px-6 py-4 flex items-center justify-between shadow-2xl shadow-black/10 dark:shadow-black/50"
          >
            <div className="font-bold text-xl tracking-tight text-foreground relative group cursor-pointer">
              <span className="text-neon-blue group-hover:animate-pulse-glow">A</span>G
            </div>

            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all duration-300 inline-block px-4 py-2"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-all"
                >
                  {theme === 'dark' ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
                </button>
              )}

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:bg-neon-blue hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,106,0,0.6)] group"
              >
                GET IN TOUCH
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(true)}
            >
              <List size={28} />
            </button>
          </header>
        </BorderGlow>
      </div>

      <div
        className={clsx(
          "fixed inset-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-opacity duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-8 right-8 text-foreground hover:text-neon-pink transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link text-4xl font-light text-black/80 dark:text-white/80 hover:text-neon-blue dark:hover:text-neon-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                setIsOpen(false);
              }}
              className="mobile-link mt-8 flex items-center gap-2 text-xl font-light text-black/80 dark:text-white/80 hover:text-neon-blue"
            >
              {theme === 'dark' ? <><Sun size={24} /> Light Mode</> : <><Moon size={24} /> Dark Mode</>}
            </button>
          )}
        </nav>
      </div>
    </>
  );
}
