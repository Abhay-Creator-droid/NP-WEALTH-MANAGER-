import React from "react";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TeamSection } from "@/components/sections/TeamSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "About Us | NP Wealth Managers",
  description: "Learn about NP Wealth Managers' responsible financial guidance, core values, and structured wealth architecture.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#071A3D] text-white py-16 text-center border-b border-[#D4AF37]/30">
        <h1 className="text-4xl sm:text-5xl font-black">About NP Wealth Managers</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto mt-3">
          Responsible financial guidance built on understanding individual goals, risk profiles, and milestone horizons.
        </p>
      </div>
      <AboutSection />
      <WhyChooseUs />
      <TeamSection />
      <FinalCtaSection />
    </div>
  );
}
