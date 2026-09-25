import type { Metadata } from "next";
import commuterPhoto from "@/assets/used-sedan-red-deer.jpeg";
import drivewayPhoto from "@/assets/red-coupe-driveway.jpeg";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Cash for Cars Blackfalds | Free Towing, Same-Day Offers",
  description: "Cash for cars Blackfalds, AB. We buy running, junk, scrap and damaged vehicles, tow free from any driveway or stall, and pay you when we collect.",
  alternates: { canonical: "https://www.junkmycarreddeer.ca/cash-for-cars-blackfalds" },
  openGraph: { title: "Cash for Cars Blackfalds | Same-Day Offers", description: "Free towing and same-day vehicle offers throughout Blackfalds, Alberta.", url: "https://www.junkmycarreddeer.ca/cash-for-cars-blackfalds", type: "website", images: [{ url: commuterPhoto.src, width: 1200, height: 630, alt: "High-kilometre commuter vehicle in Central Alberta" }] },
};

const data = {
  city: "Blackfalds", path: "/cash-for-cars-blackfalds", distance: "18 km", route: "Highway 2A",
  heroTitle: "Cash for Cars Blackfalds — Same-Day Offers",
  heroText: "Sixteen minutes up Highway 2A. If a vehicle is taking up your driveway, garage or the visitor stall your neighbours keep mentioning, we will buy it and take it away—running or not, with no towing charge.",
  heroImage: commuterPhoto, heroAlt: "Commuter car purchased for cash near Blackfalds", secondaryImage: drivewayPhoto, secondaryAlt: "Vehicle in a residential driveway ready for pickup",
  localTitle: "Blackfalds Has a Very Specific Vehicle Problem", localIntro: "This town is newer, younger and built around driving elsewhere to work. That produces its own recognizable vehicle pattern.",
  localFactors: [
    { title: "Almost everyone commutes", text: "The daily run to Red Deer or Lacombe adds fifteen to eighteen thousand kilometres a year before other driving. Six years of that plus salt on Highway 2A creates the mileage and rust that end meaningful dealer trade offers." },
    { title: "The second vehicle stopped being necessary", text: "Work from home, a child leaving for school, a job change or a separation can turn a necessary vehicle into an insurance bill. While a private sale gets postponed, the battery dies and the value drops each season." },
    { title: "New neighbourhoods have little room", text: "Aspen Lakes West, Valley Ridge and McKay Ranch have attached garages, short driveways and limited street parking. A dead vehicle becomes urgent quickly, which is why so many calls begin with a deadline." },
  ],
  buyTypes: "Cars, SUVs, crossovers, half-tons, heavy-duty and diesel pickups, minivans, cargo vans, work vehicles and fleets. Running vehicles and non-runners are both welcome.",
  buyConditions: "Blown engines or transmissions, failed inspections, hail, collision, salvage and non-repairable write-offs, fire, flood, severe rust and vehicles already partly stripped. Teenagers' first cars and trucks left after a job ends are frequent pickups here.",
  offers: [["Older car, non-running, complete", "$250 – $800"], ["Non-running with parts demand", "$500 – $1,800"], ["High-kilometre commuter, 8–15 years", "$800 – $3,500"], ["Hail-damaged, mechanically sound", "$1,000 – $6,000"], ["Newer running truck, SUV or car", "$3,000 – $15,000"]] as const,
  valueText: "Kilometres matter here because Blackfalds vehicles accumulate them quickly. Rust in rockers, brake lines and subframes is the other major factor. We also consider whether it runs, what it needs, completeness and whether the catalytic converter remains. Trucks and SUVs retain stronger local value.",
  servicesIntro: "Most Blackfalds calls come with a deadline attached—a neighbour, a condo board, a second vehicle that is quietly costing money. Each service below is built for that pace, with free towing and payment before the vehicle leaves.",
  services: [
    { title: "Junk Car Removal in Blackfalds", before: "A dead car in an attached garage on a sloped Aspen Lakes West driveway is our single most common Blackfalds pickup. Our ", linkLabel: "junk car removal service", href: "/junk-car-removal-red-deer", after: " winches it out of tight modern stalls and townhouse lots, usually the same day because we are only sixteen minutes away." },
    { title: "Scrap Car Removal in Blackfalds", before: "Six winters of brine on the 2A can rot a commuter car's rockers, subframe and brake lines past the point of a sensible repair. Our ", linkLabel: "scrap car removal", href: "/scrap-car-removal-red-deer", after: " pays on weight, non-ferrous metal and the converter, and takes it through proper end-of-life processing." },
    { title: "Sell My Car in Blackfalds", before: "The second or third household vehicle that still runs—someone started working from home, or a teenager left for school—is exactly what our ", linkLabel: "sell my car service", href: "/sell-my-car-red-deer", after: " is for. One cash offer, no Marketplace no-shows, no strangers test-driving it past the school." },
    { title: "Damaged and Write-Off Vehicles in Blackfalds", before: "Newer family vehicles written off after hail or a Highway 2 collision often still carry finance. Our ", linkLabel: "damaged car buying service", href: "/damaged-car-removal-red-deer", after: " handles salvage and non-repairable status and arranges the lien payout as part of the sale, so the buyback does not sit on your driveway for months." },
    { title: "Car Wreckers Serving Blackfalds", before: "Contractors near the 597 junction and shops in the light industrial area regularly clear retired work trucks and abandoned customer vehicles. As ", linkLabel: "car wreckers", href: "/car-wreckers-red-deer", after: " we dismantle for parts rather than weight alone, which is why several units cleared together earn a better per-vehicle number." },
    { title: "Free Towing in Blackfalds", before: "Valley Ridge driveway, McKay Ranch visitor stall or a Lacombe County acreage on the edge of town—the pickup costs nothing. ", linkLabel: "Free towing", href: "/free-towing-red-deer", after: " is built into every Blackfalds offer, and short-notice “gone before the weekend” pickups are routine." },
  ],
  accessTitle: "Where We Collect in Blackfalds", accessIntro: "Driveways, attached garages, visitor stalls, condo lots, commercial yards and industrial properties are all included at no cost.",
  accessItems: [
    { title: "Newer subdivisions", text: "Aspen Lakes West, Valley Ridge, McKay Ranch, Highland Green, Panorama Estates, Womacks Road and Broadway Avenue. Tight garages and sloped driveways are common; a photo helps us plan." },
    { title: "Older Blackfalds", text: "Established streets in the older core, including alleys, detached garages and vehicles that have been parked longer than intended." },
    { title: "Commercial and industrial", text: "The Highway 2A corridor and Highway 597 junction, including abandoned shop vehicles and retired contractor fleets. Multiple units improve collection efficiency." },
  ],
  process: "Send the form or call with the year, make, model and condition. We return a figure the same day and often collect the same day because Blackfalds is only sixteen minutes away.",
  paperwork: "Your Alberta plate stays with you. Bring photo ID and proof of ownership; we complete the bill of sale. Mention any outstanding finance before pickup so the lien can be handled properly.",
  nearby: [["Lacombe", "13 km north"], ["Clive", "30 km northeast"], ["Springbrook", "24 km south"], ["Red Deer", "18 km south"], ["Lacombe County", "Acreages included"]] as const,
  faqs: [
    ["How fast can you get here?", "About sixteen minutes on Highway 2A. Blackfalds receives more same-day pickups than almost anywhere else we serve."],
    ["Do you charge for the trip from Red Deer?", "No mileage fee, minimum value or towing charge. Pickup is included in the offer."],
    ["The car is in my attached garage and will not start.", "Routine. We winch it out. Send a photo if the garage is tight or the driveway slopes sharply."],
    ["Can you collect from a townhouse or condo stall?", "Yes. Tell us the stall and access rules; some complexes benefit from a day of notice to management."],
    ["I need it gone before the weekend.", "Say so when you call. Short-notice removals are common here and we will build the schedule around the deadline."],
    ["It is my son’s car and registered to him.", "The registered owner signs or authorizes someone in advance. If he is away, call and we will explain the required documentation."],
    ["Do you buy work trucks and fleets?", "Regularly—one vehicle or several. Multiple units at one location are more efficient for everyone."],
  ] as const,
  finalTitle: "Get a Number in Ninety Seconds",
};

export default function Page() { return <LocationPage data={data} />; }
