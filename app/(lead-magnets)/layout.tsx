import React from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants/contact";

interface MinimalistLayoutProps {
  children: React.ReactNode;
}

const MinimalistLayout = ({ children }: MinimalistLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* --- Minimalist Navigation --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Back to Home */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900 transition-colors">
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-slate-900 transition-colors">
              Home
            </span>
          </Link>

          {/* Contact Button */}
          <Link
            href={getWhatsAppUrl(
              "Hi SleekSites! I'm interested in discussing a project.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-950 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-950/10"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">
              Contact
            </span>
            <MessageSquare size={14} />
          </Link>
        </div>
      </nav>

      {/* --- Page Content --- */}
      <main className="pt-20">{children}</main>

      {/* --- Simple Footer --- */}
      <footer className="py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © 2026 SleekSites KE
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalistLayout;
