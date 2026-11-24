/**
 * All page copy and links in one place. Every claim here resolves to a
 * verified live page, a verifiable figure, or a plainly-worded fact.
 * Do not add claims without a verified source.
 */

export const profile = {
  name: "Nur Toha Mubarak",
  shortName: "Bara",
  age: 23,
  location: "Jakarta Utara, Indonesia",
  email: "tohamubarak110@gmail.com",
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/nur-toha-mubarak-b8329a280",
  },
  githubAccounts: [
    {
      handle: "BaraGitDoodle-bit",
      url: "https://github.com/BaraGitDoodle-bit",
      note: "Main account — projects and submissions.",
      primary: true,
    },
    {
      handle: "theandroidaiarchitect-dev",
      url: "https://github.com/theandroidaiarchitect-dev",
      note: "Android × AI work.",
      primary: false,
    },
    {
      handle: "dokumenhilangid-blip",
      url: "https://github.com/dokumenhilangid-blip",
      note: "Additional account.",
      primary: false,
    },
  ],
};

export const hero = {
  title: "Nur Toha Mubarak",
  statement: "Fire watcher by trade. AI builder off shift.",
  pitch:
    "HSE Fire Watcher on high-risk field work, building AI tools with an AI copilot — shipped from a phone, with no paid APIs.",
  logLine: "Field log — Jakarta Utara, Indonesia · HSE Fire Watcher since Jan 2024",
  portraitCaption: "Nur Toha Mubarak — HSE Fire Watcher, AI builder.",
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm Nur Toha Mubarak, 23, based in Jakarta Utara, Indonesia. By trade I work as an HSE Fire Watcher on high-risk field jobs. Off shift, I build end to end with an AI copilot: design, code, shipping, and iteration.",
    "Recent work spans a developer tool that routes prompts between on-device and cloud AI, a daily text-adventure game on Reddit, machine-learning competition entries on Kaggle, and security research reported through responsible disclosure.",
  ],
};

export type ProjectLink = { label: string; url: string };

export const nanoOrCloud = {
  name: "NanoOrCloud",
  kind: "Developer tool",
  description:
    "A developer tool that routes a task prompt between on-device Gemini Nano and the cloud via Firebase AI Logic, with per-task routing, a monthly savings projection, and TypeScript/JSON export.",
  tags: ["Vite", "React", "TypeScript", "Firebase SDK 12.19.0", "Firebase Hosting"],
  outcome:
    "Submitted solo to the HybridAI hackathon on Devpost, 21 November 2026. Live app deployed on Firebase Hosting.",
  links: [
    { label: "Live app", url: "https://offrecord-4161f.web.app" },
    { label: "Repository", url: "https://github.com/BaraGitDoodle-bit/nanoorcloud" },
    { label: "Devpost", url: "https://devpost.com/software/nanoorcloud" },
    { label: "Demo video", url: "https://www.youtube.com/watch?v=FkcT_pua0Qg" },
  ] satisfies ProjectLink[],
};

export const dailyDrift = {
  name: "Daily Drift",
  kind: "Daily game on Reddit",
  description:
    "A daily text-adventure game on Reddit, published as u/NateLRiver_NTM in the subreddit r/daily_drift_game (version 0.0.5).",
  outcome:
    "Submitted solo to the Reddit Game of the Day hackathon on Devpost, 21 November 2026.",
  links: [
    { label: "Devpost", url: "https://devpost.com/software/daily-drift" },
    { label: "Demo video", url: "https://www.youtube.com/watch?v=uMGrd2d8CZQ" },
  ] satisfies ProjectLink[],
};

export const kaggle = {
  heading: "Kaggle competition work",
  note: "Competition entries under the verified Kaggle account dokumenhilang.",
  rows: [
    {
      competition: "Name That LLM",
      score: "0.514",
      scoreLabel: "best public score",
      ref: "58772577",
    },
    {
      competition: "Squares in Squares",
      score: "27.4888439686",
      scoreLabel: "public score",
      ref: "58787047",
    },
  ],
};

export const securityResearch = {
  heading: "Security research",
  text: "Responsible-disclosure bug bounty reports, including work relating to Relay Protocol and Monolith / Mantis. Reports are submitted through responsible-disclosure channels; details are intentionally not published here.",
};

/**
 * Sourcing note (report only — not rendered on the page): the Field Record
 * facts below are worded as on Bara's public page (bara-c53.pages.dev) and
 * corroborated by his LinkedIn, verified live. Education is SMAN 110 only,
 * per Bara's instruction of 25 Nov 2026.
 */
export const fieldRecord = {
  heading: "Field record",
  experience: {
    role: "HSE Fire Watcher",
    employer: "PT Bina Karya Prima",
    placement: "Placement via PT Bina Cipta Abadi",
    period: "Jan 2024 – present",
    location: "Kota Bekasi, Jawa Barat",
  },
  educationCompleted: {
    school: "SMAN 110 Jakarta Utara",
    field: "Social Sciences",
    period: "Aug 2018 – May 2021",
  },
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Field record", href: "#record" },
  { label: "Contact", href: "#contact" },
];
