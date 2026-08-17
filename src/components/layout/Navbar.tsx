"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Sparkles,
  Calculator,
  Building,
  Briefcase,
  Users,
  Send,
  BookOpen,
  Info,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import { useConsultation } from "@/context/ConsultationContext";

interface NavSectionItem {
  label: string;
  targetId: string;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavSectionItem[] = [
  { label: "Home", targetId: "hero" },
  { label: "About Us", targetId: "about" },
  { label: "Services", targetId: "services", hasDropdown: true },
  { label: "Calculators", targetId: "calculators" },
  { label: "Leadership", targetId: "leadership" },
  { label: "Careers", targetId: "careers" },
  { label: "Resources", targetId: "resources" },
  { label: "Contact", targetId: "contact" },
];

const SERVICES_DROPDOWN = [
  { label: "All Services Overview", targetId: "services", icon: Sparkles, desc: "Explore full solutions & advisory catalog" },
  { label: "Core Divisions (Loans & Real Assets)", targetId: "divisions", icon: Building, desc: "Financing & Real-Asset advisory wings" },
  { label: "Loan Expertise & Advisory", targetId: "expertise", icon: Briefcase, desc: "Home loans, LAP & balance transfers" },
  { label: "Interactive EMI Calculator", targetId: "calculators", icon: Calculator, desc: "Calculate installments & loan tenures" },
  { label: "Our Advisory Approach", targetId: "approach", icon: Info, desc: "4-step structured loan & wealth process" },
  { label: "Client Stories & Reviews", targetId: "testimonials", icon: Users, desc: "Verified testimonials & track record" },
  { label: "Contact & Consultation Desk", targetId: "contact", icon: Send, desc: "Reach our advisory office in Noida" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const pathname = usePathname();
  const router = useRouter();
  const servicesRef = useRef<HTMLDivElement>(null);
  const { openConsultationModal } = useConsultation();

  // Scroll spy & scrolled background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "expertise", "divisions", "about", "services", "calculators", "leadership", "testimonials", "partners", "careers", "resources", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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

  // Lock scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler
  const scrollToTarget = (targetId: string) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);

    if (pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${targetId}`);
        setActiveSection(targetId);
      } else if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      }
    } else {
      router.push(`/#${targetId}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };

  const isCurrentActive = (targetId: string) => {
    if (targetId === "services" && (activeSection === "services" || activeSection === "divisions" || activeSection === "expertise")) {
      return true;
    }
    return activeSection === targetId;
  };

  const navbarStyle = isScrolled
    ? "bg-[#0B0F19]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/30"
    : "bg-transparent border-b border-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Left: Brand Logo & Title */}
        <button
          type="button"
          onClick={() => scrollToTarget("hero")}
          className="flex items-center gap-3 group cursor-pointer shrink-0 text-left"
        >
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-lg overflow-hidden bg-white p-0.5 shadow-md border border-[#D4AF37] group-hover:scale-105 transition-transform shrink-0">
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
            <span className="font-black text-base md:text-lg text-[#F2D675] tracking-wider leading-none">
              NP
            </span>
            <span className="font-bold text-sm md:text-base text-white tracking-wide leading-none">
              Wealth Managers
            </span>
          </div>
        </button>

        {/* Center: Single-Page Navigation Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {NAV_ITEMS.map((item) =>
            item.hasDropdown ? (
              <div className="relative" ref={servicesRef} key={item.label}>
                <div
                  className="flex items-center"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  <button
                    type="button"
                    onClick={() => scrollToTarget(item.targetId)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isCurrentActive(item.targetId) || servicesOpen
                        ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60 shadow-sm"
                        : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      onClick={(e) => {
                        e.stopPropagation();
                        setServicesOpen(!servicesOpen);
                      }}
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180 text-[#F2D675]" : ""
                      }`}
                    />
                  </button>
                </div>

                {servicesOpen && (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-80 bg-[#111827] border border-[#D4AF37]/40 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-50 animate-fade-in-up"
                  >
                    <div className="px-4 py-2.5 border-b border-white/10 bg-[#0B0F19] flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F2D675]">
                        Page Sections & Tools
                      </span>
                    </div>
                    <div className="p-2 space-y-1 max-h-[420px] overflow-y-auto">
                      {SERVICES_DROPDOWN.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <button
                            key={sub.label}
                            type="button"
                            onClick={() => scrollToTarget(sub.targetId)}
                            className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer text-left"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                              <Icon className="w-3.5 h-3.5 text-[#F2D675] group-hover:text-[#0B0F19]" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white group-hover:text-[#F2D675] transition-colors">
                                {sub.label}
                              </p>
                              <p className="text-[10px] text-gray-400 font-normal leading-tight">
                                {sub.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToTarget(item.targetId)}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isCurrentActive(item.targetId)
                    ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60 shadow-sm"
                    : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        {/* Right: Phone & Book Consultation CTA */}
        <div className="hidden lg:flex items-center gap-3.5">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-200 hover:text-[#F2D675] transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden xl:inline">{COMPANY_CONFIG.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => openConsultationModal("General Consultation")}
            className="px-4 py-2 bg-gradient-to-r from-[#E5C158] via-[#F2D675] to-[#D4AF37] text-[#4A1515] font-extrabold text-xs xl:text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => openConsultationModal("General Consultation")}
            className="px-3 py-1.5 bg-[#D4AF37] text-[#4A1515] font-black text-xs rounded-lg shadow active:scale-95 transition-all cursor-pointer"
          >
            Consult
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#0B0F19] border-t border-[#D4AF37]/40 shadow-2xl overflow-y-auto z-50">
          <div className="px-5 py-6 space-y-1.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToTarget(item.targetId)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                  isCurrentActive(item.targetId)
                    ? "text-[#F2D675] bg-white/10 border-l-4 border-[#D4AF37]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-gray-500 font-normal">Jump to section</span>
              </button>
            ))}

            {/* Additional Jump Points */}
            <div className="pt-3 border-t border-white/10">
              <span className="px-4 text-[10px] font-extrabold uppercase tracking-widest text-[#F2D675] block py-1">
                Explore More Sections
              </span>
              <button
                type="button"
                onClick={() => scrollToTarget("divisions")}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-[#F2D675] transition-colors"
              >
                Core Divisions (Loans & Real Estate)
              </button>
              <button
                type="button"
                onClick={() => scrollToTarget("testimonials")}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-[#F2D675] transition-colors"
              >
                Client Stories
              </button>
              <button
                type="button"
                onClick={() => scrollToTarget("partners")}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-[#F2D675] transition-colors"
              >
                Our Bank Partners
              </button>
            </div>

            {/* Contact & Consultation in Mobile */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="flex items-center gap-3 text-sm font-semibold text-gray-200 px-4"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{COMPANY_CONFIG.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultationModal("General Consultation");
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-[#4A1515] font-black text-sm rounded-xl shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
