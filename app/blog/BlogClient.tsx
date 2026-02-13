"use client";

import { useMemo, useState } from "react";
import Layout from "../components/layout/Layout";
import { BlogCard } from "../components/blog/BlogCard";
import Button from "../components/ui/Button";
import { BlogPost, Category } from "../components/types/blog";

interface BlogPageProps {
  posts: BlogPost[];
  categories: Category[];
}

export default function BlogPageClient({ posts, categories }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // -----------------------------------------------------
  // 🔥 Normalize slugs → UI-friendly `slugString`
  // -----------------------------------------------------
  const normalizedCategories = useMemo(
    () =>
      categories.map((c) => ({
        ...c,
        slugString: c.slug.current,
      })),
    [categories]
  );

  const normalizedPosts = useMemo(
    () =>
      posts.map((p) => ({
        ...p,
        slugString: p.slug.current,
        categories:
          p.categories?.map((c) => ({
            ...c,
            slugString: c.slug.current,
          })) || [],
      })),
    [posts]
  );

  // -----------------------------------------------------
  // 🔥 Filtering (FAST + clean)
  // -----------------------------------------------------
  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return normalizedPosts
      .filter((post) => {
        // Category filter
        const matchesCategory =
          selectedCategory === "all" ||
          post.categories.some((c) => c.slugString === selectedCategory);

        if (!matchesCategory) return false;

        // Search filter
        if (!query) return true;

        const haystack = [
          post.title,
          post.excerpt,
          ...post.categories.map((c) => c.title),
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(query);
      })
      .slice(0, visiblePosts);
  }, [normalizedPosts, selectedCategory, searchTerm, visiblePosts]);

  const loadMore = () => setVisiblePosts((v) => v + 6);

  // -----------------------------------------------------
  // 🔥 Category post counts
  // -----------------------------------------------------
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    normalizedCategories.forEach((cat) => {
      counts[cat.slugString] = normalizedPosts.filter((post) =>
        post.categories.some((c) => c.slugString === cat.slugString)
      ).length;
    });

    return counts;
  }, [normalizedPosts, normalizedCategories]);

  return (
    <Layout
      title="Blog - SleekSites Kenya | Web Design & Digital Marketing Insights"
      description="Stay updated with the latest web design trends, SEO strategies, and digital marketing insights."
    >
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-400">Blog</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert insights on web design, SEO & digital marketing.
          </p>

          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-900 focus:ring-4 focus:ring-orange-500/30 outline-none"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR */}
          <aside className="lg:col-span-1 sticky top-8">
            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-bold mb-4">Categories</h3>

              {/* ALL ARTICLES */}
              <button
                onClick={() => setSelectedCategory("all")}
                className={`w-full px-3 py-2 rounded-lg flex justify-between ${
                  selectedCategory === "all"
                    ? "bg-blue-700 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span>All Articles</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    selectedCategory === "all"
                      ? "bg-white/20 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {normalizedPosts.length}
                </span>
              </button>

              {/* CATEGORIES LIST */}
              {normalizedCategories.map((cat) => (
                <button
                  key={cat.slugString}
                  onClick={() => setSelectedCategory(cat.slugString)}
                  className={`w-full mt-2 px-3 py-2 rounded-lg flex justify-between ${
                    selectedCategory === cat.slugString
                      ? "bg-blue-700 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span>{cat.title}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      selectedCategory === cat.slugString
                        ? "bg-white/20 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {categoryCounts[cat.slugString] || 0}
                  </span>
                </button>
              ))}
            </div>

            {/* TAGS */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Web Design", "SEO", "E-Commerce", "Marketing"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="bg-white border border-gray-300 px-3 py-1 rounded-full text-sm hover:border-blue-700 hover:text-blue-700"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* POSTS GRID */}
          <div className="lg:col-span-3">
            {filteredPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post._id} post={post} />
                  ))}
                </div>

                {visiblePosts < normalizedPosts.length && (
                  <div className="text-center mt-12">
                    <Button variant="outline" size="lg" onClick={loadMore}>
                      Load More
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try changing your search or filters
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchTerm("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Put These Insights into Action?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's grow your business online—together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="primary"
            size="xl"
            onClick={() => (location.href = "/contact")}
          >
            Start Your Project
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={() => (location.href = "/services")}
          >
            View Services
          </Button>
        </div>
      </section>
    </Layout>
  );
}
