import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://junkmycarreddeer.ca"),
  title: "Cash for Cars Red Deer | Top Dollar, Free Towing & Same-Day Pickup",
  description:
    "Get cash for cars in Red Deer — running or not. We buy used, junk, scrap and damaged vehicles with free towing and same-day pickup. Call (403) 427-0732 for a fast offer.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cash for Cars Red Deer | Top Dollar Paid, Free Towing",
    description:
      "Same-day cash offers for used, junk, scrap and non-running vehicles across Red Deer and Central Alberta. Free towing, cash on pickup.",
    url: "/",
    type: "website",
    siteName: "Junk My Car Red Deer",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
