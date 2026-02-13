// app/blog/[slug]/page.tsx (fully optimized)

import BlogPostPageWrapper from "./ClientPage";
import { client, urlForImage } from "@/lib/sanity";
import { cache } from "react";

// Revalidate every 60 sec
export const revalidate = 60;

// ----------------------------------------
// Reusable caching layer
// ----------------------------------------
const sanityFetch = cache(async (query: string, params: any = {}) => {
  return client.fetch(query, params);
});

// ----------------------------------------
// Queries
// ----------------------------------------
const postQuery = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  mainImage,
  publishedAt,
  readTime,
  featured,
  "author": author->{
    name,
    role,
    bio,
    "image": image.asset->url
  },
  "categories": categories[]->{
    title,
    slug
  },
  seo
}
`;

const relatedQuery = `
*[
  _type == "post" &&
  slug.current != $slug &&
  count(categories[@._ref in ^.^.categories[]._ref]) > 0
][0...3]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readTime,
  "author": author->{name, role},
  "categories": categories[]->{ title, slug }
}
`;

// ----------------------------------------
// Static params
// ----------------------------------------
export async function generateStaticParams() {
  const posts = await sanityFetch(`*[_type == "post"]{ slug }`);
  return posts.map((p: any) => ({ slug: p.slug.current }));
}

// ----------------------------------------
// Metadata
// ----------------------------------------
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = await sanityFetch(postQuery, { slug });

  if (!post) return {};

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        post.mainImage
          ? urlForImage(post.mainImage).width(1200).height(630).url()
          : "/default-og.jpg",
      ],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

// ----------------------------------------
// Server page
// ----------------------------------------
export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  // Fetch on the server (ONE round)
  const post = await sanityFetch(postQuery, { slug });
  const related = await sanityFetch(relatedQuery, { slug });

  return <BlogPostPageWrapper post={post} relatedPosts={related} slug={slug} />;
}
