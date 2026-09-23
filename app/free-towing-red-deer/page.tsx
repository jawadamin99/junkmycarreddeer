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
  CircleOff,
  Clock3,
  FileCheck2,
  House,
  KeyRound,
  MapPin,
  Menu,
  MountainSnow,
  Phone,
  Route,
  ShieldCheck,
  Snowflake,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";

import towingPhoto from "@/assets/junk-pickup-free-towing.jpeg";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import acreagePhoto from "@/assets/old-chevrolet-suburban-acreage.jpeg";
import mapImage from "@/assets/red-deer-city-map.png";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Free Car Towing Red Deer | No-Cost Vehicle Pickup",
  description:
    "Free towing on every vehicle we buy in Red Deer and Central Alberta. No fee, no deduction from your offer, and no charge for rural or acreage pickups.",
  alternates: {
    canonical: "https://www.junkmycarreddeer.ca/free-towing-red-deer",
  },
  openGraph: {
    title: "Free Car Towing Red Deer | No-Cost Vehicle Pickup",
    description:
      "No-cost pickup for every vehicle we buy across Red Deer, Red Deer County and eighteen Central Alberta towns.",
    url: "https://www.junkmycarreddeer.ca/free-towing-red-deer",
    type: "website",
    images: [
      {
        url: towingPhoto.src,
        width: 1200,
        height: 630,
        alt: "Free junk car towing and vehicle pickup in Red Deer",
      },
    ],
  },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const towns = [
  "Springbrook",
  "Penhold",
  "Blackfalds",
  "Sylvan Lake",
  "Lacombe",
  "Innisfail",
  "Delburne",
  "Bentley",
  "Clive",
  "Spruce View",
  "Bowden",
  "Eckville",
  "Alix",
  "Ponoka",
  "Elnora",
  "Rimbey",
  "Olds",
  "Stettler",
] as const;

const awkwardPickups = [
  { icon: Wrench, title: "It won’t start", text: "Expected. Almost nothing we collect does. We winch it onto the deck." },
  { icon: KeyRound, title: "No keys", text: "Not a problem. Tell us beforehand so the driver arrives prepared." },
  { icon: Car, title: "Flat—or no—tires", text: "We bring skates. A vehicle sitting on its rotors is slower to load, not impossible." },
  { icon: House, title: "On blocks or inside", text: "Blocks, jack stands and tight garages are manageable. A quick photo helps us plan." },
  { icon: Snowflake, title: "Snowed in", text: "A rough path helps, but working around Central Alberta snow is routine." },
  { icon: MountainSnow, title: "Mud or soft ground", text: "Usually manageable. If access would damage your yard, we return when it firms up." },
  { icon: Route, title: "Blocked in", text: "Fence, trailer, woodpile or another vehicle—we plan around what is in the way." },
  { icon: Warehouse, title: "Parkade or compound", text: "Give us clearance limits, location and the authorization needed for release." },
  { icon: Truck, title: "Several vehicles", text: "Farms, shops and acreages with multiple vehicles are better handled in one visit." },
] as const;

const faqs = [
  [
    "Is it genuinely free, or is it taken off the offer?",
    "Genuinely free. Nothing is deducted at pickup. The number quoted on the phone is the number handed to you.",
  ],
  [
    "Do you charge extra for rural or acreage pickups?",
    "No. Red Deer County acreages and all eighteen towns are covered at no cost, including the far ones.",
  ],
  [
    "What if the vehicle is worth almost nothing?",
    "The tow is still free. There is no minimum value and no scenario where you end up owing us money.",
  ],
  [
    "Can you tow it if it has been sitting for years?",
    "Yes. Seized brakes, flat tires, rodent damage and vehicles buried in years of growth are normal calls for us.",
  ],
  [
    "Do I need to be there?",
    "Someone authorized must sign the bill of sale and accept payment. It does not have to be you if arrangements are made beforehand.",
  ],
  [
    "How far outside Red Deer will you come?",
    "Roughly eighty kilometres, covering everything from Springbrook out to Stettler. If you are just past that, call anyway—we can often make it work.",
  ],
] as const;

