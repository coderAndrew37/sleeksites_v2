import CustomPortableText from "@/app/components/blog/PortableTextComponents";
import Button from "@/app/components/ui/Button";
import { getProjects, getServiceBySlug } from "@/lib/api";
import { AVAILABILITY_STATUS, getWhatsAppUrl } from "@/lib/constants/contact";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// --- SEO & Metadata Generation ---
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) return { title: "Service Not Found | SleekSites" };

  const title = `${service.title} in Kenya | Premium Digital Engineering | SleekSites`;
  const description = `${service.desc} Specialized ${service.title} services for businesses in Nairobi and across Kenya. High-performance, SEO-optimized, and M-Pesa ready.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://sleeksites.co.ke/services/${slug}`,
      siteName: "SleekSites Agency",
      locale: "en_KE",
      type: "website",
      images: [
        {
          url: service.image || "/og-main.jpg",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image || "/og-image.jpg"],
    },
    alternates: {
      canonical: `https://sleeksites.co.ke/services/${slug}`,
    },
  };
}

// --- 1. Enhanced Data & Constants ---
const INDUSTRIES = [
  {
    name: "E-Commerce",
    price: "100,000",
    features: [
      "M-Pesa Daraja 2.0 Integration",
      "Inventory Management",
      "DPO/Visa/Mastercard",
      "High-Speed Checkout",
    ],
  },
  {
    name: "Corporate & B2B",
    price: "300,000",
    features: [
      "Custom CMS Architecture",
      "CRM Integration",
      "Unlimited Pages",
      "Advanced Lead Capture",
    ],
  },
  {
    name: "Small Business",
    price: "45,000",
    features: [
      "Google My Business Setup",
      "Mobile Optimization",
      "Social Media Linkage",
      "Analytics Dashboard",
    ],
  },
  {
    name: "Landing Pages",
    price: "15,000",
    features: [
      "High Conversion Design",
      "Contact Form",
      "Standard SEO",
      "Fast Deployment",
    ],
  },
];

const KENYA_STATS = [
  {
    label: "KES Revenue Generated",
    value: "250M+",
    icon: <BarChart3 className="text-blue-500" />,
  },
  {
    label: "M-Pesa API Success",
    value: "99.9%",
    icon: <Zap className="text-yellow-500" />,
  },
  {
    label: "Local Latency",
    value: "< 2.5s",
    icon: <Cpu className="text-green-500" />,
  },
  {
    label: "KE Domain Trust",
    value: "Top Tier",
    icon: <Globe2 className="text-purple-500" />,
  },
];

// --- 2. Sub-Components ---

