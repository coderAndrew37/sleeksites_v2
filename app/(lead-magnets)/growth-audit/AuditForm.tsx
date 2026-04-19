"use client";

import { sendAuditEmail } from "@/lib/actions/send-audit-emails";
import { useActionState } from "react";

export default function AuditForm() {
  const [state, formAction, isPending] = useActionState(sendAuditEmail, null);

  if (state?.success) {
    return (
      <div className="text-center p-8 border border-[#c8a96e] rounded-lg">
        <h3 className="text-xl font-bold mb-2">Request Received!</h3>
        <p className="text-gray-400 mb-6">I'm reviewing your setup. Let's talk strategy.</p>
        <a href="https://wa.me/254746577838" className="inline-block bg-[#25D366] text-black font-bold py-3 px-6 rounded">
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <input name="name" placeholder="Your Name" className="w-full p-3 bg-[#1a1a1a] border border-white/20 rounded text-white" />
        {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>}
      </div>

      <div>
        <input name="business" placeholder="Business Name" className="w-full p-3 bg-[#1a1a1a] border border-white/20 rounded text-white" />
        {state?.errors?.business && <p className="text-red-500 text-xs mt-1">{state.errors.business[0]}</p>}
      </div>

      <div>
        <input name="phone" type="tel" placeholder="Phone Number" className="w-full p-3 bg-[#1a1a1a] border border-white/20 rounded text-white" />
        {state?.errors?.phone && <p className="text-red-500 text-xs mt-1">{state.errors.phone[0]}</p>}
      </div>

      <input name="url" placeholder="Website URL (Optional)" className="w-full p-3 bg-[#1a1a1a] border border-white/20 rounded text-white" />

      <button disabled={isPending} className="w-full bg-[#c8a96e] text-black font-bold py-4 rounded hover:bg-white transition">
        {isPending ? "Processing..." : "Get My Performance Audit"}
      </button>
    </form>
  );
}