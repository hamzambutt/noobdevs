export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: "AI / ML" | "DevOps & Cloud" | "Full-Stack" | "OSINT";
  description: string;
  tags: string[];
  metrics?: string;
  videoUrl?: string; // Replace with your .mp4 / .webm file path or video embed
  previewGif?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "specter",
    title: "Specter",
    subtitle: "Demo Walkthrough",
    category: "OSINT",
    description:
      "A live demo walkthrough of Specter — see the full feature set in action.",
    tags: ["OSINT"],
    videoUrl: "https://player.vimeo.com/video/1219668398?title=0&byline=0&portrait=0&badge=0&autopause=1&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
    liveUrl: "#contact",
    featured: true,
  },
  {
    id: "sentinel-ai",
    title: "Sentinel AI",
    subtitle: "Enterprise LLM Guardrail & Evaluation Engine",
    category: "AI / ML",
    description:
      "Real-time toxicity filtering, hallucination detection, and latency-optimized routing across multi-model AI pipelines.",
    tags: ["PyTorch", "Python", "FastAPI", "OpenAI", "Docker"],
    metrics: "45ms median latency",
    videoUrl: "", // Hook up your video URL or file path here (e.g. /videos/sentinel.mp4)
    liveUrl: "#contact",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "cloud-mesh",
    title: "OmniMesh DevOps",
    subtitle: "Automated Multi-Cloud Kubernetes Orchestrator",
    category: "DevOps & Cloud",
    description:
      "Zero-downtime canary deployment pipeline with automated rollback, observability telemetry, and auto-scaling clusters.",
    tags: ["Kubernetes", "Docker", "AWS", "Terraform", "Go"],
    metrics: "99.99% deployment uptime",
    videoUrl: "", // Hook up your video URL or file path here
    liveUrl: "#contact",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "neural-analytics",
    title: "PulseFlow Intelligence",
    subtitle: "High-Throughput Real-Time Event Pipeline",
    category: "Full-Stack",
    description:
      "Distributed data streaming dashboard visualizing millions of time-series transactions with sub-second aggregate queries.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Redis"],
    metrics: "1.2M events/sec capacity",
    videoUrl: "", // Hook up your video URL or file path here
    liveUrl: "#contact",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "vision-pipeline",
    title: "AcuVision Edge",
    subtitle: "Real-Time Computer Vision & Object Segmentation",
    category: "AI / ML",
    description:
      "Ultra-low power edge AI model for automated industrial quality inspection with instant telemetry alerts.",
    tags: ["PyTorch", "OpenCV", "Python", "Docker", "Edge AI"],
    metrics: "60 FPS on edge TPU",
    videoUrl: "",
    liveUrl: "#contact",
    featured: false,
  },
];
