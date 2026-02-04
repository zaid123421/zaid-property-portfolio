"use client";
import { MapPin, Maximize, Building2 } from 'lucide-react';
import project1 from '@/app/assets/project-1.jpg';
import project2 from '@/app/assets/project-2.jpg';
import project3 from '@/app/assets/project-3.jpg';
import Image from 'next/image';
import { SectionProps } from '../types/sections';

const projects = [
  {
    id: 1,
    title: 'Saadiyat Cultural District',
    type: 'Luxury Residential',
    location: 'Saadiyat Island, Abu Dhabi',
    area: '450 sqm',
    price: '12,500,000 AED',
    image: project1,
    features: ['Museum Views', 'Beach Access', 'Smart Home'],
  },
  {
    id: 2,
    title: 'Yas Bay Waterfront',
    type: 'Premium Apartment',
    location: 'Yas Island, Abu Dhabi',
    area: '280 sqm',
    price: '4,200,000 AED',
    image: project2,
    features: ['Sea View', 'Near Arena', 'Retail Hub'],
  },
  {
    id: 3,
    title: 'Al Reem Sky Tower',
    type: 'Modern Penthouse',
    location: 'Al Reem Island, Abu Dhabi',
    area: '600 sqm',
    price: '8,900,000 AED',
    image: project3,
    features: ['City Skyline', 'Private Infinity Pool', '5-Star Gym'],
  },
];

const ProjectsSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-sm border border-[#C5A358]/30 bg-[#C5A358]/5 text-[#C5A358] text-xs tracking-[0.3em] uppercase mb-4">
            Exclusive Listings
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premier <span className="bg-gradient-to-r from-[#A68966] via-[#E2C68E] to-[#C5A358] bg-clip-text text-transparent">Abu Dhabi</span> Properties
          </h2>
          <div className="w-20 h-1 bg-[#C5A358] mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Discover a curated selection of Abu Dhabi’s most prestigious real estate opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#C5A358]/50 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold text-lg bg-[#C5A358] px-4 py-1 rounded-sm shadow-lg">
                    {project.price}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-[#C5A358] text-xs uppercase tracking-widest mb-3 font-semibold">
                  <Building2 className="w-4 h-4" />
                  <span>{project.type}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A358] transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-light">
                    <MapPin className="w-4 h-4 text-[#C5A358]" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-light">
                    <Maximize className="w-4 h-4 text-[#C5A358]" />
                    {project.area}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[10px] uppercase tracking-tighter text-slate-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;