'use client';

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {

  return (
    <main className="relative min-h-screen w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection /> 
    </main>
  );
}
