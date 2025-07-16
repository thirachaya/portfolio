'use client';

import HeroSection from "@/components/HeroSection";
import ThreeDCardScene from "@/components/ThreeDCard/index";
import AboutMe from "@/components/AboutMe";
import React, { useEffect, useState } from 'react';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
  
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }, []);

  return (
    <main className={`relative min-h-screen flex ${isMobile ? 'justify-start' : 'justify-center'}`}>
        <HeroSection />
        <ThreeDCardScene/>
        <AboutMe/>
    </main>
  );
}
