"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PaperPlaneRight, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import BorderGlow from "../BorderGlow";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = `Pesan dari ${name} (Portofolio)`;
    const body = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
    
    window.location.href = `mailto:shakila.aulianurrul@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(
      containerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      elementsRef.current.filter(Boolean),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: sectionRef });

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 max-w-7xl mx-auto w-full relative z-10">
      <div ref={containerRef}>
        <BorderGlow
          className="rounded-[2rem] md:rounded-[3rem] w-full"
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="transparent"
          borderRadius={48}
          glowRadius={40}
          glowIntensity={1}
          coneSpread={25}
          animated={false}
          colors={['#ffb800', '#ff0055', '#ff6a00']}
          fillOpacity={0}
        >
          <div className="glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-16 lg:gap-8 w-full">
            
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            {/* Left/Center Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 ref={(el) => { elementsRef.current[0] = el; }} className="text-xs font-bold tracking-[0.2em] text-black/50 dark:text-white/50 mb-6 uppercase">
                  Have a project in mind?
                </h2>
                <h3 ref={(el) => { elementsRef.current[1] = el; }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/90 dark:text-white/90 mb-12 leading-tight">
                  Let's build something <span className="font-light italic text-neon-blue">meaningful</span> together.
                </h3>
              </div>
              
              <div ref={(el) => { elementsRef.current[2] = el; }} className="flex flex-col gap-6">
                <a href="mailto:shakila.aulianurrul@gmail.com" className="flex items-center gap-4 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors group w-fit">
                  <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-neon-blue group-hover:text-neon-blue transition-colors">
                    <EnvelopeSimple size={24} />
                  </div>
                  <span className="text-lg font-medium">shakila.aulianurrul@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-black/70 dark:text-white/70">
                  <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <span className="text-lg font-medium">Global / Remote</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="flex-1 lg:max-w-md w-full relative z-10">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div ref={(el) => { elementsRef.current[3] = el; }} className="flex flex-col md:flex-row gap-6">
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Name" 
                    className="w-full bg-white/40 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 outline-none text-black dark:text-white focus:border-neon-blue focus:shadow-[0_0_15px_rgba(255,106,0,0.2)] transition-all placeholder:text-black/30 dark:placeholder:text-white/30"
                  />
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Email" 
                    className="w-full bg-white/40 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 outline-none text-black dark:text-white focus:border-neon-blue focus:shadow-[0_0_15px_rgba(255,106,0,0.2)] transition-all placeholder:text-black/30 dark:placeholder:text-white/30"
                  />
                </div>
                
                <textarea 
                  name="message"
                  required
                  ref={(el) => { elementsRef.current[4] = el; }}
                  placeholder="Tell me about your project" 
                  rows={5}
                  className="w-full bg-white/40 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 outline-none text-black dark:text-white focus:border-neon-blue focus:shadow-[0_0_15px_rgba(255,106,0,0.2)] transition-all placeholder:text-black/30 dark:placeholder:text-white/30 resize-none"
                ></textarea>
                
                <button 
                  type="submit"
                  ref={(el) => { elementsRef.current[5] = el; }}
                  className="w-full bg-black text-white dark:bg-white dark:text-black font-bold text-lg rounded-xl px-6 py-5 flex items-center justify-center gap-3 hover:bg-neon-blue hover:text-white dark:hover:text-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,106,0,0.4)] transition-all duration-300 group"
                >
                  SEND MESSAGE
                  <PaperPlaneRight size={24} weight="fill" className="transform transition-transform group-hover:translate-x-1 -translate-y-0.5" />
                </button>
              </form>
            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}
