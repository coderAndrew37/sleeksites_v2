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
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const fullTitle = `Web Design & SEO Services in ${cityName} | SleekSites Agency`;
  const description = `Looking for a professional web agency in ${cityName}? SleekSites builds high-performance, conversion-focused websites for businesses in ${cityName}. Get a free consultation today.`;

  // Updated to match /web-design/city
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
      images: [
        {
          url: "/og-main.jpg",
          width: 1200,
          height: 630,
          alt: `SleekSites ${cityName}`,
        },
      ],
      locale: "en_KE",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const cities = ["nairobi", "mombasa", "kisumu", "nakuru", "eldoret", "thika"];
  return cities.map((city) => ({
    city: city,
  }));
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const whatsappUrl = getWhatsAppUrl(
    `Hello! I'm interested in professional web design services in ${cityName}.`,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Web Design Services in ${cityName}`,
    description: `Professional web development and digital marketing for businesses in ${cityName}, Kenya.`,
    provider: {
      "@type": "LocalBusiness",
      name: "SleekSites Agency",
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName,
        addressCountry: "KE",
      },
    },
    areaServed: {
      "@type": "City",
      name: cityName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen pt-20">
        <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt={`${cityName} digital landscape`}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-slate-950" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 px-4 py-2 rounded-full mb-8">
              <MapPin size={14} className="text-blue-400" />
              <span className="text-blue-100 text-[10px] font-black uppercase tracking-[0.3em]">
                Available in {cityName}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              Premium Web Design <br />
              Services in <span className="text-blue-500">{cityName}</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Scale your {cityName} business with high-performance digital
              engines designed to convert visitors into loyal customers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              >
                Start Your Project
              </a>
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
              >
                Call Us Directly
              </a>
            </div>
          </div>
        </section>

        {/* --- Value Proposition --- */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/agency-working.jpg"
                  alt="Web design team working"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-1 bg-blue-600 rounded-full" />
                  <span className="font-black text-slate-900 text-sm uppercase tracking-widest">
                    Local Expertise
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
                  Why {cityName} Brands <br /> Choose SleekSites
                </h2>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                  In the fast-growing {cityName} economy, a slow website is a
                  lost opportunity. We specialize in building ultra-fast
                  platforms that help local businesses reach customers across
                  the region.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "100% Custom Designs",
                    "Local SEO Optimization",
                    "Mobile-First Approach",
                    "Dedicated Support",
                    "AI-Ready Infrastructure",
                    "Fast Turnaround",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 flex-shrink-0" />
                      <span className="font-bold text-slate-800 text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Features --- */}
        <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-[2rem] shadow-sm border border-slate-100 group hover:border-blue-500 transition-colors">
              <Zap size={40} className="text-blue-600 mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                Rapid Speed
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We optimize every line of code to ensure your {cityName} site
                loads in milliseconds.
              </p>
            </div>
            <div className="p-10 bg-white rounded-[2rem] shadow-sm border border-slate-100 group hover:border-blue-500 transition-colors">
              <Globe size={40} className="text-blue-600 mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                Local SEO
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Appear at the top of Google when customers in {cityName} search
                for your services.
              </p>
            </div>
            <div className="p-10 bg-white rounded-[2rem] shadow-sm border border-slate-100 group hover:border-blue-500 transition-colors">
              <ShieldCheck size={40} className="text-blue-600 mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                Secure & Scalable
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Built with the latest technologies to keep your business data
                safe and ready to grow.
              </p>
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 relative z-10 leading-[1.1]">
              Ready to be the <br /> best in {cityName}?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto relative z-10 font-medium">
              Join the hundreds of Kenyan businesses already winning online with
              SleekSites.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a
                href={whatsappUrl}
                target="_blank"
                className="w-full sm:w-auto bg-white text-blue-600 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all shadow-xl"
              >
                Start My Project
              </a>
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="flex items-center gap-3 font-bold text-white hover:text-blue-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                  <PhoneCall size={18} />
                </div>
                +{PHONE_NUMBER}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
