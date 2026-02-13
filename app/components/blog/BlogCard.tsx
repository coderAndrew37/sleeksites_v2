import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/sanity";
import { BlogPost } from "../types/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const hasCategories =
    Array.isArray(post.categories) && post.categories.length > 0; // why: avoid null.length crash

  return (
    <article
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug?.current}`}
        className="block relative h-48 overflow-hidden"
      >
        {post.mainImage ? (
          <Image
            src={urlForImage(post.mainImage).width(600).height(300).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            placeholder="blur"
            blurDataURL={urlForImage(post.mainImage)
              .width(20)
              .height(20)
              .blur(10)
              .url()}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <div className="text-white text-2xl font-bold">SS</div>
          </div>
        )}

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

        {/* Category Badge */}
        {hasCategories && (
          <div className="absolute top-4 left-4">
            <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold capitalize">
              {post.categories && post.categories[0]?.title}
            </span>
          </div>
        )}
      </Link>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{publishedDate}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>

        <h2
          className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          <Link href={`/blog/${post.slug?.current}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span className="text-sm text-gray-700 font-medium">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug?.current}`}
            className="text-blue-700 font-semibold text-sm hover:text-blue-800 transition-colors flex items-center"
          >
            Read More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
