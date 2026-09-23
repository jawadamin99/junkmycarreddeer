import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeDollarSign,
  BatteryWarning,
  Car,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  CloudHail,
  FileCheck2,
  Gauge,
  HandCoins,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  Recycle,
  Route,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Truck,
  TriangleAlert,
  Weight,
  Wrench,
  Zap,
} from "lucide-react";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import heroTowPhoto from "@/assets/junk-pickup-free-towing.jpeg";
import drivewayCarPhoto from "@/assets/red-coupe-driveway.jpeg";
import strippedCarPhoto from "@/assets/stripped-sedan-junkyard.jpeg";
import acreageTruckPhoto from "@/assets/older-ford-f150-acreage.jpeg";
import redDeerCityMap from "@/assets/red-deer-city-map.png";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd, websiteSchema } from "@/components/seo-schema";

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const payoutRanges = [
  { condition: "Scrap only", detail: "Stripped, shell, or missing major parts", amount: "$150 – $500", level: 18 },
  { condition: "Non-running but complete", detail: "All major parts still with the vehicle", amount: "$400 – $1,500", level: 32 },
  { condition: "High-mileage runner", detail: "Running vehicle, 10+ years old", amount: "$800 – $3,500", level: 47 },
  { condition: "Hail-damaged or write-off", detail: "Collision, hail, or insurance loss", amount: "$1,000 – $6,000", level: 65 },
  { condition: "Newer running car, SUV or truck", detail: "Driveable and in stronger demand", amount: "$3,000 – $15,000", level: 100 },
];

const offerFactors = [
  [Car, "Year, make & model", "Some vehicles have far stronger parts demand than others."],
  [Gauge, "Whether it runs", "A driveable car is worth more than a non-runner, but we buy both."],
  [Route, "Odometer reading", "Central Alberta vehicles often carry high kilometres from QEII commuting."],
  [Wrench, "Repairability", "Is it worth fixing, or is the repair bill higher than the vehicle’s value?"],
  [TriangleAlert, "Rust & frame condition", "Road salt and freeze-thaw take a real toll here."],
  [CloudHail, "Hail & collision damage", "We still buy them; the condition simply changes the number."],
  [Weight, "Curb weight", "Heavier vehicles carry more recoverable steel."],
  [Sparkles, "Recoverable materials", "Catalytic converters, aluminium, copper and precious metals factor in."],
  [BadgeDollarSign, "Current scrap prices", "Metal prices per tonne move month to month."],
] as const;

const vehicleTypes = [
  "Sedans", "Hatchbacks", "Coupés", "SUVs & crossovers", "Half-ton pickups",
  "¾-ton & 1-ton trucks", "Diesel trucks", "Minivans", "Cargo vans",
  "Farm & fleet vehicles", "Oilfield service trucks", "Commercial & box trucks", "4x4s",
];

const acceptedConditions = [
  "Won’t start, dead battery, or seized engine",
  "Blown engine, head gasket, or transmission",
  "Failed an out-of-province inspection",
  "Hail-damaged or storm-damaged vehicles",
  "Accident damage and insurance write-offs",
  "Salvage and non-repairable status vehicles",
  "Flood or fire damage",
  "Rusted frames, rotted rockers, or floor pans",
  "High-kilometre vehicles a dealer wouldn’t touch",
  "Abandoned, inherited, or estate vehicles",
  "Partially dismantled or missing parts",
  "Anything that simply isn’t worth repairing",
];

