import { getProjects } from "@/lib/api";
import BentoCard from "../../components/ui/BentoCard";

export const metadata = {
  title: "Portfolio | Our Work",
  description:
    "Explore our archive of high-performance digital products and luxury e-commerce platforms.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900">
            Proven <br />
            <span className="text-slate-400 font-light italic">expertise.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-600 leading-relaxed font-light">
            From luxury interior showrooms like{" "}
            <span className="font-bold text-slate-900">Interiors by Tifi</span>{" "}
            to complex fintech systems, we build for performance and scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <BentoCard
              key={project._id}
              title={project.title}
              category={project.category}
              image={project.image}
              link={`/work/${project.slug}`}
              technologies={project.technologies}
              // Alternating layout for visual interest
              className={index % 3 === 0 ? "md:col-span-8" : "md:col-span-4"}
              variant={project.theme?.backgroundStyle || "dark"}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
