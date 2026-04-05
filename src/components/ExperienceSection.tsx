'use client';

import React, { useEffect, useState } from 'react';

export default function ExperienceSection() {
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
        <section className={`flex flex-col items-start justify-center p-4 ${isMobile ? 'w-full' : 'w-[80%]'}`}>
            
        </section>
    );
}