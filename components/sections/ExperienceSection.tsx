"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Briefcase } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import BorderGlow from "../BorderGlow";
import dynamic from 'next/dynamic';

const DomeGallery = dynamic(() => import('@/components/ui/DomeGallery'), { ssr: false });

const experiences = [
  {
    role: "Information Technology Intern",
    company: "PT Telkom Indonesia",
    period: "2026 - Present",
    desc: "Currently interning in the Information Technology division, assisting in the development and optimization of enterprise digital solutions."
  },
  {
    role: "Head of Advocacy Bureau",
    company: "BEM KEMAKOM",
    period: "2025 - Present",
    desc: "Led the execution of Bureau work programs, handled internal management, and bridged the resolution of student aspirations directly to the university bureaucracy."
  },
  {
    role: "PSDP Member",
    company: "Paguyuban KSE UPI",
    period: "2025 - Present",
    desc: "Led the interview selection of 1,189 KSE UPI scholarship applicants in a structured and fair manner, and actively contributed to the success of various major association programs."
  },
  {
    role: "Teaching Assistant",
    company: "Database Management System Course",
    period: "2026",
    desc: "Guided students in understanding database management concepts, evaluated assignments, and supported practical laboratory sessions."
  },
  {
    role: "Head of UKK CLUBINK",
    company: "UI/UX Design Community at KEMAKOM",
    period: "2025",
    desc: "Directed the UI/UX design community's initiatives, organizing events and workshops to foster skills in user interface and experience design among members."
  },
  {
    role: "UI/UX Designer",
    company: "PT. Safanesia Indonesia",
    period: "2024",
    desc: "Designed wireframes and prototypes for a Wi-Fi billing site, increasing navigation efficiency by 20%, and collaborated with two developers to ensure 100% accurate code implementation."
  }
];

export default function ExperienceSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    itemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }
    });

    if (galleryRef.current) {
      gsap.fromTo(
        galleryRef.current,
        { opacity: 0, scale: 0.95, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef}>
    <section id="experience" ref={sectionRef} className="py-32 px-6 max-w-5xl mx-auto w-full relative z-10">
      <div className="mb-16">
        <h2 className="text-xs font-bold tracking-[0.2em] text-neon-blue mb-4 uppercase">Experience</h2>
        <h3 className="text-4xl font-bold text-black/90 dark:text-white/90">Professional Journey</h3>
      </div>

      <div className="relative border-l border-black/10 dark:border-white/10 pl-8 ml-4 md:ml-0 md:pl-12 flex flex-col gap-16">
        {experiences.map((exp, i) => (
          <div
            key={i}
            ref={(el) => {
              itemsRef.current[i] = el;
            }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-background border-2 border-black/20 dark:border-white/20 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(255,106,0,0.8)] transition-all duration-300 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

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
              <div className="glass-panel p-8 rounded-3xl transition-all duration-500 w-full hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-black/90 dark:text-white/90">{exp.role}</h4>
                    <p className="text-lg text-neon-blue font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-medium text-black/70 dark:text-white/70 whitespace-nowrap">
                    <Briefcase size={16} />
                    {exp.period}
                  </div>
                </div>
                <p className="text-black/60 dark:text-white/60 leading-relaxed max-w-3xl">
                  {exp.desc}
                </p>
              </div>
            </BorderGlow>
          </div>
        ))}
      </div>
    </section>

    <section ref={galleryRef} className="w-full h-[120vh] min-h-[800px] relative z-10 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
      <DomeGallery fit={0.85} overlayBlurColor="transparent" grayscale={false} />
    </section>
    </div>
  );
}
