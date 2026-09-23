import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, JsonLd } from "@/components/seo-schema";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarClock,
  Car,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  KeyRound,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  UserCheck,
  WalletCards,
} from "lucide-react";

import pickupPhoto from "@/assets/junk-pickup-free-towing.jpeg";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import vehiclePhoto from "@/assets/used-sedan-red-deer.jpeg";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "How It Works | Selling Your Car for Cash in Red Deer",
  description:
    "Exactly what happens when you sell a vehicle to us in Red Deer — from the first call to payment — including timings, paperwork and what can go wrong.",
  alternates: { canonical: "https://www.junkmycarreddeer.ca/how-it-works" },
  openGraph: {
    title: "How Selling Your Car for Cash Works in Red Deer",
    description: "From the first vehicle details to payment and free pickup—see every step, timing and paperwork requirement.",
    url: "https://www.junkmycarreddeer.ca/how-it-works",
    type: "website",
    images: [{ url: pickupPhoto.src, width: 1200, height: 630, alt: "Vehicle pickup process in Red Deer" }],
  },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const steps = [
  {
    id: "tell-us",
    icon: Car,
    title: "You Tell Us About the Vehicle",
    timing: "2–3 minutes",
    sections: [
      { title: "What we need", text: "Year, make and model. Whether it runs. Roughly what is wrong with it. Where it is sitting and what is around it. Your name and phone number. You do not need the VIN, service history, photos or mileage to start, although photos help with anything unusual." },
      { title: "Why honesty pays you", text: "An accurate description produces an accurate number. Mention a missing converter, removed engine or transmission, severe condition, or missing paperwork. None stops us buying; all affect the price and are better handled before pickup." },
    ],
  },
  {
    id: "offer",
    icon: BadgeDollarSign,
    title: "We Come Back With a Number",
    timing: "Usually within hours",
    sections: [
      { title: "What the offer includes", text: "One figure with towing already inside it—not ‘up to,’ not ‘starting from,’ and no deduction for towing, fuel, distance or disposal. Stettler is priced with the same rules as Timberlands." },
      { title: "No pressure attached", text: "Take it, think about it or get other quotes. We do not call four times that afternoon. If you compare buyers, compare what you will actually receive rather than the first number said over the phone." },
    ],
  },
  {
    id: "book",
    icon: CalendarClock,
    title: "We Book a Time",
    timing: "Same day or next day",
    sections: [
      { title: "How soon", text: "Morning calls can usually be collected the same day; afternoon calls are typically next day. Olds, Rimbey and Stettler are more often next-day because of the drive. Tell us about any deadline when you call." },
      { title: "A window, not a day", text: "You receive a pickup window. If the truck is running late, you get a call rather than silence." },
    ],
  },
  {
    id: "pickup",
    icon: Truck,
    title: "Pickup Day",
    timing: "About 20 minutes",
    sections: [
      { title: "What happens, in order", text: "We confirm the vehicle matches the description, complete the bill of sale, pay you in cash or by e-transfer before it moves, and then load it. Non-runners go up by winch and flat deck; skates handle flat tires or missing wheels." },
      { title: "How long you need", text: "About twenty minutes, most of it paperwork. You do not need to take a day off." },
    ],
  },
] as const;

const conversationItems = [
  ["The vehicle isn’t in your name", "Estate vehicles, inherited cars, tenant vehicles or something never transferred each have a route. Describe the situation and we will explain what documentation makes it workable."],
  ["There’s still finance on it", "Common on newer vehicles and insurance write-offs. Lien payouts are routine; they simply need arranging as part of the sale."],
  ["It’s at a third-party location", "Body shops, compounds and impounds are regular pickups. We need the address and the authorization required to release it. Moving quickly can reduce daily storage charges."],
  ["Access is genuinely difficult", "Tight garages, low parkades, soft ground, blocked vehicles and alleys are manageable. A photo before dispatch saves everyone time."],
] as const;

