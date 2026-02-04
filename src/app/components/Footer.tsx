"use client";

import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'المشاريع', href: '#projects' },
    { label: 'الخدمات', href: '#services' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <footer className="bg-onyx border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-right">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-display text-2xl text-gradient-gold mb-4"
            >
              أحمد الراشد
            </motion.h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              مستشار عقاري معتمد متخصص في العقارات الفاخرة في دبي. نقدم خدمات استشارية متميزة للمستثمرين من جميع أنحاء العالم.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="text-right">
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">تابعني</h4>
            <div className="flex gap-3 justify-end">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              صُنع بـ <Heart className="w-4 h-4 text-primary" /> في دبي
            </p>
            <p className="text-muted-foreground text-sm">
              © {currentYear} أحمد الراشد. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
