"use client";
import Button from "@/app/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  ArrowLeft,
  Building2,
  Clock,
  MessageCircle,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

// 1. Professional Validation Schema
const auditSchema = z.object({
  name: z
    .string()
    .min(3, "Please provide your full legal or professional name."),
  company: z
    .string()
    .min(2, "Registered company name is required for a site audit."),
});

type AuditFormData = z.infer<typeof auditSchema>;

export default function AuditContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = (data: AuditFormData) => {
    const phoneNumber = "254746577838"; // Your Professional WhatsApp Number
    const message = `Hello Andrew, this is ${data.name} from ${data.company}. I have reviewed the Construction Digital Credibility Blueprint and would like to request a formal Digital Audit for my firm.`;

    const encodedMessage = encodeURIComponent(message);
    ((window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`),
      `_blank`);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans antialiased text-slate-900">
      {/* Navigation */}
      <Link
        href="/construction-blueprint"
        className="absolute top-8 left-8 text-slate-400 hover:text-blue-600 flex items-center gap-2 text-xs font-black tracking-widest transition-colors"
      >
        <ArrowLeft size={14} /> RETURN TO BLUEPRINT
      </Link>

      <div className="max-w-xl w-full">
        {/* Authority Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-[10px] font-black mb-6 uppercase tracking-[0.25em] border border-blue-200">
            Official Audit Request
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">
            Scale Your{" "}
            <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">
              Market Authority.
            </span>
          </h1>
          <p className="text-slate-500 font-medium max-w-sm mx-auto">
            Submit your credentials below to schedule a 1-on-1 Digital
            Credibility Audit via secure correspondence.
          </p>
        </div>

        {/* Professional Validated Form */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-200 relative overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Full Name Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                <User size={12} className="text-blue-600" /> Executive Full Name
              </label>
              <input
                {...register("name")}
                placeholder="e.g. Director James Kamau"
                className={`w-full bg-slate-50 border rounded-xl px-5 py-4 focus:ring-4 outline-none transition-all font-semibold ${
                  errors.name
                    ? "border-red-500 focus:ring-red-50"
                    : "border-slate-200 focus:ring-blue-100"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-[11px] font-bold flex items-center gap-1.5 mt-2">
                  <AlertCircle size={14} /> {errors.name.message}
                </p>
              )}
            </div>

            {/* Company Name Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                <Building2 size={12} className="text-blue-600" /> Registered
                Company Name
              </label>
              <input
                {...register("company")}
                placeholder="e.g. Apex Engineering Ltd"
                className={`w-full bg-slate-50 border rounded-xl px-5 py-4 focus:ring-4 outline-none transition-all font-semibold ${
                  errors.company
                    ? "border-red-500 focus:ring-red-50"
                    : "border-slate-200 focus:ring-blue-100"
                }`}
              />
              {errors.company && (
                <p className="text-red-500 text-[11px] font-bold flex items-center gap-1.5 mt-2">
                  <AlertCircle size={14} /> {errors.company.message}
                </p>
              )}
            </div>

            {/* Action Section */}
            <div className="pt-4">
              <Button
                variant="primary"
                type="submit"
                className="w-full py-5 rounded-xl !bg-slate-900 hover:!bg-blue-600 !text-white flex items-center justify-center gap-3 text-lg font-black transition-all hover:shadow-2xl hover:shadow-blue-200 active:scale-[0.98]"
              >
                <MessageCircle size={22} className="text-blue-400" />
                Initiate Secure Audit
              </Button>

              <div className="flex flex-col items-center gap-3 mt-6">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={14} className="text-blue-600" /> Data
                  handled with strict confidentiality
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Footer Authority Markers */}
        <div className="mt-12 flex justify-center items-center gap-10 opacity-30 grayscale contrast-125">
          <div className="flex items-center gap-2 font-black text-[10px] tracking-widest">
            <Clock size={14} /> 24HR RESPONSE
          </div>
          <div className="h-1 w-1 rounded-full bg-slate-400" />
          <div className="flex items-center gap-2 font-black text-[10px] tracking-widest">
            <ShieldCheck size={14} /> VERIFIED PARTNER
          </div>
        </div>
      </div>
    </main>
  );
}
