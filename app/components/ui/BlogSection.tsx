"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "../types/blog";
import BentoCard from "./BentoCard"; // Using the shared component

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  if (!posts || posts.length === 0) return null;

  // Helper to ensure we have a valid image string
  const getImg = (post: BlogPost) =>
    typeof post.mainImage === "string" ? post.mainImage : "/placeholder.jpg";

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
            >
              Insights & Strategy
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 text-slate-900">
              Latest from <br />
              <span className="text-slate-400 font-light italic">
                our journal.
              </span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="group flex items-center gap-2 font-bold text-lg hover:text-blue-600 transition-colors"
          >
            View all articles
            <span className="p-2 rounded-full border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
              <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>

        {/* --- Unified Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[650px]">
          {/* Main Featured Post (Occupies 7 Columns) */}
          {posts[0] && (
            <BentoCard
              title={posts[0].title}
              excerpt={posts[0].excerpt}
              category={posts[0].category}
              image={getImg(posts[0])}
              link={`/blog/${posts[0].slug}`}
              className="md:col-span-7" // Uses the internal h-full of BentoCard
            />
          )}

          {/* Side Column Stack (Occupies 5 Columns) */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            {posts.slice(1, 3).map((post) => (
              <BentoCard
                key={post._id}
                title={post.title}
                subtitle={`${post.readTime} min read`}
                category={post.category}
                image={getImg(post)}
                link={`/blog/${post.slug}`}
                className="md:col-span-1" // Relative to the 5-column parent
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
