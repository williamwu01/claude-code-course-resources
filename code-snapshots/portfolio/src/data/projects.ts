export type Section = {
  title: string;
  body: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ProjectFull = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  gradient: string;
  year: string;
  role: string;
  timeline: string;
  stack: string[];
  overview: string;
  sections: Section[];
  metrics: Metric[];
};

export const projects: ProjectFull[] = [
  {
    slug: "ridelink",
    title: "RideLink",
    tag: "Booking Platform",
    description:
      "Ride booking platform for Vancouver with SMS-powered booking and notifications. Live at ridelinkyvr.com.",
    gradient: "from-violet-500 via-fuchsia-500 to-rose-400",
    year: "2026",
    role: "Solo Developer",
    timeline: "2026",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Twilio", "Vercel"],
    overview:
      "RideLink is a ride booking platform serving the Vancouver area, live at ridelinkyvr.com. The goal was to make booking a ride as frictionless as sending a text: customers book through the site, and every confirmation, reminder, and update arrives instantly through Twilio-powered SMS.",
    sections: [
      {
        title: "SMS-First Communication with Twilio",
        body: "Twilio handles the entire communication layer: booking confirmations, ride reminders, and status updates all flow through SMS. Handling Twilio webhooks server-side in Next.js API routes keeps the booking state in sync with what customers see on their phones, so a rider never has to open the site to know their booking went through.",
      },
      {
        title: "Supabase as the Backbone",
        body: "All booking, customer, and scheduling data lives in Supabase (PostgreSQL). Supabase's client libraries and row-level security made it possible to ship a secure data layer quickly without maintaining a separate backend, and its realtime features keep the admin view current as new bookings land.",
      },
      {
        title: "Shipping Fast on Vercel",
        body: "The site is built with Next.js and TypeScript and deployed on Vercel. Server-side rendering keeps the public pages fast and SEO-friendly for local search, while the same codebase hosts the API routes that process bookings and talk to Twilio.",
      },
    ],
    metrics: [
      { value: "SMS", label: "booking confirmations via Twilio" },
      { value: "24/7", label: "automated booking flow" },
      { value: "1", label: "codebase for site, API, and admin" },
      { value: "Live", label: "at ridelinkyvr.com" },
    ],
  },
  {
    slug: "taskbuddy",
    title: "TaskBuddy",
    tag: "Productivity",
    description:
      "A task management app for organizing work and staying on top of what matters.",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    year: "2026",
    role: "Solo Developer",
    timeline: "2026",
    stack: ["Next.js", "TypeScript"],
    overview:
      "TaskBuddy is a task management app focused on making day-to-day organization simple: capture tasks quickly, group them into projects, and see at a glance what needs attention next.",
    sections: [
      {
        title: "Designed Around Quick Capture",
        body: "The core loop of any task app is capture, organize, complete. TaskBuddy keeps the capture step as close to zero friction as possible so tasks actually make it into the system instead of living in your head.",
      },
      {
        title: "Built with Next.js and TypeScript",
        body: "The app is built end to end in TypeScript on Next.js, with a fully typed data model that keeps the UI and data layer in lockstep as features evolve.",
      },
    ],
    metrics: [
      { value: "2026", label: "launched" },
      { value: "TS", label: "fully typed end to end" },
      { value: "0", label: "friction task capture" },
      { value: "1", label: "place for everything" },
    ],
  },
  {
    slug: "pulsehire",
    title: "PulseHire AI",
    tag: "AI · Job Board",
    description:
      "AI interviewing job board built with Next.js, with a full admin dashboard, API integrations, and GA4/GTM analytics.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    year: "2025",
    role: "Project Manager | Lead Developer",
    timeline: "May 2025 - Mar 2026",
    stack: ["Next.js", "TypeScript", "GA4", "Google Tag Manager", "Figma"],
    overview:
      "PulseHire AI is an AI interviewing job board based in Surrey, BC. As project manager and lead developer, I owned the product from Figma prototypes through production: the candidate-facing job board, the admin dashboard that runs it, and the analytics that measure it.",
    sections: [
      {
        title: "The Job Board and API Integrations",
        body: "The core product is a Next.js job board integrated with AI interviewing APIs, letting candidates apply and complete AI-driven interviews in one flow. Building it in Next.js kept the public pages fast and SEO-friendly, which mattered for a product that lives or dies by organic job-seeker traffic.",
      },
      {
        title: "An Admin Dashboard That Runs the Business",
        body: "Behind the job board sits a robust admin dashboard for managing the applications flowing through the platform: reviewing candidates, managing postings, and keeping the pipeline moving. It was designed and prototyped in Figma alongside the main site so the two always felt like one product.",
      },
      {
        title: "Analytics, SEO, and Process",
        body: "I set up GA4 and Google Tag Manager to track site visits and conversion, and applied SEO and performance best practices to grow organic reach. On the process side, I created detailed timelines and managed the team's workflow with Kanban boards and Gantt charts, and migrated legacy WordPress and Wix sites into the new stack for flexibility.",
      },
    ],
    metrics: [
      { value: "11 mo", label: "from kickoff to handoff" },
      { value: "GA4", label: "analytics and GTM from day one" },
      { value: "2", label: "products shipped: job board + admin" },
      { value: "SEO", label: "best practices baked in" },
    ],
  },
  {
    slug: "webteck",
    title: "Vancouver WebTeck",
    tag: "Client Work · Agency",
    description:
      "Responsive client websites built end to end with React, Next.js, WordPress, and Shopify, designed in Figma.",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    year: "2024",
    role: "Web Developer | UI/UX Designer",
    timeline: "May 2024 - Mar 2026",
    stack: ["React", "Next.js", "PHP", "WordPress", "Shopify", "Figma", "Tailwind CSS"],
    overview:
      "At Vancouver WebTeck I built dynamic, responsive client websites end to end: front-end and back-end development, CMS builds, and the design work that came before any code. Every project balanced performance, accessibility, and the client's brand.",
    sections: [
      {
        title: "End-to-End Builds",
        body: "Projects spanned modern stacks (React, Next.js, Tailwind CSS) and CMS platforms (WordPress, Shopify, PHP), chosen per client based on what they could maintain after handoff. The constant across all of them was performance, accessibility, and clean, scalable code.",
      },
      {
        title: "Design Before Development",
        body: "I designed wireframes and prototypes in Figma for every client project, along with site maps and color boards matched to each brand. Starting in design meant clients signed off on the experience before development started, which kept builds fast and revisions small.",
      },
    ],
    metrics: [
      { value: "2 yrs", label: "of client projects" },
      { value: "5+", label: "platforms: React, Next.js, PHP, WordPress, Shopify" },
      { value: "Figma", label: "wireframes to prototypes to build" },
      { value: "100%", label: "responsive, accessible delivery" },
    ],
  },
  {
    slug: "shar-lab",
    title: "Shar Lab",
    tag: "Lab",
    description:
      "A project from the lab. Details coming soon.",
    gradient: "from-pink-400 via-purple-500 to-indigo-500",
    year: "2024",
    role: "Developer",
    timeline: "2024",
    stack: ["TypeScript"],
    overview:
      "Shar Lab case study coming soon.",
    sections: [
      {
        title: "About This Project",
        body: "Full write-up in progress.",
      },
    ],
    metrics: [
      { value: "Soon", label: "full case study" },
    ],
  },
];