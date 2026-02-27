import { getPosts } from "@/lib/api";
import { BlogSection } from "@/app/components/ui/BlogSection";
import { BlogCard } from "@/app/components/blog/BlogCard";

export const metadata = {
  title: "Journal | SleekSites Tech Insights",
  description:
    "Digital strategy, SEO tips, and web development insights for Kenyan businesses.",
};

export default async function BlogListPage() {
  const allPosts = await getPosts(12);

  if (!allPosts || allPosts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 font-light tracking-tight">
          Our journal is currently being updated. Check back soon!
        </p>
      </div>
    );
  }

  // First 3 posts go into the high-impact Bento/Featured section
  const featuredPosts = allPosts.slice(0, 3);
  // The rest are displayed in the clean, consistent grid
  const remainingPosts = allPosts.slice(3);

  return (
    <main className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-4">
          The <span className="text-slate-400 font-light italic">Journal.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl font-light leading-relaxed">
          Deep dives into digital growth, engineering excellence, and the future
          of the Kenyan tech landscape.
        </p>
      </section>

      {/* Featured Bento Section */}
      <BlogSection posts={featuredPosts} />

      {/* Remaining Posts Grid */}
      {remainingPosts.length > 0 && (
        <section className="px-6 py-24 max-w-7xl mx-auto border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {remainingPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Newsletter / CTA Section */}
      <section className="px-4 mb-10">
        <div className="bg-slate-900 py-24 px-6 rounded-[3rem] max-w-7xl mx-auto overflow-hidden relative">
          {/* Subtle decorative background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-20 -mt-20" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Stay ahead of the <br />
              <span className="italic font-light text-slate-400">
                digital curve.
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-light">
              Join 500+ Kenyan entrepreneurs receiving weekly growth insights.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 flex-grow transition-colors"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
