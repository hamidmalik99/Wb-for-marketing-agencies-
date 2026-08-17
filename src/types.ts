export type ProjectCategory =
  | 'All'
  | 'Structural Engineering'
  | 'Home Services'
  | 'HVAC & Plumbing'
  | 'ISP'
  | 'Real Estate'
  | 'Property Management'
  | 'Short Term Rental'
  | 'Law'
  | 'Industrial'
  | 'Industrial Tools'
  | 'IT / MSP'
  | 'HR / Workplace Consulting'
  | 'Mobile Repair'
  | 'Limo / Party Bus'
  | 'Skincare / Med Spa'
  | 'Nonprofit'
  | 'Staffing'
  | 'Professional Services'
  | 'Branding / Creative'
  | 'Web-to-Print'
  | 'Business Operations'
  | 'SEO / Digital Marketing'
  | 'Reference';

export interface Metric {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  region: 'Australia' | 'United Kingdom' | 'United States' | 'Global' | 'Europe' | 'New Zealand';
  countryCode: 'AU' | 'UK' | 'US' | 'EU' | 'NZ' | 'GLOBAL';
  summary: string;
  challenge: string;
  solution: string;
  techStack: string[];
  outcomes: string[];
  metrics: Metric[];
  featured: boolean;
  accentColor: string;
  imageBg: string;
  testimonial?: Testimonial;
  liveUrl?: string;
  deliverables: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  highlights: string[];
}
