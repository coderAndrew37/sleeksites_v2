import Image from "next/image";
import { BlogPost } from "../types/blog";

export function BlogHeader({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            {post.category}
          </span>
          <span className="text-slate-400 text-sm font-light">
            {formattedDate}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-400 text-sm font-light">
            {post.readTime} min read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-12 max-w-5xl">
          {post.title}
        </h1>

        {/* Author & Excerpt Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-4 flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src={
                  typeof post.author.image === "string"
                    ? post.author.image
                    : "/placeholder.jpg"
                }
                alt={post.author.name}
                fill
                className="object-cover grayscale"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                {post.author.name}
              </p>
              <p className="text-xs text-slate-500 font-light">
                {post.author.role}
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
          <Image
            src={
              typeof post.mainImage === "string"
                ? post.mainImage
                : "/placeholder.jpg"
            }
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </header>
  );
}
