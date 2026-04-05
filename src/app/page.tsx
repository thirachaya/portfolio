'use client';

import HeroSection from "@/components/HeroSection";
import ThreeDCardScene from "@/components/ThreeDCard/index";
import AboutSection from "@/components/AboutSection";
// import React, { useEffect, useState } from 'react';
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkIsMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   checkIsMobile();
  //   window.addEventListener('resize', checkIsMobile);

  //   return () => {
  //     window.removeEventListener('resize', checkIsMobile);
  //   };
  // }, []);

  return (
    <main className="relative min-h-screen w-full">
      <HeroSection />
      <ThreeDCardScene />
      <AboutSection />
      <ExperienceSection /> 
    </main>
  );
}
