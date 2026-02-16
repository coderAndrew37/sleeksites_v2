import { getProjectBySlug, getRelatedProjects } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CustomPortableText from "@/app/components/blog/PortableTextComponents";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  // Fetch projects in the same category, excluding the current one
  const related = await getRelatedProjects(project.category, project._id);
  const themeColor = project.theme?.accentColor || "#2563eb";

  return (
    <article className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <header className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden bg-slate-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
            <Link
              href="/work"
              className="group flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors w-fit font-bold uppercase tracking-widest text-xs"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Archive
            </Link>
            <div className="flex flex-col gap-4">
              <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter max-w-4xl">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* --- Success Metrics (Results) --- */}
      {project.results && project.results.length > 0 && (
        <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-200">
            {project.results.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-10 flex flex-col items-center text-center"
              >
                <span
                  className="text-4xl md:text-5xl font-black tracking-tighter mb-2"
                  style={{ color: themeColor }}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- Case Study Content --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-slate-100">
        {/* Sidebar: Metadata */}
        <aside className="lg:col-span-4 space-y-12 order-2 lg:order-1">
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
            <h3 className="text-xs font-black uppercase text-slate-900 tracking-[0.2em] mb-6">
              Execution Details
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] uppercase text-slate-400 font-bold mb-2">
                  Primary Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-[11px] font-bold rounded-lg shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase text-slate-400 font-bold mb-2">
                  The Mission
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {project.excerpt}
                </p>
              </div>
            </div>
          </div>

          <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-colors duration-500 group">
            Visit Live Project{" "}
            <ExternalLink
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
          </button>
        </aside>

        {/* Main Content: CustomPortableText */}
        <main className="lg:col-span-8 order-1 lg:order-2">
          <div className="prose-custom">
            <CustomPortableText value={project.body || []} />
          </div>
        </main>
      </div>

      {/* --- Related Projects Section --- */}
      {related && related.length > 0 && (
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px]">
                  Up Next
                </span>
                <h2 className="text-4xl font-black tracking-tighter text-slate-900 mt-2">
                  More Case Studies
                </h2>
              </div>
              <Link
                href="/work"
                className="text-sm font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                View Archive
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((item) => (
                <Link
                  key={item._id}
                  href={`/work/${item.slug}`}
                  className="group block bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-10 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-blue-600 tracking-[0.2em]">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-1">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
