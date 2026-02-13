"use client";
import { JSX } from "react";
import Layout from "../components/layout/Layout";
import { Service } from "../components/types/Index";
import Button from "../components/ui/Button";

export default function Services(): JSX.Element {
  const detailedServices: (Service & {
    highlights: string[];
    process: string[];
    deliverables: string[];
  })[] = [
    {
      icon: "💻",
      title: "High-Converting Web Design",
      description:
        "Custom websites designed to convert visitors into customers with proven UX principles and mobile-first approach.",
      features: [
        "Mobile-First Responsive Design",
        "Conversion Rate Optimization",
        "Fast Loading Speed (<3s)",
        "SEO-Ready Structure",
        "User Experience (UX) Focused",
        "Cross-Browser Compatibility",
      ],
      price: "From KES 45,000",
      popular: true,
      highlights: [
        "Increase conversion rates by 2-3x",
        "Mobile-optimized for Kenyan users",
        "Integrated analytics and tracking",
        "Easy-to-use content management",
      ],
      process: [
        "Strategy & Discovery Session",
        "Design Mockups & Prototyping",
        "Development & Implementation",
        "Testing & Quality Assurance",
        "Launch & Training",
      ],
      deliverables: [
        "Fully responsive website",
        "Google Analytics setup",
        "SEO basic optimization",
        "Content management training",
        "1-month free support",
      ],
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategy to rank higher on Google and attract qualified traffic that converts into customers.",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audit",
        "Local SEO for Kenya",
        "Content Strategy",
        "Monthly Performance Reports",
      ],
      price: "From KES 25,000/mo",
      popular: false,
      highlights: [
        "First page Google rankings",
        "Target local Kenyan searches",
        "Increase organic traffic 3-5x",
        "Monthly performance reports",
      ],
      process: [
        "Comprehensive SEO Audit",
        "Keyword Strategy Development",
        "On-Page Optimization",
        "Technical Improvements",
        "Monthly Monitoring & Reporting",
      ],
      deliverables: [
        "Detailed SEO audit report",
        "Keyword strategy document",
        "Monthly performance reports",
        "Google Search Console setup",
        "Ongoing optimization",
      ],
    },
    {
      icon: "📱",
      title: "Facebook & Instagram Ads",
      description:
        "Targeted social media advertising that reaches your ideal customers in Kenya with compelling ad creatives.",
      features: [
        "Audience Research & Targeting",
        "Ad Creative Design",
        "A/B Testing & Optimization",
        "Conversion Tracking",
        "Retargeting Campaigns",
        "Monthly Performance Analysis",
      ],
      price: "From KES 15,000/mo",
      popular: false,
      highlights: [
        "Reach 5M+ Kenyans on Facebook",
        "Cost per lead as low as KES 50",
        "Detailed conversion tracking",
        "Regular campaign optimization",
      ],
      process: [
        "Audience & Competitor Research",
        "Ad Creative Development",
        "Campaign Setup & Launch",
        "Daily Monitoring & Optimization",
        "Monthly Performance Review",
      ],
      deliverables: [
        "Custom audience strategy",
        "Professional ad creatives",
        "Weekly performance updates",
        "Conversion tracking setup",
        "Monthly strategy review",
      ],
    },
    {
      icon: "🎯",
      title: "Google Ads Management",
      description:
        "Strategic Google advertising to appear when potential customers search for your products or services in Kenya.",
      features: [
        "PPC Campaign Management",
        "Keyword Research & Bidding",
        "Landing Page Optimization",
        "Conversion Tracking",
        "ROI Optimization",
        "Competitor Analysis",
      ],
      price: "From KES 20,000/mo",
      popular: false,
      highlights: [
        "Appear for high-intent searches",
        "Pay only for clicks",
        "Average 5-8x ROI",
        "Real-time performance tracking",
      ],
      process: [
        "Keyword & Competitor Research",
        "Campaign Structure Planning",
        "Ad Copy & Landing Page Setup",
        "Launch & Bid Management",
        "Continuous Optimization",
      ],
      deliverables: [
        "Comprehensive keyword strategy",
        "Optimized landing pages",
        "Conversion tracking setup",
        "Monthly performance reports",
        "Regular bid adjustments",
      ],
    },
    {
      icon: "🛒",
      title: "E-Commerce Development",
      description:
        "Complete online store solutions with secure payments, inventory management, and mobile shopping optimization.",
      features: [
        "Online Store Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Mobile Shopping Optimization",
        "Security & SSL",
        "Order Management System",
      ],
      price: "From KES 85,000",
      popular: false,
      highlights: [
        "Integrated M-Pesa payments",
        "Mobile-first shopping experience",
        "Secure and scalable platform",
        "Complete inventory management",
      ],
      process: [
        "E-commerce Strategy Session",
        "Platform Selection & Setup",
        "Design & Development",
        "Payment Integration",
        "Testing & Launch",
      ],
      deliverables: [
        "Full e-commerce website",
        "Payment gateway integration",
        "Inventory management system",
        "Admin training",
        "3-month support",
      ],
    },
    {
      icon: "✉️",
      title: "Email Marketing",
      description:
        "Build customer relationships and drive repeat business with strategic email marketing campaigns.",
      features: [
        "Email Strategy Development",
        "List Building & Segmentation",
        "Automated Campaigns",
        "Newsletter Design",
        "Performance Analytics",
        "A/B Testing",
      ],
      price: "From KES 12,000/mo",
      popular: false,
      highlights: [
        "Average 42:1 ROI on email",
        "Automated welcome sequences",
        "Customer segmentation",
        "Detailed performance analytics",
      ],
      process: [
        "Email Strategy Development",
        "List Building & Segmentation",
        "Template Design & Creation",
        "Campaign Setup & Automation",
        "Performance Analysis",
      ],
      deliverables: [
        "Custom email templates",
        "Automated campaign setup",
        "Monthly performance reports",
        "List growth strategies",
        "A/B testing implementation",
      ],
    },
  ];

  return (
    <Layout
      title="Our Services - SleekSites Kenya | Web Design, SEO & Digital Marketing"
      description="Comprehensive digital marketing services in Kenya including web design, SEO, Facebook Ads, Google Ads, e-commerce, and email marketing. Get a free consultation."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to grow your Kenyan
            business online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("all-services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("cta-services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="all-services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete <span className="text-blue-700">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From website design to ongoing digital marketing, we provide
              everything you need to succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                  service.popular
                    ? "border-orange-500 bg-gradient-to-b from-orange-50 to-white scale-105"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Includes:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Our Process:
                  </h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                    {service.process.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900">
                    {service.price}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {service.price.includes("/mo")
                      ? "Monthly service"
                      : "One-time project"}
                  </div>
                </div>

                <Button
                  variant={service.popular ? "primary" : "secondary"}
                  size="md"
                  fullWidth
                  onClick={() =>
                    document
                      .getElementById("cta-services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-700">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven 5-step process to ensure your project's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "We learn about your business and goals",
              },
              {
                step: "2",
                title: "Strategy",
                desc: "We create a customized plan for success",
              },
              {
                step: "3",
                title: "Execution",
                desc: "We build and implement the solution",
              },
              {
                step: "4",
                title: "Testing",
                desc: "We ensure everything works perfectly",
              },
              {
                step: "5",
                title: "Launch",
                desc: "We go live and provide ongoing support",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-services"
        className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives
            results for your business.
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
              onClick={() => (window.location.href = "tel:+254700000000")}
            >
              Call Us: +254 700 000 000
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
