"use client";

import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Languages from "@/components/Languages";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Languages />
      <CTABanner />
      <Contact />
    </div>
  );
}
