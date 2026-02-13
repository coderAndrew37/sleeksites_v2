"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { BlogPost } from "../types/blog";

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  // If the server returns no posts, we hide the section entirely
  if (!posts || posts.length === 0) return null;

  /**
   * Helper to resolve the image source.
   * Since we transform images to strings in api.ts, this is purely defensive.
   */
  const getImgSrc = (image: string | any): string => {
    if (typeof image === "string") return image;

    // Fallback for missing images or unexpected data structures
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
  };

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

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[650px]">
          {/* Main Featured Post (7 Columns) */}
          {posts[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 relative group rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-slate-900 flex flex-col justify-end min-h-[450px]"
            >
              <Image
                src={getImgSrc(posts[0].mainImage)}
                alt={posts[0].title}
                fill
                className="absolute inset-0 object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
                priority // Priority loading for the largest LCP element
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

              <div className="relative z-10 p-8 md:p-14">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">
                  {posts[0].category}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  {posts[0].title}
                </h3>
                <p className="text-slate-300 text-lg line-clamp-2 mb-8 max-w-lg font-light">
                  {posts[0].excerpt}
                </p>
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="group/btn inline-flex items-center gap-3 text-white font-bold text-lg"
                >
                  Read Full Story
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-900 transition-all duration-300">
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </div>
            </motion.div>
          )}

          {/* Side Column (5 Columns) */}
          <div className="md:col-span-5 grid grid-rows-1 md:grid-rows-2 gap-6">
            {posts.slice(1, 3).map((post, i) => (
              <motion.div
                key={post._id || i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-[10px] font-medium uppercase">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mt-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h4>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 font-bold text-sm text-slate-900 mt-8 group-hover:gap-4 transition-all"
                >
                  Explore Insights{" "}
                  <ArrowRight size={16} className="text-blue-600" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
