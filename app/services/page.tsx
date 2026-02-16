import { Metadata } from "next";
import { getServices } from "@/lib/api";
import Layout from "@/app/components/layout/Layout";
import BentoServices from "../components/ui/BentoServices";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

// 1. ADVANCED SEO METADATA
export const metadata: Metadata = {
  title: "Services | SleekSites Kenya - Web Design, SEO & Digital Marketing",
  description:
    "High-performance digital engines built for Kenyan brands. From M-Pesa integrated e-commerce to technical SEO and custom Next.js development.",
  openGraph: {
    title: "SleekSites Kenya | Expert Digital Services",
    description:
      "Scale your Kenyan business with high-speed digital solutions.",
    images: ["/og-services.jpg"], // Ensure this exists in your public folder
  },
  alternates: {
    canonical: "https://sleeksites.co.ke/services",
  },
};

export default async function ServicesPage() {
  const services = await getServices();

  // 2. JSON-LD STRUCTURED DATA (Google loves this for Services)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing and Web Development",
    provider: {
      "@type": "LocalBusiness",
      name: "SleekSites Kenya",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
    areaServed: "Kenya",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
        },
      })),
    },
  };

  return (
    <Layout>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white">
        {/* --- BENTO GRID SECTION --- */}
        <div className="relative z-10">
          <BentoServices services={services} />
        </div>

        {/* --- CTA / FOOTER SECTION --- */}
        <section className="py-32 px-6 bg-slate-50/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Ready to build something <br /> remarkable?
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
              Whether you need a full-scale e-commerce engine or a
              high-converting landing page, our team is ready to deliver.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                Book a Strategy Call
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <Link
                href="/portfolio"
                className="px-8 py-4 text-slate-600 font-bold hover:text-slate-900 transition-colors"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale">
              <span className="font-black text-xl italic tracking-tighter">
                NEXT.JS
              </span>
              <span className="font-black text-xl italic tracking-tighter">
                VERCEL
              </span>
              <span className="font-black text-xl italic tracking-tighter">
                SANITY
              </span>
              <span className="font-black text-xl italic tracking-tighter">
                MPESA
              </span>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
