import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { TwoWaysSection } from "@/components/sections/TwoWaysSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "NP Wealth Managers | Build Your Wealth",
  description: "Explore personalized financial, investment, real estate and loan solutions designed around your goals. NP Wealth Managers - Your Wealth, Our Priority.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F19]">
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Stats Bar */}
      <TrustBar />

      {/* 3. Expertise Grid */}
      <ExpertiseSection />

      {/* 4. Two Core Divisions */}
      <TwoWaysSection />

      {/* 5. About Section */}
      <AboutSection />

      {/* 6. Services Catalog */}
      <ServicesSection />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Our Approach */}
      <HowItWorks />

      {/* 9. EMI Calculator */}
      <EmiCalculator />

      {/* 10. Leadership Team */}
      <TeamSection />

      {/* 11. Client Testimonials */}
      <TestimonialsSection />

      {/* 12. Partner Banks */}
      <PartnersSection />

      {/* 13. Resources & Insights */}
      <ResourcesSection />

      {/* 14. Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
