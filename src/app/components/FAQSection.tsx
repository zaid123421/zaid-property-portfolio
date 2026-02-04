"use client";
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionProps } from '../types/sections';

const faqs = [
  {
    question: "What is Real Tariq all about?",
    answer: "Real Tariq is a motivational blog that provides daily inspiration and guidance for people who want to achieve their new home in terms of Real Estate Market."
  },
  {
    question: "Who is the target audience for Real Tariq?",
    answer: "Our target audience is the people who wants to buy, invest, sell their home and properties in Real Estate Development."
  },
  {
    question: "How often is Real Tariq Website updated? ( includes social media )",
    answer: "We post new content on Real Tariq every day, so be sure to check back often for fresh inspiration and motivation."
  },
  {
    question: "What is the present state of the UAE property market?",
    answer: "The real estate market in the UAE has been a dynamic sector, closely tied to the country's economic and political stability. The UAE, particularly known for cities like Dubai and Abu Dhabi, has seen rapid development and growth, leading to a booming real estate sector."
  },
  {
    question: "What are the essential investment in UAE Real Estate Development?",
    answer: "Understanding the UAE Real Estate Market |  Rental Income |  Capital Appreciation |  Real Estate Crowdfunding |  Legal Implications "
  }
];

const FAQsSection = ({ id }: SectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C5A358] text-xs font-bold tracking-[0.3em] uppercase mb-4 inline-block">
            Support & Clarity
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#A68966] via-[#E2C68E] to-[#C5A358] bg-clip-text text-transparent">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-[#C5A358] mx-auto"></div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? 'text-[#C5A358]' : 'text-slate-400'}`} />
                  <span className={`font-bold text-lg transition-colors duration-300 ${openIndex === index ? 'text-[#0f172a]' : 'text-slate-600'}`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#C5A358]' : ''}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0 text-slate-500 leading-relaxed font-light border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQsSection;