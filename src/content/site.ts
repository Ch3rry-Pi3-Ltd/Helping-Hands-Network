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

export const fundraisingDestinations = {
  givingLottery:
    "https://www.givinglottery.org.uk/support/healing-hands-network",
  giveAsYouLive:
    "https://www.giveasyoulive.com/charity/healinghandsnetwork",
  giveAsYouLiveDonate:
    "https://donate.giveasyoulive.com/charity/healinghandsnetwork",
} as const;

export const supportRoutes = [
  {
    title: "GoFundMe",
    description:
      "Browse Healing Hands Network's current fundraising appeals through the charity's preferred online fundraising platform.",
    href: "https://www.gofundme.com/u/healing-hands-network",
    label: "View GoFundMe profile",
    status: "Preferred online fundraising route",
  },
  {
    title: "CAF Donate",
    description:
      "Make a donation through Healing Hands Network's secure CAF Donate page.",
    href: "https://cafdonate.cafonline.org/23120",
    label: "Donate through CAF",
    status: "Secure external donation page",
  },
  {
    title: "JustGiving",
    description:
      "Healing Hands Network is also registered with JustGiving for supporters who prefer to donate through that service.",
    href: "https://www.justgiving.com/charity/healinghandsnetwork",
    label: "View JustGiving profile",
    status: "Additional online giving option",
  },
  {
    title: "Fundraising and sponsorship",
    description:
      "Supporters can organise fundraising, sponsor aspects of the work or offer practical help.",
    href: `mailto:${siteConfig.email}?subject=Fundraising%20or%20sponsorship`,
    label: "Discuss supporting HHN",
    status: "Contact the charity to get started",
  },
] as const;
