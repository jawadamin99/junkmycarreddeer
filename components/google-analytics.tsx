"use client";

import { useEffect } from "react";
import Script from "next/script";

const measurementId = "G-YS4SZRJ859";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGoogleEvent(name: "form_submit" | "phone_call", parameters?: Record<string, unknown>) {
  window.gtag?.("event", name, parameters);
}

export function GoogleAnalytics() {
  useEffect(() => {
    const trackPhoneCall = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!link) return;

      trackGoogleEvent("phone_call", {
        phone_number: link.getAttribute("href")?.replace(/^tel:/, "") ?? "",
        link_text: link.textContent?.trim() ?? "",
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", trackPhoneCall);
    return () => document.removeEventListener("click", trackPhoneCall);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}

