import { client } from "@/lib/sanity";
import BlogPageClient from "./BlogClient";

export default async function BlogPage() {
  const postsQuery = `*[_type == "post" && publishedAt < now()] 
    | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      readTime,
      publishedAt,
      slug,
      mainImage,
      "author": author->{ name, role },
      "categories": categories[]->{ title, slug }
    }`;

  const categoriesQuery = `*[_type == "category"]{
    title,
    slug
  } | order(title asc)`;

  const [posts, categories] = await Promise.all([
    client.fetch(postsQuery),
    client.fetch(categoriesQuery),
  ]);

  return <BlogPageClient posts={posts} categories={categories} />;
}
