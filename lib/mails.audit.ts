// ─────────────────────────────────────────────────────────────────────────────
// ADD THIS BLOCK TO YOUR EXISTING lib/mails.ts
// Do not replace the file — paste below your existing sendBlueprintEmail
// ─────────────────────────────────────────────────────────────────────────────

import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export interface AuditLeadPayload {
  name: string;
  businessName: string;
  phone: string;
  websiteUrl?: string;
}

export const sendAuditEmail = async ({
  name,
  businessName,
  phone,
  websiteUrl,
}: AuditLeadPayload): Promise<{ success: boolean; error?: string }> => {
  const isProd     = process.env.NODE_ENV === "production";
  const myEmail    = process.env.MY_EMAIL || "omolloandrew37@gmail.com";
  const myPhone    = process.env.MY_WHATSAPP || "254746577838";
  const baseUrl    = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const fromAddress = isProd
    ? "Andrew | SleekSites <andrew@contact.sleeksites.co.ke>"
    : "SleekSites Testing <onboarding@resend.dev>";

  try {
    // 1. Upsert lead into Supabase
    const { data: leadData, error: dbError } = await supabase
      .from("audit_leads")
      .upsert(
        {
          name,
          business_name: businessName,
          phone,
          website_url: websiteUrl || null,
          requested_at: new Date().toISOString(),
        },
        { onConflict: "phone" },
      )
      .select("email")
      .single();

    if (dbError) throw new Error(`Supabase error: ${dbError.message}`);

    const recipientEmail: string | null = leadData?.email ?? null;

    // 2. Resend audience sync (optional — only fires if email is known)
    if (recipientEmail && process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email: recipientEmail,
        firstName: name,
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      }).catch(() => {});
    }

    // 3. WhatsApp pre-fill link for the success screen and internal alert
    const waText = encodeURIComponent(
      `Hi Andrew! I just requested a SleekSites Performance Audit.\n\nBusiness: ${businessName}\nPhone: ${phone}${websiteUrl ? "\nWebsite: " + websiteUrl : ""}`,
    );
    const waLink = `https://wa.me/${myPhone}?text=${waText}`;

    // 4. Lead confirmation email (only if we have their email address)
    const leadEmailPromise = recipientEmail
      ? resend.emails.send({
          from: fromAddress,
          to: [isProd ? recipientEmail : (process.env.TEST_RECEIPENT_EMAIL || myEmail)],
          replyTo: myEmail,
          subject: "Your SleekSites Performance Audit — Confirmed",
          html: buildConfirmationEmail({ name, businessName, websiteUrl, waLink }),
        })
      : Promise.resolve(null);

    // 5. Internal alert — always fires
    const internalAlertPromise = resend.emails.send({
      from: isProd
        ? "SleekSites HQ <system@contact.sleeksites.co.ke>"
        : fromAddress,
      to: [myEmail],
      subject: `🔥 [AUDIT REQUEST] ${name} — ${businessName}`,
      html: buildInternalAlert({ name, businessName, phone, websiteUrl }),
    });

    await Promise.all([leadEmailPromise, internalAlertPromise]);

    return { success: true };
  } catch (err: any) {
    console.error("sendAuditEmail error:", err);
    return { success: false, error: err.message };
  }
};

// ── Email templates ──────────────────────────────────────────────────────────

function buildConfirmationEmail({
  name,
  businessName,
  websiteUrl,
  waLink,
}: {
  name: string;
  businessName: string;
  websiteUrl?: string;
  waLink: string;
}) {
  const auditItems = [
    "Conversion rate & CTA placement analysis",
    "Tracking & pixel installation audit",
    "Lead capture funnel assessment",
    "PageSpeed & Core Web Vitals",
    "Top competitor gap analysis",
    "Specific revenue-recovery recommendations",
  ];

  return `
<div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;background:#ffffff;">

  <div style="background:#0a0f1e;padding:28px 32px;border-bottom:3px solid #2563eb;">
    <p style="margin:0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.25em;color:#3b82f6;">SleekSites · Growth Engine Division</p>
    <h2 style="margin:8px 0 0;font-size:22px;font-weight:900;letter-spacing:-0.03em;color:#ffffff;">
      Audit Request Confirmed.
    </h2>
  </div>

  <div style="padding:36px 32px;background:#fff;">
    <p style="font-size:15px;color:#334155;margin-bottom:16px;">Hi ${name},</p>
    <p style="font-size:15px;color:#475569;line-height:1.7;margin-bottom:24px;">
      Your Digital Performance Audit for <strong style="color:#0f172a;">${businessName}</strong> is now in the queue.
      ${
        websiteUrl
          ? `I'm pulling up <strong style="color:#2563eb;">${websiteUrl}</strong> right now and running it through our full diagnostic stack.`
          : "Since you don't have a website yet, I'll be benchmarking your top 2 competitors and showing you exactly what they're doing that you're not."
      }
    </p>

    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:24px;margin:28px 0;">
      <p style="margin:0 0 12px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#64748b;">Your audit will cover:</p>
      ${auditItems
        .map(
          (item) => `
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
          <span style="color:#2563eb;flex-shrink:0;font-weight:700;">→</span>
          <span style="font-size:13px;color:#475569;">${item}</span>
        </div>`,
        )
        .join("")}
    </div>

    <p style="font-size:14px;color:#64748b;margin-bottom:28px;line-height:1.7;">
      <strong style="color:#0f172a;">Turnaround:</strong> 48 hours. But let's get ahead of it — open WhatsApp and we can discuss the quick wins immediately.
    </p>

    <a href="${waLink}"
      style="display:inline-block;background:#25d366;color:#ffffff;padding:14px 28px;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;border-radius:4px;">
      Chat with Andrew on WhatsApp →
    </a>
  </div>

  <div style="background:#f8fafc;padding:20px 32px;text-align:center;border-top:1px solid #e2e8f0;">
    <p style="font-size:11px;color:#94a3b8;margin:0;">
      SleekSites · Kilimani, Ngong Rd · Nairobi, Kenya
    </p>
  </div>
</div>`;
}

function buildInternalAlert({
  name,
  businessName,
  phone,
  websiteUrl,
}: AuditLeadPayload) {
  const cleanPhone = phone.replace(/\D/g, "");
  const followUpText = encodeURIComponent(
    `Hi ${name}! This is Andrew from SleekSites. Your performance audit is underway — I'll have it ready within 48 hours. Do you have 10 minutes for a quick call to discuss the priority fixes?`,
  );

  return `
<div style="font-family:sans-serif;padding:24px;background:#fff;border:2px solid #2563eb;border-radius:8px;max-width:500px;">
  <h2 style="color:#2563eb;margin-top:0;">🔥 New Audit Request</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Business:</strong> ${businessName}</p>
  <p><strong>Phone / WhatsApp:</strong>
    <a href="https://wa.me/${cleanPhone}">${phone}</a>
  </p>
  ${
    websiteUrl
      ? `<p><strong>Website:</strong> <a href="${websiteUrl}">${websiteUrl}</a></p>`
      : "<p><strong>Website:</strong> None — run competitor audit</p>"
  }
  <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb;">
  <a href="https://wa.me/${cleanPhone}?text=${followUpText}"
    style="display:inline-block;background:#25d366;color:#fff;padding:12px 24px;text-decoration:none;font-weight:700;border-radius:4px;">
    Message ${name} on WhatsApp →
  </a>
</div>`;
}