const services = [
  { icon: HandCoins, title: "Cash for Used Cars", text: "Still running and road-worthy? We buy driveable vehicles outright and pay more for them than we do for scrap. Skip the ads, test drives, and strangers at your house.", href: "#quote", link: "Get an offer" },
  { icon: Car, title: "Junk Car Removal", text: "A vehicle that won’t start and isn’t worth fixing costs you money every month it sits there. We haul it away free and pay you for it.", href: "/junk-car-removal-red-deer", link: "Junk car removal service in Red Deer" },
  { icon: Recycle, title: "Scrap Car Removal", text: "When a car is only worth its metal, you should still get paid for that metal. Value is based on weight, reusable parts, and current scrap prices.", href: "/scrap-car-removal-red-deer", link: "Scrap car removal in Red Deer" },
  { icon: TriangleAlert, title: "Damaged & Write-Off Buyers", text: "Hail, collision, flood, or fire—we buy vehicles insurers have written off, including salvage and non-repairable status.", href: "/damaged-car-removal-red-deer", link: "Damaged car buying service" },
  { icon: Wrench, title: "Car Wreckers & Auto Salvage", text: "Vehicles we can’t put back on the road get dismantled and recycled properly, with reusable parts recovered for local repair shops.", href: "/car-wreckers-red-deer", link: "How vehicles are recycled" },
  { icon: Truck, title: "Free Towing, Every Time", text: "There’s no charge to pick up your vehicle anywhere in our service area. The number we quote is the number you get.", href: "/free-towing-red-deer", link: "Free towing in Red Deer" },
] as const;

const regionalFactors = [
  { icon: Gauge, title: "The QEII adds kilometres fast", text: "A daily run to Calgary or Edmonton puts 300 km on the odometer before dinner. Plenty of cars we buy are only eight or nine years old but carry 300,000 km—the point where a dealer stops offering anything meaningful on trade." },
  { icon: Snowflake, title: "Road salt and freeze-thaw eat metal", text: "Five months of salt and brine on Highway 2, Highway 11, and 67 Street, combined with Chinook swings, corrode rockers, brake lines, and frames. Rust is the most common reason a Central Alberta vehicle becomes unsellable privately." },
  { icon: BatteryWarning, title: "−35 °C mornings finish tired engines", text: "A cold snap is a stress test. Batteries die, blocks crack, and engines already on borrowed time simply don’t come back. A car that hasn’t started since November is one of our most common calls." },
  { icon: CloudHail, title: "Central Alberta sits in a hail belt", text: "Summer storms leave dented hoods, cracked glass, and roofs full of dimples. Insurers write off a surprising number of otherwise healthy vehicles—and those write-offs are some of the best cars we buy." },
  { icon: Route, title: "County gravel roads take a toll", text: "Acreage vehicles off Highway 595 and Range Road 275 absorb years of gravel, dust, and washboard. Chipped glass, worn suspension, and undercarriage damage add up." },
] as const;

const towns = [
  ["Springbrook", "12 km", "/cash-for-cars-springbrook"],
  ["Penhold", "17 km", "/cash-for-cars-penhold"],
  ["Blackfalds", "18 km", "/cash-for-cars-blackfalds"],
  ["Sylvan Lake", "25 km", "/cash-for-cars-sylvan-lake"],
  ["Lacombe", "28 km", "/cash-for-cars-lacombe"],
  ["Innisfail", "33 km", "/cash-for-cars-innisfail"],
  ["Delburne", "38 km", "/cash-for-cars-delburne"],
  ["Bentley", "42 km", "/cash-for-cars-bentley"],
  ["Clive", "45 km", "/cash-for-cars-clive"],
  ["Spruce View", "45 km", "/cash-for-cars-spruce-view"],
  ["Bowden", "48 km", "/cash-for-cars-bowden"],
  ["Eckville", "52 km", "/cash-for-cars-eckville"],
  ["Alix", "52 km", "/cash-for-cars-alix"],
  ["Ponoka", "55 km", "/cash-for-cars-ponoka"],
  ["Elnora", "58 km", "/cash-for-cars-elnora"],
  ["Rimbey", "68 km", "/cash-for-cars-rimbey"],
  ["Olds", "70 km", "/cash-for-cars-olds"],
  ["Stettler", "80 km", "/cash-for-cars-stettler"],
] as const;

