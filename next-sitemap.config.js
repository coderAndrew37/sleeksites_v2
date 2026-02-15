/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://sleeksites.co.ke",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  exclude: ["/server-sitemap.xml"],

  robotsTxtOptions: {
    additionalSitemaps: ["https://sleeksites.co.ke/server-sitemap.xml"],
    policies: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: "*",
        disallow: ["/_next/static/chunks/", "/*.js$", "/*.css$"],
      },
    ],
  },

  // The transform function in JS
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/" ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      images: [
        {
          // We keep the new URL() wrapper to ensure the sitemap generator
          // receives the object format it expects
          loc: new URL("https://sleeksites.co.ke/og-image.jpg"),
          title: "SleekSites | Premium Web Development",
          caption: "We build high-performance digital engines.",
        },
      ],
    };
  },
};

module.exports = config;
