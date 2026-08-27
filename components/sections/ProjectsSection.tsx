"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "@phosphor-icons/react";

const featuredProjects = [
  {
    id: "01",
    title: "PROJECT ALPHA",
    category: "Fullstack Web Application",
    image: "/images/project-1.png",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    link: "#"
  },
  {
    id: "02",
    title: "PROJECT BETA",
    category: "Interactive Dashboard",
    image: "/images/project-2.png",
    tags: ["React", "GSAP", "Node.js"],
    link: "#"
  },
  {
    id: "03",
    title: "PROJECT GAMMA",
    category: "AI Data Platform",
    image: "/images/project-3.png",
    tags: ["Python", "FastAPI", "Vue.js"],
    link: "#"
  },
  {
    id: "04",
    title: "PROJECT DELTA",
    category: "E-Commerce Experience",
    image: "/images/project-1.png",
    tags: ["Next.js", "Stripe", "Framer Motion"],
    link: "#"
  },
  {
    id: "05",
    title: "PROJECT EPSILON",
    category: "Creative Agency Site",
    image: "/images/project-2.png",
    tags: ["Three.js", "GSAP", "WebGL"],
    link: "#"
  },
  {
    id: "06",
    title: "PROJECT ZETA",
    category: "Mobile First FinTech App",
    image: "/images/project-3.png",
    tags: ["React Native", "Expo", "Firebase"],
    link: "#"
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    const validCards = cardsRef.current.filter(Boolean);
    const validHeaderChildren = headerRef.current?.children ? Array.from(headerRef.current.children) : [];

    if (validHeaderChildren.length > 0) {
      tl.fromTo(
        validHeaderChildren,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }
      );
    }

    if (validCards.length > 0) {
      tl.fromTo(
        validCards,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }
  }, { scope: sectionRef });

  return (
    <section id="projects" ref={sectionRef} className="py-32 w-full relative z-10 overflow-hidden">
      
      {/* Dynamic Ambient Gradient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent"></div>
      </div>

      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-black/50 dark:text-white/50 mb-4 uppercase">Featured Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black/90 dark:text-white/90">
              Building <span className="font-light italic text-neon-blue">meaningful</span> digital experiences
            </h3>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white uppercase group whitespace-nowrap">
            View All Projects
            <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="w-full relative z-10 pl-6 md:pl-0 md:max-w-7xl md:mx-auto">
        <div 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group block min-w-[300px] md:min-w-[400px] lg:min-w-[450px] w-[80vw] md:w-[450px] rounded-[2rem] overflow-hidden glass-panel border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,106,0,0.15)] flex flex-col snap-center shrink-0"
            >
              {/* Mockup Image */}
              <div className="relative aspect-[4/3] w-full bg-black/5 dark:bg-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent opacity-60 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex-1 flex flex-col relative z-20 bg-white dark:bg-[#0a0a0a]">
                <span className="text-sm font-mono text-neon-blue mb-4 opacity-70">{project.id}</span>
                <h4 className="text-2xl font-bold text-black/90 dark:text-white/90 mb-2">{project.title}</h4>
                <p className="text-black/50 dark:text-white/50 mb-8 flex-1">{project.category}</p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-medium text-black/70 dark:text-white/70 border border-black/5 dark:border-transparent">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:bg-neon-blue group-hover:text-white dark:group-hover:text-black transition-colors duration-300 shrink-0 ml-4">
                    <ArrowRight size={20} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Style to hide scrollbar across browsers */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
