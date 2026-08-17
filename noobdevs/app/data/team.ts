export type Member = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  gradient: string;
  initials: string;
};

export const team: Member[] = [
  {
    name: "Ali Tayyab",
    role: "Software Engineer · DevOps",
    bio: "Builds robust software systems and the pipelines that ship them reliably.",
    skills: ["Software Engineering", "DevOps", "Cloud"],
    gradient: "from-red-500 via-rose-500 to-red-600",
    initials: "AT",
  },
  {
    name: "Ahmed",
    role: "AI/ML Engineer · DevOps",
    bio: "Turns raw data into intelligent models and keeps them running in production.",
    skills: ["AI/ML", "MLOps", "DevOps"],
    gradient: "from-rose-500 via-red-500 to-amber-500",
    initials: "A",
  },
  {
    name: "Talha",
    role: "AI/ML Engineer · DevOps",
    bio: "Designs machine-learning systems that scale from prototype to production.",
    skills: ["AI/ML", "Data Engineering", "DevOps"],
    gradient: "from-red-600 via-rose-600 to-pink-500",
    initials: "T",
  },
  {
    name: "Muzammil",
    role: "AI/ML Engineer · DevOps",
    bio: "Crafts production-grade AI with airtight deployment practices.",
    skills: ["Machine Learning", "MLOps", "DevOps"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    initials: "M",
  },
  {
    name: "Wajahat",
    role: "Application · AI",
    bio: "Ships polished applications with AI woven into the experience.",
    skills: ["Application Development", "AI Integration", "Full-Stack"],
    gradient: "from-red-500 via-fuchsia-500 to-rose-500",
    initials: "W",
  },
  {
    name: "Hamza",
    role: "Management · Marketing",
    bio: "Aligns engineering with strategy, growth, and the customer.",
    skills: ["Product Management", "Marketing", "Strategy"],
    gradient: "from-rose-600 via-red-500 to-orange-500",
    initials: "H",
  },
];
