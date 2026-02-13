import "server-only";
import { client } from "./sanity/client";
import { urlForServer } from "./sanity/image";
import { BlogPost } from "@/app/components/types/blog";

// Internal interface for the raw GROQ result
interface RawPost extends Omit<BlogPost, "mainImage" | "author"> {
  mainImage: any; // Temporarily 'any' here is okay as it's private to this file's internal mapping
  author: {
    name: string;
    role: string;
    bio: string;
    image: any;
  };
}

export async function getPosts(limit: number = 3): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    mainImage,
    author-> {
      name,
      role,
      bio,
      image
    },
    publishedAt,
    readTime,
    "category": category->title, 
    "featured": isFeatured,
    seo
  }`;

  try {
    const rawData = await client.fetch<RawPost[]>(query);

    // Transform: Turn Sanity objects into ready-to-use strings/types for the client
    return rawData.map(
      (post): BlogPost => ({
        ...post,
        mainImage: post.mainImage ? urlForServer(post.mainImage) : null,
        author: {
          ...post.author,
          image: post.author.image ? urlForServer(post.author.image) : null,
        },
      }),
    );
  } catch (error) {
    console.error("Critical Fetch Error:", error);
    return [];
  }
}
