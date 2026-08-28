"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "@phosphor-icons/react";

const awardsAndCertifications = [
  {
    id: 1,
    title: "Finalist Impreuneur",
    issuer: "BINUS Malang",
    date: "2026",
    image: "/images/sertfikat-binus.png",
    link: "https://drive.google.com/drive/folders/1i6C3uiaqOYSwTVYs_iMfA-XLRNdEurMe?usp=drive_link",
  },
  {
    id: 2,
    title: "2nd Winner NSC Bussines Plan",
    issuer: "NSC",
    date: "2026",
    image: "/images/sertifikat-nsc.png",
    link: "https://drive.google.com/drive/folders/1i6C3uiaqOYSwTVYs_iMfA-XLRNdEurMe?usp=drive_link",
  },
  {
    id: 3,
    title: "Oracle Certification",
    issuer: "Oracle",
    date: "2024",
    image: "/images/sertifikat-oracle.png",
    link: "https://drive.google.com/drive/folders/1i6C3uiaqOYSwTVYs_iMfA-XLRNdEurMe?usp=drive_link",
  },
  {
    id: 4,
    title: "TOEIC English Proficiency",
    issuer: "TOEIC",
    date: "2024",
    image: "/images/sertifikat-toeic.png",
    link: "https://drive.google.com/drive/folders/1i6C3uiaqOYSwTVYs_iMfA-XLRNdEurMe?usp=drive_link",
  },
  {
    id: 5,
    title: "IC3 Digital Literacy Certification",
    issuer: "IC3",
    date: "2024",
    image: "/images/sertiikat-ic3.png",
    link: "https://drive.google.com/drive/folders/1i6C3uiaqOYSwTVYs_iMfA-XLRNdEurMe?usp=drive_link",
  }
];

export default function AwardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(
      headerRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: "power3.inOut", transformOrigin: "left center" },
      "-=0.6"
    );

    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section id="awards" ref={sectionRef} className="py-32 px-6 max-w-7xl mx-auto w-full relative z-10">
      <div className="mb-16 flex items-center gap-6 overflow-hidden">
        <h2 ref={headerRef} className="text-xl md:text-2xl font-bold tracking-[0.1em] text-black/90 dark:text-white/90 uppercase whitespace-nowrap">
          Awards & Certifications
        </h2>
        <div ref={lineRef} className="h-[1px] w-full bg-gradient-to-r from-black/20 dark:from-white/20 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardsAndCertifications.map((item, index) => (
          <a 
            key={item.id} 
            href={item.link}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="group block rounded-[2rem] overflow-hidden glass-panel border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="aspect-[4/3] w-full relative overflow-hidden bg-black/5 dark:bg-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/10 dark:from-white/10 to-transparent opacity-50"></div>
              
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              <div className="absolute inset-0 bg-white/40 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center border border-black/20 dark:border-white/20 text-black dark:text-white transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-xs font-bold tracking-widest text-neon-pink mb-3 uppercase">{item.date}</p>
              <h3 className="text-xl font-bold text-black/90 dark:text-white/90 mb-2 leading-tight">{item.title}</h3>
              <p className="text-sm text-black/50 dark:text-white/50">{item.issuer}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