export default function HowItWorksPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to sell your vehicle for cash in Red Deer",
    totalTime: "PT24H",
    step: steps.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step.title, text: step.sections.map((section) => section.text).join(" ") })),
  };

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <div className="utility-bar"><div className="shell utility-inner"><span><MapPin aria-hidden="true" /> Red Deer &amp; 80 km around</span><span className="utility-promise">Four clear steps · No pressure · Paid at pickup</span><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div></div>
    <header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="Junk My Car Red Deer home"><Image src={logo} alt="Junk My Car Red Deer" priority sizes="(max-width: 600px) 150px, 190px" /></Link><nav className="desktop-nav" aria-label="How it works navigation"><a href="#tell-us">Vehicle details</a><a href="#offer">Your offer</a><a href="#book">Booking</a><a href="#pickup">Pickup day</a><a href="#exceptions">Special situations</a></nav><a className="button button-header" href="#process-quote">Start now <ArrowRight aria-hidden="true" /></a><details className="menu-button"><summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary><nav aria-label="Mobile navigation"><a href="#tell-us">Vehicle details</a><a href="#offer">Your offer</a><a href="#book">Booking</a><a href="#pickup">Pickup day</a><a href="#exceptions">Special situations</a></nav></details></div></header>

    <main id="main" className={styles.page}>
      <section className={styles.hero}><div className={`shell ${styles.heroGrid}`}><div className={styles.heroCopy}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>How It Works</span></nav><p className={styles.kicker}><ClipboardCheck aria-hidden="true" /> From first call to cash</p><h1>How Selling Your Vehicle to Us <span>Actually Works</span></h1><p className={styles.heroLead}>Most people have never sold a car this way, so here is the whole thing from start to finish—including the parts that catch people out. Read it once and you will know more than you need to.</p><div className={styles.heroActions}><a className="button button-primary" href="#process-quote">Start With My Vehicle <ArrowRight aria-hidden="true" /></a><a className={styles.callButton} href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div></div><div className={styles.heroVisual}><Image src={pickupPhoto} alt="Vehicle being loaded for free pickup in Red Deer" fill priority sizes="(max-width: 850px) 100vw, 46vw" /><div className={styles.heroShade} /><div className={styles.timeCard}><Clock3 aria-hidden="true" /><strong>Under 24 hours</strong><span>for most completed sales</span></div></div></div><div className={styles.stepStrip}>{steps.map((step, index) => <a href={`#${step.id}`} key={step.id}><strong>0{index + 1}</strong><span>{step.title}</span></a>)}</div></section>

      <section id="process-quote" className={styles.quoteSection}><div className={`shell ${styles.quotePanel}`}><QuoteForm /></div></section>

      <section className={styles.stepsSection}><div className="shell"><div className={styles.sectionHeading}><p className={styles.kicker}>Nothing hidden between the steps</p><h2>The Complete Process</h2><p>Each stage has one job. The details below explain what we need, what you can expect and how long it normally takes.</p></div><div className={styles.timeline}>{steps.map((step, index) => { const Icon = step.icon; return <article id={step.id} className={styles.step} key={step.id}><div className={styles.stepNumber}><span>Step</span><strong>0{index + 1}</strong></div><div className={styles.stepBody}><div className={styles.stepHead}><div><Icon aria-hidden="true" /></div><h2>{step.title}</h2><span><Clock3 aria-hidden="true" /> {step.timing}</span></div><div className={styles.stepDetails}>{step.sections.map((section) => <section key={section.title}><h3>{section.title}</h3><p>{section.text}</p></section>)}</div>{index === 0 ? <aside className={styles.warning}><ShieldCheck aria-hidden="true" /><p><strong>Four details that commonly change a quote:</strong> a missing converter, removed drivetrain, substantially worse condition, or no ownership paperwork.</p></aside> : null}</div></article>; })}</div></div></section>

      <section className={styles.prepSection}><div className={styles.prepImage}><Image src={vehiclePhoto} alt="Used vehicle prepared for sale in Red Deer" fill sizes="(max-width: 850px) 100vw, 45vw" /><div className={styles.prepCaption}><KeyRound aria-hidden="true" /><span>No cleaning or starting required</span></div></div><div className={styles.prepCopy}><p className={styles.kicker}>Before pickup</p><h2>Four Things to Do Before We Arrive</h2><div className={styles.checkList}><article><Check aria-hidden="true" /><div><h3>Empty it properly</h3><p>Check the glovebox, console, door pockets, under the seats, trunk and spare-wheel well. Once processed, forgotten items cannot be retrieved.</p></div></article><article><Check aria-hidden="true" /><div><h3>Take the plate off</h3><p>Alberta plates belong to the owner, not the vehicle. We will remind you if needed.</p></div></article><article><Check aria-hidden="true" /><div><h3>Find ID and ownership</h3><p>Photo ID matching the registered owner, plus registration or equivalent proof.</p></div></article><article><Check aria-hidden="true" /><div><h3>Clear a path if it is easy</h3><p>Helpful in winter, but not essential. Do not wash it, start it, inflate tires, charge the battery or move it to the street.</p></div></article></div></div></section>

      <section className={styles.afterSection}><div className="shell"><div className={styles.sectionHeading}><p className={styles.kicker}>After the sale</p><h2>Two Things People Forget</h2></div><div className={styles.afterGrid}><article><div><FileCheck2 aria-hidden="true" /></div><span>Alberta registry</span><h3>Cancel or transfer the registration</h3><p>Take your plate and bill of sale to any Alberta registry agent. This closes the vehicle out of your name if it ever appears somewhere it should not.</p></article><article><div><WalletCards aria-hidden="true" /></div><span>Your insurer</span><h3>Ask about the unused premium</h3><p>If the policy was prepaid, you may be owed a refund. On a second vehicle sitting for a year or two, it can amount to a few hundred dollars.</p></article></div></div></section>

      <section id="exceptions" className={styles.exceptionsSection}><div className={`shell ${styles.exceptionsGrid}`}><div className={styles.exceptionsIntro}><p className={styles.kicker}>Call before dispatch</p><h2>Situations That Need a Conversation First</h2><p>None is automatically a dealbreaker. Each is easier to solve before the truck is sent than when it arrives.</p><a href={phoneHref}><Phone aria-hidden="true" /> Talk it through</a></div><div className={styles.exceptionList}>{conversationItems.map(([title, text]) => <article key={title}><UserCheck aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className={styles.finalSection}><div className={`shell ${styles.finalGrid}`}><div><p className={styles.kicker}>The whole first step</p><h2>Start Whenever You&apos;re Ready</h2><p>Year, make, model and what is wrong with it. That is enough to get the process moving.</p></div><div className={styles.finalActions}><a className={styles.finalCall} href={phoneHref}><Phone aria-hidden="true" /><span><small>Call now</small>{phoneDisplay}</span></a><a className={styles.finalButton} href="#process-quote">Get a Free Offer <ArrowRight aria-hidden="true" /></a></div></div></section>
    </main>

    <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>One clear process, free towing and payment at pickup across Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/free-towing-red-deer">Free Towing</Link></div><div><h3>Company</h3><Link href="/about">About Us</Link><Link href="/how-it-works">How It Works</Link><Link href="/what-we-buy">What We Buy</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div><div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><p>Mon–Sat: 8am–8pm<br />Sunday: By appointment</p><a className="footer-quote" href="#process-quote">Start with a quote <ArrowRight aria-hidden="true" /></a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div></footer>
    <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#process-quote"><BadgeDollarSign aria-hidden="true" /> Get offer</a></div>
    <BreadcrumbSchema current="How It Works" path="/how-it-works" />
    <JsonLd data={howToSchema} />
  </>;
}
