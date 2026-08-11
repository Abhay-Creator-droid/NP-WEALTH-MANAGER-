import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

const SEED_SERVICES = [
  { name: "Wealth Management", slug: "wealth-management", shortDesc: "Structured guidance for your long-term financial goals.", fullDesc: "Our wealth management service focuses on understanding your family's overall financial profile, risk preferences, and long-term liquidity needs.", icon: "Briefcase", displayOrder: 1 },
  { name: "SIP & Mutual Funds", slug: "sip-mutual-funds", shortDesc: "Explore investment options aligned with your goals and risk profile.", fullDesc: "Systematic Investment Plans provide a disciplined mechanism for exploring equity and debt mutual funds based on individual financial horizons.", icon: "TrendingUp", displayOrder: 2 },
  { name: "Financial Planning", slug: "financial-planning", shortDesc: "Plan for important milestones with a structured financial approach.", fullDesc: "Comprehensive financial planning evaluates life milestones such as retirement planning, children's education, and emergency liquidity.", icon: "Target", displayOrder: 3 },
  { name: "Home Loans", slug: "home-loans", shortDesc: "Explore suitable home financing options based on eligibility.", fullDesc: "Assistance in navigating property purchasing options, home balance transfers, and top-up loan options across multiple lenders.", icon: "Home", displayOrder: 4 },
  { name: "Business Loans", slug: "business-loans", shortDesc: "Financing options for eligible business requirements.", fullDesc: "Explore collateral-free business expansion options, working capital assistance, and equipment purchase financing for eligible enterprises.", icon: "Building2", displayOrder: 5 },
  { name: "Real Estate", slug: "real-estate", shortDesc: "Explore residential, commercial and property investment opportunities.", fullDesc: "Curated access to residential developments, commercial space options, and land parcels. Subject to eligibility and documentation.", icon: "Building", displayOrder: 6 },
  { name: "Personal Loans", slug: "personal-loans", shortDesc: "Explore personal financing options for eligible requirements.", fullDesc: "Unsecured credit options for medical emergency liquidity, educational funding, or home renovation subject to lender eligibility.", icon: "Wallet", displayOrder: 7 },
  { name: "Loan Against Property", slug: "loan-against-property", shortDesc: "Explore financing options against eligible property.", fullDesc: "Unlock liquidity from existing residential or commercial real estate assets. Approval is subject to lender policies.", icon: "FileCheck2", displayOrder: 8 },
];

const SEED_LOANS = [
  { name: "Personal Loan", slug: "personal-loan", description: "Explore personal financing for eligible requirements. Terms and conditions apply.", eligibility: "Salaried and self-employed applicants subject to lender criteria.", documents: "KYC, income proof, bank statements as per lender requirements.", features: "Flexible tenure options\nNo collateral for eligible profiles\nSubject to credit evaluation", displayOrder: 1 },
  { name: "Home Loan", slug: "home-loan", description: "Explore home financing options for eligible applicants.", eligibility: "Income, credit score, and property evaluation as per lender norms.", documents: "KYC, income proof, property documents, bank statements.", features: "Balance transfer options\nFlexible tenure\nSubject to lender approval", displayOrder: 2 },
  { name: "Business Loan", slug: "business-loan", description: "Financing options for eligible business enterprises.", eligibility: "Business vintage, financials, and credit profile evaluation.", documents: "Business KYC, ITR, bank statements, business proof.", features: "Working capital support\nExpansion financing\nSubject to lender terms", displayOrder: 3 },
  { name: "Loan Against Property", slug: "loan-against-property", description: "Explore financing against eligible property assets.", eligibility: "Property ownership, income profile, and lender policy criteria.", documents: "Property papers, KYC, income proof, bank statements.", features: "Higher ticket sizes possible\nLonger tenure options\nSubject to valuation", displayOrder: 4 },
  { name: "Balance Transfer", slug: "balance-transfer", description: "Evaluate balance transfer options for existing home loans.", eligibility: "Existing loan track record and applicant profile.", documents: "Existing loan statements, KYC, income proof.", features: "Rate comparison support\nDocumentation assistance\nSubject to lender approval", displayOrder: 5 },
];

