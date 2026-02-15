"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import Link from "next/link";
import {
  PortableTextBlock,
  RelatedPostCard,
  Quiz,
} from "@/app/components/types/blog";
import { QuizComponent } from "./QuizComponent";

// Helper to generate IDs for TOC
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-12 group">
        <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/5">
          <Image
            src={value.assetUrl || "/placeholder.jpg"}
            alt={value.alt || "SleekSites Insight"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Metadata Row */}
        {(value.caption || value.source) && (
          <figcaption className="mt-4 px-4 flex flex-col md:flex-row md:justify-between items-baseline gap-2">
            {value.caption && (
              <span className="text-sm text-slate-500 font-light italic">
                — {value.caption}
              </span>
            )}
            {value.source && (
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-bold group-hover:text-blue-400 transition-colors">
                Source: {value.source}
              </span>
            )}
          </figcaption>
        )}
      </figure>
    ),
    quiz: ({ value }) => (
      <div className="my-16">
        <QuizComponent
          quiz={value}
          onComplete={() => console.log("Quiz finished!")}
        />
      </div>
    ),
    code: ({ value }) => (
      <div className="my-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        <SyntaxHighlighter
          language={value.language || "typescript"}
          style={oneDark}
          customStyle={{ margin: 0, padding: "1.5rem", fontSize: "14px" }}
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),

    relatedPost: ({ value }: { value: RelatedPostCard }) => {
      const post = value.article;
      if (!post) return null;

      // Extract the slug string safely
      const slug =
        typeof post.slug === "string" ? post.slug : post.slug?.current;

      return (
        <div className="my-16 group relative">
          {/* Decorative Background Accent */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Link
            href={`/blog/${slug}`}
            className="relative block bg-slate-50 border border-slate-200 rounded-[2rem] p-4 md:p-6 transition-all duration-300 hover:bg-white hover:border-blue-200 hover:shadow-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image Preview */}
              <div className="w-full md:w-2/5 aspect-[16/10] relative rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={
                    typeof post.mainImage === "string"
                      ? post.mainImage
                      : "/placeholder.jpg"
                  }
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">
                    {value.heading || "Further Reading"}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h4>

                <div className="flex items-center text-blue-600 text-sm font-bold gap-2 pt-2 group-hover:translate-x-2 transition-transform">
                  Read Article
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => {
      const id = slugify(children?.toString() || "");
      return (
        <h2
          id={id}
          className="text-3xl md:text-4xl font-bold mt-16 mb-6 tracking-tight text-slate-900 scroll-mt-32"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = slugify(children?.toString() || "");
      return (
        <h3
          id={id}
          className="text-2xl font-bold mt-10 mb-4 tracking-tight text-slate-800 scroll-mt-32"
        >
          {children}
        </h3>
      );
    },
    normal: ({ children }) => (
      <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8 font-light">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-blue-600 pl-8 my-12 italic text-2xl text-slate-700 font-light leading-snug">
        {children}
      </blockquote>
    ),
  },
};

export default function CustomPortableText({
  value,
}: {
  value: (PortableTextBlock | RelatedPostCard | Quiz)[];
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <PortableText value={value} components={components} />
    </div>
  );
}
