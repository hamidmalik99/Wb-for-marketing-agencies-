import { PortfolioItem, SkillGroup, CMSProject, IndustryGroup } from "./types";

export const DEV_NAME = "Hamid Ali Asad";
export const DEV_TITLE = "WordPress Developer & AI Systems Engineer";
export const DEV_BIO = "I build high-performance, custom WordPress & WooCommerce systems, web applications, and smart AI workflows (Gemini SDK) connected with automated backend logic (Make.com, Zapier). Fully aligned with EST, PST, and AEST hours to support global clients and remote teams.";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "WordPress & Frontend",
    skills: [
      { name: "WordPress & WooCommerce", level: "Expert" },
      { name: "Custom Themes & Plugins", level: "Expert" },
      { name: "Bricks, Elementor & Gutenberg", level: "Expert" },
      { name: "React 19 / Vite", level: "Expert" },
      { name: "Tailwind CSS & Motion", level: "Expert" },
      { name: "PHP & Node.js", level: "Expert" }
    ]
  },
  {
    category: "AI Integration & LLM Ops",
    skills: [
      { name: "@google/genai SDK", level: "Expert" },
      { name: "Gemini 3.5 & Flash Models", level: "Expert" },
      { name: "Custom WordPress AI Chatbots", level: "Expert" },
      { name: "Structured JSON Outputs", level: "Expert" },
      { name: "Prompt Architecture", level: "Expert" }
    ]
  },
  {
    category: "No-Code & Automation",
    skills: [
      { name: "Make.com (Integromat)", level: "Expert" },
      { name: "Zapier Integrations", level: "Expert" },
      { name: "REST APIs & Webhooks", level: "Expert" },
      { name: "CRM Integration (HubSpot, etc)", level: "Advanced" },
      { name: "Puppeteer / Web Scraping", level: "Advanced" }
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "gemini-content-pipeline",
    title: "Autonomous AI Content & Branding Pipeline",
    category: "AI Integration",
    description: "An automated agency system that scrapes hot tech feeds, filters and analyzes trending topics with Gemini Flash, writes highly engaging LinkedIn/Twitter updates, and schedules them dynamically.",
    techStack: ["Node.js", "Express", "Vite/React", "@google/genai", "Make.com Webhooks", "Buffer API"],
    campaignContext: "Core demo in an agency campaign which generated a 22% reply rate from SaaS marketing heads.",
    architectureFlow: [
      "RSS Scraper fetches trending articles hourly",
      "Express backend parses raw content and passes to Gemini 3.5 Flash",
      "Gemini filters for relevance, extracts core highlights, and drafts social posts",
      "Human validation React dashboard allows one-click edit and approval",
      "Webhook automatically delivers approved payload to Buffer social scheduler"
    ],
    details: [
      "Reduces manual research and social copy drafting time by 92%.",
      "Employs system instructions to output strictly non-generic, high-converting copy.",
      "Integrated full-state logging to check prompt consumption and token costs live."
    ]
  },
  {
    id: "outreach-enrichment-engine",
    title: "Upwork & Cold Email Multi-Channel Engine",
    category: "Workflow Automation",
    description: "An intelligent scraper that scans job boards (like Upwork) matching developer keywords, enriches lead data, uses Gemini to draft contextual personalized icebreakers, and enriches campaigns automatically.",
    techStack: ["Puppeteer", "Gemini 3.5 Flash", "Apollo.io API", "Airtable Webhooks", "Lemlist API"],
    campaignContext: "In-house engine used to generate 15+ warm pipeline conversations with agency clients.",
    architectureFlow: [
      "CRON script triggers Puppeteer to scrape targeted lead profiles hourly",
      "Scrapes prospective company homepages and qualifies company size via Apollo API",
      "Gemini analyzes company landing page copy to draft 100% authentic, personalized opener",
      "Airtable tracks campaign performance stats and updates webhook on status transition",
      "Lemlist API injects prospects dynamically into custom-timed multi-touch campaign"
    ],
    details: [
      "Maintained a 64% cold email open rate and 14% positive reply rate.",
      "Bypassed standard template detection by writing customized icebreakers per company focus.",
      "Integrated Slack alerts for real-time tracking of new leads qualified by AI."
    ]
  },
  {
    id: "support-dispatcher-agent",
    title: "Multi-Source Knowledge AI Dispatcher",
    category: "Fullstack Web App",
    description: "A secure fullstack support assistant that integrates directly with Slack, WhatsApp, and Twilio, parsing customer issues, performing semantic vector lookups, and resolving them automatically.",
    techStack: ["React 19", "Express.js", "Gemini 3.5 Flash", "Pinecone Vector DB", "Twilio API"],
    campaignContext: "Built as a reference model for a mid-market customer support agency campaign.",
    architectureFlow: [
      "Inbound message from Slack/WhatsApp triggers Express API endpoint securely",
      "Generates prompt context using cosine similarity against historical Zendesk help files",
      "Gemini evaluates query safety, matches against company policy, and formats reply",
      "Express server relays response via Twilio API with 1.8s round-trip time",
      "Automatic handoff trigger redirects to human support if negative sentiment or complexity is high"
    ],
    details: [
      "Resolved 42% of tier-1 support requests entirely autonomously.",
      "Ensures zero API key exposure by handling all LLM calls on a secured proxy layer.",
      "Includes a gorgeous client monitoring dashboard with live token usage statistics."
    ]
  }
];

