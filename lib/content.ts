export const org = {
  name: "Give A Roof",
  legalName: "GiveARoof.org",
  tagline: "Ending Homelessness",
  founded: "April 30, 2024",
  founder: "Claudio Bono",
  ein: "99-2925258",
  address: "20672 Celeste Circle, Cupertino, CA 95014",
  email: "info@givearoof.org",
  // Interim: points to the existing Stripe-backed donation form on the current
  // site. Will be replaced by the custom frictionless donate flow later.
  donateUrl: "https://www.givearoof.org/?post_type=give_forms&p=20736",
  bookUrl:
    "https://www.amazon.com/Homelessness-Fix-World-Everyone-Argues/dp/B0FL5DCMZC/",
};

export const nav = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Watch", href: "/#watch" },
  { label: "The Plan", href: "/#the-plan" },
  { label: "News", href: "/#news" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "A 501(c)(3) nonprofit on a mission",
  title: "Turning unused travel rewards into a roof over someone's head.",
  subtitle:
    "Give A Roof converts donated airline miles, hotel points, and monetary gifts into safe nights of shelter — restoring dignity and hope to people experiencing homelessness.",
  primaryCta: { label: "Donate now", href: org.donateUrl },
  secondaryCta: { label: "See how it works", href: "/#how-it-works" },
  // Rotating background slideshow (retained from the original site).
  slides: [
    {
      src: "/images/hero-night-village.jpg",
      alt: "A lone figure walks through a dimly lit street at night.",
    },
    {
      src: "/images/hero-hands-houses.jpg",
      alt: "An open hand holds small model houses tied with a heart-shaped ribbon.",
    },
  ],
};

export const stats = [
  {
    value: "580,000+",
    label: "people experience homelessness in the U.S. on any given night",
  },
  {
    value: "187,000+",
    label: "of them are in California alone",
  },
  {
    value: "$8.1B",
    label: "estimated annual cost of homelessness in California (2020 study)",
  },
  {
    value: "$25B",
    label: "in untapped airline miles and hotel points sitting unused",
  },
];

export const howItWorks = {
  title: "How it works",
  subtitle:
    "Three simple steps turn rewards you may never use into a safe place to sleep tonight.",
  steps: [
    {
      number: "01",
      title: "You give",
      description:
        "Donate airline miles, hotel points, or a monetary gift. Every contribution — large or small — moves someone closer to shelter.",
    },
    {
      number: "02",
      title: "We convert",
      description:
        "We transform those rewards and funds into booked nights of shelter, working to stretch every point and dollar as far as it will go.",
    },
    {
      number: "03",
      title: "They get a roof",
      description:
        "Recipients receive immediate shelter — and with it, the dignity, stability, and hope to take the next step forward.",
    },
  ],
};

export const video = {
  title: "See the idea in action",
  subtitle:
    "Our founder Claudio Bono on how unused hotel rooms and travel rewards can close the shelter gap.",
  youtubeId: "Lj-e-Hb2NsQ",
  caption: "Can Empty Hotel Rooms Fill California's Shelter Gap? — California Insider Opinion",
};

export const plan = {
  title: "A proven path to ending homelessness in three years",
  byline: `An op-ed from our founder, ${org.founder}`,
  paragraphs: [
    "It started with one person. I funded a ten-night hotel stay for a young man who was sleeping on the street. Those ten nights gave him something he hadn't had in a long time: a door that locked, a bed, and a moment to breathe. In that window he reconnected with his family, and he left to start over with them in Florida.",
    "Ten nights changed a life. It made me ask a simple question: what if we could do that at scale?",
    "Americans are sitting on more than $25 billion in airline miles and hotel points that will never be redeemed. At the same time, more than 580,000 people sleep without shelter every night. The resources to help already exist — they're just locked up in loyalty programs instead of working for people who need them.",
    "Give A Roof bridges that gap. By pairing donated rewards and funds with centralized intake, triage, and immediate shelter, we believe we can chart a realistic, dignity-centered path to ending homelessness in three years. Not by arguing about it — by acting on it.",
  ],
  cta: { label: "Read the book", href: org.bookUrl },
};

export const book = {
  title: "The Homelessness Fix",
  subtitle:
    "How to Save the World While Everyone Else Argues About It",
  author: org.founder,
  description:
    "The full plan, the data, and the story behind Give A Roof — a candid, practical case for solving homelessness in our lifetime.",
  cover: "/images/the-homelessness-fix-book.png",
  buyUrl: org.bookUrl,
};

export const news = {
  title: "In the news",
  subtitle: "Coverage of Give A Roof and our founder's homelessness proposal.",
  articles: [
    {
      outlet: "State of the Union News",
      headline:
        "Proposal to Address California's Homelessness Crisis Introduced by GiveaRoof.org Founder Claudio Bono",
      date: "August 26, 2025",
      url: "https://www.stateoftheunionnews.com/article/843261598-proposal-to-address-california-s-homelessness-crisis-introduced-by-givearoof-org-founder-claudio-bono",
    },
    {
      outlet: "Associated Press",
      headline:
        "A Voice for Change: Cupertino Activist Sends Urgent Homelessness Plan to White House",
      date: "August 7, 2025",
      url: "https://apnews.com/press-release/ein-presswire-newsmatics/a-voice-for-change-cupertino-activist-sends-urgent-homelessness-plan-to-white-house-8933a266f4746a870c1db2b5c5b41e3b",
    },
    {
      outlet: "California News Observer",
      headline:
        "A Voice for Change: Cupertino Activist Sends Urgent Homelessness Plan to White House",
      date: "August 7, 2025",
      url: "https://www.californianewsobserver.com/article/837342751-a-voice-for-change-cupertino-activist-sends-urgent-homelessness-plan-to-white-house",
    },
    {
      outlet: "News 10",
      headline:
        "Cupertino Resident Claudio Bono Proposes $25B Loyalty Point Strategy to End Homelessness, Calls on White House to Act",
      date: "July 24, 2025",
      url: "https://www.news10.com/business/press-releases/ein-presswire/833714896/cupertino-resident-claudio-bono-proposes-25b-loyalty-point-strategy-to-end-homelessness-calls-on-white-house-to-act/",
    },
    {
      outlet: "KRON 4",
      headline: "Claudio Bono Introduces New Initiative for the Homeless Crisis",
      date: "April 30, 2024",
      url: "https://www.kron4.com/business/press-releases/ein-presswire/707829683/claudio-bono-introduces-new-initiative-for-the-homeless-crisis/",
    },
  ],
};

export const about = {
  title: "About Give A Roof",
  paragraphs: [
    `Give A Roof is a California-based 501(c)(3) nonprofit founded on ${org.founded} in Cupertino, CA. Led by ${org.founder}, we're on a mission to turn unused resources into lifesaving shelter for people experiencing homelessness.`,
    "We take a data-driven, dignity-centered approach: meet people where they are, get them under a roof first, and build a path forward from there.",
  ],
};
