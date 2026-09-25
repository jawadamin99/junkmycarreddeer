"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, Menu, Phone } from "lucide-react";
import logo from "@/assets/junkmycarreddeer_red-logo.png";
import styles from "./site-header.module.css";

const aboutLinks = [
  ["About Us", "/about"],
  ["How It Works", "/how-it-works"],
  ["What We Buy", "/what-we-buy"],
  ["Frequently Asked Questions", "/faq"],
] as const;

const serviceLinks = [
  ["Junk Car Removal", "/junk-car-removal-red-deer"],
  ["Scrap Car Removal", "/scrap-car-removal-red-deer"],
  ["Sell My Car", "/sell-my-car-red-deer"],
  ["Car Wreckers", "/car-wreckers-red-deer"],
  ["Damaged Car Removal", "/damaged-car-removal-red-deer"],
  ["Free Towing", "/free-towing-red-deer"],
] as const;

const locationLinks = [
  ["Calgary", "/cash-for-cars-calgary"],
  ["Sylvan Lake", "/cash-for-cars-sylvan-lake"], ["Lacombe", "/cash-for-cars-lacombe"],
  ["Blackfalds", "/cash-for-cars-blackfalds"], ["Springbrook", "/cash-for-cars-springbrook"],
  ["Penhold", "/cash-for-cars-penhold"], ["Innisfail", "/cash-for-cars-innisfail"],
  ["Ponoka", "/cash-for-cars-ponoka"], ["Olds", "/cash-for-cars-olds"],
  ["Stettler", "/cash-for-cars-stettler"], ["Rimbey", "/cash-for-cars-rimbey"],
  ["Eckville", "/cash-for-cars-eckville"], ["Bentley", "/cash-for-cars-bentley"],
  ["Clive", "/cash-for-cars-clive"], ["Bowden", "/cash-for-cars-bowden"],
  ["Delburne", "/cash-for-cars-delburne"], ["Alix", "/cash-for-cars-alix"],
  ["Spruce View", "/cash-for-cars-spruce-view"], ["Elnora", "/cash-for-cars-elnora"],
] as const;

function closeAllMenus() {
  document.querySelectorAll<HTMLDetailsElement>("[data-site-menu]").forEach((menu) => {
    menu.open = false;
  });
}

function Dropdown({ label, links, wide = false }: { label: string; links: readonly (readonly [string, string])[]; wide?: boolean }) {
  return <details
    className={`${styles.dropdown} ${wide ? styles.wide : ""}`}
    data-site-menu
    onMouseEnter={(event) => { event.currentTarget.open = true; }}
    onMouseLeave={(event) => { event.currentTarget.open = false; }}
    onFocus={(event) => { event.currentTarget.open = true; }}
    onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
    }}
  >
    <summary>{label}<ChevronDown aria-hidden="true" /></summary>
    <div className={styles.dropdownPanel}>{links.map(([name, href]) => <Link href={href} key={href} onClick={closeAllMenus}>{name}</Link>)}</div>
  </details>;
}

export function SiteHeader() {
  return <div className={styles.globalSiteShell}>
    <div className={styles.utility}><div className={styles.shell}><span><MapPin aria-hidden="true" /> Red Deer &amp; 80 km around</span><span className={styles.promise}>Same-day pickup · Free towing · Cash on the spot</span><a href="tel:+14034270732"><Phone aria-hidden="true" /> (403) 427-0732</a></div></div>
    <header className={styles.header}><div className={styles.shell}>
      <Link className={styles.brand} href="/" aria-label="Junk My Car Red Deer home" onClick={closeAllMenus}><Image src={logo} alt="Junk My Car Red Deer" priority sizes="(max-width: 600px) 150px, 190px" /></Link>
      <nav className={styles.desktopNav} aria-label="Main navigation">
        <Link href="/" onClick={closeAllMenus}>Home</Link>
        <Dropdown label="About" links={aboutLinks} />
        <Dropdown label="Services" links={serviceLinks} />
        <Dropdown label="Locations" links={locationLinks} wide />
        <Link href="/contact" onClick={closeAllMenus}>Contact</Link>
      </nav>
      <Link className={styles.offerButton} href="/#quote" onClick={closeAllMenus}>Get a Cash Offer</Link>
      <details className={styles.mobileMenu} data-site-menu>
        <summary aria-label="Open main menu"><Menu aria-hidden="true" /></summary>
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={closeAllMenus}>Home</Link>
          <details data-site-menu><summary>About <ChevronDown aria-hidden="true" /></summary><div>{aboutLinks.map(([name, href]) => <Link href={href} key={href} onClick={closeAllMenus}>{name}</Link>)}</div></details>
          <details data-site-menu><summary>Services <ChevronDown aria-hidden="true" /></summary><div>{serviceLinks.map(([name, href]) => <Link href={href} key={href} onClick={closeAllMenus}>{name}</Link>)}</div></details>
          <details data-site-menu><summary>Locations <ChevronDown aria-hidden="true" /></summary><div className={styles.mobileLocations}>{locationLinks.map(([name, href]) => <Link href={href} key={href} onClick={closeAllMenus}>{name}</Link>)}</div></details>
          <Link href="/contact" onClick={closeAllMenus}>Contact</Link>
          <Link className={styles.mobileOffer} href="/#quote" onClick={closeAllMenus}>Get a Cash Offer</Link>
        </nav>
      </details>
    </div></header>
  </div>;
}
