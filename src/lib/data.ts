export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  category: "investments" | "loans" | "realestate" | "wealth";
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  targetAudience: string;
}

export type ServiceCatalogSection = "core" | "specialized" | "value-added";

export interface ServiceCatalogItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  section: ServiceCatalogSection;
}

export interface ServiceCatalogSectionConfig {
  id: ServiceCatalogSection;
  heading: string;
  eyebrow: string;
  gridClass: string;
}

export const SERVICE_CATALOG_SECTIONS: ServiceCatalogSectionConfig[] = [
  {
    id: "core",
    heading: "Core Advisory Solutions",
    eyebrow: "Foundation",
    gridClass: "sm:grid-cols-2 xl:grid-cols-4",
  },
  {
    id: "specialized",
    heading: "Specialized Financing & Property",
    eyebrow: "Expertise",
    gridClass: "sm:grid-cols-2 lg:grid-cols-3",
  },
  {
    id: "value-added",
    heading: "Value-Added Client Services",
    eyebrow: "Beyond Advisory",
    gridClass: "sm:grid-cols-2 lg:grid-cols-3",
  },
];

export const SERVICES_CATALOG: ServiceCatalogItem[] = [
  {
    id: "home-loan-solutions",
    title: "Home Loan Solutions",
    description: "Purchase, construct, build, or renovate your dream residential property with competitive lender options.",
    iconName: "Home",
    section: "core",
  },
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    description: "Unlock high-ticket capital leverage using your existing residential or commercial property equity.",
    iconName: "FileCheck2",
    section: "core",
  },
  {
    id: "balance-transfer-topup",
    title: "Balance Transfer & Top-Up",
    description: "Optimize existing home loans with lower interest rate structures and seamless lender balance transfer.",
    iconName: "ArrowRightLeft",
    section: "core",
  },
  {
    id: "real-estate-investment-advisory",
    title: "Real Estate Advisory",
    description: "Curated residential, commercial, industrial, and mixed-use property advisory across prime corridors.",
    iconName: "Building",
    section: "core",
  },
  {
    id: "business-loan-consulting",
    title: "Business & Commercial Loans",
    description: "Capital access, working capital assistance, and growth credit structuring for eligible MSMEs.",
    iconName: "Landmark",
    section: "specialized",
  },
  {
    id: "wealth-planning-advisory",
    title: "Wealth & Investment Management",
    description: "Disciplined capital allocation across SIPs, mutual funds, and long-term financial milestone plans.",
    iconName: "Briefcase",
    section: "specialized",
  },
  {
    id: "easy-documentation-assistance",
    title: "Easy Documentation & Support",
    description: "End-to-end guidance through paperwork, legal title checks, and bank verification steps.",
    iconName: "ShieldCheck",
    section: "specialized",
  },
  {
    id: "emi-calculator-tool",
    title: "Interactive EMI Calculator",
    description: "Instant amortization, interest calculations, and payment schedule breakdown for financial planning.",
    iconName: "Calculator",
    section: "value-added",
  },
  {
    id: "portfolio-review-optimization",
    title: "Portfolio & Loan Review",
    description: "Periodic assessment of financing terms and investment holdings to align with evolving needs.",
    iconName: "PieChart",
    section: "value-added",
  },
];

export const getServicesBySection = (section: ServiceCatalogSection) =>
  SERVICES_CATALOG.filter((service) => service.section === section);

// ----------------------------------------------------
// 1. EXPERTISE SERVICES (6 Key Cards for Reference Site)
// ----------------------------------------------------
export interface ExpertiseItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  badge?: string;
  link: string;
}

