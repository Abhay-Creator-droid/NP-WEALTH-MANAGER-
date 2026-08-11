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

export interface ResourceArticle {
  id: string;
  slug: string;
  category: "Investment" | "Loans" | "Real Estate" | "Financial Planning";
  title: string;
  shortDescription: string;
  readTime: string;
  date: string;
  content: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "wealth-management",
    title: "Wealth Management",
    iconName: "Briefcase",
    category: "wealth",
    shortDescription: "Structured guidance for your long-term financial goals.",
    fullDescription: "Our wealth management service focuses on understanding your family's overall financial profile, risk preferences, and long-term liquidity needs to help build a structured asset allocation strategy.",
    keyFeatures: [
      "Personalized Asset Allocation Planning",
      "Periodic Strategy Review & Rebalancing",
      "Goal-based Wealth Preservation",
      "Risk Profiling & Diversification Analysis",
    ],
    targetAudience: "High-Net-Worth Individuals, Business Owners, & Working Professionals",
  },
  {
    id: "sip-mutual-funds",
    title: "SIP & Mutual Funds",
    iconName: "TrendingUp",
    category: "investments",
    shortDescription: "Explore investment options aligned with your goals and risk profile.",
    fullDescription: "Systematic Investment Plans (SIPs) provide a disciplined mechanism for exploring equity and debt mutual funds based on individual financial horizons.",
    keyFeatures: [
      "Rupee Cost Averaging Insights",
      "Equity, Hybrid & Debt Mutual Fund Exploration",
      "Tax-saving ELSS Options Analysis",
      "Goal-driven Investment Horizons",
    ],
    targetAudience: "Salaried Professionals & Long-term Investors",
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    iconName: "Target",
    category: "wealth",
    shortDescription: "Plan for important milestones with a structured financial approach.",
    fullDescription: "Comprehensive financial planning evaluates life milestones—such as retirement planning, children's higher education, emergency liquidity, and capital protection.",
    keyFeatures: [
      "Milestone-based Capital Allocation",
      "Emergency Fund Liquidity Assessment",
      "Retirement Horizon Structuring",
      "Risk Management Review",
    ],
    targetAudience: "Families, Mid-Career Professionals & Pre-retirees",
  },
  {
    id: "home-loans",
    title: "Home Loans",
    iconName: "Home",
    category: "loans",
    shortDescription: "Explore suitable home financing options based on eligibility.",
    fullDescription: "Assistance in navigating property purchasing options, home balance transfers, and top-up loan options across multiple repute lenders.",
    keyFeatures: [
      "Balance Transfer Evaluation",
      "Flexible Tenure Structure Assessment",
      "Prudent Loan-to-Value (LTV) Options",
      "Multi-Lender Documentation Support",
    ],
    targetAudience: "First-time Home Buyers & Existing Homeowners",
  },
  {
    id: "business-loans",
    title: "Business Loans",
    iconName: "Building2",
    category: "loans",
    shortDescription: "Financing options for eligible business requirements.",
    fullDescription: "Explore collateral-free business expansion options, working capital assistance, and equipment purchase financing for eligible business enterprises.",
    keyFeatures: [
      "Working Capital Facility Guidance",
      "Business Expansion Financing Options",
      "Machinery & Equipment Capital Assessment",
      "Financial Statement Evaluation Support",
    ],
    targetAudience: "MSME Owners, Proprietors & Corporate Entities",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    iconName: "Building",
    category: "realestate",
    shortDescription: "Explore residential, commercial and property investment opportunities.",
    fullDescription: "Curated access to prime residential developments, commercial space options, and land parcels across top Indian metros.",
    keyFeatures: [
      "Premium Residential Portfolio Exploration",
      "Commercial Property Asset Evaluation",
      "Strategic Plot & Land Opportunities",
      "Document Guidance & Due-Diligence Checklist",
    ],
    targetAudience: "Property Investors, End-Users & Commercial Buyers",
  },
  {
    id: "personal-loans",
    title: "Personal Loans",
    iconName: "Wallet",
    category: "loans",
    shortDescription: "Explore personal financing options for eligible requirements.",
    fullDescription: "Unsecured credit options for medical emergency liquidity, educational funding, home renovation, or debt consolidation subject to lender eligibility.",
    keyFeatures: [
      "No Collateral Obligation Requirements",
      "Flexible Repayment Schedules (12 to 60 Months)",
      "Transparent Processing Guidelines",
      "Salaried & Self-Employed Eligibility Pathways",
    ],
    targetAudience: "Salaried Employees & Eligible Professionals",
  },
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    iconName: "FileCheck2",
    category: "loans",
    shortDescription: "Explore financing options against eligible property.",
    fullDescription: "Unlock liquidity from existing residential or commercial real estate assets to fund high-value capital goals at competitive terms.",
    keyFeatures: [
      "High Ticket Capital Access",
      "Longer Tenure Repayment Flexibility",
      "Residential & Commercial Property Eligibility",
      "Retained Property Ownership & Occupancy",
    ],
    targetAudience: "Property Owners & Business Enterprises",
  },
];

