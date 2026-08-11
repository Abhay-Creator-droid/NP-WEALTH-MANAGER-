import React from "react";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "Services & Solutions | NP Wealth Managers",
  description: "Explore financial solutions across wealth management, mutual funds, home loans, personal loans, business loans, and real estate.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#071A3D] text-white py-16 text-center border-b border-[#D4AF37]/30">
        <h1 className="text-4xl sm:text-5xl font-black">Services & Solutions</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto mt-3">
          Comprehensive wealth management, investment planning, property, and lender options under one roof.
        </p>
      </div>
      <ServicesSection />
      <HowItWorks />
      <FinalCtaSection />
    </div>
  );
}
