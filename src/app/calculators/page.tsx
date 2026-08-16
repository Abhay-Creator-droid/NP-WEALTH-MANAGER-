import React from "react";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Sparkles, Calculator, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "EMI Calculator | NP Wealth Managers",
  description: "Calculate your monthly home loan EMI, total interest payable, and loan amortization schedule with our interactive EMI calculator.",
};

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Page Hero */}
      <section className="bg-[#0B0F19] text-white py-16 border-b border-[#D4AF37]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>FINANCIAL TOOLS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Interactive <span className="text-gold-gradient">EMI Calculator</span>
          </h1>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Plan your monthly budget, test interest rate scenarios, and calculate home loan installments instantly.
          </p>
        </div>
      </section>

      {/* Main EMI Calculator Component */}
      <EmiCalculator />

      {/* EMI Planning Tips */}
      <section className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827]">
              Key Tips for <span className="text-gold-gradient">Home Loan Planning</span>
            </h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-4">
            {[
              "Maintain FOIR Ratio under 40%-50%: Ensure total monthly EMIs across all loans do not exceed half your monthly net income.",
              "Choose Optimal Tenure: Longer tenure reduces monthly EMI amounts, while shorter tenure minimizes total interest paid.",
              "Evaluate Balance Transfers: If your current loan interest rate is high, a balance transfer can lower your monthly EMI burden significantly.",
              "Consult an Advisor: Our team will help align your CIBIL score and income profile to secure the lowest benchmark rate available.",
            ].map((tip, idx) => (
              <div key={idx} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                <CheckCircle2 className="w-5 h-5 text-[#B89028] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-[#111827]">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
