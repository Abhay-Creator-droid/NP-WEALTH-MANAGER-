import React from "react";
import { SipCalculator } from "@/components/sections/SipCalculator";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "Financial Calculators | NP Wealth Managers",
  description: "Calculate SIP investment returns and loan EMI repayments with our interactive financial planning tools.",
};

export default function CalculatorsPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#071A3D] text-white py-16 text-center border-b border-[#D4AF37]/30">
        <h1 className="text-4xl sm:text-5xl font-black">Financial Calculators</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto mt-3">
          Interactive SIP growth estimator and loan EMI repayment calculator.
        </p>
      </div>
      <SipCalculator />
      <EmiCalculator />
      <FinalCtaSection />
    </div>
  );
}
