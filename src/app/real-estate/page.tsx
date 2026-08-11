import React from "react";
import { RealEstateSection } from "@/components/sections/RealEstateSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "Real Estate Opportunities | NP Wealth Managers",
  description: "Explore residential developments, commercial space assets, and strategic plot parcels across key Indian hubs.",
};

export default function RealEstatePage() {
  return (
    <div className="pt-20">
      <div className="bg-[#071A3D] text-white py-16 text-center border-b border-[#D4AF37]/30">
        <h1 className="text-4xl sm:text-5xl font-black">Real Estate Opportunities</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto mt-3">
          Curated property options tailored for end-users, corporate hubs, and long-term land investors.
        </p>
      </div>
      <RealEstateSection />
      <FinalCtaSection />
    </div>
  );
}