const faqItems = [
  ["How much cash can I get for my car in Red Deer?", "Between $150 and $15,000, depending on the vehicle. Scrap-only cars sit at the low end; newer running trucks and SUVs at the high end. Year, make, model, condition, mileage, and current scrap prices all factor in. The quote is free."],
  ["Do you buy cars that don’t run?", "Yes—non-runners are most of what we buy. Dead engines, blown transmissions, seized motors, and cars that haven’t started since last winter. We bring the equipment to load it, so you don’t need to move or start it."],
  ["How fast can you pick up my vehicle?", "Most offers go out within a few hours of you contacting us, and pickup is often the same day or the next. If you need it gone urgently, say so and we’ll prioritize it."],
  ["Is towing really free?", "Yes, on every purchase, anywhere in our service area—Red Deer, Red Deer County acreages, and all 18 towns we list. There’s no towing charge deducted from your offer. The number we quote is the number you’re paid."],
  ["What paperwork do I need to sell my car in Alberta?", "A valid photo ID matching the registered owner and proof of ownership. We complete the bill of sale with you at pickup. Nothing to prepare beforehand."],
  ["Do you buy hail-damaged or written-off vehicles?", "Absolutely. Hail damage, collision damage, insurance write-offs, and salvage or non-repairable status vehicles are all things we buy regularly. Central Alberta produces a lot of them."],
  ["Can I sell a car that’s still registered?", "Yes. Registration doesn’t need to be cancelled before the sale—you do that afterward at any Alberta registry agent, using the bill of sale we give you."],
  ["Do I need to remove my licence plates?", "Yes. In Alberta plates stay with the owner, not the vehicle, so take them off before we tow. We’ll flag it if you forget."],
  ["Do you pick up from acreages and nearby towns?", "We do, at no extra charge. Red Deer County acreages, farms, and every town from Springbrook to Stettler. Rural and gravel-road pickups are routine for us."],
  ["How do you pay—cash or e-transfer?", "Your choice. Most people take cash on the spot; e-transfer is available if you’d rather. Either way, you’re paid when we collect the vehicle, not days later."],
] as const;

const howToSteps = [
  ["01", "Tell us about your vehicle", "Call, text, or fill out the form. We need your name, contact number, year, make, model, and roughly what condition it’s in."],
  ["02", "Get a cash offer the same day", "Usually within a few hours. It’s a real number in writing, with free towing already included—no hidden deductions or on-site surprises."],
  ["03", "Pick a pickup time", "Choose a slot that suits you anywhere in Red Deer or the towns we serve. You don’t move it, clean it, or start it."],
  ["04", "Get paid on the spot", "We check the vehicle, complete the bill of sale, hand you cash, and load it up. Most sales are done in under 24 hours."],
] as const;