const TechMarquee = () => (
  <div className="py-12 bg-slate-950 border-y border-white/5 overflow-hidden flex whitespace-nowrap">
    <div className="flex animate-marquee gap-16 items-center">
      {[
        "Next.js",
        "Sanity CMS",
        "M-Pesa Daraja",
        "Tailwind CSS",
        "AWS",
        "TypeScript",
        "PostgreSQL",
        "Node.js",
      ].map((t, i) => (
        <span
          key={i}
          className="text-white/10 text-3xl font-black uppercase tracking-widest px-4 hover:text-blue-500/40 transition-colors"
        >
          {t}
        </span>
      ))}
      {/* Duplicated for loop */}
      {[
        "Next.js",
        "Sanity CMS",
        "M-Pesa Daraja",
        "Tailwind CSS",
        "AWS",
        "TypeScript",
        "PostgreSQL",
        "Node.js",
      ].map((t, i) => (
        <span
          key={i + 10}
          className="text-white/10 text-3xl font-black uppercase tracking-widest px-4"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

/**
 * IndustryPricing Section
 * Displays localized KES pricing benchmarks with context-aware WhatsApp routing.
 */
const IndustryPricing = ({ serviceTitle }: { serviceTitle: string }) => (
  <section className="py-24 bg-slate-50 relative overflow-hidden">
    {/* Subtle decorative background element */}
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">
            2026 Industry{" "}
            <span className="text-blue-600 underline decoration-slate-200">
              Benchmarks.
            </span>
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            We’ve analyzed the Kenyan digital landscape to provide transparent,
            ROI-focused pricing for every vertical.
          </p>
        </div>

        <div className="bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm flex items-center gap-3">
          <ShieldCheck className="text-blue-600" size={20} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 italic">
            Verified Pricing
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.name}
            className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col h-full"
          >
            <h4 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">
              {ind.name}
            </h4>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                From
              </span>
              <span className="text-3xl font-black text-blue-600 tracking-tighter">
                KES {ind.price}
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {ind.features.map((f) => (
                <li
                  key={f}
                  className="text-sm font-semibold text-slate-500 flex items-start gap-3 leading-tight"
                >
                  <CheckCircle2
                    size={16}
                    className="text-blue-500 mt-0.5 shrink-0"
                  />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={getWhatsAppUrl(
                `Hi SleekSites! I'm interested in the ${ind.name} package for ${serviceTitle}. I'd like to get a quote.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-5 bg-slate-50 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-300"
            >
              Get Consultation
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 3. Main Page Component ---

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  const allProjects = await getProjects();
  const relatedProjects = allProjects
    .filter((p) =>
      p.category?.toLowerCase().includes(service.title.toLowerCase()),
    )
    .slice(0, 3);

  // SEO Schema for Services
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "LocalBusiness", name: "SleekSites Agency" },
    areaServed: "KE",
    description: service.desc,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "KES",
      lowPrice: "15000",
      highPrice: "500000",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-white selection:bg-blue-600 selection:text-white">
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 bg-slate-950 overflow-hidden">
          {/* Ambient background glow to prevent "flat" black */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 lg:mb-16 font-bold text-[10px] uppercase tracking-[0.3em] group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <span className="text-4xl lg:text-6xl filter drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    {service.icon}
                  </span>
                  <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white tracking-tighter mb-8 lg:mb-10 leading-[0.9] lg:leading-[0.85]">
                  {service.title.split(" ")[0]} <br />
                  <span className="text-blue-600 inline-block">
                    {service.title.split(" ").slice(1).join(" ") || "Core"}
                  </span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl mb-10 lg:mb-12 font-medium">
                  {service.desc}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Wrap in Link to avoid the Button component's href TS error */}
                  <Link
                    href={getWhatsAppUrl(
                      `Hi SleekSites! I'd like to discuss the ${service.title} service for my business.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    <Button
                      variant="primary"
                      className="w-full !px-12 !py-6 !rounded-3xl shadow-2xl shadow-blue-600/30 text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform cursor-pointer"
                    >
                      Get a Quote
                    </Button>
                  </Link>

                  {/* Availability Badge with improved backdrop blur */}
                  <div className="flex items-center gap-4 px-6 py-4 border border-white/5 rounded-3xl text-white/50 text-[10px] font-black uppercase tracking-widest bg-white/[0.03] backdrop-blur-md shadow-inner">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="opacity-80">{AVAILABILITY_STATUS}</span>
                    <span className="ml-1 filter grayscale brightness-125">
                      🇰🇪
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative hidden lg:block">
                <div className="absolute inset-0 bg-blue-600/30 rounded-[4rem] blur-[100px] animate-pulse" />
                <div className="relative aspect-[4/5] w-full rounded-[3.5rem] border border-white/10 overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 bg-slate-900">
                  <Image
                    src={service.image || "/fallback-service.jpg"}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- Marquee for Tech Stack --- */}
        {slug === "web-development" && <TechMarquee />}

        {/* --- Kenyan Market Performance --- */}
        <section className="py-12 bg-slate-950 border-t border-white/5">
          <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {KENYA_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 border-x border-white/5"
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-1 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Main Content Area --- */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* --- Main Content (Left) --- */}
              <div className="lg:col-span-8">
                <div className="mb-12">
                  <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">
                    The Methodology
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mt-4">
                    Built for scale, not just for looks.
                  </h2>
                </div>

                {/* Using your CustomPortableText component for Sanity content */}
                <article
                  className="prose prose-slate prose-xl max-w-none 
          prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tighter
          prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900"
                >
                  <CustomPortableText value={service.content} />
                </article>

                {/* --- Architecture Feature Grid --- */}
                <div className="mt-20 p-12 bg-slate-950 rounded-[4rem] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap size={120} className="text-blue-500" />
                  </div>

                  <h3 className="text-3xl font-black mb-10 relative z-10">
                    Why our architecture wins:
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {[
                      {
                        t: "Lighthouse Speed",
                        d: "Scores 90+ on mobile metrics. Critical for retaining users on Safaricom 4G/5G networks.",
                      },
                      {
                        t: "M-Pesa Integration",
                        d: "Native Daraja 2.0 API hooks for STK Push, C2B, and B2C automated disbursements.",
                      },
                      {
                        t: "Headless Control",
                        d: "Powered by Sanity CMS. Edit your content in real-time without touching a line of code.",
                      },
                      {
                        t: "SEO Dominance",
                        d: "Full SSR (Server-Side Rendering) ensures your business ranks first in local search.",
                      },
                    ].map((item) => (
                      <div key={item.t} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                          <CheckCircle2 size={24} className="text-blue-500" />
                        </div>
                        <div>
                          <h5 className="font-black text-white text-lg">
                            {item.t}
                          </h5>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {item.d}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- Sticky Sidebar (Right) --- */}
              <aside className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                      <Zap size={24} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">
                      Ready to start?
                    </h4>
                    <p className="text-slate-500 mb-8 text-sm font-medium leading-relaxed">
                      Join the next wave of Kenyan digital leaders. Get a
                      custom-engineered technical blueprint for your **
                      {service.title}** project today.
                    </p>

                    {/* Updated WhatsApp Routing with prefilled service context */}
                    <Link
                      href={getWhatsAppUrl(
                        `Hi SleekSites! I'm reading about your ${service.title} services and I'd like to get a technical blueprint for my project.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full bg-blue-600 text-white p-6 rounded-3xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all group shadow-xl shadow-blue-600/20"
                    >
                      Start Your Engine{" "}
                      <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Quick Support Badge - Fixed to White for high contrast in the sidebar */}
                  <div className="px-10 py-6 bg-white border border-slate-100 rounded-[2.5rem] flex items-center gap-4 shadow-sm">
                    <div className="relative flex h-3 w-3">
                      <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Live Support in Nairobi
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* --- Industry & Pricing Section --- */}
        {slug === "web-development" && (
          <IndustryPricing serviceTitle={service.title} />
        )}

        {/* --- Case Studies --- */}
        {relatedProjects.length > 0 && (
          <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div>
                  <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
                    Case Studies
                  </h2>
                  <p className="text-slate-500 text-lg">
                    Real results for Kenyan industry leaders.
                  </p>
                </div>
                <Link
                  href="/work"
                  className="group flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-xs"
                >
                  Full Portfolio{" "}
                  <div className="p-3 bg-slate-50 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {relatedProjects.map((project) => (
                  <Link
                    key={project._id}
                    href={`/work/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">
                        {project.category}
                      </span>
                      <h4 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-500 line-clamp-2 text-sm leading-relaxed">
                        {project.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
