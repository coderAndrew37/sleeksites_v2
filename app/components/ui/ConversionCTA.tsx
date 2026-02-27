"use client";
import { motion } from "framer-motion";
import { CheckCircle2, PhoneCall } from "lucide-react";
import Image from "next/image";
// Import your central contact constants
import { PHONE_NUMBER, getWhatsAppUrl } from "@/lib/constants/contact";

export default function FinalCTA() {
  // Logic for the primary WhatsApp action
  const handleConsultation = () => {
    const url = getWhatsAppUrl(
      "I'm interested in your Website development services. Can we discuss a project?",
    );
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: The Visual Proof */}
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100"
          >
            <Image
              src="/agency-working.jpg"
              alt="SleekSites Digital Agency team at work"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              fill
              priority
            />

            {/* Floating Stats Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-8 right-8 bg-slate-950 text-white p-6 rounded-2xl shadow-2xl flex flex-col border border-white/10"
            >
              <span className="text-3xl font-black tracking-tighter text-blue-400">
                30 K+
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">
                Satisfied Customers
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: The Copy & Actions */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-orange-500 rounded-full" />
            <span className="font-bold text-slate-900 tracking-tight text-sm uppercase">
              Fast. Reliable. Fully Online.
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
            Digital Services Under <br /> One{" "}
            <span className="text-blue-600">Roof</span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
            We operate as a{" "}
            <span className="font-bold text-slate-900">
              modern digital agency
            </span>
            , offering the same services you&apos;d find in a physical office
            but smarter, faster, and fully online.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
            {[
              "7+ Years Of Experience",
              "Award Winning Agency",
              "Expert Team Members",
              "Best Quality Services",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
                <span className="font-semibold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-8 border-t border-slate-100 pt-10">
            <button
              onClick={handleConsultation}
              className="bg-orange-500 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-200 transition-all active:scale-95 cursor-pointer"
            >
              Start Project
            </button>

            {/* Dynamic Phone Link */}
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                <PhoneCall size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                  Call Now
                </span>
                <span className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  +{PHONE_NUMBER.replace(/(\d{3})(\d{3})(\d+)/, "$1 $2 $3")}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
