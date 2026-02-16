"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, Quote, Users } from "lucide-react";
import { Testimonial } from "../types/Index";
import { sampleTestimonials } from "@/data/testimonials";

// SVG data with single quotes to avoid JSX parsing issues
const gridSvgData =
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({
  testimonials = sampleTestimonials,
}: TestimonialsProps): JSX.Element {
  // Safely handle cases where testimonials is undefined or not an array
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  // If no testimonials, don't render the section or show a placeholder
  if (safeTestimonials.length === 0) {
    return (
      <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">Testimonials coming soon.</p>
        </div>
      </section>
    );
  }

  // Double the array for seamless infinite loop (only if we have testimonials)
  const duplicatedTestimonials = [...safeTestimonials, ...safeTestimonials];

  return (
    <section
      id="testimonials"
      className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden"
    >
      {/* Animated background elements - subtle like the reference site */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Subtle grid overlay - fixed SVG data */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url('${gridSvgData}')` }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                Clients Feedback
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900">
              Trusted by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                local leaders.
              </span>
            </h2>
          </div>

          {/* Overall Rating Card - inspired by the 4.9 display on the reference site */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-white/80 backdrop-blur-sm px-8 py-6 rounded-3xl border border-slate-200/60 shadow-xl shadow-indigo-500/5">
              <div className="text-center">
                <div className="text-5xl font-black text-indigo-600">4.9</div>
                <div className="flex gap-1 justify-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-indigo-600 text-indigo-600"
                    />
                  ))}
                </div>
                <p className="text-slate-600 font-medium">
                  <Users className="inline w-4 h-4 mr-1 text-indigo-500" />
                  {safeTestimonials.length}+ satisfied customers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="inline-block w-[380px] md:w-[480px] mx-4 whitespace-normal"
            >
              <div className="h-full bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group relative overflow-hidden">
                {/* Decorative quote icon */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-indigo-100 group-hover:text-indigo-50 transition-colors" />

                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-indigo-600 text-indigo-600"
                      />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-medium leading-snug text-slate-700 tracking-tight relative z-10">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white shadow-lg group-hover:ring-indigo-50 transition-all">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none text-lg">
                      {t.name}
                    </h4>
                    <p className="text-sm text-slate-500 mt-1 font-medium">
                      {t.role} @ {t.company}
                    </p>
                  </div>
                </div>

                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth fade-in/out */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      </div>

      {/* Mobile rating card - visible only on small screens */}
      <div className="mt-12 text-center md:hidden">
        <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-200/60 shadow-lg">
          <div className="text-left">
            <div className="text-3xl font-black text-indigo-600">4.9</div>
            <div className="flex gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-indigo-600 text-indigo-600"
                />
              ))}
            </div>
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div className="text-left">
            <div className="font-bold text-slate-900">
              {safeTestimonials.length}+
            </div>
            <p className="text-xs text-slate-500">happy clients</p>
          </div>
        </div>
      </div>

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
