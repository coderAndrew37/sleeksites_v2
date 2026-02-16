"use client";
import { industries } from "@/data/industries";
import { Industry } from "@/types";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function IndustryCard({ industry }: { industry: Industry; index: number }) {
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
    <motion.div className="snap-center shrink-0 w-[85vw] md:w-[420px] h-[500px] py-4">
      <Link
        href={industry.link}
        onMouseMove={handleMouseMove}
        className="group relative block h-full p-10 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-[3rem] shadow-sm overflow-hidden hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        {/* Spotlight Effect - increased opacity for better contrast on hover */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(37, 99, 235, 0.08),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 h-full flex flex-col">
          <div className="text-5xl mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 origin-left">
            {industry.icon}
          </div>

          <h3 className="text-3xl font-bold mb-4 tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            {industry.title}
          </h3>

          <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8 line-clamp-4">
            {industry.desc}
          </p>

          <div className="mt-auto flex items-center text-sm font-black uppercase tracking-widest text-blue-600">
            <span className="group-hover:mr-2 transition-all">
              Explore Sector
            </span>
            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Industries() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Parallax effect for the background image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const moveBy = clientWidth * 0.8;
      const scrollTo =
        direction === "left" ? scrollLeft - moveBy : scrollLeft + moveBy;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden min-h-screen flex items-center bg-slate-50"
    >
      {/* --- PREMIER BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y }}
          src="/industry-bg.jpg"
          alt=""
          className="w-full h-[120%] object-cover grayscale opacity-20 contrast-125"
        />
        {/* Radial vignette: keeps the center clear but darkens the edges for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#f8fafc_80%)]" />
        {/* Subtle mesh pattern for "Tech" feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">
                Sectors
              </span>
            </motion.div>

            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Strategic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Industries.
              </span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              aria-label="scroll back"
              onClick={() => scroll("left")}
              className="group p-5 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur hover:bg-blue-600 hover:border-blue-600 transition-all shadow-xl shadow-slate-200/50 active:scale-90"
            >
              <ArrowLeft
                className="text-slate-600 group-hover:text-white transition-colors"
                size={28}
              />
            </button>
            <button
              aria-label="scroll next"
              onClick={() => scroll("right")}
              className="group p-5 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur hover:bg-blue-600 hover:border-blue-600 transition-all shadow-xl shadow-slate-200/50 active:scale-90"
            >
              <ArrowRight
                className="text-slate-600 group-hover:text-white transition-colors"
                size={28}
              />
            </button>
          </div>
        </div>

        {/* Swipeable Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-20 snap-x snap-mandatory scrollbar-hide perspective-1000"
        >
          {industries.map((industry, i) => (
            <IndustryCard key={i} industry={industry} index={i} />
          ))}
          {/* Spacer for end of scroll */}
          <div className="shrink-0 w-[10vw]" />
        </div>
      </div>
    </section>
  );
}
