import { getServiceBySlug, getProjects } from "@/lib/api";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Zap, ArrowUpRight } from "lucide-react";
import Button from "@/app/components/ui/Button";

// --- 1. Constants & Types ---
const INDUSTRIES = [
  {
    name: "E-Commerce",
    price: "120,000",
    features: ["M-Pesa Daraja 2.0", "Inventory Sync", "High-Speed Checkout"],
  },
  {
    name: "Real Estate",
    price: "95,000",
    features: ["Map Integration", "Lead Gen Funnels", "WhatsApp Automation"],
  },
  {
    name: "Corporate",
    price: "85,000",
    features: ["CMS Architecture", "Global SEO", "Brand Consistency"],
  },
  {
    name: "SaaS & Tech",
    price: "150,000",
    features: ["User Dashboards", "API Connectivity", "Infinite Scaling"],
  },
];

// --- 2. Sub-Components ---

const TechMarquee = () => (
  <div className="py-8 bg-slate-950 border-y border-white/5 overflow-hidden flex whitespace-nowrap">
    <div className="flex animate-marquee gap-12 items-center">
      {[
        "Next.js",
        "Sanity CMS",
        "M-Pesa Daraja",
        "Tailwind",
        "PostgreSQL",
        "AWS",
        "TypeScript",
        "Framer Motion",
      ].map((t, i) => (
        <span
          key={i}
          className="text-white/20 text-2xl font-black uppercase tracking-widest px-4"
        >
          {t}
        </span>
      ))}
      {/* Duplicate for infinite loop effect */}
      {[
        "Next.js",
        "Sanity CMS",
        "M-Pesa Daraja",
        "Tailwind",
        "PostgreSQL",
        "AWS",
        "TypeScript",
        "Framer Motion",
      ].map((t, i) => (
        <span
          key={i + 10}
          className="text-white/20 text-2xl font-black uppercase tracking-widest px-4"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const IndustryPricing = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6">
          Solutions for every <span className="text-blue-600">vertical.</span>
        </h2>
        <p className="text-slate-500 text-lg">
          Transparent starting points for businesses ready to scale in the
          Kenyan market.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.name}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <h4 className="text-xl font-black text-slate-900 mb-1">
              {ind.name}
            </h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
              Starting at
            </p>
            <p className="text-3xl font-black text-blue-600 mb-6">
              KES {ind.price}
            </p>
            <ul className="space-y-3">
              {ind.features.map((f) => (
                <li
                  key={f}
                  className="text-sm text-slate-500 flex items-center gap-2"
                >
                  <CheckCircle2 size={14} className="text-blue-400" /> {f}
                </li>
              ))}
            </ul>
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
    .filter((p) => p.category?.toLowerCase() === service.title.toLowerCase())
    .slice(0, 3);

  return (
    <main className="bg-white">
      {/* --- Minimalist Hero --- */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/#services"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{service.icon}</span>
              <span className="h-px w-12 bg-blue-600" />
              <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">
                SleekSites Core Expertise
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              {service.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              {service.desc}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
      </section>

      {/* --- Marquee for Tech Stack --- */}
      {slug === "web-development" && <TechMarquee />}

      {/* --- Main Content Area --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Detailed Content */}
            <div className="lg:col-span-7">
              <article
                className="prose prose-slate prose-lg max-w-none 
                prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900"
              >
                <PortableText value={service.content} />
              </article>

              <div className="mt-12 p-10 bg-blue-600 rounded-[3rem] text-white">
                <h3 className="text-2xl font-black mb-6">
                  The High-Performance Guarantee
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Google Lighthouse Scores 90+",
                    "M-Pesa API Daraja Ready",
                    "Headless CMS for Content Freedom",
                    "SEO-First Architecture",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 font-bold"
                    >
                      <CheckCircle2 size={20} className="text-blue-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Sidebar */}
            <aside className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                {service.image && (
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                  <Zap className="absolute -right-4 -top-4 w-32 h-32 text-white/5 group-hover:text-blue-500/10 transition-colors duration-700" />
                  <h4 className="text-2xl font-black mb-4 relative z-10">
                    Deploy your vision
                  </h4>
                  <p className="text-slate-400 mb-8 relative z-10">
                    Stop settling for templates. Get a custom engine built for
                    growth.
                  </p>
                  <Button
                    variant="primary"
                    className="w-full !py-4 !rounded-2xl relative z-10"
                  >
                    Request a Proposal
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* --- Industry & Performance (Dynamic) --- */}
      {slug === "web-development" && <IndustryPricing />}

      {/* --- Proof of Work --- */}
      {relatedProjects.length > 0 && (
        <section className="py-24 border-t border-slate-100 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
                  Case Studies
                </h2>
                <p className="text-slate-500">
                  How we applied {service.title} for our clients.
                </p>
              </div>
              <Link
                href="/work"
                className="group flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                View All Work{" "}
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedProjects.map((project) => (
                <Link
                  key={project._id}
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl group-hover:shadow-blue-200 transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-slate-500 line-clamp-2">
                    {project.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
