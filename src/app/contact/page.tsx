import React from "react";
import { ContactSection } from "@/components/sections/ContactSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact Us | NP Wealth Managers",
  description: "Get in touch with NP Wealth Managers advisory desk via phone, email, WhatsApp, or consultation form.",
};

export default async function ContactPage() {
  const settings = await prisma.siteSettings.findFirst({ orderBy: { updatedAt: "desc" } });

  return (
    <div className="pt-20">
      <div className="bg-[#071A3D] text-white py-16 text-center border-b border-[#D4AF37]/30">
        <h1 className="text-4xl sm:text-5xl font-black">Contact Advisory Desk</h1>
        <p className="text-slate-300 text-base max-w-xl mx-auto mt-3">
          We are here to answer your questions and help you explore suitable options matched to your financial goals.
        </p>
      </div>
      <ContactSection settings={settings ?? null} />
      <LeadFormSection />
      <FinalCtaSection />
    </div>
  );
}
