'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  const getWorkDuration = () => {
        const startDate = new Date(2025, 7);
        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        if (years <= 0) {
            return `${months} month${months !== 1 ? 's' : ''}`;
        }

        return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
    };

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
    <section className={`flex flex-row items-center align-center justify-start w-full ${isMobile ? 'h-52' : 'h-64'} p-1`}>
      {!isMobile && (
        <Image
          src="/assets/1.png"
          alt=""
          width={400}
          height={400}
          className="rounded-full object-cover w-[15%]"
        />
      )}
      <div className={`${isMobile ? 'text-left items-start' : 'text-center items-center'} p-4 w-[70%] h-full flex flex-col justify-center gap-1`}>
        <h1 className="text-xl tracking-wide">Hello, I am</h1>
        <p className={`${isMobile ? 'text-2xl' : 'text-5xl'} font-medium tracking-[0.1em] bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-teal-600 dark:from-sky-300 dark:to-emerald-300`}>Teerachaya Ngaesanthea,</p>
        <p className={`${isMobile ? 'text-md' : 'text-xl'}`}>
          I am a <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-teal-600 dark:from-sky-200 dark:to-emerald-300">software developer</span> driven to grow into a software engineer.
        </p>
        {!isMobile && (
          <div className={`w-[70%] flex flex-col items-center justify-start`}>
            <p className="text-sm text-gray-800 leading-relaxed">
              Currently a software developer with {getWorkDuration()} of experience building and supporting business applications. Working across both frontend and backend with Angular, C#, and SQL, with a strong focus on data, reporting, and internal tools. Continuously learning and growing to become a more well-rounded software engineer.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}