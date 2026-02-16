"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface BentoCardProps {
  title: string;
  subtitle?: string;
  excerpt?: string;
  link: string;
  image: string;
  category?: string;
  technologies?: string[]; // Added tech stack support
  icon?: ReactNode;
  className?: string; // For grid spans like "md:col-span-8" or "md:col-span-4"
  variant?: "dark" | "light" | "gradient"; // Matches Sanity schema
}

export default function BentoCard({
  title,
  subtitle,
  excerpt,
  link,
  image,
  category,
  technologies,
  icon,
  className = "md:col-span-1",
  variant = "dark",
}: BentoCardProps) {
  return (
    <Link
      href={link}
      className={`${className} group relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col justify-end transition-all duration-500 bg-slate-900`}
    >
      {/* Background Image & Overlays */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={image || "/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:rotate-1 opacity-80"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Dynamic Overlays based on Variant */}
        <div
          className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
            variant === "light"
              ? "from-white via-white/40 to-transparent"
              : variant === "gradient"
                ? "from-blue-900/90 via-slate-900/40 to-transparent"
                : "from-slate-950 via-slate-900/40 to-transparent"
          }`}
        />

        {/* Hover Highlight Color */}
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          {/* Top Left: Category or Icon */}
          <div className="flex flex-col gap-2">
            {category && (
              <span className="w-fit px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white">
                {category}
              </span>
            )}
            {!category && icon && (
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl text-white">
                {icon}
              </div>
            )}
          </div>

          {/* Top Right: Action Icon */}
          <div className="w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center opacity-0 -translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 shadow-xl">
            <ArrowUpRight size={22} />
          </div>
        </div>

        {/* Bottom Text Area */}
        <motion.div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          {subtitle && (
            <p className="text-blue-400 text-xs font-bold uppercase tracking-tighter mb-2">
              {subtitle}
            </p>
          )}

          <h3
            className={`font-black leading-[1.1] tracking-tighter transition-colors duration-300 ${
              variant === "light" ? "text-slate-900" : "text-white"
            } ${
              className.includes("md:col-span-8") ||
              className.includes("md:col-span-2")
                ? "text-4xl md:text-6xl"
                : "text-2xl md:text-3xl"
            }`}
          >
            {title}
          </h3>

          {/* Tech Stack Tags (Visible on Hover/Large screens) */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] uppercase font-black tracking-widest text-white/40 border border-white/10 px-2 py-0.5 rounded-md bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {excerpt && (
            <p
              className={`mt-4 text-sm md:text-base line-clamp-2 font-light opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ${
                variant === "light" ? "text-slate-600" : "text-slate-300"
              }`}
            >
              {excerpt}
            </p>
          )}
        </motion.div>
      </div>
    </Link>
  );
}
