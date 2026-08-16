import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { TeamSection } from "@/components/sections/TeamSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ShieldCheck, Target, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | NP Wealth Managers",
  description: "Learn about NP Wealth Managers, our leadership team, core values, and structured approach to home loans, mortgage syndication, and real assets.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="WHO WE ARE"
        title="About NP Wealth Managers"
        description="Plan · Manage · Grow · Protect — Delivering transparent financial planning, competitive home loan syndication, and real-asset advisory across India."
        bgImage="https://images.pexels.com/photos/7845366/pexels-photo-7845366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

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
