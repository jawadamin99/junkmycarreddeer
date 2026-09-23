import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, JsonLd } from "@/components/seo-schema";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeDollarSign,
  BatteryWarning,
  Car,
  Check,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Recycle,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  Weight,
  Wrench,
} from "lucide-react";

import damagedTruckPhoto from "@/assets/damaged-blue-ram-red-deer.jpeg";
import fireCarPhoto from "@/assets/fire-damaged-mini.jpeg";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Car Wreckers Red Deer | We Buy, Dismantle & Pay Cash",
  description:
    "Red Deer car wreckers buying vehicles in any condition. We dismantle, recover parts and recycle properly — and pay cash when we collect your car.",
  alternates: { canonical: "https://www.junkmycarreddeer.ca/car-wreckers-red-deer" },
  openGraph: {
    title: "Car Wreckers Red Deer | We Buy, Dismantle & Pay Cash",
    description: "We buy vehicles in any condition, recover usable parts, recycle the rest properly and pay cash at pickup.",
    url: "https://www.junkmycarreddeer.ca/car-wreckers-red-deer",
    type: "website",
    images: [{ url: damagedTruckPhoto.src, width: 1536, height: 2048, alt: "Damaged truck assessed by car wreckers in Red Deer" }],
  },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const dismantlingSteps = [
  [ShieldCheck, "Make it safe", "Fluids and hazardous materials come out first: oils, coolant, fuel, refrigerant, battery and tires."],
  [Wrench, "Recover mechanical parts", "Engine, transmission, differentials, alternator, starter, steering rack and radiator are assessed."],
  [Car, "Remove body and interior", "Doors, hoods, tailgates, mirrors, lights, seats, glass and wheels come off where reusable."],
  [PackageCheck, "Tag and inventory", "Every viable component is assessed, identified and made available for the vehicle that needs it next."],
  [Recycle, "Recycle the shell", "The stripped remainder is separated into recoverable metal and returned to the material supply chain."],
] as const;

const localDemand = [
  [Truck, "Truck components", "Boxes, tailgates, transfer cases, front differentials, 4x4 hubs and diesel components move fastest. This is truck country."],
  [Wrench, "Rust-related parts", "Brake and fuel lines, rocker panels, box sides, cab corners and suspension components are constantly needed because local vehicles rust from below."],
  [BatteryWarning, "Cold-start equipment", "Block heaters, batteries, starters, alternators, heater cores and blower motors all have reliable second lives after −30 °C mornings."],
  [Sparkles, "Glass and lights", "Gravel roads and highway kilometres mean constant glass damage, while headlight assemblies remain among Alberta’s most-searched used parts."],
] as const;

const faqItems = [
  ["Do you sell used parts to the public?", "Our side of the business is buying vehicles and dismantling them. If you are after a specific part, call and describe it—we can usually point you somewhere useful even when we cannot supply it ourselves."],
  ["Will you buy a car that’s already been parted out?", "Yes. The offer will reflect what is left, but a stripped shell still has value and we will still tow it free."],
  ["Is a wrecker going to pay more than a scrap yard?", "Usually, if the vehicle has salvageable components. On a completely stripped or rusted-through shell, the two are much closer. We will be honest about which situation yours is."],
  ["What paperwork is needed?", "Photo ID matching the registered owner and proof of ownership. We handle the bill of sale."],
  ["Do you buy fleets or multiple vehicles?", "Regularly. Shops, farms, contractors and municipalities. Multiple units in one location are efficient for us, and that improves what we can pay per vehicle."],
  ["What happens to the VIN and registration?", "The vehicle is processed and reported through the proper channels. You cancel or transfer your registration at a registry agent using the bill of sale we give you."],
] as const;

const vehicleTypes = ["Sedans", "Hatchbacks", "SUVs", "Crossovers", "Half-tons", "Heavy-duty pickups", "Diesels", "Minivans", "Cargo vans", "Commercial units", "Fleet vehicles", "Farm trucks", "Oilfield units"];

