// app/page.tsx
import { Metadata } from "next";
import HomeClient from "./components/HomeClient";
import { getPosts } from "@/lib/api"; // We'll create this next

export const metadata: Metadata = {
  title: "SleekSites | High-Performance Web Development Agency",
  description:
    "We build premium Next.js websites and SEO-driven digital platforms in Nairobi, Kenya.",
  openGraph: {
    title: "SleekSites Agency",
    description: "Premium Web Development & Strategic Digital Growth.",
    url: "https://sleeksites.co.ke",
    siteName: "SleekSites",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default async function Page() {
  // 1. Data Fetching (Server-Side)
  // We limit to 3 here so the client only receives what it needs to render
  const posts = await getPosts(3);

  // 2. JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SleekSites Agency",
    image: "https://sleeksites.co.ke/logo.png",
    url: "https://sleeksites.co.ke",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "Kenya",
    },
    serviceType: ["Web Development", "SEO", "Digital Marketing"],
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Pass the data into the Client Component */}
      <HomeClient initialPosts={posts} />
    </>
  );
}
