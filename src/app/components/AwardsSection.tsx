"use client";
import { Award, Trophy, Star, Medal, CheckCircle2 } from 'lucide-react';
import { SectionProps } from '../types/sections';

const awards = [
  {
    icon: Trophy,
    year: '2024',
    title: 'Top Real Estate Consultant',
    organization: 'Gulf Property Awards',
    description: 'Recognized for outstanding sales performance and market expertise.',
  },
  {
    icon: Award,
    year: '2023',
    title: 'Customer Excellence Award',
    organization: 'Abu Dhabi Chamber',
    description: 'Awarded for dedication to providing the best luxury client experience.',
  },
  {
    icon: Star,
    year: '2023',
    title: 'Billion Dirham Club',
    organization: 'Emaar Properties',
    description: 'Exceeded 1 Billion AED in total sales volume across key projects.',
  },
  {
    icon: Medal,
    year: '2022',
    title: 'Platinum Partner',
    organization: 'Aldar Properties',
    description: 'Certified as a strategic platinum partner for Abu Dhabi developments.',
  },
];

const certifications = [
  'Certified Member - Real Estate Regulatory Agency (RERA)',
  'Licensed Broker - Abu Dhabi Department of Municipalities and Transport',
  'Certified Investment Advisory Consultant',
  'Advanced Real Estate Valuation Certificate',
];

const AwardsSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#C5A358] text-xs font-bold tracking-[0.3em] uppercase mb-4 inline-block">
            Recognition & Merit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            A Track Record of <span className="bg-gradient-to-r from-[#A68966] via-[#E2C68E] to-[#C5A358] bg-clip-text text-transparent">Excellence</span>
          </h2>
          <div className="w-16 h-1 bg-[#C5A358] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="group flex gap-6 p-8 bg-slate-50 border border-slate-100 rounded-xl hover:border-[#C5A358] hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-[#0f172a] flex items-center justify-center group-hover:bg-[#C5A358] transition-colors duration-500">
                  <award.icon className="w-7 h-7 text-[#C5A358] group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-[#C5A358] tracking-widest">{award.year}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span className="text-xs text-slate-500 uppercase tracking-tighter font-medium">{award.organization}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#C5A358] transition-colors">
                  {award.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Box */}
        <div className="max-w-4xl mx-auto p-1 bg-[#0f172a] rounded-2xl shadow-2xl">
          <div className="bg-[#0f172a] border border-white/10 rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-10">
              Professional <span className="text-[#C5A358]">Certifications</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#C5A358]/30 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C5A358] flex-shrink-0" />
                  <span className="text-slate-300 text-sm font-light">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;