function SitePhoto({
  src,
  alt,
  className = "",
  sizes,
  position = "center",
  priority = false,
}: {
  src: typeof heroTowPhoto;
  alt: string;
  className?: string;
  sizes: string;
  position?: string;
  priority?: boolean;
}) {
  return (
    <div className={`site-photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}

function SectionIntro({ kicker, title, text, light = false }: { kicker: string; title: string; text?: string; light?: boolean }) {
  return (
    <header className={`section-intro${light ? " section-intro-light" : ""}`}>
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </header>
  );
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to sell your car for cash in Red Deer",
    step: howToSteps.map(([, name, text], index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name,
      text,
    })),
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": "https://www.junkmycarreddeer.ca/#business",
    name: "Junk My Car Red Deer",
    url: "https://www.junkmycarreddeer.ca/",
    logo: "https://www.junkmycarreddeer.ca/junk-my-car-red-deer-logo.png",
    image: "https://www.junkmycarreddeer.ca/junk-my-car-red-deer-logo.png",
    telephone: "+1-403-427-0732",
    email: "offers@junkmycarreddeer.ca",
    priceRange: "$-$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4909 48 Street",
      addressLocality: "Red Deer",
      addressRegion: "AB",
      postalCode: "T4N 1S8",
      addressCountry: "CA",
    },
    areaServed: ["Red Deer", "Red Deer County", ...towns.map(([town]) => town)],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-403-427-0732",
      contactType: "sales",
      areaServed: "CA-AB",
      availableLanguage: "English",
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
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#what-we-buy">What we buy</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
            <a href="#areas">Areas</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button-header" href="#quote">Get a cash offer <ArrowRight aria-hidden="true" /></a>
          <details className="menu-button">
            <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#what-we-buy">What we buy</a>
              <a href="#services">Services</a>
              <a href="#how-it-works">How it works</a>
              <a href="#areas">Areas</a>
              <a href="#faq">FAQ</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="location-pill"><MapPin aria-hidden="true" /> Red Deer, Alberta</div>
              <h1>Cash for Cars in Red Deer <span>— Get Paid Today, Running or Not</span></h1>
              <p>We buy used, junk, scrap, damaged, and non-running vehicles across Red Deer and Central Alberta. Get a straight cash offer the same day, free towing, and money in your hand at pickup.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#quote">Get My Cash Offer <ArrowDownRight aria-hidden="true" /></a>
                <a className="button button-call" href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a>
              </div>
              <div className="hero-proof">
                <div><strong>$150–$15K</strong><span>paid for vehicles</span></div>
                <div><strong>80 km</strong><span>free tow radius</span></div>
                <div><strong>Today</strong><span>offers &amp; pickup</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <SitePhoto
                src={heroTowPhoto}
                alt="Old pickup truck secured on a flatbed for free towing"
                className="hero-photo"
                sizes="(max-width: 820px) 100vw, 52vw"
                position="48% center"
                priority
              />
              <div className="floating-badge"><ShieldCheck aria-hidden="true" /><span><strong>No fees.</strong> No deductions.</span></div>
            </div>
            <div id="quote" className="hero-form"><QuoteForm /></div>
          </div>
          <div className="trust-ribbon" aria-label="Service promises">
            <div className="trust-track">
              {["Same-Day Pickup", "Free Towing", "Cash on the Spot", "$150–$15,000 Paid", "80 km Coverage"].map((item) => (
                <span key={item}><Check aria-hidden="true" /> {item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="intro-section section-space">
          <div className="shell intro-grid">
            <div className="intro-media">
              <SitePhoto
                src={drivewayCarPhoto}
                alt="Used red coupe ready to sell from a residential driveway"
                className="portrait-photo"
                sizes="(max-width: 820px) 100vw, 42vw"
                position="center 42%"
              />
              <div className="quote-stamp"><MessageSquareText aria-hidden="true" /><span>One number.<br />One pickup.<br /><strong>One payment.</strong></span></div>
            </div>
            <article className="intro-copy">
              <span className="eyebrow">A simpler way to sell</span>
              <h2>Sell Your Car for Cash in Red Deer—Without the Marketplace Circus</h2>
              <p className="lead">Anyone who has tried selling a used vehicle in Red Deer knows how it goes: post on Kijiji or Facebook Marketplace, field a dozen lowball offers, agree to meet off Gaetz Avenue—and then they don’t show up. A week later, you’re still paying insurance and registration on a car you haven’t driven since October.</p>
              <p>We do the opposite. Tell us the year, make, model, and condition. We come back the same day with a written offer. If it works for you, we schedule a time, tow it free, handle the paperwork, and hand you cash before we load it.</p>
              <p>It doesn’t matter where the car is sitting or what shape it’s in. A hail-dented SUV in Clearview Ridge, a truck with a blown transmission behind a shop in Edgar Industrial Park, a sedan that hasn’t turned over since the last cold snap in Normandeau, or a rusted-out beater on an acreage off Highway 595—if it has a VIN and you want it gone, we want to make you an offer.</p>
              <div className="inline-callout"><Zap aria-hidden="true" /><strong>No cleaning it up. No jump-starting it. No pushing it out of the garage.</strong><span>We bring the truck and the equipment.</span></div>
            </article>
          </div>
        </section>

        <section className="value-section section-space">
          <div className="shell">
            <SectionIntro kicker="Real numbers, not guesswork" title="How Much Cash Can You Get for Your Car in Red Deer?" text="Every vehicle gets its own quote. What we pay comes down to the vehicle, its condition, and what the market is paying for parts and metal this month." />
            <div className="value-grid">
              <div className="payout-panel">
                <div className="payout-top"><span>Typical payout range</span><strong>$150 <i>to</i> $15,000</strong></div>
                <div className="payout-list">
                  {payoutRanges.map((item) => (
                    <div className="payout-row" key={item.condition}>
                      <div className="payout-copy"><strong>{item.condition}</strong><span>{item.detail}</span></div>
                      <div className="payout-meter"><i style={{ width: `${item.level}%` }} /></div>
                      <b>{item.amount}</b>
                    </div>
                  ))}
                </div>
              </div>
              <div className="offer-factors">
                <div className="factors-heading"><span className="eyebrow">Under the hood</span><h3>What Decides Your Offer</h3></div>
                {offerFactors.map(([Icon, title, text]) => (
                  <div className="factor" key={title}><Icon aria-hidden="true" /><div><strong>{title}</strong><span>{text}</span></div></div>
                ))}
              </div>
            </div>
            <div className="value-footer">
              <p>A 2007 sedan with a seized engine in Riverside Meadows and a 2020 half-ton with hail dents in Timberlands are completely different offers. The only way to find out what yours is worth is to ask—and the quote is free, with no obligation.</p>
              <div><a className="button button-primary" href="#quote">Get My Free Quote</a><a className="text-link" href={phoneHref}>Call {phoneDisplay} <ArrowRight aria-hidden="true" /></a></div>
            </div>
          </div>
        </section>

        <section id="what-we-buy" className="buy-section section-space">
          <div className="shell">
            <SectionIntro kicker="Running or not" title="We Pay Cash for Almost Any Vehicle in Red Deer" />
          </div>
          <div className="vehicle-marquee" aria-label="Vehicle types we buy">
            <div className="vehicle-marquee-track">
              <div className="vehicle-marquee-group">
                {vehicleTypes.map((item) => <span key={item}>{item}<i>•</i></span>)}
              </div>
              <div className="vehicle-marquee-group" aria-hidden="true">
                {vehicleTypes.map((item) => <span key={item}>{item}<i>•</i></span>)}
              </div>
            </div>
          </div>
          <div className="shell buy-grid">
            <div className="buy-visual">
              <SitePhoto
                src={strippedCarPhoto}
                alt="Incomplete sedan accepted for junk and scrap car removal"
                className="wide-photo"
                sizes="(max-width: 820px) 100vw, 54vw"
                position="center 58%"
              />
              <div className="buy-tag"><CircleDollarSign aria-hidden="true" /><span>Running or not,<br /><strong>it still has value.</strong></span></div>
            </div>
            <div className="conditions-panel">
              <span className="eyebrow">Conditions we accept</span>
              <h3>If it has a VIN, ask us.</h3>
              <div className="condition-list">
                {acceptedConditions.map((item) => <div key={item}><Check aria-hidden="true" /><span>{item}</span></div>)}
              </div>
              <p>If you’re looking at it and wondering whether it’s too far gone to be worth anything—it almost certainly isn’t. <a href="#quote">Ask.</a></p>
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-space">
          <div className="shell">
            <SectionIntro light kicker="One call handles it" title="Cash for Cars, Junk Removal and Scrap Services Across Red Deer" text="Whatever condition your vehicle is in, there’s a service here that fits it. Every one includes free towing and payment on pickup." />
            <div className="service-road">
              <div className="road-line" />
              {services.map(({ icon: Icon, title, text, href, link }, index) => (
                <article className={`service-stop service-stop-${index + 1}`} key={title}>
                  <div className="service-icon"><Icon aria-hidden="true" /></div>
                  <div><h3>{title}</h3><p>{text}</p><Link href={href}>{link} <ChevronRight aria-hidden="true" /></Link></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="region-section section-space">
          <div className="shell region-grid">
            <div className="region-heading">
              <span className="eyebrow">Built for where we live</span>
              <h2>Why So Many Central Alberta Vehicles End Up Being Sold for Cash</h2>
              <p>Red Deer sits almost exactly halfway between Calgary and Edmonton on the Queen Elizabeth II Highway. That location is great for work—and terrible for vehicles.</p>
              <div className="route-marker"><span>Calgary</span><i /><strong>Red Deer</strong><i /><span>Edmonton</span></div>
              <SitePhoto
                src={acreageTruckPhoto}
                alt="Older Ford F-150 on a Central Alberta acreage"
                className="landscape-photo"
                sizes="(max-width: 820px) 100vw, 40vw"
                position="center"
              />
            </div>
            <div className="region-notes">
              {regionalFactors.map(({ icon: Icon, title, text }) => (
                <article className="region-note" key={title}>
                  <Icon aria-hidden="true" />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="comparison-section section-space">
          <div className="shell comparison-shell">
            <SectionIntro kicker="The honest comparison" title="Cash Offer vs Private Sale vs Dealer Trade-In" />
            <div className="comparison-scroll">
              <table>
                <thead><tr><th>What matters</th><th className="winner">Our cash offer <span>Fastest</span></th><th>Kijiji / Marketplace</th><th>Dealer trade-in</th></tr></thead>
                <tbody>
                  {[
                    ["Time to sell", "Same day", "2–8 weeks", "Same day"],
                    ["Non-runners accepted", "Yes", "Rarely", "No"],
                    ["Towing", "Free—we come to you", "You arrange it", "You drive it in"],
                    ["Payment", "Cash at pickup", "Scam / transfer risk", "Credit toward a purchase"],
                    ["Paperwork", "We handle it", "All on you", "Dealer handles it"],
                    ["Strangers at your home", "No", "Yes", "No"],
                    ["Damaged vehicles", "Yes", "Very hard to sell", "Usually refused"],
                  ].map(([label, ours, privateSale, dealer]) => (
                    <tr key={label}><th>{label}</th><td className="winner"><Check aria-hidden="true" />{ours}</td><td>{privateSale}</td><td>{dealer}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="comparison-note">A private sale will sometimes get you more money for a clean, running car—we won’t pretend otherwise. But when a vehicle has real problems, a private sale stops being realistic and a dealer trade-in stops being worth anything. That’s where a straight cash offer wins.</p>
          </div>
        </section>

        <section id="how-it-works" className="process-section section-space">
          <div className="shell">
            <SectionIntro kicker="From driveway to done" title="How It Works—Four Simple Steps" text="No towing coordination. No surprise deductions. No waiting weeks for the right buyer." />
            <div className="process-path">
              <div className="process-line" />
              {howToSteps.map(([number, title, text], index) => (
                <article className="process-step" key={number}>
                  <div className="step-number"><span>{number}</span>{index === 0 ? <MessageSquareText aria-hidden="true" /> : index === 1 ? <BadgeDollarSign aria-hidden="true" /> : index === 2 ? <Clock3 aria-hidden="true" /> : <HandCoins aria-hidden="true" />}</div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
            <div className="centered-cta"><a className="button button-primary" href="#quote">Start With a Free Quote <ArrowRight aria-hidden="true" /></a></div>
          </div>
        </section>

        <section id="areas" className="coverage-section section-space">
          <div className="shell coverage-grid">
            <div className="coverage-map">
              <Image
                className="coverage-map-image"
                src={redDeerCityMap}
                alt="Street map of Red Deer showing the city boundary, major roads, and Red Deer River"
                fill
                sizes="(max-width: 820px) 100vw, 46vw"
              />
              <div className="map-ring ring-one" /><div className="map-ring ring-two" /><div className="map-ring ring-three" />
              <div className="map-center"><MapPin aria-hidden="true" /><strong>Red Deer</strong><span>Free pickup throughout the city</span></div>
              <span className="map-label label-north">North</span><span className="map-label label-south">South</span><span className="map-label label-west">Central + West</span><span className="map-label label-industry">Industrial</span>
            </div>
            <div className="coverage-copy">
              <span className="eyebrow">City-wide coverage</span>
              <h2>We Pick Up Anywhere in Red Deer—North and South of the River</h2>
              <div className="area-groups">
                <details open><summary>North Red Deer <ChevronRight aria-hidden="true" /></summary><p>Johnstone Park · Johnstone Crossing · Kentwood · Normandeau · Riverside Meadows · Highland Green · Oriole Park · Oriole Park West · Pines · Glendale Park · Fairview</p></details>
                <details><summary>South Red Deer <ChevronRight aria-hidden="true" /></summary><p>Anders Park · Anders South · Vanier Woods · Vanier East · Deer Park · Deer Park Village · Rosedale · Rosedale Meadows · Clearview Ridge · Clearview Meadows · Timberlands · Timberstone · Laredo · Lancaster Green · Lancaster Meadows · Inglewood · Sunnybrook · Morrisroe · Bower · Aspen Ridge · Garden Heights</p></details>
                <details><summary>Central and West <ChevronRight aria-hidden="true" /></summary><p>Downtown / City Centre · Capstone at Riverlands · Parkvale · Woodlea · Mountview · Waskasoo · Michener Hill · West Park · Grandview · Eastview · South Hill</p></details>
                <details><summary>Industrial and Commercial <ChevronRight aria-hidden="true" /></summary><p>Edgar Industrial Park · Riverside Light Industrial Park · Queens Business Park · Northlands Industrial Park · Burnt Lake · Clearview Market Square</p></details>
              </div>
              <p>If you’re near Bower Place, Parkland Mall, Westerner Park, Red Deer Polytechnic, the Collicutt Centre, Servus Arena, or the Red Deer Regional Hospital—or anywhere along Gaetz Avenue, Taylor Drive, 67 Street, 32 Street, Highway 2A, or Highway 11—we’ll come to you.</p>
            </div>
          </div>
          <div className="shell county-banner">
            <div><span className="eyebrow">Beyond city limits</span><h2>We Also Pick Up Across Red Deer County</h2></div>
            <p>Free towing doesn’t stop at the city limits. We regularly collect from acreages, farms, and country residential subdivisions including Gasoline Alley north and south, Burnt Lake, Balmoral Heights, Liberty Landing, Poplar Ridge, and Sylvan Meadows, plus properties along Highway 2A, Highway 11, Highway 595, and surrounding range roads. Rural pickup costs nothing extra.</p>
          </div>
        </section>

        <section className="towns-section section-space">
          <div className="shell">
            <SectionIntro kicker="Our 80 km service radius" title="Cash for Cars Near Red Deer—Towns We Serve Across Central Alberta" text="We tow free from every one of these communities. Distances shown are from Red Deer." />
            <div className="town-grid">
              {towns.map(([town, distance, href]) => (
                <Link href={href} className="town-link" key={town}><strong>{town}</strong><span>{distance}</span><ArrowRight aria-hidden="true" /></Link>
              ))}
            </div>
            <div className="town-note"><MapPin aria-hidden="true" /><p><strong>Not on the list but nearby?</strong> Call us anyway—if you’re in Central Alberta, there’s a good chance we can still make the trip.</p><a href={phoneHref}>{phoneDisplay}</a></div>
          </div>
        </section>

        <section className="details-section section-space">
          <div className="shell details-grid">
            <article className="paperwork-card">
              <div className="detail-icon"><FileCheck2 aria-hidden="true" /></div>
              <span className="eyebrow">Keep it simple</span>
              <h2>What You Need to Sell a Car in Alberta</h2>
              <div className="detail-copy">
                <h3>Documents to have ready</h3><p>A valid photo ID matching the registered owner and proof of ownership—usually your vehicle registration. We complete the bill of sale at pickup, so there’s nothing to print. If there’s a lien, tell us up front and we’ll walk you through it.</p>
                <h3>Your licence plates stay with you</h3><p>In Alberta, plates belong to the registered owner, not the vehicle. Remove them before we tow. If you forget, we’ll remind you on site.</p>
                <h3>Cancelling your registration</h3><p>Take your plate and bill of sale to any Alberta registry agent to cancel or transfer the registration. Call your insurer too—you may be owed a refund on the unused portion.</p>
              </div>
              <p className="help-note">Not sure about any of it? Ask us. We’ve done this thousands of times and will tell you exactly what to bring.</p>
            </article>
            <article className="recycle-card">
              <div className="recycle-orbit"><Recycle aria-hidden="true" /></div>
              <span className="eyebrow">A responsible next life</span>
              <h2>What Actually Happens to Your Car After We Buy It</h2>
              <p>Buying a vehicle is the easy part. Handling an end-of-life vehicle properly is what separates a legitimate operation from someone dumping a car behind a shop.</p>
              <ul>
                <li><Check aria-hidden="true" />Engine oil, coolant, brake fluid, transmission fluid, and fuel are drained.</li>
                <li><Check aria-hidden="true" />Refrigerant is recovered rather than vented.</li>
                <li><Check aria-hidden="true" />Batteries, tires, and mercury switches go to the correct streams.</li>
                <li><Check aria-hidden="true" />Usable parts stay in circulation with local repair shops and rebuilders.</li>
                <li><Check aria-hidden="true" />Ferrous and non-ferrous metals are separated and recycled.</li>
              </ul>
              <p className="recycle-close">Your old car goes back into the supply chain instead of rusting on an acreage or leaking near the Red Deer River.</p>
            </article>
          </div>
        </section>

        <section className="reviews-section section-space">
          <div className="shell">
            <div className="reviews-heading"><SectionIntro kicker="Local voices" title="What Red Deer Customers Say" /><div className="rating-lockup"><strong>5.0</strong><span>★★★★★</span><small>Review content coming soon</small></div></div>
            <div className="review-grid">
              {["Quick pickup", "Fair, clear offer", "Easy from start to finish"].map((title, index) => (
                <article className="review-placeholder" key={title}><div className="review-mark">“</div><div className="placeholder-lines"><i /><i /><i /></div><footer><span className="avatar-placeholder">{String.fromCharCode(65 + index)}</span><div><strong>{title}</strong><span>Verified customer review placeholder</span></div></footer></article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section section-space">
          <div className="shell faq-grid">
            <div className="faq-heading"><span className="eyebrow">Straight answers</span><h2>Cash for Cars Red Deer—Frequently Asked Questions</h2><p>Still wondering about your vehicle? Call and talk to a real person.</p><a className="text-link" href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div>
            <div className="faq-list">
              {faqItems.map(([question, answer], index) => (
                <details key={question} open={index === 0}><summary>{question}<i><ChevronRight aria-hidden="true" /></i></summary><p>{answer}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-orbit cta-orbit-one" /><div className="cta-orbit cta-orbit-two" />
          <div className="shell final-cta-inner">
            <span className="eyebrow">Your driveway could be clear today</span>
            <h2>Turn That Car Into Cash Today</h2>
            <p>Stop paying insurance, registration, and storage on a vehicle you’re never going to drive again. One call, one pickup, cash in hand—and it’s off your property today.</p>
            <div><a className="button button-white" href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a><a className="button button-dark" href="#quote">Get My Free Cash Offer <ArrowRight aria-hidden="true" /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="180px" /><p>Fair cash offers, free towing, and same-day pickup across Red Deer and Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div>
          <div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/sell-my-car-red-deer">Sell My Car</Link><Link href="/car-wreckers-red-deer">Car Wreckers</Link><Link href="/free-towing-red-deer">Free Towing</Link></div>
          <div><h3>Popular areas</h3>{towns.slice(0, 6).map(([town, , href]) => <Link href={href} key={town}>{town}</Link>)}</div>
          <div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><p>Mon–Sat: 8am–8pm<br />Sunday: By appointment</p><a className="footer-quote" href="#quote">Request a quote <ArrowRight aria-hidden="true" /></a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div>
      </footer>

      <div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" /> Call now</a><a href="#quote"><BadgeDollarSign aria-hidden="true" /> Get offer</a></div>

      <JsonLd data={websiteSchema} />
      <JsonLd data={businessSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
