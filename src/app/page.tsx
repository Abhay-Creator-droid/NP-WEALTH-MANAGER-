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
import { CareersSection } from "@/components/sections/CareersSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "NP Wealth Managers | Build Your Wealth",
  description: "Explore personalized financial, investment, real estate and loan solutions designed around your goals. NP Wealth Managers - Your Wealth, Our Priority.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F19]">
      {/* 1. Cinematic Hero (#hero) */}
      <HeroSection />

      {/* 2. Stats Bar (#stats) */}
      <TrustBar />

      {/* 3. Expertise Grid (#expertise) */}
      <ExpertiseSection />

      {/* 4. Two Core Divisions (#divisions) */}
      <TwoWaysSection />

      {/* 5. About Section (#about) */}
      <AboutSection />

      {/* 6. Services Catalog (#services) */}
      <ServicesSection />

      {/* 7. Why Choose Us (#why-choose-us) */}
      <WhyChooseUs />

      {/* 8. Our Approach (#approach) */}
      <HowItWorks />

      {/* 9. EMI Calculator (#calculators) */}
      <EmiCalculator />

      {/* 10. Leadership Team (#leadership) */}
      <TeamSection />

      {/* 11. Client Testimonials (#testimonials) */}
      <TestimonialsSection />

      {/* 12. Partner Banks (#partners) */}
      <PartnersSection />

      {/* 13. Careers (#careers) */}
      <CareersSection />

      {/* 14. Resources & Insights (#resources) */}
      <ResourcesSection />

      {/* 15. Final CTA (#contact-cta) */}
      <FinalCtaSection />

      {/* 16. Contact Desk (#contact) */}
      <ContactSection settings={null} />
    </main>
  );
}