export const EXPERTISE_SERVICES: ExpertiseItem[] = [
  {
    id: "home-loans",
    title: "Home Loan Solutions",
    iconName: "Home",
    description: "Buy, build, construct, or renovate your dream home with access to prime lender options and tailored terms.",
    badge: "Popular",
    link: "/loans",
  },
  {
    id: "lap",
    title: "Loan Against Property",
    iconName: "FileText",
    description: "Unlock significant capital from the residential or commercial property equity you already own.",
    link: "/loans",
  },
  {
    id: "balance-transfer",
    title: "Balance Transfer",
    iconName: "RefreshCw",
    description: "Help clients reduce monthly EMIs and optimize interest rate structures on existing home loans.",
    link: "/loans",
  },
  {
    id: "easy-docs",
    title: "Easy Documentation",
    iconName: "CheckSquare",
    description: "Simplified, step-by-step paper submission and guided assistance through financial verification.",
    link: "/contact",
  },
  {
    id: "competitive-rates",
    title: "Competitive Interest Rates",
    iconName: "TrendingUp",
    description: "Access suitable lender financing choices across leading banks and NBFC partner networks.",
    link: "/loans",
  },
  {
    id: "expert-guidance",
    title: "Expert Guidance",
    iconName: "UserCheck",
    description: "End-to-end advisory from initial eligibility evaluation to final loan sanction and disbursement.",
    link: "/about",
  },
];

// ----------------------------------------------------
// 2. WHY CHOOSE US PILLARS (6 Cards Grid)
// ----------------------------------------------------
export interface WhyChoosePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const WHY_CHOOSE_US_PILLARS: WhyChoosePillar[] = [
  {
    id: "trusted-advisors",
    title: "Trusted Advisors",
    description: "Unbiased, client-centric guidance backed by over a decade of financial and real-asset expertise.",
    iconName: "Shield",
  },
  {
    id: "personalized-solutions",
    title: "Personalized Solutions",
    description: "Financial and loan structures customized to match individual cash-flow needs and long-term goals.",
    iconName: "Sliders",
  },
  {
    id: "quick-approval",
    title: "Quick Approval Process",
    description: "Streamlined documentation filing and dedicated support to minimize lender processing times.",
    iconName: "Zap",
  },
  {
    id: "wide-network",
    title: "Wide Partner Network",
    description: "Strong relationships across 25+ leading banks, NBFCs, and top Grade-A real estate developers.",
    iconName: "Grid",
  },
  {
    id: "transparent-process",
    title: "Transparent Process",
    description: "Clear communication with zero hidden terms, transparent disclosures, and zero ambiguity.",
    iconName: "Eye",
  },
  {
    id: "ongoing-support",
    title: "Ongoing Support",
    description: "Long-term relationship management focused on ongoing portfolio alignment and financial care.",
    iconName: "Clock",
  },
];

// ----------------------------------------------------
// 3. TWO CORE BUSINESS AREAS (Loans vs Real Assets)
// ----------------------------------------------------
export const TWO_CORE_AREAS = [
  {
    id: "loans",
    category: "FINANCING SOLUTIONS",
    title: "LOANS & MORTGAGE",
    subtitle: "Structured borrowing tailored to your aspirations",
    items: [
      "Home Loans (Buy, Build, Construct, Renovate)",
      "Loan Against Property (Residential & Commercial)",
      "Home Loan Balance Transfer & Rate Optimization",
      "Business & Retail Commercial Credit Facilities",
    ],
    ctaText: "Explore Loan Solutions",
    ctaLink: "/loans",
    accentColor: "from-[#D4AF37] to-[#F2D675]",
  },
  {
    id: "real-assets",
    category: "PROPERTY ADVISORY",
    title: "REAL ASSETS & PROPERTY",
    subtitle: "Curated real estate investment and asset guidance",
    items: [
      "Residential Properties & Luxury Apartments",
      "Grade-A Commercial Office & Retail Hubs",
      "Industrial Parks & Warehousing Land Parcels",
      "Mixed-Use Developments & Real Estate Investment",
    ],
    ctaText: "Explore Real Assets",
    ctaLink: "/real-assets",
    accentColor: "from-[#111827] to-[#1F2937]",
  },
];

// ----------------------------------------------------
// 4. HOW WE WORK (4 Steps)
// ----------------------------------------------------
export const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    title: "Consult",
    description: "Share your financial goals, property vision, or credit requirements in an in-depth advisory session.",
  },
  {
    step: "02",
    title: "Structure",
    description: "We evaluate eligibility, compare lender products, and structure a custom solution suited to your needs.",
  },
  {
    step: "03",
    title: "Deploy",
    description: "Seamless execution through guided documentation, legal checks, and fast-track application filing.",
  },
  {
    step: "04",
    title: "Review",
    description: "Ongoing relationship management and periodic reviews to ensure continuous financial alignment.",
  },
];

