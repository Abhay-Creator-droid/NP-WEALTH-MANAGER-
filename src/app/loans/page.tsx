"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Home, FileCheck2, RefreshCw, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { DOCUMENT_CHECKLIST_DATA, LOAN_PROCESS_STEPS } from "@/lib/data";

export default function LoansPage() {
  const [docTab, setDocTab] = useState<"salaried" | "selfEmployed">("salaried");

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="MORTGAGE & CREDIT SYNDICATION"
        title="Loan Solutions & Mortgage Guidance"
        description="Home Purchase Loans, Loan Against Property, and Home Loan Balance Transfer optimized across 25+ partner banks & NBFCs."
        bgImage="/images/homeloan-hero.jpg"
      />

      {/* 3 Core Loan Offerings */}
      <section className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Home Loans */}
            <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center border border-[#D4AF37]/40">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#111827]">Home Loans</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                Buy, construct, build, or renovate your home with access to competitive interest rates, flexible tenure options up to 30 years, and multi-bank eligibility matching.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-gray-700 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>Up to 80%-90% LTV Financing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>Flexible Repayment Tenure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>Paperwork & Doorstep Service</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Loan Against Property */}
            <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center border border-[#D4AF37]/40">
                <FileCheck2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#111827]">Loan Against Property</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                Unlock high-ticket capital leverage against residential or commercial property equity for business expansion, debt consolidation, or high-value personal goals.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-gray-700 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>High-Ticket Loan Sanction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>Retained Property Ownership</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>Tenures Up to 15-20 Years</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Balance Transfer */}
            <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center border border-[#D4AF37]/40">
                <RefreshCw className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#111827]">Balance Transfer</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                Shift your existing home loan to a lender offering lower interest rates, reduced monthly EMIs, and potential Top-Up loan liquidity under guided assistance.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-gray-700 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>Reduced Interest Rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>Top-Up Loan Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>End-to-End Transfer Filing</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Loan Process Section */}
      <section className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827]">
              Our Loan Application <span className="text-gold-gradient">Process</span>
            </h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LOAN_PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#D4AF37]/20 shadow-md">
                <span className="text-2xl font-black text-[#B89028] block mb-2">{step.step}</span>
                <h4 className="text-lg font-black text-[#111827] mb-2">{step.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist Section */}
      <section className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 text-[#B89028] text-xs font-bold uppercase">
              <FileText className="w-4 h-4" />
              <span>PAPERWORK READY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827]">
              Required Document <span className="text-gold-gradient">Checklist</span>
            </h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setDocTab("salaried")}
              className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                docTab === "salaried"
                  ? "bg-[#0B0F19] text-[#F2D675] shadow-lg border border-[#D4AF37]"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Salaried Individuals
            </button>
            <button
              onClick={() => setDocTab("selfEmployed")}
              className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                docTab === "selfEmployed"
                  ? "bg-[#0B0F19] text-[#F2D675] shadow-lg border border-[#D4AF37]"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Self-Employed / Business
            </button>
          </div>

          {/* Checklist Grid */}
          <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-4">
            {DOCUMENT_CHECKLIST_DATA[docTab].map((doc, idx) => (
              <div key={idx} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                <ShieldCheck className="w-5 h-5 text-[#B89028] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-[#111827]">{doc.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <EmiCalculator />

      {/* Partners Network */}
      <PartnersSection />

      {/* Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
