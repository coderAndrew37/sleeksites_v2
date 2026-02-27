import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const myEmail = process.env.MY_EMAIL || "omolloandrew37@gmail.com";

  // 1. TOKEN VALIDATION
  if (!token) {
    return new NextResponse("Unauthorized: No access token provided.", {
      status: 401,
    });
  }

  try {
    // 2. DB LOOKUP & UPDATE (Find lead by token)
    const { data: lead, error: dbError } = await supabase
      .from("leads")
      .update({
        status: "downloaded",
        last_download_at: new Date().toISOString(),
      })
      .eq("download_token", token)
      .select("name, email")
      .single();

    if (dbError || !lead) {
      console.error("Token Validation Error:", dbError?.message);
      return new NextResponse("Invalid or expired download link.", {
        status: 403,
      });
    }

    // 3. INTERNAL ALERT (Notify you of the download)
    await resend.emails.send({
      from: "SleekSites System <system@contact.sleeksites.co.ke>",
      to: [myEmail],
      subject: `🔥 HOT LEAD: ${lead.name} is reading the Blueprint`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 2px solid #f97316; border-radius: 8px;">
          <h2 style="color: #f97316; margin-top: 0;">High Intent Signal Detected</h2>
          <p><strong>Lead Name:</strong> ${lead.name}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          <p>This lead just validated their token and started the download.</p>
        </div>
      `,
    });

    // 4. SERVE THE FILE
    const filePath = path.join(
      process.cwd(),
      "private_assets",
      "construction-digital-blueprint.pdf",
    );

    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="SleekSites_Construction_Blueprint_2026.pdf"',
      },
    });
  } catch (error) {
    console.error("Download Error:", error);
    return new NextResponse("Internal Server Error during file transmittal.", {
      status: 500,
    });
  }
}
