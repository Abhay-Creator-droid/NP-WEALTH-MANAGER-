/**
 * Central Configuration for NP WEALTH MANAGERS
 * All contact details, brand metadata, and global parameters are managed here.
 * DO NOT hardcode phone numbers, emails, or company addresses inside component files.
 *
 * How to update company information:
 * 1. Edit values inside COMPANY_CONFIG only.
 * 2. Keep `phoneRaw` in international format, e.g. +919027782514.
 * 3. Keep `whatsappNumber` as digits only, without + or spaces.
 * 4. Update `businessHours` keys if used by contact display components.
 * 5. Update SEO metadata whenever brand text or domain changes.
 */

export const COMPANY_CONFIG = {
  name: "NP WEALTH MANAGERS",
  shortName: "NP Wealth",
  tagline: "PLAN - MANAGE - GROW - PROTECT",
  logoUrl: "/logo.jpg",
  heroSubtitle: "Explore personalized financial, investment, real estate and loan solutions designed around your goals.",
  
  // Contact Details (Configurable Placeholders)
  phoneDisplay: "+91 9027782514",
  phoneRaw: "+919027782514", // Central PHONE_NUMBER variable
  whatsappNumber: "918882050775", // Central WHATSAPP_NUMBER variable
  whatsappDefaultMessage: "Hello NP Wealth Managers, I would like to explore financial solutions for my goals.",
  email: "npwealthmanagers@gmail.com",
  supportEmail: "npwealthmanagers@gmail.com",
  
  // Physical Office Address Placeholder
  address: {
    building: "H Block 202, Office suite no. 306, Tower Dallas 1 Business Park",
    street: "Lohiya Road, Sector 63 Noida",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    country: "India",
    fullAddress: "H Block 202, Office suite no. 306, Tower Dallas 1 Business Park, Sector 63 Noida, Uttar Pradesh 201301",
  },
  
  businessHours: {
    weekdays: "Monday - Friday: 10:00 AM - 6:00 PM",
    saturday: "Saturday: Closed",
    sunday: "Sunday: Closed",
  },
  
  socialLinks: {
    facebook: "https://facebook.com/npwealthmanagers",
    instagram: "https://instagram.com/npwealthmanagers",
  },
  
  // SEO & Metadata
  seo: {
    title: "NP Wealth Managers | Wealth Management, Investments & Loans",
    description: "Explore personalized financial planning, mutual funds, home loans, business loans, and real estate solutions with NP Wealth Managers in India.",
    keywords: [
      "NP Wealth Managers",
      "Financial Planning",
      "Mutual Funds",
      "SIP Investment",
      "Real Estate Investment",
      "Personal Loan Eligibility",
      "Home Loan Options",
      "Business Loans",
      "Loan Against Property",
    ],
    domain: "https://www.npwealthmanagers.com",
  },
  
  // Financial Compliance Disclaimers
  disclaimers: {
    footer: "Financial products and services are subject to eligibility, documentation, market conditions and applicable terms. Information presented on this website is for general informational purposes and should not be considered guaranteed financial advice.",
    sip: "Calculations are illustrative and do not represent guaranteed returns. Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing.",
    emi: "Actual loan terms, rates, EMI amounts and approval are subject to lender policies, credit evaluation, and applicant eligibility.",
    loan: "Required documents, interest rates, and loan processing timelines may vary depending on applicant profile and lender policies. No guaranteed loan approvals are claimed.",
    realEstate: "Property specifications and images are for visual illustration. Terms are subject to owner/developer documentation, legal due diligence, and final agreements.",
  },
};
