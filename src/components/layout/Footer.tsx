"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import { FadeIn, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0F19] text-white border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid with Staggered Column Reveals */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">

          {/* Brand Column (4 Cols) */}
          <StaggerItem className="lg:col-span-4 space-y-6">
            <a href="#hero" className="flex items-center gap-3.5 group">
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
            </a>

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
                <a href="#about" className="hover:text-[#F2D675] transition-colors">
                  About Us & Approach
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#F2D675] transition-colors">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#F2D675] transition-colors">
                  Client Stories
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#F2D675] transition-colors">
                  Our Bank Partners
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#F2D675] transition-colors">
                  Careers & Culture
                </a>
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
                <a href="#services" className="hover:text-[#F2D675] transition-colors">
                  Home Loan Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F2D675] transition-colors">
                  Loan Against Property (LAP)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F2D675] transition-colors">
                  Home Loan Balance Transfer
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F2D675] transition-colors">
                  Real Estate & Property Advisory
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F2D675] transition-colors">
                  Business & Commercial Credit
                </a>
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
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#D4AF37] text-[#0B0F19] rounded-lg font-bold text-xs hover:bg-[#F2D675] transition-colors"
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
              <a href="#contact" className="hover:text-[#F2D675] transition-colors">
                Privacy Policy
              </a>
              <a href="#contact" className="hover:text-[#F2D675] transition-colors">
                Terms & Disclaimer
              </a>
              <a href="#contact" className="hover:text-[#F2D675] transition-colors">
                Contact Desk
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </footer>
  );
};
