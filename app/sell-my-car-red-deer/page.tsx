import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, JsonLd } from "@/components/seo-schema";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeDollarSign,
  Car,
  Check,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  Gauge,
  HandCoins,
  MapPin,
  Menu,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";

import logo from "@/assets/junkmycarreddeer_red-logo.png";
import privateSalePhoto from "@/assets/red-coupe-driveway.jpeg";
import usedSedanPhoto from "@/assets/used-sedan-red-deer.jpeg";
import heroSuvPhoto from "@/assets/used-suv-red-deer.jpeg";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sell My Car Red Deer | One Cash Offer, No Haggling",
  description:
    "Want to sell your car in Red Deer without the ads, no-shows and haggling? Get one cash offer, free pickup at your door, and payment the day we collect it.",
  alternates: { canonical: "https://www.junkmycarreddeer.ca/sell-my-car-red-deer" },
  openGraph: {
    title: "Sell My Car Red Deer | One Cash Offer, No Haggling",
    description: "One cash offer, free pickup at your door, and payment the day we collect your vehicle in Red Deer.",
    url: "https://www.junkmycarreddeer.ca/sell-my-car-red-deer",
    type: "website",
    images: [{ url: heroSuvPhoto.src, width: 1284, height: 986, alt: "Used SUV ready to sell for cash in Red Deer" }],
  },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const sellingPaths = [
  {
    label: "Highest ceiling",
    title: "Private sale",
    verdict: "Best for clean, popular, newer vehicles",
    text: "You photograph it, write the ad, repeat the same answers, hold Saturday open for a no-show and let strangers test drive it. When it works, it gets the most money. It works badly once age, rust, kilometres or real problems enter the picture.",
    tone: "light",
  },
  {
    label: "Fast—if you’re buying",
    title: "Dealer trade-in",
    verdict: "Credit toward another vehicle, not cash",
    text: "Simple when you are purchasing from that dealer the same day. The number is usually below private-sale value, and dealers become selective quickly once a vehicle has real kilometres, rust or mechanical issues.",
    tone: "dark",
  },
  {
    label: "Shortest route",
    title: "Direct cash sale",
    verdict: "One offer, free pickup, paid at collection",
    text: "No ad, negotiating, no-shows or strangers. A clean car may bring less than a patient private sale, but problem vehicles often land well above what a dealer is willing to offer.",
    tone: "red",
  },
] as const;

const valueFactors = [
  [Truck, "What it is", "Trucks and SUVs hold value far better in Alberta than sedans. Central Alberta buys trucks, and the local market sets the number."],
  [Gauge, "Kilometres", "QEII commuting means many Red Deer vehicles carry more kilometres than their age suggests. A five-year-old car with 220,000 km prices like an older one."],
  [Wrench, "Rust", "Rockers, wheel wells, brake and fuel lines, and the frame. Five months of road salt makes rust the biggest local value killer."],
  [CircleDollarSign, "What it needs", "Tires, brakes, a windshield or an upcoming timing belt are costs the next owner must absorb, so they factor into the offer."],
  [Sparkles, "Cosmetics", "Hail dimples, a cracked bumper or mismatched panel matter less to us than to a private buyer—often making us the better option for a dented but healthy car."],
] as const;

const faqItems = [
  ["How much will you pay for my car?", "Running vehicles generally fall between $800 and $15,000. Year, make, model, kilometres, rust and mechanical condition decide where. One phone call gets you a real figure."],
  ["Is the offer negotiable?", "It is our best number rather than an opening position, so there is not much room in it. What we will not do is quote high to get into your driveway and then talk it down—that is the practice this process exists to avoid."],
  ["How quickly can this be done?", "Offer within a few hours. Pickup is usually same day or next. Start to finish, most sales close inside twenty-four hours."],
  ["Do I need a safety or out-of-province inspection?", "No. We buy as-is. If it already failed an inspection, that is fine—tell us, and it simply factors into the number."],
  ["Can I sell a car that’s still financed?", "Yes, with the lien handled as part of the sale. Tell us upfront so we can arrange it properly."],
  ["What if I’m selling on behalf of a relative?", "Common, and usually workable. Estate sales and vehicles owned by someone who can no longer drive come up often. You will need documentation showing you can sell it—call and we will tell you exactly what."],
  ["Cash or e-transfer?", "Either. Both happen before the vehicle leaves."],
] as const;

