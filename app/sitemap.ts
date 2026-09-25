import type { MetadataRoute } from "next";

const siteUrl = "https://www.junkmycarreddeer.ca";
const lastModified = new Date("2026-09-24");

const servicePaths = [
  "/scrap-car-removal-red-deer", "/junk-car-removal-red-deer", "/sell-my-car-red-deer",
  "/car-wreckers-red-deer", "/damaged-car-removal-red-deer", "/free-towing-red-deer",
];
const supportPaths = ["/about", "/how-it-works", "/what-we-buy", "/faq", "/contact"];
const locationPaths = [
  "/cash-for-cars-calgary", "/cash-for-cars-sylvan-lake", "/cash-for-cars-lacombe", "/cash-for-cars-blackfalds",
  "/cash-for-cars-springbrook", "/cash-for-cars-penhold", "/cash-for-cars-innisfail",
  "/cash-for-cars-ponoka", "/cash-for-cars-olds", "/cash-for-cars-stettler",
  "/cash-for-cars-rimbey", "/cash-for-cars-eckville", "/cash-for-cars-bentley",
  "/cash-for-cars-clive", "/cash-for-cars-bowden", "/cash-for-cars-delburne",
  "/cash-for-cars-alix", "/cash-for-cars-spruce-view", "/cash-for-cars-elnora",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...servicePaths.map((path) => ({ url: `${siteUrl}${path}`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...supportPaths.map((path) => ({ url: `${siteUrl}${path}`, lastModified, changeFrequency: "yearly" as const, priority: path === "/contact" ? 0.8 : 0.7 })),
    ...locationPaths.map((path) => ({ url: `${siteUrl}${path}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
