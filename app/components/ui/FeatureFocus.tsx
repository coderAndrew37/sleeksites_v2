"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Sparkles, Zap, Shield, Gauge } from "lucide-react";

export default function FeatureFocus() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white py-32 px-6 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4000" />

      {/* Subtle CSS Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 
          bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)]
          bg-[size:60px_60px]"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
              Next-Gen Engineering
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900">
            Websites built <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              like software.
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
            We don't just design. We engineer digital environments using the
            Next.js 15 stack, ensuring your site is an appreciating asset — not
            just a digital brochure.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                icon: Gauge,
                title: "Lightning Fast Performance",
                desc: "95+ PageSpeed scores out of the box.",
              },
              {
                icon: Shield,
                title: "SEO-First Architecture",
                desc: "Semantic HTML5 and automated schema markup.",
              },
              {
                icon: Zap,
                title: "Conversion Engineering",
                desc: "Data-driven UI placements that trigger sales.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-2 shadow-md shadow-indigo-200 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="relative [perspective:1200px]">
          {/* Browser Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative z-10 aspect-video bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-indigo-100/50 overflow-hidden"
          >
            {/* Browser Header */}
            <div className="absolute top-0 w-full h-10 bg-white/70 backdrop-blur-md border-b border-slate-200 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-300" />
                <div className="w-3 h-3 rounded-full bg-amber-300" />
                <div className="w-3 h-3 rounded-full bg-emerald-300" />
              </div>
              <div className="mx-auto bg-slate-100 border border-slate-200 px-4 py-0.5 rounded-md text-[10px] text-slate-500 font-mono">
                sleeksites.io/your-project
              </div>
            </div>

            {/* Mock Content */}
            <div className="pt-14 px-8 flex flex-col gap-4">
              <div className="h-8 w-1/3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg animate-pulse" />
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100" />
                <div className="h-32 bg-slate-50 rounded-xl border border-slate-200" />
                <div className="h-32 bg-slate-50 rounded-xl border border-slate-200" />
              </div>
              <div className="h-20 w-full bg-slate-50 rounded-xl border border-slate-200" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-3 left-8 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
            >
              <Zap className="w-3 h-3" />
              98 PageSpeed
            </motion.div>
          </motion.div>

          {/* Code Terminal */}
          <motion.div
            initial={{ x: 60, y: 20, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -bottom-10 -right-6 z-20 w-[85%] bg-[#1e1e2e] rounded-xl shadow-2xl border border-[#313244] overflow-hidden font-mono text-sm"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-[#313244]">
              <div className="flex items-center gap-2">
                <Terminal className="text-indigo-400 w-4 h-4" />
                <span className="text-xs text-slate-400">PageEngine.tsx</span>
              </div>
            </div>

            <div className="p-4 text-[13px] leading-relaxed text-slate-300">
              <p>
                <span className="text-pink-400">export default</span>{" "}
                <span className="text-pink-400">async function</span>{" "}
                <span className="text-yellow-300">DeploySite</span>() {"{"}
              </p>
              <p className="pl-4">
                <span className="text-blue-300">const</span> performance =
                <span className="text-purple-300"> await</span>{" "}
                <span className="text-green-300">optimizeMetrics</span>();
              </p>
              <p className="pl-4 text-slate-500 italic">
                // Applying conversion patterns
              </p>
              <p className="pl-4">
                <span className="text-blue-300">return</span> ({"<Hero />"});
              </p>
              <p>{"}"}</p>
            </div>

            <div className="flex items-center justify-between px-4 py-1.5 bg-[#181825] border-t border-[#313244] text-[10px] text-slate-400">
              <span>TypeScript • ES2022</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live & Scalable
              </span>
            </div>
          </motion.div>

          {/* Background Decoration */}
          <div className="absolute -top-20 -left-20 opacity-20 rotate-12">
            <Code2 size={220} className="text-indigo-600/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
