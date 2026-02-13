// next-sitemap.config.ts
import type { IConfig, ISitemapField } from "next-sitemap";

const config: IConfig = {
  siteUrl: process.env.SITE_URL || "https://sleeksites.co.ke",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  exclude: ["/server-sitemap.xml"],
  
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://sleeksites.co.ke/server-sitemap.xml",
    ],
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/_next/static/chunks/", "/*.js$", "/*.css$"] },
    ],
  },

  // Fully typed transform function
  transform: async (config: IConfig, path: string): Promise<ISitemapField> => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/" ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      images: [
        {
          loc: "https://sleeksites.co.ke/og-image.jpg",
          title: "SleekSites | Premium Web Development",
          caption: "We build high-performance digital engines.",
        },
      ],
    };
  },
};

export default config;