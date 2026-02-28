"use client";
import Button from "@/app/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/constants/contact";
import {
  ArrowRight,
  CheckCircle,
  FileCheck,
  Search,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";

const url = getWhatsAppUrl(
  "Hello SleekSites! I just downloaded the Construction Digital Credibility Blueprint. I'd like to get started on a project.",
);

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Executive Confirmation Header */}
      <section className="bg-slate-950 py-20 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 animate-bounce">
            <CheckCircle size={40} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Your Construction Digital Credibility Blueprint Is On Its Way.
          </h1>

          <p className="text-xl text-slate-300 font-medium leading-relaxed">
            Check your inbox (and spam folder) in the next 2 minutes.
            <br />
            This is not a generic PDF — it’s the same framework used to
            reposition serious construction firms in Kenya.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-12 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Main Offer Section */}
          <div className="lg:col-span-3 bg-white rounded-[2rem] p-10 md:p-14 shadow-2xl border border-slate-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-xs font-black mb-8 uppercase tracking-widest">
              Limited Weekly Capacity
            </div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight">
              Most Contractors Stop Here. <br className="hidden md:block" />
              Serious Firms Take The Next Step.
            </h2>

            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              While you review the Blueprint, we are offering a limited number
              of complimentary{" "}
              <strong>Tender-Readiness Diagnostic Calls</strong>
              for qualified construction firms.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-5">
                <div className="bg-slate-100 p-4 rounded-xl h-fit">
                  <Search className="text-slate-900" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Live Competitive Positioning Review
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We analyze how your digital presence compares against
                    top-tier firms in your category.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-slate-100 p-4 rounded-xl h-fit">
                  <FileCheck className="text-slate-900" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Corporate Procurement Simulation
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We show you exactly what a procurement officer sees in the
                    first 90 seconds of reviewing your company online.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-slate-100 p-4 rounded-xl h-fit">
                  <ShieldCheck className="text-slate-900" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Digital Credibility Risk Report
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Clear identification of the gaps that may be silently
                    costing you tenders or high-value residential projects.
                  </p>
                </div>
              </div>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {" "}
              <Button
                variant="primary"
                className="w-full py-6 rounded-2xl !bg-slate-950 hover:!bg-slate-800 text-white flex items-center justify-center gap-4 text-xl font-black transition-all group cursor-pointer"
              >
                Book My Tender-Readiness Diagnostic
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>

            <p className="text-center text-slate-400 text-xs mt-6 font-bold uppercase tracking-widest">
              We Review Only 5 Construction Firms Per Week To Maintain Depth.
            </p>

            <p className="text-center text-slate-400 text-xs mt-2 font-medium">
              No sales pitch. Just engineering-grade clarity.
            </p>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="font-black text-xl mb-6 flex items-center gap-2">
                <Video size={20} className="text-slate-900" />
                How To Use This Blueprint Properly
              </h3>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="font-black text-slate-900">01.</span>
                  <p className="text-sm text-slate-600 font-medium">
                    Read it like an investor reviewing your company.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-black text-slate-900">02.</span>
                  <p className="text-sm text-slate-600 font-medium">
                    Score yourself honestly across all credibility pillars.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-black text-slate-900">03.</span>
                  <p className="text-sm text-slate-600 font-medium">
                    Identify your biggest positioning gap.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-black text-slate-900">04.</span>
                  <p className="text-sm text-slate-600 font-medium">
                    Decide whether to fix internally — or professionally.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 text-white rounded-3xl p-8 relative overflow-hidden">
              <Users className="absolute -right-6 -bottom-6 text-white/5 w-40 h-40" />
              <p className="relative z-10 text-slate-200 font-medium leading-relaxed">
                “After restructuring our digital presence, we secured a major
                warehouse contract in Mlolongo. The client mentioned our website
                was the tie-breaker.”
              </p>
              <p className="relative z-10 mt-4 text-xs font-black uppercase tracking-widest text-slate-400">
                — Managing Director, Civil Engineering Firm
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100">
              <h4 className="font-black text-lg mb-4">
                Why Construction Firms Work With Us
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We don’t build “nice websites.” We engineer digital credibility
                systems specifically for civil contractors, real estate
                developers, commercial builders, and industrial firms
                positioning for higher-value projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <Link
          href="/"
          className="text-slate-400 hover:text-slate-900 text-sm font-bold transition-colors"
        >
          ← Back to Homepage
        </Link>
      </footer>
    </main>
  );
}
