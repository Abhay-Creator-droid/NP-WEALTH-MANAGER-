import React from "react";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Briefcase, Users, Award, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { CAREERS_ROLES, CareerRole } from "@/lib/data";

export const metadata = {
  title: "Careers & Culture | NP Wealth Managers",
  description: "Join NP Wealth Managers and build a career in wealth management, home loan syndication, and real-asset advisory.",
};

const CULTURE_PILLARS = [
  { title: "Client-Centric Excellence", desc: "Prioritizing long-term relationship trust over short-term transactions." },
  { title: "Continuous Mentorship", desc: "Learn directly from senior banking & property industry leaders." },
  { title: "Growth & Performance", desc: "Merit-based advancement, competitive compensation, and career clarity." },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Page Hero */}
      <section className="bg-[#0B0F19] text-white py-16 border-b border-[#D4AF37]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>JOIN OUR ADVISORY TEAM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Careers & <span className="text-gold-gradient">Culture</span>
          </h1>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Build your career with a leading financial and mortgage syndication firm committed to professional excellence and client trust.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827]">
              Why Work With <span className="text-gold-gradient">NP Wealth Managers</span>
            </h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {CULTURE_PILLARS.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111827]">{p.title}</h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions Grid */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827]">
              Open <span className="text-gold-gradient">Positions</span>
            </h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {CAREERS_ROLES.map((role: CareerRole) => (
              <div
                key={role.id}
                className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-[#0B0F19] text-[#F2D675] rounded-full">
                      {role.department}
                    </span>
                    <span className="text-xs text-gray-500 font-bold">{role.location}</span>
                    <span className="text-xs text-gray-500 font-bold">• {role.type}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#111827]">{role.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">{role.description}</p>

                  <div className="space-y-1.5 pt-2">
                    {role.requirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B89028] shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:careers@npwealthmanagers.com?subject=Application for ${role.title}`}
                  className="px-6 py-3 bg-[#0B0F19] text-[#F2D675] rounded-xl font-bold text-xs sm:text-sm hover:bg-[#D4AF37] hover:text-[#0B0F19] transition-colors shrink-0 flex items-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
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
