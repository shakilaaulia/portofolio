"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LinkedinLogo, GithubLogo, TwitterLogo, DribbbleLogo, InstagramLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full overflow-hidden border-t border-black/5 dark:border-white/5 pt-24 pb-8 mt-20">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full blur-[2px] animate-pulse-glow"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-neon-pink rounded-full blur-[3px] animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-neon-purple rounded-full blur-[1px] animate-pulse-glow" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-black/50 dark:bg-white/50 rounded-full blur-[2px] animate-pulse-glow" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-neon-blue/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <div className="font-bold text-3xl tracking-tight text-black dark:text-white mb-6">
              <span className="text-neon-blue">S</span>A
            </div>
            <p className="text-black/50 dark:text-white/50 max-w-sm leading-relaxed text-sm">
              Bridging the gap between technology, creativity, and user experience to build meaningful digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-black dark:text-white font-bold mb-6 tracking-wider uppercase text-xs opacity-70">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="text-sm font-medium text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors relative group inline-block"><span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>Home</a></li>
              <li><a href="#about" className="text-sm font-medium text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors relative group inline-block"><span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>About</a></li>
              <li><a href="#projects" className="text-sm font-medium text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors relative group inline-block"><span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>Projects</a></li>
              <li><a href="#contact" className="text-sm font-medium text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors relative group inline-block"><span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black dark:text-white font-bold mb-6 tracking-wider uppercase text-xs opacity-70">Let's Connect</h4>
            <div className="flex gap-4">
              <a href="www.linkedin.com/in/shakilaaulianr" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/70 dark:text-white/70 hover:bg-[#0A66C2] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(10,102,194,0.5)] transition-all duration-300">
                <LinkedinLogo size={24} weight="fill" />
              </a>
              <a href="https://github.com/shakilaaulia" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/70 dark:text-white/70 hover:bg-[#000000] dark:hover:bg-[#ffffff] hover:text-white dark:hover:text-black hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
                <GithubLogo size={24} weight="fill" />
              </a>
              <a href="https://www.instagram.com/shakilaauliaa/" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/70 dark:text-white/70 hover:bg-[#1DA1F2] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(29,161,242,0.5)] transition-all duration-300">
                <InstagramLogoIcon size={24} weight="fill" />
              </a>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/10 dark:border-white/10 gap-4">
          <p className="text-black/40 dark:text-white/40 text-xs font-medium">
            © {new Date().getFullYear()} Shakila Aulia
          </p>
          <div className="flex gap-6 text-xs font-medium text-black/40 dark:text-white/40">
          </div>
        </div>

      </div>
    </footer>
  );
}
