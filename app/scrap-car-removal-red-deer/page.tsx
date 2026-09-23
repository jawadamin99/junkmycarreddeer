import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeDollarSign,
  Car,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Gauge,
  MapPin,
  Menu,
  Phone,
  Recycle,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  Weight,
  Wrench,
} from "lucide-react";

import blackSedanPhoto from "@/assets/black-sedan-junkyard.jpeg";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import mapImage from "@/assets/red-deer-city-map.png";
import strippedCarPhoto from "@/assets/stripped-sedan-junkyard.jpeg";
import yellowCarPhoto from "@/assets/stripped-yellow-car.jpeg";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Scrap Car Removal Red Deer | Cash for Scrap Cars & Free Tow",
  description:
    "Scrap car removal in Red Deer with cash paid on the spot. We price by weight, parts and current metal markets, and the tow is always included.",
  alternates: { canonical: "/scrap-car-removal-red-deer" },
  openGraph: {
    title: "Scrap Car Removal Red Deer | Cash for Scrap Cars & Free Tow",
    description:
      "Get a fair scrap-car offer based on weight, reusable parts and current metal markets—with free towing across Red Deer and Central Alberta.",
    url: "/scrap-car-removal-red-deer",
    type: "website",
    images: [
      {
        url: strippedCarPhoto.src,
        width: 1200,
        height: 630,
        alt: "Scrap car removal in Red Deer with free towing",
      },
    ],
  },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const priceRows = [
  ["Compact car, complete, no converter", "$150 – $350"],
  ["Compact or mid-size car, complete with converter", "$300 – $650"],
  ["Full-size sedan or small SUV, complete", "$400 – $900"],
  ["Half-ton pickup or full-size SUV", "$600 – $1,400"],
  ["3/4-ton or 1-ton, diesel, or commercial", "$900 – $2,500+"],
] as const;

const pricingFactors = [
  {
    icon: Weight,
    title: "Weight is the floor",
    text: "Steel is traded by the tonne. A compact sedan weighs roughly 1,200–1,400 kg, a half-ton about 2,200 kg, and a heavy diesel can pass 3,000 kg. That difference alone can mean hundreds of dollars.",
    label: "Steel baseline",
  },
  {
    icon: Sparkles,
    title: "Non-ferrous metal is the margin",
    text: "Aluminium wheels and engine components, copper wiring, the radiator and alternator are worth several times more per kilo than plain steel.",
    label: "Aluminium + copper",
  },
  {
    icon: Gauge,
    title: "The converter is its own line item",
    text: "Catalytic converters contain platinum, palladium and rhodium. If yours is still on the vehicle, it factors into the offer. If it has been cut off, we explain exactly how that changes the number.",
    label: "Precious metals",
  },
  {
    icon: Wrench,
    title: "Reusable parts come off the top",
    text: "A good alternator, clean doors, a working window regulator or a useful rear differential has more value as a part than as shredded metal—and your offer should reflect that.",
    label: "Parts demand",
  },
  {
    icon: Car,
    title: "Completeness matters",
    text: "A vehicle already missing its engine, wheels or interior is worth less. We still buy stripped shells and partially dismantled cars; we simply price what is actually there.",
    label: "What remains",
  },
] as const;

const faqItems = [
  [
    "How much is my scrap car worth right now?",
    "Somewhere between $150 and $2,500 depending on weight, completeness and what is salvageable. Give us the year, make and model and we’ll give you a real figure rather than a range.",
  ],
  [
    "Do you pay by weight?",
    "Weight sets the baseline, but it isn’t the whole calculation. Non-ferrous content, the converter and reusable parts all move the number. Pricing on weight alone would be simpler for us and worse for you.",
  ],
  [
    "Can I remove parts before you take it?",
    "You can, and some people do. Just understand it lowers the offer, usually by more than you’ll make selling the parts individually. If you want to pull a specific item for sentimental or practical reasons, tell us and we’ll quote around it.",
  ],
  [
    "Does it need to be complete?",
    "No. We buy stripped shells, cars missing engines, and vehicles that have already been partly dismantled. The offer reflects what is actually there.",
  ],
  [
    "Is there a fee if the car is worth very little?",
    "Never. If the vehicle’s scrap value is low, the offer is low. It doesn’t go negative, and you’re not charged for the tow.",
  ],
  [
    "Do you scrap motorhomes, trailers or equipment?",
    "Sometimes. Motorhomes and larger units depend on size and access. Call and describe it—we’ll tell you straight whether it’s something we can handle.",
  ],
  [
    "What paperwork do you need?",
    "Photo ID matching the registered owner and proof of ownership. We complete the bill of sale on site. Keep your plate.",
  ],
] as const;

