"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Sparkles,
  Building,
  Briefcase,
  Calculator,
  RefreshCw,
  Home,
  FileCheck2,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import { useConsultation } from "@/context/ConsultationContext";

// Services dropdown items — link to /services page
const SERVICES_DROPDOWN = [
  { label: "All Services Overview", href: "/services", icon: Sparkles, desc: "Explore full solutions & advisory catalog" },
  { label: "Home Loans", href: "/loans", icon: Home, desc: "Buy, build or construct your home" },
  { label: "Loan Against Property", href: "/loans", icon: FileCheck2, desc: "Leverage existing property equity" },
  { label: "Balance Transfer", href: "/loans", icon: RefreshCw, desc: "Optimize interest rate & EMIs" },
  { label: "Real Estate Advisory", href: "/real-estate", icon: Building, desc: "Residential & commercial property" },
  { label: "Wealth Management", href: "/investments", icon: Briefcase, desc: "SIP & portfolio planning" },
  { label: "EMI Calculator", href: "/calculators", icon: Calculator, desc: "Plan your monthly installments" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const servicesRef = useRef<HTMLDivElement>(null);
  const { openConsultationModal } = useConsultation();

  // Scroll-based navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Services dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const goHome = () => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const navbarStyle = isScrolled
    ? "bg-[#0B0F19]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/30"
    : "bg-transparent border-b border-transparent";

  // Determine active link
  const isActive = (href: string) => pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo — always goes to homepage */}
        <button
          type="button"
          onClick={goHome}
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
            <span className="font-black text-base md:text-lg text-[#F2D675] tracking-wider leading-none">NP</span>
            <span className="font-bold text-sm md:text-base text-white tracking-wide leading-none">Wealth Managers</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3">

          {/* Home */}
          <button
            type="button"
            onClick={goHome}
            className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isActive("/")
                ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60 shadow-sm"
                : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
            }`}
          >
            Home
          </button>

          {/* About Us — dedicated page */}
          <Link
            href="/about"
            className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
              isActive("/about")
                ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60 shadow-sm"
                : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
            }`}
          >
            About Us
          </Link>

          {/* Services — dropdown with page links */}
          <div className="relative" ref={servicesRef}>
            <div className="flex items-center" onMouseEnter={() => setServicesOpen(true)}>
              <Link
                href="/services"
                className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                  pathname.startsWith("/services") || pathname.startsWith("/loans") || pathname.startsWith("/investments") || pathname.startsWith("/real-estate") || pathname.startsWith("/calculators") || servicesOpen
                    ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60 shadow-sm"
                    : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setServicesOpen(!servicesOpen); }}
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#F2D675]" : ""}`}
                />
              </Link>
            </div>

            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-80 bg-[#111827] border border-[#D4AF37]/40 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-50"
              >
                <div className="px-4 py-2.5 border-b border-white/10 bg-[#0B0F19]">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F2D675]">
                    Financial &amp; Loan Services
                  </span>
                </div>
                <div className="p-2 space-y-1 max-h-[420px] overflow-y-auto">
                  {SERVICES_DROPDOWN.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setServicesOpen(false)}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                          <Icon className="w-3.5 h-3.5 text-[#F2D675] group-hover:text-[#0B0F19]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-[#F2D675] transition-colors">{sub.label}</p>
                          <p className="text-[10px] text-gray-400 font-normal leading-tight">{sub.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Contact — dedicated page */}
          <Link
            href="/contact"
            className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
              isActive("/contact")
                ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60 shadow-sm"
                : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right side: Phone + Book Consultation */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 text-xs xl:text-sm font-semibold text-gray-200 hover:text-[#F2D675] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>{COMPANY_CONFIG.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => openConsultationModal("General Consultation")}
            className="px-5 py-2 bg-gradient-to-r from-[#E5C158] via-[#F2D675] to-[#D4AF37] text-[#4A1515] font-extrabold text-xs xl:text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile controls */}
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
          <div className="px-5 py-6 space-y-2">

            <button
              type="button"
              onClick={goHome}
              className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                isActive("/") ? "text-[#F2D675] bg-white/10 border-l-4 border-[#D4AF37]" : "text-white hover:bg-white/10"
              }`}
            >
              Home
            </button>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full px-4 py-3.5 rounded-xl text-sm font-bold transition-colors ${
                isActive("/about") ? "text-[#F2D675] bg-white/10 border-l-4 border-[#D4AF37]" : "text-white hover:bg-white/10"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full px-4 py-3.5 rounded-xl text-sm font-bold transition-colors ${
                pathname.startsWith("/services") ? "text-[#F2D675] bg-white/10 border-l-4 border-[#D4AF37]" : "text-white hover:bg-white/10"
              }`}
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full px-4 py-3.5 rounded-xl text-sm font-bold transition-colors ${
                isActive("/contact") ? "text-[#F2D675] bg-white/10 border-l-4 border-[#D4AF37]" : "text-white hover:bg-white/10"
              }`}
            >
              Contact
            </Link>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="flex items-center gap-3 text-sm font-semibold text-gray-200 px-4 py-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{COMPANY_CONFIG.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); openConsultationModal("General Consultation"); }}
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
