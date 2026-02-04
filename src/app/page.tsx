"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import ProjectsSection from "./components/ProjectsSection";
import AwardsSection from "./components/AwardsSection";
import FAQsSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    const handleClick = (e: Event) => {
      const currentTarget = e.currentTarget as HTMLAnchorElement;
      const href = currentTarget.getAttribute("href");
      
      if (!href?.startsWith("#")) return;
      
      e.preventDefault();
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        const headerHeight = document.querySelector("header")?.offsetHeight || 0;
        // scroll-mt-24 تعادل 96px، لذا نخصم الارتفاع لضمان دقة الوصول
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      observer.disconnect();
      links.forEach((link) => link.removeEventListener("click", handleClick));
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <HeroSection id="home" />
      <VisionSection id="vision" />
      <ProjectsSection id="projects" />
      <AwardsSection id="achievments" />
      <FAQsSection id="faqs" />
      <ContactSection id="contact" />
    </>
  );
}