const processSteps = [
  {
    icon: Car,
    title: "Describe the vehicle",
    text: "Call or send the form with the year, make, model and a rough description. Tell us if the converter is gone, parts are missing, or it has been sitting in a field for six years. Accuracy gets you an accurate number.",
  },
  {
    icon: BadgeDollarSign,
    title: "Receive the real figure",
    text: "We come back the same day with a single cash figure. If it works for you, we book a pickup—usually the same day or the next.",
  },
  {
    icon: Truck,
    title: "Get paid before it leaves",
    text: "We arrive, complete the bill of sale, pay you, and load the vehicle. No towing fee, no deduction and no follow-up invoice.",
  },
] as const;

export default function ScrapCarRemovalPage() {
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
    name: "Scrap Car Removal Red Deer",
    serviceType: "Scrap car removal and cash vehicle buying",
    url: "https://junkmycarreddeer.ca/scrap-car-removal-red-deer",
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
    offers: { "@type": "Offer", priceCurrency: "CAD", description: "Free towing included" },
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
          <nav className="desktop-nav" aria-label="Scrap car removal navigation">
            <a href="#pricing">How pricing works</a>
            <a href="#payouts">Payouts</a>
            <a href="#recycling">Recycling</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button-header" href="#scrap-quote">Get a scrap quote <ArrowRight aria-hidden="true" /></a>
          <details className="menu-button">
            <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#pricing">How pricing works</a>
              <a href="#payouts">Payouts</a>
              <a href="#recycling">Recycling</a>
              <a href="#process">Process</a>
              <a href="#faq">FAQ</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>Scrap Car Removal</span>
              </nav>
              <p className={styles.kicker}><Recycle aria-hidden="true" /> Scrap value, explained</p>
              <h1>Scrap Car Removal in Red Deer <span>— Get Paid What the Metal Is Worth</span></h1>
              <p className={styles.heroLead}>&ldquo;Scrap&rdquo; isn&apos;t a verdict on your car. It&apos;s a pricing method. When a vehicle is past the point where anyone wants to drive it, it still has a specific dollar value based on what it weighs and what comes off it—and you should be the one collecting that value.</p>
              <div className={styles.heroActions}>
                <a className="button button-primary" href="#scrap-quote">What&apos;s Mine Worth? <ArrowDownRight aria-hidden="true" /></a>
                <a className={styles.callButton} href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a>
              </div>
              <div className={styles.heroFacts}>
                <div><strong>$150–$2,500+</strong><span>typical scrap-basis offers</span></div>
                <div><strong>$0 tow fee</strong><span>the offer is what you receive</span></div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image src={strippedCarPhoto} alt="Stripped sedan ready for scrap car removal in Red Deer" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
              <div className={styles.heroOverlay} />
              <div className={styles.materialStamp}>
                <Weight aria-hidden="true" />
                <span>Weight</span><i>+</i><span>Parts</span><i>+</i><span>Metal</span>
              </div>
              <div className={styles.photoCaption}><strong>Not worthless.</strong><span>Just valued differently.</span></div>
            </div>
          </div>
          <div className={styles.promiseBar}>
            <span><Check aria-hidden="true" /> Cash paid at pickup</span>
            <span><Check aria-hidden="true" /> Free towing included</span>
            <span><Check aria-hidden="true" /> Stripped shells accepted</span>
            <span><Check aria-hidden="true" /> Rural pickup available</span>
          </div>
        </section>

        <section id="scrap-quote" className={styles.heroQuoteSection} aria-label="Get a scrap car quote">
          <div className={`shell ${styles.heroQuotePanel}`}>
            <QuoteForm />
          </div>
        </section>

        <section className={styles.thresholdSection}>
          <div className="shell">
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>The crossover point</p>
              <h2>When a Car Becomes a Scrap Car</h2>
              <p>There&apos;s a line, and most people cross it without noticing.</p>
            </div>
            <div className={styles.thresholdGrid}>
              <div className={styles.thresholdRail}>
                <article><span>Used</span><h3>Someone wants to drive it</h3><p>A used car is worth what the next owner will pay to put it back on the road.</p></article>
                <article><span>Junk</span><h3>Someone wants to fix or part it</h3><p>A junk car still has enough repair or parts value to support another use.</p></article>
                <article className={styles.activeThreshold}><span>Scrap</span><h3>The material becomes the value</h3><p>A scrap car is worth what the recoverable steel, non-ferrous metal and remaining parts are worth.</p></article>
              </div>
              <div className={styles.thresholdStory}>
                <div className={styles.thresholdPhoto}><Image src={blackSedanPhoto} alt="End-of-life sedan at a vehicle recycling yard" fill sizes="(max-width: 860px) 100vw, 46vw" /></div>
                <p>The crossover usually happens when the frame or rockers have rusted past a safe repair, the engine or transmission has failed on an older vehicle, an out-of-province inspection produces a repair list longer than the car&apos;s value, or it has simply reached the end after twenty-two Central Alberta winters.</p>
                <blockquote>None of that makes it worthless. It changes how it gets valued.</blockquote>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className={styles.pricingSection}>
          <div className="shell">
            <div className={`${styles.sectionHeading} ${styles.pricingHeading}`}>
              <p className={styles.kicker}>No mystery-yard math</p>
              <h2>How a Scrap Car Is Actually Priced</h2>
              <p>Most people have never been told the honest version. Your offer is a stack of recoverable values—not one vague number pulled from the air.</p>
            </div>
            <div className={styles.factorGrid}>
              {pricingFactors.map(({ icon: Icon, title, text, label }, index) => (
                <article className={index === 0 ? styles.factorFeature : styles.factorCard} key={title}>
                  <div className={styles.factorIcon}><Icon aria-hidden="true" /></div>
                  <span>{label}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <aside className={styles.truthNote}>
              <ShieldCheck aria-hidden="true" />
              <p><strong>If the converter is missing, we say so.</strong> If the vehicle has stronger-than-average parts value, we say that too. The same calculation should work in both directions.</p>
            </aside>
          </div>
        </section>

        <section id="payouts" className={styles.payoutSection}>
          <div className="shell">
            <div className={styles.payoutGrid}>
              <div>
                <p className={styles.kicker}>Realistic numbers</p>
                <h2>What Scrap Cars Typically Pay in Red Deer</h2>
                <p className={styles.payoutIntro}>These are scrap-basis figures—not teaser prices and not guarantees made without seeing the details.</p>
                <div className={styles.priceTable} role="table" aria-label="Typical scrap car offers">
                  <div className={styles.priceHead} role="row"><span role="columnheader">Vehicle</span><span role="columnheader">Typical scrap offer</span></div>
                  {priceRows.map(([vehicle, amount]) => (
                    <div className={styles.priceRow} role="row" key={vehicle}><span role="cell">{vehicle}</span><strong role="cell">{amount}</strong></div>
                  ))}
                </div>
              </div>
              <aside className={styles.valueAside}>
                <CircleDollarSign aria-hidden="true" />
                <span>The important distinction</span>
                <h3>Scrap value is the floor—not always the final offer.</h3>
                <p>If the vehicle still has a decent drivetrain, clean panels or unusually strong parts demand, the offer moves up from these numbers—sometimes considerably.</p>
                <p>That isn&apos;t generosity. It is simply what the vehicle is worth.</p>
                <a href="#scrap-quote">Price my vehicle <ArrowRight aria-hidden="true" /></a>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.quoteDifference}>
          <div className="shell">
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>Same car, different math</p>
              <h2>Why Two Quotes on the Same Car Can Be $400 Apart</h2>
              <p>Because they are not measuring the same thing.</p>
            </div>
            <div className={styles.differenceGrid}>
              <article><Weight aria-hidden="true" /><span>Weight-only quote</span><h3>Fast—and usually low</h3><p>A four-second quote based only on tonnes ignores the converter, wheels, non-ferrous metal and anything salvageable.</p></article>
              <article><Truck aria-hidden="true" /><span>Net-after-towing quote</span><h3>High until the truck arrives</h3><p>The quoted number looks stronger until towing is deducted at pickup and the amount you were told is not the amount you receive.</p></article>
              <article className={styles.differenceWinner}><BadgeDollarSign aria-hidden="true" /><span>Our single figure</span><h3>Everything already inside it</h3><p>Parts, non-ferrous content, weight and free towing are all accounted for. The figure holds for the pickup window we agree on.</p></article>
            </div>
            <p className={styles.marketNote}><Clock3 aria-hidden="true" /><span><strong>Commodity timing genuinely matters.</strong> Steel and non-ferrous prices move, so a quote from six weeks ago is not today&apos;s market.</span></p>
          </div>
        </section>

        <section id="recycling" className={styles.recyclingSection}>
          <div className={styles.recyclingImage}>
            <Image src={yellowCarPhoto} alt="Partially dismantled vehicle ready for responsible recycling" fill sizes="(max-width: 900px) 100vw, 48vw" />
            <div className={styles.recyclingImageLabel}><Recycle aria-hidden="true" /><span>End of road.<strong>Start of a new material cycle.</strong></span></div>
          </div>
          <div className={styles.recyclingCopy}>
            <p className={styles.kicker}>After pickup</p>
            <h2>What Happens After It Leaves Your Property</h2>
            <p>An end-of-life vehicle cannot simply be crushed. There is a sequence, and skipping it is how contaminated ground happens.</p>
            <div className={styles.recycleList}>
              <article><span><Wrench aria-hidden="true" /></span><div><h3>Fluids and refrigerant come out</h3><p>Engine oil, coolant, brake and transmission fluid, remaining fuel and air-conditioning refrigerant are recovered safely.</p></div></article>
              <article><span><ShieldCheck aria-hidden="true" /></span><div><h3>Hazardous items are separated</h3><p>The battery, tires and—on older vehicles—mercury switches go into their correct recycling streams.</p></div></article>
              <article><span><Car aria-hidden="true" /></span><div><h3>Useful parts get another life</h3><p>Anything with resale life is removed and inventoried for repair shops, rebuilders and other vehicles.</p></div></article>
              <article><span><Recycle aria-hidden="true" /></span><div><h3>Metals return to the supply chain</h3><p>Ferrous and non-ferrous material becomes rebar, structural steel or new body panels instead of waste.</p></div></article>
            </div>
            <p className={styles.riverNote}>It is not glamorous work, but given how much ground around here drains toward the Red Deer River, it matters.</p>
          </div>
        </section>

        <section id="process" className={styles.processSection}>
          <div className="shell">
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>From fence line to flatbed</p>
              <h2>The Process, Start to Finish</h2>
              <p>One honest description, one firm number and one free pickup.</p>
            </div>
            <div className={styles.processGrid}>
              {processSteps.map(({ icon: Icon, title, text }, index) => (
                <article key={title}>
                  <div><strong>0{index + 1}</strong><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.coverageSection}>
          <div className="shell">
            <div className={styles.coverageGrid}>
              <div className={styles.coverageMap}>
                <Image src={mapImage} alt="Map of Red Deer and the surrounding pickup area" fill sizes="(max-width: 860px) 100vw, 46vw" />
                <div className={styles.mapShade} />
                <div className={styles.mapPin}><MapPin aria-hidden="true" /><strong>Red Deer</strong><span>Free pickup hub</span></div>
                <div className={styles.radiusTag}><Route aria-hidden="true" /><span><strong>80 km</strong> service radius</span></div>
              </div>
              <div className={styles.coverageCopy}>
                <p className={styles.kicker}>Where we collect</p>
                <h2>City Driveways, Industrial Lots and County Fence Lines</h2>
                <p>We collect across Red Deer—north and south of the river, residential and industrial—plus acreages and farms throughout Red Deer County.</p>
                <p>Free pickup extends to eighteen Central Alberta towns, including Blackfalds, Lacombe, Sylvan Lake, Penhold, Innisfail, Ponoka, Rimbey, Eckville, Olds and Stettler.</p>
                <aside><Truck aria-hidden="true" /><p><strong>Farm and rural scrap is a specialty, not an exception.</strong> If a row of vehicles has sat along a fence line since the nineties, that can be one visit and a meaningful cheque.</p></aside>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className="shell">
            <div className={styles.faqGrid}>
              <div className={styles.faqIntro}>
                <p className={styles.kicker}>Straight answers</p>
                <h2>Questions People Ask About Scrapping a Car</h2>
                <p>Still unsure what category your vehicle falls into? Describe it to us. You do not need to diagnose it first.</p>
                <a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a>
              </div>
              <div className={styles.faqList}>
                {faqItems.map(([question, answer], index) => (
                  <details key={question} open={index === 0}>
                    <summary>{question}<span><ChevronRight aria-hidden="true" /></span></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalSection}>
          <div className="shell">
            <div className={styles.finalCopy}>
              <p className={styles.kicker}>A real figure today</p>
              <h2>Find Out What Yours Is Worth</h2>
              <p>It takes one phone call and about ninety seconds. Tell us what is there, what is missing and where it is sitting—we will handle the rest.</p>
              <div className={styles.finalPromises}>
                <span><Check aria-hidden="true" /> No towing deduction</span>
                <span><Check aria-hidden="true" /> No obligation</span>
                <span><Check aria-hidden="true" /> Same-day response</span>
              </div>
              <div className={styles.finalActions}>
                <a className={styles.finalCall} href={phoneHref}><Phone aria-hidden="true" /><span><small>Call for a scrap quote</small>{phoneDisplay}</span></a>
                <a className={styles.finalQuoteButton} href="#scrap-quote">Get My Scrap Quote <ArrowRight aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>Fair scrap pricing, free towing, and same-day pickup across Red Deer and Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div>
          <div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/car-wreckers-red-deer">Car Wreckers</Link><Link href="/free-towing-red-deer">Free Towing</Link></div>
          <div><h3>On this page</h3><a href="#pricing">How pricing works</a><a href="#payouts">Typical payouts</a><a href="#recycling">Recycling process</a><a href="#process">Pickup process</a><a href="#faq">Questions</a></div>
          <div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><p>Mon–Sat: 8am–8pm<br />Sunday: By appointment</p><a className="footer-quote" href="#scrap-quote">Request a scrap quote <ArrowRight aria-hidden="true" /></a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div>
      </footer>

      <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#scrap-quote"><BadgeDollarSign aria-hidden="true" /> Get offer</a></div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