const vehicleTypes = ["Sedans", "Hatchbacks", "Coupés", "SUVs", "Crossovers", "Half-tons", "¾-ton trucks", "One-tons", "Diesels", "Minivans", "Cargo vans", "Fleet vehicles", "Farm trucks", "Oilfield units"];

export default function SellMyCarPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sell My Car Red Deer",
    serviceType: "Direct cash vehicle buying",
    url: "https://www.junkmycarreddeer.ca/sell-my-car-red-deer",
    description: "One cash offer for used vehicles in Red Deer, with free pickup and payment at collection.",
    provider: {
      "@type": "AutomotiveBusiness",
      name: "Junk My Car Red Deer",
      telephone: "+1-403-427-0732",
      address: { "@type": "PostalAddress", streetAddress: "4909 48 Street", addressLocality: "Red Deer", addressRegion: "AB", postalCode: "T4N 1S8", addressCountry: "CA" },
    },
    areaServed: "Red Deer and Central Alberta",
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="utility-bar"><div className="shell utility-inner"><span><MapPin aria-hidden="true" /> Red Deer &amp; 80 km around</span><span className="utility-promise">Same-day pickup · Free towing · Cash on the spot</span><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div></div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="Junk My Car Red Deer home"><Image src={logo} alt="Junk My Car Red Deer" priority sizes="(max-width: 600px) 150px, 190px" /></Link>
          <nav className="desktop-nav" aria-label="Sell my car navigation"><a href="#options">Your options</a><a href="#value">What we pay</a><a href="#appointment">The appointment</a><a href="#areas">Coverage</a><a href="#faq">FAQ</a></nav>
          <a className="button button-header" href="#sell-quote">Get my offer <ArrowRight aria-hidden="true" /></a>
          <details className="menu-button"><summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary><nav aria-label="Mobile navigation"><a href="#options">Your options</a><a href="#value">What we pay</a><a href="#appointment">The appointment</a><a href="#areas">Coverage</a><a href="#faq">FAQ</a></nav></details>
        </div>
      </header>

      <main id="main" className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>Sell My Car</span></nav>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.kicker}><HandCoins aria-hidden="true" /> The shortest route to sold</p>
                <h1>Sell My Car Red Deer <span>— One Offer, No Haggling, Paid the Same Day</span></h1>
                <p className={styles.heroLead}>If you&apos;ve got a car you want gone and would rather not spend a month managing strangers, this is the shortest route from &ldquo;I should sell that&rdquo; to money in your account. Tell us what it is, get a number, and we&apos;ll come to you.</p>
                <div className={styles.heroActions}><a className="button button-primary" href="#sell-quote">Get My Offer <ArrowDownRight aria-hidden="true" /></a><a className={styles.callLink} href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a></div>
                <div className={styles.heroChecks}><span><Check aria-hidden="true" /> No ads</span><span><Check aria-hidden="true" /> No test drives</span><span><Check aria-hidden="true" /> No haggling</span></div>
              </div>
              <div className={styles.heroVisual}>
                <Image src={heroSuvPhoto} alt="Used SUV ready to sell for cash from a Red Deer driveway" fill priority sizes="(max-width: 880px) 100vw, 47vw" />
                <div className={styles.heroShade} />
                <div className={styles.offerTicket}><span>Offer</span><strong>Today</strong><i /><span>Pickup</span><strong>Free</strong><i /><span>Payment</span><strong>Before it leaves</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="sell-quote" className={styles.quoteSection} aria-label="Get an offer for your car"><div className={`shell ${styles.quotePanel}`}><QuoteForm /></div></section>

        <section id="options" className={styles.optionsSection}>
          <div className="shell">
            <header className={styles.sectionHeading}><p className={styles.kicker}>Choose your trade-off</p><h2>Three Ways to Sell a Car in This City</h2><p>There are really only three, and each is right for a different person. It is worth being straight about which is which.</p></header>
            <div className={styles.pathGrid}>
              {sellingPaths.map((path) => <article className={styles[path.tone]} key={path.title}><span>{path.label}</span><h3>{path.title}</h3><strong>{path.verdict}</strong><p>{path.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className={styles.honestySection}>
          <div className={styles.honestyPhoto}><Image src={privateSalePhoto} alt="Clean newer red coupe that may earn more through a patient private sale" fill sizes="(max-width: 860px) 100vw, 44vw" /></div>
          <div className={styles.honestyCopy}>
            <p className={styles.kicker}>The honest answer</p><h2>When You Should Not Sell to Us</h2>
            <p>If your vehicle is three years old, low kilometres, undamaged, has its service history in a folder, and is one of the models everyone in Alberta wants—a recent half-ton, Tacoma or RAV4—you will do better selling it privately. Genuinely.</p>
            <blockquote>That&apos;s not modesty. It&apos;s arithmetic.</blockquote>
            <p>We have to resell it, so a spread must exist somewhere. Where we become the better deal is when friction enters: high kilometres, cosmetic damage, a mechanical issue on the way, an unpopular model, out-of-province history—or simply your time being worth more than the difference.</p>
            <div className={styles.fitLine}><span>Clean + recent + patience</span><i /><strong>Sell privately</strong></div>
            <div className={`${styles.fitLine} ${styles.fitBest}`}><span>Friction + urgency + certainty</span><i /><strong>Get our offer</strong></div>
          </div>
        </section>

        <section id="value" className={styles.valueSection}>
          <div className="shell">
            <div className={styles.valueHeader}><div><p className={styles.kicker}>Running vehicles lead the range</p><h2>What We Pay for Running Vehicles</h2><p>Depending on the vehicle, offers run from around $800 up to $15,000.</p></div><div className={styles.range}><small>Typical running range</small><strong>$800</strong><span>to</span><strong>$15,000</strong></div></div>
            <div className={styles.valueLayout}>
              <div className={styles.valuePhoto}><Image src={usedSedanPhoto} alt="High-kilometre used sedan assessed for a direct cash offer" fill sizes="(max-width: 860px) 100vw, 43vw" /><div><BadgeDollarSign aria-hidden="true" /><span>Dents matter less than<strong>condition + demand</strong></span></div></div>
              <div className={styles.factorList}>{valueFactors.map(([Icon, title, text]) => <article key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
            </div>
            <aside className={styles.offerPromise}><ShieldCheck aria-hidden="true" /><p><strong>No phone lowball followed by driveway renegotiation.</strong> The figure you are given is the figure you are paid, assuming the vehicle matches what you told us.</p><a href="#sell-quote">Get my number <ArrowRight aria-hidden="true" /></a></aside>
          </div>
        </section>

        <section id="appointment" className={styles.appointmentSection}>
          <div className="shell">
            <header className={styles.sectionHeading}><p className={styles.kicker}>About twenty minutes</p><h2>What the Appointment Actually Looks Like</h2><p>Most of the time is paperwork. There is no mechanic&apos;s inspection and no theatrical list of manufactured faults designed to soften you up for a lower number.</p></header>
            <div className={styles.appointmentTrack}>
              <article><span>Arrival</span><MapPin aria-hidden="true" /><h3>We come to your address</h3><p>Home, work, the repair shop, or your parents&apos; driveway in Normandeau.</p></article>
              <article><span>Walk-around</span><Car aria-hidden="true" /><h3>We confirm the description</h3><p>A straightforward look to make sure the vehicle is what we discussed.</p></article>
              <article><span>Paperwork</span><FileCheck2 aria-hidden="true" /><h3>We complete the bill of sale</h3><p>Both sides sign, and you leave with your own copy.</p></article>
              <article><span>Payment</span><HandCoins aria-hidden="true" /><h3>You are paid before it moves</h3><p>Cash or e-transfer, then we load it or drive it away.</p></article>
            </div>
          </div>
        </section>

        <section className={styles.paperworkSection}>
          <div className="shell">
            <div className={styles.paperworkGrid}>
              <div><p className={styles.kicker}>Less than people expect</p><h2>The Alberta Paperwork, Briefly</h2><p>Bring photo ID matching the registered owner and proof of ownership. We write the bill of sale on site—you do not prepare one.</p></div>
              <div className={styles.paperSteps}>
                <article><span><FileCheck2 aria-hidden="true" /></span><div><h3>Before pickup</h3><p>Have your ID, registration and vehicle details ready.</p></div></article>
                <article><span><Car aria-hidden="true" /></span><div><h3>Before we leave</h3><p>Take your plate off. In Alberta it belongs to you, not the car.</p></div></article>
                <article><span><ShieldCheck aria-hidden="true" /></span><div><h3>After the sale</h3><p>Cancel or transfer registration at a registry and call your insurer about any prepaid-policy refund.</p></div></article>
              </div>
            </div>
            <p className={styles.lienNote}><strong>Still financed?</strong> Mention the outstanding loan when you call. Lien payouts are routine; they simply need to be arranged rather than discovered on pickup day.</p>
          </div>
        </section>

        <section className={styles.reasonsSection}>
          <div className="shell">
            <header className={styles.sectionHeading}><p className={styles.kicker}>More than money</p><h2>Why People Choose This Over an Ad</h2><p>Usually it is not because they dislike taking photos. They need the sale finished.</p></header>
            <div className={styles.reasonGrid}>{[
              ["Moving", "The move is eleven days away and the second vehicle cannot come."],
              ["An estate", "The family is clearing a parent’s property from another city."],
              ["Marketplace fatigue", "Three weeks, two serious enquiries, and both went quiet."],
              ["Already replaced", "The new vehicle is home and now two policies are running."],
              ["Life changed", "A divorce, job change, or condo move leaves one stall and two cars."],
            ].map(([title, text]) => <article key={title}><span>“</span><h3>{title}</h3><p>{text}</p></article>)}</div>
            <blockquote>In all of those, the difference between our offer and a perfect private sale is worth less than being finished by Thursday.</blockquote>
          </div>
        </section>

        <section className={styles.buySection}>
          <div className="shell"><div className={styles.buyHeading}><p className={styles.kicker}>Everything we&apos;ll buy</p><h2>Running Is Ideal. It Is Not Required.</h2><p>If it does not start, that is a different service—see <Link href="/junk-car-removal-red-deer">junk car removal</Link>—but you are in the right place either way and the same phone number reaches us.</p></div></div>
          <div className={styles.marquee}><div>{[...vehicleTypes, ...vehicleTypes].map((item, index) => <span key={`${item}-${index}`}>{item}<i>•</i></span>)}</div></div>
        </section>

        <section id="areas" className={styles.areasSection}>
          <div className="shell"><div className={styles.areasGrid}><div><p className={styles.kicker}>Where we come to you</p><h2>Your Door, Your Workplace, Your County Road</h2><p>Any address in Red Deer, on either side of the river. Acreages and rural properties throughout Red Deer County. And free across eighteen Central Alberta towns.</p><p>Blackfalds, Lacombe, Sylvan Lake, Penhold, Springbrook, Innisfail, Bowden, Ponoka, Rimbey, Olds, Stettler and more.</p><aside><Route aria-hidden="true" /><span><strong>No travel charge.</strong>No minimum vehicle value required.</span></aside></div><div className={styles.coverageCard}><MapPin aria-hidden="true" /><strong>80 km</strong><span>Free pickup radius</span><i /><p>Red Deer + Red Deer County + 18 nearby communities</p></div></div></div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className="shell"><div className={styles.faqGrid}><div className={styles.faqIntro}><p className={styles.kicker}>Straight answers</p><h2>Selling Your Car for Cash—FAQs</h2><p>Call if your situation has paperwork, financing or timing complications. Most are easier to solve than they sound.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div className={styles.faqList}>{faqItems.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span><ChevronRight aria-hidden="true" /></span></summary><p>{answer}</p></details>)}</div></div></div>
        </section>

        <section className={styles.finalSection}><div className="shell"><div className={styles.finalInner}><p className={styles.kicker}>Get your number</p><h2>No Ad to Write. No Photos to Take. No Saturday to Give Up.</h2><div><a className={styles.finalCall} href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a><a className={styles.finalOffer} href="#sell-quote">Get a Free Offer <ArrowRight aria-hidden="true" /></a></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>One cash offer, free pickup, and same-day payment across Red Deer and Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/car-wreckers-red-deer">Car Wreckers</Link><Link href="/free-towing-red-deer">Free Towing</Link></div><div><h3>On this page</h3><a href="#options">Selling options</a><a href="#value">What we pay</a><a href="#appointment">The appointment</a><a href="#areas">Coverage</a><a href="#faq">Questions</a></div><div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><p>Mon–Sat: 8am–8pm<br />Sunday: By appointment</p><a className="footer-quote" href="#sell-quote">Request an offer <ArrowRight aria-hidden="true" /></a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div></footer>
      <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#sell-quote"><BadgeDollarSign aria-hidden="true" /> Get offer</a></div>
      <BreadcrumbSchema current="Sell My Car Red Deer" path="/sell-my-car-red-deer" />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
