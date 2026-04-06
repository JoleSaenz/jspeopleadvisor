import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(apiKey);
}

interface ContactPayload {
  name: string;
  email: string;
  type: string;
  message: string;
}

const TYPE_LABELS: Record<string, string> = {
  cv: "CV Optimization",
  career: "Career Coaching",
  interview: "Interview Preparation",
  transition: "Career Transition Guidance",
  engagement: "Engagement & Climate Surveys",
  analytics: "Data Analysis & Action Plans",
  leadership: "Leadership & Team Development",
  talent: "Talent Management & Development",
  "org-design": "Organizational Design",
  "people-relation": "People Relationship",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, type, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_EMAIL;
    if (!to) {
      console.error("CONTACT_EMAIL environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const serviceType = TYPE_LABELS[type] || type || "Not specified";

    const resend = getResendClient();

    await resend.emails.send({
      from: `HiveForward Contact <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to,
      replyTo: email,
      subject: `New contact from ${name} — ${serviceType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 140px;">Name</td>
              <td style="padding: 8px 12px; color: #4b5563;">${name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 12px; color: #4b5563;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Service</td>
              <td style="padding: 8px 12px; color: #4b5563;">${serviceType}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; color: #4b5563; white-space: pre-wrap;">${message || "—"}</td>
            </tr>
          </table>
          <hr style="border: 1px solid #e5e7eb; margin-top: 24px;" />
          <p style="color: #9ca3af; font-size: 12px; margin-top: 12px;">
            Sent from the HiveForward website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
