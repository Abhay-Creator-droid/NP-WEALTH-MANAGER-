import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { COMPANY_CONFIG } from "@/lib/config";
import { ConsultationProvider } from "@/context/ConsultationContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ConsultationModal } from "@/components/common/ConsultationModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: COMPANY_CONFIG.seo.title,
  description: COMPANY_CONFIG.seo.description,
  keywords: COMPANY_CONFIG.seo.keywords,
  authors: [{ name: COMPANY_CONFIG.name }],
  metadataBase: new URL(COMPANY_CONFIG.seo.domain),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: COMPANY_CONFIG.seo.title,
    description: COMPANY_CONFIG.seo.description,
    url: COMPANY_CONFIG.seo.domain,
    siteName: COMPANY_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_CONFIG.seo.title,
    description: COMPANY_CONFIG.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: COMPANY_CONFIG.name,
    description: COMPANY_CONFIG.seo.description,
    url: COMPANY_CONFIG.seo.domain,
    telephone: COMPANY_CONFIG.phoneDisplay,
    email: COMPANY_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_CONFIG.address.street,
      addressLocality: COMPANY_CONFIG.address.city,
      addressRegion: COMPANY_CONFIG.address.state,
      postalCode: COMPANY_CONFIG.address.pincode,
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:30-18:30",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans bg-[#F7F9FC] text-[#0A162B] antialiased`}>
        <ConsultationProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ConsultationModal />
        </ConsultationProvider>
      </body>
    </html>
  );
}
