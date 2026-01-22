
export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Cloud' | 'DevOps' | 'Coding' | 'System';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}
