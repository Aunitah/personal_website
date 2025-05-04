import { LucideIcon } from 'lucide-react'

export interface PostFrontmatter {
  title: string
  date: string
  description?: string
  slug: string
}

export interface Post extends PostFrontmatter {
  content: string
}

export interface Project {
  title: string;
  repo: string;
  description: string;
  tags: string[];
  category: string;
  featured?: boolean;
  slug?: string;
}
export interface Interest {
  icon: LucideIcon
  title: string
  description: string
}