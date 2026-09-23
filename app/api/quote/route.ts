import { randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { buildQuoteEmail, type QuoteLead } from "@/lib/quote-email";

export const runtime = "nodejs";

type QuotePayload = {
  name?: unknown;
  phone?: unknown;
  vehicle?: unknown;
  city?: unknown;
  email?: unknown;
  message?: unknown;
  sourcePage?: unknown;
  company?: unknown;
};

const cleanLine = (value: unknown, max = 500) =>
  typeof value === "string" ? value.replace(/[\r\n\0]+/g, " ").trim().slice(0, max) : "";

const cleanMessage = (value: unknown, max = 1000) =>
  typeof value === "string" ? value.replace(/\0/g, "").trim().slice(0, max) : "";

const env = (name: string) => process.env[name]?.trim() ?? "";

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  if (cleanLine(payload.company)) {
    return NextResponse.json({ message: "Thanks — we’ll be in touch shortly." });
  }

  const lead: QuoteLead = {
    name: cleanLine(payload.name, 100),
    phone: cleanLine(payload.phone, 40),
    vehicle: cleanLine(payload.vehicle, 150),
    city: cleanLine(payload.city, 100),
    email: cleanLine(payload.email, 150),
    message: cleanMessage(payload.message),
    sourcePage: cleanLine(payload.sourcePage, 250) || "/",
  };

  if (!lead.name || !lead.phone || !lead.vehicle || !lead.city) {
    return NextResponse.json(
      { message: "Name, phone, vehicle, and city are required." },
      { status: 422 },
    );
  }

  if (lead.phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json(
      { message: "Please enter a complete phone number." },
      { status: 422 },
    );
  }

  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address or leave it blank." },
      { status: 422 },
    );
  }

  const smtpHost = env("SMTP_HOST");
  const smtpPort = Number(env("SMTP_PORT"));
  const smtpUser = env("SMTP_USER");
  const smtpPass = env("SMTP_PASS");
  const contactTo = env("CONTACT_TO");
  const contactCc = env("CONTACT_CC");
  const contactFrom = env("CONTACT_FROM") || smtpUser;
  const missing = [
    ["SMTP_HOST", smtpHost], ["SMTP_PORT", smtpPort], ["SMTP_USER", smtpUser],
    ["SMTP_PASS", smtpPass], ["CONTACT_TO", contactTo], ["CONTACT_FROM", contactFrom],
  ].filter(([, value]) => !value).map(([name]) => name);

  if (missing.length) {
    console.error("[quote-email] Missing SMTP configuration:", missing.join(", "));
    return NextResponse.json(
      { message: "Email delivery is not configured yet. Please call (403) 427-0732." },
      { status: 503 },
    );
  }

  const reference = `JMC-${randomUUID().slice(0, 8).toUpperCase()}`;
  const submittedAt = new Date();
  const email = buildQuoteEmail(lead, reference, submittedAt);

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const info = await transporter.sendMail({
      from: `Junk My Car Red Deer <${contactFrom}>`,
      to: contactTo,
      cc: contactCc || undefined,
      replyTo: lead.email ? `${lead.name} <${lead.email}>` : undefined,
      subject: `[New Quote] ${lead.vehicle} — ${lead.city}`,
      text: email.text,
      html: email.html,
    });

    console.info("[quote-email] Sent", {
      reference,
      messageId: info.messageId,
      sourcePage: lead.sourcePage,
    });

    return NextResponse.json({
      message: "Thanks — we’ll call you with an offer shortly.",
      reference,
    });
  } catch (error) {
    console.error("[quote-email] Delivery failed", {
      reference,
      error: error instanceof Error ? error.message : "Unknown SMTP error",
    });
    return NextResponse.json(
      { message: "We couldn’t send that right now. Please call (403) 427-0732." },
      { status: 502 },
    );
  }
}
