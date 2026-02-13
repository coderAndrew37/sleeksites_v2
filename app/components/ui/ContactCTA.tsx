// components/ContactCTA.tsx
"use client";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-900">
      {/* Animated Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Ready to build your <br /> <span className="text-blue-400">digital engine?</span>
          </motion.h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Stop losing leads to slow, outdated websites. Let’s build a high-performance 
            platform that scales with your business.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20">
              Book a Free Strategy Call
            </button>
            <span className="text-slate-500 font-mono text-sm">Or email: hello@sleeksites.co.ke</span>
          </div>
        </div>
      </div>
    </section>
  );
}