function isSeedAuthorized(request: NextRequest): boolean {
  if (process.env.NODE_ENV !== "production") return true;

  const initSecret = process.env.SEED_INIT_SECRET;
  if (!initSecret) return false;

  const authHeader = request.headers.get("authorization");
  return authHeader === `Bearer ${initSecret}`;
}

async function seedContent() {
  for (const svc of SEED_SERVICES) {
    await prisma.service.upsert({
      where: { slug: svc.slug },
      update: {},
      create: { ...svc, status: "PUBLISHED" },
    });
  }
  for (const loan of SEED_LOANS) {
    await prisma.loanService.upsert({
      where: { slug: loan.slug },
      update: {},
      create: { ...loan, status: "PUBLISHED" },
    });
  }
}

export async function POST(request: NextRequest) {
  if (!isSeedAuthorized(request)) {
    return NextResponse.json(
      { error: "Seed endpoint is disabled in production without SEED_INIT_SECRET authorization." },
      { status: 403 }
    );
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return NextResponse.json({ error: "ADMIN_EMAIL and ADMIN_PASSWORD must be configured." }, { status: 500 });
  }

  const existing = await prisma.adminUser.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    const passwordHash = await hashPassword(adminPassword);
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        name: "Admin",
        passwordHash,
        role: "SUPER_ADMIN",
      },
    });
  }

  const existingSettings = await prisma.siteSettings.findFirst();
  if (!existingSettings) {
    await prisma.siteSettings.create({
      data: {
        companyName: "NP WEALTH MANAGERS",
        shortName: "NP Wealth",
        tagline: "PLAN - MANAGE - GROW - PROTECT",
        logoUrl: "/logo.jpg",
        faviconUrl: "/favicon.ico",
        phoneDisplay: "+91 9027782514",
        phoneRaw: "+919027782514",
        whatsappNumber: "918882050775",
        whatsappDefaultMessage: "Hello NP Wealth Managers, I would like to explore financial solutions for my goals.",
        email: "npwealthmanagers@gmail.com",
        supportEmail: "npwealthmanagers@gmail.com",
        address: "H Block 202, Office suite no. 306, Tower Dallas 1 Business Park, Sector 63 Noida, Uttar Pradesh 201301",
        googleMapsLink: "https://maps.google.com?q=Bandra+Kurla+Complex+Mumbai",
        businessHours: JSON.stringify({
          weekdays: "Monday - Friday: 10:00 AM - 6:00 PM",
          saturday: "Saturday: Closed",
          sunday: "Sunday: Closed",
        }),
        socialLinks: JSON.stringify({
          facebook: "https://facebook.com/npwealthmanagers",
          instagram: "https://instagram.com/npwealthmanagers",
        }),
        heroHeading: "Build Your Wealth.",
        heroSubtitle: "Explore personalized financial, investment, real estate and loan solutions designed around your goals.",
        heroCtaPrimaryText: "Book a Consultation",
        heroCtaPrimaryLink: "#",
        heroCtaSecondaryText: "Explore Our Services",
        heroCtaSecondaryLink: "#services",
        heroImageUrl: "/hero-image.jpg",
        heroBackgroundUrl: "/hero-bg.jpg",
        heroBadgeText: "SMARTER FINANCIAL DECISIONS",
        aboutTitle: "Trusted Wealth Management",
        aboutDescription: "NP Wealth Managers helps you create wealth through smart financial planning, investment advice, and loan support.",
        mission: "Deliver disciplined financial solutions for every life stage.",
        vision: "Empower Indian investors with accessible financial clarity.",
        footerText: "Financial products and services are subject to eligibility, documentation, market conditions and applicable terms.",
        disclaimer: "Information presented on this website is for general informational purposes and should not be considered financial advice.",
        seoTitle: "NP Wealth Managers | Wealth Management, Investments & Loans",
        seoDescription: "Explore personalized financial planning, mutual funds, home loans, business loans, and real estate solutions with NP Wealth Managers in India.",
        seoKeywords: "NP Wealth Managers, Financial Planning, Mutual Funds, SIP Investment, Real Estate Investment, Home Loans, Business Loans",
        seoDefaultImageUrl: "/social-share.jpg",
        metaPixelId: "",
        googleAnalyticsId: "",
      },
    });
  }

  await seedContent();

  return NextResponse.json({ message: "Seed complete" });
}
