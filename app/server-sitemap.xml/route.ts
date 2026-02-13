import { getServerSideSitemap } from 'next-sitemap'

export async function GET(request: Request) {
  // Example: Fetching your portfolio projects from Sanity/Supabase
  // const projects = await fetchProjects();
  
  const dynamicEntries = [
    {
      loc: 'https://sleeksites.co.ke/portfolio/project-alpha',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    // Map your CMS projects here
  ]

  return getServerSideSitemap(dynamicEntries)
}