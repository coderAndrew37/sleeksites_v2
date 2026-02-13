"use client";

import { AuthorBio } from "@/app/components/blog/AuthorBio";
import { portableTextComponents } from "@/app/components/blog/PortableTextComponents";
import { QuizComponent } from "@/app/components/blog/QuizComponent";
import { RelatedPosts } from "@/app/components/blog/RelatedPosts";
import { TableOfContents } from "@/app/components/blog/TableOfContents";
import Layout from "@/app/components/layout/Layout";
import { BlogPost, Quiz } from "@/app/components/types/blog";
import Button from "@/app/components/ui/Button";
import { safeImageUrl } from "@/app/components/utils/safeImageHelper";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BlogPostPageWrapper({
  slug,
  post,
  relatedPosts,
}: {
  slug: string;
  post: BlogPost;
  relatedPosts: BlogPost[];
}) {
  return <BlogPostPage slug={slug} post={post} relatedPosts={relatedPosts} />;
}

function BlogPostPage({
  slug,
  post,
  relatedPosts,
}: {
  slug: string;
  post: BlogPost;
  relatedPosts: BlogPost[];
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Extract quiz + body
  const quiz = post.body?.find((b) => b._type === "quiz") as Quiz | undefined;
  const bodyWithoutQuiz = post.body?.filter((b) => b._type !== "quiz");

  // Extract TOC headings
  const headings =
    bodyWithoutQuiz
      ?.filter(
        (b: any) => b._type === "block" && ["h2", "h3"].includes(b.style)
      )
      .map((b: any) => ({
        id: b._key,
        text: b.children?.[0]?.text,
        level: b.style,
      })) ?? [];

  // Track active heading
  const [activeHeading, setActiveHeading] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHeading(entry.target.id);
        }),
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post]);

  const imgUrl = safeImageUrl(post.mainImage, 400, 200);

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setShowQuiz(false);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Layout title={post.title} description={post.excerpt}>
      <article className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-blue-200 mb-8">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span>›</span>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
                <span>›</span>
                <span className="text-white">{post.title}</span>
              </nav>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories?.map((category) => (
                  <Link
                    key={category.slug.current}
                    href={`/blog/category/${category.slug.current}`}
                    className="bg-white/20 px-4 py-2 rounded-full text-sm hover:bg-white/30"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-blue-100 mb-8">{post.excerpt}</p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-blue-200">
                <div className="flex items-center">
                  {post.author.image ? (
                    <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
                      {imgUrl && (
                        <Image
                          src={imgUrl}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-white">
                      {post.author.name}
                    </div>
                    <div>{post.author.role}</div>
                  </div>
                </div>

                <div>{publishedDate}</div>
                <div>{post.readTime} min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* TOC */}
              {headings.length > 0 && (
                <aside className="lg:col-span-1 sticky top-8">
                  <TableOfContents
                    headings={headings}
                    activeHeading={activeHeading}
                  />
                </aside>
              )}

              {/* ARTICLE BODY */}
              <div
                ref={contentRef}
                className={`${
                  headings.length > 0 ? "lg:col-span-3" : "lg:col-span-4"
                } max-w-3xl mx-auto`}
              >
                {/* Image */}
                {post.mainImage && (
                  <div className="mb-12 rounded-2xl overflow-hidden">
                    <div className="relative w-full h-96">
                      {safeImageUrl(post.mainImage, 1200, 600) ? (
                        <Image
                          src={safeImageUrl(post.mainImage, 1200, 600)!}
                          alt={post.mainImage?.alt || post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>

                    {post.mainImage.caption && (
                      <p className="text-center text-gray-600 mt-3 text-sm">
                        {post.mainImage.caption}
                      </p>
                    )}
                  </div>
                )}

                {/* Body */}
                <div className="prose prose-lg max-w-none">
                  <PortableText
                    value={bodyWithoutQuiz}
                    components={portableTextComponents}
                  />
                </div>

                {/* Quiz */}
                {quiz && (
                  <div className="my-12">
                    {!showQuiz && !quizCompleted && (
                      <div className="bg-blue-50 p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">
                          Test Your Knowledge
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Take this quick quiz to reinforce your learning.
                        </p>
                        <Button onClick={() => setShowQuiz(true)}>
                          Start Quiz
                        </Button>
                      </div>
                    )}

                    {showQuiz && (
                      <QuizComponent
                        quiz={quiz}
                        onComplete={handleQuizComplete}
                      />
                    )}

                    {quizCompleted && (
                      <div className="bg-green-50 p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-2">
                          Quiz Completed!
                        </h3>
                        <p className="text-gray-600">
                          Great job reinforcing your understanding.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Author */}
                <AuthorBio author={post.author} />

                {/* Share */}
                <div className="bg-gray-50 p-8 rounded-2xl mt-12 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Enjoyed this article?
                  </h3>
                  <p className="text-gray-600 mb-6">Share it with others</p>

                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      {
                        name: "Twitter",
                        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          post.title
                        )}&url=${encodeURIComponent(shareUrl)}`,
                      },
                      {
                        name: "LinkedIn",
                        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          shareUrl
                        )}`,
                      },
                      {
                        name: "Facebook",
                        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          shareUrl
                        )}`,
                      },
                    ].map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
                      >
                        Share on {platform.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related posts */}
        <RelatedPosts posts={relatedPosts} />
      </article>
    </Layout>
  );
}
