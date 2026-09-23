const siteUrl = "https://www.junkmycarreddeer.ca";

type JsonLdValue = Record<string, unknown> | readonly Record<string, unknown>[];

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function BreadcrumbSchema({
  current,
  path,
  parent,
}: {
  current: string;
  path: string;
  parent?: { name: string; path: string };
}) {
  const items = [
    { name: "Home", url: `${siteUrl}/` },
    ...(parent ? [{ name: parent.name, url: `${siteUrl}${parent.path}` }] : []),
    { name: current, url: `${siteUrl}${path}` },
  ];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: "Junk My Car Red Deer",
  alternateName: ["Junk My Car", "Junk My Car Red Deer AB"],
  inLanguage: "en-CA",
  publisher: { "@id": `${siteUrl}/#business` },
};

export const businessId = `${siteUrl}/#business`;