export const THREE_PRINCIPLES = [
  {
    number: "01",
    title: "Understand",
    description: "Understand your financial goals, priorities, risk profile and liquidity requirements through in-depth discussions.",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Plan",
    description: "Explore suitable financial strategies, asset allocation models, and loan options matched to your profile.",
    icon: "Compass",
  },
  {
    number: "03",
    title: "Grow",
    description: "Build a structured approach toward your long-term goals with disciplined periodic reviews and transparent communication.",
    icon: "TrendingUp",
  },
];

export const WHY_CHOOSE_US_PILLARS = [
  {
    id: "personalized-guidance",
    title: "Personalized Guidance",
    description: "Tailored solutions based on individual goals, financial background, and personal risk comfort.",
    icon: "UserCheck",
  },
  {
    id: "transparent-approach",
    title: "Transparent Approach",
    description: "Clear communication with zero hidden terms, transparent disclosures, and straightforward processes.",
    icon: "ShieldCheck",
  },
  {
    id: "multiple-solutions",
    title: "Multiple Financial Solutions",
    description: "Comprehensive assistance under one umbrella across investments, property, and lender options.",
    icon: "Layers",
  },
  {
    id: "long-term-relationship",
    title: "Long-Term Relationship",
    description: "Ongoing financial alignment focused on long-term capital preservation and relationship trust.",
    icon: "Handshake",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Tell Us Your Goal",
    description: "Share your financial objectives, capital preferences, or loan requirements via our simple consultation form.",
  },
  {
    step: "02",
    title: "Understand Your Requirement",
    description: "Our team discusses your specific situation, liquidity needs, and eligibility metrics in detail.",
  },
  {
    step: "03",
    title: "Explore Suitable Options",
    description: "Review curated options, investment structures, or lender loan offers aligned with your interest.",
  },
  {
    step: "04",
    title: "Take The Next Step",
    description: "Proceed with structured documentation, application filing, or investment execution smoothly.",
  },
];

