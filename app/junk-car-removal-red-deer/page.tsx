import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeDollarSign,
  BatteryWarning,
  Car,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  Gauge,
  HandCoins,
  MapPin,
  Menu,
  Phone,
  Route,
  ShieldCheck,
  Snowflake,
  Truck,
  TriangleAlert,
  Wrench,
} from "lucide-react";

import abandonedCarPhoto from "@/assets/abandoned-sedan-acreage.jpeg";
import towPhoto from "@/assets/junk-pickup-free-towing.jpeg";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import suburbanPhoto from "@/assets/old-chevrolet-suburban-acreage.jpeg";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Junk Car Removal Red Deer | Free Towing & Cash Paid",
  description:
    "Free junk car removal anywhere in Red Deer. We haul away non-running, wrecked and end-of-life vehicles, pay cash at pickup, and do the paperwork.",
  alternates: { canonical: "/junk-car-removal-red-deer" },
  openGraph: {
    title: "Junk Car Removal Red Deer | Free Towing & Cash Paid",
    description:
      "We remove non-running, wrecked and unwanted vehicles across Red Deer, pay cash at pickup and include the tow.",
    url: "/junk-car-removal-red-deer",
    type: "website",
    images: [
      {
        url: abandonedCarPhoto.src,
        width: 1284,
        height: 972,
        alt: "Abandoned car ready for free junk car removal in Red Deer",
      },
    ],
  },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const recoverySituations = [
  {
    icon: BatteryWarning,
    title: "It won’t start",
    text: "Fine. Nearly nothing we pick up starts. We winch it onto a flat deck—you do not need to boost it, roll it, or find the key to the steering lock.",
    tag: "Most common",
  },
  {
    icon: Wrench,
    title: "It’s on blocks or seized",
    text: "We bring skates and a winch. No wheels at all makes it a slower job, not an impossible one. Tell us in advance so we send the right truck.",
    tag: "Special equipment",
  },
  {
    icon: Car,
    title: "It’s inside a garage",
    text: "We will pull it out. Tight single-car garages and badly placed support posts are awkward, so a photo helps us plan before arrival.",
    tag: "A photo helps",
  },
  {
    icon: TriangleAlert,
    title: "It’s blocked in",
    text: "Snow, a fence line, another vehicle, a trailer or a woodpile—tell us what is in the way. Nine times out of ten we can work around it.",
    tag: "Plan the access",
  },
  {
    icon: Route,
    title: "It’s on an acreage or in a field",
    text: "Gravel, mud, ruts and half a kilometre of driveway are routine. If the ground is too soft, we return when it firms up instead of tearing up your yard.",
    tag: "County routine",
  },
  {
    icon: Truck,
    title: "It’s in an alley or parkade",
    text: "Downtown, Parkvale and Woodlea alleys are tight, and parkades have clearance limits. Both are doable with a little advance planning.",
    tag: "Clearance matters",
  },
] as const;

const valueFactors = [
  [Wrench, "Reusable parts", "A newer engine, good transmission, clean panels, intact converter or factory alloys are where the strongest value usually sits."],
  [Gauge, "Vehicle weight", "Scrap steel is paid by the tonne. A 3/4-ton diesel contains substantially more raw material than a compact car."],
  [Car, "Completeness", "An untouched vehicle is worth more than the same vehicle after the engine, wheels and useful parts have been removed."],
  [CircleDollarSign, "Today’s market", "Scrap prices move. We quote using today’s parts and metal market—not a number from last year."],
] as const;

const faqItems = [
  [
    "Do I pay anything for the removal?",
    "No. Money moves in one direction only, and that direction is toward you. There is no towing fee, disposal fee or fuel surcharge for county pickups.",
  ],
  [
    "What if the car is worth almost nothing?",
    "Then the offer will be small, and we’ll tell you that honestly on the phone rather than wasting your afternoon. But almost nothing is still more than the zero dollars it is earning in your driveway, and removal is still free.",
  ],
  [
    "Do I need to clean it out?",
    "Take anything you want to keep—check the glovebox, console and under the seats because belongings cannot be returned once the vehicle is processed. Beyond that, no. We do not care about the garbage.",
  ],
  [
    "Can you take it if it’s not in my name?",
    "We need the registered owner, or documentation that gives you the right to sell it. Estate vehicles, lien situations and inherited cars all have a path—call and we’ll walk through yours.",
  ],
  [
    "What about the tires, battery and fluids?",
    "Leave them. They are handled properly during processing. Removing them yourself lowers what we can pay rather than raising it.",
  ],
  [
    "Do you take more than one at a time?",
    "Yes, and we would rather. Farms, shops and acreages with three or four vehicles are efficient for us, and that efficiency shows up in the offer.",
  ],
] as const;

