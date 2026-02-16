"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  _id: string;
  title: string;
  category: string;
  image: string;
};

type Props = {
  projects: Project[];
};

export default function Portfolio({ projects }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");
      const totalPanels = panels.length;

      const tween = gsap.to(containerRef.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => "+=" + window.innerWidth * totalPanels,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: triggerRef },
  );

  return (
    <section className="overflow-hidden bg-black text-white">
      <div ref={triggerRef}>
        <div ref={containerRef} className="flex h-screen w-full">
          {/* Intro Slide */}
          <div className="panel h-screen w-screen shrink-0 flex items-center px-16">
            <div>
              <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.9]">
                Selected <br />
                <span className="text-white/40 italic font-light">Works</span>
              </h2>
              <p className="mt-8 text-lg text-white/60 max-w-md">
                A curated collection of digital products crafted with precision,
                performance and clarity.
              </p>
            </div>
          </div>

          {/* Project Slides */}
          {projects.map((project) => (
            <div
              key={project._id}
              className="panel h-screen w-screen shrink-0 flex items-center justify-center px-16"
            >
              <div className="w-full max-w-6xl h-[70vh] grid lg:grid-cols-12 gap-12 items-end">
                {/* Image */}
                <div className="lg:col-span-8 relative h-full rounded-3xl overflow-hidden group border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Info */}
                <div className="lg:col-span-4 pb-12">
                  <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
                    {project.category}
                  </p>
                  <h3 className="text-4xl font-bold tracking-tight mb-6">
                    {project.title}
                  </h3>
                  <button className="text-sm uppercase tracking-widest border-b border-white/30 pb-2 hover:border-white transition-all">
                    View Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Slide */}
          <div className="panel h-screen w-screen shrink-0 flex items-center justify-center">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
              Let’s Build Something Great.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
