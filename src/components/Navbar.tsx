'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">🦫</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#">Home</a>
          <a href="#about">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

          <a
            href="/assets/Resume_SE_TeerachayaNgaesanthea.pdf"
            download
            className="ml-2 px-4 py-1.5 text-sm font-medium bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Download CV */}
          <a
            href="/assets/Resume_SE_TeerachayaNgaesanthea.pdf"
            download
            className="px-3 py-1.5 text-xs font-medium bg-teal-600 text-white rounded-lg"
          >
            Download CV
          </a>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4 text-sm">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}