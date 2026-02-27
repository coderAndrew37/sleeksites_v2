import { notFound } from "next/navigation";
import { getPostsByTag } from "@/lib/api";
import { BlogCard } from "@/app/components/blog/BlogCard"; // Assume a reusable card component
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPostsByTag(slug);
  if (!data) return {};

  return {
    title: `Articles about ${data.tag.title} | SleekSites`,
    description:
      data.tag.description ||
      `Explore our latest insights on ${data.tag.title}`,
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const data = await getPostsByTag(slug);

  if (!data) notFound();

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-blue-600"></span>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
              Topic Archive
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6">
            {data.tag.title}
          </h1>
          {data.tag.description && (
            <p className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
              {data.tag.description}
            </p>
          )}
          <div className="mt-8 text-sm text-slate-400 font-medium">
            {data.posts.length}{" "}
            {data.posts.length === 1 ? "Article" : "Articles"} published
          </div>
        </header>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {data.posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {data.posts.length === 0 && (
          <div className="py-24 text-center border-2 border-dashed border-slate-100 rounded-[3rem]">
            <p className="text-slate-400">
              No articles found in this topic yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
