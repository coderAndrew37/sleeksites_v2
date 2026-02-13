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

interface HomeClientProps {
  initialPosts: BlogPost[];
}

export default function HomeClient({ initialPosts }: HomeClientProps) {
  return (
    <div className="bg-white">
      <Hero />
      <Trustbar />
      <BentoServices />
      <HowWeWork />
      <FinalCTA />
      <FeatureFocus />
      <Industries />
      <Portfolio />
      <Testimonials />
      {/* BlogSection now receives data from the server page */}
      <BlogSection posts={initialPosts} />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
