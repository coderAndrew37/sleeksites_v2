"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
// Import your centralized constants
import {
  CONTACT_EMAIL,
  SOCIAL_LINKS,
  getWhatsAppUrl,
} from "@/lib/constants/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "E-Commerce", href: "/services/ecommerce" },
      { name: "SEO & Growth", href: "/services/seo" },
      { name: "AI Automation", href: "/services/ai" },
    ],
    company: [
      { name: "Work", href: "/portfolio" }, // Updated to match your nav
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
    social: [
      {
        name: "LinkedIn",
        href: SOCIAL_LINKS.linkedin,
        icon: <Linkedin size={16} />,
      },
      {
        name: "Twitter",
        href: SOCIAL_LINKS.twitter,
        icon: <Twitter size={16} />,
      },
      // {
      //   name: "Instagram",
      //   href: SOCIAL_LINKS.instagram || "#",
      //   icon: <Instagram size={16} />,
      // },
    ],
  };

  // Logic for the pre-footer CTA
  const handleStartProject = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <footer className="bg-white border-t border-slate-100">
      {/* --- High-Impact Pre-Footer CTA --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-20">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-200 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
              Ready to scale your <br />
              digital footprint?
            </h3>
            <p className="text-blue-100 font-medium max-w-sm">
              Let's build something that doesn't just look good, but actually
              converts.
            </p>
          </div>

          <button
            onClick={handleStartProject}
            className="relative z-10 group bg-white text-blue-600 px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-xl cursor-pointer"
          >
            Start a Project
            <ArrowUpRight
              size={20}
              className="group-hover:rotate-45 transition-transform duration-500"
            />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 mb-20">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-block mb-8 group">
              {/* Use the same professional Image logic as Navbar */}
              <Image
                src="/logo.png"
                alt="SleekSites Logo"
                width={200}
                height={50}
                className="h-8 w-auto object-contain brightness-0" // Stays black on white footer
              />
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm mb-8">
              Crafting high-performance digital engines for brands that demand
              excellence. Engineered in Nairobi, deployed globally.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="col-span-1 md:col-start-7 md:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-8">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors"
                >
                  <Mail
                    size={16}
                    className="text-slate-300 group-hover:text-blue-600"
                  />
                  Email Us
                </a>
              </li>
              <li className="text-slate-500 font-medium leading-relaxed">
                Nairobi, Kenya
                <br />
                Kilimani, Ngong Rd.
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Legal Bar --- */}
        <div className="py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
            <span>© {currentYear} SleekSites Agency</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-200" />
            <span className="hidden md:block">Handcrafted with precision</span>
          </div>

          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-slate-900 text-sm font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-slate-900 text-sm font-medium transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
