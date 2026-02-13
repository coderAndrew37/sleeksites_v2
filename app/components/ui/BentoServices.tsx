// components/BentoServices.tsx
"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "We build high-performance Next.js engines optimized for core web vitals and speed.",
    className: "md:col-span-2 md:row-span-2 bg-blue-600 text-white",
    icon: "🚀"
  },
  {
    title: "SEO Strategy",
    desc: "Dominating search results through technical precision.",
    className: "md:col-span-1 bg-white border border-slate-200",
    icon: "📈"
  },
  {
    title: "Ads & Marketing",
    desc: "Conversion-led campaigns that scale revenue.",
    className: "md:col-span-1 bg-slate-900 text-white",
    icon: "🎯"
  },
];

export default function BentoServices() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold tracking-tighter mb-12">Our Core Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className={`${s.className} rounded-[2.5rem] p-10 flex flex-col justify-between shadow-sm`}
          >
            <div className="text-4xl">{s.icon}</div>
            <div>
              <h3 className="text-2xl font-bold leading-tight">{s.title}</h3>
              <p className="mt-2 opacity-80 text-sm">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}