import jamesclow from "../assets/images/jamesclow.jpg";
import jamesclowArea from "../assets/images/jamesclow-area.jpg";
import jamesclowServices from "../assets/images/jamesclow-services.jpg";
import jamesclowYacht from "../assets/images/jamesclow-yacht.jpg";
import margaritaplaza from "../assets/images/margaritaplaza.jpg";
import margaritaplazaArea from "../assets/images/margaritaplaza-area.jpg";
import margaritaplazaServices from "../assets/images/margaritaplaza-services.jpg";
import titanicquarter from "../assets/images/titanicquarter.jpg";
import titanicquarterArea from "../assets/images/titanicquarter-area.jpg";
import titanicquarterServices from "../assets/images/titanicquarter-services.jpg";

export interface PropertyImage {
  image: typeof jamesclow;
  alt: string;
}

export interface Property {
  slug: string;
  name: string;
  pageTitle: string;
  tagline: string;
  price: string;
  description: string;
  gallery: PropertyImage[];
  info: string;
  areaImage: typeof jamesclow;
  area: string;
  servicesImage: typeof jamesclow;
  services: string[];
  mapQuery: string;
}

export const properties: Property[] = [
  {
    slug: "jamesclow",
    name: "James Clow",
    pageTitle: "James Clow - Clarendon Dock Belfast",
    tagline: "Ocean facing, 10 minutes walk to City Hall",
    price: "£89",
    description:
      "These generously sized 2 x one bedroom contemporary apartments are suitable for up to 2 guests and 1 child (extra bed). The apartments are tastefully furnished and decorated with panoramic views of the Belfast docklands famous for building the Titanic and Paint Hall film studios.",
    gallery: [
      {
        image: jamesclow,
        alt: "View of the living room of the James Clow apartment",
      },
      {
        image: jamesclowYacht,
        alt: "Yacht passing the Belfast Clarendon Docks area",
      },
      {
        image: jamesclowServices,
        alt: "View of the master bedroom of the James Clow apartment",
      },
      {
        image: jamesclowArea,
        alt: "View from the balcony of the James Clow apartment",
      },
    ],
    info: "These generously sized 2 x one bedroom contemporary apartments are suitable for up to 2 guests and 1 child (extra bed). The apartments are tastefully furnished and decorated with panoramic views of the Belfast docklands famous for building the Titanic and Paint Hall film studios. The facility offers a relaxing living area with plasma TV, DVD, dining area, private bathroom, a fully equipped kitchen with top of the range appliances including double oven, microwave, dishwasher and a utility room with a washing machine / dryer. Enjoy watching the boats go by on the marina taking advantage of the private balcony.",
    areaImage: jamesclowYacht,
    area: "Bt1 Apartments – James Clow Clarendon Dock is conveniently located less than a 10 minute walk from Belfast City Hall, Victoria Square shopping centre, local pubs, coffee shops and restaurants of central Belfast. We are situated in the heart of the up and coming docklands business district of global blue chip companies. James Clow has direct access to the M2 / M3 and is 0.5 mile away from the main Westlink access to M1 and is 5 minute taxi from the Europa train / bus station.",
    servicesImage: jamesclowServices,
    services: [
      "Full kitchen with top of the range appliances",
      "Dining table x 4 chairs",
      "Living room with flat screen TV / DVD",
      "Grand Arm chair and stool",
      "Complimentary DVDs",
      "Complimentary WiFi",
      "Private balcony",
      "Kettle / Toaster / Microwave",
      "Dishwasher / Washing machine / Dryer",
      "Complimentary toiletries",
      "Central Heating / Gas / Carbon monoxide alarms fitted",
      "Weekly apartment servicing",
      "24 Hour support call service and flexible check-in",
      "Main entrance security pin",
      "Parking",
      "Gym Nearby",
      "City Bike rental nearby",
      "City Centre",
    ],
    mapQuery:
      "James Clow Building, Princes Dock Street, Belfast, BT1 3AA",
  },
  {
    slug: "margaritaplaza",
    name: "Margarita Plaza",
    pageTitle: "Margarita Plaza Apartment - City Centre Belfast",
    tagline: "2 minutes walk to City Hall",
    price: "£89",
    description:
      "This generously sized one bedroom contemporary apartment is suitable for up to 2 guests and 2 children. The apartment features a relaxing living area with plasma TV, DVD, dining area, private bathroom, free WiFi and a full kitchen with appliances.",
    gallery: [
      {
        image: margaritaplaza,
        alt: "View of the living room of the Margarita Plaza apartment",
      },
      {
        image: margaritaplazaServices,
        alt: "View of the bedroom of the Margarita Plaza apartment",
      },
      {
        image: margaritaplazaArea,
        alt: "View from the Margarita Plaza apartment",
      },
    ],
    info: "This generously sized one bedroom contemporary apartment is suitable for up to 2 guests and 2 children. The apartment features a relaxing living area with plasma TV, DVD, dining area, private bathroom, free WiFi and a full kitchen with appliances including microwave and washing machine / dryer. The apartment lobby has stunning mosaic flooring, seating and lifts are available for ease. The apartment features a relaxing living area with business desk and printer. There is also a private balcony to take in the evening sun.",
    areaImage: margaritaplazaArea,
    area: "BT1 Apartments - Margarita Plaza is conveniently located less than a 2 minute walk from Belfast City Hall, Victoria Square shopping centre, local pubs, coffee shops and restaurants of central Belfast. We are situated in the city business district of Adelaide Street beside Edelaide Exchange (Liberty IT). Margarita Plaza is less than 1 mile away from the main motorways of M1, M2 and M3 and 5 minute walk from the Europa train / bus station.",
    servicesImage: margaritaplazaServices,
    services: [
      "Full kitchen with a wide range appliances",
      "Dining table x 4 chairs",
      "Living room with flat screen TV / DVD",
      "Business desk and printer",
      "Complimentary WiFi",
      "Private balcony",
      "Kettle / Toaster / Microwave",
      "Complimentary toiletries",
      "Central Heating / Gas / Carbon monoxide alarms fitted",
      "Weekly apartment servicing",
      "24 Hour support call service and flexible check-in",
      "Main entrance security pin / swipe card access",
      "Parking nearby",
      "Gym Nearby",
      "City Bike rental nearby",
      "City Centre",
    ],
    mapQuery: "Margarita Plaza, 82 Adelaide Street, Belfast, BT2 8HS",
  },
  {
    slug: "titanicquarter",
    name: "Titanic Quarter",
    pageTitle: "Titanic Quarter Apartment - Abercorn Basin Belfast",
    tagline: "Marina facing, 15-20 minutes walk to City Hall",
    price: "£89",
    description:
      "This sumptuous two bedroom apartment is suitable for up to 2 guests and 2 children. This highly desirable contemporary apartment is tastefully furnished and decorated and boasts panoramic views of the Titanic Quarter, its marina and the Belfast docklands famous for building the Titanic.",
    gallery: [
      {
        image: titanicquarter,
        alt: "View of the living room of the Titanic Quarter apartment",
      },
      {
        image: titanicquarterServices,
        alt: "View of the bedroom of the Titanic Quarter apartment",
      },
      {
        image: titanicquarterArea,
        alt: "View of the marina from the Titanic Quarter apartment",
      },
    ],
    info: "This sumptuous two bedroom apartment is suitable for up to 2 guests and 2 children. This highly desirable contemporary apartment is tastefully furnished and decorated and boasts panoramic views of the Titanic Quarter, its marina and the Belfast docklands famous for building the Titanic. The facility offers a relaxing open plan living area with plasma TV, dining area, main bathroom and private en-suite bathroom. The kitchen is fully equipped with top of the range appliances including microwave, double oven and dishwasher. A separate utility room with a washing machine / dryer is located in the hall. For those lazy mornings there is also a private balcony to take in the morning sun.",
    areaImage: titanicquarterArea,
    area: "Bt1 Apartments – Titanic Quarter is one of the world’s largest urban-waterfront regeneration projects. Situated in the heart of the Titanic Quarter within Queen’s Island this area is where the world famous Titanic was built and launched. Conveniently located less than 15 minutes walk from Belfast City Hall, Victoria Square shopping centre, local pubs, coffee shops and restaurants in central Belfast Titanic Quarter is well served with public access links into town and there is direct access onto the M2 / M3 and 0.5 mile away from the main west-link access to M1.",
    servicesImage: titanicquarterServices,
    services: [
      "Full kitchen with top of the range appliances",
      "2 bedroom / 2 bathroom",
      "Dining table x 4 chairs",
      "Living room with flat screen TV / DVD",
      "Soft furnishings",
      "Integrated radio system throughout all rooms",
      "Complimentary WiFi*",
      "Private balcony",
      "Kettle / Toaster / Microwave",
      "Dishwasher / Washing machine / Dryer",
      "Complimentary toiletries",
      "Central Heating / Gas",
      "24 Hour support call service and flexible check-in",
      "Apartment servicing or tailored to suit needs",
      "Main entrance security pin",
      "Parking",
      "Private balcony with panoramic views of the marina",
      "Gym Nearby",
      "City Bike rental nearby",
    ],
    mapQuery: "2a Queens Road, Belfast, BT3 9FB",
  },
];
