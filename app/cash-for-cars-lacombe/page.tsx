import type { Metadata } from "next";
import farmPhoto from "@/assets/older-ford-f150-acreage.jpeg";
import garagePhoto from "@/assets/old-chevrolet-suburban-acreage.jpeg";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Cash for Cars Lacombe AB | Free Pickup, Paid Same Day",
  description: "Cash for cars in Lacombe, Alberta. We buy running, junk, scrap, farm and damaged vehicles, tow free from town and county properties, and pay on pickup.",
  alternates: { canonical: "https://www.junkmycarreddeer.ca/cash-for-cars-lacombe" },
  openGraph: { title: "Cash for Cars Lacombe AB | Free Pickup", description: "Cash offers and free towing for cars, trucks and farm vehicles throughout Lacombe and Lacombe County.", url: "https://www.junkmycarreddeer.ca/cash-for-cars-lacombe", type: "website", images: [{ url: farmPhoto.src, width: 1200, height: 630, alt: "Older farm truck ready for pickup near Lacombe" }] },
};

const data = {
  city: "Lacombe", path: "/cash-for-cars-lacombe", distance: "28 km", route: "Highway 2A",
  heroTitle: "Cash for Cars Lacombe — Paid the Same Day",
  heroText: "Twenty-five minutes up Highway 2A and we are at your door. We buy vehicles in any condition across Lacombe and the county—the truck behind the shop, the car that has not moved since 2019, or a whole fence line on a quarter section.",
  heroImage: farmPhoto, heroAlt: "Older working truck on a Lacombe County property", secondaryImage: garagePhoto, secondaryAlt: "Long-sitting vehicle ready for removal near Lacombe",
  localTitle: "Why Lacombe Sends Us So Many Vehicles", localIntro: "Three things about this city produce a steady stream of vehicles that need to go somewhere, and they are not the same patterns found in a newer commuter town.",
  localFactors: [
    { title: "An old city keeps its cars a long time", text: "Vehicles bought new, driven for eighteen years and parked when they became unreliable often stay until a house sells or an estate is settled. They may not be high-value, but they are usually complete—and completeness matters." },
    { title: "Farm and county traffic", text: "Grain trucks, gravel-road half-tons, service vehicles and older trucks accumulate because removing the last one never felt urgent. Multi-vehicle farm pickups are common, efficient and generally improve the per-vehicle offer." },
    { title: "A university town has student cars", text: "Burman University brings inexpensive student vehicles that do not always survive a second winter. When a tenant leaves one behind, ownership documentation—not removal—is the main hurdle, and we can explain the process." },
  ],
  buyTypes: "Every make and model: sedans, hatchbacks, SUVs, crossovers, half-tons, heavy-duty and diesel pickups, grain and farm trucks, minivans, cargo vans, commercial units and fleets.",
  buyConditions: "No-starts, blown engines, failed transmissions, hail or collision damage, salvage and non-repairable write-offs, fire, flood, frame rust, failed inspections, partly stripped vehicles and anything sitting in a shelterbelt for a decade.",
  offers: [["Older complete car, non-running", "$250 – $800"], ["Farm or work truck, non-running, complete", "$600 – $2,000"], ["High-kilometre runner, 10+ years", "$800 – $3,500"], ["Hail-damaged, mechanically sound", "$1,000 – $6,000"], ["Newer running truck, SUV or car", "$3,000 – $15,000"], ["Three or more vehicles, one location", "Per-vehicle offer improves"]] as const,
  valueText: "Weight sets the floor, so a 3/4-ton diesel begins higher than a compact car. Above that we price reusable drivetrain, body panels, glass, wheels and the catalytic converter. Completeness is frequently underestimated: removing an engine and wheels removes much of the value.",
  accessTitle: "Getting It Out, Including the Awkward Ones", accessIntro: "Old garages, narrow alleys, gravel approaches and shelterbelts are normal work. A quick photo before dispatch helps us bring the right equipment.",
  accessItems: [
    { title: "Heritage garages and back alleys", text: "Narrow doors, inconvenient support posts and alleys designed long before flat decks are all workable. We can use a longer winch line or skate the vehicle into the alley first." },
    { title: "County properties", text: "Long gravel approaches, fields, quonsets and shelterbelts are standard. If soft ground would rut your property, we return when it firms up rather than damage it." },
    { title: "Everything else", text: "No keys, flat or missing tires, blocks, snow, another vehicle or a trailer in the way. Describe it when you call and we arrive prepared." },
  ],
  process: "Phone or use the form with the year, make, model and honest condition. We return a same-day number with towing included and book a pickup window, usually the same day or next.",
  paperwork: "Bring photo ID matching the registered owner and proof of ownership. We prepare the bill of sale. Estate vehicles, liens and cars registered to someone who passed away are common and usually solvable when discussed before dispatch.",
  nearby: [["Blackfalds", "13 km south"], ["Clive", "20 km east"], ["Alix", "32 km east"], ["Ponoka", "30 km north"], ["Bentley", "22 km west"]] as const,
  faqs: [
    ["How quickly can you get to Lacombe?", "About twenty-five minutes on Highway 2A. Morning calls usually qualify for same-day pickup."],
    ["Is there a charge for coming from Red Deer?", "None. There is no mileage fee, county surcharge or minimum vehicle value."],
    ["I have four old trucks on the farm. Do you take all of them?", "Yes, and one visit for several vehicles is efficient. That efficiency normally improves the per-vehicle offer."],
    ["The car is in a garage I cannot get it out of.", "That is our job. Send a photo of the garage and approach so we can plan the winch line and equipment."],
    ["A tenant left a vehicle on my rental property. Can you remove it?", "Possibly, but you need documentation proving the right to dispose of it. Call and we will explain what is needed."],
    ["It is registered to my father, who passed away.", "Estate vehicles are common. Show us the documentation you have and we will confirm what is required before dispatch."],
    ["Do you buy grain trucks and older farm equipment?", "Grain trucks, yes. Other equipment depends on what it is—describe it for a direct answer."],
  ] as const,
  finalTitle: "Find Out What Yours Is Worth",
};

export default function Page() { return <LocationPage data={data} />; }
