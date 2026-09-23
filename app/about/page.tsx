import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, JsonLd } from "@/components/seo-schema";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarDays,
  Check,
  ChevronRight,
  FileCheck2,
  Gauge,
  MapPin,
  Menu,
  Phone,
  Recycle,
  Route,
  Scale,
  ShieldCheck,
  Truck,
  Users,
  Weight,
  Wrench,
} from "lucide-react";

import logo from "@/assets/junkmycarreddeer_red-logo.png";
import acreagePhoto from "@/assets/old-chevrolet-tahoe-acreage.jpeg";
import recyclingPhoto from "@/assets/stripped-yellow-car.jpeg";
import teamPhoto from "@/assets/used-suv-red-deer.jpeg";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | Buying Vehicles Across Alberta Since 1998",
  description:
    "Buying vehicles across Alberta since 1998 — over 500 a month, paid on the spot, AMVIC compliant. Based in Red Deer, serving all of Central Alberta.",
  alternates: { canonical: "https://www.junkmycarreddeer.ca/about" },
  openGraph: {
    title: "About Junk My Car Red Deer | Buying Since 1998",
    description:
      "More than 500 vehicles bought each month across Alberta, with firm offers, free towing and payment at pickup.",
    url: "https://www.junkmycarreddeer.ca/about",
    type: "website",
    images: [
      {
        url: teamPhoto.src,
        width: 1200,
        height: 630,
        alt: "Junk My Car Red Deer vehicle buying operation",
      },
    ],
  },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const volumeBenefits = [
  {
    icon: Gauge,
    eyebrow: "Market knowledge",
    title: "We already know what your vehicle is worth",
    text: "Buying roughly six thousand vehicles a year means we know what specific models yield, which parts move in Central Alberta, and what converters are worth this month—not last year. Quotes come back in hours and rarely change at pickup.",
  },
  {
    icon: Truck,
    eyebrow: "Efficient routing",
    title: "The tow is genuinely covered",
    text: "At our volume, an eighty-kilometre pickup works because our trucks are already moving across the region. There is no mileage charge, rural surcharge, minimum vehicle value or deduction when the truck arrives.",
  },
  {
    icon: BadgeDollarSign,
    eyebrow: "Immediate payment",
    title: "You’re paid the day we collect",
    text: "Choose cash on the spot or an e-transfer sent before the vehicle moves. No cheque in the mail, no payment after processing and no promise to settle next week.",
  },
] as const;

