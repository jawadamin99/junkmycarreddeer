import type { Metadata } from "next";
import heroPhoto from "@/assets/old-red-jeep-driveway.jpeg";
import projectPhoto from "@/assets/stripped-sedan-junkyard.jpeg";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = { title: "Cash for Cars Penhold | Free Towing, Same-Day Pickup", description: "Cash for cars Penhold, AB. We buy project cars, non-runners, scrap and damaged vehicles, tow free, and pay at pickup. 16 minutes from Red Deer.", alternates: { canonical: "https://www.junkmycarreddeer.ca/cash-for-cars-penhold" }, openGraph: { title: "Cash for Cars Penhold | Project Cars Welcome", description: "We buy running, damaged and partly dismantled vehicles in Penhold with free towing.", url: "https://www.junkmycarreddeer.ca/cash-for-cars-penhold", type: "website", images: [{ url: heroPhoto.src, width: 1200, height: 630, alt: "Project vehicle ready for pickup in Penhold" }] } };

const data = {
  city: "Penhold", path: "/cash-for-cars-penhold", distance: "17 km", route: "Highway 2A",
  heroTitle: "Cash for Cars Penhold — Project Cars Included",
  heroText: "Sixteen minutes down Highway 2A. Running, not running or half-apart in the garage with parts in a milk crate—we will buy it, tow it free and pay you on the spot.",
  heroImage: heroPhoto, heroAlt: "Older project vehicle in a Penhold driveway", secondaryImage: projectPhoto, secondaryAlt: "Partly dismantled vehicle accepted for cash",
  localTitle: "The Penhold Project Car", localIntro: "A first house, a garage and some optimism often create a project that survives much longer than the original repair plan.",
  localFactors: [
    { title: "It started as a good idea", text: "A cheap vehicle needs work, parts arrive and the intake comes off. Then a seized bolt, new job, new baby or a much larger repair leaves it occupying the garage for years. We buy these regularly." },
    { title: "Bring the parts—or do not", text: "A box of removed parts helps the offer. If the useful pieces have already been sold, that is fine too; say what remains so the first quote is accurate." },
    { title: "The extra commuter vehicle", text: "Penhold households commute to Red Deer, Innisfail and Highway 42 work sites and often accumulate vehicles. When three vehicles serve two drivers, the insurance renewal tends to force a decision." },
  ],
  buyTypes: "Cars, SUVs, crossovers, half-tons, heavy-duty and diesel pickups, minivans, cargo vans, work trucks and fleets—including vehicles currently in pieces.",
  buyConditions: "Seized engines, failed transmissions, no keys, hail, collision, write-offs, fire, flood, frame rust, failed inspections and dismantled garage projects are all accepted.",
  offers: [["Partly dismantled project vehicle", "$200 – $1,000"], ["Older car, non-running, complete", "$250 – $800"], ["Non-running with parts demand", "$500 – $1,800"], ["High-kilometre runner", "$800 – $3,500"], ["Hail-damaged, mechanically sound", "$1,000 – $6,000"], ["Newer running truck, SUV or car", "$3,000 – $15,000"]] as const,
  valueText: "Completeness is the largest variable on a project. An engine still installed is worth more than the same engine on a stand because its condition is easier to verify and it requires less handling. Include loose parts whenever possible.",
  servicesIntro: "Whether it is a half-finished project on jack stands or a spare commuter that has stopped earning its keep, one of these services fits—each with free towing and payment on collection.",
  services: [
    { title: "Junk Car Removal in Penhold", before: "A vehicle with its hood up and its intake off, occupying the garage since a Saturday three years ago, is the classic Penhold job. Our ", linkLabel: "junk car removal service", href: "/junk-car-removal-red-deer", after: " skates it off jack stands and winches it out of sloped attached garages—no wheels, no engine and no keys all fine." },
    { title: "Scrap Car Removal in Penhold", before: "Once the good parts have been sold off a project car, what is left is mostly shell—but steel, aluminium and any remaining wiring still carry value. Our ", linkLabel: "scrap car removal", href: "/scrap-car-removal-red-deer", after: " quotes honestly on what is actually there and processes it properly." },
    { title: "Sell My Car in Penhold", before: "The third vehicle in a two-driver household usually still runs—it is just not needed. Our ", linkLabel: "sell my car service", href: "/sell-my-car-red-deer", after: " turns it into one cash offer before the next insurance renewal, without listing it or fielding “is this still available?” messages." },
    { title: "Damaged and Write-Off Vehicles in Penhold", before: "Commuters on Highway 2 and the 42 see their share of collisions and deer strikes, and hail rolls through most summers. Our ", linkLabel: "damaged car buying service", href: "/damaged-car-removal-red-deer", after: " buys salvage and non-repairable buybacks and prices the undamaged drivetrain behind the crumple zone." },
    { title: "Car Wreckers Serving Penhold", before: "A project car's value lives in its parts—and if you have a milk crate of them, those count too. As ", linkLabel: "car wreckers", href: "/car-wreckers-red-deer", after: " we dismantle and recover usable components, which is why an engine left in the bay, or boxed parts that came with the car, lift the offer." },
    { title: "Free Towing in Penhold", before: "Sixteen minutes down the 2A, and it costs you nothing—town lot or acreage off Highway 42. ", linkLabel: "Free towing", href: "/free-towing-red-deer", after: " is built into every Penhold offer, including slow extractions of vehicles on stands with no wheels." },
  ],
  accessTitle: "Getting It Out", accessIntro: "Attached garages, sloped driveways, jack stands, side yards and rural properties are familiar pickup situations.",
  accessItems: [{ title: "Out of the garage", text: "We winch vehicles from attached single or double stalls. A car on stands with no wheels takes longer but is entirely manageable with skates and advance notice." }, { title: "Driveways and rented stalls", text: "Short approaches and shared parking are workable. Mention access restrictions so the truck arrives at the right time and angle." }, { title: "Highway 42 and 2A acreages", text: "Snow, mud and obstructions are normal. If access would damage your yard, we return after the ground firms instead of creating ruts." }],
  process: "Call or send the form with the year, make, model and an honest list of what is missing. We come back the same day with a number; pickup is normally the same day or next.",
  paperwork: "We complete the bill of sale. Project vehicles often have an informal ownership chain or were never registered to the current holder. This is common and often solvable, but it must be discussed before dispatch.",
  nearby: [["Springbrook", "6 km north"], ["Innisfail", "16 km south"], ["Red Deer", "17 km north"], ["Bowden", "32 km south"], ["Highway 42", "Acreages included"]] as const,
  faqs: [["Will you buy a car that is in pieces?", "Yes. Include removed parts if you have them because they improve the offer."], ["The engine is out and sitting on a stand.", "Still acceptable. Include it and it counts toward the valuation."], ["How fast can you get to Penhold?", "About sixteen minutes. Same-day pickup is normal for morning calls."], ["Is there a charge for the trip?", "No towing fee, trip charge or minimum value."], ["It has never been registered in my name.", "Call first. There is often a path, but ownership must be sorted before pickup."], ["Can you take two at once?", "Yes, and one trip normally improves the per-vehicle offer."]] as const,
  finalTitle: "Get a Quote",
};
export default function Page() { return <LocationPage data={data} />; }
