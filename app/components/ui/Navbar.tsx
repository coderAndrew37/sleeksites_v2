"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-lg">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-blue-600">
          SLEEKSITES<span className="text-slate-900">.</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
        </div>

        {/* CTA */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-blue-200 shadow-lg hover:bg-blue-700 transition-all"
        >
          Book a Call
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;