const towns = [
  "Springbrook", "Penhold", "Blackfalds", "Sylvan Lake", "Lacombe", "Innisfail",
  "Delburne", "Bentley", "Clive", "Spruce View", "Bowden", "Eckville",
  "Alix", "Ponoka", "Elnora", "Rimbey", "Olds", "Stettler",
] as const;

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": "https://www.junkmycarreddeer.ca/#business",
    name: "Junk My Car Red Deer",
    url: "https://www.junkmycarreddeer.ca/",
    logo: "https://www.junkmycarreddeer.ca/junk-my-car-red-deer-logo.png",
    telephone: "+1-403-427-0732",
    foundingDate: "1998",
    description: "Alberta vehicle buyer serving Red Deer and Central Alberta with cash offers and free towing.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4909 48 Street",
      addressLocality: "Red Deer",
      addressRegion: "AB",
      postalCode: "T4N 1S8",
      addressCountry: "CA",
    },
    areaServed: "Red Deer and Central Alberta",
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <div className="utility-bar">
        <div className="shell utility-inner">
          <span><MapPin aria-hidden="true" /> Red Deer &amp; 80 km around</span>
          <span className="utility-promise">Buying vehicles across Alberta since 1998</span>
          <a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="Junk My Car Red Deer home">
            <Image src={logo} alt="Junk My Car Red Deer" priority sizes="(max-width: 600px) 150px, 190px" />
          </Link>
          <nav className="desktop-nav" aria-label="About page navigation">
            <a href="#history">Our history</a>
            <a href="#volume">Why volume matters</a>
            <a href="#standards">Our standards</a>
            <a href="#processing">What happens next</a>
            <a href="#coverage">Coverage</a>
          </nav>
          <a className="button button-header" href="#about-quote">Get a cash offer <ArrowRight aria-hidden="true" /></a>
          <details className="menu-button">
            <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#history">Our history</a>
              <a href="#volume">Why volume matters</a>
              <a href="#standards">Our standards</a>
              <a href="#processing">What happens next</a>
              <a href="#coverage">Coverage</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <div className={`shell ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>About Us</span>
              </nav>
              <p className={styles.kicker}><CalendarDays aria-hidden="true" /> Alberta vehicle buyers since 1998</p>
              <h1>About Us</h1>
              <p className={styles.heroStatement}>Twenty-eight years of giving Alberta vehicle owners one clear number, one free pickup and payment before the vehicle leaves.</p>
              <div className={styles.heroActions}>
                <a className="button button-primary" href="#about-quote">Get a Free Offer <ArrowRight aria-hidden="true" /></a>
                <a className={styles.callButton} href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a>
              </div>
              <div className={styles.heroMetrics}>
                <div><strong>1998</strong><span>Established in Alberta</span></div>
                <div><strong>500+</strong><span>Vehicles bought monthly</span></div>
                <div><strong>80 km</strong><span>Central Alberta coverage</span></div>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <Image src={teamPhoto} alt="Vehicle purchased by Junk My Car Red Deer" fill priority sizes="(max-width: 850px) 100vw, 46vw" />
              <div className={styles.heroShade} />
              <div className={styles.yearStamp}><span>Since</span><strong>1998</strong><small>Alberta owned operation</small></div>
            </div>
          </div>
        </section>

        <section id="history" className={styles.historySection}>
          <div className={`shell ${styles.historyGrid}`}>
            <div className={styles.historyHeading}>
              <p className={styles.kicker}>The same job, done properly</p>
              <h2>Buying Vehicles in Alberta Since 1998</h2>
            </div>
            <div className={styles.editorialCopy}>
              <p className={styles.lead}>We&apos;ve been doing this for twenty-eight years—long enough to have bought vehicles from people who have since sold us their children&apos;s first cars.</p>
              <p>The market has changed underneath us several times: scrap prices, emissions rules, what people drive and how they sell it. What has not changed is the job itself. Somebody has a vehicle they do not want. We work out what it is worth, tell them, and if they agree, we collect it and pay them. Everything else is detail.</p>
              <p>Today we buy more than 500 vehicles a month across Alberta. This site covers our Red Deer and Central Alberta operation—the city, Red Deer County and eighteen communities out to about eighty kilometres.</p>
              <blockquote>One vehicle. One honest number. One pickup. Paid the same day.</blockquote>
            </div>
          </div>
        </section>

        <section id="volume" className={styles.volumeSection}>
          <div className="shell">
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>Experience you can actually use</p>
              <h2>What Buying 500 Vehicles a Month Does for You</h2>
              <p>Volume is not a boast. It is the reason accurate pricing, no-cost regional towing and immediate payment are possible.</p>
            </div>
            <div className={styles.benefitGrid}>
              {volumeBenefits.map(({ icon: Icon, eyebrow, title, text }) => (
                <article key={title}>
                  <div className={styles.benefitIcon}><Icon aria-hidden="true" /></div>
                  <span>{eyebrow}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className={styles.volumeRibbon}>
              <span><Check aria-hidden="true" /> Quotes in hours</span>
              <span><Check aria-hidden="true" /> No towing deductions</span>
              <span><Check aria-hidden="true" /> Payment at pickup</span>
            </div>
          </div>
        </section>

        <section id="standards" className={styles.standardsSection}>
          <div className={`shell ${styles.standardsGrid}`}>
            <div className={styles.licenceCard}>
              <ShieldCheck aria-hidden="true" />
              <span>Licensed Alberta business</span>
              <strong>AMVIC<br />Compliant</strong>
              <p>Accountable transactions, documented paperwork and regulated business practices.</p>
            </div>
            <div className={styles.standardsCopy}>
              <p className={styles.kicker}>A regulated transaction</p>
              <h2>Licensed and AMVIC Compliant</h2>
              <p>We operate as an AMVIC-compliant licensed business. The Alberta Motor Vehicle Industry Council regulates this industry in the province, helping make vehicle buyers accountable for the transaction, paperwork and what happens to the vehicle afterward.</p>
              <p>Practically, that means the bill of sale is completed properly, the transaction is documented and there is a regulator you can approach if something goes wrong. Anyone buying vehicles in Alberta without that is asking you to take their word for it.</p>
              <aside><FileCheck2 aria-hidden="true" /><p><strong>Paperwork is part of the service.</strong> You receive a completed bill of sale, keep your Alberta plate, and leave with a clear record of the transaction.</p></aside>
            </div>
          </div>
        </section>

        <section className={styles.pricingSection}>
          <div className={`shell ${styles.pricingGrid}`}>
            <div>
              <p className={styles.kicker}>The number stays put</p>
              <h2>How We Price—and Why We Don&apos;t Renegotiate in Your Driveway</h2>
              <p>There is a version of this business that quotes strong over the phone, arrives, finds a reason the vehicle is worth less and renegotiates while a flat deck idles outside. We have never operated that way.</p>
              <p>After twenty-eight years in a province where people talk to each other, that is not generosity—it is arithmetic. A renegotiated sale produces someone who tells the story for years.</p>
            </div>
            <div className={styles.priceFactors}>
              <article><Weight aria-hidden="true" /><div><h3>Weight sets the floor</h3><p>Steel trades by the tonne, so curb weight establishes the material baseline.</p></div></article>
              <article><Scale aria-hidden="true" /><div><h3>Non-ferrous content adds value</h3><p>Aluminium, copper, radiators and converters are worth more per kilo than steel.</p></div></article>
              <article><Wrench aria-hidden="true" /><div><h3>Reusable parts come off the top</h3><p>A working drivetrain or demanded component is worth more as a part than as scrap.</p></div></article>
              <article className={styles.honestyCard}><Users aria-hidden="true" /><div><h3>What we ask in return</h3><p>Describe it honestly. Missing converter, removed engine or severe damage—none stops the sale, but all affect the number. Upfront facts keep the quote right.</p></div></article>
            </div>
          </div>
        </section>

        <section id="processing" className={styles.processingSection}>
          <div className={styles.processingImage}>
            <Image src={recyclingPhoto} alt="Vehicle being dismantled for responsible parts and metal recycling" fill sizes="(max-width: 850px) 100vw, 46vw" />
            <div className={styles.processingCaption}><Recycle aria-hidden="true" /><span>Parts recovered.<strong>Materials returned to use.</strong></span></div>
          </div>
          <div className={styles.processingCopy}>
            <p className={styles.kicker}>After we buy it</p>
            <h2>What Happens to the Vehicles</h2>
            <p>Buying is the straightforward part. Processing an end-of-life vehicle properly is where corners get cut in this industry.</p>
            <div className={styles.processList}>
              <article><span>Fluids</span><p>Oil, coolant, brake and transmission fluid, and remaining fuel come out first.</p></article>
              <article><span>Hazards</span><p>Refrigerant is recovered; batteries, tires and mercury switches enter their proper streams.</p></article>
              <article><span>Parts</span><p>Anything with resale life is removed and inventoried for repair shops across Central Alberta.</p></article>
              <article><span>Metals</span><p>The remainder is separated into ferrous and non-ferrous material for recycling.</p></article>
            </div>
            <p className={styles.riverNote}>At 500 vehicles a month, that is a substantial amount of material kept out of the ground in a region that drains toward the Red Deer River.</p>
          </div>
        </section>

        <section id="coverage" className={styles.coverageSection}>
          <div className={`shell ${styles.coverageGrid}`}>
            <div className={styles.coverageCopy}>
              <p className={styles.kicker}>Where we work</p>
              <h2>Based in Red Deer. Moving Across Central Alberta.</h2>
              <p>We work throughout Red Deer on both sides of the river, at residential and industrial addresses, and across acreages, farms and country residential properties in Red Deer County—including Gasoline Alley, Burnt Lake, Balmoral Heights and Liberty Landing.</p>
              <div className={styles.townGrid}>
                {towns.map((town) => <span key={town}><MapPin aria-hidden="true" /> {town}</span>)}
              </div>
            </div>
            <div className={styles.coveragePhoto}>
              <Image src={acreagePhoto} alt="Vehicle pickup from a Central Alberta acreage" fill sizes="(max-width: 850px) 100vw, 43vw" />
              <div className={styles.coverageShade} />
              <div className={styles.coverageBadge}><Route aria-hidden="true" /><span><strong>18 communities</strong>Free towing to roughly 80 km</span></div>
            </div>
          </div>
        </section>

        <section id="about-quote" className={styles.contactSection}>
          <div className="shell">
            <div className={styles.contactHeading}>
              <div><p className={styles.kicker}>Get in touch</p><h2>Tell Us What You Have</h2></div>
              <div><p>Call or send the vehicle details through the form. We will come back the same day with a real number.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>Buying vehicles across Alberta since 1998. Based in Red Deer and serving Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div>
          <div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/car-wreckers-red-deer">Car Wreckers</Link><Link href="/damaged-car-removal-red-deer">Damaged Car Removal</Link><Link href="/free-towing-red-deer">Free Towing</Link></div>
          <div><h3>Company</h3><Link href="/about">About Us</Link><Link href="/how-it-works">How It Works</Link><Link href="/what-we-buy">What We Buy</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div>
          <div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><p>AMVIC compliant<br />Licence number to be added</p><a className="footer-quote" href="#about-quote">Get a free offer <ArrowRight aria-hidden="true" /></a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div>
      </footer>

      <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#about-quote"><BadgeDollarSign aria-hidden="true" /> Get offer</a></div>
      <BreadcrumbSchema current="About Us" path="/about" />
      <JsonLd data={organizationSchema} />
    </>
  );
}
