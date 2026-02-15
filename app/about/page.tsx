"use client";
import { JSX } from "react";
import Button from "../components/ui/Button";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Zap,
  Rocket,
  ShieldCheck,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Kamau",
    role: "Founder & Lead Developer",
    bio: "With over 8 years of experience, John bridges the gap between complex engineering and business strategy.",
    image: "/team/john.jpg",
    skills: ["Web Development", "Digital Strategy", "Team Leadership"],
  },
  {
    id: "2",
    name: "Sarah Wanjiku",
    role: "Senior Web Designer",
    bio: "Sarah specializes in high-conversion UI/UX. She ensures every pixel serves a business purpose.",
    image: "/team/sarah.jpg",
    skills: ["UI/UX Design", "Brand Identity", "Optimization"],
  },
  {
    id: "3",
    name: "David Ochieng",
    role: "SEO Specialist",
    bio: "David turns search intent into revenue, helping local brands dominate the Kenyan search landscape.",
    image: "/team/david.jpg",
    skills: ["SEO Strategy", "Content Marketing", "Analytics"],
  },
  {
    id: "4",
    name: "Grace Mwende",
    role: "Digital Marketing Manager",
    bio: "Grace manages ROI-focused campaigns, turning social media browsers into loyal customers.",
    image: "/team/grace.jpg",
    skills: ["PPC Advertising", "Campaign Management", "Copywriting"],
  },
];

const values = [
  {
    icon: <Target className="w-8 h-8 text-orange-500" />,
    title: "Results-Driven",
    description: "We don't just build sites; we build revenue engines.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
    title: "Innovation",
    description:
      "Modern stacks (Next.js, Tailwind) for lightning-fast performance.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    title: "Partnership",
    description:
      "Your success is our reputation. We’re in it for the long haul.",
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-500" />,
    title: "Efficiency",
    description: "Agile delivery cycles. No bloated timelines, just results.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Us - SleekSites Kenya"
      description="Empowering Kenyan businesses with world-class digital tools."
    >
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Scaling Kenyan Brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Through Digital Mastery.
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              SleekSites is a boutique digital agency based in Nairobi,
              dedicated to building high-performance websites that outclass the
              competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="xl"
                onClick={() =>
                  document
                    .getElementById("our-story")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                The SleekSites Way
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "127+", label: "Brands Launched" },
              { number: "5+", label: "Years in Nairobi" },
              { number: "94%", label: "Client Loyalty" },
              { number: "2.3x", label: "Average ROI Growth" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Born from a need for{" "}
                <span className="text-blue-600">better.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg">
                <p>
                  Founded in 2018, we noticed a gap: Kenyan businesses had to
                  choose between cheap, broken websites or overpriced, detached
                  agencies.
                </p>
                <p>
                  We created <strong>SleekSites</strong> to provide a third
                  option—premium, world-class engineering with a deep
                  understanding of the local market landscape.
                </p>
              </div>

              <div className="mt-10 p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200">
                <Rocket className="w-12 h-12 mb-4 text-blue-200" />
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Our Mission
                </h3>
                <p className="text-blue-100 italic">
                  "To equip every visionary Kenyan business with the technical
                  edge required to compete globally while winning locally."
                </p>
              </div>
            </motion.div>

            <div className="relative">
              <div className="aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white">
                {/* Replace with an actual office/team photo */}
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center p-12 text-center">
                  <p className="text-slate-400 font-medium italic">
                    Building the future of the Kenyan web, one project at a
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Values We Live By
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">The A-Team</h2>
              <p className="text-slate-400 text-lg">
                World-class talent, homegrown in Kenya.
              </p>
            </div>
            <Users className="w-16 h-16 text-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700/50"
              >
                <div className="aspect-[4/5] bg-slate-700 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold uppercase tracking-widest text-xs">
                    {member.name}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-bold mb-4">{member.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-700 px-2 py-1 rounded text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Rocket className="w-64 h-64 text-white -rotate-12" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Let's Make Your Digital Mark.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              variant="secondary"
              size="xl"
              onClick={() => (window.location.href = "/contact")}
            >
              Hire the Agency
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
              size="xl"
              onClick={() => (window.location.href = "/portfolio")}
            >
              See Portfolios
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
