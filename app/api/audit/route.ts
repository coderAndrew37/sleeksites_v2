import { NextRequest, NextResponse } from "next/server";
import { sendAuditEmail } from "@/lib/mails.audit";
import { z } from "zod";

const schema = z.object({
  name:         z.string().min(2).max(80),
  businessName: z.string().min(2).max(120),
  phone:        z.string().min(9).max(20),
  websiteUrl:   z.string().url().optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data.", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const { name, businessName, phone, websiteUrl } = parsed.data;

    const result = await sendAuditEmail({
      name,
      businessName,
      phone,
      websiteUrl: websiteUrl || undefined,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("/api/audit error:", err);
    return NextResponse.json({ success: false, error: "Server error." }, { status: 500 });
  }
}