import { categoryP } from "@prisma/client";
import { discountFilterTs } from "../handlers/tabel/filterTabel";

export interface TabelFilter {
  search?: string;
  category?: categoryP;
  page?: number;
  limit?: number;
  minPrice?: number;
  maxPrice?: number;
  discountFilter?: discountFilterTs;
  size?: string;
  sortOrder?: "desc" | "asc";
  gender?: "men" | "women";
}
