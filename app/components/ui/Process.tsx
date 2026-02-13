"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Discovery", desc: "We dive deep into your brand and goals." },
  { title: "Strategy", desc: "A custom roadmap built for conversion." },
  { title: "Execution", desc: "High-performance coding and design." },
  { title: "Launch", desc: "Optimization and going live to the world." },
];

export default function HowWeWork() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 text-center">
          Our <span className="text-blue-600">Process</span>
        </h2>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-slate-100 md:left-1/2 md:-translate-x-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`relative mb-20 flex items-start gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="w-full md:w-[45%]">
                <div
                  className={`p-8 rounded-[2rem] bg-slate-50 border border-slate-100 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <span className="text-blue-600 font-bold text-sm uppercase mb-2 block">
                    Step 0{i + 1}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-500">{step.desc}</p>
                </div>
              </div>

              {/* Central Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-600 z-10 flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>

              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
