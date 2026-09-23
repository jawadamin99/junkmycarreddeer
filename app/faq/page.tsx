import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, JsonLd } from "@/components/seo-schema";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BadgeDollarSign, ChevronDown, ChevronRight, CircleHelp, FileText, KeyRound, MapPin, Menu, Phone, Truck } from "lucide-react";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FAQ | Selling a Car for Cash in Red Deer & Alberta",
  description: "Answers on pricing, Alberta paperwork, ownership problems and towing — everything people ask before selling a vehicle for cash in Central Alberta.",
  alternates: { canonical: "https://www.junkmycarreddeer.ca/faq" },
  openGraph: { title: "Cash for Cars Red Deer: Frequently Asked Questions", description: "Straight answers about vehicle values, Alberta paperwork, ownership and free pickup.", url: "https://www.junkmycarreddeer.ca/faq", type: "website" },
};

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";
type FaqGroup = {
  id: string;
  label: string;
  icon: LucideIcon;
  questions: readonly (readonly [string, ReactNode])[];
};

const groups: readonly FaqGroup[] = [
  { id: "money", label: "About the Money", icon: BadgeDollarSign, questions: [
    ["Why do two buyers quote such different numbers for the same car?", "Usually because they are measuring different things. A weight-only quote ignores the catalytic converter, wheels and salvageable parts. A quote netted after towing looks higher until the deduction appears. Commodity prices also move. Ask what towing costs and whether the figure is final."],
    ["Is the price negotiable?", "There is not much room because our quote is our best number, not an opening position. We will not quote high simply to reach your driveway and then talk it down."],
    ["Do you pay more if I deliver it myself?", "Marginally, sometimes, on a running vehicle—rarely enough to justify your time and fuel. Ask and we will tell you honestly whether the trip is worthwhile."],
    ["Why does the catalytic converter matter so much?", "It contains platinum, palladium and rhodium, and values vary enormously by vehicle. On a large truck it can be worth more than the rest of the car. If yours is missing, say so upfront so the quote is accurate."],
    ["Does mileage affect what you’ll pay?", "Much less than at a dealership. We price weight, parts and material, none of which care how far the vehicle has travelled. That is why high-kilometre Central Alberta vehicles often perform better with us than as a trade-in."],
    ["What if I owe more on it than it’s worth?", "The lien must be cleared as part of the sale. If the payout exceeds our offer, you would cover the difference. Tell us upfront and we will work through the numbers before anyone travels."],
  ]},
  { id: "paperwork", label: "Alberta Paperwork and Law", icon: FileText, questions: [
    ["Can I sell a car if I’ve lost the registration?", "Usually, if you can establish ownership another way. A replacement registration from a registry agent is normally the simplest route. Call before assuming it is a problem."],
    ["What is a bill of sale, and do I prepare one?", "It records the transfer, parties, vehicle, amount and date. We complete it with you and leave you a copy. Keep it as proof that you no longer own the vehicle and take it to the registry afterward."],
    ["What happens if I don’t cancel the registration?", "The vehicle remains associated with your name. That can create problems if it appears somewhere it should not before processing. Closing it out at a registry agent takes only a few minutes."],
    ["What’s the difference between salvage and non-repairable status?", <>Salvage is written off but theoretically repairable after repairs and provincial inspection. Non-repairable can never return to the road and exists only as parts and material. We buy both. Read the <Link href="/damaged-car-removal-red-deer">damaged and write-off vehicle guide</Link>.</>],
    ["Do I need an out-of-province inspection to sell?", "No. We buy as-is. A failed inspection simply factors into the value."],
    ["Am I owed anything back on my insurance?", "Often. If you prepaid a policy, the unused portion may be refundable. Call your insurer after the sale—on a vehicle sitting for a year or two, the refund can be meaningful."],
  ]},
  { id: "ownership", label: "Ownership Situations", icon: KeyRound, questions: [
    ["The car belonged to a relative who passed away. Can I sell it?", "Generally yes, with documentation showing authority to act for the estate. Requirements vary, so call and describe the situation. Most are workable."],
    ["A tenant abandoned a vehicle on my property. What are my options?", "Establishing your legal right to dispose of it is the hurdle. There is a documentation process; call before spending time on it and we will explain what is needed."],
    ["I bought it privately and never transferred it into my name.", "Common with inexpensive vehicles and auction purchases. The original bill of sale usually resolves it. If you do not have one, describe the ownership chain and we will see whether there is another route."],
    ["The vehicle is registered to a company that no longer exists.", "This can work with documentation showing signing authority or dissolution. It needs sorting before dispatch rather than at pickup."],
    ["Can someone else handle the pickup for me?", "Yes, if arranged in advance. An authorized person must sign the bill of sale and accept payment, but it does not always have to be the registered owner in person."],
  ]},
  { id: "collection", label: "Collection and Access", icon: Truck, questions: [
    ["What if the vehicle is frozen into the ground?", "It happens every winter and is usually manageable. Occasionally we return after a warm spell rather than risk damaging the vehicle or your property."],
    ["Can you collect in bad weather?", "Usually. Snow and cold are routine. Ice on a steep approach or ground too soft for a loaded truck may require rescheduling."],
    ["What if it is behind a locked gate and I’m not there?", "Arrange access in advance. Someone still needs to sign and take payment, so access and authorization usually need coordinating together."],
    ["Do you need the keys?", "No. We collect many vehicles whose keys disappeared years ago."],
    ["How many vehicles can you take at once?", "It depends on size. For multiple trips, we price the whole group together and explain the collection schedule upfront."],
  ]},
  { id: "business", label: "About the Business", icon: CircleHelp, questions: [
    ["Are you a towing company?", "No. We are a vehicle buyer; towing is how we collect vehicles we purchase. For breakdown recovery to a repair shop, call a towing service."],
    ["Do you sell used parts?", "Our side is buying and dismantling. If you need a part, call—we can often point you somewhere useful even if we cannot supply it."],
    ["What happens to my personal information?", "It is used to quote and complete the sale and nothing else. We do not sell or share contact details."],
    ["Can I recover something forgotten in the car?", "Not after processing. Check the glovebox, console, seats, door pockets, trunk and spare-wheel well before collection. Documents, remotes, tools and cash are regularly forgotten."],
  ]},
];

