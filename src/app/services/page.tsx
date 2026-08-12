import React from "react";
import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services | NP Wealth Managers",
  description:
    "Explore wealth planning, investment management, insurance, tax planning, real estate advisory, business consulting, and personalized financial solutions from NP Wealth Managers.",
  keywords: [
    "wealth planning",
    "investment management",
    "financial advisory",
    "tax planning",
    "estate planning",
    "real estate advisory",
    "NP Wealth Managers",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | NP Wealth Managers",
    description:
      "End-to-end financial solutions designed to protect, grow, and manage wealth with precision and care.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesPageContent />
    </div>
  );
}
