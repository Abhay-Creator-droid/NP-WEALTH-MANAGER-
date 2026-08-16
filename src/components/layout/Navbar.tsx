"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Home,
  FileCheck2,
  RefreshCw,
  Calculator,
  Building,
  Briefcase,
  Users,
  ShieldCheck,
  Star,
  Award,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import { useConsultation } from "@/context/ConsultationContext";

const SERVICES_DROPDOWN = [
  { label: "Home Loans", href: "#services", icon: Home, desc: "Buy, build or construct your home" },
  { label: "Loan Against Property", href: "#services", icon: FileCheck2, desc: "Leverage existing property equity" },
  { label: "Balance Transfer", href: "#services", icon: RefreshCw, desc: "Optimize interest rate & EMIs" },
  { label: "Real Estate Advisory", href: "#services", icon: Building, desc: "Residential & commercial property" },
  { label: "Wealth Management", href: "#services", icon: Briefcase, desc: "SIP & portfolio planning" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const servicesRef = useRef<HTMLDivElement>(null);
  const { openConsultationModal } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy for active link highlight
      const sections = ["hero", "services", "resources", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesOpen(false);

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navbarStyle = isScrolled
    ? "bg-[#0B0F19]/90 backdrop-blur-md shadow-2xl py-3 border-b border-[#D4AF37]/30"
    : "bg-transparent py-4 border-b border-white/10";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Left: Brand Logo & Title */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "hero")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-lg overflow-hidden bg-white p-0.5 shadow-md border-2 border-[#D4AF37] group-hover:scale-105 transition-transform shrink-0">
            <Image
              src={COMPANY_CONFIG.logoUrl}
              alt={COMPANY_CONFIG.name}
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-black text-lg md:text-xl text-[#F2D675] tracking-wider leading-none">
              NP
            </span>
            <span className="font-bold text-base md:text-lg text-white tracking-wide leading-none">
              Wealth Managers
            </span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
          {/* Home */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
              activeSection === "hero"
                ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60"
                : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
            }`}
          >
            Home
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeSection === "services"
                  ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60"
                  : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#F2D675]" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-72 bg-[#111827] border border-[#D4AF37]/40 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-50 animate-fade-in-up"
              >
                <div className="px-4 py-2.5 border-b border-white/10 bg-[#0B0F19]">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F2D675]">
                    Financial & Loan Services
                  </span>
                </div>
                <div className="p-2 space-y-1">
                  {SERVICES_DROPDOWN.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, "services")}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                          <Icon className="w-3.5 h-3.5 text-[#F2D675] group-hover:text-[#0B0F19]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-[#F2D675] transition-colors">
                            {item.label}
                          </p>
                          <p className="text-[10px] text-gray-400 font-normal leading-tight">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Resources */}
          <a
            href="#resources"
            onClick={(e) => scrollToSection(e, "resources")}
            className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
              activeSection === "resources"
                ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60"
                : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
            }`}
          >
            Resources
          </a>

          {/* About Us */}
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
              activeSection === "about"
                ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60"
                : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
            }`}
          >
            About Us
          </a>

          {/* Contact */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
              activeSection === "contact"
                ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60"
                : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Right: Phone & Book Consultation CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-semibold text-gray-200 hover:text-[#F2D675] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{COMPANY_CONFIG.phoneDisplay}</span>
          </a>

          <button
            onClick={() => openConsultationModal("General Consultation")}
            className="px-5 py-2.5 bg-gradient-to-r from-[#E5C158] via-[#F2D675] to-[#D4AF37] text-[#4A1515] font-extrabold text-xs xl:text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => openConsultationModal("General Consultation")}
            className="px-3 py-1.5 bg-[#D4AF37] text-[#4A1515] font-black text-xs rounded-lg shadow"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#0B0F19] border-b-2 border-[#D4AF37]/40 shadow-2xl px-5 py-6 space-y-3 z-50">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-white/10"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-white/10"
          >
            Services
          </a>
          <a
            href="#resources"
            onClick={(e) => scrollToSection(e, "resources")}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-white/10"
          >
            Resources
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-white/10"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-white/10"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="flex items-center gap-3 text-sm font-semibold text-gray-200"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>{COMPANY_CONFIG.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultationModal("General Consultation");
              }}
              className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-[#4A1515] font-black text-sm rounded-xl shadow-lg"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
