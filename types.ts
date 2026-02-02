
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  metric: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Languages' | 'ML Frameworks' | 'Tools' | 'Statistics';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}
