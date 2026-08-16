import React from "react";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Bank & NBFC Partners | NP Wealth Managers",
  description: "Explore our institutional bank & NBFC syndication network across 25+ top financial institutions in India.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Page Hero */}
      <section className="bg-[#0B0F19] text-white py-16 border-b border-[#D4AF37]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>INSTITUTIONAL NETWORK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our <span className="text-gold-gradient">Partners</span>
          </h1>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Relationships with over 25 leading public, private, and housing finance institutions ensuring maximum loan approval choices.
          </p>
        </div>
      </section>

      {/* Partners Grid Component */}
      <PartnersSection />

      {/* Multi-Lender Advantages */}
      <section className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 text-[#B89028] text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>THE MULTI-BANK ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827]">
              Why Multi-Lender Access <span className="text-gold-gradient">Matters</span>
            </h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-4">
            {[
              "Access to lower interest rate benchmarks across competing banks",
              "Higher probability of approval by matching individual FOIR & credit profiles to the right lender",
              "Faster sanction processing through dedicated partner channel desks",
              "Option to structure Top-Up loans alongside home loan balance transfers",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                <CheckCircle2 className="w-5 h-5 text-[#B89028] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-[#111827]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <TrustBar />

      {/* Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
