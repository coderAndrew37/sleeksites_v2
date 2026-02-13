import type { Image, PortableTextBlock } from "sanity";

export interface CustomImage extends Image {
  alt: string; // Required for tech agency accessibility
  caption?: string;
  source?: string; // Image credit/link
}

export interface Author {
  name: string;
  image: CustomImage | string | null;
  bio: string;
  role: string;
}

export interface Category {
  title: string;
  slug: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: PortableTextBlock[]; // Replaced any[]
  mainImage: CustomImage | string | null;
  author: Author;
  publishedAt: string;
  readTime: number;
  category: string;
  featured: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: Image;
  };
}
