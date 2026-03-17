"use client";
import { JSX } from "react";
import Button from "../../components/ui/Button";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Zap,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

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
    name: "Omollo Andrew",
    role: "Founder & Lead Developer",
    bio: "With over 4 years of experience, Andrew bridges the gap between complex engineering and business strategy.",
    image: "/team/andrew.jpg",
    skills: ["Web Development", "Digital Strategy", "Team Leadership"],
  },
  {
    id: "2",
    name: "Vedel Ndenga",
    role: "Senior Web Designer",
    bio: "Vedel specializes in high-conversion UI/UX. She ensures every pixel serves a business purpose.",
    image: "/team/vedel.jpg",
    skills: ["UI/UX Design", "Brand Identity", "Optimization"],
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
      "Your success is our reputation. We're in it for the long haul.",
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
            {/* Label — matches homepage orange pill badge style */}
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              About SleekSites
            </p>

            {/* H1 — matches homepage hero: font-black tracking-tight */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[0.95]">
              Scaling Kenyan Brands{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Through Digital Mastery.
              </span>
            </h1>

            {/* Body — matches homepage hero subtext */}
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

      {/* Stats Ribbon — matches homepage stat blocks */}
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
                <div className="text-3xl font-bold tracking-tight text-slate-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">
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
              {/* Section label — matches homepage "Expertise", "How we work" labels */}
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                Our Story
              </p>

              {/* H2 — matches homepage section headings: font-bold tracking-tight */}
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Born from a need for{" "}
                <span className="text-blue-600">better.</span>
              </h2>

              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2018, we noticed a gap: Kenyan businesses had to
                  choose between cheap, broken websites or overpriced, detached
                  agencies.
                </p>
                <p>
                  We created{" "}
                  <strong className="text-slate-900">SleekSites</strong> to
                  provide a third option — premium, world-class engineering with
                  a deep understanding of the local market landscape.
                </p>
              </div>

              <div className="mt-10 p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200">
                <Rocket className="w-12 h-12 mb-4 text-blue-200" />
                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                  Our Mission
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  "To equip every visionary Kenyan business with the technical
                  edge required to compete globally while winning locally."
                </p>
              </div>
            </motion.div>

            <div className="relative">
              <div className="aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white relative">
                <Image
                  src="/agency-working.jpg"
                  alt="SleekSites team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            {/* Section label */}
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
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
                {/* Card title — matches homepage service card headings */}
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
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
              {/* Section label */}
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                The People
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
                The A-Team
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
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
                <div className="aspect-[4/5] bg-slate-700 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  {/* Role label — matches homepage's label pattern exactly */}
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold uppercase tracking-wider bg-slate-700 px-2 py-1 rounded text-slate-300"
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
    </Layout>
  );
}
