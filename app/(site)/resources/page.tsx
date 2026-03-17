"use client";
import { JSX } from "react";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Download, Construction, TrendingUp } from "lucide-react";
import Link from "next/link";

interface Resource {
  slug: string;
  href: string;
  category: string;
  title: string;
  description: string;
  cta: string;
  icon: JSX.Element;
  badge: string;
  industry: string;
}

const resources: Resource[] = [
  {
    slug: "construction-blueprint",
    href: "/construction-blueprint",
    category: "Construction",
    title: "The Construction Digital Credibility Blueprint",
    description:
      "A 7-point audit for Kenyan construction firms competing for 20M+ tenders. Learn why your digital presence is costing you shortlists — and how to fix it.",
    cta: "Get the Blueprint",
    icon: <Construction className="w-6 h-6" />,
    badge: "Free Download",
    industry: "Construction & Engineering",
  },
  // Add more resources here as you create them
  // {
  //   slug: "real-estate-guide",
  //   href: "/real-estate-guide",
  //   category: "Real Estate",
  //   title: "The Property Listing Conversion Guide",
  //   ...
  // },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Resources(): JSX.Element {
  return (
    <Layout
      title="Free Resources - SleekSites Kenya"
      description="Free blueprints, guides and checklists for ambitious Kenyan businesses ready to compete at a higher level online."
    >
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              Free Resources
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[0.95]">
              Tools to help you{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                compete at the top.
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Practical blueprints, audits and guides built specifically for
              Kenyan businesses ready to win bigger contracts online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-12">
              {resources.length} Resource{resources.length !== 1 ? "s" : ""}{" "}
              Available
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, i) => (
                <motion.div
                  key={resource.slug}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={resource.href}
                    className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Card Header */}
                    <div className="bg-slate-950 p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="bg-blue-600 p-3 rounded-2xl text-white">
                          {resource.icon}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full">
                          {resource.badge}
                        </span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                        {resource.industry}
                      </p>
                      <h2 className="text-xl font-bold tracking-tight text-white leading-snug">
                        {resource.title}
                      </h2>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col flex-1 p-8">
                      <p className="text-slate-500 leading-relaxed text-sm flex-1 mb-8">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 text-sm font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                        <Download size={16} />
                        {resource.cta}
                        <ArrowRight
                          size={16}
                          className="ml-auto group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* Coming Soon Placeholder */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: resources.length * 0.1 }}
                className="flex flex-col h-full bg-white rounded-3xl border border-dashed border-slate-200 p-8 items-center justify-center text-center min-h-[320px]"
              >
                <TrendingUp className="w-10 h-10 text-slate-300 mb-4" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Coming Soon
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  More industry-specific guides dropping soon. Follow us to stay
                  updated.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-4">
            Need something custom?
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white mb-6">
            We'll audit your digital presence — free.
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Book a 30-minute strategy call and we'll tell you exactly what's
            holding your business back online.
          </p>
          <Link
            href="https://wa.me/254746577838?text=Hi%20SleekSites!%20I'd%20like%20a%20free%20digital%20audit."
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-xl"
          >
            Book Free Audit
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
