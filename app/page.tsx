import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AwardsSection from "@/components/sections/AwardsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Navbar />
      <main className="flex flex-col w-full min-h-screen">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AwardsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