// ----------------------------------------------------
// 5. STATS / TRACK RECORD (With Disclaimers)
// ----------------------------------------------------
export const STATS_METRICS = [
  {
    value: "12+",
    label: "Years of Advisory Experience",
    subtext: "Delivering disciplined financial & property solutions",
  },
  {
    value: "1,800+",
    label: "Client Mandates Assisted",
    subtext: "Families & businesses guided across India",
  },
  {
    value: "25+",
    label: "Bank & NBFC Relationships",
    subtext: "Access to top lending institutions nationwide",
  },
  {
    value: "₹500Cr+",
    label: "Facilitated Value",
    subtext: "Cumulative loan & asset transactions advised",
  },
];

export const STATS_DISCLAIMER = "* Figures shown above are indicative representations of cumulative team experience and network relationships across partner institutions. Approvals and financial outcomes are subject to individual eligibility and lender evaluation.";

// ----------------------------------------------------
// 6. LEADERSHIP TEAM (Corporate Cards)
// ----------------------------------------------------
export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  experience: string;
  bio: string;
  photoUrl: string;
  linkedinUrl?: string;
}

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: "leader-1",
    name: "N. P. Singh",
    designation: "Founder & Managing Director",
    experience: "15+ Years Industry Leadership",
    bio: "Over 15 years of expertise in wealth management, home loan syndication, and strategic real estate advisory across major Indian markets.",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "leader-2",
    name: "P. Pratap",
    designation: "Director - Lending & Mortgage Desk",
    experience: "12+ Years Banking & Finance Focus",
    bio: "Specializes in home loan balance transfers, loan against property, and credit underwriting alignment with top Indian banking partners.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "leader-3",
    name: "Anand Sharma",
    designation: "Head - Real Estate & Assets",
    experience: "10+ Years Property Advisory",
    bio: "Leads residential and commercial property advisory, conducting structural due-diligence and strategic site evaluations.",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    linkedinUrl: "https://linkedin.com",
  },
];

// ----------------------------------------------------
// 7. CLIENT TESTIMONIALS
// ----------------------------------------------------
export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  service: string;
  location: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajesh & Meenakshi Sharma",
    role: "IT Director & Business Owner",
    service: "Home Loan & Real Estate Advisory",
    location: "Noida, UP",
    quote: "NP Wealth Managers guided us through our home loan sanction smoothly. They helped us compare rates across 4 banks and secured terms we couldn't get on our own.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Vikas Malhotra",
    role: "MSME Founder",
    service: "Loan Against Property",
    location: "Delhi NCR",
    quote: "When expanding our manufacturing unit, we needed liquidity quickly. Their team structured a Loan Against Property with minimal hassle and total clarity.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Dr. Ananya Roy",
    role: "Senior Healthcare Professional",
    service: "Home Loan Balance Transfer",
    location: "Gurugram",
    quote: "They evaluated my existing home loan interest rate and successfully completed a balance transfer that reduced my monthly EMI significantly.",
    rating: 5,
  },
];

// ----------------------------------------------------
// 8. PARTNER BANKS & NBFCS
// ----------------------------------------------------
export interface PartnerLogo {
  id: string;
  name: string;
  category: "Bank" | "NBFC" | "Developer";
}

export const PARTNERS_LIST: PartnerLogo[] = [
  { id: "p1", name: "HDFC Bank", category: "Bank" },
  { id: "p2", name: "ICICI Bank", category: "Bank" },
  { id: "p3", name: "SBI Home Loans", category: "Bank" },
  { id: "p4", name: "Axis Bank", category: "Bank" },
  { id: "p5", name: "Kotak Mahindra Bank", category: "Bank" },
  { id: "p6", name: "Bajaj Housing Finance", category: "NBFC" },
  { id: "p7", name: "PNB Housing", category: "NBFC" },
  { id: "p8", name: "Tata Capital", category: "NBFC" },
];