export default function JunkCarRemovalPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Junk Car Removal Red Deer",
    serviceType: "Free junk car removal and cash vehicle buying",
    url: "https://junkmycarreddeer.ca/junk-car-removal-red-deer",
    description: "Removal of non-running, wrecked and end-of-life vehicles with free towing and cash paid at pickup.",
    provider: {
      "@type": "AutomotiveBusiness",
      name: "Junk My Car Red Deer",
      telephone: "+1-403-427-0732",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4909 48 Street",
        addressLocality: "Red Deer",
        addressRegion: "AB",
        postalCode: "T4N 1S8",
        addressCountry: "CA",
      },
    },
    areaServed: "Red Deer and Central Alberta",
    offers: { "@type": "Offer", priceCurrency: "CAD", description: "Free vehicle removal included" },
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <div className="utility-bar">
        <div className="shell utility-inner">
          <span><MapPin aria-hidden="true" /> Red Deer &amp; 80 km around</span>
          <span className="utility-promise">Same-day pickup · Free towing · Cash on the spot</span>
          <a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="Junk My Car Red Deer home">
            <Image src={logo} alt="Junk My Car Red Deer" priority sizes="(max-width: 600px) 150px, 190px" />
          </Link>
          <nav className="desktop-nav" aria-label="Junk car removal navigation">
            <a href="#cost">What it costs</a>
            <a href="#removal">What we handle</a>
            <a href="#value">What we pay</a>
            <a href="#areas">Pickup areas</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button-header" href="#junk-quote">Get a free offer <ArrowRight aria-hidden="true" /></a>
          <details className="menu-button">
            <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#cost">What it costs</a>
              <a href="#removal">What we handle</a>
              <a href="#value">What we pay</a>
              <a href="#areas">Pickup areas</a>
              <a href="#faq">FAQ</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>Junk Car Removal</span>
            </nav>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.kicker}><Truck aria-hidden="true" /> Free removal, cash paid</p>
                <h1>Junk Car Removal in Red Deer <span>— We Haul It, You Get Paid</span></h1>
                <p className={styles.heroLead}>Some vehicles stop being transportation and start being furniture. If there&apos;s one beside your garage, behind the shop, or under a tarp on the side of the house, we&apos;ll come and take it—free of charge—and put cash in your hand for it.</p>
                <div className={styles.heroActions}>
                  <a className="button button-primary" href="#junk-quote">Get My Offer <ArrowDownRight aria-hidden="true" /></a>
                  <a className={styles.callLink} href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a>
                </div>
              </div>
              <div className={styles.heroPhoto}>
                <Image src={abandonedCarPhoto} alt="Abandoned sedan ready for junk car removal in Red Deer" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
                <div className={styles.photoShade} />
                <div className={styles.clearSpaceStamp}><span>One call</span><i /><span>One visit</span><i /><strong>Space back</strong></div>
                <div className={styles.photoBadge}><ShieldCheck aria-hidden="true" /><span><strong>No start required</strong>No tow charge either</span></div>
              </div>
            </div>
            <div className={styles.heroStats}>
              <div><strong>$150–$3,000</strong><span>typical junk-vehicle range</span></div>
              <div><strong>20 minutes</strong><span>typical pickup appointment</span></div>
              <div><strong>$0 towing</strong><span>city, county and nearby towns</span></div>
            </div>
          </div>
        </section>

        <section id="junk-quote" className={styles.quoteSection} aria-label="Get a junk car removal offer">
          <div className={`shell ${styles.quotePanel}`}><QuoteForm /></div>
        </section>

        <section className={styles.recognitionSection}>
          <div className="shell">
            <div className={styles.recognitionGrid}>
              <div className={styles.recognitionVisual}>
                <Image src={suburbanPhoto} alt="Older Chevrolet Suburban sitting unused on a Central Alberta acreage" fill sizes="(max-width: 860px) 100vw, 47vw" />
                <div className={styles.vehicleLabel}><Car aria-hidden="true" /><span>Not driving it?<strong>That is enough.</strong></span></div>
              </div>
              <article className={styles.recognitionCopy}>
                <p className={styles.kicker}>You already know the one</p>
                <h2>You Probably Know Exactly Which Car We&apos;re Talking About</h2>
                <p>Every second driveway in this city has one. A Grand Caravan that hasn&apos;t moved since the sliding door quit. An F-150 that ran fine until it didn&apos;t, and the repair quote was more than the truck was worth. Somebody&apos;s first car, parked on the grass three summers ago with every intention of fixing it &ldquo;this spring.&rdquo;</p>
                <p>That&apos;s a junk car. It doesn&apos;t have to be a rusted shell. It just has to be a vehicle you&apos;re not driving and aren&apos;t realistically going to drive again.</p>
                <blockquote>We buy them. All of them.</blockquote>
                <div className={styles.vehicleTypes}>
                  {["Sedans", "Half-tons", "Minivans", "SUVs", "Cargo vans", "Farm trucks", "Trailers"].map((item) => <span key={item}>{item}</span>)}
                </div>
                <p>If it has a VIN and it&apos;s taking up space you&apos;d rather have back, that&apos;s enough.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="cost" className={styles.costSection}>
          <div className="shell">
            <div className={styles.costHeading}>
              <p className={styles.kicker}>The driveway ledger</p>
              <h2>What It&apos;s Actually Costing You to Leave It There</h2>
              <p>Most people underestimate this, so it is worth spelling out.</p>
            </div>
            <div className={styles.costGrid}>
              <article className={styles.costInsurance}><span>Still paying</span><CircleDollarSign aria-hidden="true" /><h3>Insurance that quietly renews</h3><p>Plenty of people keep a minimum policy on a vehicle &ldquo;just in case&rdquo; and forget about it. Check your last statement. That is real money leaving every month for something with four flat tires.</p></article>
              <article className={styles.costDecay}><span>Losing value</span><Snowflake aria-hidden="true" /><h3>Faster depreciation while parked</h3><p>Rotors seize, fuel goes stale, rodents find the wiring, rust advances and the interior develops a permanent smell. A car worth $1,400 to us in October can be worth $600 by April.</p></article>
              <article className={styles.costBylaw}><span>Creating risk</span><TriangleAlert aria-hidden="true" /><h3>A possible bylaw conversation</h3><p>Red Deer community standards cover derelict and inoperable vehicles stored in view. A neighbour complaint can start that process; condo boards and landlords often move even faster.</p></article>
              <article className={styles.costSpace}><span>Taking room</span><Car aria-hidden="true" /><h3>Space you would actually use</h3><p>A garage stall through a Central Alberta winter is worth far more than most people give it credit for. The vehicle occupying it is not free storage.</p></article>
            </div>
          </div>
        </section>

        <section id="removal" className={styles.removalSection}>
          <div className="shell">
            <div className={styles.removalIntro}>
              <div><p className={styles.kicker}>Access is our job</p><h2>Getting It Out Is Our Problem, Not Yours</h2></div>
              <p>This is the part people worry about, and the part that matters most. A lot of &ldquo;we buy junk cars&rdquo; outfits really mean they&apos;ll buy it if you can get it to them. That isn&apos;t removal. That&apos;s shopping.</p>
            </div>
            <div className={styles.removalPhoto}>
              <Image src={towPhoto} alt="Old non-running truck loaded onto a flatbed for free junk car removal" fill sizes="(max-width: 860px) 100vw, 1180px" />
              <div className={styles.removalPhotoShade} />
              <div className={styles.towMessage}><Truck aria-hidden="true" /><span><strong>We bring the right truck.</strong>You do not make the vehicle tow-ready.</span></div>
            </div>
            <div className={styles.situationGrid}>
              {recoverySituations.map(({ icon: Icon, title, text, tag }) => (
                <article key={title}><div><Icon aria-hidden="true" /><span>{tag}</span></div><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section id="value" className={styles.valueSection}>
          <div className="shell">
            <div className={styles.valueTop}>
              <div><p className={styles.kicker}>What we pay</p><h2>Most Junk Vehicles Land Between <span>$300 and $1,200</span></h2></div>
              <div className={styles.rangeCard}><small>Full typical range</small><strong>$150</strong><i>to</i><strong>$3,000</strong><span>Cash paid at pickup</span></div>
            </div>
            <div className={styles.valueFactors}>
              {valueFactors.map(([Icon, title, text]) => <article key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
            <div className={styles.valuePromise}>
              <HandCoins aria-hidden="true" />
              <p><strong>One figure. Tow included. No driveway renegotiation.</strong> If the vehicle is materially different from what was described—such as a missing engine we were not told about—we will have a conversation. We do not quote high just to shave the number down when the truck arrives.</p>
              <a href="#junk-quote">Get my figure <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className={styles.paperworkSection}>
          <div className="shell">
            <div className={styles.paperworkGrid}>
              <div className={styles.paperworkIntro}>
                <p className={styles.kicker}>Very little</p>
                <h2>What You Need to Have Ready</h2>
                <p>We complete the bill of sale with you on site and leave you a copy. Alberta plates belong to you, not the vehicle.</p>
              </div>
              <div className={styles.documentList}>
                <article><FileCheck2 aria-hidden="true" /><div><h3>Photo ID</h3><p>It should match the registered owner.</p></div></article>
                <article><ShieldCheck aria-hidden="true" /><div><h3>Proof of ownership</h3><p>Your vehicle registration is usually enough.</p></div></article>
                <article><Car aria-hidden="true" /><div><h3>Your licence plate</h3><p>Remove it, or have it in hand before we load.</p></div></article>
              </div>
            </div>
            <div className={styles.paperworkNote}>
              <TriangleAlert aria-hidden="true" />
              <p><strong>Lien, estate or missing paperwork?</strong> If the vehicle has a lien, belonged to a parent who passed away, or came with a property and has no paperwork, tell us upfront. These situations are common and usually solvable—especially before the truck is on its way.</p>
            </div>
            <p className={styles.registryNote}>Afterward, settle the registration at any Alberta registry agent and call your insurer. If your policy was prepaid, there may be a refund waiting.</p>
          </div>
        </section>

        <section id="areas" className={styles.areasSection}>
          <div className="shell">
            <div className={styles.areasHeading}>
              <p className={styles.kicker}>Where we pick up</p>
              <h2>Everywhere in Red Deer—Both Sides of the River</h2>
            </div>
            <div className={styles.areaColumns}>
              <article><span>South</span><h3>Driveways and garages</h3><p>Timberlands · Clearview Ridge · Laredo · Anders Park · Deer Park · Inglewood · Sunnybrook · Bower</p></article>
              <article><span>North</span><h3>Homes and alleys</h3><p>Johnstone Park · Kentwood · Normandeau · Riverside Meadows · Oriole Park · Highland Green</p></article>
              <article><span>Central</span><h3>Tight access welcome</h3><p>Downtown · Parkvale · Woodlea · Mountview · West Park · Waskasoo</p></article>
              <article><span>Industrial</span><h3>Shop and fleet calls</h3><p>Edgar Industrial Park · Queens Business Park · Riverside Light Industrial · Northlands</p></article>
            </div>
            <div className={styles.ruralBand}>
              <Route aria-hidden="true" />
              <div><h3>Red Deer County + 18 surrounding towns</h3><p>Free pickup runs to county acreages and from Springbrook and Penhold through Blackfalds, Lacombe and Ponoka, west to Sylvan Lake and Eckville, and east as far as Stettler. Shops with several abandoned customer vehicles are welcome too.</p></div>
              <strong>80 km</strong>
            </div>
          </div>
        </section>

        <section className={styles.speedSection}>
          <div className="shell">
            <div className={styles.speedGrid}>
              <div className={styles.speedHeading}><p className={styles.kicker}>How fast?</p><h2>Usually Today or Tomorrow</h2><p>Genuinely urgent? If a moving truck is coming or the landlord has given you a date, say so. We will work around it.</p></div>
              <div className={styles.speedTimeline}>
                <article><Clock3 aria-hidden="true" /><div><span>Call in the morning</span><strong>Same-day pickup is normal</strong></div></article>
                <article><Clock3 aria-hidden="true" /><div><span>Call in the afternoon</span><strong>Next-day pickup is normal</strong></div></article>
                <article><Truck aria-hidden="true" /><div><span>At your property</span><strong>About 20 minutes start to finish</strong></div></article>
              </div>
            </div>
            <p className={styles.appointmentNote}>We inspect the vehicle, sign the paperwork, pay you, and load it. That is the whole appointment.</p>
          </div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className="shell">
            <div className={styles.faqGrid}>
              <div className={styles.faqIntro}><p className={styles.kicker}>Common questions</p><h2>Before the Truck Arrives</h2><p>The short answer to most questions: tell us what you are dealing with and we will plan for it.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div>
              <div className={styles.faqList}>
                {faqItems.map(([question, answer], index) => (
                  <details key={question} open={index === 0}><summary>{question}<span><ChevronRight aria-hidden="true" /></span></summary><p>{answer}</p></details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalSection}>
          <div className="shell">
            <div className={styles.finalInner}>
              <p className={styles.kicker}>Ready when you are</p>
              <h2>One Phone Call, One Visit, and the Space Is Yours Again.</h2>
              <div><a className={styles.finalCall} href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a><a className={styles.finalOffer} href="#junk-quote">Get a Free Offer <ArrowRight aria-hidden="true" /></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>Free junk car removal, fair cash offers, and same-day pickup across Red Deer and Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div>
          <div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/car-wreckers-red-deer">Car Wreckers</Link><Link href="/free-towing-red-deer">Free Towing</Link></div>
          <div><h3>On this page</h3><a href="#cost">What it costs</a><a href="#removal">Removal access</a><a href="#value">What we pay</a><a href="#areas">Pickup areas</a><a href="#faq">Questions</a></div>
          <div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><p>Mon–Sat: 8am–8pm<br />Sunday: By appointment</p><a className="footer-quote" href="#junk-quote">Request a free offer <ArrowRight aria-hidden="true" /></a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div>
      </footer>

      <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#junk-quote"><BadgeDollarSign aria-hidden="true" /> Get offer</a></div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
