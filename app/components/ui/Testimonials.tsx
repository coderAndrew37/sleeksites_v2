"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // Install lucide-react if not already present
import { Testimonial } from "../types/Index";

export default function Testimonials(): JSX.Element {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Kimani",
      company: "Nairobi Spares",
      role: "Owner",
      content:
        "SleekSites transformed our auto parts business. Our online revenue went from zero to KES 450,000 per month in just 6 months. Their understanding of the Kenyan market is exceptional.",
      rating: 5,
      image: "/testimonials/sarah.jpg",
    },
    {
      id: "2",
      name: "James Omondi",
      company: "QuickFix Plumbers",
      role: "MD",
      content:
        "The website they built for us generates 25-30 qualified leads every month. We've expanded our team from 3 to 8 plumbers thanks to the consistent business coming through our site.",
      rating: 5,
      image: "/testimonials/james.jpg",
    },
    {
      id: "3",
      name: "Grace Mwende",
      company: "Mombasa Fashion",
      role: "CEO",
      content:
        "Our e-commerce store built by SleekSites increased our sales by 320%. The user experience is seamless, and the mobile optimization has been crucial for our Kenyan customers.",
      rating: 5,
      image: "/testimonials/grace.jpg",
    },
    {
      id: "4",
      name: "David Maina",
      company: "Tech Solutions Ltd",
      role: "Marketing Manager",
      content:
        "Their SEO strategy put us on the first page of Google for all our key services. The quality of leads has improved dramatically, and our conversion rate is now 4.2%.",
      rating: 5,
      image: "/testimonials/david.jpg",
    },
  ];

  // Double the array for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
            >
              Real Results
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 text-slate-900">
              Trusted by <br />
              <span className="text-slate-400 font-light italic">
                local leaders.
              </span>
            </h2>
          </div>
          <div className="hidden md:block pb-2">
            <p className="text-slate-500 font-medium tracking-tight">
              4.9/5 Average Rating across 120+ projects
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="inline-block w-[350px] md:w-[450px] mx-4 whitespace-normal"
            >
              <div className="h-full bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-blue-600 text-blue-600"
                      />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-medium leading-snug text-slate-800 tracking-tight italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none">
                      {t.name}
                    </h4>
                    <p className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                      {t.role} @ {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth fade-in/out */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