// ----------------------------------------------------
// 9. INSIGHTS / BLOG ARTICLES
// ----------------------------------------------------
export interface ResourceArticle {
  id: string;
  slug: string;
  category: "Loans" | "Real Estate" | "Wealth" | "Finance" | "Investment";
  title: string;
  shortDescription: string;
  readTime: string;
  date: string;
  content: string[];
  featured?: boolean;
}

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: "art-1",
    slug: "understanding-home-loan-balance-transfers",
    category: "Loans",
    title: "Understanding Home Loan Balance Transfers in 2026",
    shortDescription: "A practical guide to transferring your existing home loan for lower interest rates, reduced EMIs, and top-up capital options.",
    readTime: "5 min read",
    date: "August 2026",
    featured: true,
    content: [
      "A Home Loan Balance Transfer allows existing borrowers to shift their outstanding principal to another lender offering lower interest rates or better terms.",
      "When Should You Consider It? If the interest rate differential is at least 0.50% to 1.00%, and you still have more than 7-10 years remaining on your loan tenure.",
      "Key Benefits: Lower monthly EMIs, reduced overall interest burden, and the potential to unlock a Top-Up loan facility for extra liquidity.",
      "Disclaimer: Processing fees and legal evaluation charges apply during balance transfer.",
    ],
  },
  {
    id: "art-2",
    slug: "key-factors-in-loan-against-property-eligibility",
    category: "Loans",
    title: "Key Factors That Influence Loan Against Property (LAP)",
    shortDescription: "How lenders evaluate property value, title clarity, applicant income, and FOIR ratios for high-ticket mortgage financing.",
    readTime: "6 min read",
    date: "August 2026",
    content: [
      "Loan Against Property (LAP) is a secured credit facility that allows asset owners to monetize residential or commercial real estate equity.",
      "1. Property Valuation & LTV: Lenders typically sanction 50% to 70% of the market value of the property based on independent valuation.",
      "2. Clear Property Title: Freehold properties with unencumbered legal titles and approved building plans qualify for smoother sanctions.",
      "3. Income & Repayment Ability: Audited ITRs, current bank statements, and clean CIBIL scores determine maximum loan eligibility.",
      "Disclaimer: Loan approval remains subject to lender underwriting criteria.",
    ],
  },
  {
    id: "art-3",
    slug: "real-estate-due-diligence-checklist-for-buyers",
    category: "Real Estate",
    title: "Essential Real Estate Due-Diligence Checklist for Buyers",
    shortDescription: "Crucial steps for verifying clear land titles, municipal approvals, RERA registrations, and developer track records.",
    readTime: "7 min read",
    date: "July 2026",
    content: [
      "Acquiring real estate requires systematic legal and structural verification to safeguard your investment capital.",
      "Key Verification Steps:",
      "• RERA Registration Check: Verify project details on the state RERA portal.",
      "• Title Deed Search: Inspect 30-year title search reports from legal counsel.",
      "• Approved Layout Plans: Ensure municipal sanction for floor plans and occupancy certificates.",
      "Disclaimer: Always consult legal and property advisors prior to signing binding agreements.",
    ],
  },
  {
    id: "art-4",
    slug: "sip-vs-lump-sum-wealth-creation-guide",
    category: "Investment",
    title: "SIP vs Lump Sum: Structuring Your Investment Portfolio",
    shortDescription: "Comparing systematic monthly allocations with lump sum investments across market cycles for disciplined capital growth.",
    readTime: "4 min read",
    date: "July 2026",
    content: [
      "Systematic Investment Plans (SIPs) encourage rupee-cost averaging while lump-sum allocations suit capital deployments during market corrections.",
      "Combining Both Approaches: Long-term wealth planning often combines regular SIPs with tactical lump-sum allocations into mutual funds.",
      "Disclaimer: Mutual fund investments are subject to market risks. Read scheme documents carefully.",
    ],
  },
];

