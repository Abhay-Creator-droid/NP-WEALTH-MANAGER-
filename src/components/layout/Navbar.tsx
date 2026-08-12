"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight, ChevronDown, TrendingUp, Landmark, Building } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import { useConsultation } from "@/context/ConsultationContext";

const SERVICES_DROPDOWN = [
  {
    label: "Investments",
    href: "/investments",
    icon: TrendingUp,
    description: "SIP, Mutual Funds & Wealth Planning",
  },
  {
    label: "Loans",
    href: "/loans",
    icon: Landmark,
    description: "Home, Business & Personal Loans",
  },
  {
    label: "Real Estate",
    href: "/real-estate",
    icon: Building,
    description: "Residential, Commercial & Plots",
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { openConsultationModal } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false);
        setMobileMenuOpen(false);
        setServicesOpen(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Calculators", href: "/calculators" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const isHomePage = pathname === "/";

  const headerBg = isScrolled
    ? "bg-brand-light shadow-xl py-2.5 border-b border-gold-primary/40"
    : isHomePage
      ? "bg-transparent py-4 border-b border-transparent"
      : "bg-brand-primary py-4 border-b border-gold-primary/20";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <Link href="/" className="group flex min-w-0 shrink items-center gap-2 sm:gap-2.5 md:gap-3">
          <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl overflow-hidden bg-white p-0.5 shadow-lg shadow-black/30 border-2 border-gold-primary transition-transform group-hover:scale-105">
            <Image
              src={COMPANY_CONFIG.logoUrl}
              alt={COMPANY_CONFIG.name}
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <span className="inline-flex items-center whitespace-nowrap leading-none">
            <span className="font-black text-sm tracking-[0.04em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] sm:text-base md:text-lg lg:text-xl">
              NP
            </span>
            <span className="ml-1 font-semibold text-xs tracking-[0.02em] text-gold-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:ml-1.5 sm:text-sm md:text-base lg:text-lg">
              Wealth Managers
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              /* Services with dropdown */
              <div key={link.name} className="relative" ref={servicesRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 ${
                      pathname.startsWith("/services") ||
                      pathname === "/investments" ||
                      pathname === "/loans" ||
                      pathname === "/real-estate"
                        ? "text-gold-light bg-white/15 border-b-2 border-gold-primary"
                        : "text-white hover:text-gold-light hover:bg-white/15"
                    }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Panel */}
                {servicesOpen && (
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-72 bg-brand-primary border border-gold-glow rounded-2xl shadow-2xl shadow-black/40 overflow-hidden z-50"
                  >
                    {/* Dropdown Header */}
                    <div className="px-4 py-3 border-b border-white/10 bg-brand-dark">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-light">
                        Explore Our Solutions
                      </span>
                    </div>

                    {/* Sub-items: Investments, Loans, Real Estate */}
                    {SERVICES_DROPDOWN.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3.5 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 group ${
                            isActive ? "bg-white/15" : ""
                          }`}
                        >
                          <div className="w-9 h-9 rounded-xl bg-gold-subtle border border-gold-glow flex items-center justify-center group-hover:bg-gold-primary/30 transition-colors shrink-0">
                            <Icon className="w-4.5 h-4.5 text-gold-light w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white group-hover:text-gold-light transition-colors">
                              {item.label}
                            </p>
                            <p className="text-[11px] text-white/60 font-medium leading-tight">
                              {item.description}
                            </p>
                          </div>
                          {isActive && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-primary" />
                          )}
                        </Link>
                      );
                    })}

                    {/* View All Services Link */}
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-4 py-3 bg-brand-dark hover:brightness-95 transition-colors text-xs font-bold text-gold-light"
                    >
                      <span>View All Services</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              /* Regular nav links */
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 ${
                  pathname === link.href
                    ? "text-gold-light bg-white/15 border-b-2 border-gold-primary"
                    : "text-white hover:text-gold-light hover:bg-white/15"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-gold-light transition-colors drop-shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-gold-primary" />
            <span>{COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <button
            onClick={() => openConsultationModal("Wealth Management")}
            className="px-5 py-2.5 bg-gold-gradient text-brand-red font-black text-xs xl:text-sm rounded-xl shadow-lg shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => openConsultationModal("Wealth Management")}
            className="px-3 py-1.5 bg-gold-primary text-brand-red font-black text-xs rounded-lg shadow"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white hover:bg-white/15 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-brand-primary border-b-2 border-gold-glow shadow-2xl px-5 py-5">

          {/* Main Links */}
          <div className="flex flex-col space-y-1.5">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  pathname === link.href
                    ? "bg-white/20 text-gold-light border-l-4 border-gold-primary"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
              </Link>
            ))}

            {/* Services sub-items */}
            <div className="ml-4 border-l-2 border-[#D4AF37]/30 pl-3 space-y-1">
              {SERVICES_DROPDOWN.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
                        pathname === item.href
                          ? "bg-white/20 text-gold-light"
                          : "text-white/80 hover:bg-white/10 hover:text-gold-light"
                      }`}
                  >
                      <Icon className="w-4 h-4 text-gold-primary shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {[
              { name: "Calculators", href: "/calculators" },
              { name: "Resources", href: "/resources" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  pathname === link.href
                    ? "bg-white/20 text-[#F2D675] border-l-4 border-[#D4AF37]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
              </Link>
            ))}
          </div>

          {/* Mobile Bottom Actions */}
          <div className="mt-5 pt-5 border-t border-white/20 space-y-3">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="flex items-center gap-3 text-sm font-semibold text-white/80"
            >
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                <Phone className="w-4 h-4 text-gold-primary" />
              </div>
              <span>{COMPANY_CONFIG.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultationModal("Wealth Management");
              }}
              className="w-full py-3.5 bg-gold-gradient text-brand-red font-black text-sm rounded-xl shadow-lg"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
