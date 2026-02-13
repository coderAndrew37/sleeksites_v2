"use client";
import { industries } from "@/data/industries";
import { Industry } from "@/types";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function IndustryCard({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div className="snap-center shrink-0 w-[85vw] md:w-[400px] h-full">
      <Link
        href={industry.link}
        onMouseMove={handleMouseMove}
        className="group relative block h-full p-10 bg-white/80 backdrop-blur-md border border-white/20 rounded-[3rem] overflow-hidden hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(37, 99, 235, 0.1),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10">
          <div className="text-4xl mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
            {industry.icon}
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
            {industry.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-8">
            {industry.desc}
          </p>
          <div className="flex items-center text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all">
            View Solutions <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Industries() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/industry-bg.jpg" // Add a high-res abstract tech image here
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
              Sectors
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4">
              Industries we <br />
              <span className="text-slate-400 font-light italic">
                transform.
              </span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              aria-label="back button"
              onClick={() => scroll("left")}
              className="p-4 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              aria-label="next button"
              onClick={() => scroll("right")}
              className="p-4 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Swipeable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
        >
          {industries.map((industry, i) => (
            <IndustryCard key={i} industry={industry} index={i} />
          ))}
          <div className="shrink-0 w-12" />
        </div>
      </div>
    </section>
  );
}
