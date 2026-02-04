'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';
import { SectionProps } from '../types/sections';

export default function VisionSection({ id }: SectionProps) {
  return (
    <section id={id} className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-5/12 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-white border-8">
              <Image
                src="/path-to-your-image.jpg"
                alt="Zaid Malkat - Vision"
                width={500}
                height={650}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 sm:-right-6 w-full h-full border-2 border-[#C5A358] rounded-2xl z-0 pointer-events-none"></div>
          </div>

          <div className="w-full lg:w-7/12 text-left">
            <div className="inline-block px-4 py-1 rounded-sm border-l-4 border-[#C5A358] bg-[#0f172a] text-white text-xs tracking-[0.3em] uppercase mb-6">
              My Vision
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 leading-tight">
              Showcasing <span className="text-[#C5A358]">Abu Dhabi</span> <br />
              To The Global Market
            </h2>

            <div className="relative">
              <Quote className="absolute -top-6 -left-8 w-16 h-16 text-[#C5A358]/10 rotate-180" />
              <p className="text-xl md:text-2xl text-slate-700 font-light italic leading-relaxed mb-10 pl-4 border-l-2 border-slate-200">
                I support showcasing the image of <span className="font-semibold text-[#0f172a]">Abu Dhabi</span> to introduce it to international people as a premier real estate market.
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed mb-12 max-w-2xl text-lg">
              Through strategic insight and a deep understanding of the local landscape, 
              I am committed to positioning Abu Dhabi as the ultimate destination for 
              global investors seeking luxury, stability, and growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Global Reach', desc: 'Connecting markets' },
                { title: 'Local Expertise', desc: 'Abu Dhabi specialist' },
                { title: 'Strategic Vision', desc: 'Future-led growth' },
              ].map((value, index) => (
                <div key={index} className="group p-6 rounded-lg bg-white shadow-sm border border-slate-100 hover:border-[#C5A358] transition-colors duration-500">
                  <div className="text-[#C5A358] font-bold text-lg mb-1">{value.title}</div>
                  <div className="text-slate-400 text-sm uppercase tracking-tighter">{value.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}