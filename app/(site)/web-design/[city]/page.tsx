import {
  CONTACT_EMAIL,
  getWhatsAppUrl,
  PHONE_NUMBER,
} from "@/lib/constants/contact";
import {
  CheckCircle2,
  Globe,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ city: string }>;
};

/**
 * SEO METADATA
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const fullTitle = `Web Design & SEO Services in ${cityName} | SleekSites Agency`;
  const description = `Looking for professional web design in ${cityName}? SleekSites builds high-performance, M-Pesa ready websites for businesses in ${cityName}. 2026 pricing from Ksh 15,000.`;
  const url = `https://sleeksites.co.ke/web-design/${city}`;

  return {
    title: fullTitle,
    description: description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: description,
      url: url,
      siteName: "SleekSites Agency",
      images: [{ url: "/og-main.jpg", width: 1200, height: 630 }],
      locale: "en_KE",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const cities = ["nairobi", "mombasa", "kisumu", "nakuru", "eldoret", "thika"];
  return cities.map((city) => ({ city }));
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const whatsappUrl = getWhatsAppUrl(
    `Hello! I'm interested in professional web design services in ${cityName}.`,
  );

  // DATA: Pricing & Stats
  const stats = [
    { label: "Speed Increase", value: "300%", sub: "Lighthouse Score 95+" },
    {
      label: "Mobile Ready",
      value: "100%",
      sub: "Optimized for Safaricom 4G/5G",
    },
    { label: "SEO Ranking", value: "90 Days", sub: "Avg. to reach Page 1" },
    { label: "Security", value: "99.9%", sub: "SSL & KRA Data Protection" },
  ];

  const pricingPlans = [
    {
      name: "Startup Landing Page",
      price: "15,000",
      description: `Perfect for new businesses in ${cityName}`,
      features: [
        "1–3 Responsive Pages",
        "Contact Form",
        "Standard Design",
        "Social Media Integration",
        "1 Year Support",
      ],
      cta: "Launch Now",
      highlight: false,
    },
    {
      name: "Professional Business",
      price: "45,000",
      description: "Our most popular choice for growth",
      features: [
        "Unlimited Pages",
        "Google My Business Setup",
        "Advanced SEO",
        "High-Speed Hosting",
        "Analytics Dashboard",
      ],
      cta: "Scale My Brand",
      highlight: true,
    },
    {
      name: "E-Commerce / Custom",
      price: "100,000",
      description: "Full-scale digital storefront",
      features: [
        "M-Pesa Integration",
        "Inventory Management",
        "DPO/Visa/Mastercard",
        "CRM Integration",
        "Bespoke UI/UX",
      ],
      cta: "Start Selling",
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: `How much does web design cost in ${cityName}?`,
      answer: `As of 2026, building a website in ${cityName} ranges from Ksh 15,000 for landing pages to Ksh 500,000+ for large custom corporate sites.`,
    },
    {
      question: `How long does it take for a ${cityName} business to go live?`,
      answer:
        "Standard professional sites take 2–4 weeks, while e-commerce platforms typically launch within 6 weeks.",
    },
    {
      question: "Will my website work well on slow mobile data?",
      answer:
        "Yes. We engineer sites with low-latency hosting and optimized assets specifically for the Kenyan mobile network environment.",
    },
  ];

  // SCHEMA
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Web Design Services in ${cityName}`,
    provider: { "@type": "LocalBusiness", name: "SleekSites Agency" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "15000",
      highPrice: "500000",
      priceCurrency: "KES",
    },
    areaServed: { "@type": "City", name: cityName },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen pt-20">
        {/* --- HERO SECTION --- */}
        <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt={`${cityName} Tech Scene`}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-slate-950" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 px-4 py-2 rounded-full mb-8 text-blue-100 text-[10px] font-black uppercase tracking-[0.3em]">
              <MapPin size={14} className="text-blue-400" /> Available in{" "}
              {cityName}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              Premium Web Design <br /> in{" "}
              <span className="text-blue-500">{cityName}</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Engineered for the Kenyan market. We build fast, KRA-compliant,
              and M-Pesa ready digital engines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
              >
                Start Your Project
              </a>
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
              >
                Call: +{PHONE_NUMBER}
              </a>
            </div>
          </div>
        </section>

        {/* --- TRUST BAR --- */}
        <div className="bg-white border-b border-slate-100 py-8 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            <span className="font-black text-slate-400 tracking-tighter text-xl">
              M-PESA
            </span>
            <span className="font-black text-slate-400 tracking-tighter text-xl">
              VISA
            </span>
            <span className="font-black text-slate-400 tracking-tighter text-xl">
              MASTERCARD
            </span>
            <span className="font-black text-slate-400 tracking-tighter text-xl">
              DPO GROUP
            </span>
          </div>
        </div>

        {/* --- DATA STATS SECTION --- */}
        <section className="py-24 px-6 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-8 rounded-3xl bg-white/5 border border-white/10"
                >
                  <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
                Transparent 2026 Pricing
              </h2>
              <p className="text-slate-500">
                Tailored solutions for businesses across {cityName}.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {pricingPlans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-[2.5rem] border ${plan.highlight ? "border-blue-600 shadow-2xl" : "border-slate-100"} bg-white`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-sm font-bold text-slate-500">
                      Ksh
                    </span>
                    <span className="text-4xl font-black text-slate-900">
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-blue-600 flex-shrink-0"
                        />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl}
                    className={`block text-center py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${plan.highlight ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-900"}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
              Local FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[2rem] bg-white border border-slate-100"
                >
                  <h3 className="font-bold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 relative z-10">
              Dominate the {cityName} Market
            </h2>
            <p className="text-blue-100 mb-10 relative z-10">
              Join 150+ Kenyan brands powered by SleekSites.
            </p>
            <a
              href={whatsappUrl}
              className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
