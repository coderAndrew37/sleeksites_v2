"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MessageCircle,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";

type ProjectType = "performance" | "seo" | "full-build" | "not-sure";

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [budget, setBudget] = useState("");
  const [url, setUrl] = useState("");

  const nextStep = () => setStep((s) => s + 1);

  // Generates the final WhatsApp URL with the gathered data
  const getWhatsAppLink = () => {
    const message = `Hi SleekSites! I'd like to book a consultation. 
    Project: ${projectType}
    Current Site: ${url || "New Project"}
    Budget Range: ${budget}
    Let's talk!`;
    return `https://wa.me/254746577838?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all ${step >= i ? "bg-blue-600" : "bg-slate-100"}`}
            />
          ))}
        </div>

        {/* Step 1: Project Type */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
            <h1 className="text-4xl font-black text-slate-900 leading-tight">
              What are we solving today?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ChoiceCard
                active={projectType === "performance"}
                onClick={() => {
                  setProjectType("performance");
                  nextStep();
                }}
                icon={<Zap className="text-yellow-500" />}
                title="Speed & Performance"
                desc="My site is slow and losing conversions."
              />
              <ChoiceCard
                active={projectType === "full-build"}
                onClick={() => {
                  setProjectType("full-build");
                  nextStep();
                }}
                icon={<Rocket className="text-blue-600" />}
                title="New Custom Website"
                desc="I need a high-end Next.js architecture."
              />
              <ChoiceCard
                active={projectType === "seo"}
                onClick={() => {
                  setProjectType("seo");
                  nextStep();
                }}
                icon={<BarChart className="text-green-600" />}
                title="SEO Dominance"
                desc="I want to rank #1 on Google Kenya."
              />
              <ChoiceCard
                active={projectType === "not-sure"}
                onClick={() => {
                  setProjectType("not-sure");
                  nextStep();
                }}
                icon={<Shield className="text-slate-400" />}
                title="General Audit"
                desc="I need expert eyes on my current site."
              />
            </div>
          </div>
        )}

        {/* Step 2: Details & Qualification */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-4xl font-black text-slate-900">
              A bit of context...
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Current Website (Optional)
                </label>
                <input
                  type="url"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-all"
                  placeholder="https://mysite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Estimated Budget Range
                </label>
                <select
                  aria-label="Budget Range"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none appearance-none"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="">Select a range</option>
                  <option value="10k-50k">KES 10,000 - 50,000</option>
                  <option value="50k-100k">KES 50,000 - 100,000</option>
                  <option value="100k-250k">KES 100,000 - 250,000</option>
                  <option value="250k+">KES 250,000+</option>
                </select>
              </div>
              <button
                onClick={nextStep}
                disabled={!budget}
                className="w-full bg-slate-900 text-white p-5 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: The WhatsApp Finalizer */}
        {step === 3 && (
          <div className="text-center space-y-8 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} className="text-blue-600" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900">
                Ready to build.
              </h2>
              <p className="text-slate-500 text-lg max-w-md mx-auto">
                We've prepared your project brief. Click below to send it to our
                team on WhatsApp and start the discussion.
              </p>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105"
            >
              <MessageCircle fill="white" />
              Send Brief via WhatsApp
            </a>

            <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">
              Typical response time: &lt; 2 hours
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ChoiceCard({ title, desc, icon, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`p-6 text-left rounded-2xl border-2 transition-all ${active ? "border-blue-600 bg-blue-50" : "border-slate-100 hover:border-blue-200 bg-white"}`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 leading-tight">{desc}</p>
    </button>
  );
}

function BarChart({ className }: { className?: string }) {
  return <BarChart3 className={className} />;
}
