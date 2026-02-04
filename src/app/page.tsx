"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import ProjectsSection from "./components/ProjectsSection";
import AwardsSection from "./components/AwardsSection";
import FAQsSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const html = document.documentElement;

    const isMobile = window.innerWidth <= 768;
    html.style.scrollBehavior = isMobile ? "smooth" : "auto";

    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("a[href^='#']");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    const cancelCurrent = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const handleClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!href?.startsWith("#")) return;

      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      const headerEl = document.querySelector("header") as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;

      const scrollContainer =
        document.scrollingElement || document.body || document.documentElement;
      const startY = scrollContainer.scrollTop;
      const targetY = target.offsetTop - headerHeight;

      const distance = Math.abs(startY - targetY);
      const duration = clamp(distance / 0.9, 900, 2500);

      cancelCurrent();
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutExpo(progress);

        scrollContainer.scrollTop = startY + (targetY - startY) * eased;

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          scrollContainer.scrollTop = targetY;
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(step);
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      observer.disconnect();
      cancelCurrent();
      links.forEach((link) => link.removeEventListener("click", handleClick));
      html.style.scrollBehavior = "auto";
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
