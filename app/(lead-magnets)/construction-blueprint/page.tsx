"use client";
import React, { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Construction,
  ShieldCheck,
  Zap,
  TrendingUp,
  Lock,
} from "lucide-react";
import Button from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { handleLeadGeneration } from "@/lib/actions/email";

export default function ConstructionLeadMagnet() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const toastId = toast.loading("Preparing your blueprint...");

    try {
      const result = await handleLeadGeneration({ email, name });

      if (result && "error" in result) {
        const errorMessage =
          typeof result.error === "string"
            ? result.error
            : "Submission failed.";
        setError(errorMessage);
        toast.error(errorMessage, { id: toastId });
      } else if (result?.success) {
        toast.success("Blueprint sent! Redirecting...", { id: toastId });

        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);
      } else {
        throw new Error("Unexpected response");
      }
    } catch (err) {
      const msg = "Network error. Please check your connection.";
      setError(msg);
      toast.error(msg, { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="p-6 border-b border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
          <div className="bg-blue-600 p-1 rounded text-white">
            <Construction size={20} />
          </div>
          SleekSites<span className="text-blue-600">.</span>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hidden md:block">
          Construction Digital Credibility Blueprint • Kenya • 2026
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="lg:pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-black mb-6 border border-orange-200 uppercase tracking-wider">
              <Zap size={14} /> For Ambitious Kenyan Construction Firms
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-slate-900">
              Unajenga projects za{" "}
              <span className="text-blue-600 italic">20M+</span> lakini online
              unaonekana kama subcontractor?
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-tight font-medium">
              You execute multi-million projects.
              <br />
              But online, you don’t look like the company that wins them.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded-r-2xl">
              <p className="text-slate-700 leading-relaxed italic">
                "Before a corporate client calls you, they Google you. If your
                digital presence doesn’t signal authority in 5 seconds, they
                shortlist someone else."
              </p>
            </div>

            <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6">
              What You’ll Master Inside:
            </h3>

            <div className="space-y-4 mb-12">
              {[
                {
                  t: "The 7-Point Digital Credibility Audit",
                  d: "Instantly know if your firm looks Tier-1 or Tier-3 online.",
                },
                {
                  t: "Email That Commands Respect",
                  d: "Why Gmail quietly destroys corporate trust.",
                },
                {
                  t: "Portfolio Pages That Win Tenders",
                  d: "Structure projects like case studies, not photo dumps.",
                },
                {
                  t: "The Safaricom Speed Standard",
                  d: "Optimizing for real Kenyan mobile data users.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <CheckCircle2 className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 leading-none mb-1">
                      {item.t}
                    </p>
                    <p className="text-slate-500 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative sticky top-12">
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-3xl" />
            <div className="relative bg-slate-950 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10 text-white">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl mb-8 transform -rotate-2 shadow-xl border-2 border-white/20">
                <TrendingUp size={32} className="text-blue-100 mb-4" />
                <h2 className="text-2xl font-black leading-tight">
                  The Construction Digital <br /> Credibility Blueprint
                </h2>
                <p className="text-blue-100/80 text-xs mt-2 font-bold uppercase tracking-widest">
                  Free Download • Kenya Edition • 2026
                </p>
              </div>

              <h3 className="text-xl font-bold mb-2">Get Instant Access</h3>

              <p className="text-xs text-slate-400 mb-6">
                Built specifically for construction firms competing for bigger
                contracts.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Eng. Maina"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-600 text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Professional Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.co.ke"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-600 text-white"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-bold">{error}</p>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-xl flex items-center justify-center gap-3 group text-lg font-black transition-all ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "!bg-blue-600 hover:!bg-blue-500"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Get My Free Blueprint"}
                  {!isSubmitting && (
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 italic">
                  <ShieldCheck size={14} className="text-blue-500" />
                  Secure Download
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 italic">
                  <Lock size={14} className="text-blue-500" />
                  Private & Confidential
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-12">
            Designed For Firms Ready To Compete At A Higher Level
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale contrast-125">
            <span className="text-xl md:text-2xl font-black">
              NCA COMPLIANT
            </span>
            <span className="text-xl md:text-2xl font-black italic underline decoration-blue-600">
              TENDER READY
            </span>
            <span className="text-xl md:text-2xl font-black">
              ISO STANDARDS
            </span>
            <span className="text-xl md:text-2xl font-black tracking-widest uppercase">
              PREMIUM BUILD
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
