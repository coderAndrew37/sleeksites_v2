import { BlogPost } from "@/app/components/types/blog";

export const mockPosts: BlogPost[] = [
  {
    _id: "1",
    title: "How AI is Revolutionizing Web Design in 2026",
    slug: "ai-web-design-2026",
    category: "Technology",
    excerpt:
      "Artificial Intelligence is no longer a buzzword. From generative layouts to automated accessibility, here is how SleekSites is integrating AI.",
    mainImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    publishedAt: "2026-02-10",
    body: [],
    author: { name: "Admin", role: "Founder", bio: "", image: null },
    readTime: 5,
    featured: true,
  },
  {
    _id: "2",
    title: "Next.js 15: Why Core Web Vitals Matter More Than Ever",
    slug: "nextjs-15-seo",
    category: "Development",
    excerpt:
      "Speed is a ranking factor. We break down the latest updates in Next.js 15 that keep our Kenyan clients at the top of Google.",
    mainImage:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-02-08",
    body: [],
    author: { name: "Admin", role: "Founder", bio: "", image: null },
    readTime: 4,
    featured: false,
  },
  {
    _id: "3",
    title: "5 Strategies to Scale Your E-commerce Brand in Nairobi",
    slug: "scaling-ecommerce-nairobi",
    category: "Marketing",
    excerpt:
      "Local SEO and optimized payment gateways are the secret sauce to digital retail success in Kenya.",
    mainImage:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-02-05",
    body: [],
    author: { name: "Admin", role: "Founder", bio: "", image: null },
    readTime: 6,
    featured: false,
  },
];