export const WORKFLOW_RECIPES = [
  {
    id: "recipe-outreach",
    title: "Upwork Lead-to-Outreach pipeline",
    trigger: "New Scraped Upwork Job",
    steps: [
      { name: "Scrape Details", desc: "Extract job description, budget, and tags via custom parser" },
      { name: "AI Qualification", desc: "Analyze description with Gemini Flash to ensure skill compatibility (score > 80)" },
      { name: "Proposal Draft", desc: "Gemini drafts an expert technical solution and cover letter tailored to the job" },
      { name: "Push to Airtable", desc: "Create a new review row for the freelancer & trigger a Slack alert" }
    ],
    timeSaved: "3.5 hours / day"
  },
  {
    id: "recipe-content",
    title: "AI SEO Content Machine",
    trigger: "Weekly SEO Target Keyword List",
    steps: [
      { name: "Competitor Analysis", desc: "Scrape top 3 Google search result outlines for each keyword" },
      { name: "Article Generation", desc: "Gemini Pro generates comprehensive, informative 2000-word outlines" },
      { name: "Copy Enhancement", desc: "Review readability, insert custom semantic keywords & code snippets" },
      { name: "Draft to CMS", desc: "Push to WordPress/Webflow CMS staging state via REST API" }
    ],
    timeSaved: "12 hours / week"
  }
];

export const CMS_PROJECTS: CMSProject[] = [
  {
    title: "Tax law firm — services, blog & contact",
    url: "https://sammeltax.com.au/",
    tags: ["WordPress", "SEO"],
    location: "🇦🇺 Australia",
    description: "Tax law firm — services, blog & contact"
  },
  {
    title: "Solar installer — lead gen & quote system",
    url: "https://illuminaenergy.com.au/",
    tags: ["WordPress", "Lead Gen"],
    location: "🇦🇺 Australia",
    description: "Solar installer — lead gen & quote system"
  },
  {
    title: "Painting trades — quote request & service pages",
    url: "https://proluxepaintingservices.com.au/",
    tags: ["WordPress", "UI/UX"],
    location: "🇦🇺 Australia",
    description: "Painting trades — quote request & service pages"
  },
  {
    title: "Restaurant — menu, reservations & location pages",
    url: "https://thebricklane.com.au/",
    tags: ["WordPress", "Interactive"],
    location: "🇦🇺 Australia",
    description: "Restaurant — menu, reservations & location pages"
  },
  {
    title: "Construction & renovation — project gallery & quote",
    url: "https://buonconstruction.com/",
    tags: ["WordPress", "Gallery"],
    location: "🇬🇧 UK",
    description: "Construction & renovation — project gallery & quote"
  },
  {
    title: "HVAC & home maintenance — service pages & booking",
    url: "https://homecomfort.me/",
    tags: ["WordPress", "Booking"],
    location: "Dubai",
    description: "HVAC & home maintenance — service pages & booking"
  },
  {
    title: "Shisha lounge — menu, bookings & locations",
    url: "https://pashashisha.uk/",
    tags: ["WordPress", "Hospitality"],
    location: "🇬🇧 UK",
    description: "Shisha lounge — menu, bookings & locations"
  },
  {
    title: "Boutique accommodation — room listings & booking",
    url: "https://dc10rooms.co.uk/",
    tags: ["WordPress", "Reservations"],
    location: "🇬🇧 UK",
    description: "Boutique accommodation — room listings & booking"
  }
];

