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
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Decorative background blur (optional) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            How we work
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A proven path from concept to launch, tailored to your goals.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line – hidden on mobile, visible on desktop */}
          <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2 hidden md:block" />

          {steps.map((step, i) => {
            // Alternate card alignment on desktop
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative mb-12 md:mb-16 last:mb-0"
              >
                {/* Mobile layout (flex) */}
                <div className="flex items-start gap-4 md:hidden">
                  {/* Dot & number */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md z-10 relative">
                      {i + 1}
                    </div>
                    {/* Vertical line connector (except last) */}
                    {i !== steps.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-0.5 h-12 bg-gradient-to-b from-blue-600 to-purple-200" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 group">
                    <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <span className="text-sm font-semibold text-blue-600">
                        Step 0{i + 1}
                      </span>
                      <h3 className="text-xl font-bold mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop layout (grid) */}
                <div className="hidden md:grid grid-cols-3 items-center">
                  {/* Left column (card for even steps) */}
                  <div className={`${isEven ? "block" : "hidden"} pr-8`}>
                    <Card step={step} index={i} align="right" />
                  </div>

                  {/* Center column (dot) */}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: i * 0.1,
                      }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-base shadow-lg z-10 ring-4 ring-white"
                    >
                      {i + 1}
                    </motion.div>
                  </div>

                  {/* Right column (card for odd steps) */}
                  <div className={`${!isEven ? "block" : "hidden"} pl-8`}>
                    <Card step={step} index={i} align="left" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Reusable card component for desktop
function Card({
  step,
  index,
  align,
}: {
  step: (typeof steps)[0];
  index: number;
  align: "left" | "right";
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
        Step 0{index + 1}
      </span>
      <h3 className="text-2xl font-bold mt-2 mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
        {step.title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
    </motion.div>
  );
}
