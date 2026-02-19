import { BlogStatus } from "@prisma/client";

export type BlogItemType = {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  Image: string;
  fallback: string;
  author: string;
  category: string;
  createdAt: string;
  status: string;
  views: string;
  tags?: string;
  slug?: string;
};

export type BlogItemTypeWithEnum = {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  Image: string;
  fallback: string;
  author: string;
  category: string;
  createdAt: string;
  status: BlogStatus;
  views: string;
  tags?: string;
  slug?: string;
};
export interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  Image: string;
  author: string;
  category: string;
  tags: string[];
  status: BlogStatus;
}
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  Image: string;
  author: string;
  category: string;
  tags: string[];
  createdAt: string;
  status: BlogStatus;
  views: number;
}

export interface TabelBlogsTs {
  ShowFilter?: boolean;
  data?: BlogPost[];
  pagination?: {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
  };
}
