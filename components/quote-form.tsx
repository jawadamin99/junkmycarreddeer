"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { trackGoogleEvent } from "@/components/google-analytics";

type FormState = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const payload = {
      ...Object.fromEntries(new FormData(form)),
      sourcePage: window.location.pathname,
      pageUrl: window.location.href,
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to send your request.");

      setState("success");
      setMessage(result.message ?? "Thanks — we’ll call you with an offer shortly.");
      trackGoogleEvent("form_submit", {
        form_name: "cash_offer_quote",
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please call us instead.");
    }
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" />
        <div>
          <h3>We’ve got your details.</h3>
          <p>{message}</p>
        </div>
        <button type="button" className="text-button" onClick={() => setState("idle")}>
          Send another vehicle
        </button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="eyebrow">Free, no-obligation quote</span>
        <h2>What’s your car worth?</h2>
        <p>Two minutes now. A real number today.</p>
      </div>

      <div className="form-grid">
        <label>
          <span>Name <b className="required-marker" aria-hidden="true">*</b></span>
          <input name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Phone <b className="required-marker" aria-hidden="true">*</b></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="(403) 555-0123" required />
        </label>
        <label className="field-wide">
          <span>Year / Make / Model <b className="required-marker" aria-hidden="true">*</b></span>
          <input name="vehicle" placeholder="e.g. 2013 Ford F-150" required />
        </label>
        <label>
          <span>City or town <b className="required-marker" aria-hidden="true">*</b></span>
          <input name="city" autoComplete="address-level2" placeholder="e.g. Red Deer" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@email.com" />
        </label>
        <label className="field-wide">
          <span>Anything else we should know?</span>
          <textarea name="message" rows={2} placeholder="Condition, damage, pickup timing…" />
        </label>
        <label className="honeypot" aria-hidden="true">
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-actions">
        <p className="form-privacy">We never share your information. A real person usually replies within a few hours.</p>
        <button className="button button-primary button-full" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? <LoaderCircle className="spin" aria-hidden="true" /> : null}
          {state === "submitting" ? "Sending…" : "Get My Cash Offer"}
          {state !== "submitting" ? <ArrowRight aria-hidden="true" /> : null}
        </button>
      </div>
      {state === "error" ? <p className="form-error" role="alert">{message}</p> : null}
    </form>
  );
}
