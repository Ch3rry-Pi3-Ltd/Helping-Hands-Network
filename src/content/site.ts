export const siteConfig = {
  name: "Healing Hands Network",
  shortName: "HHN",
  description:
    "Helping those affected by war and its aftermath in the UK and overseas.",
  mission:
    "Dedicated to the relief of suffering from the mental, physical and emotional after-effects of war.",
  charityNumber: "1080268",
  email: "healinghandsnetwork@gmail.com",
  adminSupportEmail: "emmahhn1@gmail.com",
  phone: "07734 462000",
  address: [
    "Healing Hands Network",
    "151 Fillongley Road",
    "Meriden",
    "Coventry",
    "CV7 7LT",
  ],
  facebook: "https://www.facebook.com/healinghandsnetwork",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Our work", href: "/our-work" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Support us", href: "/support-us" },
  { label: "Updates", href: "/updates" },
  { label: "Contact", href: "/contact" },
] as const;

export type Project = {
  title: string;
  shortTitle: string;
  href: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  accent: "teal" | "blue" | "navy";
};

export const ukSupport = {
  title: "UK military family support",
  shortTitle: "UK support",
  href: "/our-work/uk-veterans",
  summary:
    "Current UK activity is focused on supporting military FABCAMPS residential weeks for bereaved armed-forces families.",
  image: "/images/veterans-group.jpg",
  imageAlt:
    "Veterans and support workers gathered around a table at a community meeting",
  accent: "navy",
} satisfies Project;

export const projects: Project[] = [
  {
    title: "Bosnia and Herzegovina",
    shortTitle: "Bosnia",
    href: "/our-work/bosnia-and-herzegovina",
    summary:
      "Providing free complementary therapies and gentle support in Sarajevo to people living with the lasting effects of the Balkan War.",
    image: "/images/sarajevo-group.jpg",
    imageAlt:
      "A small support group seated together in the Healing Hands Network clinic in Sarajevo",
    accent: "teal",
  },
  {
    title: "Ukraine Aid",
    shortTitle: "Ukraine",
    href: "/our-work/ukraine",
    summary:
      "Delivering vehicles and humanitarian, medical and surgical aid through trusted partners working across Ukraine.",
    accent: "blue",
  },
];

export const testimonials = [
  {
    quote:
      "HHN's therapies have helped me physically and psychologically. I can only say that I am reborn. Thank you HHN.",
    attribution: "Bosnian client treated by Healing Hands Network",
  },
  {
    quote:
      "It was a beautiful, touching, rewarding and hugely profound experience. One I will never forget.",
    attribution: "Healing Hands Network volunteer",
  },
  {
    quote:
      "These wonderful therapists thrill me with their desire to come and spend two weeks in Sarajevo and help someone they have never met before.",
    attribution: "Nadija Pinjo, HHN Sarajevo coordinator",
  },
] as const;

export const supportRoutes = [
  {
    title: "GoFundMe profile",
    description:
      "Sue has confirmed GoFundMe is the charity's preferred online fundraising platform because its costs are lower for the charity.",
    href: "https://www.gofundme.com/u/healing-hands-network",
    label: "View GoFundMe profile",
    status: "Profile URL supplied by Roger and verified reachable on 22 August 2026",
  },
  {
    title: "CAF Donate",
    description:
      "Sue supplied a CAF Donate page as a current donation route for people who want to support the charity's vital work.",
    href: "https://cafdonate.cafonline.org/23120",
    label: "Donate through CAF",
    status: "Verified reachable on 22 August 2026",
  },
  {
    title: "JustGiving registration",
    description:
      "Healing Hands Network is registered with JustGiving, but Sue has confirmed it is not the charity's main fundraising platform.",
    href: "https://www.justgiving.com/charity/healinghandsnetwork",
    label: "View JustGiving profile",
    status: "Keep as a secondary route unless Sue asks otherwise",
  },
  {
    title: "Giving Lottery and Give as You Live",
    description:
      "Sue has confirmed the charity uses The Giving Lottery and Give as You Live online shopping fundraising.",
    href: `mailto:${siteConfig.email}?subject=Giving%20Lottery%20or%20Give%20as%20You%20Live`,
    label: "Ask for current links",
    status:
      "Sue to supply working current links and approved marketing materials",
  },
  {
    title: "Standing order and Gift Aid",
    description:
      "Supporters can donate by bank transfer and request a Gift Aid form. Current public instructions should be supplied by the charity.",
    href: `mailto:${siteConfig.email}?subject=Standing%20order%20or%20Gift%20Aid`,
    label: "Request the current forms",
    status: "Current documents to be confirmed",
  },
  {
    title: "Fundraising and sponsorship",
    description:
      "Supporters can organise fundraising, sponsor aspects of the work or offer practical help.",
    href: `mailto:${siteConfig.email}?subject=Fundraising%20or%20sponsorship`,
    label: "Discuss supporting HHN",
    status: "Contact route confirmed",
  },
] as const;
