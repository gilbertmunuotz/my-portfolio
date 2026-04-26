export type Experience = {
  id: string
  year: string
  role: string
  company: string
  url?: string
}

export const experiences: Experience[] = [
  {
    id: "workspace-2023",
    year: "2023 - 2024",
    role: "Computer Technician",
    company: "WorkSpace Computers Limited",
  },
  {
    id: "freelance-2024",
    year: "2024 - Present",
    role: "Independent Full-Stack Developer (Contract)",
    company: "Freelance",
  },
  {
    id: "emai-2025",
    year: "June 2025 - September 2025",
    role: "Developer - emAI Conference",
    company: "EnhanceMind AI Conference",
    url: "https://emaiconference.com",
  },
  {
    id: "momentam-2025",
    year: "Oct 2025 - Present",
    role: "Lead Full-Stack Developer",
    company: "Momentam.io",
    url: "https://momentam.io",
  },
  {
    id: "sgi-2026",
    year: "March 2026 - Present",
    role: "Lead Full-Stack Developer",
    company: "SGI Africa",
    url: "https://sgi-africa.com",
  },
]
