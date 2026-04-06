'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ContactSection() {
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768)
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);
    return (
        <section id="contact" className="flex flex-col items-center justify-center w-full px-4">
            <Image
                src="/assets/66.png"
                alt=""
                width={400}
                height={400}
                className="rounded-full object-cover w-[15%]"/>
            <div className="w-full max-w-3xl text-center">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                    I’m open to new opportunities, collaborations, or just a friendly chat.
                </p>

                {/* Contact Info */}
                <div className="flex flex-col gap-4 text-gray-700 text-sm">
                    <div>
                        📧 <span className="font-medium">teerachaya.nk@email.com</span>
                    </div>
                    <div>
                        📱 <span className="font-medium">+66 99 206 9909</span>
                    </div>
                    <div>
                        📍 <span className="font-medium">Pathum Thani, Thailand</span>
                    </div>
                </div>

                {/* Links */}
                <div className="flex justify-center gap-4 mt-6 flex-wrap">
                    <a href="https://github.com/thirachaya"
                        target="_blank"
                        className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/teerachaya-ng/"
                        target="_blank"
                        className="px-4 py-2 text-sm bg-sky-800 text-white rounded-lg hover:bg-sky-500 transition">
                        LinkedIn
                    </a>
                </div>
            </div>
            {!isMobile && (
                <Image
                    src="/assets/82.png"
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-full object-cover w-[15%]"/>
            )}
        </section>
    );
}