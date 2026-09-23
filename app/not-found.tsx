import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CircleDollarSign,
  Clock3,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";

import recoveryPhoto from "@/assets/collision-damaged-blue-car.jpeg";
import logo from "@/assets/junkmycarreddeer_red-logo.png";

const phoneDisplay = "(403) 427-0732";
const phoneHref = "tel:+14034270732";

const usefulLinks = [
  { label: "What We Buy", href: "/#what-we-buy" },
  { label: "Our Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Areas We Serve", href: "/#areas" },
  { label: "Frequently Asked Questions", href: "/#faq" },
];

export default function NotFound() {
  return (
    <div className="not-found-shell">
      <header className="not-found-header">
        <div className="shell not-found-header-inner">
          <Link className="not-found-brand" href="/" aria-label="Junk My Car Red Deer home">
            <Image src={logo} alt="Junk My Car Red Deer" priority />
          </Link>

          <a className="not-found-phone" href={phoneHref}>
            <Phone aria-hidden="true" />
            <span>
              <small>Need a cash offer?</small>
              {phoneDisplay}
            </span>
          </a>
        </div>
      </header>

      <main className="not-found-main">
        <div className="not-found-route" aria-hidden="true" />

        <div className="shell not-found-grid">
          <section className="not-found-copy">
            <p className="eyebrow">Looks like a wrong turn</p>
            <p className="not-found-code" aria-label="Error 404">
              404
            </p>
            <h1>This page has been towed.</h1>
            <p className="not-found-lead">
              The address you entered doesn&apos;t lead anywhere. Let&apos;s get you back to a
              useful page—or turn that unwanted vehicle into cash today.
            </p>

            <div className="not-found-actions">
              <Link className="button button-primary" href="/">
                <ArrowLeft aria-hidden="true" />
                Back to homepage
              </Link>
              <Link className="not-found-text-link" href="/#quote">
                Get my cash offer
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>

            <nav className="not-found-links" aria-label="Useful pages">
              <p>Maybe you were looking for:</p>
              <div>
                {usefulLinks.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </nav>
          </section>

          <aside className="not-found-visual" aria-label="Vehicle pickup in Red Deer">
            <Image
              src={recoveryPhoto}
              alt="Damaged vehicle ready for cash pickup in Red Deer"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
            />
            <div className="not-found-photo-shade" aria-hidden="true" />
            <div className="not-found-map-pin">
              <MapPin aria-hidden="true" />
              <span>
                <small>Free pickup area</small>
                Red Deer + 80 km
              </span>
            </div>
            <div className="not-found-photo-note">
              <span>Still need us?</span>
              <strong>We&apos;ll come to you.</strong>
            </div>
          </aside>
        </div>

        <section className="not-found-promises" aria-label="Service guarantees">
          <div className="shell not-found-promise-grid">
            <div>
              <Clock3 aria-hidden="true" />
              <span>Same-day pickup</span>
            </div>
            <div>
              <Truck aria-hidden="true" />
              <span>Free towing</span>
            </div>
            <div>
              <CircleDollarSign aria-hidden="true" />
              <span>Cash on the spot</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
