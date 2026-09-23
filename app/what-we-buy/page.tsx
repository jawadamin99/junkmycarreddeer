import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, JsonLd } from "@/components/seo-schema";
import {
  AlertTriangle,
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  Car,
  Check,
  ChevronRight,
  CircleOff,
  Flame,
  Gauge,
  KeyRound,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";

import damagedPhoto from "@/assets/damaged-blue-ram-red-deer.jpeg";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import truckPhoto from "@/assets/older-ford-f150-acreage.jpeg";
import vehiclePhoto from "@/assets/used-suv-red-deer.jpeg";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "What We Buy | Any Vehicle, Any Condition, Red Deer",
  description:
    "Every vehicle type and condition we buy in Red Deer and Central Alberta — running, wrecked, written off, stripped or seized. Plus the few things we can't take.",
  alternates: { canonical: "https://www.junkmycarreddeer.ca/what-we-buy" },
  openGraph: {
    title: "What We Buy | Any Vehicle, Any Condition, Red Deer",
    description: "Cars, trucks, SUVs, vans and fleet vehicles in nearly any condition—with cash offers and free pickup.",
    url: "https://www.junkmycarreddeer.ca/what-we-buy",
    type: "website",
    images: [{ url: vehiclePhoto.src, width: 1200, height: 630, alt: "Vehicles bought for cash in Red Deer" }],
  },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const vehicleTypes = [
  { icon: Car, title: "Cars", list: "Sedans · Hatchbacks · Coupes · Wagons · Convertibles", text: "Domestic and import, any make and model year. Older Japanese and Korean vehicles are welcome too—the parts demand is often stronger than owners expect." },
  { icon: Truck, title: "Trucks", list: "Half-tons · 3/4-tons · One-tons · Duallies · Gas · Diesel", text: "Farm, grain, ranch and service trucks, welding rigs and oilfield units. Weight creates a higher floor, while local demand keeps transfer cases, differentials, boxes, tailgates and diesel parts moving." },
  { icon: KeyRound, title: "SUVs, Crossovers & Vans", list: "Full-size SUVs · Crossovers · Minivans · Cargo vans · Camper vans", text: "From compact crossovers to full-size passenger and work vans, running or not." },
  { icon: BriefcaseBusiness, title: "Commercial & Fleet", list: "Work trucks · Box trucks · Service vehicles · Company cars", text: "Single units or an entire group. Multiple vehicles in one location improve collection efficiency, and the offer reflects it." },
] as const;

const conditions = [
  { icon: Wrench, title: "Mechanical failure", text: "No-starts, seized engines, head gaskets, cracked blocks, failed transmissions, transfer cases, differentials and electrical faults nobody can trace. Non-runners are most of what we buy." },
  { icon: Flame, title: "Damage", text: "Hail, collision, rollover, fire, flood, vandalism and theft recovery. Salvage and non-repairable insurance write-offs still retain parts and material value." },
  { icon: Gauge, title: "Age and wear", text: "High kilometres, rusted rockers or frames, failed inspections and repair lists longer than the vehicle’s value. We price for weight and parts rather than remaining road life." },
  { icon: AlertTriangle, title: "Incomplete vehicles", text: "Removed engines or transmissions, missing wheels, doors, glass, seats or entire front clips. Tell us what is missing and we price what is actually there." },
  { icon: Warehouse, title: "Long-sitting vehicles", text: "Cars parked for five, ten or thirty years with seized brakes, flat tires, rodent damage or vegetation growing through them. Always worth something; always removed free." },
] as const;

const situations = [
  "Estate vehicles or cars registered to someone who has passed away",
  "Vehicles that came with a property you purchased",
  "Tenant vehicles abandoned on a rental property",
  "Repossessions and lease returns",
  "Vehicles carrying finance—lien payouts are routine",
  "Insurance buybacks after a settlement",
  "Cars at body shops, compounds or impounds",
  "Vehicles registered outside Alberta",
  "Farm corporation and company-registered units",
  "Whole yards cleared in one or two visits",
] as const;

const exclusions = [
  ["Anything you can’t show ownership of", "Photo ID matching the registered owner and proof of ownership—or documentation giving you the legal right to sell—is firm and non-negotiable."],
  ["Things that aren’t vehicles", "We are not a general scrap collection service. Appliances, household metal, farm machinery and loose scrap are outside our work."],
  ["Some of the bigger units", "Motorhomes, large RVs, park models and heavy equipment depend on size, condition and access. Describe it and we will give you a straight answer."],
  ["Trailers, sometimes", "Utility, boat and stock trailers depend on their condition and registration. Ask before arranging anything."],
] as const;

export default function WhatWeBuyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Buying in Red Deer",
    serviceType: "Cash vehicle buying for cars, trucks, SUVs, vans and fleets in any condition",
    url: "https://www.junkmycarreddeer.ca/what-we-buy",
    provider: { "@type": "AutomotiveBusiness", name: "Junk My Car Red Deer", telephone: "+1-403-427-0732" },
    areaServed: "Red Deer and Central Alberta",
  };

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <div className="utility-bar"><div className="shell utility-inner"><span><MapPin aria-hidden="true" /> Red Deer &amp; 80 km around</span><span className="utility-promise">Any make · Any model · Nearly any condition</span><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div></div>
    <header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="Junk My Car Red Deer home"><Image src={logo} alt="Junk My Car Red Deer" priority sizes="(max-width: 600px) 150px, 190px" /></Link><nav className="desktop-nav" aria-label="What we buy navigation"><a href="#types">Vehicle types</a><a href="#conditions">Conditions</a><a href="#situations">Situations</a><a href="#exclusions">What we cannot take</a></nav><a className="button button-header" href="#buy-quote">Tell us what you have <ArrowRight aria-hidden="true" /></a><details className="menu-button"><summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary><nav aria-label="Mobile navigation"><a href="#types">Vehicle types</a><a href="#conditions">Conditions</a><a href="#situations">Situations</a><a href="#exclusions">What we cannot take</a></nav></details></div></header>

    <main id="main" className={styles.page}>
      <section className={styles.hero}><div className={`shell ${styles.heroGrid}`}><div className={styles.heroCopy}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>What We Buy</span></nav><p className={styles.kicker}><Car aria-hidden="true" /> If it has a VIN, ask us</p><h1>What We Buy</h1><p className={styles.heroLead}>Short version: if it has a VIN and you own it, we&apos;re interested. The long version is below, because people usually arrive here with one specific vehicle in mind and want to see it on the list.</p><div className={styles.heroActions}><a className="button button-primary" href="#buy-quote">Get My Vehicle Priced <ArrowRight aria-hidden="true" /></a><a className={styles.callButton} href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div className={styles.heroTags}><span><Check aria-hidden="true" /> Running</span><span><Check aria-hidden="true" /> Wrecked</span><span><Check aria-hidden="true" /> Written off</span><span><Check aria-hidden="true" /> Stripped</span><span><Check aria-hidden="true" /> Seized</span></div></div><div className={styles.heroVisual}><Image src={vehiclePhoto} alt="Used SUV purchased for cash in Red Deer" fill priority sizes="(max-width: 850px) 100vw, 45vw" /><div className={styles.heroShade} /><div className={styles.vinCard}><ShieldCheck aria-hidden="true" /><span><strong>Own it?</strong>We will price it.</span></div></div></div></section>

      <section id="buy-quote" className={styles.quoteSection}><div className={`shell ${styles.quotePanel}`}><QuoteForm /></div></section>

      <section id="types" className={styles.typesSection}><div className="shell"><div className={styles.sectionHeading}><p className={styles.kicker}>Everyday cars to working fleets</p><h2>Vehicle Types</h2><p>Age, badge and body style matter less than condition, weight and what can be reused.</p></div><div className={styles.typeGrid}>{vehicleTypes.map(({ icon: Icon, title, list, text }, index) => <article className={index === 1 ? styles.typeFeature : ""} key={title}><div><Icon aria-hidden="true" /></div><h3>{title}</h3><span>{list}</span><p>{text}</p></article>)}</div></div></section>

      <section id="conditions" className={styles.conditionsSection}><div className={`shell ${styles.conditionsIntro}`}><div><p className={styles.kicker}>The condition list is longer</p><h2>Conditions We Accept</h2></div><p>Most vehicles we buy have a real problem. You do not need to diagnose it, repair it or make it presentable first.</p></div><div className={styles.conditionLayout}><div className={styles.conditionPhoto}><Image src={damagedPhoto} alt="Damaged truck accepted for cash purchase" fill sizes="(max-width: 850px) 100vw, 42vw" /><div className={styles.photoCaption}><AlertTriangle aria-hidden="true" /><span>Damage changes the value.<strong>It does not erase it.</strong></span></div></div><div className={styles.conditionList}>{conditions.map(({ icon: Icon, title, text }) => <article key={title}><div><Icon aria-hidden="true" /></div><section><h3>{title}</h3><p>{text}</p></section></article>)}</div></div></section>

      <section id="situations" className={styles.situationsSection}><div className={`shell ${styles.situationsGrid}`}><div className={styles.situationsCopy}><p className={styles.kicker}>Not just vehicle condition</p><h2>Situations We Handle</h2><p>Sometimes the question is not what the vehicle is, but what the circumstance is. Most of these need a short conversation about documentation before dispatch.</p><a href={phoneHref}><Phone aria-hidden="true" /> Describe yours</a></div><div className={styles.situationBoard}>{situations.map((item) => <div key={item}><Check aria-hidden="true" /><span>{item}</span></div>)}</div></div></section>

      <section className={styles.truckSection}><div className={styles.truckImage}><Image src={truckPhoto} alt="Older Ford truck on a Central Alberta acreage" fill sizes="(max-width: 850px) 100vw, 48vw" /><div className={styles.truckShade} /></div><div className={styles.truckCopy}><p className={styles.kicker}>Our strongest category</p><h2>Central Alberta Is Truck Country</h2><p>Trucks create a higher value floor because they are heavy, but the bigger advantage is demand. Transfer cases, differentials, boxes, tailgates, hubs and diesel components all move steadily here.</p><div className={styles.truckStats}><div><strong>Gas + diesel</strong><span>both welcome</span></div><div><strong>1 or 10</strong><span>single units or fleets</span></div><div><strong>$0 tow</strong><span>acreages included</span></div></div></div></section>

      <section id="exclusions" className={styles.exclusionsSection}><div className="shell"><div className={styles.sectionHeading}><p className={styles.kicker}>A short no-list</p><h2>What We Don&apos;t Buy</h2><p>Worth stating clearly so nobody wastes a call or waits for a truck that cannot help.</p></div><div className={styles.exclusionGrid}>{exclusions.map(([title, text]) => <article key={title}><CircleOff aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.finalSection}><div className={`shell ${styles.finalGrid}`}><div><p className={styles.kicker}>Still not sure?</p><h2>It Almost Certainly Qualifies</h2><p>Call and describe it. The answer takes about thirty seconds and costs nothing.</p></div><div className={styles.finalActions}><a className={styles.finalCall} href={phoneHref}><Phone aria-hidden="true" /><span><small>Ask about your vehicle</small>{phoneDisplay}</span></a><a className={styles.finalButton} href="#buy-quote">Get a Free Offer <ArrowRight aria-hidden="true" /></a></div></div></section>
    </main>

    <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>Any make, nearly any condition, with free pickup across Red Deer and Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/car-wreckers-red-deer">Car Wreckers</Link><Link href="/free-towing-red-deer">Free Towing</Link></div><div><h3>Company</h3><Link href="/about">About Us</Link><Link href="/how-it-works">How It Works</Link><Link href="/what-we-buy">What We Buy</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div><div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><p>Mon–Sat: 8am–8pm<br />Sunday: By appointment</p><a className="footer-quote" href="#buy-quote">Price my vehicle <ArrowRight aria-hidden="true" /></a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div></footer>
    <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#buy-quote"><BadgeDollarSign aria-hidden="true" /> Get offer</a></div>
    <BreadcrumbSchema current="What We Buy" path="/what-we-buy" />
    <JsonLd data={serviceSchema} />
  </>;
}
