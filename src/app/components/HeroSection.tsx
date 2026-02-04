'use client';

import { SectionProps } from "../types/sections";

export default function HeroSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-0 md:pb-0 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] rounded-full bg-[#C5A358]/10 blur-[120px] animate-blob-1"></div>

        <div className="absolute bottom-[5%] right-[-10%] w-[420px] h-[420px] rounded-full bg-[#A68966]/10 blur-[110px] animate-blob-2"></div>

        <div className="absolute top-[25%] right-[15%] w-[320px] h-[320px] rounded-full bg-slate-500/10 blur-[90px] animate-blob-3"></div>
      </div>

      <div className="curved"></div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <div className="relative shrink-0 animate-float">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-[#C5A358] p-2 shadow-2xl animate-glow">
            <div className="w-full h-full rounded-full bg-slate-700 overflow-hidden flex items-center justify-center">
              <span className="text-slate-400 text-[10px] md:text-sm italic">
                Zaid&apos;s Image
              </span>
            </div>
          </div>

          <div className="absolute -top-3 -left-3 w-12 h-12 md:w-20 md:h-20 border-t-4 border-l-4 border-[#C5A358] rounded-tl-2xl md:rounded-tl-3xl"></div>
        </div>

        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-[#C5A358] text-lg md:text-2xl font-medium tracking-widest uppercase mb-2 animate-text delay-1">
            Zaid Malkat
          </h2>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-text delay-2">
            Senior Real Estate <br />
            <span className="bg-gradient-to-r from-[#A68966] via-[#E2C68E] to-[#C5A358] bg-clip-text text-transparent">
              Consultant
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 border-l-0 md:border-l-2 border-[#C5A358]/30 pl-0 md:pl-4 animate-text delay-3">
            Specializing in high-end luxury properties and strategic investment advice. 
            With over a decade of experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-text delay-4">
            <a
              href="#contact"
              className="text-center bg-[#C5A358] text-[#0f172a] px-8 py-3 rounded-lg font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-[#C5A358]/20"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="text-center border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#0f172a] transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
