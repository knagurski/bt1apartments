import comehome from "../assets/images/productions/comehome.jpg";
import daveallenatpeace from "../assets/images/productions/daveallenatpeace.jpg";
import gameofthrones from "../assets/images/productions/gameofthrones.jpg";
import krypton from "../assets/images/productions/krypton.jpg";
import morgan from "../assets/images/productions/morgan.jpg";
import paula from "../assets/images/productions/paula.jpg";
import robotoverlords from "../assets/images/productions/robotoverlords.jpg";
import thejourney from "../assets/images/productions/thejourney.jpg";
import thelodge from "../assets/images/productions/thelodge.jpg";
import thelostcityofz from "../assets/images/productions/thelostcityofz.jpg";
import brochure2014Golf from "../assets/images/brochure_2014_Golf_Brochure.jpg";
import brochure2015Guide from "../assets/images/brochure_2015_Visitor_Guide.jpg";
import brochureBT1 from "../assets/images/brochure_BT1_Brochure.jpg";
import brochureMyNI from "../assets/images/brochure_myNI.jpg";
import type { Production } from "../components/ProductionsCarousel.astro";

export const productions: Production[] = [
  {
    href: "https://www.imdb.com/title/tt0944947",
    title: "Game of Thrones",
    image: gameofthrones,
    alt: "Game of Thrones",
  },
  {
    href: "https://www.imdb.com/title/tt2145829",
    title: "Robot Overlords",
    image: robotoverlords,
    alt: "Robot Overlords",
  },
  {
    href: "https://www.imdb.com/title/tt6176812",
    title: "The Lodge",
    image: thelodge,
    alt: "The Lodge",
  },
  {
    href: "https://www.imdb.com/title/tt4520364",
    title: "Morgan",
    image: morgan,
    alt: "Morgan",
  },
  {
    href: "https://www.imdb.com/title/tt1212428",
    title: "The Lost City of Z",
    image: thelostcityofz,
    alt: "The Lost City of Z",
  },
  {
    href: "https://www.imdb.com/title/tt4826674",
    title: "The Journey",
    image: thejourney,
    alt: "The Journey",
  },
  {
    href: "https://www.imdb.com/title/tt4276624",
    title: "Krypton",
    image: krypton,
    alt: "Krypton",
  },
  {
    href: "https://www.imdb.com/title/tt6495880",
    title: "Paula",
    image: paula,
    alt: "Paula",
  },
  {
    href: "https://www.imdb.com/title/tt7912316",
    title: "Dave Allen at Peace",
    image: daveallenatpeace,
    alt: "Dave Allen at Peace",
  },
  {
    href: "https://www.imdb.com/title/tt8001146",
    title: "Come Home",
    image: comehome,
    alt: "Come Home",
  },
];

export interface Brochure {
  href: string;
  image: typeof brochureBT1;
  alt: string;
  caption: string;
}

export const brochures: Brochure[] = [
  {
    href: "/brochures/BT1_Brochure.pdf",
    image: brochureBT1,
    alt: "BT1 brochure",
    caption: "BT1 Brochure",
  },
  {
    href: "/brochures/myNI.pdf",
    image: brochureMyNI,
    alt: "My Northern Ireland",
    caption: "My Northern Ireland",
  },
  {
    href: "/brochures/2015_Visitor_Guide.pdf",
    image: brochure2015Guide,
    alt: "Northern Ireland Visitor Guide",
    caption: "Northern Ireland Visitor Guide",
  },
  {
    href: "/brochures/2014_Golf_Brochure.pdf",
    image: brochure2014Golf,
    alt: "Northern Ireland - Made for Golf",
    caption: "Northern Ireland - Made for Golf",
  },
];
