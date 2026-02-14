import { BlogPost } from "@/app/components/types/blog";
import "server-only";
import { client } from "./sanity/client";
import { groq } from "next-sanity";

export const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "assetUrl": asset->url
    },
    _type == "relatedPost" => {
      ...,
      article->{
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url
      }
    },
    _type == "quiz" => {
      ...
    }
  },
  "mainImage": mainImage.asset->url,
  "publishedAt": _createdAt,
  "author": author->{
    name,
    role,
    "image": image.asset->url,
    bio
  },
  "category": categories[0]->title,
  readTime,
  "featured": isFeatured,
  seo {
    metaTitle,
    metaDescription,
    keywords,
    "ogImage": ogImage.asset->url
  }
`;

// Optimized getPosts using fragments
export async function getPosts(limit: number = 3): Promise<BlogPost[]> {
  const query = groq`*[_type == "post"] | order(publishedAt desc)[0...${limit}] {
    ${postFields}
  }`;

  try {
    return await client.fetch<BlogPost[]>(query);
  } catch (error) {
    console.error("Critical Fetch Error:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{${postFields}}`,
    { slug },
  );
}

export async function getRelatedPosts(
  category: string,
  currentId: string,
): Promise<BlogPost[]> {
  return await client.fetch(
    groq`*[_type == "post" && categories[0]->title == $category && _id != $currentId][0...3]{${postFields}}`,
    { category, currentId },
  );
}
