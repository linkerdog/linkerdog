export type ProjectId = "agenthub" | "rara" | "saas";

export interface Project {
  id: ProjectId;
  name: string;
  repositoryUrl: string;
  primaryUrl: string;
  primaryLabel: string;
  logoImageUrl?: string;
  accent: "blue" | "green" | "red";
}

export const projects: Project[] = [
  {
    id: "agenthub",
    name: "AgentHub",
    repositoryUrl: "https://github.com/hawkingrei/agenthub",
    primaryUrl: "https://doc.agenthub.hawkingrei.com/",
    primaryLabel: "Docs",
    logoImageUrl: "/logos/agenthub.jpg",
    accent: "blue",
  },
  {
    id: "rara",
    name: "RARA",
    repositoryUrl: "https://github.com/hawkingrei/rara",
    primaryUrl: "https://github.com/hawkingrei/rara",
    primaryLabel: "Repository",
    logoImageUrl: "/logos/rara.png",
    accent: "green",
  },
  {
    id: "saas",
    name: "Linkerdog SaaS",
    repositoryUrl: "https://github.com/linkerdog/saas",
    primaryUrl: "https://app.linkerdog.work/",
    primaryLabel: "Open SaaS",
    logoImageUrl: "/logos/linkerdog.svg",
    accent: "red",
  },
];