export default function FreeTowingRedDeerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Car Towing Red Deer",
    serviceType: "Free vehicle towing and junk car pickup with vehicle purchase",
    url: "https://www.junkmycarreddeer.ca/free-towing-red-deer",
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
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
      description: "Free towing included with every vehicle purchase",
    },
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
          <nav className="desktop-nav" aria-label="Free towing navigation">
            <a href="#why-free">Why it is free</a>
            <a href="#coverage">Coverage</a>
            <a href="#situations">What we handle</a>
            <a href="#timing">Timing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button-header" href="#towing-quote">Book free pickup <ArrowRight aria-hidden="true" /></a>
          <details className="menu-button">
            <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#why-free">Why it is free</a>
              <a href="#coverage">Coverage</a>
              <a href="#situations">What we handle</a>
              <a href="#timing">Timing</a>
              <a href="#faq">FAQ</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src={towingPhoto}
              alt="Tow truck collecting a junk vehicle in Red Deer"
              fill
              priority
              sizes="100vw"
            />
            <div className={styles.heroShade} />
          </div>
          <div className={`shell ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>Free Towing</span>
              </nav>
              <p className={styles.kicker}><Truck aria-hidden="true" /> Pickup is already included</p>
              <h1>Free Towing in Red Deer <span>— Included in Every Offer We Make</span></h1>
              <p className={styles.heroLead}>The tow is the part people expect to get caught on. So let&apos;s deal with it directly: we don&apos;t charge for it, we don&apos;t deduct it, and it doesn&apos;t matter where the vehicle is sitting.</p>
              <div className={styles.heroActions}>
                <a className="button button-primary" href="#towing-quote">Book a Free Pickup <ArrowRight aria-hidden="true" /></a>
                <a className={styles.callButton} href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a>
              </div>
            </div>
            <aside className={styles.dispatchCard}>
              <div className={styles.dispatchHead}><span>Pickup cost</span><strong>$0</strong></div>
              <div className={styles.dispatchRows}>
                <span><Check aria-hidden="true" /> No mileage fee</span>
                <span><Check aria-hidden="true" /> No rural surcharge</span>
                <span><Check aria-hidden="true" /> No offer deduction</span>
              </div>
              <div className={styles.dispatchFoot}><Clock3 aria-hidden="true" /><span><strong>Same day</strong> often available when you call in the morning</span></div>
            </aside>
          </div>
          <div className={styles.heroTrust}>
            <span><ShieldCheck aria-hidden="true" /> Firm offer</span>
            <span><Route aria-hidden="true" /> 80 km coverage</span>
            <span><Truck aria-hidden="true" /> Difficult access handled</span>
            <span><BadgeDollarSign aria-hidden="true" /> Paid before loading</span>
          </div>
        </section>

        <section id="towing-quote" className={styles.quoteSection} aria-label="Book free vehicle pickup">
          <div className={`shell ${styles.quotePanel}`}><QuoteForm /></div>
        </section>

        <section id="why-free" className={styles.whySection}>
          <div className={`shell ${styles.whyGrid}`}>
            <div className={styles.whyHeading}>
              <p className={styles.kicker}>No invoice. No deduction.</p>
              <h2>Why It&apos;s Free</h2>
              <div className={styles.zeroMark}>$0</div>
            </div>
            <div className={styles.whyCopy}>
              <p className={styles.lead}>Because it isn&apos;t a service we sell. It&apos;s how we collect something we&apos;ve already bought.</p>
              <p>We&apos;re not a towing company. If your car breaks down on the QEII at nine at night, call a recovery service. We are a vehicle buyer, and the tow is simply how the vehicle we purchased gets from your property to ours.</p>
              <p>That distinction means the cost is already built into the offer. There is no second transaction. The figure we quote is the figure you are handed, and the truck showing up is part of it.</p>
              <aside><BadgeDollarSign aria-hidden="true" /><p><strong>One number means one number.</strong> We do not make a strong phone offer and quietly shrink it when the flat deck arrives.</p></aside>
            </div>
          </div>
        </section>

        <section id="coverage" className={styles.coverageSection}>
          <div className={`shell ${styles.coverageGrid}`}>
            <div className={styles.mapPanel}>
              <Image src={mapImage} alt="Map showing the free vehicle pickup area around Red Deer" fill sizes="(max-width: 900px) 100vw, 48vw" />
              <div className={styles.mapShade} />
              <div className={styles.mapMarker}><MapPin aria-hidden="true" /><strong>Red Deer</strong><span>Free pickup hub</span></div>
              <div className={styles.radiusBadge}><Route aria-hidden="true" /><span><strong>80 km</strong> no-cost radius</span></div>
            </div>
            <div className={styles.coverageCopy}>
              <p className={styles.kicker}>What “anywhere” means</p>
              <h2>City Address, County Acreage or Nearby Town</h2>
              <p>Every Red Deer address is covered: driveways, alleys, parking stalls, condo lots, parkades, commercial yards and industrial properties.</p>
              <p>Every acreage and rural property in Red Deer County is covered too, including long gravel approaches, field access and properties well off the main road.</p>
              <div className={styles.townCloud} aria-label="Central Alberta towns with free towing">
                {towns.map((town) => <span key={town}>{town}</span>)}
              </div>
              <p className={styles.coverageNote}>A $200 scrap car past Eckville costs exactly the same to collect as a $6,000 truck in Timberlands: <strong>nothing.</strong></p>
            </div>
          </div>
        </section>

        <section id="situations" className={styles.situationsSection}>
          <div className="shell">
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>Tell us what is in the way</p>
              <h2>Awkward Situations We Handle Routinely</h2>
              <p>This is the practical list most people want before they call. None of these conditions automatically stops a pickup.</p>
            </div>
            <div className={styles.situationGrid}>
              {awkwardPickups.map(({ icon: Icon, title, text }) => (
                <article key={title}>
                  <div><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.prepSection}>
          <div className={styles.prepImage}>
            <Image src={acreagePhoto} alt="Old vehicle ready for free acreage pickup near Red Deer" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <div className={styles.prepCaption}><Truck aria-hidden="true" /><span>No start required.<strong>No street access required.</strong></span></div>
          </div>
          <div className={styles.prepCopy}>
            <p className={styles.kicker}>Before the truck arrives</p>
            <h2>Four Things That Save Time</h2>
            <div className={styles.prepList}>
              <article><span><Car aria-hidden="true" /></span><div><h3>Empty the vehicle</h3><p>Check the glovebox, console, under the seats and trunk. Once processed, forgotten items cannot be returned.</p></div></article>
              <article><span><ShieldCheck aria-hidden="true" /></span><div><h3>Take your plate off</h3><p>In Alberta, the plate belongs to you rather than the vehicle.</p></div></article>
              <article><span><FileCheck2 aria-hidden="true" /></span><div><h3>Have ownership ready</h3><p>Bring photo ID matching the registered owner and registration or equivalent proof.</p></div></article>
              <article><span><Route aria-hidden="true" /></span><div><h3>Clear a path if it is easy</h3><p>Helpful, not essential. You do not need to wash, start, inflate or move the car.</p></div></article>
            </div>
          </div>
        </section>

        <section id="timing" className={styles.timingSection}>
          <div className={`shell ${styles.timingGrid}`}>
            <div className={styles.timingIntro}>
              <p className={styles.kicker}>A real appointment window</p>
              <h2>How Fast Can We Be There?</h2>
              <p>Call in the morning and same-day pickup is usually available. Call in the afternoon and it is typically the next day.</p>
            </div>
            <div className={styles.timingBoard}>
              <article><CalendarClock aria-hidden="true" /><div><strong>Morning call</strong><span>Often collected the same day</span></div></article>
              <article><Clock3 aria-hidden="true" /><div><strong>Afternoon call</strong><span>Usually collected the next day</span></div></article>
              <article><Truck aria-hidden="true" /><div><strong>At the vehicle</strong><span>About twenty minutes start to finish</span></div></article>
            </div>
            <aside className={styles.deadlineNote}><strong>Working against a deadline?</strong><span>Tell us about the move, possession date or landlord notice when you call. We will build the schedule around it when possible.</span></aside>
          </div>
        </section>

        <section className={styles.limitsSection}>
          <div className={`shell ${styles.limitsGrid}`}>
            <div>
              <p className={styles.kicker}>Clear boundaries</p>
              <h2>What We Can&apos;t Do</h2>
            </div>
            <div className={styles.limitCards}>
              <article><CircleOff aria-hidden="true" /><div><h3>No roadside recovery</h3><p>We do not provide boosts, lockouts, breakdown recovery or towing to repair shops.</p></div></article>
              <article><CircleOff aria-hidden="true" /><div><h3>No A-to-B vehicle moves</h3><p>The free tow exists because we purchased the vehicle. We do not move vehicles you intend to keep.</p></div></article>
              <article><CircleOff aria-hidden="true" /><div><h3>No pickup without ownership</h3><p>We cannot collect a vehicle you cannot demonstrate the legal right to sell.</p></div></article>
            </div>
          </div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className={`shell ${styles.faqGrid}`}>
            <div className={styles.faqIntro}>
              <p className={styles.kicker}>Free pickup questions</p>
              <h2>No Fine Print at the Bottom</h2>
              <p>If your access situation is unusual, describe it. We would rather plan for it than discover it with the truck in your driveway.</p>
              <a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a>
            </div>
            <div className={styles.faqList}>
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<span><ChevronRight aria-hidden="true" /></span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalSection}>
          <div className={`shell ${styles.finalGrid}`}>
            <div>
              <p className={styles.kicker}>Tell us where it is</p>
              <h2>Book a Free Pickup</h2>
              <p>Tell us where the vehicle is and what is in the way. We will bring the right truck and handle the rest.</p>
            </div>
            <div className={styles.finalActions}>
              <a className={styles.finalCall} href={phoneHref}><Phone aria-hidden="true" /><span><small>Call to book</small>{phoneDisplay}</span></a>
              <a className={styles.finalButton} href="#towing-quote">Get a Free Offer <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>Free pickup, fair cash offers and same-day service across Red Deer and Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div>
          <div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/car-wreckers-red-deer">Car Wreckers</Link><Link href="/damaged-car-removal-red-deer">Damaged Car Removal</Link></div>
          <div><h3>On this page</h3><a href="#why-free">Why it is free</a><a href="#coverage">Coverage</a><a href="#situations">Pickup situations</a><a href="#timing">Timing</a><a href="#faq">Questions</a></div>
          <div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><p>Mon–Sat: 8am–8pm<br />Sunday: By appointment</p><a className="footer-quote" href="#towing-quote">Book free pickup <ArrowRight aria-hidden="true" /></a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div>
      </footer>

      <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#towing-quote"><Truck aria-hidden="true" /> Free pickup</a></div>
      <BreadcrumbSchema current="Free Towing Red Deer" path="/free-towing-red-deer" />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
