import React from "react";
import { LoanSection } from "@/components/sections/LoanSection";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { DocumentChecklist } from "@/components/sections/DocumentChecklist";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "Loan Solutions | NP Wealth Managers",
  description: "Explore home loans, personal loans, business loans, and loan against property options with transparent lender disclosures.",
};

export default function LoansPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#071A3D] text-white py-16 text-center border-b border-[#D4AF37]/30">
        <h1 className="text-4xl sm:text-5xl font-black">Loan Solutions</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto mt-3">
          Responsible financing assistance across home loans, personal credit, business capital, and mortgage options.
        </p>
      </div>
      <LoanSection />
      <EmiCalculator />
      <DocumentChecklist />
      <FinalCtaSection />
    </div>
  );
}
