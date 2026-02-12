import { categoryP } from "@prisma/client";

export interface ProductType {
  productName: string;
  description: string;
  fullDescription: string;
  price: number;
  discount: number;
  mainImage: string;
  otherImages: string[];
  gender: "men" | "women";
  category: categoryP;
}