export const INDUSTRY_GROUPS: IndustryGroup[] = [
  {
    category: "🏗 Structural Engineering — Australia",
    links: [
      "cantileverengineers.com.au",
      "sdastructures.com.au",
      "designeng.com.au",
      "melbournestructural.com.au"
    ]
  },
  {
    category: "🔧 Home Services — Melbourne",
    links: [
      "mccarthyplumbinggroup.com.au",
      "focusbuild.au"
    ]
  },
  {
    category: "🌐 ISP / Internet Providers — Australia",
    links: [
      "pentanet.com.au",
      "aussiebroadband.com.au",
      "swoop.com.au"
    ]
  },
  {
    category: "🧠 HR / Workplace Consulting — Australia",
    links: [
      "psysafe.com.au",
      "elevateconsultingpartners.com.au"
    ]
  },
  {
    category: "📱 Mobile Repair — Australia",
    links: [
      "irepairexperts.com.au",
      "starphones.com.au"
    ]
  },
  {
    category: "🚗 Limo / Party Bus — France & USA",
    links: [
      "francelimousineservices.fr",
      "mylimousineparis.com",
      "presidentialtranspo.com",
      "nycpartybuspros.com"
    ]
  },
  {
    category: "💆 Skincare / Med Spa — Australia",
    links: [
      "99medispa.com.au",
      "luxemedicalaesthetics.com.au"
    ]
  },
  {
    category: "🏠 Real Estate — Australia",
    links: [
      "bw.com.au",
      "atlas.com.au",
      "ppd.com.au"
    ]
  },
  {
    category: "🤝 Nonprofits — UK",
    links: [
      "farmafrica.org",
      "battersea.org.uk",
      "wateraid.org/uk"
    ]
  },
  {
    category: "🏢 Property Management — AU & UK",
    links: [
      "pinpointpm.com.au",
      "pm.partners",
      "rpmgrp.com.au"
    ]
  },
  {
    category: "⚖️ Law Firms — US, AU & Africa",
    links: [
      "asafoandco.com",
      "danielwilliamslaw.com",
      "raniacombslaw.com",
      "mcintyrelegal.com.au",
      "vitalegal.com.au"
    ]
  },
  {
    category: "🏭 Industrial / B2B — AU & UK",
    links: [
      "metem.com.au",
      "jsprocurementgroup.com",
      "ues.co.uk",
      "lifting365.com",
      "tjisolutions.com",
      "specialisedforce.com.au",
      "iandmsolutions.com.au"
    ]
  },
  {
    category: "🏖 Short Term Rentals — AU & NZ",
    links: [
      "livelyproperties.com.au",
      "bookabreak.com.au",
      "destinationbyronbay.com.au",
      "relaxaway.co.nz",
      "queenstownholidayhomes.co.nz"
    ]
  },
  {
    category: "💻 IT / MSP — AU & US",
    links: [
      "syncbricks.com.au",
      "itprosmanagement.com"
    ]
  },
  {
    category: "🔍 Staffing / Recruitment — UK",
    links: [
      "gerrellandhard.co.uk",
      "caminosearch.co.uk"
    ]
  },
  {
    category: "📋 Law / Consulting / Logistics — AU, NZ & UK",
    links: [
      "kreisson.com.au",
      "cognosis.co.uk",
      "tgl.co",
      "freshminds.co.uk"
    ]
  },
  {
    category: "🎨 Branding / Creative Agencies",
    links: [
      "madebyshape.co.uk",
      "darkcherrycreative.co.uk",
      "endofwork.com.au"
    ]
  },
  {
    category: "🖨 Web-to-Print / Product Configurator",
    links: [
      "printed.com",
      "printlocker.com.au",
      "mixam.com.au"
    ]
  },
  {
    category: "⚙️ Business Operations / OBM Consulting",
    links: [
      "theagile-obm.com",
      "bytebodega.com",
      "smvvirtual.com"
    ]
  },
  {
    category: "📈 SEO / Digital Marketing Agencies",
    links: [
      "ernstmedia.com",
      "ink-digital.co.uk"
    ]
  },
  {
    category: "🌡 HVAC & Plumbing — AU & UK",
    links: [
      "freoplumbing.com.au",
      "climaxair.com.au",
      "hallmarkplumbingandheating.co.uk",
      "capitalplumbing-heating.co.uk"
    ]
  }
];
