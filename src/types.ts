export interface PortfolioItem {
  id: string;
  title: string;
  category: "AI Integration" | "Workflow Automation" | "Fullstack Web App";
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  campaignContext?: string; // e.g. "Sent out to 500 SaaS founders with 62% open rate"
  architectureFlow: string[]; // Step-by-step pipeline steps
  details: string[]; // Details of implementation and business impact
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: string; icon?: string }[];
}

export interface AnalysisResponse {
  proposal: string;
  strategy: string[];
  milestones: { phase: string; duration: string }[];
  tools: string[];
}

export interface CMSProject {
  title: string;
  url: string;
  tags: string[];
  description: string;
  location: string;
}

export interface IndustryGroup {
  category: string;
  links: string[];
}
