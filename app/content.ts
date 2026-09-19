export type Experience = {
  id: string;
  employer: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
  progression?: { period: string; role: string }[];
};

export const site = {
  name: "Swapnil Thapa",
  descriptor: "Software + quality engineering",
  title: "Dependable software. Useful automation.",
  intro:
    "I build dependable software and automation teams can trust - connecting computer engineering foundations, product thinking, and quality systems into maintainable work that ships.",
  links: {
    github: "https://github.com/swap795",
    linkedin: "https://www.linkedin.com/in/swapnilthapa95",
  },
} as const;

export const proofPoints = [
  {
    label: "Current scope",
    value: "Senior SDET",
    detail: "Verisk",
  },
  {
    label: "Specialty",
    value: "Automation + release quality",
    detail: "Software systems",
  },
  {
    label: "Foundation",
    value: "Computer engineering",
    detail: "BYU-Idaho",
  },
] as const;

export const experiences: Experience[] = [
  {
    id: "verisk",
    employer: "Verisk",
    period: "Apr 2024 - Present",
    role: "Senior Software Development Engineer in Test",
    summary:
      "Automation and release quality for a complex CAD-based product, with AI-assisted approaches to risk analysis, targeted testing, and test generation.",
    highlights: [
      "Own automation and release quality for a complex CAD-based product.",
      "Develop AI-assisted approaches to risk analysis, targeted testing, and test generation.",
    ],
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
      "Expanded the automated test suite and helped teammates make progress with practical test-automation guidance.",
    highlights: [
      "Expanded the automated test suite.",
      "Helped teammates make progress with practical test-automation guidance.",
    ],
  },
  {
    id: "church",
    employer: "The Church of Jesus Christ of Latter-day Saints",
    period: "Aug 2021 - Apr 2022",
    role: "Software Dev Engineer",
    summary:
      "Built and maintained member-facing web experiences while working across product behavior and delivery.",
    highlights: [
      "Developed a web application to help members connect with families, classes, and responsibilities.",
      "Consolidated blogs, articles, magazines, and other resources into the app.",
    ],
  },
  {
    id: "internship",
    employer: "The Church of Jesus Christ of Latter-day Saints",
    period: "Jan 2021 - Jul 2021",
    role: "Web Development Intern",
    summary:
      "Built a web-development foundation through debugging, interface refinement, and collaborative delivery.",
    highlights: [
      "Debugged, troubleshot, and refined dynamic web apps and user interfaces.",
      "Worked in an Agile software-development environment with project and cross-functional teams.",
    ],
  },
];

export const featuredProject = {
  title: "Glove Controlled Car",
  eyebrow: "Embedded systems + motion",
  description:
    "A motion-sensor RC car driven by the gestures of a hand - a hardware project that connects sensing, communication, and physical response.",
  story: [
    {
      label: "Context",
      value: "Hand gestures become the input for a small RC car.",
    },
    {
      label: "Build",
      value: "An MPU-6050 gyroscope sends motion data through two HC-05 Bluetooth modules.",
    },
    {
      label: "Result",
      value: "A working gesture-controlled car built with C, Arduino, and supporting hardware.",
    },
  ],
  tags: ["C", "Arduino", "MPU-6050", "Bluetooth"],
  github: "https://github.com/swap795",
} as const;

export const about = {
  eyebrow: "01 / About",
  title: "Reliability is a product feature.",
  body: "I build reliable desktop and web software by connecting quality engineering, automation, and delivery. My computer engineering foundation helps me move between product behavior, test systems, release pipelines, and diagnostic tooling.",
  principle:
    'I call my working principle the “video game effect”: treat each setback as feedback, learn the pattern, and keep iterating until the system works.',
} as const;
