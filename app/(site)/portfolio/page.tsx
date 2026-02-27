import { getProjectCategories, getProjects } from "@/lib/api";
import { BarChart, LayoutGrid, Target, Zap } from "lucide-react";
import PortfolioClient from "../services/PortfolioClient";

export const metadata = {
  title: "Portfolio - SleekSites Kenya | Proven Digital Success",
  description:
    "Explore our high-performance web projects and marketing case studies for Kenyan businesses.",
};

export default async function PortfolioPage() {
  // Fetch data directly on the server
  const [projects, categories] = await Promise.all([
    getProjects(),
    getProjectCategories(),
  ]);

  return (
    <main>
      {/* Hero Section stays on Server for SEO */}
      <section className="relative pt-40 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Work that <span className="text-blue-500 italic">moves</span> the
            needle.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We don't just build websites; we build business assets. Explore our
            latest deployments across Kenya.
          </p>
        </div>
      </section>

      {/* Pass the server data to the Client Component for interactivity */}
      <PortfolioClient initialProjects={projects} categories={categories} />

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
    </main>
  );
}
