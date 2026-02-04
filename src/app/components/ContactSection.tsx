"use client";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SectionProps } from '../types/sections';

const ContactSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* عناصر جمالية في الخلفية */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A358] opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* الجانب الأيسر: معلومات التواصل والسوشيال ميديا */}
          <div className="w-full lg:w-5/12">
            <span className="text-[#C5A358] text-xs font-bold tracking-[0.3em] uppercase mb-4 inline-block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Let’s Secure Your <br />
              <span className="bg-gradient-to-r from-[#A68966] via-[#E2C68E] to-[#C5A358] bg-clip-text text-transparent">Future Investment</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#C5A358] transition-colors">
                  <Phone className="w-5 h-5 text-[#C5A358]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Me Directly</h4>
                  <p className="text-slate-400 font-light">+971 99 999 9999</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#C5A358] transition-colors">
                  <Mail className="w-5 h-5 text-[#C5A358]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Inquiry</h4>
                  <p className="text-slate-400 font-light">zaid.malkat@example.com</p>
                </div>
              </div>
            </div>

            {/* قسم السوشيال ميديا */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Follow My Updates</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#C5A358] hover:border-[#C5A358] hover:text-[#0f172a] transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* الجانب الأيمن: الفورم (نموذج التواصل) */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm shadow-2xl">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-300 text-xs uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Zaid Malkat"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#C5A358] transition-colors placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-300 text-xs uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#C5A358] transition-colors placeholder:text-slate-600"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-slate-300 text-xs uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can I assist you with your real estate goals?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#C5A358] transition-colors resize-none placeholder:text-slate-600"
                  ></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button className="w-full py-5 bg-[#C5A358] text-[#0f172a] font-bold uppercase tracking-[0.3em] rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;