import React from "react";
import { WealthManagementSection } from "@/components/sections/WealthManagementSection";
import { SipCalculator } from "@/components/sections/SipCalculator";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "Wealth & Investments | NP Wealth Managers",
  description: "Explore SIPs, mutual funds, goal-based planning, and wealth management strategies tailored to your financial horizon.",
};

export default function InvestmentsPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#071A3D] text-white py-16 text-center border-b border-[#D4AF37]/30">
        <h1 className="text-4xl sm:text-5xl font-black">Wealth & Investments</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto mt-3">
          Disciplined systematic investment planning and goal-driven capital allocation strategies.
        </p>
      </div>
      <WealthManagementSection />
      <SipCalculator />
      <FinalCtaSection />
    </div>
  );
}
