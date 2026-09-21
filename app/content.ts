export type Experience = {
  id: string;
  employer: string;
  period: string;
  role: string;
  summary: string;
  progression?: { period: string; role: string }[];
};

export const site = {
  name: "Swapnil Thapa",
  title: "Dependable software. Useful automation.",
  intro: "I build reliable software, automation, and delivery systems.",
  links: {
    github: "https://github.com/swap795",
    linkedin: "https://www.linkedin.com/in/swapnilthapa95",
  },
} as const;

export const proofPoints = [
  {
    label: "Observability scale",
    value: "10M+ logs",
    detail: "OpenSearch diagnostics",
  },
  {
    label: "Automation performance",
    value: "43% faster",
    detail: "Execution improvement",
  },
  {
    label: "Operational efficiency",
    value: "$10K+ saved",
    detail: "Annual tooling cost",
  },
  {
    label: "Product reach",
    value: "Millions served",
    detail: "Production Next.js",
  },
] as const;

export const experiences: Experience[] = [
  {
    id: "verisk",
    employer: "Verisk",
    period: "Apr 2024 - Present",
    role: "Senior Software Development Engineer in Test",
    summary:
      "At Verisk, I build the systems behind reliable delivery for complex CAD software - from AI-assisted test workflows and auto-generated API clients to observability across more than 10 million execution logs.",
    progression: [
      {
        period: "Sep 2026 - Present",
        role: "Senior Software Development Engineer in Test",
      },
      {
        period: "May 2025 - Aug 2026",
        role: "Software Development Engineer in Test II",
      },
      {
        period: "Apr 2024 - Apr 2025",
        role: "Software Development Engineer in Test",
      },
    ],
  },
  {
    id: "paytronix",
    employer: "Paytronix Systems",
    period: "May 2022 - Dec 2023",
    role: "Software Engineer in Test",
    summary:
      "At Paytronix, I built automation and CI/CD systems that improved execution performance by 43%, cut deployment time from more than 10 hours to 3, and replaced third-party tooling to save over $10K annually.",
  },
  {
    id: "church",
    employer: "The Church of Jesus Christ of Latter-day Saints",
    period: "Jan 2021 - Apr 2022",
    role: "Software Dev Engineer",
    summary:
      "At the Church, I helped build a production Next.js application serving millions of users, delivering full-stack experiences across rich-text editing, real-time notifications, cloud services, and responsive React interfaces.",
    progression: [
      {
        period: "Aug 2021 - Apr 2022",
        role: "Software Dev Engineer",
      },
      {
        period: "Jan 2021 - Jul 2021",
        role: "Web Development Intern",
      },
    ],
  },
];

export const featuredProject = {
  title: "Glove Controlled Car",
  eyebrow: "Embedded systems + motion",
  description: "Gesture-controlled RC car. MPU-6050 + dual HC-05 Bluetooth. Working C/Arduino prototype.",
  story: [
    {
      label: "Context",
      value: "Hand gestures control the car.",
    },
    {
      label: "Build",
      value: "MPU-6050 + dual HC-05 Bluetooth.",
    },
    {
      label: "Result",
      value: "A working C and Arduino system.",
    },
  ],
  tags: ["C", "Arduino", "MPU-6050", "Bluetooth"],
  github: "https://github.com/swap795",
} as const;

export const about = {
  eyebrow: "01 / About",
  body: "I connect product engineering, automation, and delivery.",
  principle: "Setbacks are feedback. Learn, adjust, repeat.",
} as const;