export default function CarWreckersPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car Wreckers Red Deer",
    serviceType: "Vehicle dismantling, auto salvage and vehicle buying",
    url: "https://www.junkmycarreddeer.ca/car-wreckers-red-deer",
    description: "We buy vehicles in any condition, recover usable parts, recycle responsibly and pay cash at pickup.",
    provider: { "@type": "AutomotiveBusiness", name: "Junk My Car Red Deer", telephone: "+1-403-427-0732", address: { "@type": "PostalAddress", streetAddress: "4909 48 Street", addressLocality: "Red Deer", addressRegion: "AB", postalCode: "T4N 1S8", addressCountry: "CA" } },
    areaServed: "Red Deer and Central Alberta",
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="utility-bar"><div className="shell utility-inner"><span><MapPin aria-hidden="true" /> Red Deer &amp; 80 km around</span><span className="utility-promise">Same-day pickup · Free towing · Cash on the spot</span><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div></div>
      <header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="Junk My Car Red Deer home"><Image src={logo} alt="Junk My Car Red Deer" priority sizes="(max-width: 600px) 150px, 190px" /></Link><nav className="desktop-nav" aria-label="Car wreckers navigation"><a href="#dismantling">Dismantling</a><a href="#value">Vehicle value</a><a href="#parts">Parts demand</a><a href="#recycling">Recycling</a><a href="#faq">FAQ</a></nav><a className="button button-header" href="#wrecker-quote">Get an offer <ArrowRight aria-hidden="true" /></a><details className="menu-button"><summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary><nav aria-label="Mobile navigation"><a href="#dismantling">Dismantling</a><a href="#value">Vehicle value</a><a href="#parts">Parts demand</a><a href="#recycling">Recycling</a><a href="#faq">FAQ</a></nav></details></div></header>

      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <div className="shell"><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>Car Wreckers</span></nav>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}><p className={styles.kicker}><Wrench aria-hidden="true" /> Parts first. Material second.</p><h1>Car Wreckers in Red Deer <span>— What Really Happens to a Vehicle We Buy</span></h1><p className={styles.heroLead}>&ldquo;Wrecker&rdquo; is a misleading word. Almost nothing about the job involves wrecking anything. It is closer to careful disassembly—taking a vehicle apart in the right order so parts worth saving get saved and the rest is recycled properly. Understanding that is also the fastest way to understand what your car is worth.</p><div className={styles.heroActions}><a className="button button-primary" href="#wrecker-quote">Get an Offer <ArrowDownRight aria-hidden="true" /></a><a className={styles.callLink} href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a></div></div>
              <div className={styles.heroVisual}><Image src={damagedTruckPhoto} alt="Damaged Ram pickup with reusable components for auto salvage" fill priority sizes="(max-width: 880px) 100vw, 47vw" /><div className={styles.heroShade} /><div className={`${styles.scanLabel} ${styles.labelEngine}`}><i />Engine + drivetrain</div><div className={`${styles.scanLabel} ${styles.labelBody}`}><i />Body panels</div><div className={`${styles.scanLabel} ${styles.labelMetal}`}><i />Recoverable metal</div><div className={styles.heroCaption}><strong>Damaged is not empty.</strong><span>Demand decides value.</span></div></div>
            </div>
            <div className={styles.heroEquation}><span><Wrench aria-hidden="true" /> Reusable parts</span><i>+</i><span><Weight aria-hidden="true" /> Recoverable metal</span><i>=</i><strong><CircleDollarSign aria-hidden="true" /> Your offer</strong></div>
          </div>
        </section>

        <section id="wrecker-quote" className={styles.quoteSection} aria-label="Get a car wrecker offer"><div className={`shell ${styles.quotePanel}`}><QuoteForm /></div></section>

        <section id="dismantling" className={styles.dismantlingSection}><div className="shell"><header className={styles.sectionHeading}><p className={styles.kicker}>Inventory, not destruction</p><h2>What an Auto Wrecker Actually Does</h2><p>The public picture is a yard full of rust and a crusher at the back. The reality is closer to inventory management.</p></header>
          <div className={styles.dismantlingIntro}><p>When a vehicle comes in, the first question is not &ldquo;how do we get rid of this?&rdquo; It is &ldquo;what is on this that somebody still needs?&rdquo; Thousands of Alberta vehicles need a used mirror, axle, transfer case, window regulator or headlight for a model that may have left production years ago.</p><blockquote>New parts may not exist—or may cost more than the vehicle is worth.</blockquote></div>
          <div className={styles.sequence}>{dismantlingSteps.map(([Icon, title, text]) => <article key={title}><div><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section id="value" className={styles.valueSection}><div className="shell"><div className={styles.valueGrid}><div className={styles.valueCopy}><p className={styles.kicker}>The value connection</p><h2>Why This Is the Reason Your Offer Is What It Is</h2><p>A buyer who only recycles metal can only pay for metal. A buyer who dismantles can pay for metal <em>plus</em> everything worth saving. Those are different numbers—sometimes by several hundred dollars on the same vehicle.</p><p>It also explains why two apparently similar cars get very different offers. A 2013 half-ton with a good 5.3 and clean doors has components people actively search for. A 2013 sedan from a model line that never sold well here may have almost none.</p><blockquote>Same age. Same condition. Completely different demand.</blockquote><p>Used-parts demand is specific, local and unsentimental. It is also why a vehicle already missing its engine and wheels is worth less: most of what we were paying for has already left.</p></div><div className={styles.valueDiagram}><span>2013</span><strong>Half-ton</strong><div><i>5.3 engine</i><i>Clean doors</i><i>Transfer case</i><i>Truck demand</i></div><b>Higher parts value</b><ArrowDownRight aria-hidden="true" /></div></div></div></section>

        <section id="parts" className={styles.partsSection}><div className="shell"><header className={styles.sectionHeading}><p className={styles.kicker}>Central Alberta demand</p><h2>The Parts That Matter Most in This Market</h2><p>Our demand profile is not Vancouver&apos;s or Toronto&apos;s. Local roads, weather and vehicle preferences decide what moves.</p></header><div className={styles.partsGrid}>{localDemand.map(([Icon, title, text]) => <article key={title}><Icon aria-hidden="true" /><span>Local demand</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className={styles.comparisonSection}><div className="shell"><header className={styles.sectionHeading}><p className={styles.kicker}>Similar words, different businesses</p><h2>Wreckers vs Scrap Yards—Not the Same Thing</h2></header><div className={styles.comparisonGrid}><article><Weight aria-hidden="true" /><span>Scrap yard</span><h3>Material is the business</h3><p>Weight in, metal out. Fast and simple, with an offer reflecting what the vehicle weighs.</p><div><small>Offer includes</small><strong>Metal</strong></div></article><div className={styles.compareMark}>VS</div><article className={styles.winner}><Wrench aria-hidden="true" /><span>Auto wrecker</span><h3>Parts first, material second</h3><p>The vehicle can be worth more because more of it is treated as something useful.</p><div><small>Offer includes</small><strong>Parts + metal</strong></div></article></div><p className={styles.comparisonNote}>If your vehicle still has usable components, a scrap-only quote may leave money behind. A stripped, rusted-through shell really may be just metal—and we will tell you when that is the case.</p></div></section>

        <section className={styles.acceptSection}><div className="shell"><div className={styles.acceptTop}><div><p className={styles.kicker}>What we&apos;ll take</p><h2>Every Make. Every Model. Running or Not.</h2></div><p>Condition genuinely does not matter: collision, hail, fire, flood, frame rot, seized engines, blown transmissions, failed inspections, missing parts, partly dismantled, or sitting in a field since the Klein years. It all has a number.</p></div><div className={styles.typeGrid}>{vehicleTypes.map((item) => <span key={item}><Check aria-hidden="true" />{item}</span>)}</div><aside className={styles.ownershipLine}><FileCheck2 aria-hidden="true" /><p><strong>The hard line: ownership.</strong> We cannot take a vehicle you cannot demonstrate ownership of, and that boundary exists for good reason.</p></aside></div></section>

        <section id="recycling" className={styles.environmentSection}><div className={styles.environmentPhoto}><Image src={fireCarPhoto} alt="Fire-damaged vehicle requiring regulated fluid and hazardous-material recovery" fill sizes="(max-width: 860px) 100vw, 48vw" /><div className={styles.environmentShade} /><div><Recycle aria-hidden="true" /><span>Handled in the<strong>right order</strong></span></div></div><div className={styles.environmentCopy}><p className={styles.kicker}>The environmental side, without the sermon</p><h2>A Vehicle Holds More Than Metal</h2><p>It contains litres of things that should never reach groundwater: engine oil, coolant, transmission and brake fluid, gear oil, fuel, refrigerant, battery acid and, on older vehicles, mercury switches.</p><div className={styles.recoveryList}><span><Check aria-hidden="true" /> Fluids captured before dismantling</span><span><Check aria-hidden="true" /> Tires routed to recycling</span><span><Check aria-hidden="true" /> Batteries sent to lead recovery</span><span><Check aria-hidden="true" /> Refrigerant reclaimed, never vented</span></div><p>Doing it properly costs more and takes longer. It is also the reason the industry is regulated—and the alternative to a vehicle slowly leaking into county soil that drains toward the Red Deer River.</p></div></section>

        <section className={styles.processSection}><div className="shell"><header className={styles.sectionHeading}><p className={styles.kicker}>Selling to us</p><h2>The Short Version</h2></header><div className={styles.processGrid}>{[
          [Car, "Tell us what it is", "Phone or fill in the form with year, make, model and condition. Accuracy about missing or broken parts gets you an accurate number."],
          [BadgeDollarSign, "Get the all-in offer", "We return the same day with a figure that includes towing. If it works, pickup is usually today or tomorrow."],
          [Truck, "Get paid at pickup", "We complete the bill of sale, pay you and load it. Bring matching photo ID and proof of ownership; keep your Alberta plate."],
        ].map(([Icon, title, text], index) => { const StepIcon = Icon as typeof Car; return <article key={title as string}><span>0{index + 1}</span><StepIcon aria-hidden="true" /><h3>{title as string}</h3><p>{text as string}</p></article>; })}</div></div></section>

        <section className={styles.coverageSection}><div className="shell"><div className={styles.coverageGrid}><div><p className={styles.kicker}>Where we collect</p><h2>Homes, Shops, Fleets and Body Yards</h2><p>All of Red Deer, including Edgar Industrial Park, Queens Business Park, Northlands and Riverside Light Industrial. Shops with abandoned customer vehicles, fleets retiring units and body shops clearing write-offs are regular calls.</p><p>Beyond the city, free collection runs throughout Red Deer County and to eighteen Central Alberta towns including Blackfalds, Lacombe, Sylvan Lake, Innisfail, Penhold, Ponoka, Eckville, Rimbey, Olds and Stettler.</p></div><aside><Route aria-hidden="true" /><strong>80 km</strong><span>Free collection radius</span><p>No city-limit surcharge. No separate towing bill.</p></aside></div></div></section>

        <section id="faq" className={styles.faqSection}><div className="shell"><div className={styles.faqGrid}><div className={styles.faqIntro}><p className={styles.kicker}>Questions about auto salvage</p><h2>Car Wreckers Red Deer—FAQs</h2><p>Have a fleet, partly dismantled vehicle or an ownership question? Call and describe it.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div className={styles.faqList}>{faqItems.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span><ChevronRight aria-hidden="true" /></span></summary><p>{answer}</p></details>)}</div></div></div></section>

        <section className={styles.finalSection}><div className="shell"><div className={styles.finalInner}><p className={styles.kicker}>Find out what yours is worth</p><h2>The Year, Make and Model Is Enough to Start.</h2><div><a className={styles.finalCall} href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a><a className={styles.finalOffer} href="#wrecker-quote">Get a Free Offer <ArrowRight aria-hidden="true" /></a></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>Parts-first vehicle dismantling, responsible recycling, free towing and cash paid across Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/car-wreckers-red-deer">Car Wreckers</Link><Link href="/free-towing-red-deer">Free Towing</Link></div><div><h3>On this page</h3><a href="#dismantling">Dismantling</a><a href="#value">Vehicle value</a><a href="#parts">Parts demand</a><a href="#recycling">Recycling</a><a href="#faq">Questions</a></div><div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><p>Mon–Sat: 8am–8pm<br />Sunday: By appointment</p><a className="footer-quote" href="#wrecker-quote">Request an offer <ArrowRight aria-hidden="true" /></a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div></footer>
      <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#wrecker-quote"><BadgeDollarSign aria-hidden="true" /> Get offer</a></div>
      <BreadcrumbSchema current="Car Wreckers Red Deer" path="/car-wreckers-red-deer" />
      <JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
    </>
  );
}
