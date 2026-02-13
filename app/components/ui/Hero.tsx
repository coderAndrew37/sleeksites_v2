"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".hero-animate", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="relative overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        {/* Left-heavy dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="hero-animate text-5xl md:text-6xl font-bold leading-tight">
            High-Performance <br />
            <span className="text-blue-400">Digital Experiences</span>
          </h1>

          <p className="hero-animate mt-6 text-lg text-gray-200 max-w-xl">
            We design and build conversion-focused websites and digital
            platforms that help modern brands grow with confidence.
          </p>

          <div className="hero-animate mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-600/30">
              Get Started
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – Glass Card */}
        <div className="hero-animate flex justify-center lg:justify-end">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <div className="flex -space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white" />
              <div className="w-12 h-12 rounded-full bg-pink-500 border-2 border-white" />
              <div className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-white" />
              <div className="w-12 h-12 rounded-full bg-green-500 border-2 border-white" />
            </div>

            <h3 className="text-xl font-semibold">Clients Feedback</h3>

            <div className="flex items-center gap-4 mt-3">
              <span className="text-4xl font-bold">4.9</span>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>

            <p className="text-gray-300 text-sm mt-2">
              Overall Reviews from our satisfied clients.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Feature Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-20 pb-20 grid md:grid-cols-4 gap-6">
        {[
          {
            title: "All Services Under One Roof",
            desc: "Everything you need in one place.",
          },
          {
            title: "Fast & Reliable Processing",
            desc: "Quick turnaround time guaranteed.",
            highlight: true,
          },
          {
            title: "Dedicated Support",
            desc: "We assist you every step.",
          },
          {
            title: "Safe & Secure",
            desc: "Your information stays protected.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 text-center border ${
              item.highlight
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-200"
            }`}
          >
            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
