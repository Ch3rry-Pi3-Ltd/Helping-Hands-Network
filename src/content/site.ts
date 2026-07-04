export const siteConfig = {
  name: "Healing Hands Network",
  shortName: "HHN",
  description:
    "A UK charity helping people with the mental, physical and emotional after-effects of war.",
  mission:
    "Dedicated to the relief of suffering from the mental, physical and emotional after-effects of war.",
  charityNumber: "1080268",
  email: "healinghandsnetwork@gmail.com",
  phone: "07815 628372",
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
  {
    title: "UK Veterans",
    shortTitle: "UK Veterans",
    href: "/our-work/uk-veterans",
    summary:
      "Supporting veterans, serving personnel and their families with complementary therapies and compassionate care.",
    image: "/images/veterans-group.jpg",
    imageAlt:
      "Veterans and support workers gathered around a table at a community meeting",
    accent: "navy",
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
    title: "Ukraine aid campaign",
    description:
      "A public JustGiving campaign is currently available for the charity's Ukraine work.",
    href: "https://www.justgiving.com/campaign/justgivingaidforukraine",
    label: "View JustGiving campaign",
    status: "Confirm as the primary campaign before launch",
  },
  {
    title: "GoFundMe campaign",
    description:
      "The current website embeds a GoFundMe campaign for continuing aid to Ukraine.",
    href: "https://www.gofundme.com/f/aid-for-ukraine-continues",
    label: "View GoFundMe campaign",
    status: "Confirm campaign is still active before launch",
  },
  {
    title: "Standing order and Gift Aid",
    description:
      "The existing site offers downloadable forms. Current versions and bank details should be supplied by the charity.",
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
