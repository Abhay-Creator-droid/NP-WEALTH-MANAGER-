"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-gold-glow pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-white p-0.5 shadow-md shadow-gold-glow border border-gold-glow shrink-0">
                <Image
                  src={COMPANY_CONFIG.logoUrl}
                  alt={COMPANY_CONFIG.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl text-white tracking-wider leading-none whitespace-nowrap">
                  NP WEALTH
                </span>
                <span className="font-black text-xl text-gold-light tracking-wider leading-none whitespace-nowrap">
                  MANAGERS
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              {COMPANY_CONFIG.heroSubtitle}
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-primary shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="hover:text-gold-light transition-colors">
                  {COMPANY_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-primary shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-gold-light transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1: Services */}
          <div>
            <h4 className="text-xs font-extrabold text-gold-light uppercase tracking-wider mb-4">
              Services & Advisory
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/services#wealth-management" className="hover:text-gold-light transition-colors">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/investments" className="hover:text-[#F2D675] transition-colors">
                  Mutual Funds & SIP
                </Link>
              </li>
              <li>
                <Link href="/services#financial-planning" className="hover:text-[#F2D675] transition-colors">
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-[#F2D675] transition-colors">
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-[#F2D675] transition-colors">
                  EMI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Loans */}
          <div>
            <h4 className="text-xs font-extrabold text-gold-light uppercase tracking-wider mb-4">
              Loan Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/loans#home-loans" className="hover:text-[#F2D675] transition-colors">
                  Home Loans
                </Link>
              </li>
              <li>
                <Link href="/loans#personal-loans" className="hover:text-[#F2D675] transition-colors">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link href="/loans#business-loans" className="hover:text-[#F2D675] transition-colors">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link href="/loans#loan-against-property" className="hover:text-[#F2D675] transition-colors">
                  Loan Against Property
                </Link>
              </li>
              <li>
                <Link href="/loans#document-checklist" className="hover:text-[#F2D675] transition-colors">
                  Document Checklist
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Real Estate & Company */}
          <div>
            <h4 className="text-xs font-extrabold text-gold-light uppercase tracking-wider mb-4">
              Real Estate & Corporate
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/real-estate" className="hover:text-[#F2D675] transition-colors">
                  Residential Properties
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="hover:text-[#F2D675] transition-colors">
                  Commercial Assets
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F2D675] transition-colors">
                  About NP Wealth
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#F2D675] transition-colors">
                  Resource Hub & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F2D675] transition-colors">
                  Contact Advisory Desk
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Legal Disclaimer */}
          <div className="py-6 border-b border-slate-800 text-xs text-slate-300 leading-relaxed">
          <p className="font-semibold text-slate-200 mb-1">Compliance & Regulatory Disclaimer:</p>
          <p>{COMPANY_CONFIG.disclaimers.footer}</p>
        </div>

        {/* Copyright & Sub-links */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} {COMPANY_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-gold-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gold-light transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-gold-light transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
