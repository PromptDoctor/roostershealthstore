export interface HoursEntry {
  days: string;
  hours: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  /** Relative URL, e.g. "/services/drain-cleaning" */
  url?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLinks {
  /** Google Business Profile URL — strongest GEO cross-reference for local SEO */
  googleBusinessProfile?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface Business {
  /** Legal/display name — must be byte-identical in schema, copy, and footer */
  name: string;
  legalName?: string;

  // NAP
  phone: string;
  email: string;

  // Address
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;

  /** Decimal lat/lon for schema.org GeoCoordinates */
  geo: { latitude: number; longitude: number };

  /** Canonical site root — no trailing slash. Used for sitemap, OG, and schema @id */
  domain: string;

  /** ≤160 chars — meta description and schema description */
  description: string;
  tagline: string;

  /** schema.org LocalBusiness subtype, e.g. "Plumber", "Electrician", "AutoRepair" */
  businessType: string;

  /** "$" | "$$" | "$$$" */
  priceRange?: string;

  /** City/region names for schema.org areaServed */
  areaServed: string[];

  /** Human-readable hours for display in footer / contact section */
  hours: HoursEntry[];

  /** schema.org openingHours format — e.g. ["Mo-Fr 09:00-17:00", "Sa 09:00-13:00"] */
  openingHours?: string[];

  /** Four-digit year the business was founded, e.g. "1998" */
  foundingDate?: string;

  /** Owner / founder full names */
  founders?: string[];

  services: ServiceItem[];
  faq: FAQItem[];
  social: SocialLinks;

  /** SVG or raster logo for HTML use — e.g. "/assets/logo.svg" */
  logo: string;

  /**
   * Raster (JPG/PNG) logo for schema.org — Google prefers raster over SVG.
   * Falls back to `logo` if omitted. Recommended: ≥112×112 px, rectangular.
   */
  logoRaster?: string;

  /**
   * Open Graph / Twitter Card share image.
   * Must be JPG or PNG — SVG does not render on social platforms.
   * Required dimensions: 1200×630 px.
   */
  ogImage: string;
}

// ---------------------------------------------------------------------------
// PLACEHOLDER — replace every value before launch.
// Phone 555-555-0100 and domain replace-me.example are intentionally fake.
// ---------------------------------------------------------------------------

export const BUSINESS: Business = {
  name: "Roosters Health Store",
  legalName: undefined,

  phone: "(618) 281-7177",
  email: "",

  streetAddress: "216 W Sand Bank Rd, Suite #4",
  addressLocality: "Columbia",
  addressRegion: "IL",
  postalCode: "62236",
  addressCountry: "US",

  geo: { latitude: 38.457027, longitude: -90.222393 },

  domain: "https://roostershealthstore.com",

  description:
    "Family-owned health and wellness store serving Columbia, IL and Monroe County since 1995. Supplements, organic grocery, wellness bar, and onsite practitioners.",
  tagline:
    "Start your journey to sustainable and responsible health & wellness",

  businessType: "HealthAndBeautyBusiness",
  priceRange: "$$",
  areaServed: ["Columbia", "Waterloo", "Millstadt", "Dupo", "Monroe County"],

  hours: [
    { days: "Monday–Friday", hours: "8:30 AM – 5:30 PM" },
    { days: "Saturday", hours: "8:30 AM – 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  openingHours: ["Mo-Fr 08:30-17:30", "Sa 08:30-14:00"],

  services: [
    {
      name: "Supplements & Vitamins",
      description:
        "A comprehensive range of vitamins, minerals, homeopathic remedies, essential oils, and medicinal teas sourced from responsible, independent brands — no big-pharma or private-label shortcuts.",
    },
    {
      name: "Organic & Natural Grocery",
      description:
        "Locally sourced, organic, and chemical-free grocery focused on independent brands. Options for dairy-free, gluten-free, vegan, keto, and diabetic-friendly diets.",
    },
    {
      name: "Wellness Bar",
      description:
        "Fresh, in-store wellness offerings designed to support your daily nutrition and recovery goals.",
    },
    {
      name: "Health & Beauty Products",
      description:
        "Natural and chemical-free health, beauty, and personal-care products — including a wide selection for children and pets.",
    },
    {
      name: "Licensed Massage Therapy",
      description:
        "Appointments with licensed massage therapist Kaila Taylor, including Swedish massage, Reiki, cupping, lymphatic drainage, and prenatal massage.",
      url: "https://kaila-taylor-lmt.square.site/",
    },
    {
      name: "The RooSt — Longevity Center",
      description:
        "Our in-store longevity center featuring the SuperHuman Protocol: a three-step sequence of PEMF therapy, Exercise with Oxygen Therapy (EWOT), and Red Light Therapy to support cellular health and recovery.",
    },
    {
      name: "Special Product Sourcing",
      description:
        "Can't find what you're looking for? We'll source specific products on request — part of what being a true community store means.",
    },
  ],

  faq: [
    {
      question: "Do you do special orders?",
      answer:
        "Absolutely. If you're looking for a specific product we don't carry, just ask — we'll source it for you. That's what being a community store means.",
    },
    {
      question: "What kind of supplements do you carry?",
      answer:
        "A comprehensive range of vitamins, minerals, homeopathic remedies, essential oils, and medicinal teas from responsibly sourced, independent brands — no big-pharma or private-label shortcuts.",
    },
    {
      question: "What makes your grocery section different?",
      answer:
        "We focus on locally sourced, organic, and chemical-free products. We prioritize independent brands and carry options for dairy-free, gluten-free, vegan, keto, and diabetic-friendly diets. Freshness is everything to us.",
    },
    {
      question: "What is The RooSt?",
      answer:
        "The RooSt is our in-store longevity center featuring the SuperHuman Protocol — a three-step sequence of PEMF therapy, Exercise with Oxygen Therapy (EWOT), and Red Light Therapy designed to improve cellular health and recovery.",
    },
    {
      question: "Can I book a massage with Kaila Taylor?",
      answer:
        "Yes. Kaila Taylor is a licensed massage therapist offering Swedish massage, Reiki, cupping, lymphatic drainage, and prenatal massage. Use the contact form in our Practitioners section to request an appointment.",
    },
    {
      question: "Are your products safe for kids and pets?",
      answer:
        "We carry a wide selection of natural products specifically for children and pets, including natural baby medicines, diapers, and wipes. Our staff is happy to help you find the right fit for your family.",
    },
  ],

  social: {
    facebook: "https://www.facebook.com/roosterhealth",
    instagram: "https://www.instagram.com/roosters.healthstore/",
    googleBusinessProfile: "https://share.google/gCBfYPJ1I1Rnm2yI0",
  },


  logo: "/assets/logo.svg",
  logoRaster: "/assets/logo.png",
  ogImage: "/assets/og-image.jpg",

  foundingDate: "1995",
  founders: undefined,
};