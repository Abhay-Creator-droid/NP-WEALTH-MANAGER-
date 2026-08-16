import React from "react";
import { TeamSection } from "@/components/sections/TeamSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ShieldCheck, Target, Award, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export const metadata = {
  title: "About Us | NP Wealth Managers",
  description: "Learn about NP Wealth Managers, our leadership team, core values, and structured approach to home loans, mortgage syndication, and real assets.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Header Banner */}
      <section className="bg-[#0B0F19] text-white py-16 border-b border-[#D4AF37]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>WHO WE ARE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-gold-gradient">NP Wealth Managers</span>
          </h1>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Plan · Manage · Grow · Protect — Delivering transparent financial planning, competitive home loan syndication, and real-asset advisory across India.
          </p>
        </div>
      </section>

      {/* Company Overview & Mission */}
      <section className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/15 text-[#B89028] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Our Foundation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
                Empowering Clients with <br />
                <span className="text-gold-gradient">Financial Clarity & Security</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                NP WEALTH MANAGERS was founded on a simple principle: to make financial decisions, home financing, and property acquisitions transparent, structured, and client-centric.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                With over a decade of combined advisory experience, our team bridges the gap between individual financial aspirations and complex bank underwriting requirements, securing competitive terms across 25+ partner lending institutions.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Unbiased, multi-lender home loan comparisons",
                  "Structured Loan Against Property (LAP) leverage",
                  "Real estate due diligence & property title verification",
                  "Long-term relationship care with zero hidden terms",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#111827] font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-[#B89028] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111827] mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  To provide accessible, transparent, and disciplined financial guidance that helps individuals build wealth, acquire dream properties, and navigate credit solutions with total peace of mind.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#F2D675]" />
                </div>
                <h3 className="text-xl font-black text-[#111827] mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  To be India's most trusted wealth and mortgage advisory firm, recognized for relationship integrity, fast-track lender syndication, and high-impact real-asset advisory.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Track Record Stats Bar */}
      <TrustBar />

      {/* Executive Leadership Section */}
      <TeamSection />

      {/* Final Call To Action */}
      <FinalCtaSection />
    </main>
  );
}
