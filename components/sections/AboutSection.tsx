"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GraduationCap, Code, PenNib, Database, Brain, ArrowRight } from "@phosphor-icons/react";
import BorderGlow from "../BorderGlow";
import { FloatingTechStack } from "@/components/ui/FloatingTechStack";
import LogoLoop from '@/components/ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss, SiNodedotjs, SiFigma } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
];

const services = [
  { icon: Code, name: "Application Development", desc: "Building scalable digital solutions with modern frameworks." },
  { icon: PenNib, name: "UI/UX Design", desc: "Creating intuitive digital experiences with a focus on aesthetics." },
  { icon: Database, name: "Backend Systems", desc: "Developing robust infrastructures and APIs." },
  { icon: Brain, name: "AI/Machine Learning", desc: "Implementing intelligent data-driven systems." },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Intro & Visual
    const tlIntro = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tlIntro.fromTo(
      introRef.current?.children ? Array.from(introRef.current.children) : [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      visualRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // Education
    gsap.fromTo(
      educationRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // What I Can Do (Services)
    gsap.fromTo(
      servicesRef.current?.children ? Array.from(servicesRef.current.children) : [],
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.15, 
        duration: 0.6, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 max-w-7xl mx-auto w-full relative z-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
        
        <div ref={introRef} className="lg:col-span-7 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-black/90 dark:text-white/90">All Bout Me</h3>
          <h2 className="text-xs font-bold tracking-[0.2em] text-neon-blue mb-8 uppercase">About Me</h2>
          <p className="text-3xl md:text-5xl font-medium leading-[1.1] mb-10 text-black/90 dark:text-white/90">
            I’m a Computer Science student with a strong passion for technology and digital product development.
          </p>
          <BorderGlow
            className="rounded-3xl"
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="transparent"
            borderRadius={24}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#ffb800', '#ff0055', '#ff6a00']}
            fillOpacity={0}
          >
            <div className="p-8 rounded-3xl glass-panel relative overflow-hidden group w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-xl text-black/80 dark:text-white/80 relative z-10 font-light italic">
                "I enjoy turning ideas into practical digital solutions while continuously learning new technologies and exploring better ways to solve problems."
              </p>
            </div>
          </BorderGlow>
        </div>

        <div ref={visualRef} className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-neon-purple/20 blur-[80px] rounded-full scale-75 group-hover:scale-110 transition-transform duration-1000 ease-out"></div>
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel relative z-10 p-2 transform group-hover:-translate-y-2 transition-transform duration-500">
            <img src="/images/profile.png" alt="Profile" className="w-full h-full object-cover rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </div>

      <div ref={educationRef} className="mb-32">
        <h2 className="text-xs font-bold tracking-[0.2em] text-neon-pink mb-8 uppercase">Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* SMK Card */}
          <div className="lg:col-span-5 h-full">
            <BorderGlow
              className="rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-[1rem] rounded-bl-[1rem] h-full"
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
              <div className="glass-panel rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-[1rem] rounded-bl-[1rem] p-8 h-full flex flex-col hover:-translate-y-2 hover:border-neon-pink/30 hover:shadow-[0_0_30px_rgba(255,0,85,0.15)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
                  <Code size={120} weight="fill" />
                </div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-black/90 dark:text-white/90">SMK Negeri 1 Cimahi</h3>
                    <p className="text-neon-pink/90 font-medium text-sm md:text-base">2021 - 2024</p>
                  </div>
                  <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl text-neon-pink group-hover:bg-neon-pink/10 transition-colors">
                    <Code size={28} weight="light" />
                  </div>
                </div>
                <p className="text-black/60 dark:text-white/60 text-base leading-relaxed relative z-10">
                  Studied the fundamentals of Software Engineering, including web and database programming, and accustomed to completing various industry-based application development projects.
                </p>
              </div>
            </BorderGlow>
          </div>

          {/* UPI Card */}
          <div className="lg:col-span-7 h-full">
            <BorderGlow
              className="rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-[1rem] rounded-br-[1rem] h-full"
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
              <div className="glass-panel rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-[1rem] rounded-br-[1rem] p-8 md:p-10 h-full flex flex-col justify-between hover:-translate-y-2 hover:border-neon-pink/30 hover:shadow-[0_0_30px_rgba(255,0,85,0.15)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
                  <GraduationCap size={160} weight="fill" />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-black/90 dark:text-white/90">Universitas Pendidikan Indonesia</h3>
                      <p className="text-neon-pink/90 font-medium text-sm md:text-base">2024 - Present</p>
                    </div>
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl text-neon-pink group-hover:bg-neon-pink/10 transition-colors">
                      <GraduationCap size={28} weight="light" />
                    </div>
                  </div>
                  <ul className="text-black/60 dark:text-white/60 text-sm md:text-base space-y-3 list-disc pl-5 mb-8">
                    <li>Mastered core competencies in software engineering, data structures, advanced programming, and network architecture through coursework.</li>
                    <li>Actively contributed to the Indonesia Collaborative Research (RKI) project alongside lecturers, focusing on data analysis.</li>
                    <li>Selected as a Practicum Assistant, guiding 60+ students in the Database Management practicum.</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-black/10 dark:border-white/10 flex justify-center items-center relative z-10 mt-auto">
                  <div className="absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-neon-pink/50 shadow-[0_0_10px_rgba(255,0,85,0.8)]"></div>
                  <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 w-3 h-3 rotate-45 bg-neon-pink/50 shadow-[0_0_10px_rgba(255,0,85,0.8)]"></div>
                  <p className="text-2xl md:text-3xl font-bold tracking-widest text-black/90 dark:text-white/90">GPA <span className="text-neon-pink font-black">3.83/4.0</span></p>
                </div>
              </div>
            </BorderGlow>
          </div>
          
        </div>
      </div>

      <div className="relative">
        <FloatingTechStack />
        <div className="relative z-10">
          <h2 className="text-xs font-bold tracking-[0.2em] text-neon-purple mb-8 uppercase">What I Can Do</h2>
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="glass-panel p-8 rounded-3xl hover:scale-105 transition-transform duration-500 hover:border-neon-purple/40 hover:shadow-[0_0_30px_rgba(255,184,0,0.2)] group flex flex-col justify-between aspect-square">
                  <Icon size={48} className="text-black/40 dark:text-white/40 group-hover:text-neon-purple mb-6 transition-colors" weight="light" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black/90 dark:text-white/90">{service.name}</h3>
                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-24 mb-10 overflow-hidden relative">
            <h3 className="text-center text-sm font-medium tracking-widest text-black/40 dark:text-white/40 uppercase mb-8">
              Technologies I frequently use
            </h3>
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={40}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
