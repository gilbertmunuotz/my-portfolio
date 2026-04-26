export type Project = {
  title: string
  description: string
  tech: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: "Momentam Apps(Web & Mobile)",
    description:
      "Real-time event photography marketplace where users can book photographers, select photo packages, and receive images instantly, while photographers manage bookings and deliver photos seamlessly.",
    tech: ["React Native", "Expo", "Node.js", "JWT", "REST API's"],
    link: "https://momentam.io",
  },
  {
    title: "emAI Conference Website",
    description:
      "Official event platform for the EnhanceMind AI Conference, designed to support large-scale engagement, Hands-on Workshops, speaker showcases, Networking Opportunities and inclusive AI-focused programming.",
    tech: ["Next.js", "Shadcn UI", "Framer Motion", "Tailwind CSS"],
    link: "https://emaiconference.com",
  },
  {
    title: "Fizbuz",
    description:
      "A full-stack, responsive expense tracking web application with intuitive UI, featuring interactive income and expense visualizations, monthly summaries, categorized transaction management, and real-time updates.",
    tech: ["React.js", "Redux Toolkit", "Express.js", "Sequelize", "Chart.js", "MySQL", "Render"],
    link: "https://fizbuz-delta.vercel.app/login",
  },
  {
    title: "RemoteOK Mobile App",
    description:
      "Mobile app that aggregates remote job listings from public APIs, allowing users to browse categorized opportunities and apply via external links.",
    tech: ["React Native", "Redux Toolkit", "Nativewind", "Expo"],
    link: "https://github.com/gilbertmunuotz/remoteok",
  },
  {
    title: "Cyra Recipe",
    description:
      "Online Recipe search app that retrieves detailed cooking instructions, ingredient lists and time frame based on user input queries. Just type in your ingredients or dish name and browse through a variety of recipes tailored to meet your specific needs.",
    tech: ["React", "Tailwind CSS", "Vercel", "REST API's",],
    link: "https://dukani-eight.vercel.app",
  },
  {
    title: "SGI Apps(Web & Mobile)",
    description:
      "A cross-platform digital VICOBA system enabling groups to manage savings, supporting contributions, and internal transactions seamlessly.",
    tech: ["React", "React Native", "Expo", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    link: "https://sgi-africa.com",
  },
]
