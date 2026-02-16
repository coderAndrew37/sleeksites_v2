// data/industries.ts
import { Industry } from "@/types";

export const INDUSTRIES: Industry[] = [
  {
    title: "E-Commerce",
    desc: "Seamless shopping experiences with integrated M-Pesa payments and real-time inventory tracking for Kenyan retailers.",
    price: "120,000",
    link: "/services/web-development?sector=ecommerce",
    icon: "🛍️",
    features: ["M-Pesa Checkout", "Inventory Sync", "Customer Accounts"],
  },
  {
    title: "Corporate & Law",
    desc: "Establish professional authority with high-security sites, lead capture funnels, and multilingual support for global reach.",
    price: "85,000",
    link: "/services/web-development?sector=corporate",
    icon: "⚖️",
    features: ["SEO Strategy", "Lead Capture", "Multilingual Support"],
  },
  {
    title: "Real Estate",
    desc: "Convert property browsers into buyers with interactive maps, automated WhatsApp inquiries, and beautiful listing galleries.",
    price: "100,000",
    link: "/services/web-development?sector=real-estate",
    icon: "🏡",
    features: ["Property Listings", "Maps Integration", "WhatsApp Automation"],
  },
  {
    title: "Startups & SaaS",
    desc: "Scale without limits. We build custom dashboards and robust API architectures designed for rapid user growth.",
    price: "150,000",
    link: "/services/web-development?sector=saas",
    icon: "🚀",
    features: ["User Dashboard", "API Development", "Scalable Cloud"],
  },
];
