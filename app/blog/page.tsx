import { getPosts } from "@/lib/api";
import { BlogSection } from "@/app/components/ui/BlogSection"; // Reusing your Bento grid for the top
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Journal | SleekSites Tech Insights",
  description:
    "Digital strategy, SEO tips, and web development insights for Kenyan businesses.",
};

export default async function BlogListPage() {
  const allPosts = await getPosts(12); // Fetch more for the full list

  if (!allPosts || allPosts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">
          Our journal is currently being updated. Check back soon!
        </p>
      </div>
    );
  }

  // We use the first 3 for the featured Bento section
  const featuredPosts = allPosts.slice(0, 3);
  // The rest go into a standard grid
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

      {/* Reusing your high-end Bento Section for the top 3 posts */}
      <BlogSection posts={featuredPosts} />

      {/* Remaining Posts Grid */}
      {remainingPosts.length > 0 && (
        <section className="px-6 py-24 max-w-7xl mx-auto border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {remainingPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
                  <Image
                    // Force TypeScript to see this as a string or null
                    src={
                      typeof post.mainImage === "string"
                        ? post.mainImage
                        : "/placeholder.jpg"
                    }
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900">
                      {post.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-500 line-clamp-2 font-light mb-4">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative">
                    {post.author?.image && (
                      <Image
                        // Use typeof check to satisfy the compiler
                        src={
                          typeof post.author.image === "string"
                            ? post.author.image
                            : "/placeholder.jpg"
                        }
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {post.author?.name} • {post.readTime} min read
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter / CTA */}
      <section className="bg-slate-900 py-24 px-6 rounded-[3rem] mx-4 mb-10 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Stay ahead of the <br />
            <span className="italic font-light text-slate-400">
              digital curve.
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Join 500+ Kenyan entrepreneurs receiving weekly growth insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 flex-grow"
            />
            <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
