"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionHelpers";

export const Footer: React.FC = () => {
  const scrollToTarget = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B0F19] text-white border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid with Staggered Column Reveals */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">

          {/* Brand Column (4 Cols) */}
          <StaggerItem className="lg:col-span-4 space-y-6">
            <button
              type="button"
              onClick={() => scrollToTarget("hero")}
              className="flex items-center gap-3.5 group text-left cursor-pointer"
            >
              <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-white p-0.5 shadow-lg border border-[#D4AF37]/50 shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src={COMPANY_CONFIG.logoUrl}
                  alt={COMPANY_CONFIG.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-wider leading-none">
                  NP WEALTH
                </span>
                <span className="text-xs font-bold text-[#F2D675] tracking-widest uppercase">
                  MANAGERS
                </span>
                <span className="text-[10px] text-gray-400 tracking-tight font-medium mt-0.5">
                  Plan · Manage · Grow · Protect
                </span>
              </div>
            </button>

            <p className="text-gray-300 text-xs leading-relaxed font-normal">
              Structured wealth management, home loan syndication, mortgage solutions, and real-asset advisory tailored for individuals, families, and business enterprises across India.
            </p>

            <div className="space-y-2.5 pt-2">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="flex items-center gap-3 text-xs text-gray-300 hover:text-[#F2D675] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="flex items-center gap-3 text-xs text-gray-300 hover:text-[#F2D675] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-3 text-xs text-gray-300">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-tight">{COMPANY_CONFIG.address.fullAddress}</span>
              </div>
            </div>
          </StaggerItem>

          {/* Quick Links Column (2 Cols) */}
          <StaggerItem className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-[#F2D675] tracking-widest uppercase border-b border-[#D4AF37]/30 pb-2 inline-block">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("about")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  About Us & Approach
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("leadership")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  Leadership Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("testimonials")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  Client Stories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("partners")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  Our Bank Partners
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("careers")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  Careers & Culture
                </button>
              </li>
            </ul>
          </StaggerItem>

          {/* Services Column (3 Cols) */}
          <StaggerItem className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-[#F2D675] tracking-widest uppercase border-b border-[#D4AF37]/30 pb-2 inline-block">
              Services & Financing
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("services")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  Home Loan Solutions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("expertise")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  Loan Against Property (LAP)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("expertise")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  Home Loan Balance Transfer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("divisions")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  Real Estate & Property Advisory
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("calculators")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  EMI & Loan Calculator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToTarget("resources")}
                  className="hover:text-[#F2D675] transition-colors cursor-pointer text-left"
                >
                  Resources & Insights
                </button>
              </li>
            </ul>
          </StaggerItem>

          {/* Consultation / Newsletter Column (3 Cols) */}
          <StaggerItem className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-[#F2D675] tracking-widest uppercase border-b border-[#D4AF37]/30 pb-2 inline-block">
              Stay Informed
            </h4>
            <p className="text-xs text-gray-400 font-normal leading-relaxed">
              Subscribe for market insights, lending rate updates, and property investment guidance.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gray-700 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#D4AF37] text-[#0B0F19] rounded-lg font-bold text-xs hover:bg-[#F2D675] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[10px] text-gray-500 block">
                No spam. Unsubscribe anytime.
              </span>
            </form>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#F2D675]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-semibold">Privacy Protected & Confidential</span>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* Financial Disclaimer */}
        <FadeIn direction="up" delay={0.4}>
          <div className="py-6 border-b border-gray-800 text-[11px] text-gray-400 leading-relaxed font-normal">
            <p>
              <strong className="text-gray-300">Compliance Disclaimer:</strong> {COMPANY_CONFIG.disclaimers.footer}
            </p>
          </div>
        </FadeIn>

        {/* Bottom Credits & Copyright */}
        <FadeIn direction="up" delay={0.5}>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} NP WEALTH MANAGERS. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => scrollToTarget("contact")}
                className="hover:text-[#F2D675] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => scrollToTarget("contact")}
                className="hover:text-[#F2D675] transition-colors cursor-pointer"
              >
                Terms & Disclaimer
              </button>
              <button
                type="button"
                onClick={() => scrollToTarget("contact")}
                className="hover:text-[#F2D675] transition-colors cursor-pointer"
              >
                Contact Desk
              </button>
            </div>
          </div>
        </FadeIn>

      </div>
    </footer>
  );
};
