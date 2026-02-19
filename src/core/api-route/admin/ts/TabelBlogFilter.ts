import { categoriesBlog } from "@/core/features/admin/assets/mock/categoriesBlog";
import { discountFilterTs } from "../handlers/tabel/filterProductTabel";

export interface TabelBlogFilter {
  search?: string;
  category?: categoriesBlog;
  page?: number;
  limit?: number;
  minPrice?: number;
  maxPrice?: number;
  discountFilter?: discountFilterTs;
  size?: string;
  sortOrder?: "desc" | "asc";
  gender?: "men" | "women";
}