// ----------------------------------------------------
// 10. CAREERS & CULTURE DATA
// ----------------------------------------------------
export interface CareerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const CAREERS_ROLES: CareerRole[] = [
  {
    id: "c-1",
    title: "Senior Loan & Mortgage Specialist",
    department: "Lending Solutions",
    location: "Noida / Delhi NCR",
    type: "Full-Time",
    description: "Drive home loan and loan against property advisory, working directly with client applicants and partner bank underwriting teams.",
    requirements: [
      "3-5 years of experience in retail home loans, LAP, or banking syndication",
      "Strong understanding of CIBIL ratios, FOIR, and credit underwriting",
      "Excellent client communication and negotiation skills",
    ],
  },
  {
    id: "c-2",
    title: "Real Estate Investment Advisor",
    department: "Real Assets Desk",
    location: "Noida / NCR",
    type: "Full-Time",
    description: "Guide clients through residential and commercial real estate portfolio acquisition, site visits, and property due diligence.",
    requirements: [
      "2-4 years in residential/commercial real estate advisory",
      "Knowledge of NCR micro-markets, developer projects, and RERA terms",
      "Proven client consultation track record",
    ],
  },
];

// ----------------------------------------------------
// PRESERVED EXPORTS FOR COMPATIBILITY
// ----------------------------------------------------
export interface LoanProduct {
  id: string;
  title: string;
  tagline: string;
  minAmount: string;
  tenureRange: string;
  keyHighlights: string[];
}

export interface PropertyListing {
  id: string;
  title: string;
  category: "residential" | "commercial" | "plots";
  location: string;
  type: string;
  tag: string;
  description: string;
  highlights: string[];
  imageUrl: string;
}

export interface TeamPlaceholder {
  id: string;
  title: string;
  role: string;
  department: string;
  bioPlaceholder: string;
  experienceLevel: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "home-loans",
    title: "Home Loans Solutions",
    iconName: "Home",
    category: "loans",
    shortDescription: "Purchase, construct, build, or renovate your dream residential property.",
    fullDescription: "End-to-end guidance for home purchase loans, plot construction, home expansion, and balance transfer across top banks.",
    keyFeatures: [
      "Competitive Interest Rates Across Partner Banks",
      "Balance Transfer & Rate Optimization",
      "Flexible Repayment Tenure Up to 30 Years",
      "Guided Paperwork & Multi-Lender Support",
    ],
    targetAudience: "Salaried Professionals, Business Owners & First-Time Buyers",
  },
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    iconName: "FileCheck2",
    category: "loans",
    shortDescription: "Unlock capital leverage using your existing real estate assets.",
    fullDescription: "Unencumbered residential or commercial property leverage for business expansion, debt consolidation, or capital goals.",
    keyFeatures: [
      "High Ticket Loan Sanctions",
      "Residential & Commercial Property Eligibility",
      "Longer Tenure Options (Up to 15-20 Years)",
      "Retained Property Ownership",
    ],
    targetAudience: "Property Owners, MSMEs & Business Enterprises",
  },
  {
    id: "real-estate",
    title: "Real Estate & Asset Advisory",
    iconName: "Building",
    category: "realestate",
    shortDescription: "Curated residential, commercial, and property investment guidance.",
    fullDescription: "Access to prime residential towers, commercial office suites, land parcels, and real asset opportunities.",
    keyFeatures: [
      "Prime Residential Portfolio Access",
      "Grade-A Commercial Property Evaluation",
      "Industrial & Warehousing Land Parcels",
      "Document Guidance & Legal Due-Diligence Checklist",
    ],
    targetAudience: "Investors, End-Users & Corporate Buyers",
  },
];

export const THREE_PRINCIPLES = [
  {
    number: "01",
    title: "Consult",
    description: "Understand your financial goals, property vision, or credit requirements through structured advisory sessions.",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Structure",
    description: "Evaluate lender products, compare terms, and structure custom solutions suited to your profile.",
    icon: "Sliders",
  },
  {
    number: "03",
    title: "Deploy & Review",
    description: "Execute smoothly through guided paperwork, legal verification, and ongoing portfolio support.",
    icon: "TrendingUp",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Tell Us Your Goal",
    description: "Share your financial objectives, property preferences, or loan requirements via our consultation desk.",
  },
  {
    step: "02",
    title: "Structured Consultation",
    description: "Our advisors discuss your specific situation, liquidity needs, and lender eligibility in detail.",
  },
  {
    step: "03",
    title: "Explore Curated Solutions",
    description: "Review curated options, rate comparisons, or property asset listings aligned with your priorities.",
  },
  {
    step: "04",
    title: "Seamless Execution",
    description: "Proceed with structured documentation, legal verification, application filing, or property acquisition.",
  },
];

