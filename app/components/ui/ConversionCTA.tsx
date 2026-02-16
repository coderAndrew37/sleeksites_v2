"use client";
import { motion } from "framer-motion";
import { CheckCircle2, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: The Visual Proof */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            /* Add 'aspect-square' or 'aspect-video' or a custom h-[500px] */
            className="relative aspect-square md:aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <Image
              src="/agency-working.jpg"
              alt="Digital Agency at work"
              className="w-full h-auto object-cover"
              fill
              priority
            />

            {/* Floating Stats Badge (The "30K+" element) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-8 right-8 bg-slate-900 text-white p-6 rounded-2xl shadow-xl flex flex-col"
            >
              <span className="text-3xl font-bold tracking-tighter text-blue-400">
                30 K+
              </span>
              <span className="text-xs uppercase tracking-widest opacity-70">
                Satisfied Customers
              </span>
            </motion.div>

            {/* Award Badge (The "Ultimate Winner" element)
            <div className="absolute top-8 left-8 w-24 h-24 bg-white rounded-full p-2 shadow-lg flex items-center justify-center border border-slate-100">
              <Image
                src="/award-badge.png"
                alt="Award"
                className="w-16 h-16 object-contain"
              />
            </div> */}
          </motion.div>
        </div>

        {/* Right Side: The Copy & Actions */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-orange-500 rounded-full" />
            <span className="font-bold text-slate-900 tracking-tight">
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

          {/* Feature Grid (Icon list from your image) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
            {[
              "7+ Years Of Experience",
              "Award Winning Agency",
              "Expert Team Members",
              "Best Quality Services",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-500 w-5 h-5" />
                <span className="font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-8 border-t border-slate-100 pt-10">
            <Link
              href="/about"
              className="bg-orange-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-200 transition-all active:scale-95"
            >
              Learn More
            </Link>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <PhoneCall size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 uppercase font-bold">
                  Call Now
                </span>
                <span className="text-lg font-bold text-slate-900">
                  123-456-7890
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
