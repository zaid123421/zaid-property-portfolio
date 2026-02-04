"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building,
  TrendingUp,
  FileCheck,
  Users,
  Search,
  ShieldCheck
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'البحث عن العقار المثالي',
    description: 'أساعدك في العثور على العقار الذي يناسب احتياجاتك وميزانيتك من بين آلاف الخيارات المتاحة.',
  },
  {
    icon: TrendingUp,
    title: 'الاستشارات الاستثمارية',
    description: 'تحليل شامل لفرص الاستثمار العقاري وتوقعات العائد على الاستثمار.',
  },
  {
    icon: FileCheck,
    title: 'إدارة المعاملات',
    description: 'إدارة كاملة لعملية الشراء من التفاوض وحتى نقل الملكية.',
  },
  {
    icon: Building,
    title: 'مشاريع قيد الإنشاء',
    description: 'وصول حصري لأحدث المشاريع من كبار المطورين قبل الإطلاق الرسمي.',
  },
  {
    icon: Users,
    title: 'خدمات ما بعد البيع',
    description: 'دعم متواصل يشمل إدارة العقار والتأجير والصيانة.',
  },
  {
    icon: ShieldCheck,
    title: 'التحقق القانوني',
    description: 'فحص قانوني شامل لضمان سلامة المعاملة وحماية استثمارك.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-6">
            خدماتنا
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">خدمات عقارية</span>{' '}
            <span className="text-gradient-gold">متكاملة</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات العقارية المصممة لتلبية جميع احتياجاتك
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group luxury-card p-8 h-full hover-lift cursor-pointer">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Line */}
                <div className="mt-6 h-0.5 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-gradient-gold group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
