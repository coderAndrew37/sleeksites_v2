"use client";
import React from "react";
import {
  CheckCircle,
  Calendar,
  ArrowRight,
  Video,
  FileCheck,
  Search,
  Users,
} from "lucide-react";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Success Header */}
      <section className="bg-blue-600 py-16 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 animate-bounce">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Blueprint Imeenda!
          </h1>
          <p className="text-xl text-blue-100 font-medium">
            Check your email inbox (and maybe spam) in the next 2 minutes.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-10 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Main Content: The Upsell */}
            <div className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-black mb-6 uppercase tracking-wider">
                Limited Availability
              </div>

              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight">
                Wait! Do you want to know exactly why you are losing tenders?
              </h2>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                While you wait for the PDF, most serious contractors prefer a
                <strong> 15-minute Digital Audit</strong>. We will look at your
                current site (or your competitors) and tell you exactly what
                procurement officers see.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl h-fit">
                    <Search className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Live Competitor Comparison
                    </h4>
                    <p className="text-sm text-slate-500">
                      See how you rank against the Tier 1 firms in your niche.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl h-fit">
                    <FileCheck className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Tender-Readiness Score
                    </h4>
                    <p className="text-sm text-slate-500">
                      We grade your site based on corporate procurement
                      standards.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                className="w-full py-6 rounded-2xl !bg-slate-950 hover:!bg-blue-600 text-white flex items-center justify-center gap-4 text-xl font-black transition-all group"
              >
                Book My Free Audit{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Button>

              <p className="text-center text-slate-400 text-xs mt-6 font-bold uppercase tracking-widest">
                No Sales Pitch. Just Engineering-Grade Feedback.
              </p>
            </div>

            {/* Sidebar: Expectations */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="font-black text-xl mb-6 flex items-center gap-2">
                  <Video size={20} className="text-blue-600" /> What happens
                  next?
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="font-black text-blue-600">01.</span>
                    <p className="text-sm text-slate-600 font-medium">
                      Read the Blueprint to understand the 2026 digital
                      landscape.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-black text-blue-600">02.</span>
                    <p className="text-sm text-slate-600 font-medium">
                      Audit your current projects and photos for your new
                      portfolio.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-black text-blue-600">03.</span>
                    <p className="text-sm text-slate-600 font-medium">
                      We'll follow up in 2 days with a specialized Case Study.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden">
                <Users className="absolute -right-4 -bottom-4 text-blue-100 w-32 h-32" />
                <p className="relative z-10 text-blue-800 font-bold italic leading-relaxed">
                  "SleekSites helped us re-position our firm online. Two months
                  later, we secured a major warehouse contract in Mlolongo. The
                  client mentioned our website was the tie-breaker."
                </p>
                <p className="relative z-10 mt-4 text-xs font-black text-blue-600 uppercase">
                  — MD, Civil Engineering Firm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <Link
          href="/"
          className="text-slate-400 hover:text-blue-600 text-sm font-bold transition-colors"
        >
          ← Back to Homepage
        </Link>
      </footer>
    </main>
  );
}
