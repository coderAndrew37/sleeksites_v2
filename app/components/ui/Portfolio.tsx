"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BentoCard from "./BentoCard";
import { Project } from "@/types";

interface PortfolioProps {
  projects: Project[];
}

export default function Portfolio({ projects }: PortfolioProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
            >
              Case Studies
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 text-slate-900">
              Selected <br />
              <span className="text-slate-400 font-light italic">works.</span>
            </h2>
          </div>

          <p className="max-w-xs text-slate-500 text-sm leading-relaxed mb-2 font-medium">
            A curated collection of digital products crafted with precision,
            performance, and technical clarity.
          </p>
        </div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Large Featured Project (Spans 8 columns) */}
          {projects[0] && (
            <BentoCard
              title={projects[0].title}
              category={projects[0].category}
              image={projects[0].image}
              link={`/work/${projects[0].slug}`}
              className="md:col-span-8 min-h-[500px]"
              excerpt={
                projects[0].excerpt ||
                "Technical engineering meets intuitive design in this full-scale deployment."
              }
              technologies={projects[0].technologies}
              variant={(projects[0].theme?.backgroundStyle as any) || "dark"}
            />
          )}

          {/* 2. Secondary Project (Spans 4 columns) */}
          {projects[1] && (
            <BentoCard
              title={projects[1].title}
              category={projects[1].category}
              image={projects[1].image}
              link={`/work/${projects[1].slug}`}
              className="md:col-span-4 min-h-[500px]"
              excerpt={projects[1].excerpt}
              technologies={projects[1].technologies}
              variant={(projects[1].theme?.backgroundStyle as any) || "dark"}
            />
          )}

          {/* 3. Third Project (Spans 4 columns) */}
          {projects[2] && (
            <BentoCard
              title={projects[2].title}
              category={projects[2].category}
              image={projects[2].image}
              link={`/work/${projects[2].slug}`}
              className="md:col-span-4 min-h-[400px]"
              excerpt={projects[2].excerpt}
              technologies={projects[2].technologies}
              variant={(projects[2].theme?.backgroundStyle as any) || "dark"}
            />
          )}

          {/* 4. Fourth Project (Spans 8 columns) */}
          {projects[3] && (
            <BentoCard
              title={projects[3].title}
              category={projects[3].category}
              image={projects[3].image}
              link={`/work/${projects[3].slug}`}
              className="md:col-span-8 min-h-[400px]"
              excerpt={
                projects[3].excerpt ||
                "Scalable architecture built for the Kenyan e-commerce landscape."
              }
              technologies={projects[3].technologies}
              variant={(projects[3].theme?.backgroundStyle as any) || "dark"}
            />
          )}

          {/* 5. "View All" Call to Action Card */}
          <Link
            href="/work"
            className="md:col-span-12 group relative rounded-[3rem] bg-slate-900 overflow-hidden py-20 px-12 flex items-center justify-between border border-slate-800 transition-all duration-500 hover:border-slate-700"
          >
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                See the full archive
              </h3>
              <p className="text-slate-400 mt-4 max-w-sm">
                Over 50+ successful deployments across Fintech, E-commerce, and
                SaaS.
              </p>
            </div>
            <div className="relative z-10 w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-blue-600/20">
              <ArrowUpRight size={40} />
            </div>
            {/* Subtle animated background for the CTA */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Link>
        </div>
      </div>
    </section>
  );
}
