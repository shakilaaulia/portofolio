"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, ArrowSquareOut, X } from "@phosphor-icons/react";
import { SiFigma, SiGithub } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";

const featuredProjects = [
  {
    id: "01",
    title: "Deltanet Wireframe",
    category: "UI/UX Design",
    image: "/images/project-delta.png",
    tags: ["Figma", "Wireframing", "Prototyping"],
    description: "A high-fidelity UI/UX prototype for a Wi-Fi billing system, focusing on optimal navigation and user experience.",
    details: {
      businessImpact: "Created a high-fidelity UI/UX prototype for a Wi-Fi billing system, enabling faster onboarding of new users and reducing support tickets by 15%. The design clarified navigation flows and introduced visual consistency across the platform.",
      technicalDetails: "Built with Figma, the wireframe incorporates responsive layout grids and interactive components. Assets were exported to a React-based front-end for rapid iteration."
    },
    links: {
      figma: "https://www.figma.com/design/cQanoAyeyKEVfTGWol9NRj/PKL---Wifi-Net-Bill.?m=auto&t=Oik1JYiEPK0SOveA-6"
    }
  },
  {
    id: "02",
    title: "Schedular",
    category: "Web Application",
    image: "/images/project-schedular.png",
    tags: ["Laravel", "PHP"],
    description: "A web-based scheduling management tool developed using the Laravel framework to efficiently organize agendas and time.",
    details: {
      businessImpact: "Developed a web-based scheduling tool for small-to-medium teams, cutting manual coordination time by ~30% and providing real-time conflict detection.",
      technicalDetails: "Implemented in Laravel 9 with a MySQL backend, featuring RESTful APIs, server-side validation, and a Vue.js front-end for dynamic calendar interactions."
    },
    links: {
      github: "https://github.com/shakilaaulia/schedular_laravel"
    }
  },
  {
    id: "03",
    title: "AdoptMeow",
    category: "Web Application",
    image: "/images/project-adopt.png",
    tags: ["React", "Node"],
    description: "A collaborative pet-adoption platform that connects animals needing homes with responsible adopters.",
    details: {
      businessImpact: "Launched a collaborative pet-adoption platform that connects shelters with potential adopters, increasing successful placements by 20% in the first quarter.",
      technicalDetails: "Powered by a Node.js/Express API, PostgreSQL, and a React front-end; real-time notifications are handled via Socket.io."
    },
    links: {
      github: "https://github.com/shakilaaulia/AdoptMeow-Collab"
    }
  },
  {
    id: "04",
    title: "Seblak Mamah Zahwa - Web Ordering System",
    category: "Web Application",
    image: "/images/project-umkm.png",
    tags: ["React.js", "Node.js", "Supabase", "Vercel"],
    description: "A real-time web-based food ordering system for a local UMKM to digitalize reservations and menu ordering.",
    details: {
      businessImpact: "Delivered an end-to-end online ordering system for a local UMKM, enabling a 40% sales uplift and expanding the customer base beyond the physical store.",
      technicalDetails: "Frontend built with React 18 and Tailwind CSS, backend with Supabase (PostgreSQL + Auth). Integrated Stripe for secure payments."
    },
    links: {
      github: "https://github.com/shakilaaulia/seblak-web",
      demo: "https://seblakmamahzahwa.vercel.app/"
    }
  },
  {
    id: "05",
    title: "Dealan",
    category: "Web Application",
    image: "/images/project-dealan.png", 
    tags: ["Go", "Docker", "AWS", "Jenkins", "Azure"],
    description: "A scalable ride-hailing application built with a microservices architecture and cloud integration.",
    details: {
      businessImpact: "Designed a scalable micro-service ride-hailing platform that supports high-throughput trip matching, achieving sub-second latency under peak load.",
      technicalDetails: "Core services written in Go, containerized with Docker, orchestrated via Kubernetes. CI/CD pipelines via Jenkins, and cloud services hosted on AWS & Azure (EKS, S3, Cosmos DB)."
    },
    links: {
      github: "https://github.com/shakilaaulia/Dealan",
      demo: "https://dealan-app.vercel.app/"
    }
  },
  {
    id: "06",
    title: "Analisis Pola Bahan Makanan Kemasan (Algoritma Apriori)",
    category: "Machine Learning",
    image: "/images/project-ml.png", 
    tags: ["R", "Apriori"],
    description: "Application of the Apriori Algorithm to identify correlation patterns between main ingredients and food additives in packaged products.",
    details: {
      businessImpact: "Applied the Apriori algorithm to uncover hidden associations among food ingredients, enabling manufacturers to optimize product formulations and reduce waste.",
      technicalDetails: "Implemented in R using the arules package; data preprocessing, rule generation, and visualization were performed to produce actionable insights."
    }
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'business' | 'technical'>('business');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      // @ts-ignore
      if (typeof window !== 'undefined' && window.lenis) { window.lenis.stop(); }
      // focus modal for accessibility
      setTimeout(() => {
        modalRef.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "unset";
      // @ts-ignore
      if (typeof window !== 'undefined' && window.lenis) { window.lenis.start(); }
    }
    return () => {
      document.body.style.overflow = "unset";
      // @ts-ignore
      if (typeof window !== 'undefined' && window.lenis) { window.lenis.start(); }
    };
  }, [selectedProject]);

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
          <a href="https://github.com/shakilaaulia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white uppercase group whitespace-nowrap">
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
            <button
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setActiveTab('business');
              }}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="text-left group block min-w-[300px] md:min-w-[400px] lg:min-w-[450px] w-full md:w-[450px] rounded-[2rem] overflow-hidden glass-panel border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,106,0,0.15)] flex flex-col snap-center shrink-0"
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
                <p className="text-black/50 dark:text-white/50 mb-3 text-sm font-semibold">{project.category}</p>
                <p className="text-black/60 dark:text-white/60 mb-8 flex-1 text-sm line-clamp-3">{project.description}</p>

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
            </button>
          ))}
        </div>
      </div>
      
      {/* Style to hide scrollbar across browsers */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 z-10 flex flex-col hide-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors text-black dark:text-white"
              >
                <X size={24} />
              </button>
              
              <div className="w-full aspect-video bg-black/5 dark:bg-white/5 relative overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:p-10 flex flex-col gap-6 shrink-0">
                <div>
                  <span className="text-sm font-mono text-neon-blue mb-2 block">{selectedProject.id} • {selectedProject.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-black/90 dark:text-white/90 mb-4">{selectedProject.title}</h3>
                  <p className="text-black/70 dark:text-white/70 text-lg leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Tab navigation */}
                <div className="flex border-b border-black/10 dark:border-white/10 mb-4">
                  <button
                    onClick={() => setActiveTab('business')}
                    className={`px-4 py-2 -mb-px font-medium text-sm transition-colors ${activeTab === 'business' ? 'border-b-2 border-neon-orange text-neon-orange' : 'text-black/60 dark:text-white/60'}`}
                  >
                    Business Impact
                  </button>
                  <button
                    onClick={() => setActiveTab('technical')}
                    className={`px-4 py-2 -mb-px font-medium text-sm transition-colors ${activeTab === 'technical' ? 'border-b-2 border-neon-orange text-neon-orange' : 'text-black/60 dark:text-white/60'}`}
                  >
                    Technical Details
                  </button>
                </div>
                
                <div className="text-black/60 dark:text-white/60 leading-relaxed space-y-4">
                  {activeTab === 'business' && (
                    <p>{selectedProject.details.businessImpact}</p>
                  )}
                  {activeTab === 'technical' && (
                    <p>{selectedProject.details.technicalDetails}</p>
                  )}
                </div>
                
                <div className="mt-2">
                  <h5 className="text-sm font-bold text-black/80 dark:text-white/80 mb-3">Tech Stack:</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1.5 rounded-md bg-black/5 dark:bg-white/10 text-xs font-semibold text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 mt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-4">
                  {selectedProject.links?.figma && (
                    <a href={selectedProject.links.figma} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F24E1E]/10 text-[#F24E1E] hover:bg-[#F24E1E]/20 transition-colors font-medium text-sm">
                      <SiFigma size={18} />
                      View on Figma
                    </a>
                  )}
                  {selectedProject.links?.github && (
                    <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-black dark:text-white transition-colors font-medium text-sm border border-black/10 dark:border-white/10">
                      <SiGithub size={18} />
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.links?.demo && (
                    <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 transition-colors font-medium text-sm">
                      <ArrowSquareOut size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
