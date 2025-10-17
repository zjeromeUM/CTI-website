import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure this route runs in the Node.js runtime
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    const host = (process.env.SMTP_HOST || "").trim();
    const port = Number((process.env.SMTP_PORT || "587").trim());
    const user = (process.env.SMTP_USER || "").trim();
    const pass = process.env.SMTP_PASS ?? ""; // don't trim passwords

    // Validate required env vars to avoid falling back to localhost
    const missing: string[] = [];
    if (!host) missing.push("SMTP_HOST");
    if (!port) missing.push("SMTP_PORT");
    if (!user) missing.push("SMTP_USER");
    if (!pass) missing.push("SMTP_PASS");
    if (missing.length > 0) {
      console.error("Missing SMTP env vars:", missing.join(", "));
      return NextResponse.json(
        {
          ok: false,
          error:
            `Server is missing required SMTP configuration: ${missing.join(", ")}. If you just updated .env.local, restart the dev server.`,
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for 587/STARTTLS
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      replyTo: email,
      to: "zjerome@traffic-intelligence.com",
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
