import React from "react";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "Resources & Articles | NP Wealth Managers",
  description: "Educational articles on SIP investing, home loan eligibility, real estate due diligence, and financial planning.",
};

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#071A3D] text-white py-16 text-center border-b border-[#D4AF37]/30">
        <h1 className="text-4xl sm:text-5xl font-black">Resources & Knowledge Hub</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto mt-3">
          Practical financial insights, credit parameter guides, and investment principles.
        </p>
      </div>
      <ResourcesSection />
      <FinalCtaSection />
    </div>
  );
}
