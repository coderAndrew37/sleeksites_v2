"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const AuditSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  business: z.string().min(2, "Business name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  url: z.string().optional(),
});

export async function sendAuditEmail(prevState: any, formData: FormData) {
  const result = AuditSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    // Return the errors to the component
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  try {
    await resend.emails.send({
      from: "SleekSites Audit <onboarding@resend.dev>",
      to: "your-email@sleeksites.co.ke",
      subject: `New Lead: ${result.data.business}`,
      text: `Name: ${result.data.name}\nBusiness: ${result.data.business}\nPhone: ${result.data.phone}\nWebsite: ${result.data.url || "N/A"}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false, message: "Server error" };
  }
}