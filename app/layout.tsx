import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import heroTowPhoto from "@/assets/junk-pickup-free-towing.jpeg";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.junkmycarreddeer.ca"),
  applicationName: "Junk My Car Red Deer",
  title: "Cash for Cars Red Deer | Top Dollar, Free Towing & Same-Day Pickup",
  description:
    "Get cash for cars in Red Deer — running or not. We buy used, junk, scrap and damaged vehicles with free towing and same-day pickup. Call (403) 427-0732 for a fast offer.",
  alternates: { canonical: "/" },
  authors: [{ name: "Junk My Car Red Deer", url: "/about" }],
  creator: "Junk My Car Red Deer",
  publisher: "Junk My Car Red Deer",
  category: "Automotive",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    title: "Cash for Cars Red Deer | Top Dollar Paid, Free Towing",
    description:
      "Same-day cash offers for used, junk, scrap and non-running vehicles across Red Deer and Central Alberta. Free towing, cash on pickup.",
    url: "https://www.junkmycarreddeer.ca/",
    type: "website",
    siteName: "Junk My Car Red Deer",
    locale: "en_CA",
    images: [
      {
        url: heroTowPhoto.src,
        width: 1200,
        height: 630,
        alt: "Junk vehicle pickup in Red Deer, Alberta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cash for Cars Red Deer | Free Towing",
    description: "Same-day vehicle offers and free pickup across Red Deer and Central Alberta.",
    images: [heroTowPhoto.src],
  },
  appleWebApp: {
    capable: true,
    title: "Junk My Car",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body><SiteHeader />{children}</body>
    </html>
  );
}
