'use client';

import React, { useEffect, useState } from 'react';

export default function ExperienceSection() {
    const [isMobile, setIsMobile] = useState(false);

    const experiences = [
        {
            year: 'Aug 2025 - Present',
            role: 'Software Developer',
            company: 'Soft Square International Co., Ltd.',
            description: [
                'Develop and maintain dashboards and reports for the HRMS system, including general business reports and comprehensive organizational structure reports for large-scale teams.',
                'Support and troubleshoot CR/bug requests from the team, ensuring system stability and continuous business operations.',
            ],
            tech: ['Angular', 'C#/.NET', 'PostgreSQL', 'JasperReports']
        },
        {
            year: 'Nov 2024 - Feb 2025',
            role: 'IT Software Engineer Intern',
            company: 'Haier Electric (Thailand) Pub Co., Ltd.',
            description: [
                'Developed frontend interfaces for three key projects',
                [
                    'Real-time production line simulator',
                    'Barcode tracking dashboard for product scan tracking',
                    'Factory KPI monitoring dashboard to track performance against plan'
                ],
                'Focused on building interactive, user-friendly UIs and visualizing data effectively using React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS.',
                'Collaborated with engineers and supervisors to gather requirements and translate them into functional interfaces.'],
            tech: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS']
        }
    ];

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
        <section id="experience" className={`flex flex-col items-center justify-center p-4 w-full h-auto`}>
            <h2 className="text-2xl font-semibold mb-10">Experience</h2>
            <div className={`relative ${isMobile ? 'w-full' : 'w-[80%]'}`}>
                {/* Line */}
                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 transform -translate-x-1/2" />
                {experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`relative w-full flex mb-10 ${isMobile
                                ? 'justify-start'
                                : isLeft
                                    ? 'justify-start'
                                    : 'justify-end'
                                }`}>
                            {/* point */}
                            <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-teal-700 rounded-full ring-4 ring-white z-10" />

                            {/* card */}
                            <div
                                className={`bg-white p-4 rounded-xl shadow-md w-full md:w-[40%] ${isMobile
                                    ? ''
                                    : isLeft
                                        ? 'mr-auto pr-8 text-right'
                                        : 'ml-auto pl-8 text-left'
                                    }`}>
                                <p className="text-sm text-gray-500">{exp.year}</p>
                                <h3 className="text-lg font-semibold">{exp.role}</h3>
                                <p className="text-sm text-gray-600">{exp.company}</p>

                                <div className="mt-2 text-gray-700 text-sm">
                                    {Array.isArray(exp.description) ? (
                                        <ul className="list-disc ml-5 space-y-1">
                                            {exp.description.map((desc, i) => {
                                                if (Array.isArray(desc)) {
                                                    return null;
                                                }

                                                const nextDesc = exp.description[i + 1];
                                                if (Array.isArray(nextDesc)) {
                                                    return (
                                                        <li key={i}>
                                                            {desc}
                                                            <ul className="list-[circle] ml-5 space-y-1 mt-1">
                                                                {nextDesc.map((subDesc, j) => (
                                                                    <li key={j}>{subDesc}</li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    );
                                                }

                                                return <li key={i}>{desc}</li>;
                                            })}
                                        </ul>
                                    ) : (
                                        <p>{exp.description}</p>
                                    )}
                                </div>
                                <div
                                    className={`flex flex-wrap gap-2 mt-3 ${isLeft && !isMobile ? 'justify-end' : 'justify-start'
                                        }`}>
                                    {exp.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-emerald-100 text-teal-800 px-2 py-1 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}