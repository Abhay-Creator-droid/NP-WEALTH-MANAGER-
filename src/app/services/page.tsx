import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { TwoWaysSection } from "@/components/sections/TwoWaysSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Services | NP Wealth Managers",
  description: "Explore our full suite of home loans, loan against property, balance transfer, real estate advisory, and wealth management services.",
};

const FAQS_LIST = [
  {
    q: "What types of home loans do you assist with?",
    a: "We assist with Home Purchase Loans, Plot & Construction Loans, Home Renovation Loans, and Home Loan Balance Transfer with Top-Up facilities across 25+ partner banks & NBFCs.",
  },
  {
    q: "How does Loan Against Property (LAP) work?",
    a: "Loan Against Property allows property owners to leverage unencumbered residential or commercial real estate equity for high-ticket capital requirements at lower interest rates than unsecured loans.",
  },
  {
    q: "Are there any fees for initial consultation?",
    a: "Initial advisory consultations and loan eligibility checks with our team are completely complimentary and without obligation.",
  },
  {
    q: "What documents are required for home loan eligibility?",
    a: "Standard requirements include Aadhaar Card, PAN Card, address proof, 3 months salary slips or 2-3 years ITR filings, and 6 months bank statements.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="SOLUTIONS CATALOG"
        title="Our Services"
        description="Structured financing, mortgage syndication, real-asset acquisitions, and financial planning designed around your goals."
        bgImage="https://images.pexels.com/photos/7654163/pexels-photo-7654163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      {/* Expertise Grid Section */}
      <ExpertiseSection />

      {/* Two Core Business Areas */}
      <TwoWaysSection />

      {/* Interactive Calculator Section */}
      <EmiCalculator />

      {/* Process Section */}
      <HowItWorks />

      {/* Service FAQs Section */}
      <section className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
              <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>GOT QUESTIONS?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h2>

            <div className="gold-divider mx-auto"></div>
          </div>

          <div className="space-y-6">
            {FAQS_LIST.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#D4AF37]/25 shadow-md space-y-2"
              >
                <h3 className="text-base font-black text-[#111827] flex items-start gap-2">
                  <span className="text-[#B89028]">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <FinalCtaSection />
    </main>
  );
}
