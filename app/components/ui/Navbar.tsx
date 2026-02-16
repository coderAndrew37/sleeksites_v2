"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 1. Fixed the TypeScript Error by defining the Variants type explicitly
  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.5,
        // Using a standard ease string or casting the array
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl py-3 px-6 rounded-full"
              : "bg-transparent py-2 px-0 rounded-none"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1 group"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform" />
            SLEEKSITES<span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors group"
              >
                {link.name}
                <motion.div className="absolute inset-0 bg-blue-50 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* CTA & Toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex bg-slate-950 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-950/10"
            >
              Start a Project
            </motion.button>

            {/* 2. Elite Toggle: Hidden on Desktop (md:hidden) */}
            <button
              aria-label="menu toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[110] w-12 h-12 flex md:hidden flex-col items-center justify-center gap-1.5 bg-slate-950 rounded-full group shadow-lg shadow-slate-950/20"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={
                  isOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }
                }
                className="w-5 h-0.5 bg-white rounded-full"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MINIMALIST MOBILE SIDE DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/20 backdrop-blur-sm z-[80]"
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[90] shadow-2xl p-8 pt-32 flex flex-col"
            >
              <div className="flex flex-col gap-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Navigation
                </span>
                <nav className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-6 text-3xl font-bold tracking-tighter text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                        <ArrowRight size={24} className="text-slate-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Minimal Bottom CTA */}
              <div className="mt-auto pb-10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-5 rounded-2xl font-bold text-sm tracking-tight shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
                >
                  Start a Project
                </Link>
                <p className="text-center mt-6 text-xs font-medium text-slate-400 tracking-wide">
                  Available for new projects Q2 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
