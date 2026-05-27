import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this. Pretend success to fool bots.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const message = data.message?.trim();
  const subject = data.subject?.trim() || "New message from givearoof.org";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }
  if (!emailRe.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // If email delivery isn't configured yet, accept the submission so the form
  // works end-to-end. Configure RESEND_API_KEY, CONTACT_TO_EMAIL, and
  // CONTACT_FROM_EMAIL in the environment to enable delivery.
  if (!apiKey || !to || !from) {
    console.warn(
      "[contact] Email delivery not configured; submission accepted but not sent.",
      { name, email, subject },
    );
    return NextResponse.json({ ok: true });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Give A Roof] ${subject}`,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend error:", res.status, detail);
      return NextResponse.json(
        { error: "We couldn't send your message. Please email us directly." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] Delivery failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
