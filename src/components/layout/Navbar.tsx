"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Home,
  FileCheck2,
  RefreshCw,
  Building,
  Briefcase,
  TrendingUp,
  Calculator,
  Users,
  Sparkles,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import { useConsultation } from "@/context/ConsultationContext";

const SERVICES_DROPDOWN = [
  { label: "All Services", href: "/services", icon: Sparkles, desc: "Full solutions catalog" },
  { label: "Home Loans", href: "/loans", icon: Home, desc: "Buy, build or construct your home" },
  { label: "Loan Against Property", href: "/loans", icon: FileCheck2, desc: "Leverage existing property equity" },
  { label: "Balance Transfer", href: "/loans", icon: RefreshCw, desc: "Optimize interest rate & EMIs" },
  { label: "Real Estate Advisory", href: "/real-assets", icon: Building, desc: "Residential & commercial property" },
  { label: "Wealth Management", href: "/investments", icon: Briefcase, desc: "SIP & portfolio planning" },
  { label: "EMI Calculator", href: "/calculators", icon: Calculator, desc: "Plan your monthly installments" },
];

const NAV_LINKS = [
  // Home should point to the hero section id (hero)
  { label: "Home", href: "/#hero" },
  // Services main link points to the services section on the homepage
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/#about" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const servicesRef = useRef<HTMLDivElement>(null);
  const { openConsultationModal } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

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

  // Updated isActive: treat hash links (/#something) as active when on the homepage.
  const isActive = (href: string) => {
    try {
      if (href.startsWith("/#")) {
        return pathname === "/";
      }
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(href + "/");
    } catch {
      return false;
    }
  };

  // Helper to handle anchor navigation and smooth-scrolling.
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("/#")) {
      // Non-anchor: let Link/router handle it
      return;
    }
    const hashMatch = href.match(/#(.+)$/);
    const id = hashMatch ? hashMatch[1] : null;
    if (!id) return;

    // If we're already on the homepage, prevent default Link navigation and smooth-scroll
    if (pathname === "/") {
      e.preventDefault();
      // Close mobile menu if open
      setMobileMenuOpen(false);
      // Slight timeout to allow any layout changes
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          try {
            (el as HTMLElement).focus({ preventScroll: true });
          } catch {}
        }
      }, 50);
      return;
    }

    // If on a different page, navigate to the homepage with hash — Next will handle it, then attempt to scroll after navigation
    e.preventDefault();
    setMobileMenuOpen(false);
    router.push(href).then(() => {
      setTimeout(() => {
        if (typeof document !== "undefined") {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    });
  };

  const navbarStyle = isScrolled
    ? "bg-[#0B0F19]/90 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/30"
    : "bg-transparent border-b border-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Left: Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer shrink-0">
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
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div className="relative" ref={servicesRef} key={link.label}>
                <button
                  // On click navigate to the services section; hover still opens dropdown
                  onClick={() => router.push("/#services")}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive("/services") || isActive("/loans") || isActive("/investments") || isActive("/real-assets") || isActive("/calculators")
                      ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60"
                      : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180 text-[#F2D675]" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-80 bg-[#111827] border border-[#D4AF37]/40 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-50"
                    style={{ animation: "fadeInUp 0.25s ease-out" }}
                  >
                    <div className="px-4 py-2.5 border-b border-white/10 bg-[#0B0F19]">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F2D675]">
                        Financial & Loan Services
                      </span>
                    </div>
                    <div className="p-2 space-y-1 max-h-[420px] overflow-y-auto">
                      {SERVICES_DROPDOWN.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setServicesOpen(false)}
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
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e as any, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#F2D675] bg-white/10 border border-[#D4AF37]/60"
                    : "text-gray-200 hover:text-[#F2D675] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right: Phone & Book Consultation CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-semibold text-gray-200 hover:text-[#F2D675] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden xl:inline">{COMPANY_CONFIG.phoneDisplay}</span>
          </a>

          <button
            onClick={() => openConsultationModal("General Consultation")}
            className="px-5 py-2 bg-gradient-to-r from-[#E5C158] via-[#F2D675] to-[#D4AF37] text-[#4A1515] font-extrabold text-xs xl:text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-95"
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
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#0B0F19] border-t border-[#D4AF37]/40 shadow-2xl overflow-y-auto z-50">
          <div className="px-5 py-6 space-y-2">
            {/* Mobile links updated to use the correct hash targets for homepage sections */}
            <Link
              href="/#hero"
              onClick={(e) => handleNavClick(e as any, "/#hero")}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/#services"
              onClick={(e) => handleNavClick(e as any, "/#services")}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Services
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {SERVICES_DROPDOWN.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-300 hover:bg-white/5 hover:text-[#F2D675] transition-colors"
                      >
                        <Icon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e as any, "/#about")}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/#leadership"
              onClick={(e) => handleNavClick(e as any, "/#leadership")}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Leadership
            </Link>
            <Link
              href="/#careers"
              onClick={(e) => handleNavClick(e as any, "/#careers")}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e as any, "/#contact")}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact
            </Link>

            {/* Additional Pages (left as page routes) */}
            <div className="pt-2 border-t border-white/10">
              <Link
                href="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-[#F2D675] transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="/partners"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-[#F2D675] transition-colors"
              >
                Our Partners
              </Link>
            </div>

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
        </div>
      )}
    </header>
  );
};