export const LOAN_PROCESS_STEPS = [
  {
    step: "01",
    title: "Eligibility Check",
    description: "Evaluate applicant income profile, credit score, age, and existing commitments.",
  },
  {
    step: "02",
    title: "Documentation",
    description: "Collate necessary KYC documents, bank statements, and income proofs.",
  },
  {
    step: "03",
    title: "Application",
    description: "Submit formal application file to matching partner banks and NBFCs.",
  },
  {
    step: "04",
    title: "Lender Process",
    description: "Lender sanctions, performs property/credit verification, and completes disbursement.",
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
    location: "Bandra-Kurla Complex Region, Mumbai",
    type: "Luxury 3 & 4 BHK Apartments",
    tag: "Residential Opportunity",
    description: "Modern high-rise residential spaces featuring expansive layouts, club amenities, and strategic city connectivity.",
    highlights: ["Spacious Balconies", "Clubhouse & Gym", "High Security", "Metro Proximity"],
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "prop-2",
    title: "Corporate Business Park Unit",
    category: "commercial",
    location: "Golf Course Extension, Gurugram",
    type: "Grade-A Commercial Office Space",
    tag: "Commercial Asset",
    description: "Premium corporate office floors designed for modern enterprises, tech firms, and professional practices.",
    highlights: ["Grade-A Architecture", "Central Air Conditioning", "100% Power Backup", "Ample Visitor Parking"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "prop-3",
    title: "Gated Residential Community Plot",
    category: "plots",
    location: "Devanahalli Tech Hub Corridor, Bengaluru",
    type: "Villa Plot Parcels",
    tag: "Land Parcel",
    description: "Secured villa plots in a master-planned township with underground utilities, wide roads, and green parks.",
    highlights: ["Clear Title Property", "Underground Cabling", "Landscaped Parks", "High Growth Corridor"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "prop-4",
    title: "Urban Skyline Luxury Tower",
    category: "residential",
    location: "Worli Coastal Belt, Mumbai",
    type: "Sea-Facing Penthouse & 4 BHK",
    tag: "Premium Residence",
    description: "Exquisite architectural design with sea views, private elevators, and state-of-the-art wellness centers.",
    highlights: ["Panoramic Views", "Concierge Desk", "Infinity Pool", "Private Parking Bay"],
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "prop-5",
    title: "High Street Retail & Office Complex",
    category: "commercial",
    location: "Baner Commercial District, Pune",
    type: "Retail Showrooms & Boutique Offices",
    tag: "Commercial Space",
    description: "Prime street-facing retail storefronts and office spaces in a bustling commercial hub with heavy footfall.",
    highlights: ["Double Height Lobby", "High Footfall Zone", "Escalator Access", "Valet Parking"],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "prop-6",
    title: "Suburban Industrial & Logistics Park",
    category: "plots",
    location: "NH-48 Logistics Corridor, NCR",
    type: "Industrial & Warehousing Land",
    tag: "Industrial Plot",
    description: "Strategically located land parcel ideal for warehousing, logistics hubs, or light manufacturing facilities.",
    highlights: ["Highway Access", "Industrial Zone Clearance", "Wide Internal Roads", "High Load Utility Power"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
  },
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: "art-1",
    slug: "how-does-sip-investing-work",
    category: "Investment",
    title: "How Does SIP Investing Work?",
    shortDescription: "A practical guide to systematic investment planning, rupee cost averaging, and compounding over long horizons.",
    readTime: "5 min read",
    date: "August 2026",
    content: [
      "Systematic Investment Planning (SIP) is a structured approach that enables investors to allocate a fixed sum into mutual fund schemes at regular intervals (monthly, quarterly).",
      "Key Advantage: Rupee Cost Averaging. When markets fluctuate, buying fixed rupee amounts ensures you accumulate more units when prices are lower and fewer units when prices rise.",
      "The Power of Time: Starting early gives your investments a longer duration to benefit from the compounding effect on reinvested growth.",
      "Disclaimer: Mutual fund investments are subject to market risks. Past performance does not guarantee future results.",
    ],
  },
  {
    id: "art-2",
    slug: "understanding-home-loan-eligibility",
    category: "Loans",
    title: "Understanding Home Loan Eligibility",
    shortDescription: "Key parameters lenders evaluate when assessing home loan application capacity, FOIR ratios, and tenure selection.",
    readTime: "6 min read",
    date: "August 2026",
    content: [
      "Securing a home loan requires understanding how financial institutions calculate your borrowing capacity.",
      "Key Factors Lenders Evaluate:",
      "1. Fixed Obligation to Income Ratio (FOIR): Most lenders prefer total monthly EMI obligations to remain under 40%-50% of net monthly income.",
      "2. Credit Score & History: A clean repayment history (CIBIL score above 750) generally improves eligibility and processing options.",
      "3. Property Legal Clearance: Lenders perform independent legal and technical evaluation of the target real estate asset.",
      "Disclaimer: Loan approvals and terms are subject to individual lender policies and applicant assessment.",
    ],
  },
  {
    id: "art-3",
    slug: "things-to-consider-before-investing-in-real-estate",
    category: "Real Estate",
    title: "Things To Consider Before Investing In Real Estate",
    shortDescription: "Crucial due-diligence steps including location infrastructure, clear title checks, and liquidity planning.",
    readTime: "7 min read",
    date: "July 2026",
    content: [
      "Real estate remains a prominent tangible asset class in India, but thorough due diligence is vital before committing capital.",
      "1. Infrastructure Development: Assess proximity to transport hubs, metro lines, commercial districts, and social infrastructure.",
      "2. Documentation & Approvals: Verify clear land titles, municipal sanction plans, and developer background credentials.",
      "3. Cash-Flow & Rental Potential: Evaluate realistic rental yield expectations alongside long-term property appreciation outlook.",
      "Disclaimer: Real estate investments carry liquidity risks. Legal verification by independent counsel is recommended.",
    ],
  },
  {
    id: "art-4",
    slug: "personal-loan-documents-a-simple-guide",
    category: "Financial Planning",
    title: "Personal Loan Documents: A Simple Guide",
    shortDescription: "A clear overview of essential identity, income, and banking records needed for smooth credit applications.",
    readTime: "4 min read",
    date: "July 2026",
    content: [
      "Having your documentation organized speeds up personal loan evaluation and verification processes.",
      "Standard Requirements:",
      "• Identity & Address Proof: Aadhaar, PAN Card, Passport, or Utility Bills.",
      "• Salaried Applicants: Recent 3 months salary slips and 6 months bank statement showing salary credits.",
      "• Self-Employed Applicants: 2-3 years ITR filings, profit & loss statements, and business current account statements.",
      "Disclaimer: Document checklists may vary depending on lender requirements and applicant profiles.",
    ],
  },
];

export const TESTIMONIAL_PLACEHOLDERS = [
  {
    id: "t1",
    tag: "Wealth Advisory",
    text: "Verified client testimonial will appear here upon authorization.",
    clientRole: "Salaried Corporate Executive",
    location: "Mumbai",
  },
  {
    id: "t2",
    tag: "Home Loan Assistance",
    text: "Verified client testimonial will appear here upon authorization.",
    clientRole: "IT Senior Manager",
    location: "Bengaluru",
  },
  {
    id: "t3",
    tag: "Business Expansion Financing",
    text: "Verified client testimonial will appear here upon authorization.",
    clientRole: "MSME Business Proprietor",
    location: "Delhi NCR",
  },
];

export const TEAM_PLACEHOLDERS: TeamPlaceholder[] = [
  {
    id: "m1",
    title: "Senior Advisory Member",
    role: "Wealth & Investment Strategy",
    department: "Wealth Management",
    bioPlaceholder: "Professional credentials and executive profile will be updated here.",
    experienceLevel: "15+ Years Industry Focus",
  },
  {
    id: "m2",
    title: "Financial Planning Specialist",
    role: "Mutual Funds & Portfolio Guidance",
    department: "Financial Services",
    bioPlaceholder: "Professional credentials and executive profile will be updated here.",
    experienceLevel: "12+ Years Industry Focus",
  },
  {
    id: "m3",
    title: "Real Estate & Loan Desk Lead",
    role: "Mortgage & Property Advisory",
    department: "Lending & Real Estate",
    bioPlaceholder: "Professional credentials and executive profile will be updated here.",
    experienceLevel: "10+ Years Industry Focus",
  },
];
