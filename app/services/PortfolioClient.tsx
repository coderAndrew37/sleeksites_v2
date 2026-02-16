"use client";

import { Project } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ExternalLink,
  LayoutGrid,
  ArrowUpRight,
  SearchX,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Button from "../components/ui/Button";

interface Category {
  title: string;
  slug: string;
}

export default function PortfolioClient({
  initialProjects,
  categories,
}: {
  initialProjects: Project[];
  categories: Category[];
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Build dynamic filter options
  const filterOptions = [{ title: "All Work", slug: "all" }, ...categories];

  const filteredItems =
    activeCategory === "all"
      ? initialProjects
      : initialProjects.filter(
          (item) =>
            item.category?.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <>
      {/* --- Filter Bar --- */}
      <section className="py-12 bg-white sticky top-20 z-30 border-b border-slate-100">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1 overflow-x-auto no-scrollbar max-w-full">
            {filterOptions.map((cat) => (
              <button
                key={cat.slug}
                onClick={() =>
                  setActiveCategory(cat.slug === "all" ? "all" : cat.title)
                }
                className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  (activeCategory === "all" && cat.slug === "all") ||
                  activeCategory === cat.title
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Projects Grid --- */}
      <section className="py-24 bg-slate-50 min-h-[600px]">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <motion.div
                    layout
                    key={item._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(item)}
                  >
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl shadow-slate-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent z-10" />

                      <div className="absolute bottom-8 left-8 z-30">
                        <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
                          {item.category}
                        </span>
                        <h3 className="text-2xl font-black text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-4">
                      <div className="flex gap-6">
                        {item.results?.slice(0, 2).map((res, i) => (
                          <div key={i}>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">
                              {res.label}
                            </p>
                            <p className="text-sm font-black text-slate-900">
                              {res.value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                /* --- Empty State --- */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mb-6 text-slate-400">
                    <SearchX size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    No projects found
                  </h3>
                  <p className="text-slate-500 max-w-sm">
                    We haven't uploaded projects for{" "}
                    <strong>{activeCategory}</strong> yet. Check back soon or
                    view our other work!
                  </p>
                  <button
                    onClick={() => setActiveCategory("all")}
                    className="mt-6 text-blue-600 font-bold hover:underline"
                  >
                    View all projects
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- Project Detail Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              className="bg-white w-full max-w-6xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:grid lg:grid-cols-12 max-h-[90vh] relative"
            >
              <button
                aria-label="deselect a filter"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/80 backdrop-blur-md border border-slate-100 hover:bg-red-50 hover:text-red-600 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              {/* Modal Left: Visuals & Stats */}
              <div className="lg:col-span-5 bg-slate-50 p-8 lg:p-12 overflow-y-auto border-r border-slate-100">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg mb-8">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {selectedProject.results?.map((res, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                    >
                      <p className="text-blue-600 font-black text-3xl tracking-tighter">
                        {res.value}
                      </p>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Right: Content */}
              <div className="lg:col-span-7 p-8 lg:p-16 overflow-y-auto">
                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  {selectedProject.category} Case Study
                </span>

                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                  {selectedProject.title}
                </h2>

                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                  {selectedProject.excerpt}
                </p>

                <div className="space-y-10">
                  <div>
                    <h4 className="flex items-center gap-2 font-black text-slate-900 uppercase text-xs tracking-widest mb-5">
                      <LayoutGrid size={16} className="text-blue-600" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="primary"
                      className="flex-1 !rounded-2xl !py-4"
                      onClick={() =>
                        (window.location.href = `/work/${selectedProject.slug}`)
                      }
                    >
                      View Full Case Study
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 !rounded-2xl !py-4 flex items-center justify-center gap-2"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Inquire Similar Project
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
