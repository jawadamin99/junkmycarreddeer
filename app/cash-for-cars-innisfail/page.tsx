import type { Metadata } from "next";
import heroPhoto from "@/assets/older-ford-f150-acreage.jpeg";
import farmPhoto from "@/assets/old-chevrolet-tahoe-acreage.jpeg";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = { title: "Cash for Cars Innisfail | Free Towing & Cash on Pickup", description: "Cash for cars in Innisfail, Alberta. We buy running, junk, scrap, farm and damaged vehicles, tow free from town and county, and pay when we collect.", alternates: { canonical: "https://www.junkmycarreddeer.ca/cash-for-cars-innisfail" }, openGraph: { title: "Cash for Cars Innisfail | Farm Trucks Welcome", description: "Cash paid with free towing for vehicles throughout Innisfail and surrounding county properties.", url: "https://www.junkmycarreddeer.ca/cash-for-cars-innisfail", type: "website", images: [{ url: heroPhoto.src, width: 1200, height: 630, alt: "Older truck on a farm near Innisfail" }] } };

const data = {
  city: "Innisfail", path: "/cash-for-cars-innisfail", distance: "33 km", route: "QEII",
  heroTitle: "Cash for Cars Innisfail — Cash on Pickup",
  heroText: "Twenty-five minutes down the QEII and we are at your place. Any vehicle, any condition, town or county—one number, free towing and payment before it goes on the deck.",
  heroImage: heroPhoto, heroAlt: "Older working truck near Innisfail", secondaryImage: farmPhoto, secondaryAlt: "Long-sitting vehicle on an Innisfail area acreage",
  localTitle: "A Town That Trades Vehicles", localIntro: "Auction buying, working farms and west-country roads create a steady stream of vehicles that need an honest second valuation.",
  localFactors: [
    { title: "The auction habit", text: "Used vehicles are often bought quickly on limited information. Sometimes a tired transmission, injector problem or hidden frame rot appears later. We only need an accurate description of what you discovered." },
    { title: "Farm and county turnover", text: "Gravel-road half-tons, grain trucks, service units and retired vehicles collect behind shops. Several in one location means one efficient visit and usually a better per-vehicle offer." },
    { title: "Highway 54 and the west", text: "Regular travel toward Spruce View, Dickson and the West Country adds gravel, washboard, chipped glass and suspension wear. These vehicles can age faster than their odometers suggest." },
  ],
  buyTypes: "Cars, SUVs, crossovers, half-tons, 3/4-tons, one-tons, diesel pickups, grain and farm trucks, minivans, cargo vans, commercial units and fleets.",
  buyConditions: "No-starts, seized engines, failed transmissions, hail, collision, salvage and non-repairable write-offs, fire, flood, frame rust, failed inspections, partly stripped and simply finished vehicles.",
  offers: [["Older car, non-running, complete", "$250 – $800"], ["Farm or work truck, non-running", "$600 – $2,000"], ["High-kilometre runner", "$800 – $3,500"], ["Diesel pickup, non-running but complete", "$900 – $3,000"], ["Hail-damaged, mechanically sound", "$1,000 – $6,000"], ["Newer running truck, SUV or car", "$3,000 – $15,000"]] as const,
  valueText: "Weight gives heavy diesel trucks a strong floor. We then price drivetrain, panels, glass, wheels and catalytic converter content. Frame and rocker rust pull the number down most, while completeness protects it.",
  accessTitle: "Where We Collect", accessIntro: "All of Innisfail plus farms, acreages and quarter sections on the surrounding highway and range-road network.",
  accessItems: [{ title: "In town", text: "Residential streets on both sides of the highway, the older core, commercial yards and light-industrial properties along the Highway 2 service road." }, { title: "County and acreage", text: "Highways 54, 2A and 590 plus the range roads between them. Long gravel approaches and field access are routine." }, { title: "Soft-ground planning", text: "Mud is the real limit. If a loaded truck would rut the approach, we return after it dries rather than damage the property." }],
  process: "Call or submit the year, make, model and condition. We return a same-day offer and usually collect the same day or next. Confirmation, paperwork, payment and loading take about twenty minutes.",
  paperwork: "Alberta plates stay with the owner. Informal auction and private purchases sometimes have thin paperwork; if the vehicle was never transferred into your name, call before dispatch so the ownership path can be confirmed.",
  nearby: [["Penhold", "16 km north"], ["Bowden", "16 km south"], ["Spruce View", "25 km west"], ["Olds", "37 km south"], ["Red Deer", "33 km north"]] as const,
  faqs: [["I bought it at auction and it turned out to be junk. Will you take it?", "Yes. Describe what is actually wrong and we will price it without requiring an explanation."], ["It was never transferred into my name.", "Common with auction and private purchases. Call first and we will explain the documentation needed."], ["Do you buy diesel trucks that do not run?", "Regularly. Their weight and reusable parts often make them worth more than expected."], ["There are four vehicles behind my shop.", "We can clear them together. One trip normally improves the per-vehicle offer."], ["Do you come to county acreages?", "Yes, at no extra charge, including long gravel approaches and field access."], ["How much for a grain truck?", "It depends on size, completeness and condition. Their weight works in your favour; describe it for a real number."], ["What if it has been sitting since the nineties?", "Fine. Seized brakes, flat tires, rodent damage and vegetation are routine pickup conditions."]] as const,
  finalTitle: "Find Out What Yours Is Worth",
};
export default function Page() { return <LocationPage data={data} />; }
