"use client";
import { JSX, useState } from "react";
import { PortfolioItem } from "../components/types/Index";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";

export default function Portfolio(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null
  );

  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "Nairobi Spares - Auto Parts E-Commerce",
      description:
        "Complete e-commerce solution for auto parts retailer with integrated M-Pesa payments and inventory management system.",
      image: "/portfolio/auto-parts.jpg",
      category: "ecommerce",
      results: [
        { metric: "Monthly Revenue", value: "KES 450,000" },
        { metric: "Conversion Rate", value: "4.2%" },
        { metric: "Mobile Orders", value: "72%" },
      ],
    },
    {
      id: "2",
      title: "QuickFix Plumbers - Service Business",
      description:
        "Lead generation website with booking system and service area optimization for plumbing business.",
      image: "/portfolio/plumbing.jpg",
      category: "service",
      results: [
        { metric: "Leads/Month", value: "45" },
        { metric: "Cost per Lead", value: "KES 120" },
        { metric: "Call Conversion", value: "28%" },
      ],
    },
    {
      id: "3",
      title: "Mombasa Fashion House - Online Store",
      description:
        "Fashion e-commerce platform with size guides, wishlists, and social media integration.",
      image: "/portfolio/fashion.jpg",
      category: "ecommerce",
      results: [
        { metric: "Sales Increase", value: "320%" },
        { metric: "Average Order", value: "KES 3,200" },
        { metric: "Return Customers", value: "35%" },
      ],
    },
    {
      id: "4",
      title: "Kenya Real Estate Portal",
      description:
        "Property listing platform with virtual tours, agent profiles, and mortgage calculator.",
      image: "/portfolio/real-estate.jpg",
      category: "realestate",
      results: [
        { metric: "Property Views", value: "12K/mo" },
        { metric: "Lead Conversion", value: "5.8%" },
        { metric: "Agent Signups", value: "34" },
      ],
    },
    {
      id: "5",
      title: "Restaurant Online Ordering System",
      description:
        "Food ordering platform with menu management, delivery tracking, and loyalty program.",
      image: "/portfolio/restaurant.jpg",
      category: "food",
      results: [
        { metric: "Online Orders", value: "89/day" },
        { metric: "Order Value", value: "KES 2,100" },
        { metric: "Repeat Customers", value: "42%" },
      ],
    },
    {
      id: "6",
      title: "Healthcare Booking Platform",
      description:
        "Medical appointment scheduling system with doctor profiles and prescription management.",
      image: "/portfolio/healthcare.jpg",
      category: "healthcare",
      results: [
        { metric: "Appointments", value: "156/mo" },
        { metric: "Patient Satisfaction", value: "96%" },
        { metric: "Time Saved", value: "15 hrs/wk" },
      ],
    },
    {
      id: "7",
      title: "Educational Institution Website",
      description:
        "Modern website for school with student portal, event calendar, and parent communications.",
      image: "/portfolio/education.jpg",
      category: "education",
      results: [
        { metric: "Enrollment Inquiries", value: "+65%" },
        { metric: "Page Engagement", value: "3.2 mins" },
        { metric: "Mobile Traffic", value: "68%" },
      ],
    },
    {
      id: "8",
      title: "Tourism & Travel Booking",
      description:
        "Tour package booking platform with payment integration and itinerary management.",
      image: "/portfolio/tourism.jpg",
      category: "tourism",
      results: [
        { metric: "Bookings", value: "87/mo" },
        { metric: "Revenue", value: "KES 1.2M" },
        { metric: "Customer Reviews", value: "4.8/5" },
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: portfolioItems.length },
    {
      id: "ecommerce",
      name: "E-Commerce",
      count: portfolioItems.filter((item) => item.category === "ecommerce")
        .length,
    },
    {
      id: "service",
      name: "Service Business",
      count: portfolioItems.filter((item) => item.category === "service")
        .length,
    },
    {
      id: "realestate",
      name: "Real Estate",
      count: portfolioItems.filter((item) => item.category === "realestate")
        .length,
    },
    {
      id: "food",
      name: "Food & Restaurant",
      count: portfolioItems.filter((item) => item.category === "food").length,
    },
    {
      id: "healthcare",
      name: "Healthcare",
      count: portfolioItems.filter((item) => item.category === "healthcare")
        .length,
    },
    {
      id: "education",
      name: "Education",
      count: portfolioItems.filter((item) => item.category === "education")
        .length,
    },
    {
      id: "tourism",
      name: "Tourism",
      count: portfolioItems.filter((item) => item.category === "tourism")
        .length,
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <Layout
      title="Our Portfolio - SleekSites Kenya | Web Design Case Studies"
      description="View our portfolio of successful web design and digital marketing projects for Kenyan businesses. See real results and case studies."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-400">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            See how we've helped Kenyan businesses achieve remarkable results
            with custom web solutions
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              document
                .getElementById("portfolio-grid")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Our Work
          </Button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio-grid" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {item.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-blue-700">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-600">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category to view more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "127+", label: "Projects Completed" },
              { number: "94%", label: "Client Satisfaction" },
              { number: "2.3x", label: "Avg. ROI" },
              { number: "15", label: "Industries Served" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get a free consultation and
            project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="xl"
              onClick={() => (window.location.href = "/contact")}
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => (window.location.href = "/services")}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Select Button"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-6"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">
                    Project Overview
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-lg font-semibold mb-4">
                    Results Achieved
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.results.map((result, index) => (
                      <div
                        key={index}
                        className="bg-blue-50 rounded-lg p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-blue-700">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Node.js",
                      "MongoDB",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold mb-4">
                    Services Provided
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Custom Web Design & Development</li>
                    <li>• Mobile Responsive Optimization</li>
                    <li>• SEO Optimization</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button
                  variant="primary"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Start Similar Project
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
