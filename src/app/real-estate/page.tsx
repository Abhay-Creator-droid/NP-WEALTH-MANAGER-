import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { RealEstateSection } from "@/components/sections/RealEstateSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "Real Estate Opportunities | NP Wealth Managers",
  description:
    "Explore residential developments, commercial space assets, and strategic plot parcels across key Indian hubs.",
};

export default function RealEstatePage() {
  return (
    <div>
      <PageHero
        eyebrow="PROPERTY & REAL ASSETS"
        title="Real Estate Opportunities"
        description="Curated property options tailored for end-users, corporate hubs, and long-term land investors across key Indian hubs."
        bgImage="/images/realestate-hero.jpg"
      />
      <RealEstateSection />
      <FinalCtaSection />
    </div>
  );
}
