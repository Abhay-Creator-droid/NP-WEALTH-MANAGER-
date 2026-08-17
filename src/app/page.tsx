import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";

export const metadata = {
  title: "NP Wealth Managers | Build Your Wealth",
  description:
    "Explore personalized financial, investment, real estate and loan solutions designed around your goals. NP Wealth Managers - Your Wealth, Our Priority.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F19]">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats / Trust Bar */}
      <TrustBar />
    </main>
  );
}
