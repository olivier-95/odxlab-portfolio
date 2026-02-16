// ODxLab Portfolio - TypeScript Types

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export interface Skill {
  name: string;
  category?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  siteDescription: string;
  authorName: string;
  socialLinks: SocialLink[];
}
