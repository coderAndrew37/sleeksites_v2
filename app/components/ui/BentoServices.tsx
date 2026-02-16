"use client";
import { Service } from "@/types";
import BentoCard from "./BentoCard"; // Path to the reusable card we just built

interface BentoServicesProps {
  services: Service[];
}

export default function BentoServices({ services }: BentoServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 bg-white">
      {/* --- Section Header --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">
            Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            Our Core <br />{" "}
            <span className="text-slate-400 italic font-light">Services.</span>
          </h2>
        </div>
        <p className="max-w-xs text-slate-500 text-sm leading-relaxed font-medium">
          Bespoke digital solutions engineered for high-performance Kenyan
          brands looking to scale globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {services.map((s) => (
          <BentoCard
            key={s._id}
            title={s.title}
            excerpt={s.desc}
            link={`/services/${s.slug}`}
            image={s.image || "/placeholder-service.jpg"}
            // Passing the icon string/component directly
            icon={s.icon}
            // Ensures the grid layout matches your homepage bento
            className={s.className || "md:col-span-1"}
            variant="dark"
          />
        ))}
      </div>
    </section>
  );
}
