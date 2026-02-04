"use client";

import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

type Props = {
  activeSection: string;
};

export default function Header({ activeSection }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["home", "vision", "projects", "achievments", "faqs", "contact"];

  const toggleLang = () => setLang((prev) => (prev === "EN" ? "AR" : "EN"));

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 font-semibold px-4 md:px-6">

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 px-2">
          {sections.map((section) => {
            const isActive = activeSection === section;
            return (
              <a
                key={section}
                href={`#${section}`}
                className={`
                  relative py-2 transition-colors duration-500 text-sm font-bold tracking-wide uppercase group
                  ${
                    scrolled
                      ? isActive ? "text-[#C5A358]" : "text-black"
                      : isActive ? "text-[#C5A358]" : "text-white"
                  }
                  hover:text-[#C5A358]
                `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}

                <span className={`
                  absolute bottom-0 left-0 h-[2px] bg-[#C5A358] transition-all duration-300 ease-in-out
                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>

              </a>
            );
          })}

          {/* Language Button */}
          {/* <button
            onClick={toggleLang}
            className={`
              border border-[2px] rounded-md p-2 text-xs font-medium transition-all cursor-pointer bg-[#C5A358] duration-300
              border-[#C5A358] text-white hover:bg-transparent 
              ${
                scrolled
                  ? "hover:text-black"
                  : "hover:text-white"
              }
            `}
          >
            {lang}
          </button> */}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative">
          {menuOpen ? (
            <LuX
              className={`text-3xl cursor-pointer transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <LuMenu
              className={`text-3xl cursor-pointer transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setMenuOpen(true)}
            />
          )}

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              className="
                absolute left-0 mt-4 w-52 bg-gradient-to-br from-[#E2C68E] to-[#c58d1c]
                rounded-2xl shadow-xl p-4 flex flex-col gap-3 text-white text-lg
              "
            >
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#C5A358] transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}

              {/* Language Button in Mobile */}
              <button
                onClick={() => {
                  toggleLang();
                  setMenuOpen(false);
                }}
                className="cursor-pointer border border-white rounded-md text-center text-sm hover:bg-white hover:text-[#C5A358] transition-all"
              >
                {lang}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
