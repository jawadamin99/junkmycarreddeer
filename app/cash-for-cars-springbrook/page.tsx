import type { Metadata } from "next";
import heroPhoto from "@/assets/used-sedan-red-deer.jpeg";
import pickupPhoto from "@/assets/junk-pickup-free-towing.jpeg";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = { title: "Cash for Cars Springbrook AB | Free Towing & Cash Paid", description: "Cash for cars in Springbrook, Alberta. We buy running, junk and scrap vehicles, tow free from any lot or stall, and pay you when we collect. 14 minutes from Red Deer.", alternates: { canonical: "https://www.junkmycarreddeer.ca/cash-for-cars-springbrook" }, openGraph: { title: "Cash for Cars Springbrook | Free Same-Day Towing", description: "Cash paid for unwanted vehicles in Springbrook, only fourteen minutes from Red Deer.", url: "https://www.junkmycarreddeer.ca/cash-for-cars-springbrook", type: "website", images: [{ url: heroPhoto.src, width: 1200, height: 630, alt: "Vehicle ready for cash pickup in Springbrook" }] } };

const data = {
  city: "Springbrook", path: "/cash-for-cars-springbrook", distance: "12 km", route: "Highway 2A",
  heroTitle: "Cash for Cars Springbrook — Free Towing Today",
  heroText: "We are closer to Springbrook than almost anywhere else we serve. If a vehicle is sitting in your driveway, on the street or in a stall it should not be in, we will buy it and have it gone today.",
  heroImage: heroPhoto, heroAlt: "Used vehicle collected for cash in Springbrook", secondaryImage: pickupPhoto, secondaryAlt: "Flat-deck vehicle pickup serving Springbrook",
  localTitle: "A Hamlet With Nowhere to Put a Dead Car", localIntro: "Compact lots, frequent rental turnover and the airport corridor create urgent removal calls rather than vehicles that can quietly sit for years.",
  localFactors: [
    { title: "Small lots, short driveways", text: "Springbrook's base-housing footprint means narrow streets and driveways suited to one vehicle. With no back forty, a non-runner becomes an immediate space problem and calls often arrive with a deadline." },
    { title: "High turnover means abandoned vehicles", text: "Rental tenancies turn over quickly, and vehicles not worth moving can remain behind. For landlords, the removal is easy; proving the right to dispose of it is the part to arrange first." },
    { title: "The airport side", text: "Businesses around Red Deer Regional Airport operate service units, shuttles and older work trucks. Commercial pickups, including several vehicles at once, are routine." },
  ],
  buyTypes: "Cars, SUVs, half-tons, heavy-duty pickups, minivans, cargo vans, work trucks and fleet vehicles—running or not.",
  buyConditions: "No-starts, failed engines or transmissions, hail, collision, salvage and non-repairable write-offs, fire, flood, frame rust, failed inspections and partly stripped vehicles all qualify.",
  offers: [["Older car, non-running, complete", "$250 – $800"], ["Non-running with parts demand", "$500 – $1,800"], ["High-kilometre runner", "$800 – $3,500"], ["Hail-damaged, mechanically sound", "$1,000 – $6,000"], ["Newer running truck, SUV or car", "$3,000 – $15,000"]] as const,
  valueText: "Weight establishes the floor, salvageable parts create the upside and rust pulls the number down. An intact catalytic converter is a meaningful line item, so mention if it is missing and the quote will be accurate from the beginning.",
  accessTitle: "Pickup Here Is Straightforward", accessIntro: "Driveways, street parking, visitor stalls, rented spaces and airport-corridor commercial yards are all covered.",
  accessItems: [
    { title: "Compact residential streets", text: "Street width and cars parked tightly on both sides are worth mentioning because a flat deck needs manoeuvring room. We can choose a smaller unit or a clearer time." },
    { title: "Stalls and rental properties", text: "Visitor stalls and rented spots are routine. Property managers should arrange any required access and ownership documentation before pickup." },
    { title: "No-starts and difficult wheels", text: "No keys, flat tires, missing tires and years of sitting are standard. We bring a winch and skates when told in advance." },
  ],
  process: "Springbrook is about fourteen minutes away. Morning calls almost always receive same-day pickup; afternoon calls typically receive next-morning service. Tell us about any deadline when booking.",
  paperwork: "Bring photo ID matching the registered owner and proof of ownership. We write the bill of sale. Abandoned tenant vehicles, estates and outstanding liens have a route but should be discussed before pickup.",
  nearby: [["Penhold", "6 km south"], ["Red Deer", "12 km north"], ["Innisfail", "21 km south"], ["Highway 2A", "County acreages"], ["Highway 595", "Rural pickup"]] as const,
  faqs: [["How quickly can you be here?", "About fourteen minutes. Springbrook is one of our fastest service areas and same-day pickup is normal."], ["Is there any cost?", "None. No towing fee, trip charge or minimum vehicle value."], ["A tenant left a car behind. Can you take it?", "Often, with documentation showing the right to dispose of it. Call first and we will explain what is required."], ["The street is tight and cars are parked on both sides.", "Mention it when booking. We can send a smaller unit or arrange a time when access is clearer."], ["Can you take several vehicles from one property?", "Yes. One trip improves efficiency and normally improves the per-vehicle offer."], ["It has not started in three years.", "Normal. Winches, skates, seized brakes and flat tires are part of the work."]] as const,
  finalTitle: "Get a Number Today",
};
export default function Page() { return <LocationPage data={data} />; }
