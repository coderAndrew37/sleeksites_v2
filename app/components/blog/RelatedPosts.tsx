import { urlForImage } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../types/blog";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Related Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continue reading with these related posts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            >
              {/* Post Image */}
              <Link
                href={`/blog/${post.slug}`}
                className="block relative h-48 overflow-hidden"
              >
                {post.mainImage ? (
                  <Image
                    src={urlForImage(post.mainImage)
                      .width(400)
                      .height(200)
                      .url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={urlForImage(post.mainImage)
                      .width(20)
                      .height(20)
                      .blur(10)
                      .url()}
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-2xl font-bold">SS</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                {/* Category Badge */}
                {post.categories.length > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {post.categories[0].title}
                    </span>
                  </div>
                )}
              </Link>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} min read</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 font-medium">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
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
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
          >
            View All Articles
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
