"use client";
import { JSX, useState } from "react";
import { PortfolioItem } from "../components/types/Index";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Zap,
  Target,
  BarChart,
  LayoutGrid,
} from "lucide-react";

// Updated Interface to include more metadata for the redesign
interface ExtendedPortfolioItem extends PortfolioItem {
  tech?: string[];
  timeline?: string;
}

export default function Portfolio(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] =
    useState<ExtendedPortfolioItem | null>(null);

  const portfolioItems: ExtendedPortfolioItem[] = [
    {
      id: "1",
      title: "Nairobi Spares",
      description:
        "A high-performance e-commerce engine designed for the Kenyan automotive market.",
      image: "/portfolio/auto-parts.jpg",
      category: "ecommerce",
      tech: ["Next.js", "M-Pesa API", "Tailwind"],
      results: [
        { metric: "Monthly Revenue", value: "KES 450K" },
        { metric: "Mobile Orders", value: "72%" },
      ],
    },
    // ... (Keep other items but you can simplify titles and descriptions for the UI)
    {
      id: "2",
      title: "QuickFix Plumbers",
      description:
        "Hyper-local SEO and lead generation for service professionals.",
      image: "/portfolio/plumbing.jpg",
      category: "service",
      tech: ["Google Ads", "React", "Node.js"],
      results: [
        { metric: "Monthly Leads", value: "45" },
        { metric: "CPL", value: "KES 120" },
      ],
    },
    {
      id: "4",
      title: "EstateHub Kenya",
      description:
        "A premium real estate portal with virtual tours and agent management.",
      image: "/portfolio/real-estate.jpg",
      category: "realestate",
      tech: ["PostgreSQL", "Next.js", "Mapbox"],
      results: [
        { metric: "Views/mo", value: "12K" },
        { metric: "Conversion", value: "5.8%" },
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Work" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "service", name: "Services" },
    { id: "realestate", name: "Real Estate" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <Layout
      title="Portfolio - SleekSites Kenya | Proven Digital Success"
      description="Explore our high-performance web projects and marketing case studies for Kenyan businesses."
    >
      {/* Hero: Dark Mode Glassmorphism */}
      <section className="relative pt-40 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Work that <span className="text-blue-500 italic">moves</span> the
              needle.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We don't just build websites; we build business assets. Explore
              our latest deployments across Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-white sticky top-20 z-30 border-b border-slate-100">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid: Staggered Entrance */}
      <section className="py-24 bg-slate-50 min-h-[600px]">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(item)}
                >
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-2xl shadow-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                    {/* Placeholder for project image */}
                    <div className="w-full h-full bg-slate-200 group-hover:scale-110 transition-transform duration-700" />

                    <div className="absolute bottom-6 left-6 z-30">
                      <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <div className="flex gap-4">
                      {item.results.slice(0, 2).map((res, i) => (
                        <div key={i}>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">
                            {res.metric}
                          </p>
                          <p className="text-sm font-black text-slate-900">
                            {res.value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center z-[100] p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              {/* Left Side: Visuals */}
              <div className="lg:w-1/2 bg-slate-100 p-8 flex flex-col justify-center">
                <div className="aspect-video bg-white rounded-3xl shadow-inner mb-6 flex items-center justify-center text-slate-300">
                  [PROJECT PREVIEW IMAGE]
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.results.map((r, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-3xl shadow-sm border border-slate-50"
                    >
                      <p className="text-blue-600 font-black text-2xl mb-1">
                        {r.value}
                      </p>
                      <p className="text-slate-400 text-xs uppercase font-bold">
                        {r.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="lg:w-1/2 p-12 overflow-y-auto">
                <button
                  aria-label="unselect project"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>

                <span className="text-blue-600 font-black text-xs uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-full">
                  {selectedProject.category} Case Study
                </span>
                <h2 className="text-4xl font-black text-slate-900 mt-6 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                      <LayoutGrid size={18} className="text-blue-600" /> Stack &
                      Tech
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech?.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="primary"
                      fullWidth
                      size="lg"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Start a Project Like This
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industry Stats */}
      <section className="py-24 bg-blue-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Revenue Generated", val: "KES 40M+", icon: <Zap /> },
              {
                label: "Avg. Conversion Boost",
                val: "+240%",
                icon: <BarChart />,
              },
              { label: "Uptime Guaranteed", val: "99.9%", icon: <Target /> },
              {
                label: "Active Deployments",
                val: "120+",
                icon: <LayoutGrid />,
              },
            ].map((s, i) => (
              <div key={i} className="text-center text-white">
                <div className="mb-4 flex justify-center opacity-50">
                  {s.icon}
                </div>
                <p className="text-4xl font-black mb-2">{s.val}</p>
                <p className="text-blue-200 text-sm font-bold uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
