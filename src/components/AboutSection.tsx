'use client';

import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { is } from '@react-three/fiber/dist/declarations/src/core/utils';

export default function AboutSection() {
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
        <section id="about" className={`flex flex-col items-center justify-center p-4 w-full h-auto`}>
            <div>
                {/* {!isMobile && (
                    <div className={`${isMobile ? 'w-[60%]' : 'w-[68%]'}`}>
                        <p className="text-gray-800 leading-relaxed">
                            Currently a software developer with {getWorkDuration()} of experience building and supporting business applications. Working across both frontend and backend with Angular, C#, and SQL, with a strong focus on data, reporting, and internal tools. Continuously learning and growing to become a more well-rounded software engineer.
                        </p>
                    </div>
                )} */}
                {isMobile && (
                    <div className={`${isMobile ? 'w-[60%]' : 'w-[68%]'}`}>
                        <p className="text-gray-800 leading-relaxed">
                            Software developer with {getWorkDuration()} of experience working on business applications using Angular, C#, and SQL. Focused on data and internal tools.
                        </p>
                    </div>
                )}
            </div>
            <div className={`${isMobile ? 'w-full' : 'w-[50%]'} mt-2 flex flex-col items-center justify-center`}>
                <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold mb-3">🖥️ Frontend</h4>
                        <div className={`flex flex-wrap gap-3 justify-center`}>
                            {['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript'].map(skill => (
                                <span key={skill} className="bg-white shadow px-4 py-2 rounded-lg text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-3">⚙️ Backend</h4>
                        <div className={`flex flex-wrap gap-3 justify-center`}>
                            {['C#', '.NET'].map(skill => (
                                <span key={skill} className="bg-white shadow px-4 py-2 rounded-lg text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-3">🗄️ Database</h4>
                        <div className={`flex flex-wrap gap-3 justify-center`}>
                            {['SQL', 'PostgreSQL', 'Database Design', 'Query Optimization'].map(skill => (
                                <span key={skill} className="bg-white shadow px-4 py-2 rounded-lg text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-3">🛠️ Tools</h4>
                        <div className={`flex flex-wrap gap-3 justify-center`}>
                            {['Git', 'GitHub', 'JasperReports'].map(skill => (
                                <span key={skill} className="bg-white shadow px-4 py-2 rounded-lg text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}