export const LOAN_PROCESS_STEPS = [
  {
    step: "01",
    title: "Eligibility Check",
    description: "Evaluate applicant income profile, CIBIL score, age, and existing FOIR commitments.",
  },
  {
    step: "02",
    title: "Documentation",
    description: "Collate necessary KYC documents, income statements, ITRs, and property title records.",
  },
  {
    step: "03",
    title: "Application Filing",
    description: "Submit formal application file to matching partner banks and NBFC underwriting teams.",
  },
  {
    step: "04",
    title: "Sanction & Disbursement",
    description: "Lender sanctions, performs property legal/technical verification, and completes disbursement.",
  },
];

export const DOCUMENT_CHECKLIST_DATA = {
  salaried: [
    { name: "Aadhaar Card", required: true, desc: "Government identity & address verification" },
    { name: "PAN Card", required: true, desc: "Mandatory tax identifier for financial background" },
    { name: "Address Proof", required: true, desc: "Utility bill, Passport, or Voter ID" },
    { name: "Latest 3 Months Salary Slips", required: true, desc: "Proof of stable monthly salary income" },
    { name: "Latest 6 Months Bank Statement", required: true, desc: "Salary account statement showing credit entries" },
    { name: "Passport Size Photograph", required: true, desc: "Recent photograph for KYC file" },
  ],
  selfEmployed: [
    { name: "Aadhaar Card & PAN Card", required: true, desc: "Identity & Tax compliance credentials" },
    { name: "Business Office Address Proof", required: true, desc: "GST Certificate, Trade License, or Utility Bill" },
    { name: "Latest 2-3 Years ITR with Computation", required: true, desc: "Audited financial statements and tax filings" },
    { name: "Latest 6-12 Months Current Bank Statement", required: true, desc: "Primary business transaction bank records" },
    { name: "Business Ownership Proof", required: true, desc: "Partnership deed, MOA/AOA, or GST registration" },
    { name: "Passport Size Photograph", required: true, desc: "Recent passport photo of proprietor/partners" },
  ],
};

export const REAL_ESTATE_LISTINGS: PropertyListing[] = [
  {
    id: "prop-1",
    title: "Prime Metropolitan Residence",
    category: "residential",
    location: "Sector 150 & Expressway Corridor, Noida",
    type: "Luxury 3 & 4 BHK Apartments",
    tag: "Residential Opportunity",
    description: "Modern high-rise residential spaces featuring expansive layouts, club amenities, and strategic city connectivity.",
    highlights: ["Spacious Balconies", "Clubhouse & Gym", "High Security", "Expressway Connectivity"],
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "prop-2",
    title: "Corporate Business Park Unit",
    category: "commercial",
    location: "Sector 62 & Tech Zone, Noida",
    type: "Grade-A Commercial Office Space",
    tag: "Commercial Asset",
    description: "Premium corporate office floors designed for modern enterprises, tech firms, and professional practices.",
    highlights: ["Grade-A Architecture", "Central AC", "100% Power Backup", "Ample Parking"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "prop-3",
    title: "Gated Residential Community Plot",
    category: "plots",
    location: "Yamuna Expressway Growth Corridor, NCR",
    type: "Villa Plot Parcels",
    tag: "Land Parcel",
    description: "Secured villa plots in a master-planned township with underground utilities, wide roads, and green parks.",
    highlights: ["Clear Title Property", "Underground Cabling", "Landscaped Parks", "Airport Proximity"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
  },
];

export const TESTIMONIAL_PLACEHOLDERS = TESTIMONIALS_LIST.map(t => ({
  id: t.id,
  tag: t.service,
  text: t.quote,
  clientRole: t.role,
  location: t.location,
}));

export const TEAM_PLACEHOLDERS: TeamPlaceholder[] = LEADERSHIP_TEAM.map(l => ({
  id: l.id,
  title: l.name,
  role: l.designation,
  department: "Executive Leadership",
  bioPlaceholder: l.bio,
  experienceLevel: l.experience,
}));
