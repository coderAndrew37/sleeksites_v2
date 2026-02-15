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
      return (
        <Link href={`/blog/${post.slug.current}`} className="block my-12 group">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center transition-all hover:bg-white hover:shadow-xl hover:border-blue-200">
            <div className="w-full md:w-1/3 aspect-video relative rounded-2xl overflow-hidden">
              <Image
                src={
                  typeof post.mainImage === "string"
                    ? post.mainImage
                    : "/placeholder.jpg"
                }
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                {value.heading}
              </span>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {post.title}
              </h4>
            </div>
          </div>
        </Link>
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
