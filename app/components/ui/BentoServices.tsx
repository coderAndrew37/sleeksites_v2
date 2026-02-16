"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/types"; // Adjust import path

interface BentoServicesProps {
  services: Service[];
}

export default function BentoServices({ services }: BentoServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 bg-white">
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
        <p className="max-w-xs text-slate-500 text-sm leading-relaxed">
          Bespoke digital solutions engineered for high-performance Kenyan
          brands looking to scale globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {services.map((s) => (
          <Link
            key={s._id}
            href={`/services/${s.slug}`}
            className={`${s.className || "md:col-span-1 text-white"} group relative rounded-[3rem] overflow-hidden`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={s.image || "/placeholder-service.jpg"}
                alt={s.title}
                fill
                className="object-cover transition duration-700 group-hover:rotate-1"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <div className="relative z-10 h-full p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 shadow-xl">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <motion.div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl font-black leading-tight tracking-tighter">
                  {s.title}
                </h3>
                <p className="mt-3 opacity-0 h-0 group-hover:h-auto group-hover:opacity-80 text-sm leading-relaxed transition-all duration-500 overflow-hidden">
                  {s.desc}
                </p>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
