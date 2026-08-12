import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WealthManagementSection } from "@/components/sections/WealthManagementSection";
import { SipCalculator } from "@/components/sections/SipCalculator";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { LoanSection } from "@/components/sections/LoanSection";
import { DocumentChecklist } from "@/components/sections/DocumentChecklist";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { RealEstateSection } from "@/components/sections/RealEstateSection";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const settings = await prisma.siteSettings.findFirst({ orderBy: { updatedAt: "desc" } });
  const properties = await prisma.property.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" }, include: { images: true } });
  const team = await prisma.teamMember.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" } });
  const testimonials = await prisma.testimonial.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" } });

  return (
    <>
      <HeroSection settings={settings ?? null} />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <WealthManagementSection />
      <SipCalculator />
      <EmiCalculator />
      <LoanSection />
      <DocumentChecklist />
      <WhyChooseUs />
      <HowItWorks />
      <TestimonialsSection testimonials={testimonials} />
      <TeamSection teamMembers={team} />
      <RealEstateSection properties={properties} />
      <ResourcesSection />
      <LeadFormSection />
      <ContactSection settings={settings ?? null} />
      <FinalCtaSection />
    </>
  );
}
