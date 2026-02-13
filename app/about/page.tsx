"use client";
import { JSX } from "react";
import Button from "../components/ui/Button";
import Layout from "../components/layout/Layout";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
}

export default function About(): JSX.Element {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "John Kamau",
      role: "Founder & Lead Developer",
      bio: "With over 8 years of experience in web development and digital marketing, John leads our technical team and ensures every project meets the highest standards.",
      image: "/team/john.jpg",
      skills: ["Web Development", "Digital Strategy", "Team Leadership"],
    },
    {
      id: "2",
      name: "Sarah Wanjiku",
      role: "Senior Web Designer",
      bio: "Sarah specializes in creating beautiful, user-friendly designs that convert visitors into customers. Her designs have helped numerous Kenyan businesses succeed online.",
      image: "/team/sarah.jpg",
      skills: ["UI/UX Design", "Brand Identity", "Conversion Optimization"],
    },
    {
      id: "3",
      name: "David Ochieng",
      role: "SEO Specialist",
      bio: "David is our SEO expert with a proven track record of helping Kenyan businesses rank on the first page of Google and attract qualified traffic.",
      image: "/team/david.jpg",
      skills: ["SEO Strategy", "Content Marketing", "Analytics"],
    },
    {
      id: "4",
      name: "Grace Mwende",
      role: "Digital Marketing Manager",
      bio: "Grace manages our social media and advertising campaigns, helping businesses reach their target audience and maximize ROI.",
      image: "/team/grace.jpg",
      skills: [
        "Social Media Marketing",
        "PPC Advertising",
        "Campaign Management",
      ],
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Results-Driven",
      description:
        "We focus on delivering measurable results that help your business grow and succeed.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We stay ahead of trends and use the latest technologies to create cutting-edge solutions.",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description:
        "We work closely with our clients as partners, ensuring their success is our success.",
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description:
        "We deliver high-quality work on time and within budget, maximizing your investment.",
    },
  ];

  return (
    <Layout
      title="About Us - SleekSites Kenya | Web Design & Digital Marketing Agency"
      description="Learn about SleekSites Kenya - a leading web design and digital marketing agency helping Kenyan businesses succeed online since 2018."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-orange-400">SleekSites</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                We're a Kenyan web design and digital marketing agency
                passionate about helping local businesses thrive online.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("our-story")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Story
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "127+", label: "Happy Clients" },
                    { number: "5+", label: "Years Experience" },
                    { number: "94%", label: "Client Retention" },
                    { number: "2.3x", label: "Avg. ROI" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-700">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Founded in 2018, SleekSites began with a simple mission: to
                  help Kenyan businesses establish a strong online presence and
                  compete effectively in the digital age.
                </p>
                <p className="leading-relaxed">
                  We noticed that many local businesses struggled with outdated
                  websites, poor online visibility, and limited digital
                  marketing knowledge. This inspired us to create solutions that
                  are not only technically excellent but also tailored to the
                  unique needs of the Kenyan market.
                </p>
                <p className="leading-relaxed">
                  Today, we've grown into a full-service digital agency, but our
                  core mission remains the same: to empower Kenyan businesses
                  with the digital tools and strategies they need to succeed.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 mb-6">
                  To empower Kenyan businesses with cutting-edge digital
                  solutions that drive growth, increase visibility, and maximize
                  ROI.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the leading digital partner for Kenyan businesses,
                  recognized for excellence, innovation, and measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-700">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are
              as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-blue-700">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented professionals behind SleekSites' success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its digital
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="xl"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => (window.location.href = "/portfolio")}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
