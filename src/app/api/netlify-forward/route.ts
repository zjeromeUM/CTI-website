import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Forward incoming form submissions to Netlify Forms API.
 * Expects JSON body: { formName: string, fields: Record<string,string>, page?: string }
 * Requires NETLIFY_AUTH_TOKEN and NETLIFY_FORM_ID environment variables to be set.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formName, fields = {}, page } = body as {
      formName?: string;
      fields?: Record<string, string>;
      page?: string;
    };

    const token = process.env.NETLIFY_AUTH_TOKEN || "";
    const formId = process.env.NETLIFY_FORM_ID || "";

    if (!token || !formId) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Server is not configured to forward to Netlify. Set NETLIFY_AUTH_TOKEN and NETLIFY_FORM_ID.",
        },
        { status: 500 }
      );
    }

    // Build fields array as Netlify expects
    const fieldsArray = Object.entries(fields).map(([name, value]) => ({ name, value }));

    // Include form-name if provided
    if (formName && !fieldsArray.find((f) => f.name === "form-name")) {
      fieldsArray.push({ name: "form-name", value: String(formName) });
    }

    const payload: any = {
      // optional top-level name/email/message are sometimes indexed by Netlify; keep fields array primary
      fields: fieldsArray,
      context: {
        pageUrl: page || null,
        pageTitle: null,
      },
    };

    const res = await fetch(`https://api.netlify.com/api/v1/forms/${formId}/submissions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ ok: false, status: res.status, error: text }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as any)?.message || String(error) }, { status: 500 });
  }
}