export default function FaqPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: groups.flatMap((group) => group.questions).map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: typeof answer === "string" ? answer : "Salvage vehicles may be repaired and inspected; non-repairable vehicles can only be used for parts and material. We buy both." } })) };
  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <div className="utility-bar"><div className="shell utility-inner"><span><MapPin aria-hidden="true" /> Red Deer &amp; 80 km around</span><span className="utility-promise">Straight answers · No pressure · No hidden fees</span><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div></div>
    <header className="site-header"><div className="shell header-inner"><Link className="brand" href="/"><Image src={logo} alt="Junk My Car Red Deer" priority sizes="190px" /></Link><nav className="desktop-nav" aria-label="FAQ categories">{groups.map((g) => <a key={g.id} href={`#${g.id}`}>{g.label.replace("About the ", "")}</a>)}</nav><a className="button button-header" href="#faq-quote">Get a cash offer <ArrowRight aria-hidden="true" /></a><details className="menu-button"><summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary><nav>{groups.map((g) => <a key={g.id} href={`#${g.id}`}>{g.label}</a>)}</nav></details></div></header>
    <main id="main" className={styles.page}>
      <section className={styles.hero}><div className="shell"><nav className={styles.breadcrumb}><Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>FAQ</span></nav><p className={styles.kicker}>Answers before you sell</p><h1>Frequently Asked <span>Questions</span></h1><p>The questions below come up repeatedly on the phone. If yours is not here, call and ask—it costs nothing and we would rather answer it than have you guess.</p><div className={styles.categoryNav}>{groups.map(({ id, label, icon: Icon }) => <a href={`#${id}`} key={id}><Icon aria-hidden="true" style={{ width: 34 }} /><span>{label}</span></a>)}</div></div></section>
      <section className={styles.faqArea}><div className={`shell ${styles.faqLayout}`}><aside><span>Quick navigation</span>{groups.map(({ id, label }) => <a href={`#${id}`} key={id}>{label}</a>)}<a className={styles.askLink} href={phoneHref}><Phone aria-hidden="true" /> Ask us directly</a></aside><div className={styles.groups}>{groups.map(({ id, label, icon: Icon, questions }) => <section id={id} className={styles.group} key={id}><header><Icon aria-hidden="true" /><div><span>FAQ category</span><h2>{label}</h2></div></header><div className={styles.questionList}>{questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><ChevronDown aria-hidden="true" /></summary><div>{typeof answer === "string" ? <p>{answer}</p> : <p>{answer}</p>}</div></details>)}</div></section>)}</div></div></section>
      <section id="faq-quote" className={styles.quoteSection}><div className="shell"><div className={styles.quoteIntro}><p className={styles.kicker}>Still have a question?</p><h2>Ask—or Get Your Number</h2><p>There is no cost and no obligation. Spend two minutes on the phone or send your vehicle details below.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><QuoteForm /></div></section>
    </main>
    <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={logo} alt="Junk My Car Red Deer" sizes="230px" /><p>Fair cash offers, free towing and same-day pickup across Central Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div><div><h3>Services</h3><Link href="/junk-car-removal-red-deer">Junk Car Removal</Link><Link href="/scrap-car-removal-red-deer">Scrap Car Removal</Link><Link href="/free-towing-red-deer">Free Towing</Link></div><div><h3>Company</h3><Link href="/about">About Us</Link><Link href="/how-it-works">How It Works</Link><Link href="/what-we-buy">What We Buy</Link><Link href="/contact">Contact</Link></div><div><h3>Visit or contact</h3><p>4909 48 Street<br />Red Deer, AB T4N 1S8</p><a className="footer-quote" href="#faq-quote">Get an offer <ArrowRight aria-hidden="true" /></a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Junk My Car Red Deer</span><span>Serving Red Deer &amp; Central Alberta</span></div></footer>
    <BreadcrumbSchema current="Frequently Asked Questions" path="/faq" />
    <JsonLd data={faqSchema} />
  </>;
}
