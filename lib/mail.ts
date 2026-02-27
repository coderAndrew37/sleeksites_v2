import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendBlueprintEmail = async (email: string, name: string) => {
  const isProd = process.env.NODE_ENV === "development";
  const myEmail = "omolloandrew37@gmail.com"; // For internal alerts and reply-to

  // Dynamic Sender Configuration
  const fromAddress = isProd
    ? "Andrew | SleekSites <andrew@contact.sleeksites.co.ke>"
    : "SleekSites Testing <onboarding@resend.dev>";

  // Sandbox safety: Resend only sends to verified emails in dev mode
  const recipient = isProd ? email : process.env.TEST_RECEIPENT_EMAIL || email;

  try {
    // 1. THE LEAD EMAIL (World-Class Transmittal Style)
    const leadEmailPromise = resend.emails.send({
      from: fromAddress,
      to: [recipient],
      replyTo: myEmail,
      subject:
        "TRANSMITTAL: The 2026 Construction Digital Credibility Blueprint",
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #0f172a; max-width: 600px; margin: 0 auto; line-height: 1.5; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 30px; color: #ffffff;">
            <h2 style="margin: 0; letter-spacing: -1px; font-weight: 900; text-transform: uppercase; font-size: 20px;">SleekSites<span style="color: #3b82f6;">.</span></h2>
            <p style="margin: 5px 0 0 0; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; color: #94a3b8;">Ref: Engineering Digital Systems / 2026-BCB</p>
          </div>

          <div style="padding: 40px 30px;">
            <h1 style="font-size: 28px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 20px; color: #1e293b;">
              Secure Document Transmittal
            </h1>

            <p style="margin-bottom: 24px; font-size: 16px;">
              Hello ${name},
            </p>

            <p style="margin-bottom: 24px; font-size: 16px;">
              Your request for the <strong>Construction Digital Credibility Blueprint</strong> has been processed. In an industry where trust is the primary currency, this document outlines the architecture required to transition your firm from a "local contractor" to a <strong>Tier 1 digital authority.</strong>
            </p>

            <div style="background-color: #f1f5f9; border-radius: 12px; padding: 24px; margin: 32px 0; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Authorized Access Only:</p>
              <p style="margin: 0 0 20px 0; font-weight: 800; font-size: 18px; color: #0f172a;">2026_Digital_Credibility_Blueprint.pdf</p>
              <a href="https://sleeksites.co.ke/construction-blueprint.pdf" 
                 style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 800; font-size: 15px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">
                Access the Blueprint →
              </a>
            </div>

            <p style="margin-bottom: 24px; font-size: 15px; color: #334155;">
              <strong>Key Directive:</strong> Pay close attention to <em>Section 3: The Gmail Trap</em>. For firms handling 20M+ projects, professional domain infrastructure is no longer optional—it is a procurement requirement.
            </p>

            <div style="margin-top: 40px; padding-top: 30px; border-top: 2px dashed #e2e8f0;">
              <p style="font-size: 14px; color: #64748b; margin: 0;">
                Respectfully,<br /><br />
                <strong style="color: #0f172a; font-size: 16px;">Andrew</strong><br />
                Managing Partner, SleekSites
              </p>
            </div>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px 30px; text-align: center;">
            <p style="font-size: 11px; color: #94a3b8; margin: 0;">
              © 2026 SleekSites Engineering Digital Systems. This transmittal is confidential.
            </p>
          </div>
        </div>
      `,
    });

    // 2. THE GMAIL NOTIFICATION (Internal "Money Pings")
    const internalAlertPromise = resend.emails.send({
      from: isProd
        ? "SleekSites HQ <system@contact.sleeksites.co.ke>"
        : fromAddress,
      to: [myEmail],
      subject: `⚡ [NEW LEAD] ${name} just downloaded the Blueprint`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; background: #fff; border: 2px solid #2563eb; border-radius: 8px;">
          <h2 style="color: #2563eb; margin-top: 0;">New Construction Lead</h2>
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Status:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><span style="background: #dcfce7; color: #166534; padding: 2px 8px; border-radius: 10px; font-size: 12px;">Transmittal Sent</span></td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 13px; color: #666;">
            Action: Check if they click the Audit link on the Thank You page.
          </p>
        </div>
      `,
    });

    // Fire both tasks simultaneously for speed
    const [leadResult, alertResult] = await Promise.all([
      leadEmailPromise,
      internalAlertPromise,
    ]);

    if (leadResult.error) {
      console.error("Resend Error Detail:", leadResult.error);
      return { success: false, error: leadResult.error.message };
    }

    return { success: true, data: leadResult.data };
  } catch (err) {
    console.error("Internal Server Error:", err);
    return {
      success: false,
      error: "Critical failure in email delivery pipeline.",
    };
  }
};
