'use client';

import React, { useEffect, useState } from 'react';

export default function HeroSection() {
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
    <section className={`${isMobile ? 'text-left' : 'text-center'} px-4 py-20 ${isMobile ? 'w-[60%]' : 'w-[50%]'}  h-[30%]`}>
      <h1 className="text-xl tracking-wide">Hello, I am</h1>
      <p className={`${isMobile ? 'text-2xl' : 'text-5xl'} font-medium tracking-[0.1em]`}>Teerachaya Ngaesanthea</p>
      <p className={`mt-4 ${isMobile ? 'text-lg' : 'text-xl'}`}>
        I’m a Software Developer with goals and a bit of controlled chaos.
      </p>
    </section>
  );
}