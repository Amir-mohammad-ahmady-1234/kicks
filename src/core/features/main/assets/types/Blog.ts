import { BlogStatus } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";

export type BlogDataTs = {
  id: string;
  title: string;
  excerpt: string;
  Image: string;
  author: string;
  category: string;
  status: BlogStatus;
  tags: JsonValue;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  slug: string;
};
