import { NextResponse } from "next/server";

type QuotePayload = {
  name?: unknown;
  phone?: unknown;
  vehicle?: unknown;
  city?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

const clean = (value: unknown, max = 500) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  if (clean(payload.company)) {
    return NextResponse.json({ message: "Thanks — we’ll be in touch shortly." });
  }

  const lead = {
    name: clean(payload.name, 100),
    phone: clean(payload.phone, 40),
    vehicle: clean(payload.vehicle, 150),
    city: clean(payload.city, 100),
    email: clean(payload.email, 150),
    message: clean(payload.message, 1000),
  };

  if (!lead.name || !lead.phone || !lead.vehicle || !lead.city) {
    return NextResponse.json(
      { message: "Name, phone, vehicle, and city are required." },
      { status: 422 },
    );
  }

  const phoneDigits = lead.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
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

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.JUNKMYCAR_LEAD_TO ?? "leads@junkmycarreddeer.ca";
  const sender = process.env.JUNKMYCAR_LEAD_FROM ?? "Junk My Car Red Deer <website@junkmycarreddeer.ca>";

  if (!apiKey) {
    console.info("[quote-preview]", { ...lead, recipient });
    return NextResponse.json({
      message: "Thanks — your request has been received. We’ll call you shortly.",
      preview: true,
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: recipient,
      reply_to: lead.email || undefined,
      subject: `Cash offer request: ${lead.vehicle} in ${lead.city}`,
      text: [
        `Name: ${lead.name}`,
        `Phone: ${lead.phone}`,
        `Email: ${lead.email || "Not provided"}`,
        `Vehicle: ${lead.vehicle}`,
        `City: ${lead.city}`,
        `Message: ${lead.message || "None"}`,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "We couldn’t send that right now. Please call (403) 427-0732." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thanks — we’ll call you with an offer shortly." });
}
