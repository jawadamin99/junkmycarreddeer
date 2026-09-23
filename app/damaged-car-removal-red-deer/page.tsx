import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, JsonLd } from "@/components/seo-schema";
import {
  AlertTriangle,
  ArrowRight,
  BadgeDollarSign,
  Check,
  ChevronRight,
  FileCheck2,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import damagedCarPhoto from "@/assets/collision-damaged-blue-car.jpeg";
import hailTruckPhoto from "@/assets/damaged-blue-ram-red-deer.jpeg";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import mapImage from "@/assets/red-deer-city-map.png";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Damaged & Write-Off Car Buyers Red Deer | Cash Offers",
  description:
    "We buy hail damaged, accident damaged and written-off vehicles in Red Deer. Salvage and non-repairable status accepted, free towing, cash on pickup.",
  alternates: { canonical: "https://www.junkmycarreddeer.ca/damaged-car-removal-red-deer" },
  openGraph: {
    title: "Damaged & Write-Off Car Buyers Red Deer | Cash Offers",
    description: "Cash offers for hail, collision, fire, flood and written-off vehicles, with free towing across Red Deer and Central Alberta.",
    url: "https://www.junkmycarreddeer.ca/damaged-car-removal-red-deer",
    type: "website",
    images: [{ url: damagedCarPhoto.src, width: 1200, height: 630, alt: "Damaged vehicle buyers in Red Deer" }],
  },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const statusCards = [
  ["Normal", "The standard designation. A vehicle can be dented, rusty or mechanically finished and still have normal status."],
  ["Salvage", "Written off but theoretically repairable. It can be rebuilt and inspected, though many are worth more as parts."],
  ["Non-repairable", "It cannot return to the road. It still has real parts and material value, and it is still sellable."],
] as const;

const valueRows = [
  ["Hail damage, mechanically sound, newer vehicle", "$2,000 – $8,000"],
  ["Hail damage, older vehicle", "$800 – $2,500"],
  ["Collision damage, repairable, late model", "$1,500 – $6,000"],
  ["Collision damage, older or severe", "$400 – $1,500"],
  ["Non-repairable status, complete vehicle", "$300 – $1,200"],
  ["Fire or flood damage", "$150 – $1,000"],
] as const;

const faqs = [
  ["Can I sell a car that’s been written off by insurance?", "Yes, provided you own it. If you took a buyback rather than surrendering the vehicle, have the insurer’s documentation available."],
  ["Do you buy salvage and non-repairable vehicles?", "Both. The status changes the value because the vehicle cannot be driven normally, but the parts and material are still worth money."],
  ["What’s my hail-damaged car worth?", "Often more than you expect, especially if it is newer and runs well. We price the mechanical condition and parts—not just the paint."],
  ["The car is at a body shop or tow yard. Can you get it?", "Usually. Give us the location and we can coordinate release directly, helping you avoid storage charges that grow every day."],
  ["Does it need to run?", "No. Most damaged vehicles we collect are non-running or immobile. We bring winches and flat decks."],
  ["Do I need to tell you about flood or fire history?", "Yes. It will not stop us buying the vehicle, but it affects the offer and helps us process it responsibly."],
] as const;

export default function DamagedCarRemovalPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Damaged Car Removal Red Deer",
    serviceType: "Damaged and written-off vehicle buying",
    url: "https://www.junkmycarreddeer.ca/damaged-car-removal-red-deer",
    provider: { "@type": "AutomotiveBusiness", name: "Junk My Car Red Deer", telephone: "+1-403-427-0732", address: { "@type": "PostalAddress", streetAddress: "4909 48 Street", addressLocality: "Red Deer", addressRegion: "AB", postalCode: "T4N 1S8", addressCountry: "CA" } },
    areaServed: "Red Deer and Central Alberta",
    offers: { "@type": "Offer", priceCurrency: "CAD", description: "Free towing and payment on pickup" },
  };

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <div className="utility-bar"><div className="shell utility-inner"><span><MapPin aria-hidden="true" /> Red Deer &amp; 80 km around</span><span className="utility-promise">Same-day pickup · Free towing · Cash on the spot</span><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div></div>
    <header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="Junk My Car Red Deer home"><Image src={logo} alt="Junk My Car Red Deer" priority sizes="(max-width: 600px) 150px, 190px" /></Link><nav className="desktop-nav" aria-label="Damaged vehicle navigation"><a href="#status">Vehicle status</a><a href="#value">What it is worth</a><a href="#process">Process</a><a href="#faq">FAQ</a></nav><a className="button button-header" href="#damage-quote">Get an offer <ArrowRight aria-hidden="true" /></a><details className="menu-button"><summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary><nav aria-label="Mobile navigation"><a href="#status">Vehicle status</a><a href="#value">What it is worth</a><a href="#process">Process</a><a href="#faq">FAQ</a></nav></details></div></header>

    <main id="main" className={styles.page}>
      <section className={styles.hero}><div className={styles.heroGrid}><div className={styles.heroCopy}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>Damaged Car Removal</span></nav><p className={styles.kicker}><AlertTriangle aria-hidden="true" /> Damage does not mean worthless</p><h1>We Buy Damaged and Written-Off Vehicles <span>in Red Deer</span></h1><p className={styles.heroLead}>Hail, collision, fire, flood, or an insurer&apos;s decision you didn&apos;t agree with. Whatever put your vehicle in this position, it still has a cash value—and it does not need to sit in your driveway while you work out what to do with it.</p><div className={styles.heroActions}><a className="button button-primary" href="#damage-quote">Get My Offer <ArrowRight aria-hidden="true" /></a><a className={styles.callButton} href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a></div><div className={styles.heroFacts}><div><strong>Hail write-offs welcome</strong><span>Mechanical condition still counts</span></div><div><strong>Free flat-deck pickup</strong><span>Cash paid before it leaves</span></div></div></div><div className={styles.heroVisual}><Image src={damagedCarPhoto} alt="Collision damaged vehicle waiting for removal in Red Deer" fill priority sizes="(max-width: 860px) 100vw, 48vw" /><div className={styles.heroOverlay} /><div className={styles.photoStamp}><ShieldCheck aria-hidden="true" /><span>Salvage accepted</span></div><div className={styles.photoCaption}><strong>Still has value.</strong><span>Even when insurance says write-off.</span></div></div></div><div className={styles.promiseBar}><span><Check aria-hidden="true" /> Hail and collision</span><span><Check aria-hidden="true" /> Salvage accepted</span><span><Check aria-hidden="true" /> Free towing</span><span><Check aria-hidden="true" /> Paid at pickup</span></div></section>

      <section id="damage-quote" className={styles.quoteSection}><div className={`shell ${styles.quotePanel}`}><QuoteForm /></div></section>

      <section className={styles.introSection}><div className={`shell ${styles.introGrid}`}><div><p className={styles.kicker}>After the adjuster&apos;s decision</p><h2>If You&apos;ve Just Had a Vehicle Written Off</h2></div><div className={styles.prose}><p>Something happens. You make a claim. An adjuster decides the repair cost is high enough that the insurer would rather pay you out than fix it. If you kept the vehicle as a buyback, you now own something you may not be able to insure normally, register or repair economically.</p><p>People sit on buyback vehicles for months. Every month, the value drops, the interior deteriorates and the property it occupies stays unavailable. There is usually no advantage to waiting.</p></div></div></section>

      <section id="status" className={styles.statusSection}><div className="shell"><div className={styles.sectionHeading}><p className={styles.kicker}>Alberta status, explained</p><h2>Three Labels. All Three Are Sellable.</h2><p>The status determines what can legally happen next—not whether the vehicle has a cash value.</p></div><div className={styles.statusGrid}>{statusCards.map(([title, text], index) => <article className={index === 1 ? styles.statusFeatured : ""} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#damage-quote">Ask what yours is worth <ArrowRight aria-hidden="true" /></a></article>)}</div></div></section>

      <section className={styles.hailSection}><div className={styles.hailImage}><Image src={hailTruckPhoto} alt="Hail damaged Ram truck in Red Deer" fill sizes="(max-width: 860px) 100vw, 45vw" /><div className={styles.imageLabel}><BadgeDollarSign aria-hidden="true" /><span>Cosmetic damage<strong>Can still be a strong offer</strong></span></div></div><div className={styles.hailCopy}><p className={styles.kicker}>Central Alberta speciality</p><h2>Hail Damage Is Often Better Than It Looks</h2><p>A hail-damaged vehicle can be mechanically perfect. The engine starts, the transmission works and it could drive to Calgary today—while the hood, roof and trunk are covered in dimples.</p><p>Paintless dent repair runs into thousands of dollars, so insurers write off otherwise healthy vehicles. These are some of the best vehicles we buy: we price the mechanical condition and parts, not the paint.</p><div className={styles.callout}><Wrench aria-hidden="true" /><p><strong>Collision is different, but not hopeless.</strong> A rear-ended sedan can still have a good engine and front half. A front-end hit may leave the rear axle, interior and tailgate intact.</p></div></div></section>

      <section id="value" className={styles.valueSection}><div className="shell"><div className={styles.valueGrid}><div><p className={styles.kicker}>Realistic ranges</p><h2>What Damaged Vehicles Are Worth</h2><p className={styles.muted}>Age, completeness, drivetrain condition and which panels survived move the number more than the damage label alone.</p><div className={styles.valueTable} role="table" aria-label="Typical damaged vehicle offers"><div className={styles.valueHead} role="row"><span>Situation</span><span>Typical offer</span></div>{valueRows.map(([situation, amount]) => <div className={styles.valueRow} role="row" key={situation}><span>{situation}</span><strong>{amount}</strong></div>)}</div></div><aside className={styles.valueAside}><FileCheck2 aria-hidden="true" /><span>The honest calculation</span><h3>Damage changes the number. It does not erase it.</h3><p>Tell us whether it runs, what status it carries and where it is sitting. We give one figure with towing already included.</p><a href="#damage-quote">Get my number <ArrowRight aria-hidden="true" /></a></aside></div></div></section>

      <section id="process" className={styles.processSection}><div className="shell"><div className={styles.sectionHeading}><p className={styles.kicker}>From claim to cash</p><h2>The Damaged Vehicle Process</h2><p>We make the awkward part simple, including vehicles at body shops, compounds and tow yards.</p></div><div className={styles.processGrid}><article><div><strong>01</strong><Phone aria-hidden="true" /></div><h3>Tell us what happened</h3><p>Share the year, make, model, damage, status and current location. Accuracy means an accurate offer.</p></article><article><div><strong>02</strong><BadgeDollarSign aria-hidden="true" /></div><h3>Get a same-day offer</h3><p>We price the surviving drivetrain, parts and material—not just the dents. Free towing is included.</p></article><article><div><strong>03</strong><Truck aria-hidden="true" /></div><h3>Get paid at pickup</h3><p>Bring photo ID, proof of ownership and insurer buyback documents if applicable. We handle the bill of sale.</p></article></div></div></section>

      <section className={styles.coverageSection}><div className={`shell ${styles.coverageGrid}`}><div className={styles.coverageCard}><Image src={mapImage} alt="Map of Red Deer and the surrounding free vehicle pickup area" fill sizes="(max-width: 900px) 100vw, 45vw" /><div className={styles.coverageShade} /><div className={styles.coverageMarker}><MapPin aria-hidden="true" /><strong>Red Deer + Central Alberta</strong><span>Homes, body shops, compounds, acreages and farms</span></div><div className={styles.coverageBadge}>Free pickup within 80 km</div></div><div><p className={styles.kicker}>We come to the vehicle</p><h2>From Collision Centres to County Acreages</h2><p className={styles.muted}>We collect damaged vehicles anywhere in Red Deer, including body shops, tow yards and insurance compounds. Rural hail write-offs and non-running vehicles are routine summer calls.</p><p className={styles.muted}>Free pickup extends to all eighteen Central Alberta towns, including Blackfalds, Lacombe, Sylvan Lake, Penhold, Innisfail, Ponoka, Rimbey, Olds and Stettler.</p></div></div></section>

      <section id="faq" className={styles.faqSection}><div className={`shell ${styles.faqGrid}`}><div className={styles.faqIntro}><p className={styles.kicker}>Straight answers</p><h2>Questions About Written-Off Cars</h2><p>Not sure what your insurer&apos;s paperwork means? Call us before storage costs keep growing.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div className={styles.faqList}>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span><ChevronRight aria-hidden="true" /></span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={styles.finalSection}><div className={`shell ${styles.finalCopy}`}><p className={styles.kicker}>One call, a real number</p><h2>Get It Off Your Property</h2><p>Whether it is hail-dented, collision damaged, burned, flooded or written off, we will tell you what it is worth and arrange the pickup.</p><div className={styles.finalActions}><a className={styles.finalCall} href={phoneHref}><Phone aria-hidden="true" /><span><small>Call a damaged-car buyer</small>{phoneDisplay}</span></a><a className={styles.finalButton} href="#damage-quote">Get a Free Offer <ArrowRight aria-hidden="true" /></a></div></div></section>
    </main>

    <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>Fair cash offers, free towing, and same-day pickup across Red Deer and Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/car-wreckers-red-deer">Car Wreckers</Link><Link href="/free-towing-red-deer">Free Towing</Link></div><div><h3>On this page</h3><a href="#status">Vehicle status</a><a href="#value">What it is worth</a><a href="#process">Process</a><a href="#faq">Questions</a></div><div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><a className="footer-quote" href="#damage-quote">Request an offer <ArrowRight aria-hidden="true" /></a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div></footer>
    <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#damage-quote"><BadgeDollarSign aria-hidden="true" /> Get offer</a></div>
    <BreadcrumbSchema current="Damaged Car Removal Red Deer" path="/damaged-car-removal-red-deer" />
    <JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
  </>;
}
