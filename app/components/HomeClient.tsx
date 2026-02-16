"use client";

import Portfolio from "./ui/Portfolio";
import BentoServices from "./ui/BentoServices";
import ContactCTA from "./ui/ContactCTA";
import FeatureFocus from "./ui/FeatureFocus";
import Hero from "./ui/Hero";
import Trustbar from "./ui/Trustbar";
import Industries from "./ui/Industries";
import FinalCTA from "./ui/ConversionCTA";
import HowWeWork from "./ui/Process";
import Testimonials from "./ui/Testimonials";
import { BlogSection } from "./ui/BlogSection";
import FAQ from "./ui/FAQ";
import { BlogPost } from "./types/blog";
import { Project, Service } from "@/types";

interface HomeClientProps {
  initialPosts: BlogPost[];
  projects: Project[];
  services: Service[];
}

export default function HomeClient({
  initialPosts,
  projects,
  services,
}: HomeClientProps) {
  return (
    <div className="bg-white">
      <Hero />
      <Trustbar />
      <BentoServices services={services} />
      <HowWeWork />
      <FinalCTA />
      <FeatureFocus />
      <Industries />
      <Portfolio projects={projects} />
      <Testimonials />
      {/* BlogSection now receives data from the server page */}
      <BlogSection posts={initialPosts} />
      <FAQ />
    </div>
  );
}
