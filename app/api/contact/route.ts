import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please enter your email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please enter your message." },
        { status: 400 }
      );
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 100);
    const cleanMessage = message.trim().slice(0, 5000);
    const recipientEmail = process.env.CONTACT_EMAIL || "krostan68@yahoo.com";

    // 2. Transactional Email Delivery (Supports Resend, SendGrid, or fallback)
    const resendApiKey = process.env.RESEND_API_KEY;
    const sendgridApiKey = process.env.SENDGRID_API_KEY;

    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Kristyn Rostan Portfolio <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: cleanEmail,
          subject: `Portfolio Inquiry from ${cleanName}`,
          text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #172033; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E2E4E9; border-radius: 8px;">
              <h2 style="color: #0E6666; margin-top: 0;">New Portfolio Contact Message</h2>
              <p><strong>From:</strong> ${cleanName} &lt;<a href="mailto:${cleanEmail}">${cleanEmail}</a>&gt;</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT</p>
              <hr style="border: 0; border-top: 1px solid #E2E4E9; margin: 20px 0;" />
              <h3 style="color: #172033; margin-bottom: 8px;">Message:</h3>
              <p style="white-space: pre-wrap; background: #FAF9F6; padding: 15px; border-radius: 6px; border: 1px solid #E7E9ED;">${cleanMessage}</p>
              <hr style="border: 0; border-top: 1px solid #E2E4E9; margin: 20px 0;" />
              <p style="font-size: 12px; color: #64748B;">This message was submitted via the contact form on your executive portfolio website.</p>
            </div>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json().catch(() => ({}));
        console.error("Resend API Error:", errorData);
        return NextResponse.json(
          { success: false, error: "Failed to send message via email service. Please email krostan68@yahoo.com directly." },
          { status: 500 }
        );
      }
    } else if (sendgridApiKey) {
      const sendgridRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sendgridApiKey}`,
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: recipientEmail }],
              subject: `Portfolio Inquiry from ${cleanName}`,
            },
          ],
          from: { email: process.env.SENDGRID_FROM_EMAIL || "contact@kristynrostan.com", name: "Kristyn Rostan Portfolio" },
          reply_to: { email: cleanEmail, name: cleanName },
          content: [
            {
              type: "text/plain",
              value: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
            },
          ],
        }),
      });

      if (!sendgridRes.ok) {
        const errorData = await sendgridRes.text().catch(() => "");
        console.error("SendGrid API Error:", errorData);
        return NextResponse.json(
          { success: false, error: "Failed to send message via email service. Please email krostan68@yahoo.com directly." },
          { status: 500 }
        );
      }
    } else {
      // In development or when API key is not yet set in Vercel
      console.log("[Portfolio Form Submission Received]");
      console.log(`From: ${cleanName} (${cleanEmail})`);
      console.log(`To: ${recipientEmail}`);
      console.log(`Message: ${cleanMessage}`);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Your message has been sent.",
    });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while sending your message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
